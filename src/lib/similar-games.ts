import type { Game } from "@/types";

const NOISE_GENRES = new Set(["online", "free-to-play"]);
const DEFAULT_LIMIT = 3;

function discriminatingGenres(game: Game): Set<string> {
  return new Set(game.genres.filter((g) => !NOISE_GENRES.has(g)));
}

interface Scored {
  game: Game;
  overlap: number;
  jaccard: number;
}

export function getSimilarGames(
  current: Game,
  all: Game[],
  limit = DEFAULT_LIMIT,
): Game[] {
  const others = all.filter((g) => g.id !== current.id);

  if (current.similarGames && current.similarGames.length > 0) {
    const byId = new Map(others.map((g) => [g.id, g]));
    return current.similarGames
      .map((id) => byId.get(id))
      .filter((g): g is Game => Boolean(g))
      .slice(0, limit);
  }

  const currentSet = discriminatingGenres(current);
  if (currentSet.size === 0) return [];

  const scored: Scored[] = [];
  for (const other of others) {
    const otherSet = discriminatingGenres(other);
    if (otherSet.size === 0) continue;
    let overlap = 0;
    for (const g of currentSet) if (otherSet.has(g)) overlap++;
    if (overlap === 0) continue;
    const union = currentSet.size + otherSet.size - overlap;
    scored.push({ game: other, overlap, jaccard: overlap / union });
  }

  scored.sort((a, b) => {
    if (b.overlap !== a.overlap) return b.overlap - a.overlap;
    if (b.jaccard !== a.jaccard) return b.jaccard - a.jaccard;
    return a.game.id.localeCompare(b.game.id);
  });

  return scored.slice(0, limit).map((s) => s.game);
}
