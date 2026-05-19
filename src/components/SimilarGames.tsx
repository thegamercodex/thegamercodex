import { useTranslations } from "next-intl";
import { GameCard } from "./GameCard";
import type { Game, Locale } from "@/types";

interface SimilarGamesProps {
  current: Game;
  similar: Game[];
  locale: Locale;
}

export function SimilarGames({ current, similar, locale }: SimilarGamesProps) {
  const t = useTranslations("game");

  if (similar.length === 0) return null;

  return (
    <section className="mt-16 border-t border-border pt-12">
      <h2 className="mb-6 text-lg font-semibold tracking-tight">
        {t("similarGames", { game: current.name })}
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {similar.map((g) => (
          <GameCard key={g.id} game={g} locale={locale} />
        ))}
      </div>
    </section>
  );
}
