import { existsSync } from "node:fs";
import path from "node:path";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { GameHero } from "@/components/GameHero";
import { GameTabNav } from "@/components/GameTabNav";
import { ToolsExplorer } from "@/components/ToolsExplorer";
import { CreatorCard } from "@/components/CreatorCard";
import { MarkdownContent } from "@/components/MarkdownContent";
import { NewsPreview } from "@/components/NewsPreview";
import { ShareButtons } from "@/components/ShareButtons";
import { SimilarGames } from "@/components/SimilarGames";
import { absoluteUrl } from "@/lib/site";
import {
  getAllResources,
  getComparisons,
  getCreators,
  getGame,
  getGames,
  getStacks,
  getTools,
} from "@/lib/content";
import { ComparisonCard } from "@/components/ComparisonCard";
import { StackCard } from "@/components/StackCard";
import { categoryName } from "@/lib/categories";
import { jsonLdScript, videoGameJsonLd } from "@/lib/jsonld";
import { hasNewsSources } from "@/lib/news";
import { getSimilarGames } from "@/lib/similar-games";
import type { Locale } from "@/types";

interface PageParams {
  params: Promise<{ locale: string; game: string }>;
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale, game: gameId } = await params;
  try {
    const game = await getGame(gameId);
    const tagline = locale === "es" ? game.taglineEs : game.taglineEn;
    const title =
      locale === "es"
        ? `${game.name}: herramientas, creators y recursos`
        : `${game.name}: tools, creators & resources`;
    const description =
      locale === "es"
        ? `Herramientas, creators y recursos curados para ${game.name}. ${tagline}`
        : `Curated ${game.name} tools, creators and resources. ${tagline}`;
    return {
      title,
      description,
      alternates: {
        canonical: `/${locale}/${gameId}`,
        languages: {
          es: `/es/${gameId}`,
          en: `/en/${gameId}`,
        },
      },
      openGraph: {
        title,
        description,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
      },
    };
  } catch {
    return {};
  }
}

