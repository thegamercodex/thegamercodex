export type ChromeTheme = "cyber" | "medieval";

export interface ChromeThemeAssets {
  bannerLanding: string;
  bannerLandingWidth: number;
  bannerLandingHeight: number;
  logoSquare: string;
  logoSquareWidth: number;
  logoSquareHeight: number;
  logoHorizontal: string;
  logoHorizontalWidth: number;
  logoHorizontalHeight: number;
}

export interface ChromeThemeConfig {
  id: ChromeTheme;
  labelEs: string;
  labelEn: string;
  assets: ChromeThemeAssets;
}

export const CHROME_THEMES: ChromeThemeConfig[] = [
  {
    id: "cyber",
    labelEs: "Futurista",
    labelEn: "Futuristic",
    assets: {
      bannerLanding: "/images/tgc-banner-v2.webp",
      bannerLandingWidth: 2172,
      bannerLandingHeight: 724,
      logoSquare: "/images/tgc-logo.webp",
      logoSquareWidth: 1254,
      logoSquareHeight: 1254,
      logoHorizontal: "/images/tgc-logo-horizontal-tight.webp",
      logoHorizontalWidth: 2087,
      logoHorizontalHeight: 248,
    },
  },
  {
    id: "medieval",
    labelEs: "Medieval",
    labelEn: "Medieval",
    assets: {
      bannerLanding: "/images/tgc-banner-medieval.webp",
      bannerLandingWidth: 2172,
      bannerLandingHeight: 724,
      logoSquare: "/images/tgc-logo-medieval.webp",
      logoSquareWidth: 1000,
      logoSquareHeight: 1000,
      logoHorizontal: "/images/tgc-logo-horizontal-tight-medieval.webp",
      logoHorizontalWidth: 1600,
      logoHorizontalHeight: 220,
    },
  },
];

export const DEFAULT_CHROME_THEME: ChromeTheme = "cyber";
export const CHROME_THEME_STORAGE_KEY = "thegamercodex:chrome-theme";
export const CHROME_THEME_ATTRIBUTE = "data-chrome-theme";

const themeIds = new Set<string>(CHROME_THEMES.map((t) => t.id));

export function isChromeTheme(value: unknown): value is ChromeTheme {
  return typeof value === "string" && themeIds.has(value);
}

export function getThemeConfig(theme: ChromeTheme): ChromeThemeConfig {
  return CHROME_THEMES.find((t) => t.id === theme) ?? CHROME_THEMES[0];
}
