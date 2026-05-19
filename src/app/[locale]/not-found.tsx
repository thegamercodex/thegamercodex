import { AlertTriangle } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { GameMiniCard } from "@/components/GameMiniCard";
import { getGames } from "@/lib/content";

export default async function NotFound() {
  const t = await getTranslations("notFound");
  const games = await getGames();

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <AlertTriangle
          aria-hidden
          className="mx-auto h-10 w-10 text-warning"
          strokeWidth={1.75}
        />
        <p className="mt-4 text-base font-semibold uppercase tracking-[0.2em] text-warning">
          404
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          {t("title")}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-foreground-muted sm:text-base">
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
      </div>

      {games.length > 0 && (
        <section className="mt-12 border-t border-border pt-10">
          <h2 className="mb-5 text-center text-sm font-semibold uppercase tracking-[0.25em] text-foreground-muted">
            {t("exploreGames")}
          </h2>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {games.map((game) => (
              <GameMiniCard key={game.id} game={game} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
