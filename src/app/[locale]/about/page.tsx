import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { MarkdownContent } from "@/components/MarkdownContent";
import { getStaticPage } from "@/lib/content";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/types";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const page = await getStaticPage("about", locale as Locale);
  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        es: "/es/about",
        en: "/en/about",
      },
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const page = await getStaticPage("about", locale as Locale);

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 pb-24">
      <header className="border-b border-border py-12">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {page.title}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground-muted sm:text-base">
          {page.description}
        </p>
      </header>
      <MarkdownContent source={page.body} className="mt-10" />
    </main>
  );
}
