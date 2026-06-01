# Playbook: agregar un juego nuevo a TheGamerCodex

Runbook autocontenido para poblar un juego desde cero. Diseñado para ejecutarse end-to-end sin pedir confirmación entre fases.

## Trigger

Cuando el usuario dice **"agregar [game]"**, **"vamos a agregar [game]"**, o cualquier variante con la intención clara de poblar un juego nuevo (ej: *"quiero agregar last epoch"*, *"sumemos diablo 4"*), ejecutar este playbook de arriba a abajo. Pedir confirmación solo si el `id` del juego es ambiguo (ej: hay PoE 1 y PoE 2 en juego — qué versión).

El usuario **revisa todo al final desde la web**. No pidas confirmación item por item.

## Pre-vuelo (5 minutos, lectura obligatoria)

1. **`docs/RULES.md` completo** — convenciones de código, schema, editorial conventions de game .md / tool .md, reglas de batch.
2. **`docs/SCHEMA_EVOLUTION.md`** — historial de cambios al schema. Si tu trabajo cambia un type, agregás entrada al final.
3. **`src/types/index.ts`** — fuente de verdad. Antes de cada fase verificá `Tool`, `Creator`, `Resource`, `GameMeta`, `Theme`, `Platform`, `PlatformLink`, `PlaylistRef`, `MultiGame`, `CreatedBy`, los unions `ToolType`, `Difficulty`, `ResourceType`, `MonetizationModel`, `StorePlatform`.
4. **`content/games/path-of-exile-2/`** — template de referencia más reciente (estructura completa: meta.json, es.md, en.md, tools/, creators/, resources/). Replicá la estructura.

Recordatorios cruzados:
- Idiomas: cada game y cada tool tiene `es.md` + `en.md`. Default locale del sitio es `en`. Escribí los dos.
- **Español neutro obligatorio** en todo el contenido `.md` y campos `*Es` de los JSONs. La regla completa con dictionary de conjugaciones permitidas/prohibidas vive en `docs/RULES.md → "Español neutro — regla obligatoria"`. **Antes de cerrar Phase 1C / 2 / 3, correr el grep de la regla** para detectar voseo o markers de España; sin matches = listo. Esta validación es no-opcional — el voseo se cuela facilísimo si no se chequea explícitamente.
- Tool .md frontmatter: `title` + `description` + `quickTake` (los 3 requeridos). Body: 8 secciones H2 según RULES.md → "Editorial conventions para tool .md". Longitud target ~80-100 líneas.
- Game .md frontmatter: `title` + `tagline` + `description`. **`tagline` es requerido** — sin él la card del landing queda sin bajada.
- Tool meta.json: `createdBy` es `{ name, url?, creatorId? }`, no string. `multiGame` se omite cuando es mono-juego — no usar `{ available: false }`.
- `lastVerified` formato `YYYY-MM-DD` con la fecha actual del sistema.
- Asset paths siguen RULES.md → "Imágenes y assets":
  - Tool logos/screenshots → `public/images/tools/<game-id>/<tool-id>-...`
  - Avatares creators → `public/images/creators/<creator-id>-avatar.<ext>`
  - Hero/logo del juego → `public/images/games/<game-id>-{hero,logo}.<ext>`
- **Logos de tools**: intentar descarga best-effort desde el sitio oficial (`url` del meta) — ver Phase 1C para el helper. Si la descarga falla (no logo parseable, MIME no aceptado, fetch fail), skip y seguir el flujo: el `meta.json` queda referenciando el path por default y `existsSync` cae a la inicial de letra al renderizar.
- **Screenshots de tools**: NO descargar — el usuario sube manualmente.
- **Sí descargar avatares de creators** desde `og:image` del canal de YouTube — ver Phase 2 para el helper.

---

## Phase 1A — Investigar y seleccionar tools (shortlist: ~20 → final: 15)

**Antes de tocar el meta.json del juego**, definir qué tools cubren el ecosistema. Las `toolCategories` del game meta se derivan de qué tools existen, no al revés.

### Criterios de inclusión

