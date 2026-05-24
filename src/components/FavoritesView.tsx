"use client";

import Image from "next/image";
import { BadgeCheck, Heart, Star, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useFavorites, type FavoriteEntry } from "@/hooks/useFavorites";
import type { Locale } from "@/types";

export interface GameLite {
  id: string;
  name: string;
  shortName: string;
  taglineEs: string;
  taglineEn: string;
  logo: string;
  themeAccent: string;
  themeBackground: string;
  themeSecondary: string;
}

export interface ToolLite {
  id: string;
  gameId: string;
  gameName: string;
  gameAccent: string;
  name: string;
  shortName?: string;
  taglineEs: string;
  taglineEn: string;
  logo: string;
  hasLogo: boolean;
  free: boolean;
  openSource: boolean;
  official: boolean;
  essential: boolean;
}

export interface FavoritesManifest {
  games: Record<string, GameLite>;
  tools: Record<string, ToolLite>;
}

interface FavoritesViewProps {
  manifest: FavoritesManifest;
  locale: Locale;
}

export function FavoritesView({ manifest, locale }: FavoritesViewProps) {
  const { favorites, remove, hydrated } = useFavorites();
  const t = useTranslations("favorites");

  if (!hydrated) {
    return (
      <div className="pt-10 text-center text-sm text-foreground-subtle">
        {t("loading")}
      </div>
    );
  }

  if (favorites.length === 0) {
    return (
      <div className="mt-10 rounded-xl border border-border bg-muted/30 px-6 py-10 text-center">
        <Heart aria-hidden className="mx-auto h-8 w-8 text-foreground-subtle" />
        <h2 className="mt-4 text-base font-semibold">{t("emptyTitle")}</h2>
        <p className="mt-2 text-sm text-foreground-muted">{t("emptyHint")}</p>
        <Link
          href="/"
          className="mt-5 inline-flex items-center gap-2 rounded-md border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent/20"
        >
          {t("emptyCta")}
        </Link>
      </div>
    );
  }

  const games: Array<{ entry: FavoriteEntry; data: GameLite }> = [];
  const tools: Array<{ entry: FavoriteEntry; data: ToolLite }> = [];

  for (const entry of favorites) {
    if (entry.type === "game") {
      const data = manifest.games[entry.id];
      if (data) games.push({ entry, data });
    } else {
      const data = manifest.tools[`${entry.gameId}:${entry.id}`];
      if (data) tools.push({ entry, data });
    }
  }

  return (
    <div className="flex flex-col gap-10 pt-10">
      {games.length > 0 && (
        <section>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-foreground-subtle">
            {t("gamesHeading", { count: games.length })}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {games.map(({ entry, data }) => (
              <FavoriteGameRow
                key={data.id}
                game={data}
                locale={locale}
                onRemove={() => remove(entry)}
                removeLabel={t("removeAria")}
              />
            ))}
          </div>
        </section>
      )}

      {tools.length > 0 && (
        <section>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-foreground-subtle">
            {t("toolsHeading", { count: tools.length })}
          </h2>
          <div className="flex flex-col gap-2">
            {tools.map(({ entry, data }) => (
              <FavoriteToolRow
                key={`${data.gameId}:${data.id}`}
                tool={data}
                locale={locale}
                onRemove={() => remove(entry)}
                removeLabel={t("removeAria")}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function FavoriteGameRow({
  game,
  locale,
  onRemove,
  removeLabel,
}: {
  game: GameLite;
  locale: Locale;
  onRemove: () => void;
  removeLabel: string;
}) {
  const tagline = locale === "es" ? game.taglineEs : game.taglineEn;
  const initial = game.shortName.charAt(0).toUpperCase();
  return (
    <div
      className="relative flex items-center gap-3 rounded-xl border border-border bg-muted/40 p-3 transition-colors hover:border-[var(--game-accent,var(--color-accent))]/60"
      style={{ ["--game-accent" as string]: game.themeAccent }}
    >
      <Link
        href={`/${game.id}`}
        className="flex flex-1 items-center gap-3 pr-7"
      >
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border"
          style={{
            background: game.themeSecondary,
            borderColor: `${game.themeAccent}40`,
            color: game.themeAccent,
          }}
        >
          {game.logo ? (
            <Image
              src={game.logo}
              alt={`${game.name} logo`}
              width={48}
              height={48}
              className="h-full w-full object-contain p-1"
            />
          ) : (
            <span className="text-sm font-semibold">{initial}</span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-sm font-semibold">{game.name}</h3>
          {tagline && (
            <p className="mt-0.5 line-clamp-1 text-xs text-foreground-muted">
              {tagline}
            </p>
          )}
        </div>
      </Link>
      <button
        type="button"
        onClick={onRemove}
        aria-label={removeLabel}
        title={removeLabel}
        className="absolute right-2 top-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background/80 text-foreground-subtle transition-colors hover:border-rose-500/40 hover:text-rose-400"
      >
        <X aria-hidden className="h-3 w-3" />
      </button>
    </div>
  );
}

function FavoriteToolRow({
  tool,
  locale,
  onRemove,
  removeLabel,
}: {
  tool: ToolLite;
  locale: Locale;
  onRemove: () => void;
  removeLabel: string;
}) {
  const tagline = locale === "es" ? tool.taglineEs : tool.taglineEn;
  const initial = (tool.shortName ?? tool.name).charAt(0).toUpperCase();
  const t = useTranslations("tool");
  return (
    <div
      className={`relative grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-lg border px-3 py-2.5 transition-colors hover:border-[var(--game-accent,var(--color-accent))]/60 ${
        tool.official
          ? "border-sky-500/20 bg-sky-500/[0.03]"
          : "border-border bg-muted/40"
      }`}
      style={{ ["--game-accent" as string]: tool.gameAccent }}
    >
      <Link
        href={`/${tool.gameId}/tools/${tool.id}`}
        className="contents"
      >
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-md border border-border bg-background text-sm font-semibold"
          style={{ color: tool.gameAccent }}
        >
          {tool.hasLogo ? (
            <Image
              src={tool.logo}
              alt={`${tool.name} logo`}
              width={36}
              height={36}
              className="h-full w-full object-contain p-1"
            />
          ) : (
            initial
          )}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className="truncate text-sm font-semibold leading-tight">
              {tool.name}
            </h3>
            {tool.essential && (
              <Star
                className="h-3 w-3 shrink-0 fill-current text-highlight"
                aria-label={t("essential")}
              />
            )}
            {tool.official && (
              <BadgeCheck
                className="h-3 w-3 shrink-0 text-sky-400"
                aria-label={t("official")}
              />
            )}
          </div>
          <p className="mt-0.5 truncate text-xs text-foreground-muted">
            <span style={{ color: tool.gameAccent }}>{tool.gameName}</span>
            {tagline && <span className="ml-2">{tagline}</span>}
          </p>
        </div>
        <div className="hidden shrink-0 items-center gap-1.5 pr-6 text-[11px] sm:flex">
          {tool.free && (
            <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-1.5 py-0.5 font-medium text-emerald-400">
              {t("free")}
            </span>
          )}
          {tool.openSource && (
            <span className="rounded-md border border-violet-500/30 bg-violet-500/10 px-1.5 py-0.5 font-medium text-violet-400">
              {t("openSource")}
            </span>
          )}
        </div>
      </Link>
      <button
        type="button"
        onClick={onRemove}
        aria-label={removeLabel}
        title={removeLabel}
        className="absolute right-2 top-1/2 inline-flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground-subtle transition-colors hover:border-rose-500/40 hover:text-rose-400"
      >
        <X aria-hidden className="h-3 w-3" />
      </button>
    </div>
  );
}