export default async function GamePage({ params }: PageParams) {
  const { locale, game: gameId } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;

  let game, tools, creators, resourceCollections, comparisons, stacks, allGames;
  try {
    [game, tools, creators, resourceCollections, comparisons, stacks, allGames] =
      await Promise.all([
        getGame(gameId),
        getTools(gameId),
        getCreators(gameId),
        getAllResources(gameId),
        getComparisons(gameId),
        getStacks(gameId),
        getGames(),
      ]);
  } catch {
    notFound();
  }

  const similarGames = getSimilarGames(game, allGames);

  const t = await getTranslations("game");
  const tCommon = await getTranslations("common");
  const description = loc === "es" ? game.descriptionEs : game.descriptionEn;
  const tagline = loc === "es" ? game.taglineEs : game.taglineEn;
  const shareUrl = absoluteUrl(`/${loc}/${game.id}`);
  const shareTitle = `${game.name} — TheGamerCodex`;
  const resourceMap = new Map(
    resourceCollections.map((r) => [r.category, r.resources.length]),
  );
  const toolsById = new Map(tools.map((tool) => [tool.id, tool]));
  const resolvedComparisons = comparisons
    .map((c) => {
      const a = toolsById.get(c.toolIds[0]);
      const b = toolsById.get(c.toolIds[1]);
      return a && b ? { comparison: c, toolA: a, toolB: b } : null;
    })
    .filter((x): x is { comparison: typeof comparisons[number]; toolA: typeof tools[number]; toolB: typeof tools[number] } => x !== null);
  const resolvedStacks = stacks.map((stack) => ({
    stack,
    toolNames: stack.items
      .map((item) => toolsById.get(item.toolId)?.name)
      .filter((n): n is string => Boolean(n)),
  }));
  const toolLogos: Record<string, boolean> = {};
  for (const tool of tools) {
    toolLogos[tool.id] =
      Boolean(tool.logo) &&
      existsSync(path.join(process.cwd(), "public", tool.logo));
  }

  const showNews = hasNewsSources(game);
  const tNews = await getTranslations("news");
  const tStack = await getTranslations("stack");

  const tabs = [
    tools.length > 0 && { id: "tools", label: t("toolsHeading") },
    resolvedComparisons.length > 0 && {
      id: "comparisons",
      label: t("comparisonsHeading"),
    },
    resolvedStacks.length > 0 && {
      id: "stacks",
      label: t("stacksHeading"),
    },
    showNews && { id: "news", label: tNews("title") },
    creators.length > 0 && { id: "creators", label: t("creatorsHeading") },
    game.resourceCategories.length > 0 && {
      id: "resources",
      label: t("resourcesHeading"),
    },
    description && { id: "about", label: t("aboutHeading") },
  ].filter((tab): tab is { id: string; label: string } => Boolean(tab));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(videoGameJsonLd(game, loc)),
        }}
      />
      <GameHero game={game} locale={loc} />

      {tabs.length > 1 && (
        <GameTabNav
          tabs={tabs}
          rightSlot={
            <ShareButtons
              url={shareUrl}
              title={shareTitle}
              description={tagline}
              compact
            />
          }
        />
      )}

      <div className="mx-auto w-full max-w-6xl px-6">
        {tools.length > 0 && (
          <section
            id="tools"
            className="scroll-mt-32 border-b border-border py-12"
          >
            <div className="mb-6 flex items-baseline justify-between">
              <h2 className="text-2xl font-semibold tracking-tight">
                {t("toolsHeading")}
              </h2>
              <span className="text-sm text-muted-foreground">
                {tools.length}
              </span>
            </div>
            <ToolsExplorer
              gameId={game.id}
              tools={tools}
              categories={game.toolCategories}
              locale={loc}
              toolLogos={toolLogos}
            />
          </section>
        )}

        {resolvedComparisons.length > 0 && (
          <section
            id="comparisons"
            className="scroll-mt-32 border-b border-border py-12"
          >
            <div className="mb-6 flex items-baseline justify-between">
              <h2 className="text-2xl font-semibold tracking-tight">
                {t("comparisonsHeading")}
              </h2>
              <span className="text-sm text-muted-foreground">
                {resolvedComparisons.length}
              </span>
            </div>
            <div className="-mx-6 overflow-x-auto px-6 pb-2 sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0">
              <div className="grid auto-cols-[85%] grid-flow-col gap-3 sm:auto-cols-auto sm:grid-flow-row sm:grid-cols-2 lg:grid-cols-3">
                {resolvedComparisons.map(({ comparison, toolA, toolB }) => (
                  <ComparisonCard
                    key={comparison.id}
                    comparison={comparison}
                    toolA={toolA}
                    toolB={toolB}
                    game={game}
                    locale={loc}
                    eyebrowLabel={t("comparisonEyebrow")}
                    lastVerifiedLabel={t("comparisonLastVerified")}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {resolvedStacks.length > 0 && (
          <section
            id="stacks"
            className="scroll-mt-32 border-b border-border py-12"
          >
            <div className="mb-6 flex items-baseline justify-between">
              <h2 className="text-2xl font-semibold tracking-tight">
                {t("stacksHeading")}
              </h2>
              <span className="text-sm text-muted-foreground">
                {resolvedStacks.length}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {resolvedStacks.map(({ stack, toolNames }) => (
                <StackCard
                  key={stack.id}
                  gameId={game.id}
                  stack={stack}
                  toolNames={toolNames}
                  locale={loc}
                  eyebrowLabel={tStack("eyebrow")}
                  toolCountLabel={tStack("toolCount", {
                    count: stack.items.length,
                  })}
                />
              ))}
            </div>
          </section>
        )}

        {showNews && (
          <section
            id="news"
            className="scroll-mt-32 border-b border-border py-12"
          >
            <div className="mb-6 flex items-baseline justify-between">
              <h2 className="text-2xl font-semibold tracking-tight">
                {tNews("sectionHeading")}
              </h2>
            </div>
            <Suspense
              fallback={
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-48 animate-pulse rounded-lg border border-border bg-muted/40"
                    />
                  ))}
                </div>
              }
            >
              <NewsPreview game={game} locale={loc} limit={3} />
            </Suspense>
          </section>
        )}

        {creators.length > 0 && (
          <section
            id="creators"
            className="scroll-mt-32 border-b border-border py-12"
          >
            <div className="mb-6 flex items-baseline justify-between">
              <h2 className="text-2xl font-semibold tracking-tight">
                {t("creatorsHeading")}
              </h2>
              <span className="text-sm text-muted-foreground">
                {creators.length}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {creators.map((creator) => (
                <CreatorCard
                  key={creator.id}
                  gameId={game.id}
                  creator={creator}
                  locale={loc}
                />
              ))}
            </div>
          </section>
        )}

        {game.resourceCategories.length > 0 && (
          <section
            id="resources"
            className="scroll-mt-32 border-b border-border py-12"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">
                {t("resourcesHeading")}
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {game.resourceCategories.map((cat) => {
                const count = resourceMap.get(cat.id) ?? 0;
                return (
                  <Link
                    key={cat.id}
                    href={`/${game.id}/resources/${cat.id}`}
                    className="group flex flex-col gap-2 rounded-xl border border-border bg-muted/40 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--game-accent)]/60 hover:bg-muted/70"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {cat.icon && <span aria-hidden>{cat.icon}</span>}
                        <h3 className="text-sm font-semibold">
                          {categoryName(cat, loc)}
                        </h3>
                      </div>
                      <ArrowRight
                        className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                        style={{ color: "var(--game-accent)" }}
                      />
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {loc === "es" ? cat.descriptionEs : cat.descriptionEn}
                    </p>
                    <p className="mt-auto text-xs text-muted-foreground">
                      {t("resourceCount", { count })}
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {description && (
          <section id="about" className="scroll-mt-32 py-12">
            <h2 className="mb-6 text-2xl font-semibold tracking-tight">
              {t("aboutHeading")}
            </h2>
            <MarkdownContent
              source={description}
              className="max-w-3xl text-base"
            />
          </section>
        )}

        <SimilarGames current={game} similar={similarGames} locale={loc} />

        <div className="pb-12 pt-12">
          <Link
            href="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← {tCommon("backToHome")}
          </Link>
        </div>
      </div>
    </>
  );
}
