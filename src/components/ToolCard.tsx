import { Star, BadgeCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { categoryName } from "@/lib/categories";
import type { Locale, Tool, ToolCategory } from "@/types";

interface ToolCardProps {
  gameId: string;
  tool: Tool;
  category?: ToolCategory;
  locale: Locale;
}

export function ToolCard({ gameId, tool, category, locale }: ToolCardProps) {
  const t = useTranslations("tool");
  const tDifficulty = useTranslations("difficulty");
  const tagline = locale === "es" ? tool.taglineEs : tool.taglineEn;
  const initial = (tool.shortName ?? tool.name).charAt(0).toUpperCase();

  return (
    <Link
      href={`/${gameId}/tools/${tool.id}`}
      className="group flex flex-col gap-3 rounded-xl border border-border bg-muted/40 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--game-accent,var(--color-accent))]/60 hover:bg-muted/70"
    >
      <div className="flex items-start gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-sm font-semibold"
          style={{ color: "var(--game-accent, var(--color-accent))" }}
        >
          {initial}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <h3 className="truncate text-sm font-semibold leading-tight">
              {tool.name}
            </h3>
            {tool.essential && (
              <Star
                className="h-3.5 w-3.5 shrink-0 fill-current text-highlight"
                aria-label={t("essential")}
              />
            )}
            {tool.official && (
              <BadgeCheck
                className="h-3.5 w-3.5 shrink-0 text-sky-400"
                aria-label={t("official")}
              />
            )}
          </div>
          {category && (
            <p className="mt-0.5 text-xs text-muted-foreground">
              {category.icon && <span className="mr-1">{category.icon}</span>}
              {categoryName(category, locale)}
            </p>
          )}
        </div>
      </div>

      {tagline && (
        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {tagline}
        </p>
      )}

      <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-1 text-[11px]">
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
        <span className="ml-auto rounded-md border border-border bg-background/60 px-1.5 py-0.5 font-medium text-muted-foreground">
          {tDifficulty(tool.difficulty)}
        </span>
      </div>
    </Link>
  );
}
