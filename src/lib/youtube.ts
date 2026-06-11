import { XMLParser } from "fast-xml-parser";
import type { YouTubeVideo } from "@/types";

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "",
  textNodeName: "_text",
});

interface RssEntry {
  "yt:videoId"?: string;
  title?: string;
  link?: { href?: string } | { href?: string }[];
  published?: string;
  "media:group"?: {
    "media:thumbnail"?: { url?: string };
    "media:title"?: string;
  };
  author?: { name?: string };
}

const FEED_BASE = "https://www.youtube.com/feeds/videos.xml";

type FeedSource =
  | { channelId: string; playlistId?: never }
  | { playlistId: string; channelId?: never };

export async function getLatestVideos(
  source: FeedSource | undefined,
  limit = 6,
): Promise<YouTubeVideo[]> {
  if (!source) return [];

  const id = "channelId" in source ? source.channelId : source.playlistId;
  if (!id || id === "VERIFICAR") return [];

  const param = "channelId" in source ? "channel_id" : "playlist_id";
  const url = `${FEED_BASE}?${param}=${id}`;

  try {
    const res = await fetch(url, { next: { revalidate: 172800 } });
    if (!res.ok) return [];

    const xml = await res.text();
    const parsed = parser.parse(xml);

    const entries: RssEntry[] = (() => {
      const e = parsed?.feed?.entry;
      if (!e) return [];
      return Array.isArray(e) ? e : [e];
    })();

    return entries
      .slice(0, limit)
      .map((entry): YouTubeVideo | null => {
        const videoId = entry["yt:videoId"];
        if (!videoId) return null;
        const linkEntry = Array.isArray(entry.link) ? entry.link[0] : entry.link;
        return {
          id: videoId,
          title: entry.title ?? "",
          url: linkEntry?.href ?? `https://www.youtube.com/watch?v=${videoId}`,
          thumbnail:
            entry["media:group"]?.["media:thumbnail"]?.url ??
            `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
          publishedAt: entry.published ?? "",
        };
      })
      .filter((v): v is YouTubeVideo => v !== null);
  } catch {
    return [];
  }
}
