import Image from "next/image";
import { PlayCircle } from "lucide-react";
import { relativeTime } from "@/lib/format";
import type { Locale, YouTubeVideo } from "@/types";

interface VideoCardProps {
  video: YouTubeVideo;
  locale: Locale;
  onClick?: () => void;
}

export function VideoCard({ video, locale, onClick }: VideoCardProps) {
  const inner = (
    <>
      <div className="relative aspect-video overflow-hidden rounded-md bg-background">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          unoptimized
        />
        <div
          aria-hidden
          className="absolute inset-0 flex items-center justify-center bg-background/0 transition-colors duration-200 group-hover:bg-background/40"
        >
          <PlayCircle
            className="h-12 w-12 text-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-90"
            strokeWidth={1.5}
          />
        </div>
      </div>
      <h3 className="line-clamp-2 text-sm font-medium leading-snug">
        {video.title}
      </h3>
      {video.publishedAt && (
        <p className="text-xs text-muted-foreground">
          {relativeTime(video.publishedAt, locale)}
        </p>
      )}
    </>
  );

  const className =
    "group flex flex-col gap-2 rounded-lg border border-border bg-muted/40 p-2.5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-muted/70";

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={className}>
        {inner}
      </button>
    );
  }

  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {inner}
    </a>
  );
}
