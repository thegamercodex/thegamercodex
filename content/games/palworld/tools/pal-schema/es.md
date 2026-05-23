---
title: PalSchema
description: Mod que permite modificar data tables y blueprints de Palworld vía archivos JSON, evitando conflicts entre mods que tocan la misma data.
quickTake: La segunda dependencia más común después de UE4SS. Si vas a usar mods de balance, stats de Pals, recipes o cualquier ajuste de data, casi seguro vas a necesitarlo. Convive bien con otros mods PalSchema.
---

## Qué es

PalSchema es un mod open-source mantenido por Okaetsu que corre sobre UE4SS y permite modificar las data tables y blueprints de Palworld usando archivos JSON declarativos. La gracia del enfoque JSON es que **dos mods que cambian la misma data table pueden coexistir sin conflict** — PalSchema mergea los cambios en lugar de sobrescribir el archivo entero. Esto es enorme para una escena de modding sana.

## Qué problema resuelve

Modificar Palworld a la vieja escuela implica editar .pak files binarios, lo cual:
- Requiere herramientas de unpacking/packing complejas.
- Es difícil de versionear (binario, no diff-able).
- Genera conflicts catastróficos cuando dos mods tocan el mismo archivo (el segundo en cargar gana, el primero queda muerto).

PalSchema reemplaza eso con archivos JSON que se mergean al cargar, dejando que múltiples mods convivan.

## Diferenciación

En la escena de Palworld, PalSchema es prácticamente el único framework "data mod" decente que existe. Algunos modders todavía publican mods .pak crudos por inercia o porque modifican algo que PalSchema no cubre, pero la mayoría migró. Recient updates agregaron soporte de TMap properties, enum values, y carga de .pak files desde dentro del mod folder (útil para mods híbridos).

## Para qué la usa la gente

- **Mods de balance**: ajustar stats de Pals, tweaks de drop rates, modificar XP curves.
- **Mods de recipes**: agregar items nuevos, cambiar requisitos de crafting.
- **Mods de spawn tables**: agregar Pals nuevos a zonas existentes.
- **Mods híbridos low-conflict**: layer de JSON + assets en .pak files dentro del mismo folder.

## Para quién NO es esta herramienta

Si no vas a desarrollar mods ni instalar mods de balance/data, no lo necesitas. PalSchema es una dependencia que se instala porque algún otro mod lo requiere.

Si vas a hacer mods de mesh/textures/animations (visuales), PalSchema no es lo que quieres — esos siguen siendo .pak files crudos. Pero puedes combinarlo (PalSchema para data + .pak para assets).

## Cómo se usa en la práctica

**Como usuario (instalar mods)**:
1. Tener UE4SS Palworld-compatible ya instalado.
2. Bajar PalSchema desde el GitHub releases o desde Nexus Mods (entry 2361).
3. Descomprimir bajo `Pal/Binaries/Win64/Mods/PalSchema/`.
4. Para cada mod PalSchema, copiar su folder dentro de `Mods/PalSchema/Mods/<NombreDelMod>/`.

**Como modder (desarrollar)**:
1. Documentación oficial en okaetsu.github.io/PalSchema/.
2. Schema JSON con autocompletion en VS Code via JSON schema reference.
3. Iterar cambios sin restartear el juego (recarga las tablas en vivo).

## Limitaciones honestas

- **No cubre 100% del juego**: ciertas propiedades del engine siguen requiriendo .pak edits crudos. La cobertura crece con cada release pero no es total.
- **Aún en active development**: breaking changes ocasionales entre versiones grandes. Leer changelog antes de actualizar.
- **Documentación incompleta**: los docs cubren los casos comunes; para edge cases hay que mirar issues del GitHub o preguntar en Discord.
- **Requiere UE4SS Palworld-compatible**: misma trampa de versiones, ver entrada de UE4SS para detalles.

## Cómo empezar

Instalar primero UE4SS Palworld-compatible. Después, bajar PalSchema del repo en GitHub. Descomprimir bajo `Pal/Binaries/Win64/Mods/PalSchema/`. Confirmar carga: abrir Palworld, UE4SS console debe mostrar logs de PalSchema iniciando. A partir de ahí cualquier mod PalSchema-compatible se instala drag-and-drop en el `PalSchema/Mods/` folder.
