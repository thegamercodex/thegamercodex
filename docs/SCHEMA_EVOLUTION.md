# Schema Evolution Notes

Este archivo documenta cambios al schema de datos del proyecto a lo largo del tiempo. Cada entrada incluye fecha, descripción del cambio, y razón.

## Cómo mantener este archivo

**Cuándo agregar una entrada**:
- Se agrega un campo nuevo a algún `meta.json` (game, tool, creator, resource).
- Se renombra o elimina un campo existente.
- Se cambia la estructura de un sub-objeto.
- Se agrega un nuevo tipo de contenido (ej: una nueva categoría de archivos).
- Se cambian convenciones de naming en el schema.

**Cuándo NO agregar entrada**:
- Solo se agrega contenido nuevo (otra tool, otro creator).
- Cambios cosméticos o de UI.
- Bug fixes que no afectan estructura de datos.

**Formato de cada entrada**:

```
YYYY-MM-DD - [Tipo de cambio]
Cambio: descripción breve y técnica de qué cambió.
Razón: por qué se hizo el cambio, qué problema resuelve.
Archivos afectados: qué tipos de meta.json o archivos se actualizan.
Migración: si aplica, cómo migrar contenido existente al nuevo schema.
```

**Sincronización con código**: cuando se cambia el schema, sincronizar también el TypeScript type en `src/types/index.ts`. La doc descriptiva del schema vive en `CLAUDE.md → "Schema de Datos"`.

## Historial de cambios

### 2026-05-19 - Agregado `similarGames?: string[]` opcional a Game

**Cambio**: nuevo campo opcional `similarGames` en `Game.meta.json` (array de `gameId`). Sirve de override manual para la recomendación de "juegos similares" que aparece al final del game hub y de la resource category page.

**Razón**: la recomendación se deriva automáticamente por intersección de `genres[]` (ver `src/lib/similar-games.ts`), filtrando géneros muy comunes (`online`, `free-to-play`) como ruido. El auto cubre el 80% de los casos (clusters MOBA, FPS, ARPG, etc.). Pero hay outliers — ej: WoW es el único MMORPG del codex y queda con matches débiles. `similarGames` permite curar a mano cuando el auto falla, sin acoplar el componente al algoritmo. Si está seteado y no vacío, gana sobre el auto; si está vacío o ausente, se usa el auto.

**Archivos afectados**:
- `src/types/index.ts` — agregado a `GameMeta`.
- `CLAUDE.md → "Schema de Datos / Meta del Juego"` — pendiente de mención.
- `meta.json` de games: opcional, no requiere setear nada para que la feature funcione (default = auto-derive).

**Migración**: no requerida. El campo es opcional.

### 2026-05-19 - Normalizada nomenclatura de género `soulslike`

**Cambio**: unificadas las variantes `souls-like-elements` (PoE 2) y `soulslike-combat` (Windrose) bajo el valor canónico `soulslike` en `genres[]`.

**Razón**: el algoritmo de similar games (ver entrada de arriba) calcula intersección de genres. Dos variantes textuales del mismo concepto no intersectan, perdiendo señal de afinidad. PoE 2 y Windrose tienen estilo soulslike en común y ahora matchean correctamente.

**Archivos afectados**:
- `content/games/path-of-exile-2/meta.json`
- `content/games/windrose/meta.json`

**Migración**: si en el futuro un game nuevo trae una variante adicional (`souls-like`, `soulslike-game`, etc.), normalizar a `soulslike` antes de comitear.

### 2026-05-03 - Agregados `app-store` y `google-play` al union StorePlatform

**Cambio**: agregadas `"app-store"` y `"google-play"` como variantes válidas del campo `platform` dentro de `Store`. El union pasa de 10 a 12 plataformas.

**Razón**: juegos con distribución mobile (Genshin Impact, Honkai Star Rail, Zenless Zone Zero, Pokémon GO, etc.) se publican en App Store y Google Play. Antes se intentaba usar `"ios"` y `"android"` (que son `Platform`, no `StorePlatform`) — eso es semánticamente incorrecto: `ios`/`android` describen el sistema operativo soportado, no la tienda donde se compra/descarga.

**Archivos afectados**:
- `src/types/index.ts` — agregadas variantes al union `StorePlatform`.
- `content/games/genshin-impact/meta.json` — migrado de `"ios"` → `"app-store"` y `"android"` → `"google-play"` en `stores[]`.
- A futuro: cualquier juego mobile usa estos valores en su `stores[]` (mientras `platforms[]` sigue listando `"ios"` / `"android"` como soporte).

