---
title: UE4SS (Palworld)
description: Framework de modding open-source que inyecta soporte para Lua y Blueprint mods en juegos hechos con Unreal Engine, incluyendo Palworld.
quickTake: La base que casi todos los mods de Palworld necesitan. Sin UE4SS, la mayoría de los mods de Nexus simplemente no cargan. Es dependencia, no producto final — instalalo primero, después instala lo demás.
---

## Qué es

UE4SS (Unreal Engine 4/5 Scripting System) es un framework open-source que se inyecta dentro de juegos hechos con Unreal Engine para permitir cargar mods Lua y Blueprint, hook a funciones del engine, y exponer APIs a otros mods. Es la fundación sobre la cual el 80%+ de la escena de modding de Palworld se construye. Existe una **versión específicamente forkeada para Palworld** porque Pocketpair hizo modificaciones al engine que requieren cambios en UE4SS (un MemberVariableLayout.ini específico).

## Qué problema resuelve

Por defecto, Unreal Engine no carga código externo. Para que un mod inyecte comportamiento (cambiar stats, agregar UIs, alterar pathfinding), necesita que algo lo "active" desde dentro del engine. UE4SS es ese algo: una DLL que se carga al inicio del juego y abre la puerta para que los mods existan.

## Diferenciación

En Unreal Engine moddable scenes, UE4SS es básicamente el standard. No hay alternativa seria que cubra el mismo scope. Para Palworld específicamente, necesitas **la versión Palworld-linked** de UE4SS, no la mainstream — la mainstream te crashea el juego con la mayoría de los mods.

## Para qué la usa la gente

- **Pre-requisito para casi cualquier mod**: PalSchema, mods de QoL, mods de gameplay... casi todos lo necesitan.
- **Desarrollo de mods nuevos**: si quieres escribir un mod, UE4SS te da el SDK.
- **Debugging del juego**: UE4SS expone consola in-game con comandos para inspeccionar entidades, modificar valores live.
- **Loading de mods Lua**: scripts Lua para automatizaciones (auto-craft, auto-pal-management).

## Para quién NO es esta herramienta

Si no vas a usar mods, no lo necesitas. UE4SS no agrega features por sí mismo — es solo infraestructura. Si usas mods en Palworld, casi seguro vas a necesitarlo.

## Cómo se usa en la práctica

1. Bajas la release Palworld-linked desde el repo de GitHub o desde el Nexus Mods entry oficial.
2. Descomprimís todo en `Palworld/Pal/Binaries/Win64/`.
3. Al abrir Palworld, UE4SS se inyecta automáticamente.
4. Verificas que cargó: aparece la consola UE4SS en una segunda ventana (configurable).
5. Cualquier mod que pongas en `Mods/<NombreDelMod>/` desde acá se carga al iniciar el juego.

## Limitaciones honestas

- **Versionado complicado**: UE4SS tiene versiones mainstream y forks per-juego. Para Palworld necesitas el fork específico, no la latest mainstream. Bajar la equivocada crashea el juego.
- **Antivirus paranoicos**: como cualquier DLL injection, algunos antivirus lo flagean. Agregar exception manual.
- **Solo Windows**: el engine modding scene de Unreal vive ahí. Sin versión Mac/Linux.
- **Documentación dispersa**: parte está en el GitHub README, parte en docs externos, parte en Discord de UE4SS. Curva de aprendizaje real si vas a desarrollar mods.

## Cómo empezar

Visitar el repo en github.com/UE4SS-RE/RE-UE4SS y bajar la release Palworld-compatible (las release notes especifican qué versión es). Descomprimir en `Pal/Binaries/Win64/`. Confirmar que carga abriendo Palworld y viendo la consola de UE4SS aparecer. Después de eso, puedes instalar PalSchema y cualquier mod compatible.
