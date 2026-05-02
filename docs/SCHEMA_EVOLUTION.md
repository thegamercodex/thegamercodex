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
