import fs from "node:fs";
import path from "node:path";

export interface CodexStats {
  games: number;
  tools: number;
  creators: number;
  resources: number;
  comparisons: number;
}

const CONTENT_ROOT = path.join(process.cwd(), "content", "games");

function listSubdirs(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
}

/**
 * Counts entries from the filesystem at build/render time.
 *
 * - games: top-level directories under content/games/
 * - tools: tool directories under content/games/<game>/tools/
 * - creators: creator directories under content/games/<game>/creators/
 * - resources: total resource items across all <game>/resources/<category>.json
 *   (each entry in the resources array counts as one)
 */
export function getStats(): CodexStats {
  const games = listSubdirs(CONTENT_ROOT);
  let toolCount = 0;
  let creatorCount = 0;
  let resourceCount = 0;
  let comparisonCount = 0;

  for (const game of games) {
    const gameDir = path.join(CONTENT_ROOT, game);
    toolCount += listSubdirs(path.join(gameDir, "tools")).length;
    creatorCount += listSubdirs(path.join(gameDir, "creators")).length;
    comparisonCount += listSubdirs(path.join(gameDir, "comparisons")).length;

    const resourcesDir = path.join(gameDir, "resources");
    if (fs.existsSync(resourcesDir)) {
      for (const entry of fs.readdirSync(resourcesDir)) {
        if (!entry.endsWith(".json")) continue;
        try {
          const raw = fs.readFileSync(path.join(resourcesDir, entry), "utf-8");
          const parsed = JSON.parse(raw) as { resources?: unknown[] };
          if (Array.isArray(parsed.resources)) {
            resourceCount += parsed.resources.length;
          }
        } catch {
          // Skip unparseable files; don't break the page over a stray JSON.
        }
      }
    }
  }

  return {
    games: games.length,
    tools: toolCount,
    creators: creatorCount,
    resources: resourceCount,
    comparisons: comparisonCount,
  };
}