- Activa hoy (release/commit reciente, soporte explícito al patch vigente).
- Soporta el juego nativamente — no ports flaky desde otro juego de la franquicia.
- Diferenciación editorial entre tools del mismo cluster: si recomendás dos build planners, el `quickTake` debe explicar cuándo usar uno vs el otro.
- Cubre las categorías más buscadas del juego (típicamente: build/character planning, trading/economy, reference/wiki, plus las específicas del género).
- **Comparabilidad**: las comparisons son el eje editorial más fuerte del codex (ver Phase 4). Durante el research, pensá explícitamente en pares: cada categoría debería tener al menos 2 tools que compitan editorialmente, para llegar al mínimo de **7 comparisons** del cierre. Si una categoría se queda con una sola tool dominante, buscá una alternativa creíble — incluso si es menos popular — para tener con quién comparar. No incluir tools débiles solo para padding, pero sí priorizar tools que abran pares naturales por sobre tools redundantes en categorías saturadas.

### Inclusión obligatoria: Discord + Subreddit del juego

**Todo juego debe incluir su Discord oficial y su subreddit como tools** (típicamente bajo una categoría `community` o equivalente). Son los dos puntos de entrada universales a la comunidad y aparecen entre las primeras búsquedas de cualquier jugador nuevo. No se cuentan contra el target de 15 tools — son sumados aparte como infraestructura comunitaria.

- **Discord oficial**: el servidor oficial del developer/publisher si existe. Si el juego no tiene Discord oficial (raro, pero pasa con publishers tradicionales), incluir el **community Discord verificado** más activo y dejar `official: false`.
- **Subreddit**: el subreddit principal del juego (ej: `r/pathofexile`, `r/Genshin_Impact`). Si solo existe un subreddit minúsculo o no hay, reportarlo en el cierre — el caso es muy raro.
- Ambos van con `type: "discord"` y `type: "reference"` respectivamente (el subreddit no tiene type propio; va como `reference` con `tags: ["community", "reddit"]`).
- El `category` típico es `community`, pero si el juego usa otro id (ej: `reference`, `social`), alinearlo con sus `toolCategories`.

### Workflow

1. Web search por categorías standard (build planners, trade tools, wikis, filters/loot, leveling, crafting, economy trackers, atlas/endgame planners, official discord, community discord/hub). **Armá una shortlist de ~20 candidatos** — sobre-investigar acá ahorra trabajo después: las tools que fallen verificación se reemplazan desde el buffer en lugar de mandar a buscar nuevas en mitad de Phase 1C.
2. Para cada candidato, verificá:
   - URL accessible (curl HEAD; un 403 de Cloudflare no descalifica si el sitio carga en browser).
   - GitHub si aplica (último commit < 90 días para tools open-source en juegos vivos).
   - Soporte específico al juego (no asumir; muchas tools dicen "PoE 2" pero son PoE 1 con redirect).
   - El proyecto sigue activo: dominio vigente, no abandonado, no hijacked.
3. **Apuntá a 15 tools finales**. Si una falla verificación, reemplazala con la siguiente del buffer de ~20. La idea es que la shortlist amortigüe el desgaste sin que tengas que abrir una segunda ronda de research.
4. Si después del filtro honesto el ecosistema real **no da para 15** (juegos pequeños, comunidades nicho), **cerrá con las que pasen el filtro de calidad** — no rellenes con tools mediocres solo para llegar al número. Mejor 11 sólidas que 15 con relleno.

### Categorías típicas (variar según género)

- ARPGs (PoE, D4, Last Epoch, Diablo 2 Resurrected): `build-planning`, `trading`, `crafting`, `atlas-maps`/`endgame-maps`, `filters`/`loot-filters`, `economy`, `leveling`, `reference`.
- MOBAs (LoL, Dota 2): `champion-stats`/`hero-stats`, `tier-lists`, `match-history`, `replay-analysis`, `runes-builds`, `coaching`, `pro-stats`, `reference`.
- Looter shooters (Destiny 2): `loadout-planning`, `weapon-stats`, `raid-guides`, `lfg`, `bounty-tracking`, `mods-perks`, `lore`, `reference`.
- MMOs (WoW, FFXIV): `addons`, `auction-house-tracking`, `dps-meters`/`parsers`, `raid-guides`, `gear-planning`, `crafting-professions`, `dungeon-tools`, `reference`.
- Gacha (Genshin, HSR): `character-builds`, `team-comps`, `event-trackers`, `damage-calculators`, `wish-trackers`, `maps`, `reference`, `simulators`.
- FPS (CS2, Valorant): `aim-training`, `match-history`, `inventory-trading`, `map-callouts`, `crosshair-config`, `pro-settings`, `tier-lists`, `reference`.

Mirá `content/games/<existing-game>/meta.json` del juego más cercano editorialmente para guía adicional.

### Output del Phase 1A

