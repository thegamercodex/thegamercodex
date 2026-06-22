# Reglas del proyecto

Este archivo es **lectura obligatoria** antes de hacer cambios. Las reglas están agrupadas por categoría. CLAUDE.md describe **qué es** el proyecto, este archivo describe **cómo se trabaja en él**.

**Para agregar un juego nuevo**, seguir el runbook de **`docs/ADD_GAME_PLAYBOOK.md`** (orden de fases, helpers de verificación de YouTube, descarga de avatares, conteo de resources). El trigger del playbook es cualquier variante de *"agregar [game]"*.

## Código

- TypeScript estricto. No hay `any` salvo en interop con APIs sin tipos.
- Componentes funcionales con hooks.
- **Server Components por defecto**. Marcar `"use client"` solo cuando sea necesario (state, effects, browser APIs, event handlers).
- Naming:
  - **PascalCase** para componentes (`GameCard.tsx`).
  - **camelCase** para funciones y variables.
  - **kebab-case** para archivos de contenido, rutas y carpetas (`path-of-exile/`, `craft-of-exile/`).
- Imports absolutos con `@/*` → `./src/*`. Ej: `@/lib/content`, `@/types`, `@/i18n/routing`.
- Para navegación localizada usar `Link`/`redirect` de `@/i18n/navigation`, **NO** `next/link` directo.
- `params` en App Router de Next 16 son `Promise<...>` — siempre `await params` antes de usar.
- En páginas con i18n, llamar `setRequestLocale(locale)` al inicio para habilitar SSG con `next-intl`.
- No introducir abstracciones especulativas. Tres líneas similares es mejor que una abstracción prematura.

## Contenido e i18n

- **Todos los textos de UI** (labels, botones, mensajes) viven en `messages/es.json` y `messages/en.json`. **NO** hardcodear strings traducibles en componentes.
- Para plurales usar ICU: `{count, plural, one {# tool} other {# tools}}`.
- **Los nombres propios** (de juegos, tools, creators) **NO se traducen**. "Path of Exile" se queda en ambos idiomas. Lo mismo nombres de tools y handles.
- Default locale es `en` (cambiado desde `es` en el lanzamiento inicial — el codex apunta a audiencia global, con switch a español siempre disponible). URL siempre incluye locale (`localePrefix: "always"`). No existe `src/app/layout.tsx` raíz — el root layout vive en `[locale]/layout.tsx`.
### Español neutro — regla obligatoria

**TODO contenido en español del proyecto va en español neutro, sin excepciones.** Aplica a:
- Archivos `.md` de juegos, tools, creators (frontmatter completo: `title`/`description`/`tagline`/`quickTake`, y todo el body).
- Campos `*Es` de cualquier `meta.json` o JSON (`taglineEs`, `descriptionEs`, `noteEs`, `titleEs`, `summaryEs`, `nameEs`, `highlightsEs`, etc.).
- Mensajes de UI en `messages/es.json`.
- Changelog entries (`titleEs`, `summaryEs`, `bodyEs`, body bilingüe dentro de fences `<!-- es -->`).

**Razón**: la audiencia es Latam + España + US-hispana; cualquier acento regional excluye lectores. Neutro es invisible y universal.

**Reglas concretas**:
- Segunda persona singular: **`tú`** — nunca `vos` (rioplatense) ni `vosotros` (España).
- **Sin voseo en presente indicativo** (la `s` final con tilde es siempre voseo): `tienes`/`puedes`/`quieres`/`usas`/`juegas`/`necesitas`/`buscas`/`sabes`/`abres`/`bajas`/`instalas`/`verificas`/`eliges`/`recuerdas`/`construyes`/`completas`/`cazas`/`escaneas`/`refinas`/`mejoras`/`viajas`/`repites`/`aprendes`/`recibes`/`escribes`/`cliqueas`/`scrolleas`/`decompilas`/`recompilas`/`extraes`. **Nunca** `tenés`/`podés`/`querés`/`usás`/`jugás`/`necesitás`/`buscás`/`sabés`/`abrís`/`bajás`/`instalás`/`verificás`/`elegís`/`recordás`/`construís`/`completás`/`cazás`/`escaneás`/`refinás`/`mejorás`/`viajás`/`repetís`/`aprendés`/`recibís`/`escribís`/`cliqueás`/`scrolleás`/`decompilás`/`recompilás`/`extraés`.
- **Imperativos neutros**: `usa`/`mira`/`haz`/`pon`/`ingresa`/`comparte`/`busca`/`abre`/`baja`/`instala`/`espera`/`empieza`/`elige`/`deja`/`carga`/`guarda`/`lee`/`configura`/`verifica`. **Nunca** `usá`/`mirá`/`hacé`/`poné`/`ingresá`/`compartí`/`buscá`/`abrí`/`bajá`/`instalá`/`esperá`/`empezá`/`elegí`/`dejá`/`cargá`/`guardá`/`leé`/`configurá`/`verificá`.
- **Imperativos con enclítico**: `instálalo`/`guárdalo`/`márcalo` (con tilde), nunca `instalalo`/`guardalo`/`marcalo`.
- **Evitar marcadores de España**: `vale` como "ok" → `bien`/`ok` (pero `vale la pena` es idiom universal y se queda); `tío`/`tía` → no usar; `ordenador` → `computadora`; `móvil` (sustantivo = teléfono) → `celular` (`móvil` como adjetivo está bien: `fluidez móvil`).
- **Anglicismos del codex** quedan en inglés (`tools`, `creators`, `mods`, `loot`, `stash`, `endgame`, `expedition`, `multiplayer`, `streams`, etc.) — son la jerga del público gaming.

