---
title: "Cyber Engine Tweaks vs RED4ext — los dos frameworks base del modding de Cyberpunk 2077"
description: "CET es la capa de scripting Lua con consola in-game; RED4ext es la capa nativa C++ sobre la que cargan TweakXL, ArchiveXL y Codeware. La mayoría de mods modernos requieren ambos."
---

Quien empieza a modear Cyberpunk 2077 choca rápido con estos dos nombres en las listas de "requisitos" de casi cualquier mod. La confusión es natural: ambos son frameworks esenciales, open-source, Windows-only, mantenidos por la comunidad, y los dos quedan instalados como infraestructura permanente. Pero resuelven capas distintas del mismo problema —que REDengine 4 no expone un API público de modding— y por eso no son alternativas sino complementos. Esta comparación aclara qué hace cada uno y cuándo basta con una.

## Capa que cubren

La diferencia de fondo es el lenguaje y el tipo de mod que habilitan.

- **CET** se inyecta en el ejecutable y traduce las funciones internas de C++ a llamadas Lua accesibles desde mods. Es la base de mods Lua como Appearance Menu Mod o Native Settings UI.
- **RED4ext** hookea el game loader y carga plugins escritos en C++ desde una carpeta dedicada, exponiendo wrappers tipados a las funciones del engine. Es la base de dependencias intermedias como TweakXL, ArchiveXL y Codeware.

En la práctica los mods complejos usan ambos: las dependencias intermedias son C++ (RED4ext), pero el mod final que ves puede ser Lua (CET). Por eso CET es dependencia transitiva de cientos de mods y RED4ext lo es de las herramientas que esos mods usan abajo.

## Interfaz y experiencia de uso

Acá las dos divergen fuerte.

- **CET** trae una consola overlay con hotkey configurable: paneles de Console (Lua en vivo), Logs, TweakDB Editor, inspector de RTTI y un visualizador del game state. Sirve para ejecutar comandos (spawnear items, teleport, set quest flags) y, sobre todo, para diagnosticar mods rotos: el panel de Logs enumera errores Lua y es el primer lugar a mirar cuando algo falla.
- **RED4ext** tiene cero UI. No hay menú ni panel. El único feedback son logs de texto en `red4ext\logs\`. Para users no técnicos eso puede ser frustrante, aunque en el flujo normal ni se nota: se instala una vez y queda silencioso.

Ambos asumen cierta familiaridad técnica. CET al menos da feedback visual; RED4ext es todo o nada y no degrada con gracia: si crashea al cargar, los mods que dependen de él tampoco arrancan.

## Licencia, mantenimiento y limitaciones

- **CET**: MIT, mantenido por yamashi (maximegmd) y contributors.
- **RED4ext**: GPL-3.0, mantenido por WopsS y contributors.

Las dos comparten la misma fragilidad: cada patch del juego rompe el framework hasta que sale versión compatible. Conviene esperar una ventana de 24-72h post-patch antes de jugar con mods, y verificar releases en GitHub. Phantom Liberty, por ejemplo, requirió una rebuild mayor de CET y mods viejos dejaron de funcionar hasta actualizarse. Ninguno de los dos aplica a consola (PS5, Xbox) por la arquitectura de inyección, y como Cyberpunk es single-player, el riesgo de anti-cheat no aplica (aunque CET puede deshabilitar los achievements de Steam con mods cargados).

## ¿Cuál usar?

- **Un mod pide solo CET** → CET. Es un mod Lua puro; no necesitas la capa nativa.
- **Un mod lista "REQUIRES RED4ext" o pide TweakXL/ArchiveXL/Codeware** → RED4ext. Esas dependencias son C++ y cargan sobre él.
- **Quieres consola in-game para debug o comandos** → CET. Es la única con overlay interactivo y panel de Logs.
- **Vas a escribir un mod nativo con rendimiento o acceso profundo** → RED4ext. Expone wrappers tipados para plugins C++ compilados.
- **Instalas AMM, Native Settings UI o un setup grande de mods** → ambos. Es el caso más común y el que asume la mayoría de las guías.

Son complementarios, no rivales: en un setup serio terminas con los dos instalados de entrada. La pregunta práctica no es "cuál", sino "cuál pide el mod que quiero" — y la respuesta suele ser ambos.
