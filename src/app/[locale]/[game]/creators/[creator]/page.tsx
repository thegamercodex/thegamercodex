import { existsSync } from "node:fs";
import path from "node:path";
import { Suspense } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { CreatorVideos } from "@/components/CreatorVideos";
import { CreatorVideosSkeleton } from "@/components/CreatorVideosSkeleton";
import { MobileGameBackBar } from "@/components/MobileGameBackBar";
import { PlatformLink } from "@/components/PlatformLink";
import { ShareButtons } from "@/components/ShareButtons";
import { absoluteUrl } from "@/lib/site";
import {
  getCreator,
  getCreatorIds,
  getGame,
  getGameIds,
} from "@/lib/content";
import { flagEmoji, humanize } from "@/lib/categories";
import { jsonLdScript, personJsonLd } from "@/lib/jsonld";
import type { Locale } from "@/types";

interface PageParams {
  params: Promise<{ locale: string; game: string; creator: string }>;
}

export async function generateStaticParams() {
  const gameIds = await getGameIds();
  const all: { game: string; creator: string }[] = [];
  for (const game of gameIds) {
    const creatorIds = await getCreatorIds(game);
    for (const creator of creatorIds) {
      all.push({ game, creator });
    }
  }
  return all;
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale, game: gameId, creator: creatorId } = await params;
  try {
    const [game, creator] = await Promise.all([
      getGame(gameId),
      getCreator(gameId, creatorId),
    ]);
    const note = locale === "es" ? creator.noteEs : creator.noteEn;
    const title = `${creator.name} — ${game.name}`;
    return {
      title,
      description: note.slice(0, 160),
      alternates: {
        canonical: `/${locale}/${gameId}/creators/${creatorId}`,
        languages: {
          es: `/es/${gameId}/creators/${creatorId}`,
          en: `/en/${gameId}/creators/${creatorId}`,
        },
      },
      openGraph: {
        title,
        description: note.slice(0, 200),
        type: "profile",
      },
      twitter: {
        card: "summary",
        title,
        description: note.slice(0, 200),
      },
    };
  } catch {
    return {};
  }
}

