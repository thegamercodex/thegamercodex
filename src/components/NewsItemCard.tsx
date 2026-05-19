import Image from "next/image";
import { ExternalLink, Newspaper } from "lucide-react";
import { relativeTime } from "@/lib/format";
import type { NewsItem } from "@/lib/news";
import type { Locale } from "@/types";

interface NewsItemCardProps {
  item: NewsItem;
  locale: Locale;
}

export function NewsItemCard({ item, locale }: NewsItemCardProps) {
  const sourceLabel =
    locale === "es" ? item.sourceLabel.es : item.sourceLabel.en;
  const hasThumb = Boolean(item.thumbnail);

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-muted/40 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-muted/70"
    >
      {hasThumb && item.thumbnail ? (
        <div className="relative aspect-video w-full overflow-hidden bg-background">
          <Image
            src={item.thumbnail}
            alt={item.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          <Newspaper className="h-3 w-3" aria-hidden />
          <span className="truncate">{sourceLabel}</span>
          {item.publishedAt && (
            <>
              <span aria-hidden>·</span>
              <span>{relativeTime(item.publishedAt, locale)}</span>
            </>
          )}
        </div>

        <h3 className="line-clamp-2 text-sm font-semibold leading-snug transition-colors group-hover:text-accent">
          <span className="inline-flex items-start gap-1">
            {item.title}
            <ExternalLink className="h-3 w-3 shrink-0 translate-y-0.5 opacity-60" />
          </span>
        </h3>

        {item.summary && (
          <p className="line-clamp-3 text-xs text-foreground-muted">
            {item.summary}
          </p>
        )}
      </div>
    </a>
  );
}
