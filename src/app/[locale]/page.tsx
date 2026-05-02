import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { GameCard } from "@/components/GameCard";
import { getGames } from "@/lib/content";
import { jsonLdScript, websiteJsonLd } from "@/lib/jsonld";
import type { Locale } from "@/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: "/es",
        en: "/en",
      },
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("home");
  const tCommon = await getTranslations("common");
  const games = await getGames();
  const loc = locale as Locale;

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(websiteJsonLd(loc)) }}
      />
      <section className="flex flex-col items-start gap-5 py-20 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          {tCommon("siteName")}
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          {t("heroTitle")}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {t("heroSubtitle")}
        </p>
      </section>

      <section className="border-t border-border pt-12">
        <h2 className="mb-6 text-lg font-semibold tracking-tight">
          {t("gamesHeading")}
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {games.map((game) => (
            <GameCard key={game.id} game={game} locale={locale as Locale} />
          ))}
        </div>
      </section>
    </main>
  );
}
