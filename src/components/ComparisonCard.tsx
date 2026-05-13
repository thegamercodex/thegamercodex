import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { categoriesById, categoryName } from "@/lib/categories";
import { formatDate } from "@/lib/format";
import type { Comparison, Game, Locale, Tool } from "@/types";

interface Props {
  comparison: Comparison;
  toolA: Tool;
  toolB: Tool;
  game: Game;
  locale: Locale;
  eyebrowLabel: string;
  lastVerifiedLabel: string;
}

export function ComparisonCard({
  comparison,
  toolA,
  toolB,
  game,
  locale,
  eyebrowLabel,
  lastVerifiedLabel,
}: Props) {
  const verdict =
    locale === "es" ? comparison.verdictEs : comparison.verdictEn;
  const categories = categoriesById(game.toolCategories);
  const cat = categories.get(comparison.category);
  const catLabel = cat ? categoryName(cat, locale) : null;

  return (
    <Link
      href={`/${game.id}/compare/${comparison.id}`}
      className="group flex h-full flex-col gap-3 rounded-xl border border-border bg-muted/40 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--game-accent)]/60 hover:bg-muted/70"
    >
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-foreground-subtle">
          {eyebrowLabel}
        </span>
        <ArrowRight
          className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
          style={{ color: "var(--game-accent)" }}
        />
      </div>
      <h3 className="text-base font-semibold leading-snug tracking-tight text-foreground">
        {toolA.name}
        <span className="px-1.5 text-foreground-subtle">vs</span>
        {toolB.name}
      </h3>
      <p className="line-clamp-3 text-sm leading-relaxed text-foreground-muted">
        {verdict}
      </p>
      <div className="mt-auto flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-foreground-subtle">
        {catLabel && <span>{catLabel}</span>}
        {catLabel && <span aria-hidden>·</span>}
        <span>
          {lastVerifiedLabel} {formatDate(comparison.lastVerified, locale)}
        </span>
      </div>
    </Link>
  );
}
