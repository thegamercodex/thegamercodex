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
- **Contenido**: Markdown + JSON. Parser: `gray-matter` para frontmatter, `marked` para render del body a HTML
- **i18n**: `next-intl` con locales `es` (default) y `en`, `localePrefix: "always"`
- **Íconos**: `lucide-react` (nota: `Github` icon ya no se exporta — usar `Code2` u otra alternativa para refs a repos)
- **Imágenes**: `next/image` con `images.formats: ["image/avif", "image/webp"]` en `next.config.ts` (el optimizer sirve AVIF a browsers que lo soportan, fallback a WebP, fallback a JPG)
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
│   │   └── [locale]/
│   │       ├── layout.tsx                ← Root layout (html/body, Header, Footer, NextIntlClientProvider)
│   │       ├── page.tsx                  ← Landing (hero + grid de juegos)
│   │       └── [game]/
│   │           ├── layout.tsx            ← Override de tokens marca → tokens del game theme
│   │           ├── page.tsx              ← Hero del juego + tools agrupados + creators + resources + markdown about
│   │           └── tools/
│   │               └── [tool]/
│   │                   └── page.tsx      ← Detalle de tool: header + quickTake + markdown + sidebar sticky
│   ├── i18n/
│   │   ├── routing.ts                    ← defineRouting (locales, default, prefix)
│   │   ├── request.ts                    ← getRequestConfig (carga messages/*.json)
│   │   └── navigation.ts                 ← Link, redirect, usePathname, useRouter localizados
│   ├── middleware.ts                     ← createMiddleware(routing) de next-intl
│   ├── components/
│   │   ├── Header.tsx                    ← Sticky navbar + LanguageSwitcher (chrome marca)
│   │   ├── Footer.tsx                    ← (chrome marca)
│   │   ├── LanguageSwitcher.tsx          ← Toggle ES|EN, client component
│   │   ├── GameCard.tsx                  ← Card para landing (thumbnail hero + logo overlay)
│   │   ├── GameHero.tsx                  ← Banner del game page (image cap 1500px, side gradient, mask fade)
│   │   ├── ToolCard.tsx                  ← Card de tool con badges
│   │   ├── CreatorCard.tsx               ← Card de creator con flag emoji
│   │   └── MarkdownContent.tsx           ← Renderiza markdown body parseado con marked
│   ├── lib/
│   │   ├── content.ts                    ← getGames, getGame, getTool(s), getCreator(s), getResources, getAllResources
│   │   ├── markdown.ts                   ← renderMarkdown (wrapper sobre marked)
│   │   └── categories.ts                 ← categoryName, categoryDescription, flagEmoji, humanize
│   └── types/
│       └── index.ts                      ← Game, Tool, Creator, Resource, Theme, badges/types/etc.
├── public/
│   └── games/
│       └── path-of-exile/
│           ├── logo.png                  ← Logo del juego (overlay en banner + favicon de la pestaña)
│           ├── hero.webp                 ← Banner del juego (preferir WebP/AVIF)
│           └── tools/
│               └── [tool-id]/
│                   ├── logo.png
│                   └── screenshots/
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

Campos principales: `id`, `name`, `shortName`, `taglineEs`, `taglineEn`, `url`, `category`, `type`, `official`, `free`, `openSource`, `github`, `license`, `platforms[]`, `languages[]`, `tags[]`, `essential`, `difficulty`, `lastVerified`, `logo`, `screenshots[]`, `videos[]`, `relatedTools[]`, `alternatives[]`, `createdBy`.

Tipos de tool (`type`): `software`, `web-app`, `overlay`, `browser-extension`, `mobile-app`, `official-service`, `reference`.

Niveles de dificultad: `beginner`, `intermediate`, `advanced`.

### Markdown de Tool (`content/games/[game]/tools/[tool]/[locale].md`)

Frontmatter relevante:
- `title`: nombre completo (a referencia, no se renderea — el nombre viene de meta.json)
- `description`: resumen corto (1-2 frases). Se expone en `Tool.summaryEs/En` (futuro uso, OG metadata)
- `quickTake`: opinión editorial fuerte. Se expone en `Tool.quickTakeEs/En` y se renderiza como callout destacado en el detalle de tool

Body: análisis completo en markdown (h2 principales, párrafos largos). Renderizado con `marked` y estilizado vía clases `.markdown-content` en `globals.css`.

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

Pasos 1-5 del roadmap de PROJECT.md completos. `next build` pasa, 19 páginas SSG (4 de chrome × 2 locales + game page × 2 + tool detail × 14).

**Hecho**:
- ✅ Setup base: `next-intl`, path alias `@/*`, tipos, `lib/content.ts`, `lib/markdown.ts`, `lib/categories.ts`.
- ✅ Chrome (paso 2): `Header` (sticky con backdrop-blur), `Footer`, `LanguageSwitcher` (client component, mantiene la ruta al cambiar locale).
- ✅ Landing (paso 3): hero + grid de `GameCard` con thumbnail de hero image y logo overlay.
- ✅ Game page (paso 4): `GameHero` (banner con image cap 1500px + side gradient + mask fade para evitar pixelación en monitores ultrawide), tools agrupados por categoría, creators, resource categories con counts, markdown "About".
- ✅ Tool detail (paso 5): breadcrumb, header con badges, quickTake callout, markdown analysis, screenshots gallery (filtrada por `existsSync`), sidebar sticky en desktop con CTA + metadata + related/alternatives.
- ✅ Sistema de color multi-nivel (paleta marca + game theme override + highlight/semánticos universales). Ver "Sistema de Color".
- ✅ Image optimization: AVIF/WebP fallback automático vía `next/image` + `next.config.ts`.
- ✅ OG/Twitter metadata + favicon dinámico (logo del juego en pestaña cuando estás en su sección).
- ✅ Existence checks (`existsSync`) para logos/screenshots: si el asset no existe, se renderiza fallback (initial letter) o se omite la sección.

**Pendiente**:
- ⏳ Página de creator (paso 6): bio + últimos videos vía RSS de YouTube + links a plataformas.
- ⏳ Página de resources por categoría (`[game]/resources/[category]/page.tsx`).
- ⏳ Filtros y búsqueda (paso 7): client-side con Fuse.js sobre JSON estático.
- ⏳ Modo oscuro toggle (paso 9): hoy es dark-default vía `prefers-color-scheme`, sin toggle manual.
- ⏳ SEO completo (paso 10): sitemap, schema.org JSON-LD.
- ⏳ Deploy a Vercel (paso 11).
- ⏳ `lib/youtube.ts` (RSS fetch) + `scripts/fetch-creator-videos.ts` (build-time prefetch).
- ⏳ Migración `middleware.ts` → `proxy.ts` cuando next-intl actualice docs (Next 16 lo deprecó).

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

### Imágenes y assets

- **Hero image del juego**: idealmente ≥1500px de ancho (cap del banner). El optimizer de Next escala adaptativamente; sources más grandes evitan blur en monitores ultrawide. Formato preferido: `.webp` (o `.avif`).
- **Logo del juego**: PNG con fondo transparente. Se usa como overlay flotante en el banner Y como favicon de la pestaña cuando estás en una página del juego.
- **Logos de tools / avatares de creators**: si el archivo no existe, los componentes hacen fallback a la inicial del nombre con color accent. No es necesario tener todos los assets durante desarrollo.

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

Vive en `:root` de `src/app/globals.css`. Aplica en Header, Footer, landing y cualquier componente fuera de una sección de juego. Es **fija** — no cambia entre juegos.

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
