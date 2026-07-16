#!/usr/bin/env node
/**
 * fix-spanish-neutro.mjs
 *
 * Audita y normaliza voseo + marcadores rioplatenses en contenido español
 * del codex. Aplica la regla "español neutro" definida en docs/RULES.md.
 *
 * Modos:
 *   --fix    Aplica los reemplazos in-place y re-stages los archivos con git add.
 *            (default si se invoca desde el Claude hook)
 *   --check  Sale con código 1 si encuentra voseo, imprime file:line de los matches.
 *
 * Scope: solo archivos staged en git. Procesa .md y .json bajo content/ y messages/.
 * Cuando se invoca sin staged files, escanea todo el repo (modo audit).
 *
 * El map de reemplazos es la fuente canónica del lint Spanish neutro y reemplaza
 * el grep limitado de docs/RULES.md.
 */

import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const FIX = args.includes("--fix");
const CHECK = args.includes("--check") || !FIX;

// =============================================================================
// VOSEO MAP — fuente canónica del lint Spanish neutro
// =============================================================================
// Format: vos → tú. Case-insensitive matching, preserva capitalización del match.

const INDICATIVE = {
  // Básicos lintados en RULES.md
  "tenés": "tienes",
  "podés": "puedes",
  "querés": "quieres",
  "sabés": "sabes",
  "necesitás": "necesitas",
  "usás": "usas",
  "jugás": "juegas",
  "buscás": "buscas",
  "comprás": "compras",
  "seguís": "sigues",
  "encontrás": "encuentras",
  "guardás": "guardas",
  "abrís": "abres",
  "bajás": "bajas",
  "instalás": "instalas",
  "verificás": "verificas",
  "elegís": "eliges",
  "aprendés": "aprendes",
  "recibís": "recibes",
  "hacés": "haces",
  "leés": "lees",
  "escribís": "escribes",
  "esperás": "esperas",
  "mejorás": "mejoras",
  "repetís": "repites",
  "construís": "construyes",
  "completás": "completas",
  "recordás": "recuerdas",
  "arrancás": "arrancas",
  "volvés": "vuelves",
  "mirás": "miras",
  "extraés": "extraes",
  "modificás": "modificas",
  "hackeás": "hackeas",
  "ensamblás": "ensamblas",
  "refinás": "refinas",
  "aterrizás": "aterrizas",
  "scrolleás": "haces scroll",
  "cliqueás": "haces click",
  "decompilás": "decompilas",
  "recompilás": "recompilas",
  "viajás": "viajas",
  "cazás": "cazas",
  "escaneás": "escaneas",
  "despegás": "despegas",
  "minás": "minas",
  // Extras encontrados en auditoría 2026-05-22
  "ajustás": "ajustas",
  "animás": "animas",
  "aparecés": "apareces",
  "aplicás": "aplicas",
  "armás": "armas",
  "arrastrás": "arrastras",
  "atendés": "atiendes",
  "beneficiás": "beneficias",
  "caés": "caes",
  "calculás": "calculas",
  "checkeás": "chequeas",
  "chequeás": "chequeas",
  "clickeás": "haces click",
  "colectás": "recolectas",
  "colocás": "colocas",
  "combinás": "combinas",
  "commiteás": "commiteas",
  "comparás": "comparas",
  "compartís": "compartes",
  "confundís": "confundes",
  "conseguís": "consigues",
  "consultás": "consultas",
  "contribuís": "contribuyes",
  "coordinás": "coordinas",
  "copiás": "copias",
  "corrés": "corres",
  "crafteás": "crafteas",
  "creés": "creas",
  "cubrís": "cubres",
  "debés": "debes",
  "deducís": "deduces",
  "definís": "defines",
  "dibujás": "dibujas",
  "documentás": "documentas",
  "downgradeás": "haces downgrade",
  "editás": "editas",
  "empezás": "empiezas",
  "entendés": "entiendes",
  "enterás": "enteras",
  "entrás": "entras",
  "escalás": "escalas",
  "escuchás": "escuchas",
  "evaluás": "evalúas",
  "evitás": "evitas",
  "experimentás": "experimentas",
  "explorás": "exploras",
  "exponés": "expones",
  "fallás": "fallas",
  "farmás": "farmeas",
  "farmeás": "farmeas",
  "fijás": "fijas",
  "filtrás": "filtras",
  "formás": "formas",
  "ganás": "ganas",
  "generás": "generas",
  "hosteás": "hosteas",
  "ignorás": "ignoras",
  "importás": "importas",
  "indicás": "indicas",
  "ingresás": "ingresas",
  "inputás": "introduces",
  "internalizás": "internalizas",
  "introducís": "introduces",
  "levelás": "levelas",
  "linkeás": "enlazas",
  "listás": "listas",
  "llegás": "llegas",
  "llenás": "llenas",
  "llevás": "llevas",
  "mandás": "envías",
  "mantenés": "mantienes",
  "markeás": "marcas",
  "metés": "metes",
  "modeás": "modeas",
  "modelás": "modelas",
  "morís": "mueres",
  "mostrás": "muestras",
  "navegás": "navegas",
  "necesités": "necesites",
  "obtenés": "obtienes",
  "optimizás": "optimizas",
  "pedís": "pides",
  "pegás": "pegas",
  "pensás": "piensas",
  "perdés": "pierdes",
  "perfeccionás": "perfeccionas",
  "planeás": "planeas",
  "planificás": "planificas",
  "postás": "publicas",
  "posteás": "publicas",
  "preferís": "prefieres",
  "probás": "pruebas",
  "publicás": "publicas",
  "quedás": "quedas",
  "querás": "quieras",
  "rastreás": "rastreas",
  "recreás": "recreas",
  "referenciás": "referencias",
  "releés": "relees",
  "revisás": "revisas",
  "rompés": "rompes",
  "rotás": "rotas",
  "saltás": "saltas",
  "salvás": "guardas",
  "screenshoteás": "tomas screenshots",
  "seleccionás": "seleccionas",
  "servís": "sirves",
  "shareás": "compartes",
  "simulás": "simulas",
  "subís": "subes",
  "suscribís": "suscribes",
  "switchás": "cambias",
  "terminás": "terminas",
  "tipeás": "escribes",
  "tocás": "tocas",
  "tomás": "tomas",
  "tradeás": "tradeas",
  "unís": "unes",
  "usés": "uses",
  "validás": "validas",
  "valorás": "valoras",
  "vendés": "vendes",
  "venís": "vienes",
  "violás": "violas",
  "vivís": "vives",
};

