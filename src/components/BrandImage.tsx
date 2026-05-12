"use client";

import Image, { type ImageProps } from "next/image";
import { useSyncExternalStore } from "react";
import {
  CHROME_THEME_ATTRIBUTE,
  DEFAULT_CHROME_THEME,
  getThemeConfig,
  isChromeTheme,
  type ChromeTheme,
} from "@/lib/themes";

type Variant = "bannerLanding" | "logoSquare" | "logoHorizontal";

type Props = Omit<ImageProps, "src" | "width" | "height" | "alt"> & {
  variant: Variant;
  alt: string;
};

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

function srcFor(theme: ChromeTheme, variant: Variant) {
  const cfg = getThemeConfig(theme);
  switch (variant) {
    case "bannerLanding":
      return {
        src: cfg.assets.bannerLanding,
        width: cfg.assets.bannerLandingWidth,
        height: cfg.assets.bannerLandingHeight,
      };
    case "logoSquare":
      return {
        src: cfg.assets.logoSquare,
        width: cfg.assets.logoSquareWidth,
        height: cfg.assets.logoSquareHeight,
      };
    case "logoHorizontal":
      return {
        src: cfg.assets.logoHorizontal,
        width: cfg.assets.logoHorizontalWidth,
        height: cfg.assets.logoHorizontalHeight,
      };
  }
}

// Renders the brand image for the active chrome theme only.
// SSR uses the default theme (cyber). The inline <head> script sets
// data-chrome-theme before paint, and useSyncExternalStore reads that during
// the first client render — so users with a non-default theme stored see a
// single re-render to the correct variant. Only one variant is ever in the DOM,
// so the browser downloads exactly one image.
export function BrandImage({ variant, alt, ...rest }: Props) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const { src, width, height } = srcFor(theme, variant);
  return <Image {...rest} src={src} width={width} height={height} alt={alt} />;
}
