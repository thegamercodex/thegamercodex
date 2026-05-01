# TheGamerCodex - Contexto del Proyecto

## Qué es

TheGamerCodex es un directorio web curado de herramientas y recursos para gamers, construido como un compendio (codex) de información organizada por juego. Empieza con Path of Exile como MVP y está diseñado para escalar a múltiples juegos.

## Stack Técnico

- **Framework**: Next.js 15 (App Router, SSG)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Contenido**: Markdown (MDX) + JSON
- **i18n**: next-intl para soporte de español e inglés
- **Hosting**: Vercel
- **Repo**: GitHub (público), organización `thegamercodex`
- **Node**: 22 LTS

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
│   │   └── [locale]/
│   ├── components/
│   ├── lib/
│   └── types/
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
└── fetch-creator-videos.ts           ← Script para RSS de YouTube en build

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
- Imports absolutos con `@/*`.

## Estado Actual del Contenido

Path of Exile tiene contenido inicial listo:

- meta.json del juego ✅
- es.md y en.md del juego ✅
- 7 tools con meta.json + es.md + en.md: Path of Building, poe.ninja, awakened-poe-trade, FilterBlade, Craft of Exile, PoeLab, PoEDB ✅
- 2 creators con meta.json: Zizaran (inglés), KroximatuZ (español) ✅
- 5 archivos resources/*.json creados pero vacíos (arrays vacíos para llenar progresivamente).

Los assets visuales (logos, screenshots, avatars) aún no están descargados. Usar placeholders durante desarrollo.