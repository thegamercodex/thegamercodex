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

async function readJson<T>(filePath: string): Promise<T> {
  const raw = await fs.readFile(filePath, "utf8");
  return JSON.parse(raw) as T;
}

async function readMarkdown(filePath: string): Promise<string> {
  try {
    const raw = await fs.readFile(filePath, "utf8");
    const { content } = matter(raw);
    return content.trim();
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return "";
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

export async function getGame(gameId: string): Promise<Game> {
  const gameDir = path.join(GAMES_ROOT, gameId);
  const meta = await readJson<GameMeta>(path.join(gameDir, "meta.json"));
  const [descriptionEs, descriptionEn] = await Promise.all([
    readMarkdown(path.join(gameDir, "es.md")),
    readMarkdown(path.join(gameDir, "en.md")),
  ]);
  return { ...meta, descriptionEs, descriptionEn };
}

export async function getToolIds(gameId: string): Promise<string[]> {
  return listDirs(path.join(GAMES_ROOT, gameId, "tools"));
}

export async function getTools(gameId: string): Promise<Tool[]> {
  const ids = await getToolIds(gameId);
  return Promise.all(ids.map((id) => getTool(gameId, id)));
}

export async function getTool(
  gameId: string,
  toolId: string,
): Promise<Tool> {
  const toolDir = path.join(GAMES_ROOT, gameId, "tools", toolId);
  const meta = await readJson<ToolMeta>(path.join(toolDir, "meta.json"));
  const [contentEs, contentEn] = await Promise.all([
    readMarkdown(path.join(toolDir, "es.md")),
    readMarkdown(path.join(toolDir, "en.md")),
  ]);
  return { ...meta, contentEs, contentEn };
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
