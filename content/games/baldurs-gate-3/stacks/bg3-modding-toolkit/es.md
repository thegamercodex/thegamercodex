---
title: El toolkit completo de modding de Baldur's Gate 3
description: "Las seis herramientas que se usan juntas para modear BG3 en PC de forma estable: gestor, hub de mods, frameworks base y la documentación que evita que todo crashee."
---
Modear Baldur's Gate 3 en PC no es instalar un archivo y listo: es un ecosistema de piezas que dependen unas de otras. Este stack reúne las seis herramientas que cubren el workflow completo, de la descarga al juego estable, en el orden en que entran en juego. No son las "mejores" tools sueltas, sino las que se complementan para que el setup funcione.

## El flujo

Todo empieza en **Nexus Mods**, el hub de donde sale casi cualquier mod que vas a instalar, con sus versiones, requisitos y comments que avisan si algo se rompió con el último patch. Desde ahí, **BG3 Mod Manager** es el core: importa los mods .pak, te deja ordenar el load order con control fino, y exporta el resultado al archivo que el juego lee al arrancar.

Cuando un mod pide más que cambios de datos, entra **Baldur's Gate 3 Script Extender**: el runtime hook que habilita la lógica real de los mods avanzados, instalable desde el propio BG3 Mod Manager. Si tus mods agregan razas o clases, **ImpUI** estabiliza la interfaz para que esas opciones aparezcan sin romper la UI, y **Mod Configuration Menu** junta los settings de todos tus mods compatibles en un único panel dentro del juego.

Atravesando todo el proceso está la **BG3 Modding Community Wiki**: la guía de load order y los tutoriales de instalación que evitan los crashes silenciosos del novato. Es la referencia que conviene tener abierta mientras armas el setup.

## Por qué estas seis

- **Gestión y fuente** → BG3 Mod Manager + Nexus Mods: dónde conseguir los mods y cómo ordenarlos.
- **Frameworks base** → Script Extender + ImpUI + Mod Configuration Menu: la infraestructura de la que dependen los mods avanzados.
- **Documentación** → BG3 Modding Community Wiki: el manual que explica el porqué detrás de cada paso.

## Cierre

La clave del stack es la complementariedad: cada pieza cubre una capa distinta del workflow, y juntas convierten el modding de BG3 de un proceso frágil en un setup estable y mantenible. Empieza con el gestor y el hub, suma los frameworks solo cuando un mod los pida, y apóyate en la wiki ante cualquier duda de orden. Cada herramienta tiene su análisis completo en el codex.
