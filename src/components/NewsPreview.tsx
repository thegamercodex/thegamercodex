import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { NewsItemCard } from "./NewsItemCard";
import { getGameNews } from "@/lib/news";
import type { GameMeta, Locale } from "@/types";

interface NewsPreviewProps {
  game: Pick<GameMeta, "id" | "stores" | "newsFeeds">;
  locale: Locale;
  limit?: number;
}

export async function NewsPreview({
  game,
  locale,
  limit = 3,
}: NewsPreviewProps) {
  const t = await getTranslations("news");
  const items = await getGameNews(game, limit);

  if (items.length === 0) return null;

  return (
    <>
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <NewsItemCard key={item.id} item={item} locale={locale} />
        ))}
      </div>
      <Link
        href={`/${game.id}/news`}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
      >
        {t("viewAll")}
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </>
  );
}
