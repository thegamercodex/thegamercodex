---
title: "Mod Engine 2"
description: "Mod loader oficial-de-facto de la comunidad para Elden Ring y otros Souls modernos. Inyección runtime sin tocar la carpeta del juego."
quickTake: "Si vas a instalar cualquier mod de PC para Elden Ring, Mod Engine 2 es la base — overhauls, Seamless Co-op y la mayoría de mods grandes lo asumen instalado. Es infra, no es opcional."
---

## Qué es

Mod Engine 2 es un mod loader open-source mantenido por el colectivo soulsmods (los mismos detrás de DSMapStudio). Sucede al Mod Engine original (DS3 era) y soporta Elden Ring, DS3 y Sekiro nativamente. El repo vive en `github.com/soulsmods/ModEngine2` bajo licencia MIT.

Técnicamente es un DLL injector escrito en Rust. Te da un ejecutable launcher (`launchmod_eldenring.bat`) que arranca el juego con los mods cargados desde una carpeta `mod/` separada, sin escribir nada al directorio de Steam.

## Qué problema resuelve

Mods de Elden Ring antes de Mod Engine 2 requerían reemplazar archivos en la carpeta del juego o usar el original Mod Engine con configs frágiles. Esto generaba problemas: updates de Steam sobrescribían tus mods, reinstalar requería rehacer todo, y cualquier conflict entre mods era invisible.

Mod Engine 2 resuelve esto con runtime injection: los archivos de los mods viven en su propia carpeta, y al lanzar el juego con el bat correspondiente se inyectan en runtime. Update de Steam no toca tus mods. Instalas algo, se rompe, lo desinstalás y volviste a vanilla limpio.

También resuelve el problema del anti-cheat: lanzando desde Mod Engine 2, el juego corre en offline mode (con EAC bypass), evitando bans.

## Para qué la usa la gente

**Base para overhauls**: ELDEN RING Reforged, The Convergence, Garden of Eyes — todos asumen Mod Engine 2 instalado.

**Base para QoL mods**: mods de UI mejorada, hotkeys, item drop rate adjustments, modelo de Torrent rediseñado.

**Soporte para Seamless Co-op**: el mod de LukeYui carga vía Mod Engine 2.

**Testing seguro**: probar un mod, no te gusta, lo desinstalás sin restos en la carpeta del juego.

**Multi-perfiles**: tener varias instancias de Mod Engine 2 con mods distintos (vanilla+, overhaul, testing) y rotar entre ellas.

## Para quién NO es esta herramienta

Si juegas Elden Ring en console (PS5/Xbox), los mods no existen en esas plataformas — Mod Engine 2 es exclusivo de PC.

Si solo planeas instalar 1-2 mods cosméticos (re-skins de armaduras) que no requieren mod loader, técnicamente podes evitarlo — pero la mayoría de mods serios igual lo asumen.

Si quieres jugar online vanilla con EAC activo, no podes usar Mod Engine 2 — fuerza offline mode.

## Cómo se usa en la práctica

1. Baja la última release desde el repo de GitHub (`github.com/soulsmods/ModEngine2/releases`).
2. Extrae el ZIP a cualquier carpeta (no necesariamente la del juego).
3. Lee el README — explica la estructura de la carpeta `mod/` esperada.
4. Coloca los archivos del mod que quieres (siguiendo la estructura del README) dentro de `mod/`.
5. Doble click en `launchmod_eldenring.bat` para lanzar el juego con el mod cargado.
6. Verifica que cargó correctamente (típicamente con un splash screen del mod o un title screen modificado).

Para Seamless Co-op específicamente, tiene su propio launcher pero internamente usa Mod Engine 2.

## Limitaciones honestas

**No es un mod manager**: Mod Engine 2 solo carga lo que esté en su carpeta `mod/`. No tiene UI, no resuelve conflicts, no maneja dependencias. Si quieres mod manager con UI, usa Vortex u otra herramienta — pero la mayoría de la comunidad ER prefiere stack manual con Mod Engine 2.

**Acoplado al patch del juego**: cada vez que Bandai actualiza Elden Ring, Mod Engine 2 puede romperse hasta que se actualice. El equipo es rápido (1-3 días típicamente) pero hay window.

**No bypassa anti-cheat para online**: solo permite offline play. No es una tool para cheating online — los devs son explícitos sobre esto.

**Setup manual**: no hay GUI installer. Es extraer ZIP + colocar archivos en estructura específica + lanzar bat. Para usuarios técnicos esto es nada; para principiantes es la barrera principal.

## Cómo empezar

1. Visita `github.com/soulsmods/ModEngine2/releases`.
2. Baja la versión más reciente (Elden Ring build).
3. Extrae a una carpeta cualquiera (ej: `D:\ModEngine2`).
4. Antes de cargar mods, prueba el launcher vanilla para confirmar que arranca.
5. Cuando funcione, baja el primer mod (ej: Seamless Co-op) y sigue su README específico.
