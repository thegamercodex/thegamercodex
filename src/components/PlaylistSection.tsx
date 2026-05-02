"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { VideoCard } from "./VideoCard";
import { VideoPlayerModal } from "./VideoPlayerModal";
import type { Locale, YouTubeVideo } from "@/types";

interface PlaylistSectionProps {
  heading: string;
  videos: YouTubeVideo[];
  locale: Locale;
  viewAllUrl?: string;
  viewAllLabel?: string;
  watchOnYouTubeLabel: string;
  closeLabel: string;
  subtitle?: string;
}

export function PlaylistSection({
  heading,
  videos,
  locale,
  viewAllUrl,
  viewAllLabel,
  watchOnYouTubeLabel,
  closeLabel,
  subtitle,
}: PlaylistSectionProps) {
  const [active, setActive] = useState<YouTubeVideo | null>(null);

  return (
    <section>
      <header className="mb-3 flex items-baseline justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-semibold tracking-tight">
            {heading}
          </h3>
          {subtitle && (
            <p className="mt-0.5 text-xs text-muted-foreground">{subtitle}</p>
          )}
        </div>
        {viewAllUrl && viewAllLabel && (
          <a
            href={viewAllUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            {viewAllLabel}
            <ArrowUpRight className="h-3 w-3" />
          </a>
        )}
      </header>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            locale={locale}
            onClick={() => setActive(video)}
          />
        ))}
      </div>
      {active && (
        <VideoPlayerModal
          video={active}
          watchOnYouTubeLabel={watchOnYouTubeLabel}
          closeLabel={closeLabel}
          onClose={() => setActive(null)}
        />
      )}
    </section>
  );
}