const IMPERATIVE = {
  // Básicos lintados en RULES.md
  "leé": "lee",
  "mirá": "mira",
  "hacé": "haz",
  "poné": "pon",
  "fijate": "fíjate",
  "andá": "anda",
  "buscá": "busca",
  "intentá": "intenta",
  "configurá": "configura",
  "verificá": "verifica",
  "guardá": "guarda",
  "cargá": "carga",
  "abrí": "abre",
  "cerrá": "cierra",
  "tocá": "toca",
  "usá": "usa",
  "esperá": "espera",
  "elegí": "elige",
  "empezá": "empieza",
  "seguí": "sigue",
  "conseguí": "consigue",
  "comprá": "compra",
  "jugá": "juega",
  "instalá": "instala",
  "bajá": "baja",
  "escribí": "escribe",
  "dejá": "deja",
  "tené": "ten",
  "extraé": "extrae",
  "decompilá": "decompila",
  "recompilá": "recompila",
  "scrolleá": "haz scroll",
  // Extras
  "aceptá": "acepta",
  "activá": "activa",
  "adaptá": "adapta",
  "agregá": "agrega",
  "anotá": "anota",
  "aplicá": "aplica",
  "arrancá": "arranca",
  "asegurate": "asegúrate",
  "asignate": "asígnate",
  "automatizá": "automatiza",
  "autorizá": "autoriza",
  "bookmarkeá": "bookmarkea",
  "browseá": "navega",
  "cambiá": "cambia",
  "capturá": "captura",
  "chequeá": "chequea",
  "clickeá": "haz click",
  "cliqueá": "haz click",
  "combiná": "combina",
  "compará": "compara",
  "complementá": "complementa",
  "completá": "completa",
  "conectá": "conecta",
  "confirmá": "confirma",
  "considerá": "considera",
  "contrastá": "contrasta",
  "coordiná": "coordina",
  "creá": "crea",
  "cruzá": "cruza",
  "desactivá": "desactiva",
  "descargá": "descarga",
  "dibujá": "dibuja",
  "diseñá": "diseña",
  "editá": "edita",
  "ejecutá": "ejecuta",
  "eliminá": "elimina",
  "encontrá": "encuentra",
  "entrá": "entra",
  "escalá": "escala",
  "experimentá": "experimenta",
  "explorá": "explora",
  "exportá": "exporta",
  "filtrá": "filtra",
  "formulá": "formula",
  "identificá": "identifica",
  "ignorá": "ignora",
  "importá": "importa",
  "ingresá": "ingresa",
  "jumpá": "salta",
  "lanzá": "lanza",
  "linkeá": "enlaza",
  "marcá": "marca",
  "markeá": "marca",
  "migrá": "migra",
  "movelo": "muévelo",
  "navegá": "navega",
  "nombrá": "nombra",
  "notá": "nota",
  "optimizá": "optimiza",
  "pegalo": "pégalo",
  "pegala": "pégala",
  "pegá": "pega",
  "pická": "elige",
  "planificá": "planifica",
  "planeá": "planea",
  "ponelo": "ponlo",
  "postergá": "posterga",
  "practicá": "practica",
  "presupuestá": "presupuesta",
  "probá": "prueba",
  "progresá": "progresa",
  "refrescá": "refresca",
  "replicá": "replica",
  "revisá": "revisa",
  "rotá": "rota",
  "scrollá": "scrollea",
  "selectá": "selecciona",
  "seleccioná": "selecciona",
  "shareá": "comparte",
  "sumalo": "súmalo",
  "sumate": "súmate",
  "suplementá": "suplementa",
  "testeá": "testea",
  "tirá": "tira",
  "tomá": "toma",
  "tomalo": "tómalo",
  "updateá": "actualiza",
  "vinculá": "vincula",
  "visitá": "visita",
  "visitalo": "visítalo",
};

