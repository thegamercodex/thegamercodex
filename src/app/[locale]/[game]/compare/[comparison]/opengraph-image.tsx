import { ImageResponse } from "next/og";
import {
  getComparison,
  getComparisonIds,
  getGame,
  getGameIds,
  getTool,
} from "@/lib/content";
import type { Locale } from "@/types";

export const runtime = "nodejs";
export const alt = "TheGamerCodex comparison";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  const gameIds = await getGameIds();
  const out: { locale: string; game: string; comparison: string }[] = [];
  for (const gameId of gameIds) {
    const ids = await getComparisonIds(gameId);
    for (const id of ids) {
      out.push({ locale: "es", game: gameId, comparison: id });
      out.push({ locale: "en", game: gameId, comparison: id });
    }
  }
  return out;
}

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string; game: string; comparison: string }>;
}) {
  const { locale, game: gameId, comparison: comparisonId } = await params;
  const loc = locale as Locale;
  const game = await getGame(gameId);
  const comparison = await getComparison(gameId, comparisonId);
  const [toolA, toolB] = await Promise.all([
    getTool(gameId, comparison.toolIds[0]),
    getTool(gameId, comparison.toolIds[1]),
  ]);
  const theme = game.theme;
  const eyebrow = loc === "es" ? "Comparativa" : "Comparison";
  const gameLabel = loc === "es" ? "En" : "For";

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
          TheGamerCodex · {eyebrow}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            maxWidth: 1056,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 700,
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
              color: theme.accent,
            }}
          >
            {toolA.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 42,
              fontWeight: 600,
              letterSpacing: "0.05em",
              color: `${theme.text}aa`,
              textTransform: "uppercase",
            }}
          >
            vs
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 700,
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
              color: theme.accent,
            }}
          >
            {toolB.name}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 56,
            left: 72,
            display: "flex",
            fontSize: 24,
            color: `${theme.text}99`,
          }}
        >
          {gameLabel} {game.name}
        </div>
      </div>
    ),
    { ...size },
  );
}
