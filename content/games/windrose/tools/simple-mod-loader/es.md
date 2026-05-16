---
title: "Simple Mod Loader And Console Enabler"
description: "Mod foundational hostado en Nexus Mods que habilita la carga de archivos PAK fuera del directorio canónico del juego y desbloquea la consola in-game para debug/cheats. Sin esto, la mayoría de mods PAK no funciona."
quickTake: "El prerequisito silencioso de prácticamente cualquier mod que vas a instalar. Si recién entras al ecosistema de modding de Windrose, este es el primer file que descargas."
---

## Qué es

Simple Mod Loader And Console Enabler es un mod en Nexus Mods (entry #2 del juego, indicador del impacto temprano que tuvo) que cumple dos funciones core: habilitar la carga de archivos PAK desde una carpeta `~mods/` adjunta al directorio del juego, y desbloquear la consola in-game tradicionalmente shipped pero deshabilitada. Es free, no requiere suscripción a Nexus para descargar.

## Qué problema resuelve

Windrose en Early Access no expone hooks oficiales para cargar mods. Por defecto, los archivos .pak custom no se cargan ni el game engine, los mods quedan inertes. Simple Mod Loader inyecta el behavior que permite que el engine reconozca la carpeta `~mods/` y cargue cualquier archivo .pak/.ucas/.utoc dentro. Sin esto, todo el ecosystem de mods PAK no funciona.

## Diferenciación

- No es un mod manager — no instala, no organiza, no toggle. Es un loader: habilita que el game lea PAKs.
- **Windrose Mod Manager** (Nexus) y **Vercadi's** automatizan instalación sobre Simple Mod Loader, asumen que está instalado.
- En suma: Simple Mod Loader es la base de la stack, los mod managers son la UX encima.

## Para qué la usa la gente

- **Habilitar cualquier mod PAK**: prerequisito de Expanded Horizons, Pirate Depot, UnLockShip, todos los mods de QoL que hay.
- **Acceder a la consola in-game**: cheats, debug, spawn items, give XP. Útil para testing o para players que quieren skip grinding.
- **Habilitar dev features ocultas**: command list comunidad-documented que el dev dejó accesible pero no exposed.
- **Base para modders**: si quieres crear un mod PAK, este es el loader que va a cargar tu work.

## Para quién NO es esta herramienta

Si no quieres modear el juego y solo quieres jugar vanilla, no la instales — no hay valor.

## Cómo se usa en la práctica

1. suscríbete a Nexus Mods (free), entrá a [nexusmods.com/windrose/mods/2](https://www.nexusmods.com/windrose/mods/2).
2. Descarga manual el archivo .zip.
3. Extrae el contenido al directorio raíz del juego (típicamente `C:\Program Files (x86)\Steam\steamapps\common\Windrose`).
4. Si tu install no tiene carpeta `~mods/`, creala (con el tilde — NO `mods` solo).
5. Reinicia Steam para que detecte los archivos nuevos. Lanzá el juego.
6. Para console: tecla `~` (tilde) durante el game. Si no se abre, verifica que Simple Mod Loader esté instalado correcto.

## Limitaciones honestas

- **Cliente y servidor deben matchear**: si te conectas a un servidor multiplayer, ambos lados necesitan los mismos PAKs cargados o vas a ser kicked.
- **Update con cada patch del juego**: cuando Windrose patcha, el loader puede romperse temporalmente hasta que el author libera una versión compatible.
- **Sin auto-update**: hay que checkear manualmente el page de Nexus para actualizar.
- **No es FOSS**: codebase cerrada, hay que confiar en el author.
- **Cheats y banneo**: si entras a un server PvP usando la consola para give yourself items, puedes ser kicked/banned por el server owner.

## Cómo empezar

suscríbete a Nexus Mods si todavía no, descarga Simple Mod Loader, sigue el README. Una vez instalado, prueba con un mod liviano (Faster Cooldowns o similar) para verificar que la stack funciona antes de invertir en mod managers o sets más complejos.
