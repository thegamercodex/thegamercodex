import { getTranslations } from "next-intl/server";
import { NewsItemCard } from "./NewsItemCard";
import { getGameNews } from "@/lib/news";
import type { GameMeta, Locale } from "@/types";

interface NewsFeedListProps {
  game: Pick<GameMeta, "stores" | "newsFeeds">;
  locale: Locale;
  limit?: number;
}

export async function NewsFeedList({
  game,
  locale,
  limit = 20,
}: NewsFeedListProps) {
  const t = await getTranslations("news");
  const items = await getGameNews(game, limit);

  if (items.length === 0) {
    return (
      <p className="rounded-lg border border-border bg-muted/40 p-6 text-center text-sm text-foreground-muted">
        {t("empty")}
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <NewsItemCard key={item.id} item={item} locale={locale} />
      ))}
    </div>
  );
}
