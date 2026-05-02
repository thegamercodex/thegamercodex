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
