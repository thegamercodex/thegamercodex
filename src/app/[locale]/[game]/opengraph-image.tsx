import { ImageResponse } from "next/og";
import {
  getAllResources,
  getCreators,
  getGame,
  getGameIds,
  getTools,
} from "@/lib/content";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/types";

export const runtime = "nodejs";
export const alt = "TheGamerCodex";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  const ids = await getGameIds();
  const out: { locale: string; game: string }[] = [];
  for (const locale of routing.locales) {
    for (const id of ids) {
      out.push({ locale, game: id });
    }
  }
  return out;
}

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string; game: string }>;
}) {
  const { locale, game: gameId } = await params;
  const loc = locale as Locale;
  const game = await getGame(gameId);
  const [tools, creators, resourceCollections] = await Promise.all([
    getTools(gameId),
    getCreators(gameId),
    getAllResources(gameId),
  ]);
  const resourceCount = resourceCollections.reduce(
    (n, c) => n + c.resources.length,
    0,
  );
  const tagline = loc === "es" ? game.taglineEs : game.taglineEn;
  const labels =
    loc === "es"
      ? { tools: "herramientas", creators: "creadores", resources: "recursos" }
      : { tools: "tools", creators: "creators", resources: "resources" };
  const theme = game.theme;

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: `linear-gradient(135deg, ${theme.background} 0%, ${theme.secondary} 55%, ${theme.primary} 130%)`,
          padding: "72px",
          color: theme.text,
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 56,
            left: 72,
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: `${theme.text}aa`,
          }}
        >
          TheGamerCodex
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 100,
            fontWeight: 700,
            letterSpacing: "-0.025em",
            lineHeight: 1,
            color: theme.accent,
            maxWidth: 1056,
          }}
        >
          {game.name}
        </div>

        {tagline ? (
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 30,
              lineHeight: 1.3,
              color: `${theme.text}cc`,
              maxWidth: 1000,
            }}
          >
            {tagline}
          </div>
        ) : null}

        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 24,
            gap: 18,
            color: `${theme.text}99`,
            alignItems: "center",
          }}
        >
          <span>
            {tools.length} {labels.tools}
          </span>
          <span>·</span>
          <span>
            {creators.length} {labels.creators}
          </span>
          <span>·</span>
          <span>
            {resourceCount} {labels.resources}
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