Una lista final de hasta 15 tools (idealmente 15; menos si el ecosistema honestamente no da más) con: `id` (kebab-case), categoría asignada, `type`, `essential` flag, `multiGame` info si aplica. Mantené la shortlist completa de ~20 a mano hasta que termines Phase 1C — sirve de buffer si una tool falla mientras la estás escribiendo.

**No crear archivos todavía.** Phase 1B usa esa lista para derivar `toolCategories`.

---

## Phase 1B — Crear el game (meta.json + es.md + en.md)

### Investigación adicional

Web search para llenar campos no-tools del meta:
- `developer`, `releaseYear`, `officialUrl`
- `stores[]` (Steam appId, Epic, etc.) — `StorePlatform` union en `src/types/index.ts`
- `platforms[]` (windows, macos, linux, playstation, xbox, switch, web, ios, android)
- `genres[]` (strings descriptivos)
- `monetization` (model + purchaseTypes + payToWin + noteEs/noteEn)
- `theme` — 5 colores hex derivados de la identidad visual del juego (logo, key art, UI). Probá contra fondo oscuro: `text` debe contrastar con `background` en WCAG AA.

### `toolCategories` (5-8 categorías)

Derivar de la lista de Phase 1A. Cada `id` debe matchear el `category` de al menos una tool. Si una categoría queda con 0 tools, removerla.

Schema (de `LocalizedCategory`):
```json
{
  "id": "build-planning",
  "nameEs": "Planificación de Builds",
  "nameEn": "Build Planning",
  "descriptionEs": "...",
  "descriptionEn": "...",
  "icon": "🧮"
}
```

### `resourceCategories` (5 categorías)

Definir 5 categorías de recursos curables. Patrón típico:
- `beginner-guides` (siempre incluir)
- `mechanics-per-league` / `mechanics-per-patch` / `news-and-updates` (algo temporal)
- `build-guides` / `team-comps` / `loadout-guides` (algo de optimización)
- `trading-guides` / `economy-guides` / `currency-guides` (si aplica al género)
- `boss-guides` / `raid-guides` / `endgame-guides` (algo endgame)

Adaptá los ids al género del juego.

### Game .md frontmatter

`es.md` y `en.md` con:
- `title`: nombre completo
- `tagline`: ~70 chars, específico no genérico
- `description`: 1-2 frases factuales

Body: análisis libre del juego (qué es, por qué importa, contexto del ecosistema). Sin estructura forzada.

### `newsFeeds[]` (opcional — solo si el juego NO tiene Steam appId)

La página `/[locale]/[game]/news` se auto-deriva del Steam appId cuando el juego tiene `stores[].platform === "steam"` con `appId`. **Si el juego está en Steam, no hagas nada — la página ya funciona**.

Si el juego NO está en Steam (Battle.net, Riot Client, Epic exclusive, mobile-only, etc.), agregá `newsFeeds[]` al `meta.json` con al menos una fuente. Patrones conocidos:

```json
"newsFeeds": [
  {
    "type": "youtube-channel",
    "url": "https://www.youtube.com/feeds/videos.xml?channel_id=<UC...>",
    "nameEs": "<Game> (YouTube oficial)",
    "nameEn": "<Game> (Official YouTube)",
    "priority": 100
  }
]
```

Tipos soportados (`NewsFeedSource` en `src/types/index.ts`):

- **`youtube-channel`** — canal oficial del developer/publisher. URL formato `https://www.youtube.com/feeds/videos.xml?channel_id=<UC...>`. Buen fallback universal — todo dev tiene YouTube. Ejemplo: WoW usa `@Warcraft` (`UCbLj9QP9FAaHs_647QckGtg`).
- **`rss`** — feed RSS/Atom genérico de un blog oficial o servicio third-party. Ejemplo: LoL y Valorant usan `https://data.rito.news/{lol|val}/en-us/news.rss` (scraper community-built de news.leagueoflegends.com y playvalorant.com — Riot no publica RSS oficial).
- **`hoyoverse`** — endpoint específico para HoYoverse games (Genshin, Star Rail, ZZZ, Honkai 3rd). URL formato `https://sg-public-api-static.hoyoverse.com/content_v2_user/app/<APP_HASH>/getContentList?iPage=1&iPageSize=20&sLangKey=en-us&isPreview=0&iChanId=<X>`. El **app hash** (`/app/<hash>/`) varía por game y es el discriminador real (Genshin = `a1b1f9d3315447cc`, HSR = `113fe6d3b4514cdd`). El `iChanId` también varía (Genshin = 395, HSR = 249). Algunos games agregan `iAppId=<N>` (Genshin lo usa, HSR no) — incluirlo si el endpoint del juego lo tiene, omitirlo si no. **Para descubrir los valores**: abrir Network tab en `<game>.hoyoverse.com/en-us/news`, buscar la request a `getContentList`, copiar el path `/app/<hash>/` y los query params completos. Si el juego nuevo necesita esto, también agregar entry a `HOYO_GAME_SITES` en `src/lib/news.ts` mapeando el app hash al patrón del article URL (típicamente `https://<game-site>.hoyoverse.com/en/news/detail`).
- **`steam-rss`** — solo manual si querés sumar feed de Steam de OTRO appId al juego (raro). El feed del propio `stores[].appId` se auto-deriva.

