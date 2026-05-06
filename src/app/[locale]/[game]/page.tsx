import { existsSync } from "node:fs";
import path from "node:path";
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
import {
  getAllResources,
  getCreators,
  getGame,
  getTools,
} from "@/lib/content";
import { categoryName } from "@/lib/categories";
import { jsonLdScript, videoGameJsonLd } from "@/lib/jsonld";
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
    return {
      title: `${game.name} — TheGamerCodex`,
      description: tagline,
      alternates: {
        canonical: `/${locale}/${gameId}`,
        languages: {
          es: `/es/${gameId}`,
          en: `/en/${gameId}`,
        },
      },
      openGraph: {
        title: game.name,
        description: tagline,
        images: game.heroImage
          ? [{ url: game.heroImage, alt: game.name }]
          : undefined,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: game.name,
        description: tagline,
        images: game.heroImage ? [game.heroImage] : undefined,
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

  let game, tools, creators, resourceCollections;
  try {
    [game, tools, creators, resourceCollections] = await Promise.all([
      getGame(gameId),
      getTools(gameId),
      getCreators(gameId),
      getAllResources(gameId),
    ]);
  } catch {
    notFound();
  }

  const t = await getTranslations("game");
  const tCommon = await getTranslations("common");
  const description = loc === "es" ? game.descriptionEs : game.descriptionEn;
  const resourceMap = new Map(
    resourceCollections.map((r) => [r.category, r.resources.length]),
  );
  const toolLogos: Record<string, boolean> = {};
  for (const tool of tools) {
    toolLogos[tool.id] =
      Boolean(tool.logo) &&
      existsSync(path.join(process.cwd(), "public", tool.logo));
  }

  const tabs = [
    tools.length > 0 && { id: "tools", label: t("toolsHeading") },
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

      {tabs.length > 1 && <GameTabNav tabs={tabs} />}

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

        <div className="pb-12">
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