**Migración**: si algún `meta.json` existente usa `"ios"` o `"android"` dentro de `stores[].platform`, cambiar a `"app-store"` y `"google-play"` respectivamente.

### 2026-05-03 - Agregado `riot-client` al union StorePlatform

**Cambio**: agregada `"riot-client"` como variante válida del campo `platform` dentro de `Store` (en `Game.stores[]`). El union pasa de 9 a 10 plataformas.

**Razón**: Riot distribuye sus juegos (League of Legends, Valorant, TFT, Legends of Runeterra) exclusivamente vía su propio launcher (Riot Client), no vía Steam/Epic/etc. Sin esta variante no se puede modelar correctamente la "tienda" de un juego de Riot.

**Archivos afectados**:
- `src/types/index.ts` — agregada variante al union `StorePlatform`.
- `content/games/league-of-legends/meta.json` — primer consumidor (cuando se complete su `stores[]`).
- A futuro: Valorant, TFT, LoR usarán el mismo identificador.

**Migración**: no requerida. Es solo agregar una variante; los `meta.json` existentes siguen siendo válidos.

### 2026-05-03 - Agregado tipo `discord` al union ToolType

**Cambio**: agregado `"discord"` como variante válida del campo `type` de Tool. El union pasa de 7 a 8 tipos: `software`, `web-app`, `overlay`, `browser-extension`, `mobile-app`, `official-service`, `reference`, `discord`.

**Razón**: hubs comunitarios sobre Discord (ej: The Forbidden Trove en PoE) son tools relevantes en su propio derecho — bulk trading, mirror crafting services, carry services — y no encajan limpiamente en `web-app` ni `reference`. Tener un tipo dedicado deja claro al lector que la "tool" es un servidor de Discord, no un sitio que se visita.

**Archivos afectados**:
- `src/types/index.ts` — agregada variante al union `ToolType`.
- `messages/es.json` y `messages/en.json` — agregada traducción de la key `type.discord` ("Servidor de Discord" / "Discord server").
- `CLAUDE.md → "Schema de Datos" → "Meta de Tool"` — lista actualizada.
- `content/games/path-of-exile/tools/tft/meta.json` — primer consumidor del tipo.

**Migración**: no requerida. Es solo agregar una variante; los `meta.json` existentes siguen siendo válidos.

### 2026-05-01 - Refactor de paths de imágenes a estructura flat

**Cambio**: paths de imágenes en `meta.json` migrados de estructura anidada por juego a estructura flat global por tipo de asset.

**Antes**:
- `/games/[game]/hero.webp`, `/games/[game]/logo.png`
- `/games/[game]/creators/[creator]/avatar.jpg`
- `/games/[game]/tools/[tool]/logo.png`
- `/games/[game]/tools/[tool]/screenshots/[shot].png`

**Después**:
- `/images/games/[game-id]-hero.<ext>`, `/images/games/[game-id]-logo.<ext>`
- `/images/creators/[creator-id]-avatar.<ext>`, `/images/creators/[creator-id]-banner.<ext>`
- `/images/tools/[tool-id]-logo.<ext>`
- `/images/tools/[tool-id]-<descriptor>.<ext>` (screenshots y otros)

**Razón**: subir y encontrar assets era tedioso con paths anidados profundos. La estructura flat permite ver todos los assets de un tipo en una sola carpeta, con nombres autodescriptivos. Para tools multi-game como Maxroll, un solo `maxroll-logo.png` se reusa para todas las versiones (es el mismo logo).

**Archivos afectados**:
- Físicos: archivos en `public/games/...` movidos a `public/images/...` y la carpeta vieja eliminada.
- Metadata: `meta.json` de games (`logo`, `heroImage`), creators (`avatar`, `banner`), tools (`logo`, `screenshots[].url`). Total: 14 archivos `meta.json` actualizados (2 games + 3 creators + 9 tools).
- Documentación: `CLAUDE.md → "Estructura de Carpetas"` y `docs/RULES.md → "Imágenes y assets"` actualizados con la nueva convención.

**Migración**: hecha en este commit. Asume que los `id` de game/creator/tool son únicos globalmente. Si hubiera colisión (mismo `id` en dos contextos diferentes), agregar prefijo de juego al asset name.

### 2026-05-01 - Agregados campos creatorId y thumbnail al schema de Resource

