import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { NewsFeedList } from "@/components/NewsFeedList";
import { ScrollToTopOnMount } from "@/components/ScrollToTopOnMount";
import { getGame, getGameIds } from "@/lib/content";
import { hasNewsSources } from "@/lib/news";
import type { Locale } from "@/types";

interface PageParams {
  params: Promise<{ locale: string; game: string }>;
}

export const revalidate = 172800;

export async function generateStaticParams() {
  const gameIds = await getGameIds();
  const all: { game: string }[] = [];
  for (const gameId of gameIds) {
    const game = await getGame(gameId);
    if (hasNewsSources(game)) all.push({ game: gameId });
  }
  return all;
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale, game: gameId } = await params;
  try {
    const game = await getGame(gameId);
    if (!hasNewsSources(game)) return {};
    const loc = locale as Locale;
    const title =
      loc === "es"
        ? `Noticias de ${game.name}`
        : `${game.name} news`;
    const description =
      loc === "es"
        ? `Patch notes, anuncios y actualizaciones de ${game.name} agregadas desde fuentes oficiales.`
        : `Patch notes, announcements and updates for ${game.name} aggregated from official sources.`;
    return {
      title,
      description,
      alternates: {
        canonical: `/${locale}/${gameId}/news`,
        languages: {
          es: `/es/${gameId}/news`,
          en: `/en/${gameId}/news`,
        },
      },
      openGraph: {
        title,
        description,
        type: "website",
      },
    };
  } catch {
    return {};
  }
}

export default async function GameNewsPage({ params }: PageParams) {
  const { locale, game: gameId } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;

  let game;
  try {
    game = await getGame(gameId);
  } catch {
    notFound();
  }
  if (!hasNewsSources(game)) notFound();

  const t = await getTranslations("news");
  const tNav = await getTranslations("nav");

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-10">
      <ScrollToTopOnMount />
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
        <span className="text-foreground">{t("title")}</span>
      </nav>

      <header className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold leading-tight md:text-4xl">
          {t("pageTitle", { game: game.name })}
        </h1>
        <p className="max-w-3xl text-sm text-foreground-muted">
          {t("pageSubtitle")}
        </p>
      </header>

      <Suspense
        fallback={
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-48 animate-pulse rounded-lg border border-border bg-muted/40"
              />
            ))}
          </div>
        }
      >
        <NewsFeedList game={game} locale={loc} limit={24} />
      </Suspense>
    </div>
  );
}
