import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { getChangelogEntries } from "@/lib/changelog";
import { getStats } from "@/lib/stats";
import { getGames } from "@/lib/content";
import type { Locale } from "@/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "changelog" });
  return {
    title: t("pageTitle"),
    description: t("pageDescription"),
    alternates: {
      canonical: `/${locale}/changelog`,
      languages: {
        es: "/es/changelog",
        en: "/en/changelog",
      },
    },
  };
}

function formatDate(iso: string, locale: Locale): string {
  const d = new Date(iso);
  return d.toLocaleDateString(locale === "es" ? "es-ES" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ChangelogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;

  const t = await getTranslations("changelog");
  const tStats = await getTranslations("changelog.stats");
  const entries = getChangelogEntries();
  const stats = getStats();
  const games = await getGames();
  const gamesById = new Map(games.map((g) => [g.id, g]));

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 pb-24">
      <header className="border-b border-border py-12">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {t("pageTitle")}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground-muted sm:text-base">
          {t("pageDescription")}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-foreground-muted sm:text-sm">
          <span>{tStats("tools", { count: stats.tools })}</span>
          <span aria-hidden className="text-foreground-subtle">·</span>
          <span>{tStats("creators", { count: stats.creators })}</span>
          <span aria-hidden className="text-foreground-subtle">·</span>
          <span>{tStats("resources", { count: stats.resources })}</span>
        </div>
      </header>

      <section className="flex flex-col gap-12 pt-10">
        {entries.map((entry) => {
          const title = loc === "es" ? entry.titleEs : entry.titleEn;
          const summary = loc === "es" ? entry.summaryEs : entry.summaryEn;
          const html = loc === "es" ? entry.htmlEs : entry.htmlEn;
          const game = entry.gameAdded ? gamesById.get(entry.gameAdded) : null;
          const accentColor = game?.theme.accent ?? undefined;

          return (
            <article
              key={entry.slug}
              className="relative pl-6"
              style={{
                borderLeft: `2px solid ${accentColor ?? "var(--color-border)"}`,
              }}
            >
              <header className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <time
                  dateTime={entry.date}
                  className="text-xs font-mono uppercase tracking-[0.2em] text-foreground-subtle"
                >
                  {formatDate(entry.date, loc)}
                </time>
                {game && (
                  <Link
                    href={`/${game.id}`}
                    className="inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] transition-opacity hover:opacity-80"
                    style={{
                      borderColor: `${accentColor}80`,
                      color: accentColor,
                      background: `${accentColor}14`,
                    }}
                  >
                    <Sparkles aria-hidden className="h-3 w-3" />
                    {t("newGameBadge")}
                  </Link>
                )}
              </header>
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                {title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted sm:text-base">
                {summary}
              </p>
              <div
                className="markdown-content mt-4"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </article>
          );
        })}
      </section>
    </main>
  );
}
