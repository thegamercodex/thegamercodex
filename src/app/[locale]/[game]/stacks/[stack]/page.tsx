import { existsSync } from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { ArrowUpRight, BadgeCheck, ChevronRight, Layers } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { MarkdownContent } from "@/components/MarkdownContent";
import { MobileGameBackBar } from "@/components/MobileGameBackBar";
import {
  getGame,
  getGameIds,
  getStack,
  getStackIds,
  getStacks,
  getTools,
} from "@/lib/content";
import { formatDate } from "@/lib/format";
import { jsonLdScript, stackJsonLd } from "@/lib/jsonld";
import type { Locale, Stack, Tool } from "@/types";

interface PageParams {
  params: Promise<{ locale: string; game: string; stack: string }>;
}

export async function generateStaticParams() {
  const gameIds = await getGameIds();
  const out: { locale: string; game: string; stack: string }[] = [];
  for (const gameId of gameIds) {
    const ids = await getStackIds(gameId);
    for (const id of ids) {
      out.push({ locale: "es", game: gameId, stack: id });
      out.push({ locale: "en", game: gameId, stack: id });
    }
  }
  return out;
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale, game: gameId, stack: stackId } = await params;
  try {
    const stack = await getStack(gameId, stackId);
    const title = locale === "es" ? stack.titleEs : stack.titleEn;
    const description =
      locale === "es" ? stack.descriptionEs : stack.descriptionEn;
    return {
      title,
      description,
      alternates: {
        canonical: `/${locale}/${gameId}/stacks/${stackId}`,
        languages: {
          es: `/es/${gameId}/stacks/${stackId}`,
          en: `/en/${gameId}/stacks/${stackId}`,
        },
      },
      openGraph: { title, description, type: "article" },
      twitter: { card: "summary_large_image", title, description },
    };
  } catch {
    return {};
  }
}

export default async function StackPage({ params }: PageParams) {
  const { locale, game: gameId, stack: stackId } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;

  let game, stack: Stack, gameTools: Tool[];
  try {
    [game, stack, gameTools] = await Promise.all([
      getGame(gameId),
      getStack(gameId, stackId),
      getTools(gameId),
    ]);
  } catch {
    notFound();
  }

  const t = await getTranslations("stack");
  const tNav = await getTranslations("nav");

  const title = loc === "es" ? stack.titleEs : stack.titleEn;
  const description = loc === "es" ? stack.descriptionEs : stack.descriptionEn;
  const body = loc === "es" ? stack.contentEs : stack.contentEn;

  const toolsById = new Map(gameTools.map((tool) => [tool.id, tool]));
  const resolved = stack.items
    .map((item) => {
      const tool = toolsById.get(item.toolId);
      return tool ? { tool, item } : null;
    })
    .filter((x): x is { tool: Tool; item: (typeof stack.items)[number] } =>
      x !== null,
    );

  const otherStacks = (await getStacks(gameId)).filter((s) => s.id !== stack.id);

  const hasGameLogo =
    Boolean(game.logo) &&
    existsSync(path.join(process.cwd(), "public", game.logo));

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(
            stackJsonLd(stack, resolved.map((r) => r.tool), game, loc),
          ),
        }}
      />

      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-1.5 pt-8 text-xs text-foreground-subtle"
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
          href={`/${game.id}#stacks`}
          className="transition-colors hover:text-foreground"
        >
          {t("breadcrumb")}
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground-muted">{title}</span>
      </nav>

      <header className="mt-6 border-b border-border pb-8">
        <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-foreground-subtle">
          <Layers aria-hidden className="h-3.5 w-3.5" />
          {t("eyebrow")}
        </p>
        <h1 className="mt-2 text-2xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground-muted sm:text-base">
            {description}
          </p>
        )}
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-foreground-subtle sm:text-sm">
          <span>{t("toolCount", { count: resolved.length })}</span>
          <span aria-hidden>·</span>
          <span>
            {t("lastVerifiedLabel")}: {formatDate(stack.lastVerified, loc)}
          </span>
        </div>
      </header>

      {body && (
        <section className="mt-10">
          <MarkdownContent source={body} />
        </section>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
          {t("includedHeading")}
        </h2>
        <ol className="mt-5 flex flex-col gap-3">
          {resolved.map(({ tool, item }, i) => {
            const role = loc === "es" ? item.roleEs : item.roleEn;
            const tagline = loc === "es" ? tool.taglineEs : tool.taglineEn;
            return (
              <li key={tool.id}>
                <Link
                  href={`/${game.id}/tools/${tool.id}`}
                  className="group flex gap-4 rounded-xl border border-border bg-muted/30 p-4 transition-colors hover:border-accent"
                >
                  <span
                    aria-hidden
                    className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-sm font-semibold text-accent"
                  >
                    {i + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-base font-semibold tracking-tight text-foreground">
                        {tool.name}
                      </span>
                      {tool.official && (
                        <BadgeCheck
                          className="h-3.5 w-3.5 text-sky-400"
                          aria-label={t("official")}
                        />
                      )}
                      {tool.free && (
                        <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-medium text-emerald-400">
                          {t("free")}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm font-medium leading-relaxed text-foreground">
                      {role}
                    </p>
                    {tagline && (
                      <p className="mt-1 text-xs leading-relaxed text-foreground-muted">
                        {tagline}
                      </p>
                    )}
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-foreground-subtle transition-colors group-hover:text-foreground" />
                </Link>
              </li>
            );
          })}
        </ol>
      </section>

      {otherStacks.length > 0 && (
        <section className="mt-16 border-t border-border pt-10">
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground-subtle">
            {t("relatedHeading", { game: game.name })}
          </h2>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {otherStacks.map((s) => {
              const sTitle = loc === "es" ? s.titleEs : s.titleEn;
              return (
                <li key={s.id}>
                  <Link
                    href={`/${game.id}/stacks/${s.id}`}
                    className="block rounded-lg border border-border bg-muted/20 p-4 text-sm text-foreground-muted transition-colors hover:border-accent hover:text-foreground"
                  >
                    {sTitle}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      <MobileGameBackBar
        gameId={game.id}
        gameName={game.name}
        gameLogo={game.logo}
        hasLogo={hasGameLogo}
      />
    </main>
  );
}
