import { existsSync } from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { ContinueExploring } from "@/components/ContinueExploring";
import { MobileGameBackBar } from "@/components/MobileGameBackBar";
import { ResourceGrid } from "@/components/ResourceGrid";
import {
  getAllResources,
  getCreatorIds,
  getGame,
  getGameIds,
  getResources,
  getTools,
} from "@/lib/content";
import { categoriesById, categoryName, categoryDescription } from "@/lib/categories";
import { collectionPageJsonLd, jsonLdScript } from "@/lib/jsonld";
import type { Locale, ResourceCategory } from "@/types";

interface PageParams {
  params: Promise<{ locale: string; game: string; category: string }>;
}

export async function generateStaticParams() {
  const gameIds = await getGameIds();
  const all: { game: string; category: string }[] = [];
  for (const gameId of gameIds) {
    const game = await getGame(gameId);
    for (const cat of game.resourceCategories) {
      all.push({ game: gameId, category: cat.id });
    }
  }
  return all;
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale, game: gameId, category: categoryId } = await params;
  try {
    const game = await getGame(gameId);
    const cat = categoriesById(game.resourceCategories).get(categoryId);
    if (!cat) return {};
    const loc = locale as Locale;
    const title =
      loc === "es"
        ? `Mejores ${categoryName(cat, loc)} para ${game.name}`
        : `Best ${categoryName(cat, loc)} for ${game.name}`;
    return {
      title,
      description: categoryDescription(cat, loc),
      alternates: {
        canonical: `/${locale}/${gameId}/resources/${categoryId}`,
        languages: {
          es: `/es/${gameId}/resources/${categoryId}`,
          en: `/en/${gameId}/resources/${categoryId}`,
        },
      },
    };
  } catch {
    return {};
  }
}

export default async function ResourcesCategoryPage({ params }: PageParams) {
  const { locale, game: gameId, category: categoryId } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;

  let game, collection;
  let cat: ResourceCategory | undefined;
  try {
    game = await getGame(gameId);
    cat = categoriesById(game.resourceCategories).get(categoryId);
    if (!cat) notFound();
    collection = await getResources(gameId, categoryId);
  } catch {
    notFound();
  }

  const t = await getTranslations("resources");
  const tNav = await getTranslations("nav");
  const tGame = await getTranslations("game");
  const creatorIdsInCodex = await getCreatorIds(gameId);

  const [allCollections, tools] = await Promise.all([
    getAllResources(gameId),
    getTools(gameId),
  ]);
  const resourceCounts: Record<string, number> = {};
  for (const c of allCollections) {
    resourceCounts[c.category] = c.resources.length;
  }
  const otherCategories = game.resourceCategories.filter(
    (c) => c.id !== categoryId && (resourceCounts[c.id] ?? 0) > 0,
  );
  const featuredTools = tools
    .filter((tool) => tool.essential)
    .slice(0, 3);
  const toolCategoryMap = categoriesById(game.toolCategories);
  const featuredToolLogos: Record<string, boolean> = {};
  for (const tool of featuredTools) {
    featuredToolLogos[tool.id] =
      Boolean(tool.logo) &&
      existsSync(path.join(process.cwd(), "public", tool.logo));
  }
  const hasGameLogo =
    Boolean(game.logo) &&
    existsSync(path.join(process.cwd(), "public", game.logo));

  const resources = collection.resources;
  const heading = categoryName(cat, loc);
  const description = categoryDescription(cat, loc);

  return (
    <div className="mx-auto w-full max-w-6xl px-6 pb-20 pt-10 lg:pb-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(
            collectionPageJsonLd(cat, resources, game, loc),
          ),
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
          href={`/${game.id}#resources`}
          className="transition-colors hover:text-foreground"
        >
          {tGame("resourcesHeading")}
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground">{heading}</span>
      </nav>

      <header className="mb-10 border-b border-border pb-8">
        <div className="flex flex-wrap items-baseline gap-3">
          {cat.icon && (
            <span className="text-3xl" aria-hidden>
              {cat.icon}
            </span>
          )}
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {heading}
          </h1>
          <span className="text-sm text-muted-foreground">
            {t("count", { count: resources.length })}
          </span>
        </div>
        {description && (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </header>

      {resources.length > 0 ? (
        <ResourceGrid
          gameId={game.id}
          resources={resources}
          creatorIdsInCodex={creatorIdsInCodex}
          locale={loc}
        />
      ) : (
        <p className="rounded-lg border border-border bg-muted/40 p-6 text-center text-sm text-muted-foreground">
          {t("noResources")}
        </p>
      )}

      <ContinueExploring
        gameId={game.id}
        gameName={game.name}
        otherCategories={otherCategories}
        resourceCounts={resourceCounts}
        featuredTools={featuredTools}
        toolCategoryMap={toolCategoryMap}
        toolLogos={featuredToolLogos}
        locale={loc}
      />
      <MobileGameBackBar
        gameId={game.id}
        gameName={game.name}
        gameLogo={game.logo}
        hasLogo={hasGameLogo}
      />
    </div>
  );
}
