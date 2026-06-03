---
title: El toolkit de modding de Skyrim
description: Las seis herramientas que forman la base de cualquier setup de mods de Skyrim — gestor, hub, frameworks y utilidades de conflicto. El stack que debes tener antes de instalar el primer mod.
---

Skyrim es, quizás, el juego más modeado de la historia, pero también uno donde un setup mal armado se rompe con facilidad. Antes de instalar mods de contenido conviene tener la base correcta: un gestor que aísle los archivos, los frameworks que el resto de los mods asumen, y las utilidades que mantienen el load order sano. Este stack de seis herramientas es esa base.

## El orden correcto

Todo empieza con **Mod Organizer 2**: en lugar de tirar archivos dentro de la carpeta del juego, los mantiene en perfiles aislados con orden de carga visual. Es lo que te permite experimentar sin romper tu instalación. Los mods salen casi siempre de **Nexus Mods**, el hub principal, donde encuentras versiones, requisitos y descripciones.

Sobre esa base van los frameworks. **SKSE64** (Script Extender) es la dependencia silenciosa de la mayoría de los mods avanzados: sin él, muchos ni cargan. **SkyUI** reescribe la interfaz y, sobre todo, provee el menú MCM que incontables mods usan para exponer sus opciones.

Las dos últimas mantienen el orden. **LOOT** ordena automáticamente tu load order siguiendo reglas de la comunidad, evitando los conflictos más comunes. Y cuando dos mods chocan de verdad, **SSEEdit** te deja limpiar plugins y resolver el conflicto a mano.

## Por qué estas seis

Cada una cubre una capa de la infraestructura, no de contenido:

- **Gestión** → Mod Organizer 2
- **Fuente de mods** → Nexus Mods
- **Frameworks base** → SKSE64 + SkyUI
- **Orden y conflictos** → LOOT + SSEEdit

No son mods que "veas" en el juego: son los cimientos sobre los que se instala todo lo demás sin que tu Skyrim se vuelva inestable. Cada herramienta tiene su análisis completo en el codex.