Si no encontrás fuente oficial razonable, **omitir `newsFeeds[]`** — la ruta `/news` simplemente no se expone para ese juego.

---

## Phase 1C — Crear tools (meta.json + es.md + en.md por tool)

Para cada tool de la lista del Phase 1A, 3 archivos en `content/games/<game-id>/tools/<tool-id>/`:

```
meta.json    ← ToolMeta type completo
es.md        ← frontmatter + 8 secciones H2
en.md        ← frontmatter + 8 secciones H2
```

### Estructura del body (8 H2 — ver RULES.md → "Editorial conventions para tool .md")

1. Qué es
2. Qué problema resuelve
3. Diferenciación (cuando aplica vs competidor obvio)
4. Para qué la usa la gente
5. Para quién NO es esta herramienta
6. Cómo se usa en la práctica
7. Limitaciones honestas
8. Cómo empezar

### Asset paths

- `logo`: `/images/tools/<game-id>/<tool-id>-logo.<ext>` (`.png` por default)
- `screenshots[].url`: `/images/tools/<game-id>/<tool-id>-ss-1.<ext>`, `-ss-2`, etc. (1-indexed)
- Captions de screenshots opcionales — omitir.

### Descarga automática del logo (best-effort)

**Antes de bajar nada, chequear si la URL del tool corresponde a un vendor con logo compartido en `public/images/tools/common/`** (ver `RULES.md` → "Imágenes y assets"). Mapeo actual:

- `github.com/*` → setear `"logo": "/images/tools/common/github-logo.png"` en el `meta.json` y **saltar la descarga**.
- `nexusmods.com/*` (incl. `www.nexusmods.com`) → setear `"logo": "/images/tools/common/nexusmods-logo.svg"` y **saltar la descarga**.

Si la URL no matchea un vendor compartido, **intentar descargar el logo** desde el sitio oficial de la tool (campo `url`). Si falla, seguir el flujo normal (path queda referenciado, `existsSync` cae a inicial de letra cuando se renderiza).

Helper:

```bash
download_tool_logo() {
  local tool_url="$1"
  local game_id="$2"
  local tool_id="$3"
  local html=$(curl -s -L -A "Mozilla/5.0 (Macintosh)" "$tool_url")

  # Prioridad: apple-touch-icon (cuadrado, suele ser el logo) → og:image → <link rel="icon">
  local icon=$(echo "$html" | grep -oE '<link[^>]*rel="apple-touch-icon"[^>]*href="[^"]+' | head -1 | sed 's/.*href="//')
  [ -z "$icon" ] && icon=$(echo "$html" | grep -oE '<meta property="og:image" content="[^"]+' | head -1 | sed 's/<meta property="og:image" content="//')
  [ -z "$icon" ] && icon=$(echo "$html" | grep -oE '<link[^>]*rel="icon"[^>]*href="[^"]+' | head -1 | sed 's/.*href="//')
  [ -z "$icon" ] && { echo "SKIP: no logo found for $tool_id"; return 1; }

  # Resolver URLs relativas
  if [[ ! "$icon" =~ ^https?:// ]]; then
    if [[ "$icon" =~ ^// ]]; then icon="https:$icon"
    elif [[ "$icon" =~ ^/ ]]; then
      local base=$(echo "$tool_url" | grep -oE 'https?://[^/]+')
      icon="${base}${icon}"
    fi
  fi

  # Descargar a temp y detectar tipo
  local tmp=$(mktemp)
  curl -s -L -A "Mozilla/5.0 (Macintosh)" "$icon" -o "$tmp"
  local mime=$(file --mime-type "$tmp" | awk '{print $NF}')
  local ext
  case "$mime" in
    image/png) ext="png" ;;
    image/jpeg) ext="jpg" ;;
    image/svg+xml|image/svg) ext="svg" ;;
    image/webp) ext="webp" ;;
    *) rm "$tmp"; echo "SKIP: unsupported mime $mime for $tool_id"; return 1 ;;
  esac

  mkdir -p "public/images/tools/${game_id}"
  local dest="public/images/tools/${game_id}/${tool_id}-logo.${ext}"
  mv "$tmp" "$dest"
  echo "OK: $tool_id → $dest"
}
```

