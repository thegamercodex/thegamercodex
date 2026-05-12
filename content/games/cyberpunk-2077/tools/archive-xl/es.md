---
title: "ArchiveXL"
description: "Framework que permite cargar archives custom en Cyberpunk 2077 sin reemplazar los del juego, evitando conflicts entre mods."
quickTake: "Antes de ArchiveXL, agregar un asset nuevo significaba sobrescribir uno existente — los mods chocaban entre sí. ArchiveXL deja que múltiples mods agreguen assets paralelos sin pisarse. Es el SKSE de los archives."
---

## Qué es

ArchiveXL es un framework open-source (MIT) mantenido por psiberx, hermano gemelo de TweakXL. Mientras TweakXL modifica datos lógicos (stats en TweakDB), ArchiveXL maneja los assets físicos: meshes, texturas, animations, sounds. Plugin de RED4ext, depende de él.

Lo singular es que ArchiveXL permite **extender** en lugar de **reemplazar**: los modders pueden agregar items nuevos al juego con sus propios archives sin sobrescribir archivos vanilla. Eso elimina la mayor fuente de conflicts entre mods de los años pre-XL.

## Qué problema resuelve

Antes de ArchiveXL, agregar un arma nueva al juego implicaba un trade-off mal: el mod podía:
1. Sobrescribir un archive vanilla (rompiendo otros mods que también lo modificaban).
2. Crear un nuevo `.archive` pero sin manera limpia de registrarlo (el juego no carga archives arbitrarios sin que el modder hackée el load order).

ArchiveXL resuelve esto exponiendo una API que registra archives custom en la lista que el juego carga. Cada mod aporta su propio archive, ArchiveXL los ordena y mergea, no hay overwrites de vanilla.

Resultado: 50 mods de armas pueden coexistir, cada uno con sus assets en archives separados, sin chocarse.

## Diferenciación

Frente a **TweakXL**: TweakXL modifica datos (stats); ArchiveXL agrega assets físicos. Para un mod completo que agrega "Sword Excalibur" al juego: ArchiveXL aporta el modelo 3D + textura, TweakXL registra "Items.Excalibur" en TweakDB con stats. Complementarios.

Frente a **REDmod**: REDmod oficial tiene su propio sistema de archive merge, pero más limitado. ArchiveXL es comunitario, mucho más flexible — soporta dynamic appearance (vincular variantes de outfit por gender/body type), extension de equipment slots, y otros features avanzados que REDmod no.

Frente a **WolvenKit**: WolvenKit crea los archives (authoring); ArchiveXL los carga (runtime). Los dos se necesitan para mods de assets nuevos.

## Para qué la usa la gente

**Como dependency de mods de items**: cuando instalas un mod de "Cyber Katana" o "Stealth Outfit Pack", ArchiveXL casi siempre está en el requirements. Lo instalas una vez y queda como infrastructure.

**Para crear mods de items custom**: si tu mod agrega armas, ropa, vehículos, o cualquier asset visible, ArchiveXL se encarga del loading. Combinas con WolvenKit (para construir el asset) y TweakXL (para registrar el item).

**Para extender variantes de outfits**: una feature poderosa de ArchiveXL es agregar variantes de un mismo outfit por gender o body type sin duplicar el item. Era complicado lograrlo antes.

**Para evitar conflicts en mod-heavy installs**: si tienes 30+ mods de items instalados, ArchiveXL es lo que mantiene tu juego estable. Sin él, cualquier dos mods que tocaran el mismo slot vanilla se romperían.

## Para quién NO es esta herramienta

Si solo juegas mods sin crearlos, ArchiveXL es invisible. Lo instalas cuando lo pide un mod.

Si tu mod solo cambia stats sin agregar assets, ArchiveXL no aporta — TweakXL solo es suficiente.

Si tu mod es un texture replacement directo de un asset vanilla (HD Reworked Project, por ejemplo), no necesitas ArchiveXL — los mods de texture viejos siguen funcionando overwrieting archives directamente. ArchiveXL es para **agregar** assets, no para **reemplazarlos**.

## Cómo se usa en la práctica

Como user final:
1. Bajas ArchiveXL desde Nexus o `github.com/psiberx/cp2077-archive-xl/releases`.
2. Extraes en `red4ext\plugins\ArchiveXL\` dentro del folder del juego.
3. Abres el juego una vez. ArchiveXL inicializa silently — verificas logs en `red4ext\logs\` que cargó OK.
4. Después de eso, mods que listen "Requires ArchiveXL" pueden instalarse normalmente.

Como mod author:
1. Creas tu archive con WolvenKit conteniendo los assets nuevos.
2. Agregas un archivo `.xl` (formato propio de ArchiveXL) que describe cómo registrar el archive — qué slots ocupa, qué appearance variants, etc.
3. Empaquetas tu mod con el archive + el `.xl` y lo distribuyes.
4. El user lo instala en `archive\pc\mod\` y ArchiveXL hace lo demás.

## Limitaciones honestas

**Requiere conocer schemas internos**. Para escribir `.xl` files correctamente, necesitas entender cómo Cyberpunk maneja slots, appearance graphs, y entity resolution. No es trivial.

**Sintaxis YAML similar a TweakXL, pero diferente schema**. Si ya sabes TweakXL, ArchiveXL es menos curva, pero los keys y values son específicos del subsistema de archives.

**Updates necesarios post-patch del juego**. Como depende de RED4ext, los patches del juego pueden romper temporariamente. Espera 24-72h post-patch para release compatible.

**Sin GUI dedicado**. No hay editor visual para crear `.xl` files. Escribes a mano siguiendo ejemplos. Para users no técnicos, eso es barrera.

**Documentación dispersa**. La wiki oficial (`github.com/psiberx/cp2077-archive-xl/wiki`) cubre lo básico, pero ejemplos avanzados viven en mods comunitarios. Aprender requiere leer código de mods existentes.

## Cómo empezar

Como user: instálalo cuando un mod lo pida. No requiere config previa.

Como creator:
1. Asegúrate primero de tener manejo de WolvenKit — sin habilidad para crear archives, ArchiveXL no aporta.
2. Lee la wiki: `github.com/psiberx/cp2077-archive-xl/wiki` cubre formato `.xl` y ejemplos básicos.
3. Estudiá un mod existente: baja uno que agregue items y abre su `.xl` para ver cómo registra los assets.
4. Empieza con un mod minimal — agregar un solo item con variants básicas. Después extiendes.
5. El Discord del Modding Community es donde se resuelven los problemas reales — la wiki es buen starting point, pero los casos edge se resuelven en chat.

Tip: si vas a crear un mod de items, casi siempre necesitas los tres frameworks juntos — RED4ext, ArchiveXL, TweakXL. Verifica que tu mod liste todos como dependencies cuando lo publiques.
