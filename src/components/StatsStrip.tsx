import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { getStats } from "@/lib/stats";
import { daysSinceLastUpdate } from "@/lib/changelog";

/**
 * Compact, single-line statistics strip rendered on the landing only.
 * Click-through goes to /changelog. The "last updated" suffix only shows
 * when the most recent changelog entry is recent enough (≤30 days) — older
 * than that and we hide it rather than displaying a stale signal.
 */
export async function StatsStrip() {
  const t = await getTranslations("changelog.stats");
  const stats = getStats();
  const days = daysSinceLastUpdate();
  const showFreshness = days !== null && days <= 30;

  return (
    <Link
      href="/changelog"
      className="group inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-foreground-muted transition-colors hover:text-foreground sm:text-sm"
    >
      <span>{t("tools", { count: stats.tools })}</span>
      <span aria-hidden className="text-foreground-subtle">·</span>
      <span>{t("creators", { count: stats.creators })}</span>
      <span aria-hidden className="text-foreground-subtle">·</span>
      <span>{t("resources", { count: stats.resources })}</span>
      {showFreshness && (
        <>
          <span aria-hidden className="text-foreground-subtle">·</span>
          <span className="text-accent">
            {t("lastUpdated", { days: days! })}
          </span>
        </>
      )}
      <ArrowRight
        aria-hidden
        className="ml-0.5 h-3.5 w-3.5 shrink-0 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
      />
    </Link>
  );
}