**Importante**: si la extensión bajada **no es `.png`** (ej: `.jpg` o `.svg`), actualizá el campo `logo` del `meta.json` correspondiente con la extensión correcta. Si el download falló (`SKIP`), dejá el `meta.json` con `.png` por default — `existsSync` hace fallback a la inicial.

**Tools sin sitio web propio** (ej: tools que viven solo en GitHub o en Discord): omitir descarga, dejar `.png` referenciado.

**Formatos no aceptados** (per RULES.md → "Imágenes y assets"): `.ico`. Si el único logo disponible es ICO, descartar y dejar fallback. SVG/PNG/JPG/WebP son los aceptados.

---

## Phase 2 — Creators (target: 5 — 3 EN + 2 ES idealmente)

### 2A — Recomendar 5 creators

Activos en el juego, uploads recientes (< 30 días), mix editorial diverso (no 5 buildmakers idénticos), mix idiomas (3 EN + 2 ES si los hay; ajustar según ecosistema del juego).

Si el juego tiene comunidad hispana fuerte (PoE, LoL), incluir 2 ES. Si la comunidad hispana es marginal (algunos MMOs occidentales), 1 ES o 0 — no forzar.

### 2B — Verificar channelId de YouTube (obligatorio)

```bash
curl -s -A "Mozilla/5.0 (Macintosh)" "https://www.youtube.com/@<handle>" | grep -oE 'externalId":"UC[A-Za-z0-9_-]{22}' | head -1 | sed 's/externalId":"//'
```

Si retorna vacío → handle no existe / cambió. Pivotar. Si retorna `UC...` → ese es el `channelId` para `platforms[].channelId`.

**No usar el patrón `channelId":"...`** del HTML — devuelve resultados ruidosos (player config, no el canónico). Usar `externalId":` como arriba.

### 2C — Descargar avatar desde YouTube

El `og:image` del canal expone el avatar canónico vigente (~900x900px JPEG). Helper:

```bash
download_avatar() {
  local channel_id="$1"
  local creator_id="$2"
  local url=$(curl -s -A "Mozilla/5.0 (Macintosh)" "https://www.youtube.com/channel/$channel_id" \
    | grep -oE '<meta property="og:image" content="[^"]+' \
    | head -1 | sed 's/<meta property="og:image" content="//')
  [ -z "$url" ] && { echo "FAIL: no avatar for $creator_id"; return 1; }
  curl -s -A "Mozilla/5.0 (Macintosh)" "$url" -o "public/images/creators/${creator_id}-avatar.jpg"
  file "public/images/creators/${creator_id}-avatar.jpg" | grep -q JPEG && echo "OK: $creator_id"
}
```

Verificá con `file` que sea JPEG válido (no HTML de redirect).

**Si un avatar ya existía en el repo** (creator multi-juego que ya estaba en otro `content/games/<game>/creators/`), `git status` lo muestra como modificado. Eso es esperable — el `og:image` siempre devuelve el avatar actual; si la versión vieja era manual, sobrescribirla es fine: ambas vienen del mismo canal.

### 2D — Crear meta.json del creator

`content/games/<game-id>/creators/<creator-id>/meta.json` siguiendo `CreatorMeta`:

- `platforms[]` con al menos un YouTube `primary: true` con `channelId` y `handle`
- `noteEs` / `noteEn` (bio editorial corta, 2-4 frases)
- `highlightsEs[]` / `highlightsEn[]` (3-5 bullets)
- `specialties[]`, `languages[]`, `audienceLevel[]`, `contentTypes[]`
- `games: ["<game-id>"]`
- `avatar: "/images/creators/<creator-id>-avatar.jpg"` (matchea con la descarga)
- `banner: "/images/creators/<creator-id>-banner.jpg"` (probable que no exista; fallback automático)

### 2E — `gamePlaylists` (opcional, skip si tedioso)

