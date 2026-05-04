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
- Default locale es `en` (cambiado desde `es` en el lanzamiento inicial — el codex apunta a audiencia global, con switch a español siempre disponible). URL siempre incluye locale (`localePrefix: "always"`). No existe `src/app/layout.tsx` raíz — el root layout vive en `[locale]/layout.tsx`.

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
| Tool screenshot | `public/images/tools/<game-id>/<tool-id>-ss-<N>.<ext>` | `path-of-exile/path-of-building-ss-1.png` |

**Reglas**:

- Las **tool images viven en una subcarpeta por juego** dentro de `public/images/tools/`. La carpeta corresponde al juego donde el tool tiene su entry en `content/games/<game>/tools/<tool>/`. Esto evita que el directorio raíz se llene con cientos de archivos sueltos cuando el codex crezca a 200+ tools.
- Tool ids son únicos globalmente (entre creators y entre tools), pero al colocarse bajo un game subfolder de assets el riesgo de colisión queda absorbido por el path completo. Si una tool aparece en múltiples juegos vía `multiGame`, los otros games referencian el path de su game primario (no se duplican los archivos).
- Otros tipos de asset (game hero/logo, creator avatar/banner) **no usan subcarpetas** — viven flat en `games/` y `creators/` respectivamente. La regla de subcarpeta es solo para tools por el volumen alto.
- Hero del juego **≥1500px de ancho** (cap visual del banner). Imágenes más chicas se ven pixeladas en monitores ultrawide.
- **Formatos aceptados** (cualquier asset del proyecto: hero, logo, avatar, banner, screenshot): `.png`, `.jpg`, `.svg`, `.webp`. Para hero images preferir `.webp` por peso/calidad. Para logos preferir `.png` o `.svg` con fondo transparente. `.jpg` queda como opción válida cuando solo se tiene fuente JPEG.
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

## Tracking de batch tasks (tools/creators/resources en lote)

Cuando hay un batch grande para procesar (ej: 15 tools de un juego nuevo), mantener el progreso en un archivo tracker en `docs/wip/<game>-tool-tracker.md`. Estructura: tabla con status por item (✅ done / 🔧 in-progress / ⏳ pending), notas editoriales descubiertas durante research (ej: "U.GG menciona Riot endorsement"), y dudas pendientes de investigar. Esto deja la sesión retomable desde otra máquina con un `git pull`. NO usar `.tmp/` para tracking — está gitignored y no sincroniza.

## Mantenimiento de contenido

- Para actualizar `lastVerified` de una o varias tools, usar el script en lugar de editar `meta.json` a mano:
  ```
  npm run verify <gameId> <toolId> [toolId ...]
  npm run verify -- --all <gameId>
  ```
  El script hace replace por línea (preserva el formato del archivo) y valida que el campo exista.

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

**Body bilingüe**: usar fences `<!-- es -->` y `<!-- en -->`. Sintaxis convencional [Keep a Changelog](https://keepachangelog.com): secciones **Añadido**, **Cambiado**, **Arreglado**, **Removido**.

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

- Antes de declarar un cambio "listo", **correr `npx next build`** y verificar que pasa sin errores.
- Para cambios UI/frontend, también verificar visualmente (curl al dev server o refresh en browser). Si no se puede testear visualmente, decirlo explícitamente.
- **NO hacer commit/push automáticamente**. Pedir confirmación al usuario antes de cada commit/push.
- Mensajes de commit: imperativos cortos en el subject; body explicando WHY (no WHAT — el diff dice el WHAT).
- No usar emojis ni decoraciones en mensajes de commit, PRs, ni código.
- En `git add`, listar archivos específicos. **NO usar `git add .` ni `git add -A`** — pueden incluir secrets o binarios sin querer.
- Cuando termines un cambio al schema, recordar al usuario actualizar `docs/SCHEMA_EVOLUTION.md` si se olvidó.
