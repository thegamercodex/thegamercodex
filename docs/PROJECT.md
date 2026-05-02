# TheGamerCodex - Documentación Técnica

## Visión del Producto

TheGamerCodex es un compendio curado para gamers que cubre tres tipos de contenido por juego:

1. **Tools**: herramientas que los jugadores usan activamente (build planners, calculadoras, overlays, sitios de tracking, wikis técnicas).

2. **Creators**: YouTubers, streamers y creadores de contenido recomendados, con sus últimos videos integrados automáticamente.

3. **Resources**: videos, guías y artículos curados por categoría temática.

La diferenciación clave vs competidores es la **curaduría con análisis honesto**. Cada tool incluye qué problema resuelve, para quién es, y limitaciones reales. No es solo un agregador de links.

## Audiencia

- Gamers que buscan organizar sus herramientas de juegos complejos.
- Audiencia bilingüe: comunidad anglosajona (mayoría) + comunidad hispanohablante (LATAM + España, segmento desatendido).
- Inicialmente jugadores de Path of Exile, después expandir a otros juegos con comunidades técnicas grandes.

## Casos de Uso Principales

1. Usuario nuevo a un juego busca herramientas esenciales para empezar.
2. Usuario experimentado descubre tools que no conocía.
3. Usuario busca recursos de aprendizaje (videos, guías) sobre un tema específico.
4. Usuario busca creators recomendados para seguir.

## Arquitectura del Frontend

### Routing (App Router)

Estructura actual (todo bajo `src/`):

src/app/
├── [locale]/
│   ├── layout.tsx              ← Root layout (html/body, Header, Footer, NextIntlClientProvider)
│   ├── page.tsx                ← Landing (hero + grid de juegos) ✅
│   └── [game]/
│       ├── layout.tsx          ← Override de tokens marca → tokens del game theme (5 colores → 13 CSS vars derivadas) ✅
│       ├── page.tsx            ← Página del juego: hero + tools agrupados por categoría + creators + resources + markdown about ✅
│       ├── tools/
│       │   └── [tool]/
│       │       └── page.tsx    ← Detalle de tool: header + quickTake + markdown + sidebar sticky con CTA y metadata ✅
│       └── creators/
│           └── [creator]/
│               └── page.tsx    ← Detalle de creator: bio + highlights + canal + playlists con modal embed + sidebar ✅

**Pendiente**:
- `[game]/resources/[category]/page.tsx`: lista de recursos curados por categoría.
- Sin páginas separadas de "lista de tools" o "lista de creators" — actualmente la página del juego ya las muestra todas.
- Sin `/about` por ahora.

Decisión: con `next-intl` + `localePrefix: "always"`, no existe `src/app/layout.tsx` raíz. El root layout vive en `[locale]/layout.tsx`.

### Componentes Clave

**Existentes** (`src/components/`):
- `<Header>`: sticky navbar con backdrop-blur + wordmark "TheGamer**Codex**" + `<LanguageSwitcher>`. Server.
- `<Footer>`: copyright + tagline + GitHub link. Server.
- `<LanguageSwitcher>`: toggle ES|EN. **Client** — usa `useRouter`/`usePathname` de `@/i18n/navigation` para cambiar locale manteniendo la ruta.
- `<GameCard>`: card del landing — thumbnail con hero image + logo overlay + nombre + tagline + genres.
- `<GameHero>`: banner del game page — image cap a 1500px con side gradient + mask fade + content overlay (logo card + eyebrow + h1 + tagline).
- `<ToolCard>`: card de tool en game page — initial letter fallback, badges de free/openSource/essential/official, difficulty pill.
- `<CreatorCard>`: card de creator — avatar (next/image con `existsSync` fallback a inicial) + flag emoji + languages + primary platform + note truncada.
- `<PlatformLink>`: link a plataforma con icon mapeado por tipo (PlayCircle/Tv/MessagesSquare/Heart/Music/Camera/AtSign/ExternalLink) + handle.
- `<VideoCard>`: thumbnail YouTube con play overlay y fecha relativa. Acepta `onClick` (button → modal) o `href` (link → YouTube).
- `<VideoPlayerModal>`: **Client**. Modal con iframe `youtube.com/embed/{id}?autoplay=1`, ESC/click-outside/X close, body scroll lock, link "Ver en YouTube".
- `<PlaylistSection>`: **Client**. Heading + grid de VideoCards + maneja state del modal activo. Soporta subtitle (para disclaimers) y "Ver playlist completa →".
- `<MarkdownContent>`: renderiza body de markdown parseado con `marked` vía `dangerouslySetInnerHTML`. Estilos prose en `globals.css` (clase `.markdown-content`).

