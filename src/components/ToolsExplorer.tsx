"use client";

import { useEffect, useMemo, useState } from "react";
import Fuse from "fuse.js";
import { LayoutGrid, List, Search, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { ToolCard } from "./ToolCard";
import { ToolListItem } from "./ToolListItem";
import { categoriesById, categoryName } from "@/lib/categories";
import type { Difficulty, Locale, Tool, ToolCategory } from "@/types";

type ViewMode = "grid" | "list";
const VIEW_STORAGE_KEY = "thegamercodex:tools-view";

interface ToolsExplorerProps {
  gameId: string;
  tools: Tool[];
  categories: ToolCategory[];
  locale: Locale;
}

const DIFFICULTIES: Difficulty[] = ["beginner", "intermediate", "advanced"];

export function ToolsExplorer({
  gameId,
  tools,
  categories,
  locale,
}: ToolsExplorerProps) {
  const t = useTranslations("filters");
  const tDifficulty = useTranslations("difficulty");
  const categoryMap = useMemo(() => categoriesById(categories), [categories]);

  const [query, setQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(
    new Set(),
  );
  const [selectedDifficulties, setSelectedDifficulties] = useState<
    Set<Difficulty>
  >(new Set());
  const [onlyFree, setOnlyFree] = useState(false);
  const [onlyOpenSource, setOnlyOpenSource] = useState(false);
  const [onlyEssential, setOnlyEssential] = useState(false);
  const [view, setView] = useState<ViewMode>("list");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(VIEW_STORAGE_KEY);
      if (stored === "grid" || stored === "list") setView(stored);
    } catch {
      // localStorage may be unavailable (private mode, disabled, etc.)
    }
  }, []);

  const setViewPersistent = (next: ViewMode) => {
    setView(next);
    try {
      window.localStorage.setItem(VIEW_STORAGE_KEY, next);
    } catch {
      // ignore
    }
  };

  const fuse = useMemo(
    () =>
      new Fuse(tools, {
        keys: [
          { name: "name", weight: 2 },
          { name: "shortName", weight: 1.5 },
          { name: locale === "es" ? "taglineEs" : "taglineEn", weight: 1 },
          { name: "tags", weight: 0.6 },
        ],
        threshold: 0.35,
        ignoreLocation: true,
      }),
    [tools, locale],
  );

  const filtersActive =
    query.trim().length > 0 ||
    selectedCategories.size > 0 ||
    selectedDifficulties.size > 0 ||
    onlyFree ||
    onlyOpenSource ||
    onlyEssential;

  const filtered = useMemo(() => {
    const trimmed = query.trim();
    const base = trimmed.length > 0 ? fuse.search(trimmed).map((r) => r.item) : tools;
    return base.filter((tool) => {
      if (selectedCategories.size > 0 && !selectedCategories.has(tool.category))
        return false;
      if (
        selectedDifficulties.size > 0 &&
        !selectedDifficulties.has(tool.difficulty)
      )
        return false;
      if (onlyFree && !tool.free) return false;
      if (onlyOpenSource && !tool.openSource) return false;
      if (onlyEssential && !tool.essential) return false;
      return true;
    });
  }, [
    query,
    fuse,
    tools,
    selectedCategories,
    selectedDifficulties,
    onlyFree,
    onlyOpenSource,
    onlyEssential,
  ]);

  const toggleSet = <T,>(set: Set<T>, value: T): Set<T> => {
    const next = new Set(set);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    return next;
  };

  const clearAll = () => {
    setQuery("");
    setSelectedCategories(new Set());
    setSelectedDifficulties(new Set());
    setOnlyFree(false);
    setOnlyOpenSource(false);
    setOnlyEssential(false);
  };

  const grouped = useMemo(() => {
    const groups = new Map<string, Tool[]>();
    for (const tool of filtered) {
      const list = groups.get(tool.category) ?? [];
      list.push(tool);
      groups.set(tool.category, list);
    }
    return categories
      .filter((c) => groups.has(c.id))
      .map((c) => ({ category: c, tools: groups.get(c.id) ?? [] }));
  }, [filtered, categories]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3">
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-subtle"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("searchToolsPlaceholder")}
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

        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => {
            const active = selectedCategories.has(cat.id);
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() =>
                  setSelectedCategories((s) => toggleSet(s, cat.id))
                }
                className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs transition-colors ${
                  active
                    ? "border-accent/60 bg-accent/15 text-foreground"
                    : "border-border bg-muted/40 text-foreground-muted hover:border-border-strong hover:text-foreground"
                }`}
              >
                {cat.icon && <span aria-hidden>{cat.icon}</span>}
                {categoryName(cat, locale)}
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {DIFFICULTIES.map((d) => {
            const active = selectedDifficulties.has(d);
            return (
              <button
                key={d}
                type="button"
                onClick={() =>
                  setSelectedDifficulties((s) => toggleSet(s, d))
                }
                className={`rounded-md border px-2 py-0.5 text-[11px] font-medium transition-colors ${
                  active
                    ? "border-accent/60 bg-accent/15 text-foreground"
                    : "border-border bg-muted/40 text-foreground-muted hover:border-border-strong hover:text-foreground"
                }`}
              >
                {tDifficulty(d)}
              </button>
            );
          })}

          <span aria-hidden className="mx-1 h-4 w-px bg-border" />

          <ToggleChip
            active={onlyEssential}
            onClick={() => setOnlyEssential((v) => !v)}
            label={t("essentialOnly")}
          />
          <ToggleChip
            active={onlyFree}
            onClick={() => setOnlyFree((v) => !v)}
            label={t("freeOnly")}
          />
          <ToggleChip
            active={onlyOpenSource}
            onClick={() => setOnlyOpenSource((v) => !v)}
            label={t("openSourceOnly")}
          />

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

        <div className="flex items-center justify-between gap-3">
          <div className="text-xs text-foreground-muted">
            {filtersActive && t("matchCount", { count: filtered.length })}
          </div>
          <div
            className="inline-flex items-center gap-0.5 rounded-md border border-border bg-muted/40 p-0.5"
            role="group"
            aria-label={t("viewGrid")}
          >
            <button
              type="button"
              onClick={() => setViewPersistent("grid")}
              aria-pressed={view === "grid"}
              aria-label={t("viewGrid")}
              title={t("viewGrid")}
              className={`inline-flex h-7 w-7 items-center justify-center rounded transition-colors ${
                view === "grid"
                  ? "bg-background text-foreground"
                  : "text-foreground-muted hover:text-foreground"
              }`}
            >
              <LayoutGrid className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setViewPersistent("list")}
              aria-pressed={view === "list"}
              aria-label={t("viewList")}
              title={t("viewList")}
              className={`inline-flex h-7 w-7 items-center justify-center rounded transition-colors ${
                view === "list"
                  ? "bg-background text-foreground"
                  : "text-foreground-muted hover:text-foreground"
              }`}
            >
              <List className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-lg border border-border bg-muted/40 p-6 text-center text-sm text-foreground-muted">
          {t("noResults")}
        </p>
      ) : filtersActive ? (
        view === "list" ? (
          <div className="flex flex-col gap-2">
            {filtered.map((tool) => (
              <ToolListItem
                key={tool.id}
                gameId={gameId}
                tool={tool}
                category={categoryMap.get(tool.category)}
                locale={locale}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((tool) => (
              <ToolCard
                key={tool.id}
                gameId={gameId}
                tool={tool}
                category={categoryMap.get(tool.category)}
                locale={locale}
              />
            ))}
          </div>
        )
      ) : (
        <div className="space-y-10">
          {grouped.map(({ category, tools: catTools }) => (
            <div key={category.id}>
              <div className="mb-3 flex items-baseline gap-2">
                {category.icon && <span aria-hidden>{category.icon}</span>}
                <h3 className="text-base font-semibold">
                  {categoryName(category, locale)}
                </h3>
                <span className="text-xs text-foreground-muted">
                  {catTools.length}
                </span>
              </div>
              {view === "list" ? (
                <div className="flex flex-col gap-2">
                  {catTools.map((tool) => (
                    <ToolListItem
                      key={tool.id}
                      gameId={gameId}
                      tool={tool}
                      category={category}
                      locale={locale}
                    />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {catTools.map((tool) => (
                    <ToolCard
                      key={tool.id}
                      gameId={gameId}
                      tool={tool}
                      category={category}
                      locale={locale}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ToggleChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-md border px-2 py-0.5 text-[11px] font-medium transition-colors ${
        active
          ? "border-accent/60 bg-accent/15 text-foreground"
          : "border-border bg-muted/40 text-foreground-muted hover:border-border-strong hover:text-foreground"
      }`}
    >
      {label}
    </button>
  );
}
