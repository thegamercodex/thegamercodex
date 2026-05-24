"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Heart, Menu, X } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useFavorites } from "@/hooks/useFavorites";
import { ChromeThemeSwitcher } from "./ChromeThemeSwitcher";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function HeaderMobileMenu() {
  const t = useTranslations("nav");
  const tFav = useTranslations("favorites");
  const { count, hydrated } = useFavorites();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative sm:hidden">
      <button
        type="button"
        aria-label={open ? t("closeMenu") : t("openMenu")}
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-muted/40 text-foreground-muted transition-colors hover:text-foreground"
      >
        {open ? (
          <X className="h-5 w-5" aria-hidden />
        ) : (
          <Menu className="h-5 w-5" aria-hidden />
        )}
      </button>

      {open && (
        <div
          role="dialog"
          aria-label={t("menu")}
          className="absolute right-0 top-full z-50 mt-2 flex w-64 flex-col gap-3 rounded-lg border border-border bg-background p-4 shadow-xl shadow-background/40"
        >
          <Link
            href="/favorites"
            onClick={() => setOpen(false)}
            className="flex items-center justify-between gap-3 rounded-md border border-border bg-muted/40 px-3 py-2 text-sm transition-colors hover:border-accent/40 hover:text-accent"
          >
            <span className="inline-flex items-center gap-2">
              <Heart aria-hidden className="h-4 w-4" />
              {tFav("pageTitle")}
            </span>
            {hydrated && count > 0 && (
              <span className="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-accent px-1.5 text-[11px] font-semibold leading-none text-accent-foreground">
                {count}
              </span>
            )}
          </Link>
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground-subtle">
              {t("language")}
            </span>
            <LanguageSwitcher />
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground-subtle">
              {t("theme")}
            </span>
            <ChromeThemeSwitcher />
          </div>
        </div>
      )}
    </div>
  );
}