**Pre-commit lint** — el script canónico vive en `scripts/fix-spanish-neutro.mjs` con el map exhaustivo de voseo + rioplatense:

```bash
node scripts/fix-spanish-neutro.mjs --check   # falla con file:line si encuentra voseo
node scripts/fix-spanish-neutro.mjs --fix     # auto-corrige y re-stages staged files
```

Sin staged files corre sobre todo `content/`. Con staged files, solo sobre esos.

El proyecto tiene un PreToolUse hook en `.claude/settings.local.json` que corre el script en `--fix` automáticamente antes de cada `git commit` de Claude — los archivos staged quedan limpios y re-staged sin intervención. Para commits manuales fuera de Claude, correr `--check` antes de stagear.

Fallback rápido (no exhaustivo, solo los voseo básicos del map original):
```bash
grep -rEn '\b(tenés|podés|querés|sabés|necesitás|usás|jugás|buscás|comprás|seguís|encontrás|guardás|abrís|bajás|instalás|verificás|elegís|aprendés|recibís|hacés|leés|escribís|esperás|aterrizás|escaneás|minás|refinás|mejorás|despegás|viajás|repetís|construís|ensamblás|cazás|hackeás|completás|recordás|arrancás|volvés|decompilás|modificás|recompilás|mirás|scrolleás|cliqueás|extraés)\b' content/ messages/es.json
grep -rEn '\b(leé|mirá|hacé|poné|fijate|andá|buscá|intentá|configurá|verificá|guardá|cargá|abrí|cerrá|tocá|usá|esperá|elegí|empezá|seguí|conseguí|comprá|jugá|instalá|bajá|escribí|dejá|tené|extraé|decompilá|recompilá|scrolleá)\b' content/ messages/es.json
```
Sin matches = limpio. Cualquier match es un bug y bloquea el commit. Cuando aparezca un voseo nuevo no cubierto por el map, agregarlo a `INDICATIVE` o `IMPERATIVE` en el script.

## Un juego = una carpeta

- Cada carpeta bajo `content/games/<game-id>/` corresponde a **un solo juego**. Tools, creators y resources de esa carpeta son específicos de ese juego, no de "el franchise" o "la familia".
- **PoE 1 y PoE 2 son juegos distintos** (engines distintos, leagues paralelas con cadencias propias, balance independiente). Los assets de PoE 2 deben vivir en `content/games/path-of-exile-2/` (cuando se cree), nunca mezclarse con `content/games/path-of-exile/`.
- Lo mismo aplica a cualquier franchise futura con secuelas o spin-offs (LoL ↔ Wild Rift, CS:GO ↔ CS2, etc.). Si surgen ambivalencias, default a "juegos distintos = carpetas distintas".
- Excepción: tools/creators con `multiGame.available: true` que cubren múltiples juegos pueden referenciar varios `gameId` desde sus `meta.json`. Eso es a nivel de **registro**, no de carpeta — el archivo principal sigue viviendo en una sola carpeta.
- Al curar resources (videos, guías, artículos), filtrar siempre por la versión específica del juego. Un video de PoE 2 0.4 no entra en `content/games/path-of-exile/resources/*`, aunque temáticamente "ambos sean Path of Exile".

## Storage, APIs y arquitectura

