# TheGamerCodex - Contexto del Proyecto

## Importante para Claude Code

Antes de empezar tareas, consulta las secciones relevantes de este documento:

- **Tareas de diseño/frontend**: ver "Principios de Diseño y UX".
- **Tareas de schema/contenido**: ver "Schema de Datos".
- **Tareas de routing/arquitectura**: ver "Estructura de URLs Planeada" y "Estructura de Carpetas".
- **Decisiones técnicas generales**: ver "Stack Técnico" y "Convenciones de Código".
- **Estado actual del proyecto**: ver "Estado Actual del Contenido" y "Roadmap".

## Qué es

TheGamerCodex es un directorio web curado de herramientas y recursos para gamers, construido como un compendio (codex) de información organizada por juego. Empieza con Path of Exile como MVP y está diseñado para escalar a múltiples juegos.

## Stack Técnico

- **Framework**: Next.js 16 (App Router, SSG, Turbopack)
- **Lenguaje**: TypeScript estricto
- **Estilos**: Tailwind CSS v4 (configurado vía `@tailwindcss/postcss`, sin `tailwind.config.*` — los tokens viven en `src/app/globals.css` con `@theme inline`)
- **Contenido**: Markdown + JSON. Parser: `gray-matter` para frontmatter
- **i18n**: `next-intl` con locales `es` (default) y `en`, `localePrefix: "always"`
- **Íconos**: `lucide-react`
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
│           ├── meta.json                 ← Info del juego
│           ├── es.md                     ← Descripción en español
│           ├── en.md                     ← Descripción en inglés
│           ├── tools/
│           │   └── [tool-id]/
│           │       ├── meta.json
│           │       ├── es.md
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
│   │   ├── globals.css                   ← Tailwind v4 + tokens
│   │   ├── favicon.ico
│   │   └── [locale]/
│   │       ├── layout.tsx                ← Root layout (html/body) + NextIntlClientProvider
│   │       └── page.tsx                  ← Landing
│   ├── i18n/
│   │   ├── routing.ts                    ← defineRouting (locales, default, prefix)
│   │   ├── request.ts                    ← getRequestConfig (carga messages/*.json)
│   │   └── navigation.ts                 ← Link, redirect, usePathname, useRouter localizados
│   ├── middleware.ts                     ← createMiddleware(routing) de next-intl
│   ├── components/                       ← (vacío por ahora)
│   ├── lib/
│   │   └── content.ts                    ← getGames, getGame, getTools, getTool, getCreators, getCreator, getResources, getAllResources, localizedField
│   └── types/
│       └── index.ts                      ← Game, Tool, Creator, Resource, Theme, etc.
├── public/
│   └── games/
│       └── path-of-exile/
│           ├── logo.svg
│           ├── hero.jpg
│           └── tools/
│               └── [tool-id]/
│                   ├── logo.png
│                   └── screenshots/
├── messages/                             ← Strings traducidos de UI
│   ├── es.json
│   └── en.json
└── scripts/
    └── fetch-creator-videos.ts           ← Script para RSS de YouTube en build (pendiente)

**Importante**: NO existe `src/app/layout.tsx` raíz. Con `next-intl` + `localePrefix: "always"`, el layout root vive en `src/app/[locale]/layout.tsx` y todas las rutas pasan por `[locale]`.

## Schema de Datos

### Meta del Juego (`content/games/[game]/meta.json`)

Campos principales: `id`, `name`, `shortName`, `developer`, `releaseYear`, `officialUrl`, `stores[]`, `priceTracker`, `platforms[]`, `genres[]`, `theme`, `monetization`, `logo`, `heroImage`, `toolCategories[]`, `resourceCategories[]`.

Campos traducibles usan sufijo `Es`/`En` (ej: `taglineEs`, `taglineEn`, `nameEs`, `nameEn`, `descriptionEs`, `descriptionEn`, `noteEs`, `noteEn`).

El campo `theme` define colores específicos del juego (primary, secondary, accent, background, text) que se aplican como CSS variables cuando el usuario está en la sección de ese juego.

### Meta de Tool (`content/games/[game]/tools/[tool]/meta.json`)

Campos principales: `id`, `name`, `shortName`, `taglineEs`, `taglineEn`, `url`, `category`, `type`, `official`, `free`, `openSource`, `github`, `license`, `platforms[]`, `languages[]`, `tags[]`, `essential`, `difficulty`, `lastVerified`, `logo`, `screenshots[]`, `videos[]`, `relatedTools[]`, `alternatives[]`, `createdBy`.

Tipos de tool (`type`): `software`, `web-app`, `overlay`, `browser-extension`, `mobile-app`, `official-service`, `reference`.

Niveles de dificultad: `beginner`, `intermediate`, `advanced`.

### Meta de Creator (`content/games/[game]/creators/[creator]/meta.json`)

Campos principales: `id`, `name`, `country`, `languages[]`, `active`, `joinedYear`, `platforms[]`, `specialties[]`, `games[]`, `contentTypes[]`, `audienceLevel[]`, `noteEs`, `noteEn`, `highlightsEs[]`, `highlightsEn[]`, `avatar`, `banner`.

Tipos de plataforma: `youtube`, `twitch`, `kick`, `twitter`, `discord`, `patreon`, `tiktok`, `instagram`.

El `channelId` de YouTube es crítico para la integración con RSS feeds que trae los últimos videos automáticamente.

### Resources (`content/games/[game]/resources/[category].json`)

Estructura: `{ "category": "id", "resources": [...] }`.

Cada resource tiene: `id`, `type`, `title`, `creator`, `url`, `language`, `noteEs`, `noteEn`, más campos opcionales según tipo (`youtubeId`, `duration`, `publishedDate`, `league`, etc.).

Tipos de resource: `video`, `article`, `guide`, `stream`, `podcast`, `infographic`.

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

- TypeScript estricto.
- Componentes funcionales con hooks.
- Server Components por defecto, Client Components solo cuando sea necesario.
- Naming: PascalCase para componentes, camelCase para funciones, kebab-case para archivos de contenido y rutas.
- Imports absolutos con `@/*` → resuelve a `./src/*`. Ej: `@/lib/content`, `@/types`, `@/i18n/routing`, `@/i18n/navigation`.
- Para navegación localizada usar `Link`/`redirect` de `@/i18n/navigation`, no de `next/link`.
- `params` en App Router de Next 16 son `Promise<...>` — siempre `await params` antes de usar.
- En páginas con i18n, llamar `setRequestLocale(locale)` al inicio para habilitar SSG con `next-intl`.

## Estado Actual del Contenido

Path of Exile tiene contenido inicial listo:

- meta.json del juego ✅
- es.md y en.md del juego ✅
- 7 tools con meta.json + es.md + en.md: Path of Building, poe.ninja, awakened-poe-trade, FilterBlade, Craft of Exile, PoeLab, PoEDB ✅
- 2 creators con meta.json: Zizaran (inglés), KroximatuZ (español) ✅
- 5 archivos resources/*.json (`beginner-guides`, `mechanics-per-league`, `build-guides`, `trading-guides`, `boss-guides`) con `{category, resources: []}` listos para llenar.

Los assets visuales (logos, screenshots, avatars) aún no están descargados. Usar placeholders durante desarrollo.

## Estado Actual del Código

Setup base completo y `next build` pasando:

- ✅ `next-intl` configurado (routing, request, navigation, middleware) con SSG bilingüe.
- ✅ Path alias `@/*` → `./src/*` en `tsconfig.json`.
- ✅ Tipos TypeScript en `src/types/index.ts` (Game, Tool, Creator, Resource, etc.).
- ✅ Lib de contenido en `src/lib/content.ts` (lee `content/` con `fs` + `gray-matter`).
- ✅ Layout root y landing placeholder en `src/app/[locale]/`.
- ✅ Strings de UI base en `messages/es.json` y `messages/en.json`.
- ⏳ Páginas pendientes: `[game]`, `[game]/tools/[tool]`, `[game]/creators/[creator]`, `[game]/resources/[category]`.
- ⏳ Componentes pendientes: `GameThemeProvider`, `ToolCard`, `CreatorCard`, `VideoCard`, `LanguageSwitcher`, `CategoryFilter`, `SearchBar`, `MarkdownContent`.
- ⏳ Lib pendiente: `lib/youtube.ts` (RSS fetch).
- ⏳ Script pendiente: `scripts/fetch-creator-videos.ts`.

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

- **Cards de tools**: deben mostrar nombre, categoría como tag de color, descripción corta, badges (essential/free/oficial/etc), thumbnail. Hover effect que destaca con el color del juego activo.

- **Badges**: usar colores semánticos consistentes. Verde para "free", azul para "oficial", dorado para "essential", etc.

- **Botones de CTA principales** (ej: "Ir a la herramienta"): grandes, con color accent del juego, claros visualmente como acción primaria.

- **Sidebars sticky**: en páginas de tool, el sidebar con metadata y CTA debe ser sticky en desktop para que el botón de "Ir a la herramienta" siempre esté visible mientras se lee el análisis.

### Responsive

- Mobile-first pero priorizar la experiencia desktop, ya que la mayoría de usuarios consume desde PC mientras juega o planifica builds.

- En mobile, los sidebars colapsan y aparecen como sheets/drawers.

- Los grids de cards se ajustan: 4 columnas desktop, 2 tablet, 1 mobile.

### Patrones de Gaming

- **Theming por juego**: cuando el usuario está en sección de PoE, todo respira PoE (colores, atmósfera). Pero sin ser disruptivo — el chrome del sitio (header, footer) se mantiene neutro.

- **Iconografía**: emojis simples para categorías en el meta funcionan, pero considerar lucide-react para íconos consistentes en componentes críticos.

- **Sentido de profundidad**: gradientes sutiles, subtle shadows, glows en elementos destacados. Evitar diseño completamente plano.

### Lo que NO queremos

- ❌ Diseño tipo "AI corporate generic" (gradientes morados/azules genéricos, glassmorphism por todos lados, ilustraciones de Notion).

- ❌ Demasiados emojis o elementos infantiles. Audiencia adulta y técnica.

- ❌ Cards inconsistentes (cada componente con su estilo distinto).

- ❌ Animaciones intrusivas (auto-play videos, parallax exagerado, popups).

- ❌ Tipografías mixtas decorativas (Comic Sans, fuentes scripts, etc.).

### Referencias para Consulta

Cuando haya duda sobre cómo manejar un componente o layout, consultar:

- Modrinth (modrinth.com) — directorio de mods, similar concepto al nuestro.

- mobalytics.gg — herramientas de gaming bien diseñadas.

- shadcn/ui (ui.shadcn.com) — patrones de componentes modernos sin ser genéricos.
