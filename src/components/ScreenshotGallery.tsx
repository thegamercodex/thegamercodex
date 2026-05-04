"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useTranslations } from "next-intl";
import type { Locale, Screenshot } from "@/types";

interface ScreenshotGalleryProps {
  screenshots: Screenshot[];
  toolName: string;
  locale: Locale;
}

export function ScreenshotGallery({
  screenshots,
  toolName,
  locale,
}: ScreenshotGalleryProps) {
  const t = useTranslations("tool");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const goPrev = useCallback(() => {
    setActiveIndex((current) =>
      current === null
        ? null
        : (current - 1 + screenshots.length) % screenshots.length,
    );
  }, [screenshots.length]);
  const goNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % screenshots.length,
    );
  }, [screenshots.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, close, goPrev, goNext]);

  const captionFor = (shot: Screenshot) =>
    locale === "es" ? shot.captionEs : shot.captionEn;
  const altFor = (shot: Screenshot, i: number) =>
    captionFor(shot) ?? `${toolName} screenshot ${i + 1}`;

  const active = activeIndex !== null ? screenshots[activeIndex] : null;
  const activeCaption = active ? captionFor(active) : undefined;

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {screenshots.map((shot, i) => {
          const caption = captionFor(shot);
          const altText = altFor(shot, i);
          return (
            <figure key={i} className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={t("viewScreenshot")}
                className="group relative aspect-video overflow-hidden rounded-lg border border-border bg-muted transition-all duration-200 hover:border-accent/60 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <Image
                  src={shot.url}
                  alt={altText}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </button>
              {caption && (
                <figcaption className="text-xs text-muted-foreground">
                  {caption}
                </figcaption>
              )}
            </figure>
          );
        })}
      </div>

      {active && activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={altFor(active, activeIndex)}
          onClick={close}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm sm:p-8"
        >
          <button
            type="button"
            onClick={close}
            aria-label={t("closeScreenshot")}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted text-foreground transition-colors hover:bg-muted/70 sm:right-6 sm:top-6"
          >
            <X className="h-5 w-5" />
          </button>

          {screenshots.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                aria-label={t("previousScreenshot")}
                className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted text-foreground transition-colors hover:bg-muted/70 sm:left-6 sm:h-12 sm:w-12"
              >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                aria-label={t("nextScreenshot")}
                className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted text-foreground transition-colors hover:bg-muted/70 sm:right-6 sm:h-12 sm:w-12"
              >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </>
          )}

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-full w-full max-w-6xl flex-col gap-3"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-black shadow-2xl">
              <Image
                src={active.url}
                alt={altFor(active, activeIndex)}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-contain"
                priority
              />
            </div>
            {(activeCaption || screenshots.length > 1) && (
              <div className="flex items-center justify-between gap-4 text-sm">
                {activeCaption ? (
                  <p className="text-muted-foreground">{activeCaption}</p>
                ) : (
                  <span />
                )}
                {screenshots.length > 1 && (
                  <span className="font-mono text-xs text-foreground-subtle">
                    {activeIndex + 1} / {screenshots.length}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
