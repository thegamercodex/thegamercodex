"use client";

import { useEffect } from "react";
import { ExternalLink, X } from "lucide-react";
import type { YouTubeVideo } from "@/types";

interface VideoPlayerModalProps {
  video: YouTubeVideo;
  watchOnYouTubeLabel: string;
  closeLabel: string;
  onClose: () => void;
}

export function VideoPlayerModal({
  video,
  watchOnYouTubeLabel,
  closeLabel,
  onClose,
}: VideoPlayerModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={closeLabel}
          className="absolute -top-10 right-0 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-muted text-foreground transition-colors hover:bg-muted/70"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-black shadow-2xl">
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="mt-3 flex items-start justify-between gap-4">
          <h3 className="text-sm font-medium leading-snug">{video.title}</h3>
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            {watchOnYouTubeLabel}
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
