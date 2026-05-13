import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("notFound");
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground-subtle">
        404
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        {t("title")}
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground-muted sm:text-base">
        {t("description")}
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          {t("home")}
        </Link>
        <Link
          href="/changelog"
          className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
        >
          {t("changelog")}
        </Link>
      </div>
    </main>
  );
}
