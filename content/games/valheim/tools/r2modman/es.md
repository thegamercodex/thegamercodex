---
title: "r2modman"
description: "Mod manager open-source para Thunderstore. Instala, actualiza y aísla modlists de Valheim en profiles independientes, sin tocar la carpeta del juego."
quickTake: "Para arrancar a modear Valheim hoy, r2modman es la opción por defecto: instala BepInEx automáticamente, resuelve dependencias del catálogo de Thunderstore y separa cada modlist en un profile para que puedas probar sin romper tu mundo actual."
---

## Qué es

r2modman es un mod manager open-source (MIT) creado por ebkr, originalmente para Risk of Rain 2 (de ahí el "r2"). Hoy soporta más de 150 juegos que viven en el ecosistema Thunderstore, incluyendo Valheim, Lethal Company, REPO y un puñado de survival/co-op modernos.

Es la herramienta por defecto que recomienda la comunidad de Valheim cuando alguien pregunta "cómo empiezo a modear". Funciona en Windows, Linux y macOS, tiene una build oficial standalone (no requiere Overwolf ni cuenta) y se mantiene activa.

## Qué problema resuelve

Modear Valheim manualmente significa:

1. Descargar BepInEx, desempaquetarlo en la carpeta del juego.
2. Por cada mod, descargar el .zip, leer las instrucciones, mover DLLs a `BepInEx/plugins/`.
3. Si dos mods dependen de versiones distintas de Jotunn, romperse y debuggear.
4. Si quieres probar otra modlist, copiar la carpeta del juego entera o revertir a mano.

r2modman elimina cada paso:
- BepInEx se instala automáticamente la primera vez que activas un mod.
- Mods se descargan desde el catálogo de Thunderstore con un click.
- Las dependencias se resuelven solas — si un mod necesita Jotunn 2.x, r2modman lo descarga.
- Cada **profile** es una modlist independiente. Switchas entre "vanilla", "co-op con amigos" y "QoL solo" sin reinstalar nada.

## Diferenciación

Frente a **Thunderstore Mod Manager**: TMM es la versión "oficial" de Overwolf — más amigable pero requiere instalar Overwolf y crear cuenta. r2modman es standalone, abre más rápido y no te trackea. La mayoría de la comunidad veterana prefiere r2modman.

Frente a **Gale**: Gale es más moderno (Svelte + Tauri) y más rápido, pero r2modman tiene más años de uso real y resuelve casos extremos mejor. Si Gale rompe con un mod específico, la gente vuelve a r2modman.

Frente a **instalación manual**: control absoluto pero no escala. Con 5+ mods se vuelve frágil.

## Para qué la usa la gente

**Modlist QoL** — instalar 10-15 mods de quality of life (Craft from Containers, ValheimRAFT improvements, EquipmentAndQuickSlots) sin pensar dos veces.

**Servidor con amigos** — exportar el profile entero, compartirlo, y todos cargan exactamente los mismos mods. r2modman incluye export/import con códigos compartibles.

**Probar mods agresivos** — crear un profile aparte para experimentar con Epic Loot, Therzie's monsters, Better Trader, etc. sin contaminar el mundo principal.

**Múltiples mundos / múltiples patches** — cuando Iron Gate lanza un parche y los mods tardan en actualizar, mantener un profile en la versión vieja del juego y otro vacío para vanilla actual.

**Backup limpio** — los profiles viven en `%APPDATA%/r2modmanPlus-local/`. Si algo rompe, puedes borrar el profile y recrearlo sin tocar la instalación de Valheim.

## Para quién NO es esta herramienta

Si modeas un juego que NO está en Thunderstore (Skyrim, Cyberpunk 2077, etc.): r2modman no te sirve. Para esos, Vortex o MO2 son la respuesta.

Si quieres un mod específico que solo existe en Nexus Mods y nunca fue subido a Thunderstore: vas a tener que instalarlo manualmente igual. r2modman no descarga de Nexus.

Si te incomodan los profiles y solo quieres 2-3 mods siempre activos: cualquier mod manager funciona; el valor de r2modman se nota al pasar de 10 mods o cuando manejas más de una modlist.

## Cómo se usa en la práctica

1. Descarga r2modman desde su página de Thunderstore (`thunderstore.io/c/valheim/p/ebkr/r2modman/`) o desde su GitHub.
2. Ejecuta el installer (.exe en Windows, AppImage en Linux, .dmg en macOS).
3. Al primer lanzamiento, selecciona "Valheim" del listado de juegos. r2modman detecta la instalación de Steam automáticamente; si no, le indicas la ruta.
4. Crea un profile (ej: "Co-op survival").
5. En la pestaña "Online", busca mods por nombre o categoría. Click "Download" en cada uno.
6. Cuando estés listo, click "Start modded" arriba a la derecha. r2modman instala BepInEx + los mods en la carpeta del juego al lanzar.
7. Para volver a vanilla, cierra r2modman y lanza Valheim normal desde Steam — los mods solo se inyectan vía r2modman.

## Limitaciones honestas

**Solo Thunderstore**. Mods que viven exclusivamente en Nexus o GitHub raw no se descargan. Para esos, instalación manual sobre el profile de r2modman es posible pero rompe la promesa de un click.

**UI funcional pero no pulida**. Es Electron con su look genérico. Cumple, no enamora.

**Updates de mods rompen profiles ocasionalmente**. Cuando un mod sube una nueva versión con breaking changes y otro mod aún depende de la versión vieja, r2modman intenta resolver pero a veces te toca ajustar manualmente la versión. Lock files no existen.

**No soporta dedicated server mods directamente**. Para modear un servidor dedicado de Valheim, hay que copiar los mods manualmente al server. r2modman no automatiza eso (aunque puedes usar su profile como source).

## Cómo empezar

1. Anda a `thunderstore.io/c/valheim/p/ebkr/r2modman/` y descarga el installer para tu OS.
2. Instala y abre.
3. Selecciona "Valheim".
4. Crea un profile "Survival QoL" (o el nombre que quieras).
5. Como primer mod, instala **BepInExPack Valheim** (aparece como dependencia automática igual, pero conviene confirmar que está). Busca "BepInExPack" en Online.
6. Agrega **Jotunn** (dependencia de muchos mods importantes).
7. Prueba un mod chico tipo "Auto Pickup", "Smart Containers" o "Craft From Containers".
8. Click "Start modded" y verifica que el juego abre con la pantalla de BepInEx mostrando los mods cargados en la consola.

Si necesitas guías visuales, el wiki de r2modman en `r2modman.net` y la docu de Thunderstore (`thunderstore.io/wiki/`) cubren los casos comunes.
