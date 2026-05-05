import { getTranslations } from "next-intl/server";
import { PlaylistSection } from "./PlaylistSection";
import { getLatestVideos } from "@/lib/youtube";
import type { Creator, Locale, PlaylistRef, YouTubeVideo } from "@/types";

interface PlaylistFeed {
  ref: PlaylistRef;
  videos: YouTubeVideo[];
}

interface Props {
  creator: Creator;
  gameId: string;
  locale: Locale;
}

export async function CreatorVideos({ creator, gameId, locale }: Props) {
  const t = await getTranslations("creator");

  const primaryYouTube = creator.platforms.find(
    (p) => p.type === "youtube" && p.primary,
  );
  const playlists = primaryYouTube?.gamePlaylists?.[gameId] ?? [];

  const [channelVideos, playlistFeeds] = await Promise.all([
    primaryYouTube?.channelId
      ? getLatestVideos({ channelId: primaryYouTube.channelId }, 6)
      : Promise.resolve([] as YouTubeVideo[]),
    playlists.length > 0
      ? Promise.all(
          playlists.map(async (ref) => ({
            ref,
            videos: await getLatestVideos({ playlistId: ref.id }, 6),
          })),
        ).then((feeds) => feeds.filter((f) => f.videos.length > 0))
      : Promise.resolve([] as PlaylistFeed[]),
  ]);

  if (channelVideos.length === 0 && playlistFeeds.length === 0) {
    return (
      <p className="rounded-lg border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
        {t("noVideos")}
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-10">
      {channelVideos.length > 0 && (
        <PlaylistSection
          heading={t("channelFeedFallback")}
          subtitle={t("videosFromChannelDisclaimer")}
          videos={channelVideos}
          locale={locale}
          watchOnYouTubeLabel={t("watchOnYouTube")}
          closeLabel={t("closeVideo")}
        />
      )}
      {playlistFeeds.map((feed) => (
        <PlaylistSection
          key={feed.ref.id}
          heading={feed.ref.name}
          subtitle={
            feed.ref.withDisclaimer ? t("playlistMixedContent") : undefined
          }
          videos={feed.videos}
          locale={locale}
          viewAllUrl={`https://www.youtube.com/playlist?list=${feed.ref.id}`}
          viewAllLabel={t("viewAllPlaylist")}
          watchOnYouTubeLabel={t("watchOnYouTube")}
          closeLabel={t("closeVideo")}
        />
      ))}
    </div>
  );
}
