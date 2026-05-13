---
title: FilterBlade vs PoE Filter — qué generador de loot filter usar
description: Comparación corta entre las dos web tools más usadas para customizar loot filters en PoE.
---

Filtrar loot bien es una de las skills no obvias de PoE: la diferencia entre un mapping eficiente y uno frustrante. Dos web tools dominan el espacio: **FilterBlade** (el editor visual oficial de NeverSink) y **PoE Filter** (un generador minimalista alternativo). Tienen filosofías distintas que vale la pena entender antes de elegir.

## Filosofía

**FilterBlade** es el panel de control para customizar el filter de NeverSink — el filter más usado y mantenido de la comunidad PoE. Está pensado para coverage completa: todo el loot del juego, organizado por tiers de strictness (Soft, Regular, Semi-Strict, Strict, Very Strict, Uber-Strict). Estás eligiendo cuánto ocultar dentro de un sistema que asume que quieres ver mucho y filtrar agresivamente cuando hace falta.

**PoE Filter** parte de la filosofía opuesta: un filter limpio, minimal, que respeta la estética visual original del juego. Menos colores fluo, menos íconos cargados, menos sounds intrusivos. Es el filter para alguien que prefiere ver el loot del juego "como está" pero con ayuda discreta en lo importante.

## Customización

FilterBlade tiene la UI de customización más completa: cada categoría de ítem editable por tier, con preview en tiempo real, sound packs, drop sounds, mini map icons, beams, y la capacidad de override granular cualquier rule específica. Si quieres cambiar exactamente cómo se ve un Headhunter cuando dropea (color, tamaño, sonido, icono), lo haces en tres clicks.

PoE Filter ofrece customización más acotada pero suficiente para la mayoría: drop tier configurable, integración con poe.ninja para que los tiers se ajusten al valor real del mercado por liga, y una UI más simple. Si no necesitas cambiar 50 reglas específicas, llegas a un buen filter con menos esfuerzo cognitivo.

Para builders de filters que quieren control total, FilterBlade gana. Para players que quieren un "good enough" rápido, PoE Filter gana.

## Mantenimiento y league cycle

NeverSink actualiza su filter base con cada liga y patch significativo, y FilterBlade refleja esos cambios automáticamente. Cuando una liga agrega ítems nuevos o cambia drop rates, el filter tiene soporte casi inmediato. Es la consecuencia de que FilterBlade sea la herramienta oficial de un proyecto que un solo dev (NeverSink) mantiene como prioridad.

PoE Filter también se actualiza pero tiene menos presión comunitaria detrás. El equipo es más chico y los updates pueden tardar más después de un parche grande. A cambio, su simplicidad significa menos cosas que romperse cuando GGG cambia algo.

## ¿Cuál usar?

- **Si juegas endgame en serio y quieres el filter más completo del juego** → FilterBlade. Es el estándar de facto por algo.
- **Si estás empezando y quieres un filter discreto y limpio** → PoE Filter. Menos overwhelming visualmente.
- **Si te importa integración nativa con poe.ninja para que el filter se ajuste al valor real** → PoE Filter. Es feature distintivo.
- **Si quieres sound packs custom y control granular extremo** → FilterBlade. Solo gana acá.

Como con muchas comparativas en PoE, **probar las dos toma 10 minutos cada una**. Ambas son web tools que generan un archivo `.filter` que pegas en tu carpeta de PoE. Cambiar es trivial.
