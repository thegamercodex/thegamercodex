---
title: "ApexSeasons — Weapon Stats"
description: "Web app dedicada a stats de weapons de Apex: DPS por gun, TTK efectivo contra cada nivel de armor, daño de mag-dump completo, comparativas head-to-head y data versionada por temporada para fácil rollback de balance changes."
quickTake: "El sucesor moderno del TTK calculator de Drybear. Más visual, mejor UX, data updated patch-by-patch. Si quieres saber 'cuál weapon mata más rápido contra purple armor', acá vas."
---

## Qué es

ApexSeasons.online tools/weapon-stats es una tabla interactiva de weapons de Apex con foco específico en TTK (time-to-kill) y DPS. Cada gun listada con stats: base damage, mag size, fire rate, reload time, attachment effects. Filtros para comparar contra armor tiers (white/blue/purple/red), body part hit (head/body/leg) y attachments equipped. Data versionada por season — puedes ver el TTK pre-buff y post-buff de un gun side-by-side.

## Qué problema resuelve

Las weapon descriptions in-game son minimal. Sabes que el R-99 dispara rápido pero no exactly cuánto damage hace contra purple armor con extended mag. ApexSeasons hace la math: dadas your settings (attachments, armor target), te muestra los milliseconds exactos para matar. Esto es crítico para decisions de loadout — un weapon con TTK 0.95s vs 1.2s contra purple es 25% más letal en engagements directos.

## Diferenciación

- **vs drybear-ttk-calculator (Google Sheets)**: Drybear es el OG, sigue activo pero feel dated. ApexSeasons tiene UI moderna, filtros y comparativas más rápidas.
- **vs apex-legends-wiki**: wiki tiene stats raw pero no calcula TTK contra targets específicos. ApexSeasons sí.
- **vs alienfusiongenerator**: alienfusion es más comprehensive con ability multipliers (Fortified). ApexSeasons es más visual y rápido para casual TTK queries.

## Para qué la usa la gente

- **Decidir entre 2 weapons en loadout**: "¿llevo R-99 o Volt en mainhand?" - compara TTK contra armor común en current meta.
- **Validar weapon tier lists**: muchos tier lists son opinión. ApexSeasons da data hard para verificar claims.
- **Plan loadouts contra specific squads**: si sabes que el enemy squad corre purple armor, optimiza tu loadout contra ese tier.
- **Analizar nerfs/buffs post-patch**: comparar TTK pre y post-balance para entender real impact.
- **Theorycrafting community**: posts en Reddit de balance discussions citan ApexSeasons frecuentemente.

## Para quién NO es esta herramienta

Si solo quieres un weapon tier list general "cuál es el meta gun", artículos editoriales (Game.gg, Method) responden eso de forma más digestible. Si quieres calculate sniper damage drop-off por distance, ApexSeasons no cubre eso con detalle.

## Cómo se usa en la práctica

1. Abre [apexseasons.online/tools/weapon-stats](https://apexseasons.online/tools/weapon-stats/).
2. Tabla con todas las weapons; sort por DPS, TTK, damage per shot.
3. Filtros side: target armor (white/blue/purple/red), body part (headshot/body/leg), include/exclude shotguns y snipers.
4. Comparativa: select 2-3 weapons → compare side-by-side TTK contra cada armor tier.
5. Para attachments: weapon detail page deja toggle de attachments (extended mag, scopes) para ver impacto en stats.

## Limitaciones honestas

- **Asume hits perfectos**: TTK calculado es lower bound (todos los shots hit, no missed bullets). Real-game TTK es always longer.
- **No considera ability mods**: Fortified legends tienen damage reduction; ApexSeasons no aplica ese modifier automáticamente (alienfusion sí).
- **Update lag tras patch**: 1-3 days para reflejar damage changes nuevos.
- **Solo PC stats**: console aim assist no cambia DPS pero el TTK effective sí (apuntar es más fácil = más hits = menor TTK real). No reflected en la tool.

## Cómo empezar

Abre [apexseasons.online/tools/weapon-stats](https://apexseasons.online/tools/weapon-stats/) y filtra por "Purple Armor" (el armor more común en mid-game). Sort por TTK ascending para ver el order de meta weapons. Toma 2-3 que captan tu interés y compara head-to-head para decidir loadout default.
