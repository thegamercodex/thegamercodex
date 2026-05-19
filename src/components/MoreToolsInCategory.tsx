import { useTranslations } from "next-intl";
import { ToolCard } from "./ToolCard";
import { categoryName } from "@/lib/categories";
import type { Locale, Tool, ToolCategory } from "@/types";

interface MoreToolsInCategoryProps {
  gameId: string;
  tools: Tool[];
  category: ToolCategory;
  locale: Locale;
  toolLogos: Record<string, boolean>;
}

export function MoreToolsInCategory({
  gameId,
  tools,
  category,
  locale,
  toolLogos,
}: MoreToolsInCategoryProps) {
  const t = useTranslations("tool");

  if (tools.length === 0) return null;

  return (
    <section className="mt-12 border-t border-border pt-10">
      <div className="mb-5 flex items-baseline gap-2">
        {category.icon && (
          <span aria-hidden className="text-base">
            {category.icon}
          </span>
        )}
        <h2 className="text-lg font-semibold tracking-tight">
          {t("moreInCategory", { category: categoryName(category, locale) })}
        </h2>
        <span className="text-xs text-foreground-muted">{tools.length}</span>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {tools.map((tool) => (
          <ToolCard
            key={tool.id}
            gameId={gameId}
            tool={tool}
            category={category}
            locale={locale}
            hasLogo={toolLogos[tool.id]}
          />
        ))}
      </div>
    </section>
  );
}
