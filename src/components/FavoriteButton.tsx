"use client";

import { Heart } from "lucide-react";
import { useTranslations } from "next-intl";
import { useFavorites, type FavoriteEntry } from "@/hooks/useFavorites";

interface FavoriteButtonProps {
  entry: FavoriteEntry;
  className?: string;
}

export function FavoriteButton({ entry, className }: FavoriteButtonProps) {
  const { isFavorite, toggle, hydrated } = useFavorites();
  const t = useTranslations("favorites");

  // Avoid hydration mismatch: render an invisible placeholder server-side
  // and reveal the real state once client-side localStorage is read.
  if (!hydrated) {
    return (
      <span
        aria-hidden
        className={`block h-7 w-7 ${className ?? ""}`}
      />
    );
  }

  const fav = isFavorite(entry);
  const label = fav ? t("removeAria") : t("addAria");

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(entry);
      }}
      aria-pressed={fav}
      aria-label={label}
      title={label}
      className={`inline-flex h-7 w-7 items-center justify-center rounded-full border backdrop-blur-sm transition-colors ${
        fav
          ? "border-rose-500/50 bg-rose-500/20 text-rose-300"
          : "border-border bg-background/80 text-foreground-subtle hover:border-rose-500/40 hover:text-rose-400"
      } ${className ?? ""}`}
    >
      <Heart
        aria-hidden
        className={`h-3.5 w-3.5 ${fav ? "fill-current" : ""}`}
      />
    </button>
  );
}
