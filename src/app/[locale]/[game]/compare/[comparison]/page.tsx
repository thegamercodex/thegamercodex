import { existsSync } from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  BadgeCheck,
  Check,
  ChevronRight,
  Code2,
  Minus,
  Sparkles,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { MarkdownContent } from "@/components/MarkdownContent";
import { MobileGameBackBar } from "@/components/MobileGameBackBar";
import {
  getComparison,
  getComparisonIds,
  getComparisons,
  getGame,
  getGameIds,
  getTool,
} from "@/lib/content";
import { categoriesById, categoryName, humanize } from "@/lib/categories";
import { formatDate } from "@/lib/format";
import { comparisonJsonLd, jsonLdScript } from "@/lib/jsonld";
import type { Comparison, Locale, Tool } from "@/types";

interface PageParams {
  params: Promise<{ locale: string; game: string; comparison: string }>;
}

export async function generateStaticParams() {
  const gameIds = await getGameIds();
  const out: { locale: string; game: string; comparison: string }[] = [];
  for (const gameId of gameIds) {
    const ids = await getComparisonIds(gameId);
    for (const id of ids) {
      out.push({ locale: "es", game: gameId, comparison: id });
      out.push({ locale: "en", game: gameId, comparison: id });
    }
  }
  return out;
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale, game: gameId, comparison: comparisonId } = await params;
  try {
    const comparison = await getComparison(gameId, comparisonId);
    const title =
      locale === "es" ? comparison.titleEs : comparison.titleEn;
    const description =
      locale === "es" ? comparison.descriptionEs : comparison.descriptionEn;
    return {
      title,
      description,
      alternates: {
        canonical: `/${locale}/${gameId}/compare/${comparisonId}`,
        languages: {
          es: `/es/${gameId}/compare/${comparisonId}`,
          en: `/en/${gameId}/compare/${comparisonId}`,
        },
      },
      openGraph: {
        title,
        description,
        type: "article",
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

function BoolCell({
  value,
  yesLabel,
  noLabel,
}: {
  value: boolean;
  yesLabel: string;
  noLabel: string;
}) {
  return value ? (
    <span className="inline-flex items-center gap-1 text-success">
      <Check aria-hidden className="h-3.5 w-3.5" />
      {yesLabel}
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 text-foreground-subtle">
      <Minus aria-hidden className="h-3.5 w-3.5" />
      {noLabel}
    </span>
  );
}

function TableRow({
  label,
  a,
  b,
}: {
  label: string;
  a: React.ReactNode;
  b: React.ReactNode;
}) {
  return (
    <tr className="border-b border-border last:border-b-0">
      <th
        scope="row"
        className="py-3 pr-4 text-left align-top text-xs font-medium uppercase tracking-[0.15em] text-foreground-subtle"
      >
        {label}
      </th>
      <td className="py-3 pr-4 align-top text-sm text-foreground">{a}</td>
      <td className="py-3 align-top text-sm text-foreground">{b}</td>
    </tr>
  );
}

function ToolCtaCard({
  tool,
  gameId,
  locale,
  ctaLabel,
}: {
  tool: Tool;
  gameId: string;
  locale: Locale;
  ctaLabel: string;
}) {
  const tagline = locale === "es" ? tool.taglineEs : tool.taglineEn;
  return (
    <Link
      href={`/${gameId}/tools/${tool.id}`}
      className="group flex flex-col gap-3 rounded-xl border border-border bg-muted/30 p-5 transition-colors hover:border-accent"
    >
      <div className="flex items-center gap-3">
        <div className="text-base font-semibold tracking-tight text-foreground">
          {tool.name}
        </div>
        {tool.essential && (
          <span className="inline-flex items-center text-highlight">
            <Sparkles className="h-3.5 w-3.5" />
          </span>
        )}
      </div>
      {tagline && (
        <p className="text-sm leading-relaxed text-foreground-muted">
          {tagline}
        </p>
      )}
      <span className="mt-auto inline-flex items-center gap-1 text-xs font-medium text-accent transition-transform group-hover:translate-x-0.5">
        {ctaLabel}
        <ArrowUpRight className="h-3 w-3" />
      </span>
    </Link>
  );
}

function UseCaseRow({
  labelEs,
  labelEn,
  reasonEs,
  reasonEn,
  winner,
  tools,
  locale,
  winnerLabel,
  tieLabel,
}: {
  labelEs: string;
  labelEn: string;
  reasonEs: string;
  reasonEn: string;
  winner: string;
  tools: [Tool, Tool];
  locale: Locale;
  winnerLabel: string;
  tieLabel: string;
}) {
  const label = locale === "es" ? labelEs : labelEn;
  const reason = locale === "es" ? reasonEs : reasonEn;
  const winnerTool = tools.find((t) => t.id === winner);
  const isTie = winner === "tie";
  return (
    <li className="flex flex-col gap-2 rounded-lg border border-border bg-muted/30 p-4">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">
          <BadgeCheck className="h-3 w-3" />
          {isTie ? tieLabel : `${winnerLabel}: ${winnerTool?.name ?? winner}`}
        </span>
      </div>
      <p className="text-xs leading-relaxed text-foreground-muted">{reason}</p>
    </li>
  );
}

export default async function ComparisonPage({ params }: PageParams) {
  const { locale, game: gameId, comparison: comparisonId } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;

  let game, comparison: Comparison, toolA: Tool, toolB: Tool;
  try {
    game = await getGame(gameId);
    comparison = await getComparison(gameId, comparisonId);
    [toolA, toolB] = await Promise.all([
      getTool(gameId, comparison.toolIds[0]),
      getTool(gameId, comparison.toolIds[1]),
    ]);
  } catch {
    notFound();
  }

  const t = await getTranslations("comparison");
  const tRows = await getTranslations("comparison.rows");
  const tDifficulty = await getTranslations("difficulty");
  const tNav = await getTranslations("nav");

  const yes = t("yes");
  const no = t("no");
  const dash = t("dash");

  const title = loc === "es" ? comparison.titleEs : comparison.titleEn;
  const description =
    loc === "es" ? comparison.descriptionEs : comparison.descriptionEn;
  const verdict = loc === "es" ? comparison.verdictEs : comparison.verdictEn;
  const body = loc === "es" ? comparison.contentEs : comparison.contentEn;

  const categories = categoriesById(game.toolCategories);
  const categoryLabel =
    categories.get(comparison.category) &&
    categoryName(categories.get(comparison.category)!, loc);

  const relatedAll = await getComparisons(gameId);
  const related = relatedAll.filter((c) => c.id !== comparison.id).slice(0, 4);

  const tools: [Tool, Tool] = [toolA, toolB];
  const hasGameLogo =
    Boolean(game.logo) &&
    existsSync(path.join(process.cwd(), "public", game.logo));

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 pb-24">
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
          href={`/${game.id}#comparisons`}
          className="transition-colors hover:text-foreground"
        >
          {t("breadcrumb")}
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground-muted">
          {toolA.name} <span className="text-foreground-subtle">vs</span> {toolB.name}
        </span>
      </nav>

      <header className="mt-6 border-b border-border pb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground-subtle">
          {t("eyebrow")}
        </p>
        <h1 className="mt-2 text-2xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {toolA.name}
          <span className="px-3 text-foreground-subtle">vs</span>
          {toolB.name}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground-muted sm:text-base">
            {description}
          </p>
        )}
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-foreground-subtle sm:text-sm">
          {categoryLabel && (
            <>
              <span>
                {t("categoryLabel")}: {categoryLabel}
              </span>
              <span aria-hidden>·</span>
            </>
          )}
          <span>
            {t("lastVerifiedLabel")}:{" "}
            {formatDate(comparison.lastVerified, loc)}
          </span>
        </div>
      </header>

      <section className="mt-10 rounded-xl border border-accent/40 bg-accent/5 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          {t("verdictHeading")}
        </p>
        <p className="mt-3 text-base leading-relaxed text-foreground sm:text-lg">
          {verdict}
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
          {t("tableHeading")}
        </h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border">
                <th
                  scope="col"
                  className="py-3 pr-4 text-left text-xs font-medium uppercase tracking-[0.15em] text-foreground-subtle"
                />
                <th
                  scope="col"
                  className="py-3 pr-4 text-left text-sm font-semibold text-foreground"
                >
                  {toolA.name}
                </th>
                <th
                  scope="col"
                  className="py-3 text-left text-sm font-semibold text-foreground"
                >
                  {toolB.name}
                </th>
              </tr>
            </thead>
            <tbody>
              <TableRow
                label={tRows("free")}
                a={<BoolCell value={toolA.free} yesLabel={yes} noLabel={no} />}
                b={<BoolCell value={toolB.free} yesLabel={yes} noLabel={no} />}
              />
              <TableRow
                label={tRows("openSource")}
                a={
                  <BoolCell
                    value={toolA.openSource}
                    yesLabel={yes}
                    noLabel={no}
                  />
                }
                b={
                  <BoolCell
                    value={toolB.openSource}
                    yesLabel={yes}
                    noLabel={no}
                  />
                }
              />
              <TableRow
                label={tRows("official")}
                a={
                  <BoolCell value={toolA.official} yesLabel={yes} noLabel={no} />
                }
                b={
                  <BoolCell value={toolB.official} yesLabel={yes} noLabel={no} />
                }
              />
              <TableRow
                label={tRows("type")}
                a={humanize(toolA.type)}
                b={humanize(toolB.type)}
              />
              <TableRow
                label={tRows("platforms")}
                a={toolA.platforms.map(humanize).join(", ") || dash}
                b={toolB.platforms.map(humanize).join(", ") || dash}
              />
              <TableRow
                label={tRows("difficulty")}
                a={tDifficulty(toolA.difficulty)}
                b={tDifficulty(toolB.difficulty)}
              />
              <TableRow
                label={tRows("license")}
                a={toolA.license || dash}
                b={toolB.license || dash}
              />
              <TableRow
                label={tRows("github")}
                a={
                  toolA.github ? (
                    <a
                      href={toolA.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-accent hover:underline"
                    >
                      <Code2 className="h-3 w-3" />
                      GitHub
                    </a>
                  ) : (
                    dash
                  )
                }
                b={
                  toolB.github ? (
                    <a
                      href={toolB.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-accent hover:underline"
                    >
                      <Code2 className="h-3 w-3" />
                      GitHub
                    </a>
                  ) : (
                    dash
                  )
                }
              />
              <TableRow
                label={tRows("lastVerified")}
                a={formatDate(toolA.lastVerified, loc)}
                b={formatDate(toolB.lastVerified, loc)}
              />
            </tbody>
          </table>
        </div>
      </section>

      {comparison.useCases.length > 0 && (
        <section className="mt-12">
          <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
            {t("useCasesHeading")}
          </h2>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {comparison.useCases.map((uc, i) => (
              <UseCaseRow
                key={i}
                labelEs={uc.labelEs}
                labelEn={uc.labelEn}
                reasonEs={uc.reasonEs}
                reasonEn={uc.reasonEn}
                winner={uc.winner}
                tools={tools}
                locale={loc}
                winnerLabel={t("useCaseWinner")}
                tieLabel={t("useCaseTie")}
              />
            ))}
          </ul>
        </section>
      )}

      {body && (
        <section className="mt-12">
          <MarkdownContent source={body} />
        </section>
      )}

      <section className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <ToolCtaCard
          tool={toolA}
          gameId={game.id}
          locale={loc}
          ctaLabel={t("viewTool", { name: toolA.name })}
        />
        <ToolCtaCard
          tool={toolB}
          gameId={game.id}
          locale={loc}
          ctaLabel={t("viewTool", { name: toolB.name })}
        />
      </section>

      {related.length > 0 && (
        <section className="mt-16 border-t border-border pt-10">
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground-subtle">
            {t("relatedHeading")}
          </h2>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {related.map((r) => {
              const rTitle = loc === "es" ? r.titleEs : r.titleEn;
              return (
                <li key={r.id}>
                  <Link
                    href={`/${game.id}/compare/${r.id}`}
                    className="block rounded-lg border border-border bg-muted/20 p-4 text-sm text-foreground-muted transition-colors hover:border-accent hover:text-foreground"
                  >
                    {rTitle}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(
            comparisonJsonLd(comparison, tools, game, loc),
          ),
        }}
      />

      <MobileGameBackBar
        gameId={game.id}
        gameName={game.name}
        gameLogo={game.logo}
        hasLogo={hasGameLogo}
      />
    </main>
  );
}
