---
title: "light.gg"
description: "Base de datos web de armas, armaduras, perks y mods de Destiny 2 con god rolls votados por la comunidad."
quickTake: "El primer sitio que abres cuando dropea un arma nueva. Los god rolls de light.gg son la wisdom-of-crowds del meta de Destiny 2: imperfectos pero útiles para no descartar piezas valiosas por accidente."
---

## Qué es

light.gg es la base de datos web más usada para armas y armaduras de Destiny 2. Cada item del juego tiene su página con stats completas, lista de perks por columna, y los **god rolls votados por la comunidad** para PvE y PvP. Free, sin login obligatorio, monetizada por ads.

Activa desde 2017 — el sitio creció como referencia rápida del weapon pool y mantiene esa identidad después de casi una década. No es open-source, no documenta su backend, pero la base de datos se actualiza típicamente el día del patch.

## Qué problema resuelve

Cuando una nueva arma drop, no hay manera de saber si tu roll es bueno desde dentro del juego. Destiny 2 muestra los perks pero no qué combinación es meta, ni cómo se compara con otras del mismo arquetipo. light.gg responde esa pregunta en 30 segundos: abres la página del arma, ves los god rolls votados, comparas con tu roll, decides quedarte o desensamblar.

También resuelve el problema de buscar perks específicos: "qué scout rifles tienen Rapid Hit + Kill Clip" se contesta con el filtro de búsqueda. Útil cuando buscas reemplazar un arma que sunsetearon o que ya no dropea.

## Diferenciación

Frente a D2 Foundry (la alternativa más reciente), light.gg gana en **cobertura del catálogo** (todo el contenido vigente, vendor rolls incluidos) y **god rolls comunitarios** (el voto de la comunidad pesa). D2 Foundry gana en **simulación matemática** (TTK, daño escalado, comparativas precisas).

La regla práctica: light.gg para "qué perks busco", D2 Foundry para "cuánto daño hace contra X enemigo". Los dos en flujo complementan.

Frente a la wiki o destinypedia, light.gg es más rápido y mejor diseñado para la pregunta concreta "este roll es bueno?". La wiki cubre lore y catálogo enciclopédico; light.gg está optimizado para decisiones in-game.

## Para qué la usa la gente

**Appraise un drop**: pegas el item en la página correspondiente, ves cómo se compara contra el god roll comunitario. Verde = mantener, rojo = shard.

**Buscar god rolls antes de farmearlos**: Filtras por activity (Trials, Iron Banner, raid X) y ves qué armas worth chasing tienen rolls que se complementan con tu build.

**Comparar arquetipos**: la página de cada arma muestra archetype averages. Útil para decidir entre dos hand cannons aggressive frame con perks similares.

**Ver vendor rolls**: cuando Banshee, Xur o un vendor rotan inventario, light.gg suele tener los rolls listados antes de que abras el juego.

**Buscar por perk**: filtro de búsqueda permite "todas las armas que pueden dropear con [perk]". Ahorra tiempo cuando reconstruyes un arquetipo.

## Para quién NO es esta herramienta

Si buscas precision matemática para min-max de DPS contra un boss específico, light.gg no es suficiente — sus god rolls son aproximaciones populares, no análisis de daño. D2 Foundry es la herramienta correcta para eso.

Si tu interés primario es lore o cosméticos, light.gg cubre esos campos pero hay sitios más especializados (Ishtar Collective para lore, emblem.report para emblems).

## Cómo se usa en la práctica

1. Buscas el arma por nombre en la barra superior. La página individual carga.
2. Scroll hasta "Community Average Rolls" — verde son los más votados, en orden de columna.
3. Comparas con tu roll. Si tu arma matchea 3 de los 4 perks votados, es un keeper.
4. Para items con barra de masterwork variable o stats configurables (ej: armor pieces con tiers), light.gg lista las stats máximas posibles y las medias.
5. Para búsquedas más complejas, usas la página `/db/items` con filtros por categoría, frame, perk y archetype.

## Limitaciones honestas

**Los god rolls son votos populares, no análisis estadístico riguroso**. Reflejan lo que la comunidad usa, lo cual a veces se desactualiza unas semanas después de un meta shift. Para builds nuevas, los videos de creators o D2 Foundry son más confiables.

**No es open-source y no documenta cómo agrega votos**. Si te interesa la transparencia del proceso, el sitio no la ofrece.

**Ads pesados**. La experiencia mobile sin adblock es pobre. En desktop con uBlock Origin, navegable.

**Lag en patch day**. Cuando Bungie suelta una expansión, light.gg puede tardar 24-48h en tener god rolls y stats finales. Los datos preliminares aparecen rápido pero las votaciones tardan.

**Solo en inglés**. La traducción a español es nominal en algunas etiquetas pero el grueso del contenido editorial es EN.

## Cómo empezar

Entra a `light.gg`, busca el nombre de un arma que tengas, y revisa su página. Si tienes cuenta Bungie.net puedes vincularla para que el sitio compare automáticamente tus rolls contra los god rolls — pero no es obligatorio. Para uso casual, búsqueda + lectura de la community average alcanza.