**Cambio**: agregados dos campos opcionales al schema de Resource (en `content/games/[game]/resources/[category].json`):
- `creatorId: string | null` — id del creator en el codex si aplica. `null` explícito si el creator NO está en el codex (decisión editorial visible en el data).
- `thumbnail: string` — URL del thumbnail. Para videos de YouTube se puede usar `https://i.ytimg.com/vi/{youtubeId}/maxresdefault.jpg` o el formato custom que devuelva el RSS feed.

**Razón**: permitir cross-link interno desde resources hacia las páginas de creator (cuando el creator está documentado en el codex) y dar control sobre el thumbnail mostrado sin tener que parsear el feed o reconstruir la URL en runtime.

**Archivos afectados**: `content/games/[game]/resources/[category].json` (todos los resources de tipo `video` típicamente; otros tipos pueden no tener thumbnail).

**Migración**: no requerida. Campos opcionales. Resources existentes sin estos campos siguen renderizando — `creatorId` ausente se muestra como texto plano del campo `creator`, `thumbnail` ausente cae al patrón de YouTube (`i.ytimg.com/vi/{youtubeId}/hqdefault.jpg`).

### 2026-04-30 - Agregado campo multiGame al schema de Tool

**Cambio**: agregado campo opcional `multiGame` al meta.json de tool. Estructura:
```json
"multiGame": {
  "available": boolean,
  "otherGames": [
    { "gameId": string, "url": string }
  ]
}
```

**Razón**: permite identificar tools que cubren múltiples juegos (como Maxroll para PoE, Diablo 4, Last Epoch). Habilita cross-references entre secciones de juegos en la UI y futuras optimizaciones.

**Archivos afectados**: `content/games/[game]/tools/[tool]/meta.json`. Solo aplica a tools multi-juego, se omite en tools de un solo juego.

**Migración**: no requerida. Campo opcional retroactivamente compatible.

### 2026-04-30 - Agregado campo createdBy al schema de Tool

**Cambio**: agregado campo opcional `createdBy` al meta.json de tool. Estructura:
```json
"createdBy": {
  "name": string,
  "url": string,
  "creatorId": string (opcional)
}
```

**Razón**: atribuir el creador de cada tool a la persona o equipo que la mantiene. Mejora credibilidad y permite linkear a la página del creator dentro del sitio si existe (vía `creatorId`).

**Archivos afectados**: `content/games/[game]/tools/[tool]/meta.json`.

**Migración**: no requerida. Campo opcional. Se puede agregar retroactivamente a tools existentes cuando se conozca el creador.

### 2026-05-04 - Screenshots: nombrado simplificado y captions opcionales

**Cambio**: dos cambios coordinados al schema de `Screenshot` y al naming de los archivos en `public/images/tools/`:

1. **`captionEs` y `captionEn` ahora son opcionales** en `Screenshot` (`src/types/index.ts`). Antes eran requeridos. Si un screenshot no tiene caption, el tool detail page deriva un `alt` automático del nombre del tool + índice (`"<tool> screenshot 1"`, etc.) y oculta el `<figcaption>`.

2. **Nuevo patrón de naming para screenshot files**: `<tool-id>-ss-<N>.<ext>` (1-indexed). Antes era `<tool-id>-<descriptor>.<ext>` (ej. `path-of-building-screenshot-tree.png`).

**Razón**: el patrón con descriptor obligaba a saber qué muestra cada screenshot antes de subir el asset, lo cual ralentiza la curación. El nuevo patrón es secuencial — uno sube los screenshots como `ss-1`, `ss-2`, etc., en el orden que tenga, y el meta.json sólo lista las URLs sin necesidad de describir cada una. Las captions descriptivas se vuelven opcionales para casos donde aporten contexto editorial real, pero no se exigen.

**Archivos afectados**:
- `src/types/index.ts` — `Screenshot` interface (captions ahora opcionales)
- `src/app/[locale]/[game]/tools/[tool]/page.tsx` — `alt` con fallback automático cuando no hay caption
- `content/games/*/tools/*/meta.json` — los 76 tool meta.json: URLs renombradas al nuevo patrón, campos `captionEs`/`captionEn` removidos (no requeridos por el schema actualizado)
- `docs/RULES.md`, `CLAUDE.md` — docs sincronizadas con el nuevo patrón

**Migración**: ya hecha en 2026-05-04 con script Python que iteró sobre los 76 metas. 150 screenshots renombrados, 0 captions retenidas. Para nuevos screenshots, simplemente subir como `<tool-id>-ss-N.<ext>` y agregar la URL en `meta.json` sin caption.