Para playlists del creator filtradas por juego, agregar a `platforms[<youtube primary>].gamePlaylists["<game-id>"]`. La página `/playlists` del canal es SPA — `curl` no extrae los PL ids. Si querés llenar esto, requiere WebFetch o trabajo manual; el playbook lo deja como opcional. La página de creator funciona perfectamente sin esto (solo cae al feed del canal).

---

## Phase 3 — Resources (target: 5 por categoría = 25 totales)

### 3A — Investigar candidatos

Web search por categoría buscando contenido reciente (últimos 60 días idealmente). Diversificar:
- Cobertura editorial: no 5 videos del mismo creator ni del mismo arquetipo.
- Idioma: mayoría inglés, alguno español si hay buen contenido.
- `creatorId`: si el creator del video está en `content/games/<game-id>/creators/`, referenciá el id. Si no, `creatorId: null` explícito.

### 3B — Verificar cada video (obligatorio)

**Nada de inventar IDs ni fechas.** Helper:

```bash
verify_video() {
  local id="$1"
  local html=$(curl -s -A "Mozilla/5.0 (Macintosh)" "https://www.youtube.com/watch?v=$id")
  local date=$(echo "$html" | grep -oE 'uploadDate":"[0-9]{4}-[0-9]{2}-[0-9]{2}' | head -1 | sed 's/uploadDate":"//')
  local secs=$(echo "$html" | grep -oE '"lengthSeconds":"[0-9]+' | head -1 | sed 's/"lengthSeconds":"//')
  local channel=$(echo "$html" | grep -oE '"author":"[^"]+' | head -1 | sed 's/"author":"//')
  local title=$(echo "$html" | grep -oE '"title":"[^"]+","lengthSeconds"' | head -1 | sed 's/"title":"//; s/","lengthSeconds"//')
  local dur
  if [ -n "$secs" ]; then
    local h=$((secs / 3600)) m=$(((secs % 3600) / 60)) s=$((secs % 60))
    if [ $h -gt 0 ]; then dur=$(printf "%d:%02d:%02d" $h $m $s); else dur=$(printf "%d:%02d" $m $s); fi
  fi
  echo "ID:$id | $date | $dur | $channel | $title"
}
```

Resultado: `videoId`, `duration` (formato `HH:MM:SS` o `MM:SS`), `publishedDate` (`YYYY-MM-DD`), creator name, title — todo verificado contra YouTube.

### 3C — Schema de resource (ver `src/types/index.ts → Resource`)

```json
{
  "id": "creator-slug-topic-game-year",
  "type": "video",
  "title": "Título exacto del video",
  "creator": "Channel name",
  "creatorId": "creator-id-si-está-en-codex-o-null",
  "url": "https://www.youtube.com/watch?v=ID",
  "youtubeId": "ID",
  "language": "en",
  "duration": "12:34",
  "publishedDate": "2026-01-15",
  "thumbnail": "https://i.ytimg.com/vi/ID/maxresdefault.jpg",
  "noteEs": "1-2 frases editoriales: por qué útil, qué cubre, para quién.",
  "noteEn": "1-2 sentences editorial: why useful, what it covers, for whom."
}
```

`thumbnail` es opcional; si lo omitís, la UI lo deriva. Lo dejamos seteado en el patrón `maxresdefault.jpg` para evitar lookups en runtime.

### 3D — Insertar

Archivos en `content/games/<game-id>/resources/<category>.json`, formato:
```json
{ "category": "<category-id>", "resources": [...] }
```

5 entries por archivo, total 25 resources. Mantener formatting consistente (2-space indent, `\n` al final).

---

## Phase 4 — Comparisons (mínimo: 7 pares)

Las comparativas head-to-head entre tools del mismo cluster son **el eje editorial más fuerte del codex** — el principal diferenciador vs wikis, subreddits o listas planas. Cada comparison tiene su propia ruta SEO (`/[game]/compare/<a-vs-b>`), aparece en la game page con preview cards, y sirve para resolver "cuál uso, X o Y" — pregunta de alto volumen que justifica ranking orgánico. Por eso son **inclusión obligatoria** y la selección de tools de Phase 1A tiene que considerar comparabilidad desde el inicio.

### 4A — Identificar pares naturales

Recorrer las `toolCategories` del juego y buscar pares **dentro de la misma categoría** donde haya diferenciación editorial clara. Criterios para incluir un par:

