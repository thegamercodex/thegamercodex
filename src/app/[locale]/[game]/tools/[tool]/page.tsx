import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  BadgeCheck,
  ChevronRight,
  Code2,
  Layers,
  Star,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { BrokenLinkButton } from "@/components/BrokenLinkButton";
import { MarkdownContent } from "@/components/MarkdownContent";
import {
  getGame,
  getGameIds,
  getTool,
  getToolIds,
  getTools,
} from "@/lib/content";
import type { MultiGameRef } from "@/types";
import { categoriesById, categoryName, humanize } from "@/lib/categories";
import { jsonLdScript, softwareApplicationJsonLd } from "@/lib/jsonld";
import type { Locale, Tool, ToolCategory } from "@/types";

interface PageParams {
  params: Promise<{ locale: string; game: string; tool: string }>;
}

export async function generateStaticParams() {
  const gameIds = await getGameIds();
  const all: { game: string; tool: string }[] = [];
  for (const game of gameIds) {
    const toolIds = await getToolIds(game);
    for (const tool of toolIds) {
      all.push({ game, tool });
    }
  }
  return all;
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale, game: gameId, tool: toolId } = await params;
  try {
    const [game, tool] = await Promise.all([
      getGame(gameId),
      getTool(gameId, toolId),
    ]);
    const tagline = locale === "es" ? tool.taglineEs : tool.taglineEn;
    const heroScreenshot = tool.screenshots[0]?.url ?? game.heroImage;
    return {
      title: `${tool.name} — ${game.name} | TheGamerCodex`,
      description: tagline,
      icons: tool.logo ? { icon: tool.logo } : undefined,
      alternates: {
        canonical: `/${locale}/${gameId}/tools/${toolId}`,
        languages: {
          es: `/es/${gameId}/tools/${toolId}`,
          en: `/en/${gameId}/tools/${toolId}`,
        },
      },
      openGraph: {
        title: `${tool.name} — ${game.name}`,
        description: tagline,
        images: heroScreenshot ? [{ url: heroScreenshot }] : undefined,
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: `${tool.name} — ${game.name}`,
        description: tagline,
        images: heroScreenshot ? [heroScreenshot] : undefined,
      },
    };
  } catch {
    return {};
  }
}

function findCategory(
  tool: Tool,
  categories: ToolCategory[],
): ToolCategory | undefined {
  return categoriesById(categories).get(tool.category);
}

