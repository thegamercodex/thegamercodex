# TheGamerCodex - Contexto del Proyecto

## Importante para Claude Code

**Lectura obligatoria antes de cualquier cambio**:

1. **`docs/RULES.md`** — convenciones de código, reglas de schema, qué NO queremos en diseño, process rules (build, commit, push). Si vas a escribir código, leer primero.
2. **`docs/SCHEMA_EVOLUTION.md`** — historial de cambios al schema de datos. Si vas a tocar algún `meta.json` o el TypeScript type, leer primero, y agregar entrada al final de la tarea.

CLAUDE.md (este archivo) describe **qué es** el proyecto: arquitectura, stack, schema actual, estado y roadmap. Para cómo trabajar en él, ir a `docs/RULES.md`.

Mapa rápido de secciones:

- **Tareas de diseño/frontend**: ver "Principios de Diseño y UX" (acá) + "Diseño" en `docs/RULES.md`.
- **Tareas de schema/contenido**: ver "Schema de Datos" (acá) + `docs/SCHEMA_EVOLUTION.md`.
- **Tareas de routing/arquitectura**: ver "Estructura de URLs Planeada" y "Estructura de Carpetas" (acá).
- **Decisiones técnicas generales**: ver "Stack Técnico" (acá) + "Código" en `docs/RULES.md`.
- **Estado actual del proyecto**: ver "Estado Actual del Contenido" y "Estado Actual del Código" (acá).

## Qué es

TheGamerCodex es un directorio web curado de herramientas y recursos para gamers, construido como un compendio (codex) de información organizada por juego. Empieza con Path of Exile como MVP y está diseñado para escalar a múltiples juegos.

## Stack Técnico

- **Framework**: Next.js 16 (App Router, SSG, Turbopack)
- **Lenguaje**: TypeScript estricto
- **Estilos**: Tailwind CSS v4 (configurado vía `@tailwindcss/postcss`, sin `tailwind.config.*` — los tokens viven en `src/app/globals.css` con `@theme inline`)
- **Contenido**: Markdown + JSON. Parser: `gray-matter` para frontmatter, `marked` para render del body a HTML
- **i18n**: `next-intl` con locales `es` (default) y `en`, `localePrefix: "always"`
- **Íconos**: `lucide-react`. Brand icons (`Github`, `Youtube`, `Twitch`, `Discord`, etc.) ya **no se exportan** — usar genéricos: `Code2` para repos, `PlayCircle` para YouTube, `Tv` para Twitch/Kick, `MessagesSquare` para Discord, `Heart` para Patreon, `Music` para TikTok, `Camera` para Instagram, `AtSign` para Twitter/X, `ExternalLink` como fallback.
- **Imágenes**: `next/image` con `images.formats: ["image/avif", "image/webp"]` en `next.config.ts` (el optimizer sirve AVIF a browsers que lo soportan, fallback a WebP, fallback a JPG). `images.remotePatterns` permite `**.ytimg.com` para thumbnails de YouTube.
- **YouTube RSS**: `fast-xml-parser` parsea feeds de canal y playlist. Sin API key, sin quotas. Cache build-time con `revalidate: 21600` (6h ISR).
- **Theming claro/oscuro**: `next-themes` con `attribute="class"`, `defaultTheme="dark"`, `enableSystem`. Inyecta script anti-FOUC, persiste en localStorage. Las CSS vars cambian según `:root.dark` (default) vs `:root.light` en `globals.css`.
- **Búsqueda client-side**: `fuse.js` para fuzzy search en `ToolsExplorer` (game page) y `ResourceGrid` (resources page). Sin index pre-build — se construye en cliente sobre los datos ya hidratados.
- **SEO**: `sitemap.xml` y `robots.txt` dinámicos vía convenciones App Router (`src/app/sitemap.ts`, `src/app/robots.ts`). JSON-LD por página (`WebSite`, `VideoGame`, `SoftwareApplication`, `Person`, `CollectionPage`) generado en `src/lib/jsonld.ts`. `metadataBase` + `alternates.canonical` + `alternates.languages` (hreflang) en cada page. URL base via `NEXT_PUBLIC_SITE_URL` env var (default `https://thegamercodex.com`); ver `.env.example`.
- **Hosting**: Vercel
- **Repo**: GitHub (público), organización `thegamercodex`
- **Node**: 22 LTS

