import { absoluteUrl, siteUrl } from "@/lib/site";
import { categoryName } from "@/lib/categories";
import type {
  Comparison,
  Creator,
  Game,
  Locale,
  Resource,
  ResourceCategory,
  Tool,
} from "@/types";

type JsonLd = Record<string, unknown>;

const SITE_NAME = "TheGamerCodex";

export function websiteJsonLd(locale: Locale): JsonLd {
  const base = siteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${base}/#website`,
    name: SITE_NAME,
    url: `${base}/${locale}`,
    inLanguage: locale,
    description:
      locale === "es"
        ? "Compendio curado de herramientas y recursos para gamers"
        : "Curated compendium of gaming tools and resources",
  };
}

export function videoGameJsonLd(game: Game, locale: Locale): JsonLd {
  const description = locale === "es" ? game.taglineEs : game.taglineEn;
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: game.name,
    description,
    url: absoluteUrl(`/${locale}/${game.id}`),
    image: game.heroImage ? absoluteUrl(game.heroImage) : undefined,
    publisher: game.developer
      ? { "@type": "Organization", name: game.developer }
      : undefined,
    datePublished: game.releaseYear ? `${game.releaseYear}-01-01` : undefined,
    genre: game.genres,
    gamePlatform: game.platforms,
    sameAs: game.officialUrl ? [game.officialUrl] : undefined,
    inLanguage: locale,
  };
}

export function softwareApplicationJsonLd(
  tool: Tool,
  game: Game,
  locale: Locale,
): JsonLd {
  const description = locale === "es" ? tool.taglineEs : tool.taglineEn;
  const platformLabels: Record<string, string> = {
    windows: "Windows",
    macos: "macOS",
    linux: "Linux",
    android: "Android",
    ios: "iOS",
    web: "Web Browser",
  };
  const operatingSystem = tool.platforms
    .map((p) => platformLabels[p])
    .filter((p): p is string => Boolean(p))
    .join(", ");

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description,
    url: absoluteUrl(`/${locale}/${game.id}/tools/${tool.id}`),
    applicationCategory: "GameApplication",
    applicationSubCategory: tool.category,
    operatingSystem: operatingSystem || undefined,
    image: tool.logo ? absoluteUrl(tool.logo) : undefined,
    offers: tool.free
      ? {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        }
      : undefined,
    author: tool.createdBy
      ? {
          "@type": "Organization",
          name: tool.createdBy.name,
          url: tool.createdBy.url,
        }
      : undefined,
    sameAs: tool.url ? [tool.url] : undefined,
    inLanguage: locale,
    isAccessibleForFree: tool.free,
  };
}

export function personJsonLd(
  creator: Creator,
  game: Game,
  locale: Locale,
): JsonLd {
  const description = locale === "es" ? creator.noteEs : creator.noteEn;
  const platformUrls = creator.platforms.map((p) => p.url).filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: creator.name,
    alternateName: creator.realName,
    description,
    url: absoluteUrl(`/${locale}/${game.id}/creators/${creator.id}`),
    image: creator.avatar ? absoluteUrl(creator.avatar) : undefined,
    knowsLanguage: creator.languages,
    sameAs: platformUrls.length > 0 ? platformUrls : undefined,
  };
}

export function collectionPageJsonLd(
  category: ResourceCategory,
  resources: Resource[],
  game: Game,
  locale: Locale,
): JsonLd {
  const name = categoryName(category, locale);
  const description =
    locale === "es" ? category.descriptionEs : category.descriptionEn;
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${name} — ${game.name}`,
    description,
    url: absoluteUrl(`/${locale}/${game.id}/resources/${category.id}`),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: `${siteUrl()}/${locale}`,
    },
    inLanguage: locale,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: resources.length,
      itemListElement: resources.slice(0, 20).map((r, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: r.url,
        name: r.title,
      })),
    },
  };
}

export function comparisonJsonLd(
  comparison: Comparison,
  tools: [Tool, Tool],
  game: Game,
  locale: Locale,
): JsonLd {
  const title = locale === "es" ? comparison.titleEs : comparison.titleEn;
  const description =
    locale === "es" ? comparison.descriptionEs : comparison.descriptionEn;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: absoluteUrl(
      `/${locale}/${game.id}/compare/${comparison.id}`,
    ),
    inLanguage: locale,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: `${siteUrl()}/${locale}`,
    },
    about: tools.map((tool) => ({
      "@type": "SoftwareApplication",
      name: tool.name,
      url: absoluteUrl(`/${locale}/${game.id}/tools/${tool.id}`),
      applicationCategory: "GameApplication",
      isAccessibleForFree: tool.free,
    })),
  };
}

export function jsonLdScript(data: JsonLd | JsonLd[]): string {
  return JSON.stringify(data, (_key, value) => {
    if (value === undefined) return undefined;
    if (Array.isArray(value) && value.length === 0) return undefined;
    return value;
  });
}