- **NO usar `localStorage` ni `sessionStorage`** en componentes server-rendered. El sitio es SSG, hay que ser cuidadoso con APIs de browser.
- **API routes**: usar cuando haya una razón concreta — proteger un secreto (token de bot, API key), validar input antes de reenviar a un tercero, u operar sobre input del usuario. **NO** las uses para hacer SSR de contenido que ya viene de archivos (eso es trabajo de SSG/ISR). Las routes deberían ser **stateless** (sin DB) mientras el contenido siga viviendo en archivos.
- **Secretos**: variables de entorno **sin** prefijo `NEXT_PUBLIC_*` (server-only). Si lo prefijás con `NEXT_PUBLIC_*` queda en el bundle JS público. En duda, sin prefijo.
- Donaciones futuras: Ko-fi link, sin backend.
- Búsqueda: client-side con Fuse.js sobre JSON estático generado en build.
- RSS de YouTube: build-time fetch + ISR de Next, sin API key.

## Imágenes y assets

**Estructura flat en `public/images/`** organizada por tipo:

| Tipo | Path | Convención de nombre |
|---|---|---|
| Game hero | `public/images/games/<game-id>-hero.<ext>` | `path-of-exile-hero.webp` |
| Game logo | `public/images/games/<game-id>-logo.<ext>` | `path-of-exile-logo.png` |
| Creator avatar | `public/images/creators/<creator-id>-avatar.<ext>` | `zizaran-avatar.jpg` |
| Creator banner | `public/images/creators/<creator-id>-banner.<ext>` | `zizaran-banner.jpg` |
| Tool logo | `public/images/tools/<game-id>/<tool-id>-logo.<ext>` | `path-of-exile/maxroll-logo.png` |
| Tool logo (shared vendor) | `public/images/tools/common/<vendor>-logo.<ext>` | `github-logo.png`, `nexusmods-logo.svg` |
| Tool screenshot | `public/images/tools/<game-id>/<tool-id>-ss-<N>.<ext>` | `path-of-exile/path-of-building-ss-1.png` |

**Reglas**:

- Las **tool images viven en una subcarpeta por juego** dentro de `public/images/tools/`. La carpeta corresponde al juego donde el tool tiene su entry en `content/games/<game>/tools/<tool>/`. Esto evita que el directorio raíz se llene con cientos de archivos sueltos cuando el codex crezca a 200+ tools.
- **Logos compartidos en `public/images/tools/common/`** para tools cuya identidad visual es la plataforma que las hostea (GitHub, Nexus Mods, etc.) en lugar de una marca propia, o para brands con presencia repetida cross-game. **Antes de bajar un logo per-tool, chequear si la URL del tool corresponde a un vendor con logo ya en `common/`** — si sí, referenciar ese path en `meta.json` y saltar la descarga. Mapeo actual (crece a medida que se agregan logos):
  - `github.com/*` → `"logo": "/images/tools/common/github-logo.png"`
  - `nexusmods.com/*` (y `www.nexusmods.com/*`) → `"logo": "/images/tools/common/nexusmods-logo.svg"`
  - `mobalytics.gg/*` → `"logo": "/images/tools/common/mobalytics-logo.png"` (presente en LoL, Valorant, PoE 2, D4 — 5 entries)
  - `discord.com/invite/*` (Discord oficial servers) → `"logo": "/images/tools/common/discord-logo.png"` (presente en 6+ entries)
  - `tracker.gg/*` (y propiedades de Tracker Network: `apex.tracker.gg`, `destinytracker.com`) → `"logo": "/images/tools/common/tracker-gg-logo.jpg"` (presente en Valorant, CS2, Apex, Destiny 2, Marvel Rivals, LoL — 6 entries)
- El criterio para mover un logo a `common/` es que **se repita en 3+ tools**. Marcas con presencia única se mantienen como logo per-tool.
- Tool ids son únicos globalmente (entre creators y entre tools), pero al colocarse bajo un game subfolder de assets el riesgo de colisión queda absorbido por el path completo. Si una tool aparece en múltiples juegos vía `multiGame`, los otros games referencian el path de su game primario (no se duplican los archivos).
- Otros tipos de asset (game hero/logo, creator avatar/banner) **no usan subcarpetas** — viven flat en `games/` y `creators/` respectivamente. La regla de subcarpeta es solo para tools por el volumen alto.
- Hero del juego **≥1500px de ancho** (cap visual del banner). Imágenes más chicas se ven pixeladas en monitores ultrawide.
- **Hero del juego SIEMPRE en `.webp`** (sin excepciones). Si la fuente es JPG/PNG, convertir a WebP antes de subir (ej: `cwebp -q 85 source.jpg -o public/images/games/<game-id>-hero.webp`). El `heroImage` del `meta.json` siempre apunta a `.webp`. Razón: AVIF/WebP fallback automático del Next image optimizer da el mejor balance peso/calidad, y los heroes son los assets más pesados del sitio.
- **Formatos aceptados** (otros assets — logo, avatar, banner, screenshot): `.png`, `.jpg`, `.svg`, `.webp`. Para logos preferir `.png` o `.svg` con fondo transparente. `.jpg` queda como opción válida cuando solo se tiene fuente JPEG.
- Si un asset no existe, los componentes hacen fallback automático (initial letter, sección omitida) gracias a `existsSync`. **NO añadir imágenes rotas** a producción.
- `next.config.ts` tiene `images.remotePatterns` para `**.ytimg.com` (thumbnails de YouTube). Otros dominios externos requieren agregar pattern.

