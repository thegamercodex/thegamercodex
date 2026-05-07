#!/usr/bin/env node
import { readFile, writeFile, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const cwd = process.cwd();
const gamesDir = path.join(cwd, "content", "games");
const outputPath = path.join(cwd, "docs", "CONTENT_INVENTORY.md");

async function readJson(file) {
  const raw = await readFile(file, "utf8");
  return JSON.parse(raw);
}

async function listDirs(dir) {
  if (!existsSync(dir)) return [];
  const entries = await readdir(dir, { withFileTypes: true });
  return entries
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort();
}

async function listJsonFiles(dir) {
  if (!existsSync(dir)) return [];
  const entries = await readdir(dir, { withFileTypes: true });
  return entries
    .filter((e) => e.isFile() && e.name.endsWith(".json"))
    .map((e) => e.name)
    .sort();
}

async function inventoryGame(gameId) {
  const gameDir = path.join(gamesDir, gameId);
  const gameMeta = await readJson(path.join(gameDir, "meta.json"));

  const toolIds = await listDirs(path.join(gameDir, "tools"));
  const tools = await Promise.all(
    toolIds.map(async (id) => {
      const meta = await readJson(
        path.join(gameDir, "tools", id, "meta.json"),
      );
      return { id, name: meta.name ?? id };
    }),
  );

  const creatorIds = await listDirs(path.join(gameDir, "creators"));
  const creators = await Promise.all(
    creatorIds.map(async (id) => {
      const meta = await readJson(
        path.join(gameDir, "creators", id, "meta.json"),
      );
      return { id, name: meta.name ?? id };
    }),
  );

  const resourceFiles = await listJsonFiles(path.join(gameDir, "resources"));
  const resources = await Promise.all(
    resourceFiles.map(async (file) => {
      const data = await readJson(path.join(gameDir, "resources", file));
      const category = data.category ?? path.basename(file, ".json");
      const count = Array.isArray(data.resources) ? data.resources.length : 0;
      return { category, count };
    }),
  );

  return {
    id: gameId,
    name: gameMeta.name ?? gameId,
    tools,
    creators,
    resources,
  };
}

function formatGameSection(game) {
  const lines = [];
  lines.push(`### ${game.name} (\`${game.id}\`)`);
  lines.push("");

  lines.push(`**Tools (${game.tools.length})**: ${
    game.tools.length === 0
      ? "_(none)_"
      : game.tools.map((t) => `${t.name} (\`${t.id}\`)`).join(", ")
  }`);
  lines.push("");

  lines.push(`**Creators (${game.creators.length})**: ${
    game.creators.length === 0
      ? "_(none)_"
      : game.creators.map((c) => `${c.name} (\`${c.id}\`)`).join(", ")
  }`);
  lines.push("");

  const resourceTotal = game.resources.reduce((sum, r) => sum + r.count, 0);
  lines.push(
    `**Resources (${game.resources.length} categories · ${resourceTotal} items)**:`,
  );
  if (game.resources.length === 0) {
    lines.push("- _(none)_");
  } else {
    for (const r of game.resources) {
      lines.push(`- \`${r.category}\` — ${r.count} items`);
    }
  }
  lines.push("");

  return lines.join("\n");
}

function formatSummaryRow(game) {
  const resourceTotal = game.resources.reduce((sum, r) => sum + r.count, 0);
  return `| \`${game.id}\` | ${game.name} | ${game.tools.length} | ${game.creators.length} | ${game.resources.length} | ${resourceTotal} |`;
}

async function run() {
  const gameIds = await listDirs(gamesDir);
  if (gameIds.length === 0) {
    console.error(`No games found in ${gamesDir}`);
    process.exit(1);
  }

  const games = await Promise.all(gameIds.map(inventoryGame));

  const today = new Date().toISOString().slice(0, 10);
  const totals = games.reduce(
    (acc, g) => ({
      tools: acc.tools + g.tools.length,
      creators: acc.creators + g.creators.length,
      categories: acc.categories + g.resources.length,
      items:
        acc.items +
        g.resources.reduce((sum, r) => sum + r.count, 0),
    }),
    { tools: 0, creators: 0, categories: 0, items: 0 },
  );

  const lines = [];
  lines.push("# Content Inventory");
  lines.push("");
  lines.push(
    "> Auto-generado por `npm run inventory`. NO editar a mano. La fuente de verdad es `content/games/`.",
  );
  lines.push(`> Última generación: ${today}`);
  lines.push("");
  lines.push("## Resumen");
  lines.push("");
  lines.push(
    `${games.length} juegos · ${totals.tools} tools · ${totals.creators} creators · ${totals.categories} categorías · ${totals.items} resources items`,
  );
  lines.push("");
  lines.push("| Game ID | Nombre | Tools | Creators | Categorías | Items |");
  lines.push("|---|---|---:|---:|---:|---:|");
  for (const g of games) lines.push(formatSummaryRow(g));
  lines.push("");
  lines.push("## Por juego");
  lines.push("");
  for (const g of games) lines.push(formatGameSection(g));

  const output = lines.join("\n").trimEnd() + "\n";
  await writeFile(outputPath, output, "utf8");

  console.log(
    `Inventory written to ${path.relative(cwd, outputPath)} — ${games.length} games, ${totals.tools} tools, ${totals.creators} creators, ${totals.items} resources`,
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
