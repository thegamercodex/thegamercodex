import type { MetadataRoute } from "next";
import {
  getComparisons,
  getCreators,
  getGames,
  getStacks,
  getTools,
  getAllResources,
} from "@/lib/content";
import { getMostRecentChangelogDate } from "@/lib/changelog";
import { hasNewsSources } from "@/lib/news";
import { siteUrl } from "@/lib/site";
import { routing } from "@/i18n/routing";

type SitemapEntry = MetadataRoute.Sitemap[number];

function buildEntry(
  path: string,
  options: {
    lastModified?: Date | string;
    changeFrequency?: SitemapEntry["changeFrequency"];
    priority?: number;
  } = {},
): SitemapEntry {
  const base = siteUrl();
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    languages[locale] = `${base}/${locale}${path === "/" ? "" : path}`;
  }
  const defaultLocale = routing.defaultLocale;
  return {
    url: `${base}/${defaultLocale}${path === "/" ? "" : path}`,
    lastModified: options.lastModified ?? new Date(),
    changeFrequency: options.changeFrequency ?? "weekly",
    priority: options.priority,
    alternates: { languages },
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];

  entries.push(buildEntry("/", { changeFrequency: "weekly", priority: 1 }));

  const lastChangelog = getMostRecentChangelogDate();
  entries.push(
    buildEntry("/changelog", {
      lastModified: lastChangelog ?? undefined,
      changeFrequency: "weekly",
      priority: 0.5,
    }),
  );

  const games = await getGames();
  for (const game of games) {
    entries.push(
      buildEntry(`/${game.id}`, { changeFrequency: "weekly", priority: 0.9 }),
    );

    const [tools, creators, resourceCollections, comparisons, stacks] =
      await Promise.all([
        getTools(game.id),
        getCreators(game.id),
        getAllResources(game.id),
        getComparisons(game.id),
        getStacks(game.id),
      ]);

    for (const tool of tools) {
      entries.push(
        buildEntry(`/${game.id}/tools/${tool.id}`, {
          lastModified: tool.lastVerified ?? undefined,
          changeFrequency: "monthly",
          priority: 0.8,
        }),
      );
    }

    for (const creator of creators) {
      entries.push(
        buildEntry(`/${game.id}/creators/${creator.id}`, {
          changeFrequency: "weekly",
          priority: 0.7,
        }),
      );
    }

    for (const comparison of comparisons) {
      entries.push(
        buildEntry(`/${game.id}/compare/${comparison.id}`, {
          lastModified: comparison.lastVerified ?? undefined,
          changeFrequency: "monthly",
          priority: 0.75,
        }),
      );
    }

    for (const stack of stacks) {
      entries.push(
        buildEntry(`/${game.id}/stacks/${stack.id}`, {
          lastModified: stack.lastVerified ?? undefined,
          changeFrequency: "monthly",
          priority: 0.75,
        }),
      );
    }

    const resourceCounts = new Map(
      resourceCollections.map((c) => [c.category, c.resources.length]),
    );
    for (const cat of game.resourceCategories) {
      if ((resourceCounts.get(cat.id) ?? 0) === 0) continue;
      entries.push(
        buildEntry(`/${game.id}/resources/${cat.id}`, {
          changeFrequency: "weekly",
          priority: 0.6,
        }),
      );
    }

    if (hasNewsSources(game)) {
      entries.push(
        buildEntry(`/${game.id}/news`, {
          changeFrequency: "daily",
          priority: 0.7,
        }),
      );
    }
  }

  return entries;
}
