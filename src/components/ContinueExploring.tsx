import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { ToolCard } from "./ToolCard";
import { categoryName } from "@/lib/categories";
import type {
  Locale,
  ResourceCategory,
  Tool,
  ToolCategory,
} from "@/types";

interface ContinueExploringProps {
  gameId: string;
  gameName: string;
  otherCategories: ResourceCategory[];
  resourceCounts: Record<string, number>;
  featuredTools: Tool[];
  toolCategoryMap: Map<string, ToolCategory>;
  toolLogos: Record<string, boolean>;
  locale: Locale;
}

export function ContinueExploring({
  gameId,
  gameName,
  otherCategories,
  resourceCounts,
  featuredTools,
  toolCategoryMap,
  toolLogos,
  locale,
}: ContinueExploringProps) {
  const t = useTranslations("resources");
  const tGame = useTranslations("game");

  if (otherCategories.length === 0 && featuredTools.length === 0) return null;

  return (
    <section className="mt-16 space-y-12 border-t border-border pt-12">
      {otherCategories.length > 0 && (
        <div>
          <h2 className="mb-5 text-lg font-semibold tracking-tight">
            {t("moreCategories", { game: gameName })}
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {otherCategories.map((c) => (
              <Link
                key={c.id}
                href={`/${gameId}/resources/${c.id}`}
                className="group flex items-start gap-3 rounded-xl border border-border bg-muted/40 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--game-accent,var(--color-accent))]/60 hover:bg-muted/70"
              >
                {c.icon && (
                  <span className="shrink-0 text-2xl" aria-hidden>
                    {c.icon}
                  </span>
                )}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">
                    {categoryName(c, locale)}
                  </p>
                  <p className="mt-0.5 text-xs text-foreground-muted">
                    {t("count", { count: resourceCounts[c.id] ?? 0 })}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {featuredTools.length > 0 && (
        <div>
          <div className="mb-5 flex items-baseline justify-between gap-3">
            <h2 className="text-lg font-semibold tracking-tight">
              {t("featuredTools", { game: gameName })}
            </h2>
            <Link
              href={`/${gameId}#tools`}
              className="inline-flex shrink-0 items-center gap-1 text-xs text-foreground-muted transition-colors hover:text-foreground"
            >
              {tGame("toolsHeading")}
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTools.map((tool) => (
              <ToolCard
                key={tool.id}
                gameId={gameId}
                tool={tool}
                category={toolCategoryMap.get(tool.category)}
                locale={locale}
                hasLogo={toolLogos[tool.id]}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
