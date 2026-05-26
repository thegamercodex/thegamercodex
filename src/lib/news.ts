import { XMLParser } from "fast-xml-parser";
import type { GameMeta, NewsFeed, NewsFeedSource } from "@/types";

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "",
  textNodeName: "_text",
});

export interface NewsItem {
  id: string;
  title: string;
  url: string;
  publishedAt: string;
  source: NewsFeedSource;
  sourceLabel: { es: string; en: string };
  summary?: string;
  thumbnail?: string;
}

const STEAM_LABEL = { es: "Noticias de Steam", en: "Steam News" };

function steamFeedUrl(appId: string): string {
  return `https://store.steampowered.com/feeds/news/app/${appId}/?l=english`;
}

function steamPermalink(itemId: string, appId: string): string {
  return `https://store.steampowered.com/news/app/${appId}/view/${itemId}`;
}

function steamHeaderImage(appId: string): string {
  return `https://cdn.cloudflare.steamstatic.com/steam/apps/${appId}/header.jpg`;
}

function stripHtml(html: string): string {
  return html
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/\[img\][^\[]*\[\/img\]/gi, " ")
    .replace(/\[previewyoutube[^\]]*\][^\[]*\[\/previewyoutube\]/gi, " ")
    .replace(/\[[^\]]+\]/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function firstImage(html: string): string | undefined {
  const htmlMatch = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (htmlMatch?.[1]) return htmlMatch[1];
  const bbMatch = html.match(/\[img\]\s*([^\[\s]+)\s*\[\/img\]/i);
  if (bbMatch?.[1]) return bbMatch[1];
  const bbAttrMatch = html.match(/\[img[^\]]*src=["']?([^"'\]\s]+)/i);
  return bbAttrMatch?.[1];
}

function toIsoDate(value: string): string {
  if (!value) return "";
  const parsed = Date.parse(value);
  return Number.isFinite(parsed) ? new Date(parsed).toISOString() : value;
}

interface RssItem {
  title?: string;
  link?: string;
  guid?: string | { _text?: string };
  pubDate?: string;
  description?: string;
  "content:encoded"?: string;
  author?: string;
  enclosure?: { url?: string };
}

interface AtomEntry {
  id?: string;
  title?: string;
  link?: { href?: string } | { href?: string }[];
  published?: string;
  updated?: string;
  summary?: string | { _text?: string };
  "media:group"?: {
    "media:thumbnail"?: { url?: string };
  };
}

const STEAM_CLAN_BASE = BigInt("103582791429521408");

function shortClanId(rawClanId: string): string {
  try {
    const big = BigInt(rawClanId);
    if (big > STEAM_CLAN_BASE) return (big - STEAM_CLAN_BASE).toString();
    return rawClanId;
  } catch {
    return rawClanId;
  }
}

function clanImageUrl(clanSteamId: string, filename: string): string {
  return `https://clan.steamstatic.com/images/${shortClanId(clanSteamId)}/${filename}`;
}

const STEAM_EVENT_TYPES = [
  "9", "10", "11", "12", "13", "14", "15", "16", "20", "21", "22", "23", "24",
  "25", "26", "27", "28", "29", "31", "32", "34", "35",
].join(",");

interface SteamEventAnnouncementBody {
  gid?: string;
  headline?: string;
  body?: string;
  posttime?: number;
}

interface SteamEvent {
  gid?: string;
  clan_steamid?: string;
  event_name?: string;
  event_type?: number;
  appid?: number;
  rtime32_start_time?: number;
  announcement_body?: SteamEventAnnouncementBody;
  jsondata?: string;
}

interface SteamCalendarResponse {
  success?: number;
  events?: SteamEvent[];
}

async function fetchSteamNews(appId: string, limit: number): Promise<NewsItem[]> {
  try {
    const maxTime = Math.floor(Date.now() / 1000) + 86400;
    const url =
      `https://store.steampowered.com/events/ajaxgetusereventcalendarrange/` +
      `?minTime=0&maxTime=${maxTime}` +
      `&ascending=false&maxResults=${Math.max(limit, 20)}` +
      `&populateEvents=15&appTypes=steam` +
      `&eventTypes=${STEAM_EVENT_TYPES}` +
      `&appIdFilter=${appId}`;

    const res = await fetch(url, {
      next: { revalidate: 21600 },
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return [];
    const data = (await res.json()) as SteamCalendarResponse;
    const events = data.events ?? [];

    return events.slice(0, limit).map((event): NewsItem => {
      const body = event.announcement_body;
      const gid = body?.gid ?? event.gid ?? "";
      const clanId = event.clan_steamid ?? "";
      const headline = body?.headline ?? event.event_name ?? "";
      const bodyText = body?.body ?? "";
      const summary = stripHtml(bodyText).slice(0, 240);

      let thumbnail: string | undefined;
      if (event.jsondata) {
        try {
          const json = JSON.parse(event.jsondata) as {
            localized_capsule_image?: Array<string | null>;
            localized_title_image?: Array<string | null>;
          };
          const capsule = json.localized_capsule_image?.find(
            (v): v is string => Boolean(v),
          );
          const title = json.localized_title_image?.find(
            (v): v is string => Boolean(v),
          );
          const file = capsule ?? title;
          if (file && clanId) thumbnail = clanImageUrl(clanId, file);
        } catch {
          // ignore malformed jsondata
        }
      }
      if (!thumbnail) thumbnail = firstImage(bodyText);
      if (!thumbnail) thumbnail = steamHeaderImage(appId);

      return {
        id: `steam-${appId}-${gid}`,
        title: headline,
        url: steamPermalink(gid, appId),
        publishedAt: event.rtime32_start_time
          ? new Date(event.rtime32_start_time * 1000).toISOString()
          : "",
        source: "steam-rss",
        sourceLabel: STEAM_LABEL,
        summary,
        thumbnail,
      };
    });
  } catch {
    return [];
  }
}

async function fetchYouTubeChannelNews(
  channelId: string,
  feed: NewsFeed,
  limit: number,
): Promise<NewsItem[]> {
  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`,
      { next: { revalidate: 21600 } },
    );
    if (!res.ok) return [];
    const xml = await res.text();
    const parsed = parser.parse(xml);
    const entries = parsed?.feed?.entry;
    if (!entries) return [];
    const list: AtomEntry[] = Array.isArray(entries) ? entries : [entries];

    return list.slice(0, limit).map((entry): NewsItem => {
      const id = entry.id ?? "";
      const linkEntry = Array.isArray(entry.link) ? entry.link[0] : entry.link;
      const summaryRaw =
        typeof entry.summary === "string" ? entry.summary : entry.summary?._text;
      return {
        id: `youtube-${id}`,
        title: entry.title ?? "",
        url: linkEntry?.href ?? "",
        publishedAt: toIsoDate(entry.published ?? entry.updated ?? ""),
        source: "youtube-channel",
        sourceLabel: { es: feed.nameEs, en: feed.nameEn },
        summary: summaryRaw?.slice(0, 240),
        thumbnail: entry["media:group"]?.["media:thumbnail"]?.url,
      };
    });
  } catch {
    return [];
  }
}

async function fetchGenericRss(
  feed: NewsFeed,
  limit: number,
): Promise<NewsItem[]> {
  try {
    const res = await fetch(feed.url, { next: { revalidate: 21600 } });
    if (!res.ok) return [];
    const xml = await res.text();
    const parsed = parser.parse(xml);

    const rssItems = parsed?.rss?.channel?.item;
    if (rssItems) {
      const list: RssItem[] = Array.isArray(rssItems) ? rssItems : [rssItems];
      return list.slice(0, limit).map((item): NewsItem => {
        const rawGuid =
          typeof item.guid === "string" ? item.guid : item.guid?._text;
        const id = rawGuid ?? item.link ?? `${feed.url}-${item.title}`;
        const description = item["content:encoded"] ?? item.description ?? "";
        return {
          id: `rss-${id}`,
          title: item.title ?? "",
          url: item.link ?? "",
          publishedAt: toIsoDate(item.pubDate ?? ""),
          source: "rss",
          sourceLabel: { es: feed.nameEs, en: feed.nameEn },
          summary: stripHtml(description).slice(0, 240),
          thumbnail: item.enclosure?.url ?? firstImage(description),
        };
      });
    }

    const atomEntries = parsed?.feed?.entry;
    if (atomEntries) {
      const list: AtomEntry[] = Array.isArray(atomEntries)
        ? atomEntries
        : [atomEntries];
      return list.slice(0, limit).map((entry): NewsItem => {
        const linkEntry = Array.isArray(entry.link) ? entry.link[0] : entry.link;
        const summaryRaw =
          typeof entry.summary === "string"
            ? entry.summary
            : entry.summary?._text;
        return {
          id: `rss-${entry.id ?? ""}`,
          title: entry.title ?? "",
          url: linkEntry?.href ?? "",
          publishedAt: toIsoDate(entry.published ?? entry.updated ?? ""),
          source: "rss",
          sourceLabel: { es: feed.nameEs, en: feed.nameEn },
          summary: summaryRaw ? stripHtml(summaryRaw).slice(0, 240) : undefined,
        };
      });
    }

    return [];
  } catch {
    return [];
  }
}

// Keyed by the API app hash (the `/app/<hash>/` segment of the endpoint URL).
// Each HoYoverse game uses a distinct hash; iAppId/iChanId vary too but are
// not always present (HSR's URL has no iAppId), so the hash is the reliable
// discriminator. To add a game: open Network tab on its official news page,
// copy the hash from the getContentList request URL, and map it to that
// game's article-detail base URL.
const HOYO_GAME_SITES: Record<string, string> = {
  a1b1f9d3315447cc: "https://genshin.hoyoverse.com/en/news/detail",
  "113fe6d3b4514cdd": "https://hsr.hoyoverse.com/en-us/news",
};

function hoyoArticleUrl(appHash: string, iInfoId: number | string): string {
  const base = HOYO_GAME_SITES[appHash] ?? `https://www.hoyolab.com/article`;
  return `${base}/${iInfoId}`;
}

interface HoyoItem {
  sTitle?: string;
  sIntro?: string;
  sUrl?: string;
  sContent?: string;
  sExt?: string;
  dtStartTime?: string;
  dtCreateTime?: string;
  iInfoId?: number;
}

interface HoyoResponse {
  retcode?: number;
  data?: {
    list?: HoyoItem[];
  };
}

function hoyoBannerFromExt(sExt: string): string | undefined {
  try {
    const ext = JSON.parse(sExt) as {
      banner?: Array<{ url?: string }>;
      "news-poster"?: Array<{ url?: string }>;
    };
    // Genshin uses `banner`; HSR uses `news-poster`. Same shape, different key.
    return ext.banner?.[0]?.url ?? ext["news-poster"]?.[0]?.url;
  } catch {
    return undefined;
  }
}

function hoyoToIso(dt: string): string {
  if (!dt) return "";
  // "2026-05-16 12:05:00" — assume UTC
  const iso = dt.replace(" ", "T") + "Z";
  const parsed = Date.parse(iso);
  return Number.isFinite(parsed) ? new Date(parsed).toISOString() : "";
}

async function fetchHoyoverseNews(
  feed: NewsFeed,
  limit: number,
): Promise<NewsItem[]> {
  try {
    const url = new URL(feed.url);
    url.searchParams.set("iPage", "1");
    url.searchParams.set("iPageSize", String(Math.max(limit, 10)));
    const appHash = url.pathname.match(/\/app\/([a-f0-9]+)\//)?.[1] ?? "";

    const res = await fetch(url.toString(), {
      next: { revalidate: 21600 },
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return [];
    const data = (await res.json()) as HoyoResponse;
    const items = data.data?.list ?? [];

    return items.slice(0, limit).map((item): NewsItem => {
      const iInfoId = item.iInfoId ?? 0;
      const externalUrl = item.sUrl?.trim();
      const articleUrl = externalUrl || hoyoArticleUrl(appHash, iInfoId);
      const summary = (item.sIntro || stripHtml(item.sContent ?? "")).slice(
        0,
        240,
      );
      const thumbnail =
        (item.sExt && hoyoBannerFromExt(item.sExt)) ??
        firstImage(item.sContent ?? "");

      return {
        id: `hoyoverse-${appHash}-${iInfoId}`,
        title: item.sTitle ?? "",
        url: articleUrl,
        publishedAt: hoyoToIso(item.dtStartTime ?? item.dtCreateTime ?? ""),
        source: "hoyoverse",
        sourceLabel: { es: feed.nameEs, en: feed.nameEn },
        summary,
        thumbnail,
      };
    });
  } catch {
    return [];
  }
}

function deriveSteamFeed(game: Pick<GameMeta, "stores">): NewsFeed | null {
  const steamStore = game.stores.find((s) => s.platform === "steam" && s.appId);
  if (!steamStore?.appId) return null;
  return {
    type: "steam-rss",
    url: steamFeedUrl(steamStore.appId),
    nameEs: STEAM_LABEL.es,
    nameEn: STEAM_LABEL.en,
    priority: 100,
  };
}

export function hasNewsSources(
  game: Pick<GameMeta, "stores" | "newsFeeds">,
): boolean {
  if (deriveSteamFeed(game)) return true;
  return Boolean(game.newsFeeds && game.newsFeeds.length > 0);
}

export async function getGameNews(
  game: Pick<GameMeta, "stores" | "newsFeeds">,
  limit = 20,
): Promise<NewsItem[]> {
  const perFeedLimit = Math.max(limit, 10);
  const tasks: Promise<NewsItem[]>[] = [];

  const steamFeed = deriveSteamFeed(game);
  if (steamFeed) {
    const appId = game.stores.find((s) => s.platform === "steam")?.appId;
    if (appId) tasks.push(fetchSteamNews(appId, perFeedLimit));
  }

  for (const feed of game.newsFeeds ?? []) {
    if (feed.type === "steam-rss") {
      const match = feed.url.match(/\/app\/(\d+)/);
      if (match?.[1]) tasks.push(fetchSteamNews(match[1], perFeedLimit));
    } else if (feed.type === "youtube-channel") {
      const channelMatch = feed.url.match(/channel_id=([A-Za-z0-9_-]+)/);
      const channelId = channelMatch?.[1] ?? feed.url;
      tasks.push(fetchYouTubeChannelNews(channelId, feed, perFeedLimit));
    } else if (feed.type === "hoyoverse") {
      tasks.push(fetchHoyoverseNews(feed, perFeedLimit));
    } else {
      tasks.push(fetchGenericRss(feed, perFeedLimit));
    }
  }

  const results = await Promise.all(tasks);
  const merged = results.flat();
  const seen = new Set<string>();
  const deduped = merged.filter((item) => {
    if (!item.id || seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });

  deduped.sort((a, b) => {
    const aTime = Date.parse(a.publishedAt) || 0;
    const bTime = Date.parse(b.publishedAt) || 0;
    return bTime - aTime;
  });

  return deduped.slice(0, limit);
}