- **Mismo cluster**, tools que la community efectivamente compara (no forzar pares random).
- **Editorial distinction explícita**: el quickTake/positioning de cada tool deja claro cuándo gana cada una. Si la diferencia es "X tiene más features", probablemente no es un par interesante — es solo "el incumbent vs nada".
- **Audiencia overlap**: ambas tools sirven a la misma persona resolviendo el mismo problema, no a audiencias disjuntas.

**Skip pairs cuando**:
- Una categoría tiene 1 sola tool (no hay con quién comparar).
- Las tools no compiten realmente — ej: una platform (Nexus Mods, Steam Workshop) vs una tool específica que vive ahí.
- El par sería "incumbent dominante vs proyecto abandonado".

**Mínimo: 7 pares**. Mezcla típica: 1-2 flagships (`depth: "flagship"`, prosa de ~1500 palabras, comparativa profunda) + 5-6 shorts (`depth: "short"`, ~700 palabras). Si llegás a Phase 4 y no encontrás 7 pares legítimos, **es una señal de que Phase 1A no consideró comparabilidad suficiente** — volvé a Phase 1A y revisá si hay alternativas creíbles que sumar a categorías saturadas con un solo dominante. Solo cerrar con menos de 7 si el ecosistema honestamente está agotado (juegos chicos, comunidades nicho con poca redundancia editorial) — documentarlo explícitamente en el reporte de cierre.

### 4B — Estructura de archivos

Por cada par, en `content/games/<game-id>/comparisons/<id>/`:

```
meta.json    ← ComparisonMeta type completo
es.md        ← frontmatter (title, description) + body markdown libre
en.md        ← idem
```

### 4C — Schema (ver `src/types/index.ts → ComparisonMeta`)

```json
{
  "id": "tool-a-vs-tool-b",
  "toolIds": ["tool-a", "tool-b"],
  "category": "<matches one tool's category>",
  "depth": "short",
  "lastVerified": "YYYY-MM-DD",
  "verdictEs": "Tool A si querés X. Tool B si querés Y.",
  "verdictEn": "Tool A if you want X. Tool B if you want Y.",
  "useCases": [
    {
      "labelEs": "Caso de uso concreto",
      "labelEn": "Concrete use case",
      "winner": "tool-a",
      "reasonEs": "Por qué tool-a gana acá.",
      "reasonEn": "Why tool-a wins here."
    }
  ]
}
```

- `useCases`: 5 entries con balance de winners (no todos a favor de una sola tool — mostrar que cada una tiene su nicho).
- `category`: usar el id de la categoría de las tools comparadas. Si compiten en categorías distintas, repensar si el par es válido.
- `lastVerified`: la fecha de hoy del sistema.

### 4D — Body markdown

Frontmatter mínimo:
```
---
title: <Tool A> vs <Tool B> — qué <X> usar
description: 1-2 frases que resumen el ángulo editorial.
---
```

Body libre con secciones H2. Estructura típica para shorts:
1. Intro de un párrafo posicionando las dos tools.
2. 2-3 secciones H2 cubriendo dimensiones de diferenciación (UX, scope, target audience, etc.).
3. Sección "Cuándo gana cada una" con tabla de casos.
4. Recomendación combinada o trade-off final.

Para flagships, extender con secciones de patches/historia/cobertura y más use cases concretos. Mirar `content/games/path-of-exile/comparisons/awakened-poe-trade-vs-poe-trade-official/{es,en}.md` como referencia flagship, y cualquier short de Skyrim/NMS/WoW como ejemplo.

### 4E — Spanish neutro lint

Después de escribir todos los .md y meta.json, correr el grep de `docs/RULES.md → "Español neutro"` sobre `content/games/<game-id>/comparisons/` y limpiar matches. Las comparisons son texto editorial extenso — es donde el voseo se cuela más.

---

## Phase 5 — Cierre

