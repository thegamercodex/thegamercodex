# Reglas del proyecto

Este archivo es **lectura obligatoria** antes de hacer cambios. Las reglas están agrupadas por categoría. CLAUDE.md describe **qué es** el proyecto, este archivo describe **cómo se trabaja en él**.

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
- Default locale es `es`. URL siempre incluye locale (`localePrefix: "always"`). No existe `src/app/layout.tsx` raíz — el root layout vive en `[locale]/layout.tsx`.

## Storage, APIs y arquitectura

- **NO usar `localStorage` ni `sessionStorage`** en componentes server-rendered. El sitio es SSG, hay que ser cuidadoso con APIs de browser.
- **NO crear API routes propias** sin razón clara. Por ahora todo es estático — servicios externos cubren funcionalidades.
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
| Tool logo | `public/images/tools/<tool-id>-logo.<ext>` | `maxroll-logo.png` |
| Tool screenshot | `public/images/tools/<tool-id>-<descriptor>.<ext>` | `path-of-building-screenshot-tree.png` |

**Reglas**:

- Asume **ids únicos globalmente** (entre juegos, entre creators, entre tools). Si en el futuro hubiera colisión, agregar prefijo de juego al asset.
- Tools multi-game (ej. Maxroll) reusan el mismo `<tool-id>-logo.<ext>` desde cualquier juego donde aparezcan.
- Hero del juego **≥1500px de ancho** (cap visual del banner). Imágenes más chicas se ven pixeladas en monitores ultrawide.
- Formato preferido: `.webp` o `.avif`. JPG si no hay otra opción.
- Logo del juego y de tools: **PNG con fondo transparente**.
- Si un asset no existe, los componentes hacen fallback automático (initial letter, sección omitida) gracias a `existsSync`. **NO añadir imágenes rotas** a producción.
- `next.config.ts` tiene `images.remotePatterns` para `**.ytimg.com` (thumbnails de YouTube). Otros dominios externos requieren agregar pattern.

**En el `meta.json` el path empieza con `/images/...`** (no `/games/...`). Ejemplos:
- Game: `"logo": "/images/games/path-of-exile-logo.png"`, `"heroImage": "/images/games/path-of-exile-hero.webp"`
- Creator: `"avatar": "/images/creators/zizaran-avatar.jpg"`
- Tool: `"logo": "/images/tools/maxroll-logo.png"`, screenshots: `"url": "/images/tools/maxroll-screenshot-build.png"`

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

## Diseño — lo que NO queremos

- ❌ "AI corporate generic" (gradientes morados/azules genéricos, glassmorphism por todos lados, ilustraciones de Notion).
- ❌ Demasiados emojis o elementos infantiles. Audiencia adulta y técnica.
- ❌ Cards inconsistentes (cada componente con su estilo distinto).
- ❌ Animaciones intrusivas (auto-play videos, parallax exagerado, popups).
- ❌ Tipografías mixtas decorativas (Comic Sans, fuentes scripts, etc.).
- ❌ Hex hardcodeado en componentes: usar tokens (`bg-background`, `text-accent`, `border-border-strong`, etc.). Ver `CLAUDE.md → "Sistema de Color"` para la lista completa.
- ❌ `<a href="...">` para navegación interna localizada. Usar `<Link>` de `@/i18n/navigation`.

## Diseño — preferencias

- Modo oscuro por default (vía `prefers-color-scheme`).
- Animaciones sutiles **150-200ms**. Nada largo.
- Una sola familia tipográfica (Geist por ahora).
- Hover effects con `accent` del contexto: chrome cyan en landing/header/footer, accent del juego dentro de su sección (heredado vía override en `[game]/layout.tsx`).
- **`--highlight`** (amarillo gold) es siempre marca y va en endorsements editoriales (estrella ⭐ "essential"), no se usa para theming por juego.
- Semánticos universales (`--success`, `--warning`, `--danger`, `--info`) son los mismos para PoE que para Genshin: el verde "Free" es el mismo verde en cualquier juego.

## Process

- Antes de declarar un cambio "listo", **correr `npx next build`** y verificar que pasa sin errores.
- Para cambios UI/frontend, también verificar visualmente (curl al dev server o refresh en browser). Si no se puede testear visualmente, decirlo explícitamente.
- **NO hacer commit/push automáticamente**. Pedir confirmación al usuario antes de cada commit/push.
- Mensajes de commit: imperativos cortos en el subject; body explicando WHY (no WHAT — el diff dice el WHAT).
- No usar emojis ni decoraciones en mensajes de commit, PRs, ni código.
- En `git add`, listar archivos específicos. **NO usar `git add .` ni `git add -A`** — pueden incluir secrets o binarios sin querer.
- Cuando termines un cambio al schema, recordar al usuario actualizar `docs/SCHEMA_EVOLUTION.md` si se olvidó.
