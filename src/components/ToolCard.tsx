import Image from "next/image";
import { Star, BadgeCheck, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { categoryName } from "@/lib/categories";
import { isRecentlyVerified } from "@/lib/format";
import { FavoriteButton } from "./FavoriteButton";
import { ToolShortcutButton } from "./ToolShortcutButton";
import type { Locale, Tool, ToolCategory } from "@/types";

interface ToolCardProps {
  gameId: string;
  tool: Tool;
  category?: ToolCategory;
  locale: Locale;
  hasLogo?: boolean;
}

export function ToolCard({
  gameId,
  tool,
  category,
  locale,
  hasLogo = false,
}: ToolCardProps) {
  const t = useTranslations("tool");
  const tDifficulty = useTranslations("difficulty");
  const tagline = locale === "es" ? tool.taglineEs : tool.taglineEn;
  const initial = (tool.shortName ?? tool.name).charAt(0).toUpperCase();
  const recentlyVerified = isRecentlyVerified(tool.lastVerified);

  return (
    <div className="relative">
      <div className="absolute right-2 top-2 z-10 flex items-center gap-1.5">
        <ToolShortcutButton url={tool.url} />
        <FavoriteButton entry={{ type: "tool", id: tool.id, gameId }} />
      </div>
    <Link
      href={`/${gameId}/tools/${tool.id}`}
      className={`group flex flex-col gap-3 rounded-xl border p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--game-accent,var(--color-accent))]/60 hover:bg-muted/70 ${
        tool.official
          ? "border-sky-500/20 bg-sky-500/[0.03]"
          : "border-border bg-muted/40"
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-background text-sm font-semibold"
          style={{ color: "var(--game-accent, var(--color-accent))" }}
        >
          {hasLogo ? (
            <Image
              src={tool.logo}
              alt={`${tool.name} logo`}
              width={40}
              height={40}
              className="h-full w-full object-contain p-1"
            />
          ) : (
            initial
          )}
        </div>
        <div className="min-w-0 flex-1 pr-16">
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
        {recentlyVerified && (
          <span
            className="inline-flex items-center gap-1 rounded-md border border-cyan-500/30 bg-cyan-500/10 px-1.5 py-0.5 font-medium text-cyan-400"
            title={t("recentlyVerified")}
          >
            <ShieldCheck aria-hidden className="h-3 w-3" />
            {t("recentlyVerified")}
          </span>
        )}
        <span className="ml-auto rounded-md border border-border bg-background/60 px-1.5 py-0.5 font-medium text-muted-foreground">
          {tDifficulty(tool.difficulty)}
        </span>
      </div>
    </Link>
    </div>
  );
}