**En el `meta.json` el path empieza con `/images/...`** (no `/games/...`). Ejemplos:
- Game: `"logo": "/images/games/path-of-exile-logo.png"`, `"heroImage": "/images/games/path-of-exile-hero.webp"`
- Creator: `"avatar": "/images/creators/zizaran-avatar.jpg"`
- Tool: `"logo": "/images/tools/path-of-exile/maxroll-logo.png"`, screenshots: `"url": "/images/tools/path-of-exile/maxroll-ss-1.png"` (numerados desde 1, sin captions — el componente derive un alt fallback con el nombre del tool si no hay caption)

## Lucide icons removidos

Lucide quitó todos los icons de marca. Mapeo a alternativas genéricas:

| Marca | Alternativa lucide |
|---|---|
| GitHub | `Code2` |
| YouTube | `PlayCircle` |
| Twitch / Kick | `Tv` |
| Discord | `MessagesSquare` |
| Patreon | `Heart` |
| TikTok | `Music` |
| Instagram | `Camera` |
| Twitter / X | `AtSign` |
| Fallback | `ExternalLink` |

## SEO

- **`metadataBase`** se setea solo una vez en `[locale]/layout.tsx` desde `siteUrl()`. **No** lo dupliques en pages individuales.
- Cuando agregás un nuevo tipo de página (no solo un nuevo dato del mismo tipo):
  1. Agregar entrada en `src/app/sitemap.ts` enumerando sus rutas.
  2. Crear el builder de JSON-LD apropiado en `src/lib/jsonld.ts` (eligiendo el tipo schema.org más específico que aplique — ver [schema.org docs](https://schema.org/docs/full.html)).
  3. Inyectar en la page como `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(...) }} />` lo antes posible en el JSX.
  4. Agregar `alternates.canonical` + `alternates.languages` en `generateMetadata` con la ruta absoluta-relativa de cada locale.
- **URLs en JSON-LD** siempre absolutas. Usar `absoluteUrl(path)` de `@/lib/site`, nunca strings relativas — Google los necesita absolutos.
- **`NEXT_PUBLIC_SITE_URL`**: se setea en Vercel para staging/preview o subdomain temporal. Default code = dominio final (`https://thegamercodex.com`). No subir un `.env.local` con override pesado al repo (está en `.gitignore`).
- Antes de hacer deploy productivo (que va a ser indexado), verificar que `siteUrl()` apunta al dominio correcto: el sitemap.xml lleva esas URLs y son lo que Google va a crawlear.

## Schema

- **`createdBy`** es un objeto `{ name, url?, creatorId? }`, **NO un string**.
- **`multiGame`** es opcional. Cuando se omite, la tool es mono-juego. NO usar `{ available: false }` — directamente omitir el campo.
- **`gamePlaylists`** se define solo en la plataforma YouTube marcada `primary: true` del creator.
- **`PlaylistRef`** acepta `withDisclaimer?: boolean` para playlists que mezclan contenido de varios juegos.
- Cuando agregás/quitás/renombrás un campo en algún `meta.json`:
  1. Sincronizar el TypeScript type en `src/types/index.ts`.
  2. Actualizar la doc descriptiva en `CLAUDE.md → "Schema de Datos"`.
  3. **Agregar entrada en `docs/SCHEMA_EVOLUTION.md`** con fecha, cambio, razón, archivos afectados, migración.

## Géneros canónicos

`Game.genres[]` solo acepta los siguientes 9 slugs:

- `arpg` — Action-RPG con build crafting
- `soulslike` — Combate Souls con stamina y dodge-roll
- `mmo` — Massive multiplayer online
- `moba` — Multiplayer online battle arena
- `fps` — First-person shooter (incluye hero-shooter y battle-royale)
- `gacha` — Live-service con character/weapon gacha
- `survival-craft` — Survival + crafting + base building
- `open-world` — Mapa abierto grande como feature primaria
- `roguelike` — Runs procedurales con reset-on-death

Al agregar un game nuevo, asignar 1-3 géneros canónicos. Estos valores alimentan los chips multi-select de filtro en el landing (`GameExplorer`).

**Lo que NO va en `genres[]`**:

- **Modos** (`co-op`, `pvp`, `single-player`, `multiplayer`, `online`, `offline`) — son atributos de cómo se juega, no del género. Se infieren del juego o se exponen en futuros campos dedicados.
- **Temas / aesthetics** (`fantasy`, `dark-fantasy`, `cyberpunk`, `viking`, `sci-fi`, `anime`, `time-travel`) — son estética, no género.
- **Monetización** (`free-to-play`) — ya vive en `stores[].model` y `monetization.model`.
- **Scene / cultura** (`esports`, `competitive`, `team-based`, `raid-pve`) — son contexto comunitario, no género.
- **Subgéneros nicho** (`tactical-shooter`, `looter-shooter`, `hero-shooter`, `mmorpg`, `turn-based-rpg`, `battle-royale`, `creature-collection`, `sandbox`, `base-building`, `crafting`, `exploration`) — se mergean al género canónico más cercano (ver `docs/SCHEMA_EVOLUTION.md → 2026-06-01`).

## Diseño — lo que NO queremos

- ❌ "AI corporate generic" (gradientes morados/azules genéricos, glassmorphism por todos lados, ilustraciones de Notion).
- ❌ Demasiados emojis o elementos infantiles. Audiencia adulta y técnica.
- ❌ Cards inconsistentes (cada componente con su estilo distinto).
- ❌ Animaciones intrusivas (auto-play videos, parallax exagerado, popups).
- ❌ Tipografías mixtas decorativas (Comic Sans, fuentes scripts, etc.).
- ❌ Hex hardcodeado en componentes: usar tokens (`bg-background`, `text-accent`, `border-border-strong`, etc.). Ver `CLAUDE.md → "Sistema de Color"` para la lista completa.
- ❌ `<a href="...">` para navegación interna localizada. Usar `<Link>` de `@/i18n/navigation`.

## Diseño — preferencias

- Solo dark mode. No hay toggle ni light variant — la paleta cyan + navy se diseñó para fondo oscuro y la audiencia gaming consume mayormente de noche.
- Animaciones sutiles **150-200ms**. Nada largo.
- Una sola familia tipográfica (Geist por ahora).
- Hover effects con `accent` del contexto: chrome cyan en landing/header/footer, accent del juego dentro de su sección (heredado vía override en `[game]/layout.tsx`).
- **`--highlight`** (amarillo gold) es siempre marca y va en endorsements editoriales (estrella ⭐ "essential"), no se usa para theming por juego.
- Semánticos universales (`--success`, `--warning`, `--danger`, `--info`) son los mismos para PoE que para Genshin: el verde "Free" es el mismo verde en cualquier juego.

## Editorial conventions para game .md

Cada juego tiene `content/games/<id>/es.md` y `en.md` con la página "Sobre el juego".

**Frontmatter requerido**:
- `title`: nombre completo del juego (no se renderea, sirve de referencia).
- `tagline`: one-liner ~70 caracteres que aparece en la `GameCard` del landing **y** debajo del título en el `GameHero` de la página del juego. Es lo primero que el usuario lee del juego — debe ser específico y no genérico ("El MOBA por excelencia: 5v5, esports tier-1" sí; "El mejor juego" no). **Si falta, la card del landing queda sin bajada.**
- `description`: 1-2 frases factuales que expanden el tagline. Se expone en `Game.descriptionEs/En` (futuro uso para OG metadata y SEO).

`quickTake` **no aplica a game .md** — es exclusivo de tool .md. Si lo encontrás en un game .md es legacy y se puede borrar.

**Body**: análisis libre del juego (qué es, por qué importa, contexto del ecosistema). Sin estructura forzada como las tools.

## Editorial conventions para tool .md

Cada tool tiene `es.md` y `en.md` con análisis editorial. Estructura estándar a seguir cuando se arman nuevas (mantener consistencia entre tools del mismo y de distintos juegos):

**Frontmatter requerido**:
- `title`: nombre completo de la tool (no se renderea, sirve de referencia).
- `description`: 1-2 frases factuales, qué es la tool. Se expone en `Tool.summaryEs/En` (futuro uso para OG metadata).
- `quickTake`: opinión editorial fuerte de 1-2 frases. Se renderiza como callout destacado en el detalle. Acá va la tesis: cuándo usarla, para quién, por qué importa.

**Estructura del body** (en este orden, cada uno como `## H2`):

1. **Qué es** — descripción factual: qué hace, quién la mantiene, free/paid, año aprox de inicio si lo conocemos.
2. **Qué problema resuelve** — el pain point del jugador que la tool ataca. Por qué existe.
3. **Diferenciación** (cuando aplica) — sección comparativa con tools del mismo cluster (ej: "La diferencia con Blitz.gg" para OP.GG). Solo cuando hay un competidor obvio que el lector va a evaluar en paralelo.
4. **Para qué la usa la gente** — 3-5 casos de uso concretos en bullets con bold heading + descripción.
5. **Para quién NO es esta herramienta** — honestidad: a quién le conviene otra cosa. Linkear mentalmente (no en md) a las alternativas.
6. **Cómo se usa en la práctica** — flujo paso-a-paso, idealmente numerado.
7. **Limitaciones honestas** — bullets con bold heading + descripción. Sin demonizar pero sin tampoco esquivar problemas reales (paywall, ads, lag, gaps).
8. **Cómo empezar** — onboarding mínimo: instalación/registro/primer uso.

**Tono**:
- Honesto pero no agresivo. Mencionar paywalls, ads, telemetría cuando existan, sin convertir el análisis en rant.
- Evitar superlativos vacíos ("la mejor tool del mercado"). Reemplazar por afirmaciones concretas y verificables.
- Diferenciación editorial entre pares competidores debe ser explícita pero respetuosa.
- Sin emojis en el cuerpo del análisis.

**Longitud target**: ~80-100 líneas de markdown por archivo (suficiente para análisis denso sin volverse repetitivo). El template de referencia más extenso es `content/games/genshin-impact/tools/akasha-system/es.md` (~140 líneas) — útil cuando la tool requiere comparación profunda, pero la mayoría de las tools no lo necesitan.

**Idiomas**: `es.md` y `en.md` mantienen estructura paralela (mismas secciones, mismo orden). El contenido se traduce, no se calca: cada idioma puede tener idioms y referencias adaptadas.

## Editorial conventions para comparisons y stacks

Dos tipos de contenido adicionales que viven por juego, ambos con `meta.json` + `es.md` + `en.md` y auto-descubiertos por directorio. El **how-to completo** (schema, estructura de archivos, ejemplos) está en `docs/ADD_GAME_PLAYBOOK.md` (Phase 4 comparisons, Phase 5 stacks). Reglas invariantes:

- **Comparisons** (`content/games/<game>/comparisons/<a-vs-b>/`): head-to-head entre dos tools del mismo cluster. `meta.json` lleva `toolIds[2]`, `verdict`, `useCases[]`; el `title`/`description` van en el frontmatter de los `.md`. Mínimo recomendado por juego: 7 pares. `winner` de cada useCase debe ser uno de los dos `toolIds`.
- **Stacks** (`content/games/<game>/stacks/<id>/`): bundle curado de 5-6 tools que se usan **juntas** para un objetivo end-to-end ("El toolkit completo de X"), no las "mejores" sueltas. `meta.json` lleva `items[]` (`{toolId, roleEs, roleEn}`, en orden de uso); `title`/`description` en el frontmatter de los `.md`. **Todas las tools del stack deben existir ya** en `tools/` — un stack orquesta, no introduce tools. Mínimo: 1 stack por juego.
- Ambos: español neutro obligatorio (correr el grep antes de cerrar — el voseo se cuela mucho en este texto editorial extenso), y `lastVerified` con la fecha de hoy.

## Verificación de tools nuevas (VirusTotal)

Antes de agregar una tool al codex, validar la confiabilidad del dominio:

- **Fuentes canónicas** (no requieren chequeo): GitHub oficial del proyecto, sitio oficial del juego/desarrollador, repos de autores reconocidos en la comunidad, tools linkeadas desde subreddit/wiki/Discord oficial del juego, dominios ya presentes en el codex con otras tools (ej: `maxroll.gg`, `mobalytics.gg`, `nexusmods.com`).
- **Fuentes no canónicas** (requieren chequeo): cualquier dominio desconocido, sitios encontrados via web search sin pedigree claro, tools recomendadas por un solo creator sin presencia en fuentes oficiales.

**Cómo chequear**: abrir `https://www.virustotal.com/gui/domain/<dominio>` y reportar el resultado al usuario antes de crear el `meta.json`. Si VirusTotal flaggea engines como maliciosos/phishing/suspicious, no agregar la tool. Si está limpio, proceder normalmente.

**Razón**: el riesgo principal al curar tools es linkear sitios comprometidos o phishing que clonan tools legítimas (ej: `path0fbuilding.com` vs `pathofbuilding.community`). El daño cae sobre el usuario que hace click desde el codex, no sobre Claude.

## Tracking de batch tasks (tools/creators/resources en lote)

Cuando hay un batch grande para procesar (ej: 15 tools de un juego nuevo), mantener el progreso en un archivo tracker en `docs/wip/<game>-tool-tracker.md`. Estructura: tabla con status por item (✅ done / 🔧 in-progress / ⏳ pending), notas editoriales descubiertas durante research (ej: "U.GG menciona Riot endorsement"), y dudas pendientes de investigar. Esto deja la sesión retomable desde otra máquina con un `git pull`. NO usar `.tmp/` para tracking — está gitignored y no sincroniza.

## Mantenimiento de contenido

- Para actualizar `lastVerified` de una o varias tools, usar el script en lugar de editar `meta.json` a mano:
  ```
  npm run verify <gameId> <toolId> [toolId ...]
  npm run verify -- --all <gameId>
  ```
  El script hace replace por línea (preserva el formato del archivo) y valida que el campo exista.

- **Después de agregar/quitar/renombrar tools, creators, resources o games**, ejecutar:
  ```
  npm run inventory
  ```
  Regenera `docs/CONTENT_INVENTORY.md` desde `content/games/`. Commitear el doc actualizado en el mismo commit que el cambio de contenido — así el snapshot del repo siempre refleja el estado real, y futuras sesiones de Claude leen un inventario actualizado en lugar de info stale en CLAUDE.md.

  No editar `CONTENT_INVENTORY.md` a mano: la fuente de verdad es `content/games/` y cualquier edición manual se sobreescribe en la próxima corrida.

## Sponsor slot

El componente `src/components/SponsorSlot.tsx` (config en `src/lib/sponsor.ts`) renderiza un único banner de sponsor en el footer cuando hay uno activo, y nada cuando `activeSponsor` es `null`. Label "Patrocinado/Sponsored", `rel="sponsored noopener noreferrer"`, UTM tracking automático.

**Para activar un sponsor**:
1. Subir el logo a `public/images/sponsors/<sponsor-id>-logo.<ext>`
2. Editar `src/lib/sponsor.ts`: cambiar `activeSponsor` de `null` al objeto del sponsor
3. Verificar visualmente en `/es` y `/en` antes de pushear
4. Cuando termine la campaña, devolver `activeSponsor` a `null`

## Changelog (release notes)

El changelog vive en `content/changelog/<YYYY-MM-DD>-<slug>.md` y se renderiza en `/changelog`. Cada entry corresponde a un release pequeño — la cadencia esperada es **5–10 días entre entries**, típicamente uno por nuevo juego agregado, con entries intermedios de mantenimiento (fixes, removals, ajustes editoriales).

**Frontmatter requerido**:

```yaml
---
date: 2026-05-15           # ISO date — define el ordering desc en /changelog
titleEs: "Diablo 4 agregado"
titleEn: "Diablo 4 added"
summaryEs: "Lanzamos D4 con 12 tools curadas y 3 creators."
summaryEn: "Launched D4 with 12 curated tools and 3 creators."
gameAdded: "diablo-4"      # opcional; matchea un game id. Activa el badge "Nuevo juego" + accent del juego en el side border de la entry
---
```

**Formato corto (obligatorio)**: las entries se leen de un vistazo, no son un dump. Mantener todo conciso:

- **`summaryEs`/`summaryEn`**: 1–2 frases, **máx ~280 caracteres**. Incluir solo: nombre del juego/release, developer (si es game-added), un descriptor corto, y los counts headline (tools / creators / resources / comparativas / stack). **NO** enumerar tool por tool ni meter fechas de launch, revenue, appIds, etc. en el summary.
- **`events[]`** (opcional, para releases con varias adiciones): array que representa el delta del release y se renderiza como lista estructurada. Cada event:
  ```yaml
  events:
    - type: game            # game | comparison | tool | creator | stack | moved
      action: added         # added | removed | updated | moved
      name: "Diablo 4"      # nombre legible; acá vive el keyword surface (no en el summary)
      gameId: diablo-4
      noteEs: "12 tools en 6 categorías, 5 creators, 25 resources, 7 comparativas y un stack."
      noteEn: "12 tools across 6 categories, 5 creators, 25 resources, 7 comparisons, and a stack."
  ```
  - **`noteEs`/`noteEn`**: **una línea cada una** (~140 chars; el note del event `game` puede llegar a ~180 para cubrir categorías + counts). Para `type: comparison`, usar el patrón compacto `"Categoría: A vs B — distinción corta"`.
  - Los `name`/`gameId`/`type`/`action` son la parte estructural — los nombres de tools y comparativas van **ahí**, no enumerados en el summary.
- **Referencia canónica**: `content/changelog/2026-06-03-marvel-rivals-added.md` (summary ~240 chars + notas de una línea). Igualar esa densidad.

**Body bilingüe** (opcional, solo si la entry necesita prosa extra más allá del summary + events): usar fences `<!-- es -->` y `<!-- en -->`. Sintaxis convencional [Keep a Changelog](https://keepachangelog.com): secciones **Añadido**, **Cambiado**, **Arreglado**, **Removido**.

```markdown
<!-- es -->
## Añadido
- ...

## Arreglado
- ...

<!-- en -->
## Added
- ...

## Fixed
- ...
```

Si el entry es muy corto y no querés escribir bilingüe, podés poner el body en frontmatter (`bodyEs:`/`bodyEn:` con string multilínea) y dejar el cuerpo del archivo vacío. Ambos approaches funcionan.

**Stats dinámicos**: el strip de la landing y el header de `/changelog` muestran totales calculados a build-time desde `content/games/`. Cada vez que agregás una tool, creator o resource, los números se actualizan solos en el próximo deploy. No hace falta tocar nada manualmente.

**"Actualizado hace X días"**: derivado de la fecha del entry más reciente. Si pasan más de 30 días sin entry, ese suffix se oculta automáticamente para no proyectar un signal de "abandono" — pero la solución correcta es publicar un entry, no esconder la métrica.

## Process

- **Claude NUNCA corre el build** (`npx next build` / `npm run build`). Se cuelga en este entorno. Cuando un cambio necesite verificación de build, **avisar al usuario para que lo corra él** (`! npm run build` o por su cuenta) e indicar qué hay que mirar. Dejar el cambio marcado como "pendiente de verificar build" en vez de declararlo "listo" por cuenta propia.
- **Claude NUNCA levanta el dev server local** (`npm run dev` / `next dev`). Por algún motivo siempre se cuelga en este entorno. Si hace falta el server corriendo para verificar algo, pedirle al usuario que lo levante él (`! npm run dev` o lo corre por su cuenta) y avisar qué hay que mirar.
- Para cambios UI/frontend, también verificar visualmente (refresh en browser con el server que levanta el usuario). Si no se puede testear visualmente, decirlo explícitamente.
- **NO hacer commit/push automáticamente**. Pedir confirmación al usuario antes de cada commit/push.
- Mensajes de commit: imperativos cortos en el subject; body explicando WHY (no WHAT — el diff dice el WHAT).
- No usar emojis ni decoraciones en mensajes de commit, PRs, ni código.
- En `git add`, listar archivos específicos. **NO usar `git add .` ni `git add -A`** — pueden incluir secrets o binarios sin querer.
- Cuando termines un cambio al schema, recordar al usuario actualizar `docs/SCHEMA_EVOLUTION.md` si se olvidó.

## Indexing post-merge a main

El sitemap.xml es dinámico y Google descubre URLs nuevas por su cuenta en días-semanas. Pero cuando se mergea a main un **game nuevo**, vale la pena hacer submit manual del game hub en Google Search Console para acelerar indexing del batch entero (~20+ URLs: hub + tools + comparisons + stacks).

**Después de mergear un game nuevo a `main` y confirmar deploy en producción**, en el reporte de cierre de Claude incluir dos links clickeables:

1. **Game hub URL** (a copiar): `https://thegamercodex.com/en/<game-id>`
2. **GSC dashboard de la property**: `https://search.google.com/search-console?resource_id=sc-domain%3Athegamercodex.com` — abre directo el dashboard de `thegamercodex.com`. Arriba aparece un input "Inspeccionar cualquier URL en https://thegamercodex.com/"; pegar el game hub URL ahí, Enter, "Request indexing".

**No usar** el deep link a `/inspect` con `id` prellenado (`.../search-console/inspect?resource_id=...&id=...`) — Google strippea los query params en el redirect de auth y devuelve 404. El dashboard link sí abre la property correcta y queda 1 paste extra para inspeccionar el hub.

Google crawlea internamente desde el hub a tools/comparisons/stacks/resources, así que con 1 submit cubrís el batch entero. No es necesario submitir cada URL individual.

**Yandex** (mantiene tráfico significativo según analytics): submit equivalente en `https://webmaster.yandex.com/sites/`. Opcional pero baja el lag de discovery en ese referrer.

Esto solo aplica a games nuevos enteros — no a tools/creators/resources sueltos agregados a games existentes. Para esos, dejar que el sitemap haga su trabajo.