1. **Build**: `PATH="/Users/gersoncarcamo/.nvm/versions/node/v22.22.2/bin:$PATH" npx next build` debe pasar sin errores. Si falla, fixear y reportar.
2. **Inventory**: `npm run inventory` para regenerar `docs/CONTENT_INVENTORY.md` con los nuevos counts.
3. **Lint español neutro**: correr el grep de `docs/RULES.md → "Español neutro"` sobre `content/games/<game-id>/`. Cualquier match bloquea el cierre — fixear con perl `-CSD` (BSD sed no respeta `\b` con caracteres acentuados).
4. **`docs/SCHEMA_EVOLUTION.md`** — agregar entrada **solo si modificaste un type o schema**. No deberías; la mayoría de juegos cabe en el schema actual.
5. **NO commit ni push.** El usuario revisa primero.
6. **Reporte final** (en chat, no en archivo): tabla concisa con:
   - Tools agregadas (cuántas / cuáles / si quedó alguna por debajo del target y por qué)
   - Logos de tools: cuántos OK / cuántos SKIP (sin logo descargable; queda fallback a inicial)
   - Creators agregados (5 / cuáles / channelIds verificados / avatares descargados ok)
   - Resources agregados por categoría (5 cada una)
   - Comparisons agregadas (cuántas, qué pares, depth de cada una; flaggear explícitamente si quedó por debajo del mínimo de 7 y por qué)
   - News page activa (auto-derive de Steam o `newsFeeds[]` agregado)
   - Cualquier cosa que **no** se pudo cerrar y por qué

## Post-merge a main (sólo cuando el usuario confirma el merge)

Después de mergear a `main` y verificar deploy en thegamercodex.com, agregar al mensaje de cierre **dos links clickeables** para acelerar indexing de Google (per `docs/RULES.md → "Indexing post-merge a main"`):

1. **Game hub URL** (a copiar): `https://thegamercodex.com/en/<game-id>`
2. **GSC dashboard**: `https://search.google.com/search-console?resource_id=sc-domain%3Athegamercodex.com`

El usuario abre el GSC link (login si hace falta), pega el hub URL en el input "Inspeccionar cualquier URL" que aparece arriba del dashboard, Enter, "Request indexing". Con ese submit del hub Google crawlea recursivamente tools/comparisons/resources del game.

**No usar** el deep link a `/inspect` con `id` prellenado (`.../search-console/inspect?resource_id=...&id=...`) — Google strippea los query params en el redirect de auth y devuelve 404. Probado en el lanzamiento de FFXIV (2026-05-20).

---

## Quality gates y gotchas conocidos

- **Un juego = una carpeta** (RULES.md). Si la franquicia tiene secuelas/spin-offs (PoE/PoE 2, LoL/Wild Rift, CS:GO/CS2), son juegos distintos. Tools y creators que cubren ambos pueden duplicarse con entries separados, o usar `multiGame` en el meta.
- **Tools que no soportan el juego nativamente**: descartar. No queremos recomendar algo que va a frustrar al usuario.
- **No mezclar editorial entre versiones**: si copiás un .md de un juego como template, **reescribí el contenido** específico para el nuevo juego. Las mecánicas, builds, vocabulario son distintas.
- **Tono editorial** (RULES.md → "Editorial conventions"): honesto, sin hype vacío, mencionar paywalls/ads/limitaciones.
- **Build sin errores**: si hay TypeScript errors, leer cuidadosamente — generalmente significa schema field faltante o typo en `id` que rompe linkage.
- **Avatar de creator pre-existente**: si el avatar ya estaba en el repo (creator multi-juego), `git status` mostrará el JPEG como modificado. Es esperable y consistente — la descarga fresca trae el avatar actual del canal.
- **Archivos basura en `public/images/creators/`**: si encontrás archivos no-imagen (`.crdownload`, `.Logs`, etc.), no los toques. Probablemente artefactos de browser del usuario; que él los limpie.

---

## Resumen de comandos útiles

```bash
# Build
PATH="/Users/gersoncarcamo/.nvm/versions/node/v22.22.2/bin:$PATH" npx next build

# Dev (puerto 3030, configurado por el usuario)
npm run dev

# Conteo de resources por categoría (sanity check Phase 3)
for f in content/games/<game-id>/resources/*.json; do
  count=$(node -e "console.log(JSON.parse(require('fs').readFileSync('$f','utf-8')).resources.length)")
  echo "$(basename $f): $count"
done

# Verificar channelId de YouTube
curl -s -A "Mozilla/5.0 (Macintosh)" "https://www.youtube.com/@HANDLE" | grep -oE 'externalId":"UC[A-Za-z0-9_-]{22}' | head -1 | sed 's/externalId":"//'

# Descargar avatar canónico de YouTube
url=$(curl -s -A "Mozilla/5.0 (Macintosh)" "https://www.youtube.com/channel/UC..." | grep -oE '<meta property="og:image" content="[^"]+' | head -1 | sed 's/<meta property="og:image" content="//')
curl -s -A "Mozilla/5.0 (Macintosh)" "$url" -o "public/images/creators/<creator-id>-avatar.jpg"

# Verificar metadata de un video
verify_video() { ... }  # ver Phase 3B
```
