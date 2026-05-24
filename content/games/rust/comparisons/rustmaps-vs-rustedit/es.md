---
title: RustMaps vs RustEdit — generador procedural vs editor custom
description: RustMaps genera mapas procedurales para servers. RustEdit edita mapas a mano con monumentos custom. No compiten — cubren scopes opuestos.
---

RustMaps y RustEdit son las dos tools mainstream del map ecosystem de Rust, pero hacen cosas distintas. RustMaps genera mapas procedurales y los expone via gallery + API. RustEdit edita .map files a mano para crear o modificar mapas custom. La pregunta no es "cuál es mejor" sino "cuál cubre tu caso".

## Cómo se sienten

**RustMaps** es web app: entras, pickeás seed + size, esperas 2-5 min, recibes un mapa procedural con monumentos, heatmaps y stats. Para admin que quiere un mapa balanceado sin diseñar nada, fluye perfecto.

**RustEdit** es app standalone (Windows-only) más cercana a un map editor de Source Engine o de Bethesda. Brushes de terrain, paint de biomes, drag-and-drop de prefabs, custom IO via extensión Oxide. Para alguien que quiere control granular, RustEdit es la entrada.

## Lo que solo cubre uno

**Solo RustMaps**:
- Generación procedural automática con seed/size.
- Gallery pública de mapas ya generados.
- API para integration con plugins (MapVoter, Automated Maps).
- Heatmaps de animales, nodos, monumentos.

**Solo RustEdit**:
- Editing de terrain a mano (height brushes, splat painting).
- Placement de prefabs (monumentos stock o custom).
- Modificación de paths del Cargo Ship y Bradley APC.
- Custom IO via extensión Oxide: puzzles custom, vending machines, loot tables custom.

## Cuándo gana cada una

| Caso de uso | Ganador |
|---|---|
| Mapa para wipe vanilla weekly | RustMaps |
| Server con monumentos custom y lore | RustEdit |
| Scoutear mapa del server actual | RustMaps |
| Vender mapa custom en Codefling | RustEdit |
| Integration con map voting | RustMaps |

## Recomendación combinada

Si admin server vanilla/lightly modded: RustMaps cubre todo. La curva es ~5 min para entender generation + filters.

Si admin server roleplay, build server o quieres diferenciación frente a otros servers vanilla: RustEdit es la herramienta. Curva de 20-30 horas para hacer tu primer mapa decente, pero el resultado vale para servers que apuntan a comunidad permanente.

Importante: los dos se complementan. Workflow común — generar un base procedural con RustMaps, exportar el .map, abrirlo en RustEdit, agregar monumentos custom o modificar zonas específicas. Lo mejor de ambos.
