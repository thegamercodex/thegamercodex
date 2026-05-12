---
title: "Address Library for SKSE Plugins"
description: "Librería que mapea direcciones de memoria de Skyrim a IDs estables, permitiendo que SKSE plugins funcionen entre versiones del juego sin recompilar."
quickTake: "Mod dependency invisible: si no la tienes, la mitad de los SKSE plugins de tu modlist no cargan. Instala y olvídate — solo existe para hacer que otros mods funcionen."
---

## Qué es

Address Library for SKSE Plugins es una librería de soporte mantenida por meh321 y la comunidad. Distribuida vía Nexus (`nexusmods.com/skyrimspecialedition/mods/32444`) y GitHub. Es una dependency obligatoria para cientos de SKSE plugins modernos.

Funcionalmente: provee un mapping entre direcciones de memoria absolutas en `SkyrimSE.exe` y IDs estables que los plugins pueden usar. Esto permite que un SKSE plugin compilado contra una versión de Skyrim siga funcionando cuando Bethesda lanza una actualización — el plugin pide el ID, la librería resuelve la dirección actual.

Sin la librería, cada SKSE plugin tendría que recompilarse después de cada Bethesda update. Con ella, muchos siguen funcionando porque el ID es estable aunque la dirección cambie.

## Qué problema resuelve

Antes de Address Library, el ecosistema SKSE era frágil: Bethesda actualizaba Skyrim, el binary cambiaba direcciones internas, todos los SKSE plugins (DLLs en C++) se rompían hasta que cada autor recompilaba.

Con Address Library:
- meh321 (y la comunidad) actualizan el database de IDs después de cada Bethesda update.
- Los plugin authors usan IDs en lugar de direcciones hardcoded.
- Cuando Bethesda updatea, los authors no recompilan — solo necesitas el database actualizado.

Esto bajó drásticamente la fragilidad. Plugins viejos pueden seguir funcionando años después de su última release oficial.

## Diferenciación

Frente a **VR Address Library**: VR Address Library es la versión equivalente para Skyrim VR. Mismo concepto, distinto database. Si juegas VR, esa es la que necesitas.

Frente a **CommonLibSSE-NG**: CommonLibSSE-NG es un framework de programming completo para SKSE plugins. Address Library es parte de su infrastructure — un plugin que usa CommonLibSSE-NG indirectamente usa Address Library.

Frente a **hard-coded address offsets**: la alternativa antigua. Solo funcionaba para versión exacta del juego. Después de un update, ruptura inmediata.

## Para qué la usa la gente

**Habilitar SKSE plugins modernos**: cientos de mods modernos requieren Address Library en su pre-requisites. Sin ella, el plugin no carga (mensaje en log: "address library not found").

**Future-proofing modlist**: tener Address Library instalado significa que cuando Bethesda updatea Skyrim, la mayoría de tu modlist sigue funcionando una vez que el database se actualice.

**Soporte a CommonLibSSE-NG plugins**: cualquier mod basado en CommonLibSSE-NG (la mayoría de plugins recientes) la requiere indirectamente.

## Para quién NO es esta herramienta

Si solo vas a usar mods que no son SKSE plugins (texture packs, ESP-only mods), no necesitas Address Library.

Si solo modeás Skyrim VR, asegúrate de usar VR Address Library en lugar de la SE/AE.

Pero realmente: si modeás Skyrim al nivel de tener SKSE instalado, la respuesta es siempre "instalala, no hace daño".

## Cómo se usa en la práctica

1. Baja Address Library desde Nexus (`nexusmods.com/skyrimspecialedition/mods/32444`).
2. La página de Nexus tiene **dos archivos**: uno para SE 1.5.97 ("All in one") y otro para AE/1.6+ ("Anniversary Edition"). Elige según tu versión exacta de Skyrim.
3. Instala como cualquier otro mod en MO2/Vortex.
4. Actívalo. Listo.

No hay configuración, no hay UI. La librería simplemente está presente cuando otros plugins la pidan.

## Limitaciones honestas

**Wrong version**. Si instalas la versión de SE 1.5.97 cuando tienes AE/1.6.x, todos los plugins fallan. Verifica tu versión de Skyrim primero.

**Updates necesarios después de Bethesda patches**. Cuando Bethesda lanza un patch, meh321 publica una versión actualizada del database. Hay un delay (a veces horas, a veces días).

**No es un mod visible**. Esto puede ser confuso para users nuevos: instalas Address Library y no pasa nada visualmente. Su trabajo es habilitar otros mods.

**Conflicts con versiones múltiples**. Si tienes tanto la SE como la AE version instalada por error, los plugins pueden levantar la equivocada. Manten solo la matching.

## Cómo empezar

1. Verifica tu versión de Skyrim (en Steam → Properties → Local Files).
2. En la página de Nexus, elige "All in one" si tienes SE 1.5.97 o "Anniversary Edition" si tienes 1.6+.
3. Instala vía MO2/Vortex con "Mod Manager Download".
4. Actívala — la posición en load order no importa porque es un SKSE plugin (carga separado del .esp system).
5. Verifica que funciona: instala un SKSE plugin que la requiera (ej: SkyUI o Powerofthree's Tweaks). Si carga sin warnings, Address Library está bien.

Es uno de los mods más fáciles de instalar y uno de los más importantes en una modlist moderna.
