#!/usr/bin/env node
import { readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const args = process.argv.slice(2);
if (args.length < 2 || args.includes("--help") || args.includes("-h")) {
  console.log(`Usage:
  npm run verify <gameId> <toolId> [toolId ...]
  npm run verify -- --all <gameId>

Examples:
  npm run verify path-of-exile path-of-building
  npm run verify path-of-exile path-of-building poe-ninja filterblade
  npm run verify -- --all path-of-exile

Updates the "lastVerified" field in each tool's meta.json to today's
ISO date (YYYY-MM-DD), preserving the rest of the file's formatting.`);
  process.exit(args.length < 2 ? 1 : 0);
}

const cwd = process.cwd();
const today = new Date().toISOString().slice(0, 10);
const LAST_VERIFIED_RE = /("lastVerified"\s*:\s*)"[^"]*"/;

async function updateMeta(metaPath) {
  const raw = await readFile(metaPath, "utf8");
  if (!LAST_VERIFIED_RE.test(raw)) {
    return { metaPath, changed: false, reason: "lastVerified field not found" };
  }
  const replaced = raw.replace(LAST_VERIFIED_RE, `$1"${today}"`);
  if (replaced === raw) return { metaPath, changed: false };
  await writeFile(metaPath, replaced, "utf8");
  return { metaPath, changed: true };
}

async function listToolIds(gameId) {
  const toolsDir = path.join(cwd, "content", "games", gameId, "tools");
  if (!existsSync(toolsDir)) return [];
  const { readdir } = await import("node:fs/promises");
  const entries = await readdir(toolsDir, { withFileTypes: true });
  return entries.filter((e) => e.isDirectory()).map((e) => e.name);
}

async function run() {
  let toolIds = [];
  let gameId;

  if (args[0] === "--all") {
    gameId = args[1];
    if (!gameId) {
      console.error("Error: --all requires a gameId");
      process.exit(1);
    }
    toolIds = await listToolIds(gameId);
    if (toolIds.length === 0) {
      console.error(`No tools found in content/games/${gameId}/tools/`);
      process.exit(1);
    }
  } else {
    gameId = args[0];
    toolIds = args.slice(1);
  }

  const results = [];
  for (const toolId of toolIds) {
    const metaPath = path.join(
      cwd,
      "content",
      "games",
      gameId,
      "tools",
      toolId,
      "meta.json",
    );
    if (!existsSync(metaPath)) {
      console.error(`  ✗ ${gameId}/${toolId} — meta.json not found`);
      continue;
    }
    try {
      const { changed, reason } = await updateMeta(metaPath);
      const marker = changed ? "✓" : "·";
      const status = changed
        ? `updated to ${today}`
        : (reason ?? "already up to date");
      console.log(`  ${marker} ${gameId}/${toolId} — ${status}`);
      results.push({ toolId, changed });
    } catch (err) {
      console.error(`  ✗ ${gameId}/${toolId} — ${err.message}`);
    }
  }

  const updated = results.filter((r) => r.changed).length;
  console.log(`\n${updated} tool(s) updated.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
