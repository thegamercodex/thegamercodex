import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import {
  BookOpen,
  ExternalLink,
  Gamepad2,
  Heart,
  Scale,
  Sparkles,
  User,
  Wrench,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import {
  getChangelogEntries,
  type ChangelogEvent,
  type ChangelogEventType,
} from "@/lib/changelog";
import { getStats } from "@/lib/stats";
import { getGames } from "@/lib/content";
import { parseDateOnly } from "@/lib/format";
import type { Game, Locale } from "@/types";

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
  const d = parseDateOnly(iso);
  return d.toLocaleDateString(locale === "es" ? "es-ES" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const TYPE_ICONS: Record<ChangelogEventType, typeof Wrench> = {
  tool: Wrench,
  creator: User,
  game: Gamepad2,
  resource: BookOpen,
  comparison: Scale,
};

const ACTION_COLORS: Record<string, string> = {
  added: "text-emerald-400",
  changed: "text-sky-400",
  removed: "text-rose-400",
  moved: "text-amber-400",
};

function GameBadge({
  game,
  locale,
}: {
  game: Game | undefined;
  locale: Locale;
}) {
  if (!game) return null;
  const accent = game.theme.accent;
  return (
    <Link
      href={`/${game.id}`}
      className="inline-flex shrink-0 items-center gap-1 rounded-md border px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.15em] transition-opacity hover:opacity-80"
      style={{
        borderColor: `${accent}80`,
        color: accent,
        background: `${accent}14`,
      }}
    >
      {game.shortName ?? game.name}
    </Link>
  );
}

function EventRow({
  event,
  locale,
  gamesById,
  tType,
  tAction,
  movedSeparator,
}: {
  event: ChangelogEvent;
  locale: Locale;
  gamesById: Map<string, Game>;
  tType: (key: ChangelogEventType) => string;
  tAction: (key: string) => string;
  movedSeparator: string;
}) {
  const Icon = TYPE_ICONS[event.type];
  const actionColor = ACTION_COLORS[event.action] ?? "text-foreground-muted";
  const note = locale === "es" ? event.noteEs : event.noteEn;

  const game = event.gameId ? gamesById.get(event.gameId) : undefined;
  const fromGame = event.fromGameId
    ? gamesById.get(event.fromGameId)
    : undefined;
  const toGame = event.toGameId ? gamesById.get(event.toGameId) : undefined;

  return (
    <li className="flex flex-wrap items-baseline gap-x-2 gap-y-1 py-1.5 text-sm">
      <span className="inline-flex shrink-0 items-center gap-1.5">
        <Icon
          aria-hidden
          className="h-3.5 w-3.5 shrink-0 text-foreground-subtle"
        />
        <span
          className={`text-[11px] font-semibold uppercase tracking-[0.15em] ${actionColor}`}
        >
          {tAction(event.action)}
        </span>
        <span
          aria-hidden
          className="text-[11px] uppercase tracking-[0.15em] text-foreground-subtle"
        >
          ·
        </span>
        <span className="text-[11px] uppercase tracking-[0.15em] text-foreground-subtle">
          {tType(event.type)}
        </span>
      </span>
      <span className="font-medium text-foreground">{event.name}</span>
      {event.action === "moved" && fromGame && toGame ? (
        <span className="inline-flex flex-wrap items-center gap-1.5">
          <GameBadge game={fromGame} locale={locale} />
          <span aria-hidden className="text-foreground-subtle">
            {movedSeparator}
          </span>
          <GameBadge game={toGame} locale={locale} />
        </span>
      ) : (
        <GameBadge game={game} locale={locale} />
      )}
      {note && (
        <span className="basis-full text-xs leading-relaxed text-foreground-muted">
          {note}
        </span>
      )}
    </li>
  );
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
  const tType = await getTranslations("changelog.eventTypes");
  const tAction = await getTranslations("changelog.eventActions");
  const movedSeparator = t("eventMovedSeparator");

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
        <p className="mt-3 max-w-2xl text-xs italic leading-relaxed text-foreground-subtle sm:text-sm">
          {t("scopeDisclaimer")}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-foreground-muted sm:text-sm">
          <span>{tStats("tools", { count: stats.tools })}</span>
          <span aria-hidden className="text-foreground-subtle">
            ·
          </span>
          <span>{tStats("creators", { count: stats.creators })}</span>
          <span aria-hidden className="text-foreground-subtle">
            ·
          </span>
          <span>{tStats("resources", { count: stats.resources })}</span>
          {stats.comparisons > 0 && (
            <>
              <span aria-hidden className="text-foreground-subtle">
                ·
              </span>
              <span>
                {tStats("comparisons", { count: stats.comparisons })}
              </span>
            </>
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 rounded-lg border border-border/60 bg-muted/30 px-4 py-3">
          <Heart aria-hidden className="h-4 w-4 shrink-0 text-accent" />
          <p className="min-w-[12rem] flex-1 text-sm leading-relaxed text-foreground-muted">
            {t("supportPrompt")}
          </p>
          <a
            href="https://ko-fi.com/thegamercodex"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-accent/40 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent transition-colors hover:bg-accent/20"
          >
            {t("supportCta")}
            <ExternalLink aria-hidden className="h-3 w-3" />
          </a>
        </div>
      </header>

      <section className="flex flex-col gap-12 pt-10">
        {entries.map((entry) => {
          const title = loc === "es" ? entry.titleEs : entry.titleEn;
          const summary = loc === "es" ? entry.summaryEs : entry.summaryEn;
          const html = loc === "es" ? entry.htmlEs : entry.htmlEn;
          const game = entry.gameAdded
            ? gamesById.get(entry.gameAdded)
            : null;
          const accentColor = game?.theme.accent ?? undefined;
          const hasNotes = html.trim().length > 0;
          const hasEvents = entry.events.length > 0;

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

              {hasEvents && (
                <div className="mt-5">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-foreground-subtle">
                    {t("eventsHeading")}
                  </p>
                  <ul className="divide-y divide-border/40 rounded-lg border border-border/40 bg-muted/20 px-3 py-1">
                    {entry.events.map((event, i) => (
                      <EventRow
                        key={i}
                        event={event}
                        locale={loc}
                        gamesById={gamesById}
                        tType={(key) => tType(key)}
                        tAction={(key) => tAction(key)}
                        movedSeparator={movedSeparator}
                      />
                    ))}
                  </ul>
                </div>
              )}

              {hasNotes && (
                <div className="mt-6">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-foreground-subtle">
                    {t("notesHeading")}
                  </p>
                  <div
                    className="markdown-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                </div>
              )}
            </article>
          );
        })}
      </section>
    </main>
  );
}