export default async function CreatorPage({ params }: PageParams) {
  const { locale, game: gameId, creator: creatorId } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;

  let game, creator;
  try {
    [game, creator] = await Promise.all([
      getGame(gameId),
      getCreator(gameId, creatorId),
    ]);
  } catch {
    notFound();
  }

  const t = await getTranslations("creator");
  const tNav = await getTranslations("nav");
  const tDifficulty = await getTranslations("difficulty");

  const note = loc === "es" ? creator.noteEs : creator.noteEn;
  const highlights = loc === "es" ? creator.highlightsEs : creator.highlightsEn;
  const flag = flagEmoji(creator.country);
  const initial = creator.name.charAt(0).toUpperCase();

  const publicExists = (p: string) =>
    existsSync(path.join(process.cwd(), "public", p));
  const hasAvatar = Boolean(creator.avatar) && publicExists(creator.avatar);
  const hasGameLogo = Boolean(game.logo) && publicExists(game.logo);

  const shareUrl = absoluteUrl(`/${loc}/${gameId}/creators/${creatorId}`);
  const shareTitle = `${creator.name} — ${game.name}`;
  const shareDescription = note ? note.slice(0, 160) : undefined;

  return (
    <div className="mx-auto w-full max-w-6xl px-6 pb-20 pt-10 lg:pb-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(personJsonLd(creator, game, loc)),
        }}
      />
      <nav
        aria-label="Breadcrumb"
        className="mb-8 flex items-center gap-1.5 text-xs text-muted-foreground"
      >
        <Link href="/" className="transition-colors hover:text-foreground">
          {tNav("games")}
        </Link>
        <ChevronRight className="h-3 w-3" />
        <Link
          href={`/${game.id}`}
          className="transition-colors hover:text-foreground"
        >
          {game.name}
        </Link>
        <ChevronRight className="h-3 w-3" />
        <Link
          href={`/${game.id}#creators`}
          className="transition-colors hover:text-foreground"
        >
          {tNav("creators")}
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground">{creator.name}</span>
      </nav>

      <header className="mb-10 flex flex-col gap-5 border-b border-border pb-10">
        <div className="flex items-start gap-4">
          <div
            className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 bg-muted text-2xl font-semibold sm:h-24 sm:w-24"
            style={{ borderColor: "var(--accent)" }}
          >
            {hasAvatar ? (
              <Image
                src={creator.avatar}
                alt={`${creator.name} avatar`}
                width={96}
                height={96}
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="text-accent">{initial}</span>
            )}
          </div>
          <div className="min-w-0 flex-1 pt-1">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                {creator.name}
              </h1>
              {creator.active ? (
                <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {t("active")}
                </span>
              ) : (
                <span className="rounded-md border border-border bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                  {t("inactive")}
                </span>
              )}
            </div>
            {creator.realName && (
              <p className="mt-1 text-sm text-muted-foreground">
                {creator.realName}
              </p>
            )}
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
              {flag && (
                <span className="inline-flex items-center gap-1.5">
                  <span aria-hidden>{flag}</span>
                  <span>{creator.country}</span>
                </span>
              )}
              <span>{creator.languages.join(" / ").toUpperCase()}</span>
              {creator.joinedYear && (
                <span>
                  {t("joinedYear")} {creator.joinedYear}
                </span>
              )}
            </div>
          </div>
        </div>

        {note && (
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
            {note}
          </p>
        )}
      </header>

      <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
        <article className="min-w-0">
          {highlights.length > 0 && (
            <section className="mb-10">
              <h2 className="mb-4 text-lg font-semibold tracking-tight">
                {t("highlights")}
              </h2>
              <ul className="flex flex-col gap-2">
                {highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-lg border border-border bg-muted/40 p-3 text-sm leading-relaxed"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: "var(--accent)" }}
                      aria-hidden
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section>
            <h2 className="mb-6 text-lg font-semibold tracking-tight">
              {t("latestVideos")}
            </h2>
            <Suspense fallback={<CreatorVideosSkeleton />}>
              <CreatorVideos
                creator={creator}
                gameId={gameId}
                locale={loc}
              />
            </Suspense>
          </section>
        </article>

        <aside className="lg:sticky lg:top-20 lg:self-start">
          {creator.platforms.length > 0 && (
            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                {t("platforms")}
              </p>
              <div className="flex flex-col gap-2">
                {creator.platforms.map((p, i) => (
                  <PlatformLink key={i} platform={p} />
                ))}
              </div>
            </div>
          )}

          {creator.specialties.length > 0 && (
            <div className="mt-6">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                {t("specialties")}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {creator.specialties.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border bg-muted/40 px-2 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {humanize(s)}
                  </span>
                ))}
              </div>
            </div>
          )}

          {creator.contentTypes.length > 0 && (
            <div className="mt-6">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                {t("contentTypes")}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {creator.contentTypes.map((c) => (
                  <span
                    key={c}
                    className="rounded-md border border-border bg-muted/40 px-2 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {humanize(c)}
                  </span>
                ))}
              </div>
            </div>
          )}

          {creator.audienceLevel.length > 0 && (
            <div className="mt-6">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                {t("audienceLevel")}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {creator.audienceLevel.map((a) => (
                  <span
                    key={a}
                    className="rounded-md border border-border bg-muted/40 px-2 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {tDifficulty(a)}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6">
            <ShareButtons
              url={shareUrl}
              title={shareTitle}
              description={shareDescription}
            />
          </div>
        </aside>
      </div>
      <MobileGameBackBar
        gameId={game.id}
        gameName={game.name}
        gameLogo={game.logo}
        hasLogo={hasGameLogo}
      />
    </div>
  );
}
