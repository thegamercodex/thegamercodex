import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type {
  Creator,
  CreatorMeta,
  Game,
  GameMeta,
  Locale,
  ResourceCollection,
  Tool,
  ToolMeta,
} from "@/types";

const CONTENT_ROOT = path.join(process.cwd(), "content");
const GAMES_ROOT = path.join(CONTENT_ROOT, "games");
const PAGES_ROOT = path.join(CONTENT_ROOT, "pages");

interface StaticPageFrontmatter {
  title: string;
  description: string;
}

export interface StaticPage {
  title: string;
  description: string;
  body: string;
}

export async function getStaticPage(
  slug: string,
  locale: Locale,
): Promise<StaticPage> {
  const filePath = path.join(PAGES_ROOT, slug, `${locale}.md`);
  const { data, content } = await readMarkdown<StaticPageFrontmatter>(filePath);
  return {
    title: data.title ?? "",
    description: data.description ?? "",
    body: content,
  };
}

async function readJson<T>(filePath: string): Promise<T> {
  const raw = await fs.readFile(filePath, "utf8");
  return JSON.parse(raw) as T;
}

interface ParsedMarkdown<T = Record<string, unknown>> {
  data: T;
  content: string;
}

async function readMarkdown<T = Record<string, unknown>>(
  filePath: string,
): Promise<ParsedMarkdown<T>> {
  try {
    const raw = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(raw);
    return { data: data as T, content: content.trim() };
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") {
      return { data: {} as T, content: "" };
    }
    throw err;
  }
}

async function listDirs(dirPath: string): Promise<string[]> {
  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    return entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name);
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw err;
  }
}

export async function getGameIds(): Promise<string[]> {
  return listDirs(GAMES_ROOT);
}

export async function getGames(): Promise<Game[]> {
  const ids = await getGameIds();
  return Promise.all(ids.map((id) => getGame(id)));
}

interface GameFrontmatter {
  title?: string;
  tagline?: string;
  description?: string;
}

export async function getGame(gameId: string): Promise<Game> {
  const gameDir = path.join(GAMES_ROOT, gameId);
  const meta = await readJson<GameMeta>(path.join(gameDir, "meta.json"));
  const [es, en] = await Promise.all([
    readMarkdown<GameFrontmatter>(path.join(gameDir, "es.md")),
    readMarkdown<GameFrontmatter>(path.join(gameDir, "en.md")),
  ]);
  return {
    ...meta,
    taglineEs: es.data.tagline ?? "",
    taglineEn: en.data.tagline ?? "",
    summaryEs: es.data.description ?? "",
    summaryEn: en.data.description ?? "",
    descriptionEs: es.content,
    descriptionEn: en.content,
  };
}

export async function getToolIds(gameId: string): Promise<string[]> {
  return listDirs(path.join(GAMES_ROOT, gameId, "tools"));
}

export async function getTools(gameId: string): Promise<Tool[]> {
  const ids = await getToolIds(gameId);
  return Promise.all(ids.map((id) => getTool(gameId, id)));
}

interface ToolFrontmatter {
  title?: string;
  description?: string;
  quickTake?: string;
}

export async function getTool(
  gameId: string,
  toolId: string,
): Promise<Tool> {
  const toolDir = path.join(GAMES_ROOT, gameId, "tools", toolId);
  const meta = await readJson<ToolMeta>(path.join(toolDir, "meta.json"));
  const [es, en] = await Promise.all([
    readMarkdown<ToolFrontmatter>(path.join(toolDir, "es.md")),
    readMarkdown<ToolFrontmatter>(path.join(toolDir, "en.md")),
  ]);
  return {
    ...meta,
    quickTakeEs: es.data.quickTake ?? "",
    quickTakeEn: en.data.quickTake ?? "",
    contentEs: es.content,
    contentEn: en.content,
  };
}

export async function getCreatorIds(gameId: string): Promise<string[]> {
  return listDirs(path.join(GAMES_ROOT, gameId, "creators"));
}

export async function getCreators(gameId: string): Promise<Creator[]> {
  const ids = await getCreatorIds(gameId);
  return Promise.all(ids.map((id) => getCreator(gameId, id)));
}

export async function getCreator(
  gameId: string,
  creatorId: string,
): Promise<Creator> {
  const creatorDir = path.join(GAMES_ROOT, gameId, "creators", creatorId);
  return readJson<CreatorMeta>(path.join(creatorDir, "meta.json"));
}

export async function getResources(
  gameId: string,
  category: string,
): Promise<ResourceCollection> {
  const filePath = path.join(
    GAMES_ROOT,
    gameId,
    "resources",
    `${category}.json`,
  );
  return readJson<ResourceCollection>(filePath);
}

export async function getAllResources(
  gameId: string,
): Promise<ResourceCollection[]> {
  const dir = path.join(GAMES_ROOT, gameId, "resources");
  let entries: string[];
  try {
    entries = await fs.readdir(dir);
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw err;
  }
  const jsonFiles = entries.filter((name) => name.endsWith(".json"));
  return Promise.all(
    jsonFiles.map((name) =>
      getResources(gameId, name.replace(/\.json$/, "")),
    ),
  );
}

export function localizedField<T>(
  obj: Record<string, unknown>,
  baseKey: string,
  locale: Locale,
): T {
  const suffix = locale === "es" ? "Es" : "En";
  return obj[`${baseKey}${suffix}`] as T;
}
