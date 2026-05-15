"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Fuse from "fuse.js";
import {
  ArrowUpRight,
  BookOpen,
  FileText,
  Mic,
  PlayCircle,
  Image as ImageIcon,
  Radio,
  Search,
  X,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { VideoPlayerModal } from "./VideoPlayerModal";
import { relativeTime } from "@/lib/format";
import type { Locale, Resource, ResourceType, YouTubeVideo } from "@/types";

interface ResourceGridProps {
  gameId: string;
  resources: Resource[];
  creatorIdsInCodex: string[];
  locale: Locale;
}

const TYPE_ICONS: Record<ResourceType, typeof PlayCircle> = {
  video: PlayCircle,
  article: FileText,
  guide: BookOpen,
  stream: Radio,
  podcast: Mic,
  infographic: ImageIcon,
};

export function ResourceGrid({
  gameId,
  resources,
  creatorIdsInCodex,
  locale,
}: ResourceGridProps) {
  const t = useTranslations("resources");
  const tType = useTranslations("resourceType");
  const tFilters = useTranslations("filters");
  const tCreator = useTranslations("creator");
  const [activeVideo, setActiveVideo] = useState<YouTubeVideo | null>(null);
  const [query, setQuery] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<Set<ResourceType>>(
    new Set(),
  );
  const [selectedLangs, setSelectedLangs] = useState<Set<Locale>>(new Set());
  const codexSet = new Set(creatorIdsInCodex);

  const availableTypes = useMemo(
    () => Array.from(new Set(resources.map((r) => r.type))),
    [resources],
  );
  const availableLangs = useMemo(
    () => Array.from(new Set(resources.map((r) => r.language))),
    [resources],
  );

  const fuse = useMemo(
    () =>
      new Fuse(resources, {
        keys: [
          { name: "title", weight: 2 },
          { name: "creator", weight: 1 },
          { name: locale === "es" ? "noteEs" : "noteEn", weight: 0.6 },
        ],
        threshold: 0.35,
        ignoreLocation: true,
      }),
    [resources, locale],
  );

  const filtersActive =
    query.trim().length > 0 ||
    selectedTypes.size > 0 ||
    selectedLangs.size > 0;

  const filtered = useMemo(() => {
    const trimmed = query.trim();
    const base =
      trimmed.length > 0 ? fuse.search(trimmed).map((r) => r.item) : resources;
    return base.filter((r) => {
      if (selectedTypes.size > 0 && !selectedTypes.has(r.type)) return false;
      if (selectedLangs.size > 0 && !selectedLangs.has(r.language)) return false;
      return true;
    });
  }, [query, fuse, resources, selectedTypes, selectedLangs]);

  const toggleSet = <T,>(set: Set<T>, value: T): Set<T> => {
    const next = new Set(set);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    return next;
  };

  const clearAll = () => {
    setQuery("");
    setSelectedTypes(new Set());
    setSelectedLangs(new Set());
  };

  return (
    <>
      <div className="mb-6 flex flex-col gap-3">
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-subtle"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={tFilters("searchResourcesPlaceholder")}
            className="w-full rounded-lg border border-border bg-muted/40 py-2 pl-9 pr-9 text-sm placeholder:text-foreground-subtle focus:border-accent/60 focus:outline-none focus:ring-1 focus:ring-accent/40"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label={tFilters("clear")}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-foreground-subtle hover:text-foreground"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {(availableTypes.length > 1 || availableLangs.length > 1) && (
          <div className="flex flex-wrap items-center gap-1.5">
            {availableTypes.length > 1 &&
              availableTypes.map((type) => {
                const active = selectedTypes.has(type);
                const Icon = TYPE_ICONS[type] ?? FileText;
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() =>
                      setSelectedTypes((s) => toggleSet(s, type))
                    }
                    className={`inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[11px] font-medium transition-colors ${
                      active
                        ? "border-accent/60 bg-accent/15 text-foreground"
                        : "border-border bg-muted/40 text-foreground-muted hover:border-border-strong hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-3 w-3" aria-hidden />
                    {tType(type)}
                  </button>
                );
              })}

            {availableTypes.length > 1 && availableLangs.length > 1 && (
              <span aria-hidden className="mx-1 h-4 w-px bg-border" />
            )}

            {availableLangs.length > 1 &&
              availableLangs.map((lang) => {
                const active = selectedLangs.has(lang);
                return (
                  <button
                    key={lang}
                    type="button"
                    onClick={() =>
                      setSelectedLangs((s) => toggleSet(s, lang))
                    }
                    className={`rounded-md border px-2 py-0.5 text-[11px] font-medium uppercase transition-colors ${
                      active
                        ? "border-accent/60 bg-accent/15 text-foreground"
                        : "border-border bg-muted/40 text-foreground-muted hover:border-border-strong hover:text-foreground"
                    }`}
                  >
                    {lang}
                  </button>
                );
              })}

            {filtersActive && (
              <button
                type="button"
                onClick={clearAll}
                className="ml-auto inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] text-foreground-muted hover:text-foreground"
              >
                <X className="h-3 w-3" />
                {tFilters("clear")}
              </button>
            )}
          </div>
        )}

        {filtersActive && (
          <div className="text-xs text-foreground-muted">
            {tFilters("matchCount", { count: filtered.length })}
          </div>
        )}
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-lg border border-border bg-muted/40 p-6 text-center text-sm text-foreground-muted">
          {tFilters("noResults")}
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((resource) => {
            const note = locale === "es" ? resource.noteEs : resource.noteEn;
            const TypeIcon = TYPE_ICONS[resource.type] ?? FileText;
            const isVideo =
              resource.type === "video" && Boolean(resource.youtubeId);
            const thumbnail =
              resource.thumbnail ??
              (resource.youtubeId
                ? `https://i.ytimg.com/vi/${resource.youtubeId}/hqdefault.jpg`
                : null);
            const creatorLinked =
              resource.creatorId && codexSet.has(resource.creatorId);

            const openVideo = () => {
              if (!resource.youtubeId) return;
              setActiveVideo({
                id: resource.youtubeId,
                title: resource.title,
                url: resource.url,
                thumbnail: thumbnail ?? "",
                publishedAt: resource.publishedDate ?? "",
              });
            };

            return (
              <article
                key={resource.id}
                className="group flex flex-col overflow-hidden rounded-lg border border-border bg-muted/40 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-muted/70"
              >
                {thumbnail &&
                  (isVideo ? (
                    <button
                      type="button"
                      onClick={openVideo}
                      aria-label={`${t("watchVideo")}: ${resource.title}`}
                      className="relative aspect-video w-full overflow-hidden bg-background"
                    >
                      <Image
                        src={thumbnail}
                        alt={resource.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        unoptimized={thumbnail.includes("ytimg.com")}
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 flex items-center justify-center bg-background/0 transition-colors duration-200 group-hover:bg-background/40"
                      >
                        <PlayCircle
                          className="h-12 w-12 text-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-90"
                          strokeWidth={1.5}
                        />
                      </div>
                      {resource.duration && (
                        <span className="absolute bottom-2 right-2 rounded-md bg-background/90 px-1.5 py-0.5 text-[11px] font-medium tabular-nums">
                          {resource.duration}
                        </span>
                      )}
                    </button>
                  ) : (
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative aspect-video w-full overflow-hidden bg-background"
                    >
                      <Image
                        src={thumbnail}
                        alt={resource.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        unoptimized={thumbnail.includes("ytimg.com")}
                      />
                    </a>
                  ))}

                <div className="flex flex-1 flex-col gap-2 p-3">
                  <div className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    <TypeIcon className="h-3 w-3" />
                    <span>{tType(resource.type)}</span>
                    <span aria-hidden>·</span>
                    <span>{resource.language.toUpperCase()}</span>
                    {resource.publishedDate && (
                      <>
                        <span aria-hidden>·</span>
                        <span>
                          {relativeTime(resource.publishedDate, locale)}
                        </span>
                      </>
                    )}
                  </div>

                  {isVideo ? (
                    <button
                      type="button"
                      onClick={openVideo}
                      className="text-left text-sm font-semibold leading-snug transition-colors group-hover:text-accent"
                    >
                      <span className="line-clamp-2">{resource.title}</span>
                    </button>
                  ) : (
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold leading-snug transition-colors group-hover:text-accent"
                    >
                      <span className="line-clamp-2 inline-flex items-start gap-1">
                        {resource.title}
                        <ArrowUpRight className="h-3 w-3 shrink-0 translate-y-0.5 opacity-60" />
                      </span>
                    </a>
                  )}

                  <div className="text-xs text-muted-foreground">
                    {creatorLinked && resource.creatorId ? (
                      <Link
                        href={`/${gameId}/creators/${resource.creatorId}`}
                        className="hover:text-foreground"
                      >
                        {resource.creator}
                      </Link>
                    ) : (
                      <span>{resource.creator}</span>
                    )}
                  </div>

                  {note && (
                    <p className="line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                      {note}
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      )}

      {activeVideo && (
        <VideoPlayerModal
          video={activeVideo}
          watchOnYouTubeLabel={tCreator("watchOnYouTube")}
          closeLabel={tCreator("closeVideo")}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </>
  );
}