**Pendientes**:
- `<CategoryFilter>`: filtros por categoría/tag/dificultad.
- `<SearchBar>`: búsqueda con Fuse.js sobre JSON estático.

**Decisión arquitectónica**: NO hay `<GameThemeProvider>` separado. El theming dinámico se aplica directamente en `[game]/layout.tsx` inyectando CSS variables al wrapper, sin componente intermedio. Más simple y server-rendered.

### Lib

**Existentes** (`src/lib/`):
- `content.ts`: lee filesystem y devuelve datos tipados. `getGames()`, `getGame(id)`, `getGameIds()`, `getTools(gameId)`, `getTool(gameId, toolId)`, `getToolIds(gameId)`, `getCreators(gameId)`, `getCreator(gameId, creatorId)`, `getCreatorIds(gameId)`, `getResources(gameId, category)`, `getAllResources(gameId)`. Combina `meta.json` + frontmatter del markdown + body del markdown en el tipo correspondiente.
- `markdown.ts`: `renderMarkdown(source)` — wrapper sobre `marked` con configuración GFM.
- `categories.ts`: helpers — `categoryName(cat, locale)`, `categoryDescription(cat, locale)`, `categoriesById(arr)`, `flagEmoji(countryCode)` (UK→GB), `humanize(slug)`.
- `format.ts`: `relativeTime(iso, locale)` (Intl.RelativeTimeFormat — "hace 3 días" / "3 days ago"), `formatDate(iso, locale)`.
- `youtube.ts`: `getLatestVideos(source, limit)` donde `source` es `{channelId}` o `{playlistId}`. Fetchea el RSS público de YouTube (`/feeds/videos.xml`), parsea con `fast-xml-parser`, devuelve `YouTubeVideo[]`. Sin API key. `revalidate: 21600` (6h ISR). Tolera errores devolviendo `[]`.

**Configuración i18n**: NO está en `lib/`. Vive en `src/i18n/` (next-intl convention):
- `routing.ts`: `defineRouting` (locales, default, prefix).
- `request.ts`: `getRequestConfig` que carga `messages/[locale].json`.
- `navigation.ts`: `Link`, `redirect`, `usePathname`, `useRouter` localizados.

**Tipos**: `src/types/index.ts` (no `lib/types.ts`).

## Build Process

1. `next build` corre Turbopack y genera todas las páginas estáticas leyendo de `content/`.

2. **Image optimization**: `next.config.ts` tiene `images.formats: ["image/avif", "image/webp"]`. El optimizer sirve AVIF a browsers que lo soportan, fallback a WebP, fallback al formato source. Sources WebP/AVIF en repo son ideales para evitar reencoding. `remotePatterns` permite `**.ytimg.com/vi/**` para thumbnails de YouTube.

3. **YouTube RSS via ISR**: las páginas de creator usan `fetch(url, { next: { revalidate: 21600 } })` directamente desde `lib/youtube.ts`. Next.js cachea el resultado por build y revalida cada 6h sin redeploy. NO hace falta script `prebuild` ni cache file separado — el cache nativo de Next maneja todo.

4. **Pendiente**: Vercel deploy automático en cada push a `main` (cuando se conecte el repo en paso 11).

## Theming Dinámico

Sistema completo descrito en **CLAUDE.md → "Sistema de Color"**. Resumen:

Cada juego define 5 colores en `meta.json.theme` (primary/secondary/accent/background/text). El layout `[game]/layout.tsx` los inyecta como CSS variables que **overridean los tokens de marca** dentro del wrapper del juego (background, foreground, muted, border, accent + sus variantes hover/subtle/strong + alphas derivadas). Componentes existentes usan los tokens estándar de Tailwind v4 (`bg-background`, `text-muted-foreground`, etc.) — no necesitan saber si están dentro o fuera del wrapper.

Tokens que NO se overridean (siguen marca incluso dentro de juegos):
- `--highlight` (amarillo): editorial endorsement de TheGamerCodex.
- `--success`/`--warning`/`--danger`/`--info`: semánticos universales.

