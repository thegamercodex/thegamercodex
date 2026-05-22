---
title: "Valheim Plus (Grantapher fork)"
description: "Mega-mod de calidad de vida que agrupa cientos de toggles configurables en un solo archivo de configuración. Originalmente abandonado, hoy mantenido por la comunidad bajo el fork de Grantapher."
quickTake: "V+ es la opción 'todo en uno' clásica: un mod, un config file, decenas de QoL activadas con un toggle. Conviene si quieres una experiencia QoL coherente; en 2026 muchos players ya prefieren mods atómicos y enfocados."
---

## Qué es

Valheim Plus fue originalmente un proyecto de **nx 0.30** (su desarrollador), lanzado en 2021, que agrupaba cientos de cambios de calidad de vida y balance en un solo mod configurable. Cubría desde inventory weight hasta build snapping, multiplayer slot count, durabilidad y crafting times.

El proyecto fue **abandonado a fines de 2022**. Para no perder años de trabajo, **Grantapher** lo forkeó y mantuvo activo bajo el nombre `ValheimPlus_Grantapher_Temporary`. Lo "Temporary" del nombre quedó como ironía — el fork lleva más años activo que el proyecto original. Hoy es **el V+ vigente** y el único que recibe updates para nuevos patches de Iron Gate.

## Qué problema resuelve

Cuando Valheim era nuevo (2021), muchas decisiones de diseño se sentían restrictivas: stamina muy alta, inventory muy chico, build snapping rígido, server cap de 10 players, etc. La comunidad pedía cambios y V+ los entregó **todos juntos**: un solo `valheim_plus.cfg` con decenas de secciones.

Para alguien que quería arrancar a modear sin filosofía, V+ era la respuesta: instalas, ajustas 5-10 toggles, juego mejorado. Para servers, era más simple aun — el mod se distribuía a clientes/server con la misma config.

En 2026, muchos de los cambios que V+ traía ya están en vanilla (food slots, food balance, smelter levels, etc.) o vienen mejor servidos por mods atómicos enfocados. V+ sigue siendo útil pero su rol cambió: ya no es la respuesta universal, es una opción más entre muchas.

## Diferenciación

Frente a **mods atómicos modernos** (Smoothbrain mods, Azumatt suite, etc.):
- V+ es un solo mod con muchas features; mods atómicos son uno por feature.
- V+ require menos clicks para instalar 50 cambios; con atómicos eliges solo lo que quieres.
- Si un toggle de V+ choca con otro mod, debuggear es más complicado porque V+ es monolítico; atómicos son aislables.
- La comunidad veterana en 2026 prefiere atómicos por flexibilidad. Players nuevos arrancan más rápido con V+.

Frente a **vanilla**: vanilla en 2026 ya incorporó muchas QoL que V+ pioneó. Pero V+ todavía agrega cosas no-vanilla: build snapping avanzado, server slot expansion, modificadores de XP, etc.

## Para qué la usa la gente

**Single-player con cambios coherentes** — alguien que quiere un set predefinido de QoL toggleables sin elegir 15 mods atómicos.

**Server admin de un grupo de amigos** — un solo .cfg para compartir, un solo mod en cada client. Más fácil de mantener que 20 mods atómicos sincronizados.

**Configs específicas del grupo** — el .cfg de V+ permite expandir player cap a 16+ (con caveats), ajustar damage scaling con cantidad de players, modificar stamina drain, etc. Para grupos co-op con preferencias específicas, V+ es rápido de configurar.

**Players que vienen de servers V+ existentes** — comunidades enteras de Valheim corrieron en V+ por años. Si te unes a una, vas a tener V+ instalado.

**Backup de mecánicas que vanilla cambió**. Iron Gate ajusta balance con cada patch. Si te gustaba un comportamiento que vanilla rebalanceó (ej: stamina drain del 0.215.x), V+ puede emularlo.

## Para quién NO es esta herramienta

Si quieres **control fino sobre cada cambio**: V+ es monolítico. Aunque tiene cientos de toggles, muchos están bundled — desactivar uno puede no ser posible sin desactivar features relacionadas. Mods atómicos te dan granularidad.

Si tu modlist ya tiene **muchos mods atómicos**: V+ puede chocar con ellos. Cada player de la comunidad atómica te va a decir "saca V+ y elige los mods que quieres".

Si te incomoda el **"Temporary" en el nombre**: el fork lleva años activo y Grantapher es transparente sobre el commitment al mantenimiento. Pero hay quien no se siente cómodo con un fork "temporal" como dependencia core.

Si juegas **multiplayer público vanilla**: V+ es un mod cliente-server obligatorio. No te puedes conectar a un server vanilla con V+ activado, y viceversa.

## Cómo se usa en la práctica

1. Instala vía r2modman/Gale/TMM. Busca "ValheimPlus Grantapher" en el catálogo.
2. El mod manager instala BepInEx + V+ automáticamente.
3. Lanza Valheim una vez para generar el `valheim_plus.cfg` en `BepInEx/config/`.
4. Cierra el juego. Abre el .cfg con cualquier editor de texto.
5. Cada sección tiene `[Section]` + toggles y números configurables. Comentarios `#` explican qué hace cada uno.
6. Ajusta lo que quieres (ej: `inventory.maximumSlots = 10` por fila, `multiplayer.maxPlayers = 16`).
7. Guarda. Lanza el juego.
8. Para servers compartidos: el config debe **matchear** entre clients y server. Si no, V+ refuse to connect con un error claro.

## Limitaciones honestas

**Aplicabilidad parcial**. Algunos toggles de V+ están **outdated** por cambios en vanilla. La docu del fork intenta mantenerse al día pero hay items en el .cfg que ya no hacen nada o hacen algo distinto al esperado.

**Fork comunitario**. Grantapher es solo. Si pierde interés o tiempo, el fork puede pausarse. Hoy está activo pero no hay garantía de continuidad.

**Conflicts con mods modernos**. Mods atómicos populares (Therzie's, Smoothbrain, etc.) asumen que V+ no está. Cuando ambos modifican la misma mecánica, los resultados son impredecibles.

**No es un mod 'instalar y olvidar'**. El .cfg tiene cientos de líneas. Aunque vienen con defaults razonables, si no lees qué hace cada toggle, vas a tener cambios sutiles que no entiendes.

**Requiere matching client-server**. En multiplayer, si tu server corre V+ con cierta config y un client tiene otra, no conectan. Para grupos pequeños no es problema; para servers públicos es overhead.

## Cómo empezar

1. Instala r2modman, Gale o TMM.
2. Busca "ValheimPlus_Grantapher_Temporary" en el catálogo y descargalo.
3. Lanza Valheim una vez con V+ activado para generar el config.
4. Cierra. Abre `BepInEx/config/valheim_plus.cfg`.
5. Empieza con cambios chicos: aumentar inventory rows a 6, activar build snapping mejorado, ajustar stamina drain a tu gusto. Cada toggle viene comentado con su efecto.
6. Lanza el juego de nuevo y testea.
7. Para servers: el .cfg del server debe coincidir con el .cfg que cargan los clients.

Para guías de qué togglear primero, el GitHub del fork (`github.com/Grantapher/ValheimPlus`) y la wiki del proyecto original cubren los casos clásicos.