// Capitalize-after-sentence-boundary common verbs (post-fix recapitalization)
const SENTENCE_STARTERS = [
  "usa","mira","haz","pon","ingresa","comparte","busca","abre","baja","instala",
  "espera","empieza","elige","deja","carga","guarda","lee","configura","verifica",
  "mueve","tira","tiras","puedes","tienes","quieres","sabes","necesitas","usas",
  "juegas","buscas","guardas","eliges","aprendes","recibes","haces","lees",
  "escribes","esperas","construyes","completas","recuerdas","arranca","arrancas",
  "migra","crea","creas","navega","lanza","lanzas","descarga","descargas",
  "instalas","verificas","modificas","cierras","cierra","valoras","modeas",
  "pruebas","desactivas","corres","limpias","fijas","sueltas","pasas","muestras",
  "cubres","evitas","cumples","mueves","asumes","rebajas","agregas","apuntas",
  "subes","compras","iteras","compilas","pones","distribuyes","empaquetas",
  "entiendes","enteras","experimentas","fuerzas","generas","importas","enlazas",
  "envías","materializas","odias","pierdes","planeas","previsualizas","redibujas",
  "reduces","regeneras","replicas","revisas","selecciona","seleccionas","terminas",
  "unes","vienes","considera","entra","equipa","pega","planifica","prueba",
  "regenera","replica","testea","acepta","asignas","anota","automatiza","compartes",
  "beneficias","calculas","cazas","combinas","contribuyes","coordinas","editas",
  "escuchas","exploras","expones","filtras","ganas","introduces","levelas",
  "listas","llenas","metes","optimizas","pides","prefieres","recreas",
  "referencias","simulas","suscribes","cambias","validas","vendes","viajas",
  "violas","formula","publicas","aplicas","chequeas","uses","crafteas","anotas",
  "piensas","vives","copias","documentas","escalas","mueres","quedas","decides",
  "ejecutas","eliminas","exportas","identificas","ignoras","mantienes","marcas",
  "notas",
];

// =============================================================================
// Implementation
// =============================================================================

const FULL_MAP = { ...INDICATIVE, ...IMPERATIVE };

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function preserveCase(matched, replacement) {
  if (matched[0] === matched[0].toUpperCase() && matched[0] !== matched[0].toLowerCase()) {
    return replacement[0].toUpperCase() + replacement.slice(1);
  }
  return replacement;
}

