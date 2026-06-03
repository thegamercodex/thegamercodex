---
title: El toolkit de modding de Cyberpunk 2077
description: Las seis herramientas que forman la base del modding de Cyberpunk 2077 — gestor, frameworks de scripting y carga de assets. La infraestructura que casi todos los mods modernos requieren.
---

REDengine 4 no expone un API público de modding, así que la comunidad construyó una pila de frameworks que el resto de los mods asume como dada. Antes de instalar cualquier mod de contenido, conviene entender —y tener instalada— esa base. Este stack de seis herramientas es exactamente esa infraestructura: el setup que aparece en los "requisitos" de casi cualquier mod de Cyberpunk.

## Las capas del modding

Todo se gestiona desde **Vortex**: instala, organiza y resuelve dependencias sin que tengas que copiar archivos a la carpeta del juego a mano. Es el punto de entrada cómodo.

Debajo viven los dos frameworks base, que resuelven capas distintas. **Cyber Engine Tweaks (CET)** traduce funciones internas a Lua y trae una consola in-game; es la base de los mods escritos en Lua. **RED4ext** hace lo propio con C++: carga plugins nativos y es la base de dependencias intermedias como TweakXL y ArchiveXL.

Esas dependencias intermedias completan la pila. **ArchiveXL** permite cargar assets nuevos —ropa, items, NPCs— sin reemplazar archivos base, lo que evita conflictos. **TweakXL** edita la TweakDB para cambiar stats, precios y balance de forma compatible entre mods. Y **Native Settings UI** da el menú in-game donde esos mods exponen sus opciones, sin que tengas que editar archivos de configuración.

## Por qué estas seis

No son mods de contenido; son los cimientos:

- **Gestión** → Vortex
- **Scripting Lua** → Cyber Engine Tweaks
- **Plugins nativos** → RED4ext
- **Carga de assets** → ArchiveXL
- **Edición de balance** → TweakXL
- **Settings in-game** → Native Settings UI

Con esta base instalada, instalar mods de contenido se vuelve cuestión de un click. Cada herramienta tiene su análisis completo en el codex.
