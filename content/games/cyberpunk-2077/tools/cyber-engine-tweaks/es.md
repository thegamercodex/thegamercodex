---
title: "Cyber Engine Tweaks (CET)"
description: "Framework de scripting Lua y consola de depuración para Cyberpunk 2077. Habilita la mayoría de mods de la era moderna del juego."
quickTake: "Si vas a modear Cyberpunk 2077 en serio, CET es no-negociable. La mayoría de mods populares (AMM, Native Settings UI, etc.) dependen de él. Sin CET muchos mods directamente no cargan."
---

## Qué es

Cyber Engine Tweaks (CET) es un framework de scripting que se inyecta en el ejecutable de Cyberpunk 2077 y expone las funciones internas del juego a Lua, el lenguaje de scripting que usa REDengine 4. Open-source (MIT), mantenido por yamashi (maximegmd) con una comunidad activa de contributors en GitHub.

Además del runtime de Lua, CET trae una consola de depuración integrada (acceso por hotkey configurable, default sin asignar), tweaks predefinidos al engine (cap de FPS, fix de bugs específicos del 1.x — algunos ya resueltos por CDPR pero CET los mantiene como opción), y un visualizador de objetos del game state.

## Qué problema resuelve

REDengine 4 no expone un API público de modding. Sin un framework intermedio, modificar comportamientos del juego en runtime requiere reverse-engineering binarios — viable para 3 personas en el mundo, no para una comunidad de modders. CET resuelve eso traduciendo las funciones internas de C++ a llamadas Lua accesibles desde mods.

Por eso CET es **dependencia transitiva** de cientos de mods: Appearance Menu Mod, Native Settings UI, mods de UI, mods que agregan items, mods que cambian gameplay. Si CET no está instalado, esos mods no levantan.

## Diferenciación

Frente a **RED4ext** (otro framework esencial), CET expone Lua scripting y una consola interactiva; RED4ext expone C++ nativo para mods compilados. La mayoría de mods modernos requieren **ambos** — CET para la capa Lua, RED4ext para el bridge nativo. No son alternativas sino complementarios.

Frente a **REDmod** (oficial de CDPR), CET es comunitario, más profundo, llega a partes del engine que REDmod no toca. REDmod cubre integration via launcher (lo que el juego soporta oficialmente); CET va más allá.

## Para qué la usa la gente

**Pre-requisito para modear casi cualquier cosa**: la primera vez que quieres instalar AMM, Native Settings UI, o cualquier mod modernos, te das cuenta que necesitas CET. Lo instalas y queda como infraestructura permanente.

**Console de comandos in-game**: hotkey configurable abre una consola superpuesta donde puedes ejecutar Lua o comandos prediefinidos: spawnear items, teleport, set quest flags, etc. Útil para debug, no para gameplay legítimo.

**Diagnosticar problemas de mods**: cuando un mod no carga, CET muestra logs en su panel. La ventana "Logs" enumera errores de Lua y warnings — primer lugar a mirar cuando algo se rompe.

**Acceder a Codeware / TweakDB / RTTI**: para modders avanzados, CET expone hooks a las APIs internas del juego (Codeware, TweakDB browser, RTTI inspector). Habilita escribir mods nuevos desde cero.

## Para quién NO es esta herramienta

Si juegas vanilla puro sin mods, CET es overhead innecesario. No agrega features visibles si no instalas mods que lo usen.

Si quieres modear en consola (PS5, Xbox), CET no aplica — es Windows-only por la arquitectura de inyección.

Si tu hardware es muy modesto, CET agrega un poquito de overhead al loading. No es significativo pero existe.

## Cómo se usa en la práctica

1. Bajas la última release desde `github.com/maximegmd/CyberEngineTweaks/releases` o desde Nexus Mods (mismo binario).
2. Extraes el ZIP en la carpeta de instalación del juego (`Cyberpunk 2077\bin\x64\`). Verificas que aparece `version.dll` y la carpeta `plugins\cyber_engine_tweaks\`.
3. Inicias el juego una vez. CET se inyecta al cargar.
4. Una vez en menú principal, abres la consola overlay (configuras el hotkey en `config.json` o desde la ventana de Settings si está disponible).
5. La consola muestra varios paneles: Console (Lua live), Logs, TweakDB Editor, etc.
6. A partir de ahí, instalas mods que dependen de CET — la mayoría son drag-and-drop a `bin\x64\plugins\cyber_engine_tweaks\mods\`.

## Limitaciones honestas

**Updates después de cada patch del juego**. Cuando CDPR publica un patch nuevo, CET necesita actualización. Usar mods con CET viejo y juego nuevo crashea o produce comportamiento errático. Espera 1-3 días post-patch para mods estables.

**Sin GUI amigable para usuarios casuales**. La consola y los paneles asumen familiaridad con scripting/debug. Para un user que solo quiere "instalar el mod y jugar", CET es invisible (lo cual está bien) — pero si algo se rompe, debuggear requiere conocimiento técnico.

**Riesgo (mínimo) de cheats anti-tampering**. CET inyecta código en el ejecutable; en single-player no es problema, pero los achievements de Steam pueden quedar deshabilitados cuando hay mods cargados (mod específico para re-habilitar achievements existe).

**Configuración inicial confusa**. La primera vez que instalas CET, no es obvio dónde van los mods, qué hace cada panel, ni cómo asignar el hotkey. Vale la pena leer la wiki oficial antes (`wiki.redmodding.org/cyber-engine-tweaks`).

**Compatibilidad con Phantom Liberty**. Phantom Liberty requirió una rebuild mayor de CET. Mods viejos pueden no funcionar con PL hasta que se actualicen.

## Cómo empezar

1. Lee la wiki oficial: `wiki.redmodding.org/cyber-engine-tweaks/getting-started/installing`. Tiene step-by-step actualizado.
2. Baja la última release de GitHub o Nexus. Las dos fuentes ofrecen el mismo binario.
3. Haz backup de tu carpeta de instalación antes (o mejor: usa una segunda instalación dedicada a modding si tienes espacio).
4. Después de instalar CET, levanta el juego una vez y verifica que aparece el overlay (default hotkey: home key, pero verifica tu config).
5. Cuando funcione, ya puedes instalar mods que dependen de CET. Empieza con uno simple (Native Settings UI) antes de meter algo grande (AMM).

Si algo falla, el primer lugar a mirar es el panel "Logs" dentro del overlay — los errores Lua ahí indican exactamente qué mod o función está rota.
