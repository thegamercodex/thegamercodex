"use client";

import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import { Search, X, ArrowUpDown, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { GameCard } from "./GameCard";
import type { Game, Locale, MonetizationModel } from "@/types";

interface GameExplorerProps {
  games: Game[];
  locale: Locale;
  /** gameId -> date added to the codex (YYYY-MM-DD), for date sorting. */
  addedDates: Record<string, string>;
}

type SortKey = "date-desc" | "date-asc" | "name-asc" | "name-desc";

const CANONICAL_GENRES = [
  "arpg",
  "soulslike",
  "mmo",
  "moba",
  "fps",
  "gacha",
  "survival-craft",
  "open-world",
  "roguelike",
] as const;

const GENRE_LABELS: Record<string, string> = {
  arpg: "ARPG",
  soulslike: "Soulslike",
  mmo: "MMO",
  moba: "MOBA",
  fps: "FPS",
  gacha: "Gacha",
  "survival-craft": "Survival & Crafting",
  "open-world": "Open World",
  roguelike: "Roguelike",
};

const MONETIZATION_MODELS: MonetizationModel[] = [
  "free-to-play",
  "buy-to-play",
  "subscription",
  "freemium",
];

export function GameExplorer({ games, locale, addedDates }: GameExplorerProps) {
  const t = useTranslations("filters");
  const tMon = useTranslations("monetization");

  const [query, setQuery] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<Set<string>>(new Set());
  const [selectedMonetization, setSelectedMonetization] = useState<
    Set<MonetizationModel>
  >(new Set());
  const [sort, setSort] = useState<SortKey>("date-desc");

  const fuse = useMemo(
    () =>
      new Fuse(games, {
        keys: [
          { name: "name", weight: 2 },
          { name: "shortName", weight: 1.5 },
          { name: locale === "es" ? "taglineEs" : "taglineEn", weight: 1 },
          { name: locale === "es" ? "descriptionEs" : "descriptionEn", weight: 0.6 },
          { name: "genres", weight: 0.8 },
        ],
        threshold: 0.35,
        ignoreLocation: true,
      }),
    [games, locale],
  );

  const availableGenres = useMemo(() => {
    const present = new Set<string>();
    for (const g of games) for (const genre of g.genres) present.add(genre);
    return CANONICAL_GENRES.filter((g) => present.has(g));
  }, [games]);

  const availableMonetization = useMemo(() => {
    const present = new Set<MonetizationModel>();
    for (const g of games) present.add(g.monetization.model);
    return MONETIZATION_MODELS.filter((m) => present.has(m));
  }, [games]);

  const filtersActive =
    query.trim().length > 0 ||
    selectedGenres.size > 0 ||
    selectedMonetization.size > 0;

  const filtered = useMemo(() => {
    const trimmed = query.trim();
    const base = trimmed.length > 0 ? fuse.search(trimmed).map((r) => r.item) : games;
    return base.filter((g) => {
      if (
        selectedGenres.size > 0 &&
        !g.genres.some((genre) => selectedGenres.has(genre))
      )
        return false;
      if (
        selectedMonetization.size > 0 &&
        !selectedMonetization.has(g.monetization.model)
      )
        return false;
      return true;
    });
  }, [query, fuse, games, selectedGenres, selectedMonetization]);

  const sorted = useMemo(() => {
    const arr = [...filtered];
    const byNameAsc = (a: Game, b: Game) => a.name.localeCompare(b.name);
    const dateOf = (g: Game) => addedDates[g.id] ?? "";
    switch (sort) {
      case "name-asc":
        arr.sort(byNameAsc);
        break;
      case "name-desc":
        arr.sort((a, b) => byNameAsc(b, a));
        break;
      case "date-asc":
        arr.sort((a, b) => dateOf(a).localeCompare(dateOf(b)) || byNameAsc(a, b));
        break;
      case "date-desc":
      default:
        arr.sort((a, b) => dateOf(b).localeCompare(dateOf(a)) || byNameAsc(a, b));
        break;
    }
    return arr;
  }, [filtered, sort, addedDates]);

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) => {
      const next = new Set(prev);
      if (next.has(genre)) next.delete(genre);
      else next.add(genre);
      return next;
    });
  };

  const toggleMonetization = (model: MonetizationModel) => {
    setSelectedMonetization((prev) => {
      const next = new Set(prev);
      if (next.has(model)) next.delete(model);
      else next.add(model);
      return next;
    });
  };

  const clearAll = () => {
    setQuery("");
    setSelectedGenres(new Set());
    setSelectedMonetization(new Set());
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-subtle"
              aria-hidden
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("searchGamesPlaceholder")}
              className="w-full rounded-lg border border-border bg-muted/40 py-2 pl-9 pr-9 text-sm placeholder:text-foreground-subtle focus:border-accent/60 focus:outline-none focus:ring-1 focus:ring-accent/40"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label={t("clear")}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-foreground-subtle hover:text-foreground"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          <div className="relative shrink-0 sm:w-56">
            <ArrowUpDown
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-subtle"
              aria-hidden
            />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              aria-label={t("sortBy")}
              className="w-full cursor-pointer appearance-none rounded-lg border border-border bg-muted/40 py-2 pl-9 pr-8 text-sm text-foreground focus:border-accent/60 focus:outline-none focus:ring-1 focus:ring-accent/40"
            >
              <option value="date-desc">{t("sortDateDesc")}</option>
              <option value="date-asc">{t("sortDateAsc")}</option>
              <option value="name-asc">{t("sortNameAsc")}</option>
              <option value="name-desc">{t("sortNameDesc")}</option>
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-subtle"
              aria-hidden
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {availableGenres.map((genre) => {
            const active = selectedGenres.has(genre);
            return (
              <button
                key={genre}
                type="button"
                onClick={() => toggleGenre(genre)}
                className={`rounded-full border px-2.5 py-1 text-xs transition-colors ${
                  active
                    ? "border-accent/60 bg-accent/15 text-foreground"
                    : "border-border bg-muted/40 text-foreground-muted hover:border-border-strong hover:text-foreground"
                }`}
              >
                {GENRE_LABELS[genre] ?? genre}
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {availableMonetization.map((model) => {
            const active = selectedMonetization.has(model);
            return (
              <button
                key={model}
                type="button"
                onClick={() => toggleMonetization(model)}
                className={`rounded-full border px-2.5 py-1 text-xs transition-colors ${
                  active
                    ? "border-accent/60 bg-accent/15 text-foreground"
                    : "border-border bg-muted/40 text-foreground-muted hover:border-border-strong hover:text-foreground"
                }`}
              >
                {tMon(model)}
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
              {t("clear")}
            </button>
          )}
        </div>

        {filtersActive && (
          <div className="text-xs text-foreground-muted">
            {t("matchCountGames", { count: filtered.length })}
          </div>
        )}
      </div>

      {sorted.length === 0 ? (
        <p className="rounded-lg border border-border bg-muted/40 p-6 text-center text-sm text-foreground-muted">
          {t("noResults")}
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sorted.map((game) => (
            <GameCard key={game.id} game={game} locale={locale} />
          ))}
        </div>
      )}
    </div>
  );
}
