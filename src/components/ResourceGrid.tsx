"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  BookOpen,
  FileText,
  Mic,
  PlayCircle,
  Image as ImageIcon,
  Radio,
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
  const tCreator = useTranslations("creator");
  const [activeVideo, setActiveVideo] = useState<YouTubeVideo | null>(null);
  const codexSet = new Set(creatorIdsInCodex);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => {
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
                      <span>{relativeTime(resource.publishedDate, locale)}</span>
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
