"use client";

import {
  useEffect,
  useLayoutEffect,
  useSyncExternalStore,
} from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  CHROME_THEMES,
  CHROME_THEME_ATTRIBUTE,
  CHROME_THEME_STORAGE_KEY,
  DEFAULT_CHROME_THEME,
  isChromeTheme,
  type ChromeTheme,
} from "@/lib/themes";
import type { Locale } from "@/types";

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

function readStoredTheme(): ChromeTheme {
  if (typeof window === "undefined") return DEFAULT_CHROME_THEME;
  const stored = window.localStorage.getItem(CHROME_THEME_STORAGE_KEY);
  return isChromeTheme(stored) ? stored : DEFAULT_CHROME_THEME;
}

function applyTheme(theme: ChromeTheme) {
  const root = document.documentElement;
  if (theme === DEFAULT_CHROME_THEME) {
    root.removeAttribute(CHROME_THEME_ATTRIBUTE);
  } else {
    root.setAttribute(CHROME_THEME_ATTRIBUTE, theme);
  }
}

// Subscribe to changes on the data-chrome-theme attribute (mutated by any
// switcher instance) plus cross-tab localStorage events. Multiple switcher
// instances stay in sync because they all read from the DOM attribute, the
// single source of truth.
function subscribe(callback: () => void): () => void {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: [CHROME_THEME_ATTRIBUTE],
  });
  window.addEventListener("storage", callback);
  return () => {
    observer.disconnect();
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): ChromeTheme {
  const attr = document.documentElement.getAttribute(CHROME_THEME_ATTRIBUTE);
  return isChromeTheme(attr) ? attr : DEFAULT_CHROME_THEME;
}

function getServerSnapshot(): ChromeTheme {
  return DEFAULT_CHROME_THEME;
}

export function ChromeThemeSwitcher() {
  const locale = useLocale() as Locale;
  const t = useTranslations("nav");
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Mirror cross-tab localStorage changes onto the local DOM attribute.
  useEffect(() => {
    function onStorage(event: StorageEvent) {
      if (event.key !== CHROME_THEME_STORAGE_KEY) return;
      const next = isChromeTheme(event.newValue)
        ? event.newValue
        : DEFAULT_CHROME_THEME;
      applyTheme(next);
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  // Re-apply the attribute synchronously after locale changes. The root layout
  // re-renders on locale switch and React can wipe attributes it doesn't own.
  // Reading from localStorage (not state) keeps this resilient if the snapshot
  // already reflects a wiped attribute.
  useIsomorphicLayoutEffect(() => {
    applyTheme(readStoredTheme());
  }, [locale]);

  function switchTo(next: ChromeTheme) {
    if (next === theme) return;
    applyTheme(next);
    try {
      window.localStorage.setItem(CHROME_THEME_STORAGE_KEY, next);
    } catch {
      // ignore quota / disabled storage
    }
  }

  return (
    <div
      role="group"
      aria-label={t("switchTheme")}
      className="inline-flex items-center rounded-md border border-border bg-muted/40 p-0.5 text-xs font-medium tracking-wide"
    >
      {CHROME_THEMES.map((cfg) => {
        const active = cfg.id === theme;
        const label = locale === "es" ? cfg.labelEs : cfg.labelEn;
        return (
          <button
            key={cfg.id}
            type="button"
            onClick={() => switchTo(cfg.id)}
            aria-pressed={active}
            className={`chrome-theme-switch chrome-theme-switch--${cfg.id} rounded-[5px] px-2.5 py-1 transition-colors duration-150`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