### 2026-05-04 - Tool images: subcarpeta por juego

**Cambio**: las imágenes de tools (`logo` + `screenshots`) ahora viven en `public/images/tools/<game-id>/<tool-id>-...<ext>` en lugar del flat `public/images/tools/<tool-id>-...<ext>`.

**Razón**: con 76 tools curadas, cada una con 1 logo + 1-2 screenshots, el directorio `public/images/tools/` iba a acumular 200+ archivos sueltos cuando subiéramos los assets de los 5 first games. Buscar y mantener cualquier asset específico se vuelve impractical, y el listing del directorio en cualquier file explorer queda saturado.

La subcarpeta por juego mantiene la misma flat-structure simple dentro de cada juego (no hay nested deeper) pero rompe la lista en chunks manejables: típicamente 15-20 tools por juego. Dado que los tool ids son únicos a través del codex, el path completo (`<game>/<tool-id>-...`) sigue siendo determinístico.

**Archivos afectados**:
- `content/games/*/tools/*/meta.json` — los 76 tool meta.json: `logo` y cada `screenshots[].url` actualizados con prefijo `<game-id>/`
- `public/images/tools/` — todas las imágenes existentes (33 archivos al momento del cambio, todas de PoE) movidas a `public/images/tools/path-of-exile/`
- `docs/RULES.md` — tabla de assets actualizada
- `CLAUDE.md` — ejemplo de tree actualizado

**Migración**: ya hecha en 2026-05-04 con script Python. Para subir nuevos assets: crear la carpeta `public/images/tools/<game>/` si no existe, y guardar el archivo dentro. El path en `meta.json` debe matchear (`/images/tools/<game>/<tool-id>-logo.<ext>`).

**Tools multi-game**: por ahora ningún tool del codex aparece en múltiples carpetas `content/games/`. Si en el futuro un tool multi-game tuviera entries en varias carpetas, los assets viven una sola vez en la carpeta del game primario y los otros games referencian el mismo path absoluto desde su `meta.json`. La nueva estructura no duplica archivos.

### 2026-05-04 - Game .md frontmatter: `tagline` requerido, `quickTake` retirado

**Cambio**: el frontmatter de `content/games/<id>/{es,en}.md` queda canónicamente con `title` + `tagline` + `description`. Se elimina `quickTake` del schema de game .md (era código muerto — solo el detalle de tool lo renderiza).

**Razón**: las cards del landing leen `game.taglineEs/En` y rendean condicionalmente. Tres juegos (WoW, LoL, CS2) habían sido escritos con `quickTake` en lugar de `tagline`, lo que dejaba sus cards sin bajada de texto mientras PoE/PoE 2/Genshin sí la mostraban — inconsistencia visual silenciosa que solo se notó al revisar el landing. Codificar la regla previene la repetición cuando se agregue el siguiente juego.

**Archivos afectados**:
- `content/games/world-of-warcraft/{es,en}.md` — agregado `tagline`
- `content/games/league-of-legends/{es,en}.md` — agregado `tagline`
- `content/games/counter-strike-2/{es,en}.md` — agregado `tagline`
- `docs/RULES.md` — nueva sección "Editorial conventions para game .md" con el frontmatter canónico

**Migración**: si un game .md futuro nace sin `tagline`, su card del landing queda sin bajada (no rompe el build, solo es feo). El campo `quickTake` legacy en game .md no estorba pero es ruido — barrer cuando se toque el archivo por otra razón.

### 2026-05-07 - Changelog frontmatter: nuevo array `events` (scope CRUD-only)

**Cambio**: el frontmatter de `content/changelog/<YYYY-MM-DD>-<slug>.md` ahora soporta un array opcional `events` con cambios estructurados. Cada `Event` tiene `type` (tool/creator/game/resource), `action` (added/changed/removed/moved), `name`, y campos opcionales `gameId` (o `fromGameId`/`toGameId` para `moved`) más `noteEs`/`noteEn`. El cuerpo libre del entry queda como sección "Notas" y solo se renderea si hay contenido.

**Scope decidido**: el changelog se restringe deliberadamente a CRUD de las cuatro entidades curadas (games, tools, creators, resources). Cambios de UI, infraestructura, build setup, licencias, copy editorial, etc. no entran. Razón: la audiencia que mira `/changelog` quiere saber "qué tools/creators/recursos hay nuevos" — no quiere parsear features técnicos del sitio. La página tiene un disclaimer explícito de scope arriba.

