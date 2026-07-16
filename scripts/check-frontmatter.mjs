#!/usr/bin/env node
/**
 * check-frontmatter.mjs
 *
 * Valida que el frontmatter YAML de cada `.md` de contenido parsee con
 * gray-matter (el mismo parser que usa el sitio en build/runtime). Atrapa
 * el error clase "colon sin comillas" (`description: ...de principio a
 * fin: planificar...`) que js-yaml lee como mapping anidado y hace throw
 * durante el prerender de páginas y del sitemap.xml — rompiendo el build
 * de Vercel de una forma que ni el typecheck ni el lint de español agarran.
 *
 * Modo único: valida y sale con código 1 si algún archivo no parsea,
 * imprimiendo `file:line:col — razón`.
 *
 * Scope: archivos `.md` staged bajo content/. Sin staged files, escanea
 * todo content/ (modo audit). Espeja el patrón de fix-spanish-neutro.mjs.
 */

import { execSync } from "node:child_process";
import { readFileSync, existsSync, readdirSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_ROOT = "content";

function getStagedMarkdown() {
  try {
    const out = execSync("git diff --cached --name-only --diff-filter=ACMR", {
      encoding: "utf-8",
    });
    return out
      .split("\n")
      .filter(Boolean)
      .filter((f) => f.endsWith(".md"))
      .filter((f) => f.startsWith("content/"))
      .filter((f) => existsSync(f));
  } catch {
    return [];
  }
}

function walkMarkdown(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkMarkdown(fp));
    else if (entry.name.endsWith(".md")) out.push(fp);
  }
  return out;
}

const staged = getStagedMarkdown();
const files = staged.length > 0 ? staged : walkMarkdown(CONTENT_ROOT);
const scope = staged.length > 0 ? "staged" : "all content";

let broken = 0;
for (const file of files) {
  const raw = readFileSync(file, "utf-8");
  try {
    matter(raw);
  } catch (err) {
    broken++;
    const mark = err.mark;
    const where =
      mark && typeof mark.line === "number"
        ? `:${mark.line + 1}:${mark.column + 1}`
        : "";
    const reason = err.reason ?? err.message.split("\n")[0];
    console.error(`${file}${where}: frontmatter YAML inválido — ${reason}`);
    console.error(
      `  Fix: si un valor contiene ": " (dos puntos + espacio), envolverlo en comillas dobles.`,
    );
  }
}

if (broken > 0) {
  console.error(
    `\n✖ Frontmatter lint: ${broken} archivo(s) con YAML inválido en ${scope}.`,
  );
  process.exit(1);
}

console.log(
  `✓ Frontmatter lint: clean across ${scope} (${files.length} files).`,
);
process.exit(0);
