"use client";

import { Heart } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useFavorites } from "@/hooks/useFavorites";

export function HeaderFavoritesLink() {
  const { count, hydrated } = useFavorites();
  const t = useTranslations("favorites");

  return (
    <Link
      href="/favorites"
      aria-label={t("pageTitle")}
      title={t("pageTitle")}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-muted/40 text-foreground-muted transition-colors hover:border-accent/40 hover:text-accent"
    >
      <Heart aria-hidden className="h-4 w-4" />
      {hydrated && count > 0 && (
        <span className="absolute -right-1 -top-1 inline-flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-accent px-1 text-[10px] font-semibold leading-none text-accent-foreground">
          {count}
        </span>
      )}
    </Link>
  );
}