**Razón** (del cambio en general): los entries previos usaban Keep a Changelog libre con bullets — funcional pero perdía estructura. Con `events`, cada cambio queda enumerado uniformemente con icon por tipo, color por acción, y badge del juego al que pertenece. Permite filtrar/buscar a futuro, estandariza qué se documenta entry por entry, y le da al lector una lectura visual rápida sin tener que parsear prosa.

**Editorial discipline (no codificada)**: los `events` reflejan deltas netos vs lo que está en main. Si una herramienta se agrega en `dev` y se retira antes de mergear a main, el entry no debe listar ni `added` ni `removed` — simplemente no aparece. El changelog documenta lo que la audiencia ve, no el work-in-progress interno.

**Archivos afectados**:
- `src/lib/changelog.ts` — nuevo type `ChangelogEvent` exportado, `ChangelogEntryFrontmatter.events?` agregado, parser pasa el array a la entry. Tipos union nuevos: `ChangelogEventType` y `ChangelogEventAction`.
- `src/app/[locale]/changelog/page.tsx` — render rehecho: bloque "Cambios" con iconos lucide por tipo, action label coloreado, game badge con accent del juego. Marcado libre del body queda como sección "Notas" abajo.
- `messages/{es,en}.json` — keys `changelog.eventsHeading`, `changelog.notesHeading`, `changelog.eventTypes.*`, `changelog.eventActions.*`, `changelog.eventMovedSeparator`.
- `content/changelog/*.md` — todos los entries existentes migrados al nuevo formato. Los dos entries `2026-05-05-destiny-2-added.md` y `2026-05-05-valorant-added.md` se fusionaron en `2026-05-05-destiny-2-and-valorant-added.md` (regla: un archivo por día).

**Migración**: para entries nuevos, agregar `events` con los items que ese día se shipean a main. Para entries existentes, ya migrados — el campo es opcional, así que entries futuros sin `events` siguen renderizando igual que antes (solo el body markdown).

**Cadencia (no cambia)**: una entry por día con cambios significativos. Si en un día se hacen varios cambios, todos van como items en el `events` array de la misma entry — no se crean entries separados con la misma fecha.


### 2026-05-16 - GameMeta: campo opcional `newsFeeds[]` + auto-derivación de Steam RSS

**Cambio**: agregado tipo `NewsFeed` y campo opcional `newsFeeds?: NewsFeed[]` en `GameMeta` (`src/types/index.ts`). Soporta tres tipos de source: `steam-rss` (URL del feed RSS de Steam), `youtube-channel` (URL con `channel_id=...` de un canal oficial del dev) y `rss` (cualquier feed RSS/Atom genérico).

**Auto-derivación**: si un game tiene `stores[].platform === "steam"` con `appId`, el Steam RSS feed se deriva automáticamente — **no hay que duplicarlo en `newsFeeds[]`**. El campo `newsFeeds[]` es exclusivamente para fuentes adicionales: Blizzard News, blogs oficiales de devs, etc.

**Razón**: páginas de noticias por juego (`/[locale]/[game]/news`) con auto-update vía RSS, sin requerir mantenimiento manual ni API keys. Steam RSS cubre patch notes oficiales para la mayoría de juegos del codex; `newsFeeds[]` extiende cobertura cuando hay fuentes oficiales mejores (WoW → Blizzard News, PoE → GGG forum, etc.).

**Archivos afectados**:
- `src/types/index.ts` — nuevos tipos `NewsFeed`, `NewsFeedSource`; `GameMeta.newsFeeds?` opcional.
- `src/lib/news.ts` — nuevo: `getGameNews()`, `hasNewsSources()`, parseo Steam/YouTube/RSS genérico con ISR 6h y fail-soft.
- `src/components/NewsItemCard.tsx`, `NewsFeedList.tsx`, `NewsPreview.tsx` — nuevos componentes server.
- `src/app/[locale]/[game]/news/page.tsx` — nueva ruta con `generateStaticParams` solo para games con sources.
- `src/app/[locale]/[game]/page.tsx` — sección `#news` condicional + tab en `GameTabNav`.
- `src/app/sitemap.ts` — entries `/[game]/news` para games con `hasNewsSources()`.
- `messages/{es,en}.json` — nueva sección `news.*`.

**Migración**: campo opcional, no rompe games existentes. Games con `stores[]` que incluyen Steam con appId ganan página `/news` automáticamente sin tocar `meta.json`. Games sin Steam ni `newsFeeds[]` no exponen la ruta (`hasNewsSources` retorna false, `generateStaticParams` filtra, sitemap omite).

