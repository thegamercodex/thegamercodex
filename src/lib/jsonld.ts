import { absoluteUrl, siteUrl } from "@/lib/site";
import { categoryName, humanize } from "@/lib/categories";
import type {
  Comparison,
  Creator,
  Game,
  Locale,
  Resource,
  ResourceCategory,
  Stack,
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

/**
 * FAQPage para la página de detalle de una tool. Cada Q&A resume hechos que
 * YA están visibles en la página (tagline, badges free/official, sidebar de
 * plataformas, lista de alternativas) — no se inventa contenido nuevo, así que
 * cumple la guideline de Google de que el FAQ matchee lo visible. El target
 * principal es AI search (ChatGPT/Perplexity), que parsea este schema.
 */
export function faqJsonLd(
  tool: Tool,
  game: Game,
  locale: Locale,
  opts: { alternativeNames?: string[] } = {},
): JsonLd | undefined {
  const es = locale === "es";
  const tagline = es ? tool.taglineEs : tool.taglineEn;
  const developer = game.developer;
  const qa: { q: string; a: string }[] = [];

  // ¿Qué es X? — anclado en el tagline visible bajo el título.
  if (tagline) {
    qa.push({
      q: es ? `¿Qué es ${tool.name}?` : `What is ${tool.name}?`,
      a: tagline,
    });
  }

  // ¿Es gratis? — anclado en el badge "Free" / metadata.
  if (tool.free && tool.openSource) {
    const lic = tool.license ? (es ? ` (licencia ${tool.license})` : ` (${tool.license} license)`) : "";
    qa.push({
      q: es ? `¿${tool.name} es gratis?` : `Is ${tool.name} free?`,
      a: es
        ? `Sí. ${tool.name} es gratis y de código abierto${lic}.`
        : `Yes. ${tool.name} is free and open source${lic}.`,
    });
  } else if (tool.free) {
    qa.push({
      q: es ? `¿${tool.name} es gratis?` : `Is ${tool.name} free?`,
      a: es ? `Sí, ${tool.name} es gratis.` : `Yes, ${tool.name} is free to use.`,
    });
  } else {
    qa.push({
      q: es ? `¿${tool.name} es gratis?` : `Is ${tool.name} free?`,
      a: es
        ? `No, ${tool.name} es una herramienta de pago.`
        : `No, ${tool.name} is a paid tool.`,
    });
  }

  // ¿Es oficial? — anclado en el badge "Official" (o su ausencia).
  qa.push({
    q: es ? `¿${tool.name} es una herramienta oficial?` : `Is ${tool.name} official?`,
    a: tool.official
      ? es
        ? `Sí. ${tool.name} es una herramienta oficial${developer ? ` de ${developer}` : ""}.`
        : `Yes. ${tool.name} is an official tool${developer ? ` from ${developer}` : ""}.`
      : es
        ? `No. ${tool.name} es una herramienta hecha por la comunidad, no oficial${developer ? ` de ${developer}` : ""}.`
        : `No. ${tool.name} is a community-made tool, not official${developer ? ` from ${developer}` : ""}.`,
  });

  // ¿En qué plataformas funciona? — anclado en el sidebar de plataformas.
  if (tool.platforms.length > 0) {
    const plats = tool.platforms.map(humanize).join(", ");
    qa.push({
      q: es
        ? `¿En qué plataformas funciona ${tool.name}?`
        : `What platforms does ${tool.name} support?`,
      a: es
        ? `${tool.name} funciona en ${plats}.`
        : `${tool.name} works on ${plats}.`,
    });
  }

  // Alternativas — anclado en la lista "Alternativas" del sidebar.
  const alts = opts.alternativeNames ?? [];
  if (alts.length > 0) {
    qa.push({
      q: es
        ? `¿Cuáles son las alternativas a ${tool.name}?`
        : `What are the alternatives to ${tool.name}?`,
      a: es
        ? `Alternativas a ${tool.name} para ${game.name}: ${alts.join(", ")}.`
        : `Alternatives to ${tool.name} for ${game.name}: ${alts.join(", ")}.`,
    });
  }

  if (qa.length < 2) return undefined;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${absoluteUrl(`/${locale}/${game.id}/tools/${tool.id}`)}#faq`,
    inLanguage: locale,
    mainEntity: qa.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function stackJsonLd(
  stack: Stack,
  tools: Tool[],
  game: Game,
  locale: Locale,
): JsonLd {
  const title = locale === "es" ? stack.titleEs : stack.titleEn;
  const description =
    locale === "es" ? stack.descriptionEs : stack.descriptionEn;
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: absoluteUrl(`/${locale}/${game.id}/stacks/${stack.id}`),
    inLanguage: locale,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: `${siteUrl()}/${locale}`,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: tools.length,
      itemListElement: tools.map((tool, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "SoftwareApplication",
          name: tool.name,
          url: absoluteUrl(`/${locale}/${game.id}/tools/${tool.id}`),
          applicationCategory: "GameApplication",
          isAccessibleForFree: tool.free,
        },
      })),
    },
  };
}

export function jsonLdScript(data: JsonLd | JsonLd[]): string {
  return JSON.stringify(data, (_key, value) => {
    if (value === undefined) return undefined;
    if (Array.isArray(value) && value.length === 0) return undefined;
    return value;
  });
}