**Nota Next 16**: el archivo `src/middleware.ts` emite warning de deprecación (Next 16 prefiere `proxy.ts`). Funciona; migrar cuando `next-intl` actualice docs.

## Estructura de URLs Planeada
/                                          → Landing con grid de juegos
/[locale]/[game]                           → Página del juego con tools, creators y resources
/[locale]/[game]/tools/[tool]              → Página individual de tool
/[locale]/[game]/creators/[creator]        → Página individual de creator
/[locale]/[game]/resources/[category]      → Lista de recursos por categoría

Locales soportados: `es` (default) y `en`.

## Estructura de Carpetas
thegamercodex/
├── content/                              ← Todo el contenido en archivos
│   └── games/
│       └── path-of-exile/
│           ├── meta.json                 ← Info del juego (incluye theme con 5 colores)
│           ├── es.md                     ← Descripción del juego (frontmatter: title, tagline, description)
│           ├── en.md
│           ├── tools/
│           │   └── [tool-id]/
│           │       ├── meta.json
│           │       ├── es.md             ← Análisis (frontmatter: title, description, quickTake)
│           │       └── en.md
│           ├── creators/
│           │   └── [creator-id]/
│           │       └── meta.json
│           └── resources/
│               ├── beginner-guides.json
│               ├── mechanics-per-league.json
│               ├── build-guides.json
│               ├── trading-guides.json
│               └── boss-guides.json
├── src/
│   ├── app/
│   │   ├── globals.css                   ← Tailwind v4 + tokens marca + prose styles
│   │   ├── favicon.ico
│   │   ├── sitemap.ts                    ← Sitemap dinámico con hreflang alternates
│   │   ├── robots.ts                     ← robots.txt dinámico (allow all + sitemap link)
│   │   └── [locale]/
│   │       ├── layout.tsx                ← Root layout (html/body, Header, Footer, NextIntlClientProvider)
│   │       ├── page.tsx                  ← Landing (hero + grid de juegos)
│   │       └── [game]/
│   │           ├── layout.tsx            ← Override de tokens marca → tokens del game theme
│   │           ├── page.tsx              ← Hero del juego + tools agrupados + creators + resources + markdown about
│   │           ├── tools/
│   │           │   └── [tool]/
│   │           │       └── page.tsx      ← Detalle de tool: header + quickTake + markdown + sidebar sticky
│   │           ├── creators/
│   │           │   └── [creator]/
│   │           │       └── page.tsx      ← Detalle de creator: bio + highlights + canal + playlists + sidebar sticky
│   │           └── resources/
│   │               └── [category]/
│   │                   └── page.tsx      ← Lista de resources por categoría con grid + modal embed para videos
│   ├── i18n/
│   │   ├── routing.ts                    ← defineRouting (locales, default, prefix)
│   │   ├── request.ts                    ← getRequestConfig (carga messages/*.json)
│   │   └── navigation.ts                 ← Link, redirect, usePathname, useRouter localizados
│   ├── middleware.ts                     ← createMiddleware(routing) de next-intl
│   ├── components/
│   │   ├── Header.tsx                    ← Sticky navbar + ThemeToggle + LanguageSwitcher (chrome marca)
│   │   ├── Footer.tsx                    ← (chrome marca)
│   │   ├── LanguageSwitcher.tsx          ← Toggle ES|EN, client component
│   │   ├── ThemeToggle.tsx               ← CLIENT. Toggle Sun/Moon vía next-themes; persiste en localStorage
│   │   ├── providers/
│   │   │   └── ThemeProvider.tsx         ← CLIENT. Wrapper sobre next-themes ThemeProvider
│   │   ├── GameCard.tsx                  ← Card para landing (thumbnail hero + logo overlay)
│   │   ├── GameHero.tsx                  ← Banner del game page (image cap 1500px, side gradient, mask fade)
│   │   ├── ToolCard.tsx                  ← Card de tool con badges
│   │   ├── ToolsExplorer.tsx             ← CLIENT. Search (Fuse.js) + chips de categoría/dificultad + toggles essential/free/openSource. Vista agrupada por categoría → flat grid cuando hay filtro activo
│   │   ├── CreatorCard.tsx               ← Card de creator con avatar (existsSync) + flag emoji
│   │   ├── PlatformLink.tsx              ← Link a plataforma con icon mapeado por tipo (YouTube/Twitch/Discord/etc.)
│   │   ├── VideoCard.tsx                 ← Thumbnail YouTube con play overlay; soporta onClick (modal) o href (link)
│   │   ├── VideoPlayerModal.tsx          ← CLIENT. Modal con embed de YouTube (autoplay, ESC/click-outside/X close, body scroll lock)
│   │   ├── PlaylistSection.tsx           ← CLIENT. Heading + grid de VideoCards; mantiene state del modal activo
│   │   ├── ResourceGrid.tsx              ← CLIENT. Search (Fuse.js) + filtros type/language + grid de resources (videos con modal, otros tipos con link externo)
│   │   └── MarkdownContent.tsx           ← Renderiza markdown body parseado con marked
│   ├── lib/
│   │   ├── content.ts                    ← getGames, getGame, getTool(s), getCreator(s), getResources, getAllResources
│   │   ├── markdown.ts                   ← renderMarkdown (wrapper sobre marked)
│   │   ├── categories.ts                 ← categoryName, categoryDescription, flagEmoji, humanize
│   │   ├── format.ts                     ← relativeTime (Intl.RelativeTimeFormat), formatDate
│   │   ├── youtube.ts                    ← getLatestVideos({channelId|playlistId}, limit) — RSS feed parser
│   │   ├── site.ts                       ← siteUrl(), absoluteUrl() — URL base con override por env var
│   │   └── jsonld.ts                     ← Builders de schema.org JSON-LD por tipo de página
│   └── types/
│       └── index.ts                      ← Game, Tool, Creator, Resource, Theme, badges/types/etc.
├── public/
│   └── images/                           ← Assets visuales con estructura flat por tipo
│       ├── games/
│       │   ├── path-of-exile-logo.png    ← Logo del juego (overlay en banner + favicon)
│       │   ├── path-of-exile-hero.webp   ← Banner del juego
│       │   ├── genshin-impact-logo.png
│       │   └── genshin-impact-hero.webp
│       ├── creators/
│       │   ├── zizaran-avatar.jpg        ← Avatar (descarga manual; ver `docs/RULES.md`)
│       │   ├── kroximatuz-avatar.jpg
│       │   └── big-ducks-avatar.jpg
│       └── tools/
│           ├── path-of-building-logo.png
│           ├── path-of-building-screenshot-tree.png
│           └── path-of-building-screenshot-calcs.png
├── messages/                             ← Strings traducidos de UI
│   ├── es.json
│   └── en.json
├── next.config.ts                        ← withNextIntl + images.formats: [avif, webp]
└── scripts/
    └── fetch-creator-videos.ts           ← Script para RSS de YouTube en build (pendiente)

**Importante**: NO existe `src/app/layout.tsx` raíz. Con `next-intl` + `localePrefix: "always"`, el layout root vive en `src/app/[locale]/layout.tsx` y todas las rutas pasan por `[locale]`.

## Schema de Datos

### Meta del Juego (`content/games/[game]/meta.json`)

Campos principales: `id`, `name`, `shortName`, `developer`, `releaseYear`, `officialUrl`, `stores[]`, `priceTracker`, `platforms[]`, `genres[]`, `theme`, `monetization`, `logo`, `heroImage`, `toolCategories[]`, `resourceCategories[]`.

Campos traducibles usan sufijo `Es`/`En` (ej: `taglineEs`, `taglineEn`, `nameEs`, `nameEn`, `descriptionEs`, `descriptionEn`, `noteEs`, `noteEn`).

El campo `theme` define colores específicos del juego (primary, secondary, accent, background, text) que se aplican como CSS variables cuando el usuario está en la sección de ese juego.

### Meta de Tool (`content/games/[game]/tools/[tool]/meta.json`)

Campos principales: `id`, `name`, `shortName`, `taglineEs`, `taglineEn`, `url`, `category`, `type`, `official`, `free`, `openSource`, `github`, `license`, `platforms[]`, `languages[]`, `tags[]`, `essential`, `difficulty`, `lastVerified`, `logo`, `screenshots[]`, `videos[]`, `relatedTools[]`, `alternatives[]`, `createdBy`, `multiGame`.

Tipos de tool (`type`): `software`, `web-app`, `overlay`, `browser-extension`, `mobile-app`, `official-service`, `reference`.

Niveles de dificultad: `beginner`, `intermediate`, `advanced`.

**`createdBy`** (opcional): objeto `{ name: string, url?: string, creatorId?: string }` con el creador/equipo de la tool. Si `creatorId` apunta a un creator existente en `content/games/[game]/creators/[creatorId]/`, la UI puede linkear internamente al perfil del creator. Ejemplo: `{ "name": "Maxroll Team", "url": "https://maxroll.gg/about" }` o `{ "name": "KroximatuZ", "creatorId": "kroximatuz" }`.

**`multiGame`** (opcional): indica que la tool cubre múltiples juegos. Estructura:

```json
"multiGame": {
  "available": true,
  "otherGames": [
    { "gameId": "diablo-4", "url": "https://maxroll.gg/d4" },
    { "gameId": "last-epoch", "url": "https://maxroll.gg/last-epoch" }
  ]
}
```

- Cuando `available: true`, `otherGames` lista los demás juegos donde la tool tiene presencia con sus URLs específicas.
- Para tools exclusivas de un juego, se omite el campo o se define como `{ "available": false }`.
- Ubicación en el meta.json: al final, después de `createdBy`.

### Markdown de Tool (`content/games/[game]/tools/[tool]/[locale].md`)

Frontmatter relevante:
- `title`: nombre completo (a referencia, no se renderea — el nombre viene de meta.json)
- `description`: resumen corto (1-2 frases). Se expone en `Tool.summaryEs/En` (futuro uso, OG metadata)
- `quickTake`: opinión editorial fuerte. Se expone en `Tool.quickTakeEs/En` y se renderiza como callout destacado en el detalle de tool

Body: análisis completo en markdown (h2 principales, párrafos largos). Renderizado con `marked` y estilizado vía clases `.markdown-content` en `globals.css`.

### Meta de Creator (`content/games/[game]/creators/[creator]/meta.json`)

Campos principales: `id`, `name`, `realName?`, `country`, `languages[]`, `active`, `joinedYear`, `platforms[]`, `specialties[]`, `games[]`, `contentTypes[]`, `audienceLevel[]`, `noteEs`, `noteEn`, `highlightsEs[]`, `highlightsEn[]`, `avatar`, `banner`.

Cada `platform` tiene: `type`, `url`, `handle?`, `channelId?` (YouTube), `primary?`, `gamePlaylists?`.

Tipos de plataforma: `youtube`, `twitch`, `kick`, `twitter`, `discord`, `patreon`, `tiktok`, `instagram`.

El `channelId` de YouTube es crítico para traer los últimos videos vía RSS automáticamente.

#### `gamePlaylists` (opcional, solo en plataforma YouTube primary)

Mapeo `{ [gameId]: PlaylistRef[] }` para listar playlists del creator filtradas por juego. Cada `PlaylistRef`:

```json
{
  "id": "PL_bRMGT8zY2...",
  "name": "De novato a experto",
  "withDisclaimer": true   // opcional, default false
}
```

- `id`: el `playlist_id` de YouTube (lo sacás del URL: `youtube.com/playlist?list=PLxxx`).
- `name`: cómo se muestra como heading de la sub-sección. No traducible — es el nombre que el creator le puso.
- `withDisclaimer`: si `true`, muestra subtitle "*esta playlist puede incluir contenido de otros juegos relacionados*" (útil para playlists tipo "Builds" que mezclan PoE 1 y PoE 2).

**Comportamiento de la página de creator**:
- Trae siempre **primero** los últimos 6 del canal (signal de actividad reciente; con disclaimer "puede incluir otros juegos").
- Después renderiza una sección por cada playlist en `gamePlaylists[currentGameId]`, con link "Ver playlist completa →" a YouTube.
- Si la creator no tiene `gamePlaylists` para el juego actual, solo se muestra el feed del canal.

### Resources (`content/games/[game]/resources/[category].json`)

Estructura: `{ "category": "id", "resources": [...] }`.

Cada resource tiene:
- **Requeridos**: `id`, `type`, `title`, `creator`, `url`, `language`, `noteEs`, `noteEn`.
- **Opcionales**: `creatorId` (string o `null` explícito si el creator no está en el codex), `thumbnail`, `youtubeId`, `duration`, `publishedDate`, `league`.

Si `creatorId` está seteado y existe en `content/games/[game]/creators/[creatorId]/`, la UI linkea internamente al perfil del creator. Si es `null` o se omite, se muestra el `creator` como texto plano.

Tipos de resource: `video`, `article`, `guide`, `stream`, `podcast`, `infographic`.

Para videos de YouTube, `youtubeId` permite renderizar embed in-page (modal con autoplay) en lugar de mandar al usuario a YouTube. `thumbnail` permite override del thumbnail por defecto (`https://i.ytimg.com/vi/{id}/maxresdefault.jpg`).

## Funcionalidades Clave

1. **Multi-juego con theming dinámico**: cada juego tiene su paleta de colores que se aplica cuando estás en su sección.

2. **Bilingüe (ES/EN)**: contenido completo en ambos idiomas. Default es español. URL incluye locale.

3. **Tres tipos de contenido por juego**: tools (con páginas dedicadas), creators (con páginas dedicadas), resources (videos/guías agrupados por categoría).

4. **Auto-fetch de videos de YouTube**: usar RSS feeds (`https://www.youtube.com/feeds/videos.xml?channel_id=XXX`) en build time para traer últimos videos de cada creator. Con revalidate cada 6-24 horas. Sin API key, sin quotas.

5. **Búsqueda y filtros**: por categoría, por dificultad, por tags. Client-side con Fuse.js sobre JSON estático generado en build.

6. **Modo oscuro**: por defecto, importante para audiencia gaming.

7. **SEO**: SSG completo, sitemap automático, metadata por página, schema.org markup.

## Lo que NO necesita backend (importante)

Por ahora **todo es estático**. No hay base de datos, no hay autenticación, no hay API routes propias. Servicios externos cubren funcionalidades:

- Donaciones (futuro): Ko-fi link, sin backend.
- Analytics: Plausible o Vercel Analytics.
- Búsqueda: client-side sobre JSON estático.
- RSS de YouTube: build-time fetch, sin API key.

## Roadmap

**Fase 1 - MVP (actual)**: PoE bilingüe con tools, creators, y resources básicos. Lanzamiento en r/pathofexile.

**Fase 2**: agregar más tools y creators a PoE basado en feedback. Empezar resources/*.json con videos curados.

**Fase 3**: agregar segundo juego (probablemente PoE 2 o Genshin Impact).

**Fase 4**: monetización con Ko-fi y posibles ads discretos cuando haya tracción.

## Convenciones de Código

Movido a **`docs/RULES.md` → "Código"**.

## Estado Actual del Contenido

Path of Exile tiene contenido inicial listo:

- meta.json del juego ✅
- es.md y en.md del juego ✅
- 8 tools: Path of Building, poe.ninja, awakened-poe-trade, FilterBlade, Craft of Exile, PoeLab, PoEDB (con meta.json + es.md + en.md) y Maxroll (con meta.json — multi-game; cubre PoE + Diablo 4 + Last Epoch + D2R + Lost Ark) ✅
- 2 creators con meta.json: Zizaran (inglés), KroximatuZ (español) ✅
- 5 archivos resources/*.json (`beginner-guides`, `mechanics-per-league`, `build-guides`, `trading-guides`, `boss-guides`) con `{category, resources: []}` listos para llenar.

Los assets visuales (logos, screenshots, avatars) aún no están descargados. Usar placeholders durante desarrollo.

## Estado Actual del Código

Pasos 1-7, 9 y 10 del roadmap de PROJECT.md completos. `next build` pasa con SSG + ISR (revalidate 6h en páginas de creator por el RSS de YouTube).

**Hecho**:
- ✅ Setup base: `next-intl`, path alias `@/*`, tipos, `lib/content.ts`, `lib/markdown.ts`, `lib/categories.ts`, `lib/format.ts`, `lib/youtube.ts`.
- ✅ Chrome (paso 2): `Header` (sticky con backdrop-blur), `Footer`, `LanguageSwitcher` (client component, mantiene la ruta al cambiar locale).
- ✅ Landing (paso 3): hero + grid de `GameCard` con thumbnail de hero image y logo overlay.
- ✅ Game page (paso 4): `GameHero` (banner con image cap 1500px + side gradient + mask fade para evitar pixelación en monitores ultrawide), tools agrupados por categoría, creators, resource categories con counts, markdown "About".
- ✅ Tool detail (paso 5): breadcrumb, header con badges, quickTake callout, markdown analysis, screenshots gallery (filtrada por `existsSync`), sidebar sticky en desktop con CTA + metadata + related/alternatives.
- ✅ Creator detail (paso 6): breadcrumb, header con avatar (`existsSync` fallback a inicial), bio note, highlights, sección de videos (canal primero + playlists del juego), modal con embed de YouTube (ESC/click-outside/X close, body scroll lock), sidebar con `PlatformLink`s + specialties + content types + audience.
- ✅ Resources por categoría (`/[game]/resources/[category]`): breadcrumb, header con icon + nombre + count + descripción, grid de cards con thumbnail/duration/type/lang/relative date, modal embed para videos, link externo para otros tipos. Creator name linkea internamente cuando `creatorId` está en el codex.
- ✅ Sistema de color multi-nivel (paleta marca + game theme override + highlight/semánticos universales). Ver "Sistema de Color".
- ✅ Image optimization: AVIF/WebP fallback automático vía `next/image` + `next.config.ts`. `remotePatterns` para `**.ytimg.com`.
- ✅ OG/Twitter metadata + favicon dinámico (logo del juego en pestaña cuando estás en su sección).
- ✅ Existence checks (`existsSync`) para logos/screenshots/avatares: si el asset no existe, se renderiza fallback (initial letter) o se omite la sección.
- ✅ YouTube RSS integration: `getLatestVideos({channelId|playlistId}, limit)` con `fast-xml-parser`. Sin API key, sin quotas. ISR 6h.
- ✅ Filtros y búsqueda (paso 7): `ToolsExplorer` (game page) con Fuse.js + chips de categoría/dificultad + toggles essential/free/openSource; `ResourceGrid` con search + filtros por type/language. Vista por defecto agrupada por categoría; cuando hay search/filtro activo cambia a grid plano con count.
- ✅ Modo oscuro toggle (paso 9): `next-themes` con `attribute="class"` + `defaultTheme="dark"` + `enableSystem`. `ThemeToggle` en Header (Sun/Moon). Dos variantes en `globals.css`: `:root.dark` y `:root.light`. Game pages mantienen su tema inmersivo (override en `<div>` interior gana al `<html>`).
- ✅ SEO completo (paso 10): `metadataBase` + `alternates.canonical/languages` (hreflang) en root layout y cada página. `sitemap.xml` y `robots.txt` dinámicos. JSON-LD por tipo (`WebSite` / `VideoGame` / `SoftwareApplication` / `Person` / `CollectionPage`) inyectado en cada page como `<script type="application/ld+json">`. URL base configurable via `NEXT_PUBLIC_SITE_URL`.

**Pendiente**:
- ⏳ Deploy a Vercel (paso 11).
- ⏳ Migración `middleware.ts` → `proxy.ts` cuando next-intl actualice docs (Next 16 lo deprecó).
- ⏳ Segundo juego (Genshin Impact en proceso — ya tiene `meta.json` esqueleto).

## Principios de Diseño y UX

### Estética General

- **Modo oscuro por default**, claro como opción secundaria. La audiencia gaming juega frecuentemente de noche y prefiere interfaces oscuras.

- **Inspiración visual**: sitios como Modrinth (modrinth.com), op.gg, mobalytics.gg. Profesionales pero con personalidad, no genéricos.

- **Densidad de información alta pero organizada**. Gamers técnicos aprecian ver mucha info de un vistazo, pero bien jerarquizada.

- **Animaciones sutiles**, no exageradas. Hover transitions de 150-200ms, transiciones de página rápidas. Nada de animaciones largas que ralenticen el uso.

### Decisiones de Tipografía

- Una sola familia (Inter, Geist, o Manrope) para todo el sitio.

- Solo 3-4 tamaños principales: small (14px), base (16px), titulares (24/32/48 según jerarquía).

- Line-height generoso (1.6 para body) para legibilidad en bloques de análisis largos.

### Componentes Visuales Importantes

- **Cards de tools**: nombre, categoría (con icon emoji), descripción corta, badges (free/openSource/essential/official), pill de difficulty al final. Hover effect que destaca con el color accent del juego activo (heredado vía `var(--accent)` que el game wrapper override).

- **Badges (sistema final)**:
  - **Free**: `text-emerald-400` (semántico positivo "gratis", podría migrar a `--success` cuando refactoreemos).
  - **Open source**: `text-violet-400` (semántico OSS).
  - **Official**: `text-sky-400` (semántico verificado).
  - **Essential**: `text-highlight` (#ffd60a, **siempre marca** — no cambia entre juegos, es endorsement editorial de TheGamerCodex).
  - **Difficulty**: pill neutro con `border-border bg-muted/40`.

- **Botones de CTA principales** (ej: "Ir a la herramienta"): grandes, con color accent del contexto (chrome cyan en landing, game accent dentro de juego), claros visualmente como acción primaria.

- **Sidebars sticky**: en páginas de tool, el sidebar con metadata y CTA usa `lg:sticky lg:top-20 lg:self-start` para que el botón "Ir a la herramienta" siempre esté visible mientras se lee el análisis. En mobile el sidebar pasa a ser un bloque al final, con un CTA secundario al inicio del contenido.

- **Reproducción de videos**: click en cualquier `VideoCard` abre un modal (`VideoPlayerModal`) con embed `youtube.com/embed/{id}?autoplay=1`. El modal tiene close (X), ESC, click-outside, body scroll lock, y link "Ver en YouTube" abajo del player. Mantiene al usuario en el sitio pero no oculta la opción de irse a YouTube. El `PlaylistSection` es client component y holds el state del modal activo (uno por sección, no global).

### Imágenes y assets

- **Hero image del juego**: idealmente ≥1500px de ancho (cap del banner). El optimizer de Next escala adaptativamente; sources más grandes evitan blur en monitores ultrawide. Formato preferido: `.webp` (o `.avif`).
- **Logo del juego**: PNG con fondo transparente. Se usa como overlay flotante en el banner Y como favicon de la pestaña cuando estás en una página del juego.
- **Logos de tools / avatares de creators**: si el archivo no existe, los componentes hacen fallback a la inicial del nombre con color accent. No es necesario tener todos los assets durante desarrollo.
- **Avatar de creator (descarga manual)**: bajar de YouTube/Twitch (right-click → guardar imagen) y guardar en `public/games/[game]/creators/[creator-id]/avatar.jpg`. **OJO con la pluralización**: la carpeta es `creators/` (plural) — no `creator/`. El path en `meta.json` debe matchear: `"avatar": "/games/[game]/creators/[creator-id]/avatar.jpg"`. Cuando el roster crezca a 20+ podemos migrar a YouTube Data API.
- **Thumbnails de videos YouTube**: vienen del CDN `**.ytimg.com` (varios subdomains: `i.`, `i1.`, `i2.`, etc. para load balancing). El `remotePatterns` del config los acepta todos.

### Responsive

- Mobile-first pero priorizar la experiencia desktop, ya que la mayoría de usuarios consume desde PC mientras juega o planifica builds.

- En mobile, los sidebars colapsan y aparecen como sheets/drawers.

- Los grids de cards se ajustan: 4 columnas desktop, 2 tablet, 1 mobile.

### Patrones de Gaming

- **Theming por juego**: cuando el usuario está en sección de PoE, todo respira PoE (colores, atmósfera). Pero sin ser disruptivo — el chrome del sitio (header, footer) se mantiene neutro.

- **Iconografía**: emojis simples para categorías en el meta funcionan, pero considerar lucide-react para íconos consistentes en componentes críticos.

- **Sentido de profundidad**: gradientes sutiles, subtle shadows, glows en elementos destacados. Evitar diseño completamente plano.

## Sistema de Color

Dos sistemas de color conviven y deben mantenerse en armonía cuando se agreguen más juegos:

### 1. Paleta de marca (TheGamerCodex)

Vive en `:root` (= `:root.dark`) de `src/app/globals.css`. Aplica en Header, Footer, landing y cualquier componente fuera de una sección de juego.

La marca tiene **dos variantes**: oscura (default) y clara. Vive en `:root.dark` y `:root.light`. `next-themes` toggle (Header) intercambia la clase en `<html>` y persiste preferencia. **Solo el chrome marca responde al toggle** — las páginas de juego mantienen su paleta inmersiva (siempre dark) porque el wrapper del juego override los tokens en un `<div>` interior, vence al `<html>` por especificidad.

| Familia | Tokens | Uso |
|---|---|---|
| Background | `--background` (#0a0e27), `--background-secondary` (#1e2749), `--background-tertiary` (#2d3a6e) | Page bg / cards / hover states |
| Foreground | `--foreground` (#f4f4f4), `--foreground-muted` (#a3acc7), `--foreground-subtle` (#6b7394) | Texto principal / secundario / captions |
| Border | `--border` (#2c3760), `--border-subtle` (#161b3a), `--border-strong` (#4a5e9e) | Default / divider apenas visible / outline emphasized |
| Accent (cyan) | `--accent` (#00d9ff), `--accent-hover` (#33e1ff), `--accent-subtle` (#0099b8), `--accent-foreground` (#0a0e27) | CTAs, "Codex" wordmark, hover states |
| Highlight (amarillo) | `--highlight` (#ffd60a), `--highlight-hover`, `--highlight-subtle`, `--highlight-foreground` | Marca premium/featured (ej: estrella essential), siempre marca aunque estés en un juego |
| Semánticos | `--success` (#00ff9f), `--warning` (#ff9500), `--danger` (#ff3b6b), `--info` (#00d9ff) | Estados informativos universales (ej: badge "Free", warnings, errors) |

Aliases retro-compatibles: `--muted` → `--background-secondary`, `--muted-foreground` → `--foreground-muted`.

### 2. Tema por juego (game theming)

Definido en cada `meta.json`:

```json
"theme": {
  "primary": "#a08c5a",      // tono cálido principal
  "secondary": "#1a1a1a",    // bg de cards/elevadas
  "accent": "#c9a961",       // CTAs y highlights del juego
  "background": "#0d0d0d",   // bg base del juego
  "text": "#e8e0d0"          // texto principal
}
```

`src/app/[locale]/[game]/layout.tsx` toma estos 5 colores y los inyecta como CSS vars que **overridean los tokens de marca dentro del wrapper del juego**:

| Token marca | Override en game wrapper |
|---|---|
| `--background` | `theme.background` |
| `--background-secondary` | `theme.secondary` (cards) |
| `--background-tertiary` | `theme.primary` (deeper elevation) |
| `--foreground` | `theme.text` |
| `--foreground-muted` | `${theme.text}b3` (70% alpha) |
| `--foreground-subtle` | `${theme.text}66` (40% alpha) |
| `--border` | `${theme.text}1f` (12% alpha) |
| `--border-subtle` | `${theme.text}0d` (5%) |
| `--border-strong` | `${theme.text}33` (20%) |
| `--accent` | `theme.accent` |
| `--accent-hover` | `theme.accent` (mismo, sin color math en CSS) |
| `--accent-subtle` | `${theme.accent}80` (50% alpha) |
| `--accent-foreground` | `theme.background` |

También expone tokens **`--game-*`** (game-primary, game-secondary, etc.) para componentes que necesitan referenciar explícitamente el tema del juego desde dentro o fuera del wrapper (ej: `GameCard` en el landing usa `theme.accent` inline para hovers).

### Lo que NO se overridea por juego

- **`--highlight`** (amarillo): es siempre marca. La estrella ⭐ "essential" sigue siendo marca, no juego.
- **`--success`, `--warning`, `--danger`, `--info`**: semánticos universales. "Free" es el mismo verde para PoE que para Genshin.

Esto preserva consistencia informativa: un usuario aprende a leer los estados (verde = gratis, amarillo = destacado) y esa lectura no cambia entre juegos.

### Cómo agregar un juego nuevo

1. Crear `content/games/[id]/meta.json` con el bloque `theme` (5 colores).
2. Listo — el game wrapper deriva automáticamente las variantes (hover, subtle, etc.) y las cards/buttons del nuevo juego respiran su paleta sin tocar código.

### Para contraste y accesibilidad

- Si el `theme.text` del juego es claro y el `theme.background` oscuro: las derivaciones por alpha funcionan bien.
- Si un juego tiene tema claro (ej: pastel anime): las alphas pueden necesitar ajuste o usar valores absolutos. Verificar contraste WCAG AA (≥4.5:1 para texto).

### Lo que NO queremos

Movido a **`docs/RULES.md` → "Diseño — lo que NO queremos"**.

### Referencias para Consulta

Cuando haya duda sobre cómo manejar un componente o layout, consultar:

- Modrinth (modrinth.com) — directorio de mods, similar concepto al nuestro.

- mobalytics.gg — herramientas de gaming bien diseñadas.

- shadcn/ui (ui.shadcn.com) — patrones de componentes modernos sin ser genéricos.

## Schema Evolution Notes

Movido a **`docs/SCHEMA_EVOLUTION.md`**. Ese archivo contiene el historial de cambios al schema y las reglas para mantenerlo. Cuando hagas un cambio al schema (agregar/quitar/renombrar campos en algún `meta.json`), agregá entrada ahí siguiendo el formato.
