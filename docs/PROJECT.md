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

app/
├── [locale]/
│   ├── layout.tsx              ← Layout con switcher de idioma, header, footer
│   ├── page.tsx                ← Landing
│   ├── [game]/
│   │   ├── layout.tsx          ← Aplica theme del juego como CSS variables
│   │   ├── page.tsx            ← Página del juego
│   │   ├── tools/
│   │   │   ├── page.tsx        ← Lista todas las tools del juego
│   │   │   └── [tool]/
│   │   │       └── page.tsx    ← Página individual de tool
│   │   ├── creators/
│   │   │   ├── page.tsx        ← Lista todos los creators
│   │   │   └── [creator]/
│   │   │       └── page.tsx    ← Página individual de creator
│   │   └── resources/
│   │       └── [category]/
│   │           └── page.tsx    ← Lista de recursos por categoría
│   └── about/
│       └── page.tsx

### Componentes Clave

- `<GameThemeProvider>`: aplica CSS variables del juego al children.
- `<ToolCard>`: card visual de una tool en listados.
- `<CreatorCard>`: card visual de un creator.
- `<VideoCard>`: card de un video con thumbnail y opciones de embed/abrir en YouTube.
- `<LanguageSwitcher>`: dropdown para cambiar entre es/en.
- `<CategoryFilter>`: filtros por categoría/tag/dificultad.
- `<SearchBar>`: búsqueda con Fuse.js sobre JSON estático.
- `<MarkdownContent>`: renderiza MDX con estilos custom.

### Lib

- `lib/content.ts`: lee y parsea archivos de contenido (meta.json + markdown). Funciones: `getGames()`, `getGame(id)`, `getTools(gameId)`, `getTool(gameId, toolId)`, `getCreators(gameId)`, `getCreator(gameId, creatorId)`, `getResources(gameId, category)`.

- `lib/youtube.ts`: fetchea RSS feeds de YouTube. Función: `getLatestVideos(channelId, limit)`.

- `lib/i18n.ts`: configuración de next-intl, detección de locale, helpers para acceder a campos traducibles del meta.

- `lib/types.ts`: TypeScript types para Game, Tool, Creator, Resource, etc.

## Build Process

1. `next build` ejecuta `prebuild` script que fetchea videos de YouTube de todos los creators y guarda en `content/cache/creator-videos.json`.

2. SSG genera todas las páginas estáticas leyendo de `content/`.

3. Vercel deploy automático en cada push a `main`.

4. Revalidation configurado a 6 horas en páginas con datos de YouTube para refrescar videos sin redeploy.

## Theming Dinámico

Cada juego define en su `meta.json`:

```json
"theme": {
  "primary": "#a08c5a",
  "secondary": "#1a1a1a",
  "accent": "#c9a961",
  "background": "#0d0d0d",
  "text": "#e8e0d0"
}
```

El layout del juego (`app/[locale]/[game]/layout.tsx`) inyecta estos como CSS custom properties:

```tsx
<div style={{
  '--color-primary': theme.primary,
  '--color-accent': theme.accent,
  // etc
}}>
  {children}
</div>
```

Componentes usan `var(--color-primary)` en sus estilos. Tailwind config extiende con estos custom properties para clases utility.

## Tareas Iniciales (Orden Sugerido)

1. **Setup base**: configurar next-intl, tipos TypeScript, lib/content.ts.

2. **Layout y navegación**: header con language switcher, footer básico.

3. **Landing page**: grid de juegos disponibles (por ahora solo PoE).

4. **Página de juego**: hero con descripción, secciones de tools/creators/resources.

5. **Página de tool**: análisis completo + sidebar con metadata + CTA de "Ir a la herramienta".

6. **Página de creator**: bio + últimos videos (RSS) + links a plataformas.

7. **Filtros y búsqueda**: client-side sobre JSON.

8. **Theming dinámico**: aplicar colores por juego.

9. **Modo oscuro**: implementar con Tailwind dark mode.

10. **SEO**: metadata, sitemap, schema.org.

11. **Deploy a Vercel**: conectar repo, configurar env vars, primer deploy productivo.

## Notas Importantes

- **No usar localStorage o sessionStorage en componentes**: el sitio es SSG, hay que ser cuidadoso con APIs de browser.

- **Todos los textos de UI** (labels, botones, mensajes) van en `messages/es.json` y `messages/en.json`, no hardcodeados.

- **Los nombres propios** (de juegos, tools, creators) NO se traducen. "Path of Exile" se queda en ambos idiomas.

- **Las imágenes en `/public/games/`** pueden no existir todavía durante desarrollo. Usar placeholders (Unsplash, Lorem Picsum) o componente `<Image>` con fallback.

- **El campo `lastVerified`** en cada tool indica cuándo fue revisada por última vez. UI debería mostrarlo discretamente para dar credibilidad.