**Para agregar un juego**: solo crear su `meta.json` con `theme`. El wrapper deriva las variantes automáticamente. Sin código nuevo.

## Tareas Iniciales (Orden Sugerido)

1. ✅ **Setup base**: configurar next-intl, tipos TypeScript, lib/content.ts.

2. ✅ **Layout y navegación**: header con language switcher, footer básico.

3. ✅ **Landing page**: grid de juegos disponibles (por ahora solo PoE).

4. ✅ **Página de juego**: hero con descripción, secciones de tools/creators/resources.

5. ✅ **Página de tool**: análisis completo + sidebar con metadata + CTA de "Ir a la herramienta".

6. ✅ **Página de creator**: bio + highlights + sección de últimos videos del canal + secciones por playlist (con disclaimers configurables) + modal con embed + sidebar con `PlatformLink`s.

7. ⏳ **Filtros y búsqueda**: client-side sobre JSON.

8. ✅ **Theming dinámico**: aplicar colores por juego (hecho como parte del paso 4 — sistema multi-token con override en game wrapper).

9. ⏳ **Modo oscuro**: hoy es dark-default vía `prefers-color-scheme`. Implementar toggle manual con persistencia.

10. ⏳ **SEO**: ya hay OG/Twitter metadata + favicon dinámico por juego/tool. Falta sitemap automático y schema.org JSON-LD.

11. ⏳ **Deploy a Vercel**: conectar repo, configurar env vars, primer deploy productivo.

## Notas Importantes

- **No usar localStorage o sessionStorage en componentes**: el sitio es SSG, hay que ser cuidadoso con APIs de browser.

- **Todos los textos de UI** (labels, botones, mensajes) van en `messages/es.json` y `messages/en.json`, no hardcodeados. Para plurales usar ICU (`{count, plural, one {# tool} other {# tools}}`).

- **Los nombres propios** (de juegos, tools, creators) NO se traducen. "Path of Exile" se queda en ambos idiomas.

- **Las imágenes en `/public/games/`** pueden no existir todavía durante desarrollo. Las páginas usan `existsSync` para filtrar logos/screenshots faltantes y caer en fallbacks (initial letter, sección omitida). Sin imágenes rotas en pantalla.

- **Hero images del juego**: idealmente ≥1500px de ancho. El banner está capado a 1500px en pantalla con side gradient para evitar pixelación en monitores ultrawide. WebP/AVIF preferido — son notablemente más livianos que JPG.

- **Markdown body**: parseado con `marked` (no MDX). Frontmatter con `gray-matter`. Tools exponen un campo `quickTake` en frontmatter que se renderiza como callout destacado en el detalle.

- **El campo `lastVerified`** en cada tool indica cuándo fue revisada por última vez. UI lo muestra en la sidebar del detalle (formateado por locale via `Intl.DateTimeFormat`).

- **`Github` icon de lucide-react** ya no existe (fue removido por temas de marca). Para referencias a repos GitHub usar `Code2` o un texto plano con `ExternalLink`. Tampoco hay íconos para Youtube/Twitch/Discord/etc — usar genéricos: `PlayCircle` para YouTube, `Tv` para Twitch/Kick, `MessagesSquare` para Discord, `Heart` para Patreon, `Music` para TikTok, `Camera` para Instagram, `AtSign` para Twitter/X.

- **Avatares de creator (descarga manual)**: `public/games/[game]/creators/[creator-id]/avatar.jpg`. La carpeta es `creators/` (plural, igual que en `content/`). Cuando el roster crezca migraremos a YouTube Data API v3 con env var `YOUTUBE_API_KEY`.

- **Playlists de YouTube por creator** (`gamePlaylists` en meta.json): mapping `{[gameId]: PlaylistRef[]}` donde `PlaylistRef = {id, name, withDisclaimer?}`. La página de creator siempre muestra el feed del canal primero (signal de actividad reciente), después una sección por cada playlist del juego actual. Ver schema completo en CLAUDE.md → "Meta de Creator".

- **Modales y body scroll lock**: cuando un modal está abierto (ej. `VideoPlayerModal`), se bloquea `document.body.style.overflow = "hidden"` mientras está montado y se restaura al cerrar. Cierra con ESC, click fuera, o botón X.