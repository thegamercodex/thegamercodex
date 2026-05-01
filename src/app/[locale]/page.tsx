import { setRequestLocale, getTranslations } from "next-intl/server";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("home");
  const tCommon = await getTranslations("common");

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24">
      <div className="max-w-2xl text-center space-y-6">
        <p className="text-sm uppercase tracking-widest text-zinc-500">
          {tCommon("siteName")}
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          {t("heroTitle")}
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed">
          {t("heroSubtitle")}
        </p>
      </div>
    </main>
  );
}
