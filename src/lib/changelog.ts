import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import { parseDateOnly } from "@/lib/format";

/**
 * Granular event recorded against a changelog entry. The changelog is
 * scoped intentionally to CRUD on the four cataloged entity types — games,
 * tools, creators, and resources. UI improvements, infrastructure work,
 * and other technical changes are not tracked here.
 *
 * Each entry's `events` array represents the net delta versus the
 * previously shipped state — a tool that was added on dev and reverted
 * before promoting to main is not listed at all (no add+remove pair).
 * Editorial discipline, not enforced by code.
 */
export type ChangelogEventType = "tool" | "creator" | "game" | "resource";

export type ChangelogEventAction = "added" | "changed" | "removed" | "moved";

export interface ChangelogEvent {
  type: ChangelogEventType;
  action: ChangelogEventAction;
  /** Display name (tool/creator/game name, or the feature label). */
  name: string;
  /** For tool/creator/resource — the game catalog this event belongs to. */
  gameId?: string;
  /** For action: "moved" — the game it came from. */
  fromGameId?: string;
  /** For action: "moved" — the game it went to. */
  toGameId?: string;
  /** Optional bilingual context shown next to the event. */
  noteEs?: string;
  noteEn?: string;
}

export interface ChangelogEntryFrontmatter {
  date: string;
  titleEs: string;
  titleEn: string;
  summaryEs: string;
  summaryEn: string;
  /**
   * Set when this release adds a new game to the codex. Matches a game id.
   * Drives the "Nuevo juego" badge and the entry's accent border.
   * Independent from events[] — set explicitly.
   */
  gameAdded?: string | null;
  /** Structured events shipped in this release. */
  events?: ChangelogEvent[];
}

export interface ChangelogEntry extends ChangelogEntryFrontmatter {
  slug: string;
  bodyEs: string;
  bodyEn: string;
  /** Body rendered to HTML (per locale) at build time. */
  htmlEs: string;
  htmlEn: string;
  /** Always present (defaulted to []) for cleaner rendering. */
  events: ChangelogEvent[];
}

const CHANGELOG_ROOT = path.join(process.cwd(), "content", "changelog");

/**
 * Parses every `<YYYY-MM-DD>-<slug>.md` under content/changelog/ and returns
 * them sorted desc by date (most recent first). The body uses bilingual
 * fenced sections separated by `<!-- en -->` and `<!-- es -->` markers, or
 * the file may declare bodyEs / bodyEn directly in frontmatter for short
 * entries.
 */
export function getChangelogEntries(): ChangelogEntry[] {
  if (!fs.existsSync(CHANGELOG_ROOT)) return [];

  const files = fs
    .readdirSync(CHANGELOG_ROOT, { withFileTypes: true })
    .filter((d) => d.isFile() && d.name.endsWith(".md"))
    .map((d) => d.name);

  const entries: ChangelogEntry[] = [];

  for (const filename of files) {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(CHANGELOG_ROOT, filename), "utf-8");
    const parsed = matter(raw);
    const fm = parsed.data as ChangelogEntryFrontmatter & {
      bodyEs?: string;
      bodyEn?: string;
    };

    // Extract bilingual bodies. Prefer fenced markers in body, fall back to
    // frontmatter fields for shorter entries.
    let bodyEs = fm.bodyEs ?? "";
    let bodyEn = fm.bodyEn ?? "";

    if (!bodyEs && !bodyEn) {
      const body = parsed.content;
      const esMatch = body.match(/<!--\s*es\s*-->([\s\S]*?)(?=<!--\s*en\s*-->|$)/);
      const enMatch = body.match(/<!--\s*en\s*-->([\s\S]*?)(?=<!--\s*es\s*-->|$)/);
      if (esMatch) bodyEs = esMatch[1].trim();
      if (enMatch) bodyEn = enMatch[1].trim();
      // If no fence markers, treat the whole body as Spanish (default locale).
      if (!bodyEs && !bodyEn) {
        bodyEs = body.trim();
        bodyEn = body.trim();
      }
    }

    entries.push({
      slug,
      date: fm.date,
      titleEs: fm.titleEs,
      titleEn: fm.titleEn,
      summaryEs: fm.summaryEs,
      summaryEn: fm.summaryEn,
      gameAdded: fm.gameAdded ?? null,
      events: fm.events ?? [],
      bodyEs,
      bodyEn,
      htmlEs: marked.parse(bodyEs, { async: false }) as string,
      htmlEn: marked.parse(bodyEn, { async: false }) as string,
    });
  }

  // Sort desc by date (most recent first).
  entries.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  return entries;
}

export function getMostRecentChangelogDate(): string | null {
  const entries = getChangelogEntries();
  return entries.length > 0 ? entries[0].date : null;
}

/**
 * Days elapsed between today and the most recent changelog entry.
 * Returns null when there is no changelog yet.
 */
export function daysSinceLastUpdate(): number | null {
  const date = getMostRecentChangelogDate();
  if (!date) return null;
  const last = parseDateOnly(date);
  const now = new Date();
  const ms = now.getTime() - last.getTime();
  return Math.max(0, Math.floor(ms / (1000 * 60 * 60 * 24)));
}
