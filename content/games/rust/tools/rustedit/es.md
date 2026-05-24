---
title: RustEdit
description: Editor standalone para diseñar mapas custom de Rust con terrain, splat, biome, topology, alpha y prefab editing más extensión Oxide para custom IO.
quickTake: Si quieres correr un server con mapa diseñado a mano (no procedural), RustEdit es el editor de la comunidad. La curva es alta pero el ecosistema de mapas custom de Codefling depende de él.
---

## Qué es

RustEdit es un editor de mapas standalone para Rust, distribuido como ejecutable click-to-run (no necesita Unity ni dev tools). Cubre terrain, splat (texturas), biome, topology, alpha y prefab placement, con extensión Oxide opcional que expone funciones del Rust.World SDK no disponibles vanilla — modificar paths del Cargo Ship y Bradley APC, crear puzzles custom, vending machines y loot tables custom. Fue creado por k1lly0u y se mantiene activamente. Algunas features avanzadas son Patreon-only, pero el editor base es gratis.

## Qué problema resuelve

Rust tiene procedural maps por default (la base de Facepunch), pero un server con mapa custom (cohesivo, lore-driven, con custom monuments) es lo que separa servers populares de servers que mueren al segundo wipe. Editar manualmente un .map file requiere conocer el formato binario del juego, prefabs, mecánicas de stability y físicas — sin un editor, prácticamente imposible. RustEdit te da una GUI para todo eso.

## Diferenciación

La alternativa principal es Rust-Map-Editor (RMME) de Adsito, basado en Unity Editor y open-source. RMME es más poderoso para advanced map makers que ya conocen Unity (importar tools custom, scripting) pero tiene barrier de entry alta (instalar Unity, configurar el proyecto). RustEdit es más accesible: descargas, abres, editas. Para 90% de map makers, RustEdit es la entrada correcta; RMME es el upgrade cuando se queda corto.

## Para qué la usa la gente

- **Diseñar mapas custom para tu server**: terrain a mano, splat painting de biomes, prefab placement de monumentos custom o stock.
- **Modificar Cargo Ship / Bradley paths**: que el Cargo siga una ruta custom o el Bradley patrullé otra zona.
- **Crear puzzles custom**: agregar puertas con keycard, electricidad puzzles con outputs específicos.
- **Custom vending machines y loot tables**: NPCs / vending con items que vos defines, no los stock.
- **Markete tu mapa en Codefling**: muchos map makers venden sus designs en Codefling, RustEdit es su tool primario de creation.

## Para quién NO es esta herramienta

Si solo quieres generar un mapa procedural decente para tu server, RustMaps cubre eso sin necesidad de RustEdit. Si nunca tocaste un map editor (ni de Source Engine, ni de Bethesda, ni de Unity), la curva de RustEdit es alta — invertir 20-30 horas para hacer tu primer mapa útil. Si solo juegas sin admin de server, no tienes razón para usarlo.

## Cómo se usa en la práctica

1. Descargás RustEdit desde rustedit.io (free).
2. Abres el editor, eliges entre new map (procedural base) o load existing.
3. Para terrain, usas brushes con height/smooth/flatten.
4. Para splat (texture), pintás con brushes los biomes y tipos de surface.
5. Para prefabs (monuments, custom buildings), arrastras desde la library a la posición deseada.
6. Para custom IO (puzzles, paths), instalas la extensión Oxide y configurás desde el plugin.
7. Exportás como .map y subes al server, configurando el server.cfg para load custom map.

## Limitaciones honestas

- **Solo Windows**: no hay versión macOS ni Linux.
- **Curva alta**: si nunca usaste un map editor, vas a tardar varias sesiones para entender el flow.
- **Algunas features son Patreon-only**: features avanzadas (height masks, advanced topology tools) requieren Patreon de k1lly0u (~$5/mes).
- **Custom IO requiere Oxide en el server**: si tu server corre vanilla, IO custom no funciona.
- **Mantenimiento depende de un solo dev**: si k1lly0u pausa el proyecto, updates pueden lagear vs parches de Facepunch.

## Cómo empezar

Descargás desde rustedit.io. Para arrancar, ver el "Getting Started" tutorial in-app y/o la playlist de tutoriales en YouTube oficial de RustEdit. El Discord oficial (linkeado desde el sitio) tiene canales activos donde la comunidad responde dudas y comparte prefabs sueltos. Si vas a vender mapas, abrir cuenta en Codefling y leer su guía de "submitting a map for sale".
