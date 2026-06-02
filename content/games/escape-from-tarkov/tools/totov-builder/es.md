---
title: Totov Builder
description: Builder de armas y loadouts open-source con costos calculados por nivel de trader, comparación de mods y export de presets.
quickTake: Totov Builder es la tool más completa para armar weapons con margen de presupuesto. Sus filtros por nivel de trader hacen visible qué mods están al alcance real de tu wipe, no solo el meta endgame que asume Edge of Darkness.
---

## Qué es

Totov Builder es una web app open-source para construir loadouts completos en Escape from Tarkov: armas con todos sus mods, body armor, helmets, rigs, headsets, backpacks. Para cada componente calcula costo total en roubles considerando el nivel de trader actual del jugador. Export de presets en JSON para compartir. Repo público bajo GPL-3.0.

## Qué problema resuelve

El meta de Tarkov asume que tienes Edge of Darkness con trader level 4 — pero la mayoría no. Saber qué mods están bloqueados por trader level o que necesitan keybind tasks es invisible en el juego mismo. Totov Builder filtra los mods disponibles según tu nivel real de cada trader, dándote builds factibles a tu presupuesto.

## Diferenciación

Frente a EFT Ammo Builder (foco en ammo más builder simple) y los gun builders embebidos en tarkov.dev (read-only, sin filtros por trader level), Totov se especializa en arma + loadout completo con conciencia de progresión de trader. Su feature único es el filtro "what's available to me now" que respeta el state real del wipe.

## Para qué la usa la gente

- **Armar weapon builds factibles** con filtros por tu nivel actual de Prapor, Skier, Peacekeeper, etc.
- **Calcular costo total de loadout** antes de salir a raid para no quedar fuera de presupuesto.
- **Comparar opciones de mods** lado a lado para decidir entre dos compensators o miras según costo y stats.
- **Compartir presets** con el team via export JSON para coordinar loadouts.
- **Planear endgame builds** para wipes maduros cuando todos los traders están al máximo.

## Para quién NO es esta herramienta

Si solo quieres ver el meta absoluto sin restricciones, los videos de YouTubers como NoiceGuy o Veritas te dan eso directo. Si tu interés es ammo más que mods, EFT Ammo Builder o eft.monster están más focused en eso. Y si quieres que el sitio te recomiende builds populares directamente sin armarlas, KappaGuide tiene presets curated.

## Cómo se usa en la práctica

1. Visita totovbuilder.com.
2. Selecciona arma base y configura tu nivel actual de cada trader desde Settings.
3. Agrega mods uno por uno; los bloqueados por trader level aparecen tachados con el requisito.
4. El total de costo se actualiza en tiempo real al pie del builder.
5. Para compartir, usa "Export" para generar JSON con todo el build.

## Limitaciones honestas

- **Curva inicial**: la cantidad de mods compatibles puede abrumar. Acordate de filtrar por trader level desde el inicio.
- **Solo en inglés**: sin localización.
- **Datos community-driven**: depende de updates manuales tras parches grandes. Verifica en el juego para confirmar.
- **No incluye guides editoriales**: te da los datos para armar, pero no te dice cuál build es meta — eso lo decidís consultando creators o KappaGuide.

## Cómo empezar

Visita totovbuilder.com sin necesidad de registro. Configura Settings con tu trader levels para que los filtros sean precisos. El repo público en GitHub de TotovBuilder acepta contribuciones y reporta bugs.
