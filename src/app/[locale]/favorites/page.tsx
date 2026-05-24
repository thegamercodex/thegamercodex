import fs from "node:fs";
import path from "node:path";
import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { getGames, getTools } from "@/lib/content";
import { FavoritesView, type FavoritesManifest } from "@/components/FavoritesView";
import type { Locale } from "@/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "favorites" });
  return {
    title: t("pageTitle"),
    description: t("pageDescription"),
    alternates: {
      canonical: `/${locale}/favorites`,
      languages: {
        es: "/es/favorites",
        en: "/en/favorites",
      },
    },
    robots: { index: false, follow: true },
  };
}

export default async function FavoritesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;

  const t = await getTranslations("favorites");
  const games = await getGames();
  const toolsPerGame = await Promise.all(games.map((g) => getTools(g.id)));

  const manifest: FavoritesManifest = { games: {}, tools: {} };

  games.forEach((game, i) => {
    manifest.games[game.id] = {
      id: game.id,
      name: game.name,
      shortName: game.shortName,
      taglineEs: game.taglineEs,
      taglineEn: game.taglineEn,
      logo: game.logo,
      themeAccent: game.theme.accent,
      themeBackground: game.theme.background,
      themeSecondary: game.theme.secondary,
    };

    toolsPerGame[i].forEach((tool) => {
      const logoExists = tool.logo
        ? fs.existsSync(path.join(process.cwd(), "public", tool.logo))
        : false;
      manifest.tools[`${game.id}:${tool.id}`] = {
        id: tool.id,
        gameId: game.id,
        gameName: game.shortName ?? game.name,
        gameAccent: game.theme.accent,
        name: tool.name,
        shortName: tool.shortName,
        taglineEs: tool.taglineEs,
        taglineEn: tool.taglineEn,
        logo: tool.logo,
        hasLogo: logoExists,
        free: tool.free,
        openSource: tool.openSource,
        official: tool.official,
        essential: tool.essential,
      };
    });
  });

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 pb-24">
      <header className="border-b border-border py-12">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {t("pageTitle")}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground-muted sm:text-base">
          {t("pageDescription")}
        </p>
        <p className="mt-3 max-w-2xl text-xs italic leading-relaxed text-foreground-subtle sm:text-sm">
          {t("storageNote")}
        </p>
      </header>

      <FavoritesView manifest={manifest} locale={loc} />
    </main>
  );
}