function applyFixes(content) {
  let modified = content;
  const hits = [];
  for (const [vos, neut] of Object.entries(FULL_MAP)) {
    const pattern = new RegExp(
      `(?<![a-záéíóúñA-ZÁÉÍÓÚÑ])${escapeRegex(vos)}(?![a-záéíóúñA-ZÁÉÍÓÚÑ])`,
      "gi",
    );
    modified = modified.replace(pattern, (match) => {
      hits.push({ vos, neut, match });
      return preserveCase(match, neut);
    });
  }
  // Restore sentence-start capitalization after the lowercase swap.
  // Only runs when a voseo swap actually happened — never mutate clean files.
  // Note: no `**: ` (bold-label colon) boundary here on purpose; in this project's
  // bullet style the text after `**Label**: ` is a lowercase continuation, not a
  // new sentence, so capitalizing it would corrupt correct content.
  if (hits.length > 0) {
    for (const word of SENTENCE_STARTERS) {
      const capitalized = word[0].toUpperCase() + word.slice(1);
      const patterns = [
        new RegExp(`(\\. )${escapeRegex(word)}\\b`, "g"),
        new RegExp(`(^|\\n\\n)${escapeRegex(word)}\\b`, "g"),
      ];
      for (const pat of patterns) {
        modified = modified.replace(pat, (_, prefix) => prefix + capitalized);
      }
    }
  }
  return { modified, hits };
}

function findVoseoLines(content) {
  const lines = content.split("\n");
  const matches = [];
  for (const [vos] of Object.entries(FULL_MAP)) {
    const pattern = new RegExp(
      `(?<![a-záéíóúñA-ZÁÉÍÓÚÑ])${escapeRegex(vos)}(?![a-záéíóúñA-ZÁÉÍÓÚÑ])`,
      "gi",
    );
    lines.forEach((line, idx) => {
      if (pattern.test(line)) {
        matches.push({ line: idx + 1, vos, text: line.trim() });
      }
    });
  }
  return matches;
}

function getStagedFiles() {
  try {
    const out = execSync("git diff --cached --name-only --diff-filter=ACMR", {
      encoding: "utf-8",
    });
    return out
      .split("\n")
      .filter(Boolean)
      .filter((f) => /\.(md|json)$/.test(f))
      .filter((f) => f.startsWith("content/") || f.startsWith("messages/"))
      .filter((f) => existsSync(f));
  } catch {
    return [];
  }
}

function getAllContentFiles() {
  const out = execSync(
    `find content messages -type f \\( -name "*.md" -o -name "*.json" \\)`,
    { encoding: "utf-8" },
  );
  return out.split("\n").filter(Boolean);
}

function reStage(files) {
  if (files.length === 0) return;
  execSync(`git add ${files.map((f) => `'${f}'`).join(" ")}`, {
    stdio: "inherit",
  });
}

// =============================================================================
// Main
// =============================================================================

const staged = getStagedFiles();
const files = staged.length > 0 ? staged : getAllContentFiles();
const scope = staged.length > 0 ? "staged" : "all content";

if (CHECK && !FIX) {
  let totalMatches = 0;
  for (const file of files) {
    const content = readFileSync(file, "utf-8");
    const matches = findVoseoLines(content);
    if (matches.length > 0) {
      totalMatches += matches.length;
      for (const m of matches) {
        console.error(`${file}:${m.line}: voseo "${m.vos}" — ${m.text}`);
      }
    }
  }
  if (totalMatches > 0) {
    console.error(
      `\n✖ Spanish neutro lint: ${totalMatches} voseo match(es) across ${scope}.`,
    );
    console.error(`  Run: node scripts/fix-spanish-neutro.mjs --fix`);
    process.exit(1);
  }
  console.log(`✓ Spanish neutro lint: clean across ${scope} (${files.length} files).`);
  process.exit(0);
}

// --fix mode
const changedFiles = [];
let totalHits = 0;
for (const file of files) {
  const content = readFileSync(file, "utf-8");
  const { modified, hits } = applyFixes(content);
  if (modified !== content) {
    writeFileSync(file, modified);
    changedFiles.push(file);
    totalHits += hits.length;
  }
}

if (changedFiles.length === 0) {
  console.log(`✓ Spanish neutro: clean across ${scope} (${files.length} files).`);
  process.exit(0);
}

console.log(
  `✓ Spanish neutro: fixed ${totalHits} voseo match(es) in ${changedFiles.length} file(s):`,
);
for (const f of changedFiles) console.log(`  ${f}`);

// Re-stage only if we ran against staged files
if (staged.length > 0) {
  reStage(changedFiles);
  console.log(`✓ Re-staged ${changedFiles.length} file(s).`);
}
