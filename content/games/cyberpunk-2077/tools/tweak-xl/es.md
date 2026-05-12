---
title: "TweakXL"
description: "Framework de modding que permite modificar TweakDB, la base de datos interna de Cyberpunk 2077 con stats de items, perks y entidades del juego."
quickTake: "Mods que rebalancean economy, perks, daño de armas o stats de items casi siempre usan TweakXL bajo el hood. Es invisible para el user final, esencial para creadores de mods de balance."
---

## Qué es

TweakXL es un mod de Cyberpunk 2077 mantenido por psiberx (GitHub) que permite modificar TweakDB — la base de datos propietaria de REDengine 4 que contiene información esencial sobre items, weapons, perks, cyberware, NPCs y enemigos. Open-source (MIT), depende de RED4ext.

TweakDB tradicionalmente solo se podía editar buildeando un mod entero con scripts. TweakXL expone una interfaz declarative que permite agregar, modificar o eliminar entradas de TweakDB usando archivos YAML simples — el creator de mods especifica qué cambia y cómo, TweakXL aplica los cambios en runtime sin tocar archives del juego.

## Qué problema resuelve

Cyberpunk 2077 centraliza datos críticos en TweakDB: weapon DPS, perk effects, item stats, vendor inventories, etc. Cambiar uno de esos requiere comprehensión del schema de TweakDB y, antes de TweakXL, tocar archives binarios — process invasivo, no compartible entre mods.

TweakXL hace dos cosas:
1. Permite definir tweaks en archivos YAML legibles (en lugar de binarios).
2. Resuelve conflictos entre múltiples mods que modifican la misma entrada (last-write-wins con merge semantics).

Eso habilita un ecosistema sano de mods de balance: el creator escribe YAML, TweakXL hace el patching en runtime, conflictos se manejan declarativamente.

## Diferenciación

Frente a **ArchiveXL**: TweakXL modifica datos lógicos (stats, entries de DB); ArchiveXL agrega assets físicos (meshes, textures, sound files). Suelen usarse juntos: si vas a agregar un arma nueva, ArchiveXL aporta el modelo 3D y TweakXL registra el item con sus stats en TweakDB. Son complementarios, no alternativos.

Frente a **CET**: CET puede modificar TweakDB en runtime via Lua, pero requiere scripts custom. TweakXL es declarativo (YAML, sin scripting), mucho más simple para changes que no necesitan lógica.

## Para qué la usa la gente

**Como dependency de mods de balance**: cuando instalas un mod que rebalanea perks (ej: "New Game+ Balance Mod"), casi siempre TweakXL está como pre-requisito. El user final no interactúa, solo lo instala.

**Para escribir mods propios de balance**: si quieres cambiar el daño de un arma específica, los stats de un cyberware, o los prices de un vendor, escribes YAML para TweakXL y listo — sin compilar scripts ni tocar binarios.

**Para agregar items nuevos al juego**: combinando TweakXL (registra el item en TweakDB) con ArchiveXL (carga assets) y WolvenKit (crea los assets), se pueden agregar items completamente nuevos.

**Para experimentar con stats sin compromiso**: porque TweakXL aplica changes en runtime sin tocar archives, puedes probar variantes, deshacer un tweak, o ajustar valores sin reinstalar nada.

## Para quién NO es esta herramienta

Si solo juegas mods sin crearlos, TweakXL es dependency invisible. Lo instalas cuando un mod lo requiere y nunca más interactúas.

Si tu mod solo agrega assets visuales (texturas, meshes) sin tocar stats, no necesitas TweakXL — ArchiveXL alcanza.

Si tu mod requiere lógica condicional (ej: "este perk solo aplica si tienes esta arma equipada"), TweakXL no expone ese nivel — necesitarías Codeware o redscript directo.

## Cómo se usa en la práctica

Como user final:
1. Bajas TweakXL desde Nexus o `github.com/psiberx/cp2077-tweak-xl/releases`.
2. Extraes en la carpeta del juego — TweakXL es plugin de RED4ext, así que va en `red4ext\plugins\TweakXL\`.
3. Abres el juego una vez para verificar que carga. TweakXL log queda en `red4ext\logs\` — verifica ahí que se inicializó OK.
4. A partir de ahí, cualquier mod que liste "Requires TweakXL" puede instalarse.

Como mod author:
1. Crear archivo YAML siguiendo la sintaxis documentada (`github.com/psiberx/cp2077-tweak-xl/wiki`).
2. Especificas qué entradas de TweakDB modificas: ej `Items.Preset_Lexington_Default.damage: 250` (nombres reales son largos y específicos).
3. Empaquetas el YAML en tu mod y lo distribuyes — el user lo coloca en la carpeta de TweakXL y los tweaks se aplican al next launch.

## Limitaciones honestas

**Requiere conocer schema de TweakDB**. Los nombres de entradas (`Items.Preset_Lexington_Default`) no están documentados oficialmente. Modders descubren los keys via WolvenKit (TweakDB browser) o por inspección de mods existentes.

**No expone lógica condicional**. Si tu balance change depende del state del juego (level del player, quest progress), TweakXL solo no alcanza — tienes que combinarlo con CET/redscript.

**Conflicts entre mods**. Si dos mods modifican la misma entrada de TweakDB, gana el último cargado. No hay merge inteligente para valores numéricos — es overwrite puro. Resolver conflicts requiere editar manualmente los YAMLs.

**Updates necesarios post-patch**. Como depende de RED4ext, cuando RED4ext se actualiza por un patch del juego, TweakXL puede necesitar update propio. Espera ventana de 24-72h.

**Documentación dispersa**. Sintaxis YAML cubierta en la wiki de GitHub, pero los ejemplos prácticos viven en mods de terceros. Aprender requiere leer código de mods existentes.

## Cómo empezar

Como user final: lo instalas cuando lo pide otro mod. No requiere config previa.

Como creador:
1. Lee `github.com/psiberx/cp2077-tweak-xl/wiki` — sintaxis YAML, ejemplos básicos.
2. Mira un mod simple existente en Nexus (ej: un balance tweak menor) y abre su YAML para ver la estructura.
3. Empieza con un tweak trivial (cambiar un único damage value) y verifica in-game que aplicó.
4. Itera: agregas más entries, pruebas conflicts, mantienes un sistema de versionado de tu YAML.
5. Cuando estés listo para distribuir, lee la wiki section de packaging — es importante para que el mod cargue OK en instalaciones diversas.
