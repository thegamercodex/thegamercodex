import { useTranslations } from "next-intl";
import { ArrowUpRight, BadgeCheck, Scale } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { Locale, Tool } from "@/types";

export interface AlternativeEntry {
  tool: Tool;
  /** id de la comparison entre la tool actual y esta alternativa, si existe */
  comparisonId?: string;
}

interface AlternativesSectionProps {
  gameId: string;
  gameName: string;
  toolName: string;
  alternatives: AlternativeEntry[];
  locale: Locale;
}

/**
 * Sección in-content "Alternativas a X" en la página de detalle de una tool.
 * Captura el intent de búsqueda "alternatives to X" con un H2 dedicado y enlaza
 * internamente a cada alternativa (y a la comparison directa cuando existe),
 * bajando el bounce de una página que de otra forma sería terminal.
 */
export function AlternativesSection({
  gameId,
  gameName,
  toolName,
  alternatives,
  locale,
}: AlternativesSectionProps) {
  const t = useTranslations("tool");

  if (alternatives.length === 0) return null;

  return (
    <section className="mt-12 border-t border-border pt-10">
      <h2 className="text-lg font-semibold tracking-tight">
        {t("alternativesTo", { name: toolName })}
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-foreground-muted">
        {t("alternativesIntro", { name: toolName, game: gameName })}
      </p>
      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {alternatives.map(({ tool, comparisonId }) => {
          const tagline = locale === "es" ? tool.taglineEs : tool.taglineEn;
          return (
            <div
              key={tool.id}
              className="flex flex-col gap-3 rounded-xl border border-border bg-muted/30 p-4 transition-colors hover:border-[var(--game-accent)]/60"
            >
              <Link
                href={`/${gameId}/tools/${tool.id}`}
                className="group flex flex-col gap-2"
              >
                <div className="flex items-center gap-2">
                  <span className="text-base font-semibold tracking-tight text-foreground">
                    {tool.name}
                  </span>
                  {tool.official && (
                    <BadgeCheck
                      className="h-3.5 w-3.5 text-sky-400"
                      aria-label={t("official")}
                    />
                  )}
                </div>
                {tagline && (
                  <p className="text-sm leading-relaxed text-foreground-muted">
                    {tagline}
                  </p>
                )}
                <span className="inline-flex items-center gap-1 text-xs font-medium text-[var(--game-accent)] transition-transform group-hover:translate-x-0.5">
                  {t("viewAnalysis")}
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </Link>
              <div className="flex flex-wrap items-center gap-2 text-[11px]">
                {tool.free && (
                  <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-medium text-emerald-400">
                    {t("free")}
                  </span>
                )}
                {tool.openSource && (
                  <span className="rounded-md border border-violet-500/30 bg-violet-500/10 px-2 py-0.5 font-medium text-violet-400">
                    {t("openSource")}
                  </span>
                )}
                {comparisonId && (
                  <Link
                    href={`/${gameId}/compare/${comparisonId}`}
                    className="ml-auto inline-flex items-center gap-1 rounded-md border border-border bg-background px-2 py-0.5 font-medium text-foreground-muted transition-colors hover:border-[var(--game-accent)]/60 hover:text-foreground"
                  >
                    <Scale aria-hidden className="h-3 w-3" />
                    {toolName}
                    <span className="text-foreground-subtle">vs</span>
                    {tool.shortName ?? tool.name}
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