export default async function ToolPage({ params }: PageParams) {
  const { locale, game: gameId, tool: toolId } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;

  let game, tool, sameGameTools;
  try {
    [game, tool, sameGameTools] = await Promise.all([
      getGame(gameId),
      getTool(gameId, toolId),
      getTools(gameId),
    ]);
  } catch {
    notFound();
  }

  const t = await getTranslations("tool");
  const tDifficulty = await getTranslations("difficulty");
  const tType = await getTranslations("type");
  const tNav = await getTranslations("nav");

  const tagline = loc === "es" ? tool.taglineEs : tool.taglineEn;
  const quickTake = loc === "es" ? tool.quickTakeEs : tool.quickTakeEn;
  const content = loc === "es" ? tool.contentEs : tool.contentEn;
  const category = findCategory(tool, game.toolCategories);
  const initial = (tool.shortName ?? tool.name).charAt(0).toUpperCase();
  const publicExists = (p: string) =>
    existsSync(path.join(process.cwd(), "public", p));
  const hasLogo = Boolean(tool.logo) && publicExists(tool.logo);
  const visibleScreenshots = tool.screenshots.filter((s) =>
    publicExists(s.url),
  );
  const toolMap = new Map(sameGameTools.map((tt) => [tt.id, tt]));
  const related = tool.relatedTools
    .map((id) => toolMap.get(id))
    .filter((tt): tt is Tool => Boolean(tt));
  const alternatives = tool.alternatives
    .map((id) => toolMap.get(id))
    .filter((tt): tt is Tool => Boolean(tt));

  const hasMultiGame =
    tool.multiGame?.available &&
    (tool.multiGame.otherGames?.length ?? 0) > 0;

  interface MultiGameLink {
    ref: MultiGameRef;
    displayName: string;
    href: string;
    isInternal: boolean;
  }

  let multiGameLinks: MultiGameLink[] = [];
  if (hasMultiGame && tool.multiGame) {
    const codexGameIds = new Set(await getGameIds());
    const enriched = await Promise.all(
      tool.multiGame.otherGames.map(async (ref) => {
        const inCodex = codexGameIds.has(ref.gameId);
        if (!inCodex) {
          return {
            ref,
            displayName: humanize(ref.gameId),
            href: ref.url,
            isInternal: false,
          };
        }
        const [otherGame, otherTools] = await Promise.all([
          getGame(ref.gameId),
          getToolIds(ref.gameId),
        ]);
        const hasToolInOtherGame = otherTools.includes(tool.id);
        return {
          ref,
          displayName: otherGame.name,
          href: hasToolInOtherGame
            ? `/${ref.gameId}/tools/${tool.id}`
            : ref.url,
          isInternal: hasToolInOtherGame,
        };
      }),
    );
    multiGameLinks = enriched;
  }

  const accentVar = "var(--game-accent)";

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(softwareApplicationJsonLd(tool, game, loc)),
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
          href={`/${game.id}#tools`}
          className="transition-colors hover:text-foreground"
        >
          {tNav("tools")}
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground">{tool.name}</span>
      </nav>

      <header className="mb-10 flex flex-col gap-5 border-b border-border pb-10">
        <div className="flex items-start gap-4">
          <div
            className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border-2 bg-muted text-2xl font-semibold sm:h-20 sm:w-20"
            style={{ borderColor: `${accentVar}` }}
          >
            {hasLogo ? (
              <Image
                src={tool.logo}
                alt={`${tool.name} logo`}
                width={80}
                height={80}
                className="h-full w-full object-contain p-1"
              />
            ) : (
              <span style={{ color: accentVar }}>{initial}</span>
            )}
          </div>
          <div className="min-w-0 flex-1 pt-1">
            {category && (
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: accentVar }}
              >
                {category.icon && <span className="mr-1">{category.icon}</span>}
                {categoryName(category, loc)}
              </p>
            )}
            <h1 className="mt-1.5 flex flex-wrap items-center gap-x-2 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              <span>{tool.name}</span>
              {tool.essential && (
                <Star
                  className="h-5 w-5 fill-current text-highlight"
                  aria-label={t("essential")}
                />
              )}
              {tool.official && (
                <BadgeCheck
                  className="h-5 w-5 text-sky-400"
                  aria-label={t("official")}
                />
              )}
            </h1>
            {tagline && (
              <p className="mt-2 text-lg leading-relaxed text-muted-foreground">
                {tagline}
              </p>
            )}
          </div>
        </div>

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
          {tool.essential && (
            <span className="rounded-md border border-highlight/40 bg-highlight/10 px-2 py-0.5 font-medium text-highlight">
              {t("essential")}
            </span>
          )}
          {tool.official && (
            <span className="rounded-md border border-sky-500/30 bg-sky-500/10 px-2 py-0.5 font-medium text-sky-400">
              {t("official")}
            </span>
          )}
          {hasMultiGame && (
            <span className="inline-flex items-center gap-1 rounded-md border border-indigo-500/30 bg-indigo-500/10 px-2 py-0.5 font-medium text-indigo-400">
              <Layers className="h-3 w-3" />
              {t("multiGame")}
            </span>
          )}
          <span className="ml-auto rounded-md border border-border bg-muted/40 px-2 py-0.5 font-medium text-muted-foreground">
            {tDifficulty(tool.difficulty)}
          </span>
        </div>

        <div className="flex flex-wrap gap-3 lg:hidden">
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md px-4 py-2.5 text-sm font-semibold text-background transition-transform duration-150 hover:-translate-y-0.5"
            style={{ background: accentVar }}
          >
            {t("goToTool")}
            <ArrowUpRight className="h-4 w-4" />
          </a>
          {tool.github && (
            <a
              href={tool.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/40 px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-muted"
            >
              <Code2 className="h-4 w-4" />
              {t("viewSource")}
            </a>
          )}
        </div>
      </header>

      <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
        <article className="min-w-0">
          {quickTake && (
            <aside
              className="mb-8 rounded-xl border-l-4 bg-muted/40 p-5"
              style={{ borderColor: accentVar }}
            >
              <p
                className="mb-1 text-[10px] font-semibold uppercase tracking-[0.25em]"
                style={{ color: accentVar }}
              >
                {t("quickTake")}
              </p>
              <p className="text-base font-medium leading-relaxed">
                {quickTake}
              </p>
            </aside>
          )}

          {content && <MarkdownContent source={content} />}

          {visibleScreenshots.length > 0 && (
            <section className="mt-12 border-t border-border pt-10">
              <h2 className="mb-5 text-lg font-semibold tracking-tight">
                {t("screenshots")}
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {visibleScreenshots.map((shot, i) => {
                  const caption =
                    loc === "es" ? shot.captionEs : shot.captionEn;
                  return (
                    <figure key={i} className="flex flex-col gap-2">
                      <div className="relative aspect-video overflow-hidden rounded-lg border border-border bg-muted">
                        <Image
                          src={shot.url}
                          alt={caption}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                      {caption && (
                        <figcaption className="text-xs text-muted-foreground">
                          {caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                })}
              </div>
            </section>
          )}

          {hasMultiGame && (
            <section className="mt-12 border-t border-border pt-10">
              <div className="mb-5 flex items-center gap-2">
                <Layers
                  className="h-4 w-4 text-indigo-400"
                  strokeWidth={2.25}
                />
                <h2 className="text-lg font-semibold tracking-tight">
                  {t("alsoAvailableFor")}
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {multiGameLinks.map((link) =>
                  link.isInternal ? (
                    <Link
                      key={link.ref.gameId}
                      href={link.href}
                      className="group flex items-center justify-between gap-3 rounded-lg border border-border bg-muted/40 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-muted/70"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold">
                          {link.displayName}
                        </p>
                        <p className="mt-0.5 truncate text-xs text-muted-foreground">
                          {loc === "es" ? "Ver en el codex" : "View in codex"}
                        </p>
                      </div>
                      <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                    </Link>
                  ) : (
                    <a
                      key={link.ref.gameId}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-3 rounded-lg border border-border bg-muted/40 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-muted/70"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold">
                          {link.displayName}
                        </p>
                        <p
                          className="mt-0.5 truncate text-xs text-muted-foreground"
                          title={link.ref.url}
                        >
                          {link.ref.url.replace(/^https?:\/\//, "")}
                        </p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                    </a>
                  ),
                )}
              </div>
            </section>
          )}
        </article>

        <aside className="lg:sticky lg:top-20 lg:self-start">
          <div className="hidden flex-col gap-3 lg:flex">
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-md px-4 py-3 text-sm font-semibold text-background shadow-lg transition-transform duration-150 hover:-translate-y-0.5"
              style={{ background: accentVar }}
            >
              {t("goToTool")}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            {tool.github && (
              <a
                href={tool.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-md border border-border bg-muted/40 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
              >
                <Code2 className="h-4 w-4" />
                {t("viewSource")}
              </a>
            )}
            <BrokenLinkButton
              gameId={game.id}
              toolId={tool.id}
              toolName={tool.name}
              toolUrl={tool.url}
              locale={loc}
            />
          </div>

          <dl className="mt-6 divide-y divide-border rounded-xl border border-border bg-muted/30 text-sm">
            <SidebarRow label={t("type")} value={tType(tool.type)} />
            {tool.license && (
              <SidebarRow label={t("license")} value={tool.license} />
            )}
            <SidebarRow
              label={t("platforms")}
              value={tool.platforms.map(humanize).join(", ")}
            />
            <SidebarRow
              label={t("languages")}
              value={tool.languages.join(" / ").toUpperCase()}
            />
            <SidebarRow
              label={t("difficulty")}
              value={tDifficulty(tool.difficulty)}
            />
            <SidebarRow
              label={t("lastVerified")}
              value={new Date(tool.lastVerified).toLocaleDateString(loc, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            />
          </dl>

          {tool.tags.length > 0 && (
            <div className="mt-6">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                {t("tags")}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {tool.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border bg-muted/40 px-2 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {related.length > 0 && (
            <div className="mt-6">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                {t("relatedTools")}
              </p>
              <ul className="flex flex-col gap-1.5">
                {related.map((rt) => (
                  <li key={rt.id}>
                    <Link
                      href={`/${game.id}/tools/${rt.id}`}
                      className="block rounded-md border border-border bg-muted/40 px-3 py-2 text-sm transition-colors hover:bg-muted"
                    >
                      {rt.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {alternatives.length > 0 && (
            <div className="mt-6">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                {t("alternatives")}
              </p>
              <ul className="flex flex-col gap-1.5">
                {alternatives.map((rt) => (
                  <li key={rt.id}>
                    <Link
                      href={`/${game.id}/tools/${rt.id}`}
                      className="block rounded-md border border-border bg-muted/40 px-3 py-2 text-sm transition-colors hover:bg-muted"
                    >
                      {rt.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {hasMultiGame && (
            <div className="mt-6">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                {t("alsoAvailableFor")}
              </p>
              <ul className="flex flex-col gap-1.5">
                {multiGameLinks.map((link) => (
                  <li key={link.ref.gameId}>
                    {link.isInternal ? (
                      <Link
                        href={link.href}
                        className="group flex items-center justify-between gap-2 rounded-md border border-border bg-muted/40 px-3 py-2 text-sm transition-colors hover:bg-muted"
                      >
                        <span className="truncate">{link.displayName}</span>
                        <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between gap-2 rounded-md border border-border bg-muted/40 px-3 py-2 text-sm transition-colors hover:bg-muted"
                      >
                        <span className="truncate">{link.displayName}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

function SidebarRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 px-4 py-2.5">
      <dt className="shrink-0 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </dt>
      <dd className="text-right text-sm font-medium">{value}</dd>
    </div>
  );
}
