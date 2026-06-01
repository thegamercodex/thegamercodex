import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { BrandImage } from "@/components/BrandImage";
import { GameExplorer } from "@/components/GameExplorer";
import { StatsStrip } from "@/components/StatsStrip";
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
  const games = await getGames();
  const loc = locale as Locale;

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(websiteJsonLd(loc)) }}
      />

      <section className="flex flex-col items-center gap-2 pt-4 pb-4 sm:pt-6 sm:pb-6">
        <div
          className="relative w-full max-w-3xl overflow-hidden rounded-2xl"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-8 -inset-y-8 -z-10 opacity-60"
            style={{
              background:
                "radial-gradient(ellipse at center, var(--accent-subtle) 0%, transparent 65%)",
            }}
          />
          <BrandImage
            variant="bannerLanding"
            alt={t("bannerAlt")}
            className="h-auto w-full"
          />
        </div>

        <div className="flex max-w-3xl flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-semibold leading-[1.2] tracking-tight sm:text-3xl">
            {t("heroTitle")}
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-foreground-muted sm:text-base">
            {t("heroSubtitle")}
          </p>
          <StatsStrip />
        </div>
      </section>

      <section id="games" className="scroll-mt-24 pt-4">
        <GameExplorer games={games} locale={loc} />
      </section>
    </main>
  );
}
