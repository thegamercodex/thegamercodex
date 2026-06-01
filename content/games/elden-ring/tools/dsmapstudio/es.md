---
title: "DSMapStudio"
description: "Editor de mapas, params, eventos y textos para todos los Souls modernos, incluyendo Elden Ring. La herramienta principal de cualquier mod author serio."
quickTake: "Si tu objetivo es crear mods (no solo instalar), DSMapStudio es la herramienta. La curva es real pero ningún editor cubre tanto del game data en una sola UI."
---

## Qué es

DSMapStudio es una aplicación open-source desarrollada por el colectivo soulsmods (mismos detrás de Mod Engine 2). Vive en `github.com/soulsmods/DSMapStudio` bajo MIT license y soporta DS1, DS2, DS3, Bloodborne, Sekiro y Elden Ring.

Es el descendiente directo de DSMapStudio (DS1 era) y de Yapped (params editor). Combina map editing visual, param editing, text editing y event scripting en una sola UI.

## Qué problema resuelve

Crear mods para Elden Ring sin DSMapStudio significa editar archivos binarios a mano con hex editors — viable solo para casos triviales. DSMapStudio abre los formatos propietarios de FromSoftware y los muestra como UI editable: visual map editor con click-to-place, tablas de params con dropdowns, search global por param values.

Para mod authors es la diferencia entre "voy a tardar semanas" y "puedo prototipar en horas".

## Para qué la usa la gente

**Map editing**: spawn de enemigos, NPCs, items en posiciones específicas del mapa.

**Param editing**: cambiar stats de armas, hechizos, jefes, NPCs (HP, damage, scaling).

**Text editing (FMG)**: cambiar nombres y descripciones de items.

**Event scripting**: editar lógica de eventos del juego (jefes spawn, gates abrir, etc.).

**Datamine inicial**: explorar el game data para entender cómo está estructurado antes de modificar.

## Para quién NO es esta herramienta

Si solo quieres instalar mods (no crear), DSMapStudio no aporta — para usuarios finales, Mod Engine 2 es suficiente.

Si no tenes paciencia para curva de aprendizaje técnica (1-2 semanas de exploración), no la vas a aprovechar.

Si juegas en console, no aplica — PC modding exclusive.

## Cómo se usa en la práctica

1. Baja la última release desde `github.com/soulsmods/DSMapStudio/releases`.
2. Extrae a una carpeta dedicada.
3. Lanza la app y selecciona "Elden Ring" como juego target.
4. Apunta a tu carpeta del game data (Steam path).
5. Editar lo que necesites: param tables, map files (`.msb` files), text files.
6. Exporta los archivos modificados.
7. Coloca los archivos exportados en la estructura `mod/` de Mod Engine 2.

## Limitaciones honestas

**Curva pronunciada**: la UI tiene cientos de tabs y opciones. Sin tutorial guiado fuera del README del repo y videos de comunidad.

**Documentación limitada**: el README cubre lo básico; mucho conocimiento vive en el Discord de soulsmods.

**Crashes ocasionales**: con files grandes (típicos de Elden Ring), la app puede colgarse. Save constantemente.

**No es WYSIWYG**: aunque visual, no podes "ver" tu mod corriendo desde DSMapStudio — tenes que exportar y testear con Mod Engine 2.

**Updates pegados a engine changes**: cuando Bandai patchea ER con cambios estructurales (raro pero pasa), DSMapStudio tarda en alinearse.

## Cómo empezar

1. Visita `github.com/soulsmods/DSMapStudio` y lee el README.
2. Baja la versión más reciente desde Releases.
3. Únete al Discord de soulsmods (link en repo) para troubleshooting.
4. Ve algunos videos de YouTube de "DSMapStudio Elden Ring tutorial" para tener context visual.
5. Empieza con un mod simple (cambiar stats de un arma) antes de map editing.
