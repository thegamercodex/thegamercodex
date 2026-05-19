---
title: "Drybear's Apex Legends TTK Calculator"
description: "Google Sheets calculator de TTK construido por Christopher Mykles (Drybear) en febrero 2019, justo después del launch de Apex. Documenta cada weapon con damage profile, accounts for armor tiers, hipfire vs ADS, body part hit, y attachment effects."
quickTake: "El OG legendario del weapon math en Apex. Hoy hay tools modernos con mejor UX, pero el spreadsheet de Drybear sigue siendo el reference más comprehensive cuando quieres entender la mecánica raw, sin abstracciones."
---

## Qué es

Drybear's TTK Calculator es un Google Sheet creado por Christopher Mykles (conocido como Drybear, ex-NRG content creator y referencia del competitive Apex temprano) en febrero 2019. Documenta cada weapon del game con damage profile completo: base damage por bullet, damage falloff por distance, headshot multipliers, body multipliers, leg shot reduction, fire rate, mag size, reload time. Incluye armor calculations para white/blue/purple/red shields. El spreadsheet es view-only — Drybear lo actualiza tras major patches.

## Qué problema resuelve

Cuando Apex lanzó en 2019, no había webs especializadas. Drybear, con background técnico, construyó la spreadsheet definitiva en sus primeras semanas, y se volvió **el** reference que pros y community usaron para todo: balance discussions, tier lists, loadout decisions, theorycrafting. Hoy hay webs con mejor UX, pero el Sheet sigue siendo donde está la math más granular y unabstracted — útil cuando quieres verificar lo que un calculator moderno te dice.

## Diferenciación

- **vs apexseasons-weapon-stats**: ApexSeasons es la sucesión espiritual con web UI moderna. Drybear es el Sheet raw — más math, menos polish.
- **vs alienfusiongenerator**: alienfusion incluye ability multipliers (Fortified, etc.). Drybear is pure weapon math sin abilities.
- **Historical significance**: Drybear es citado en posts de Reddit y video guides desde 2019. Tiene credibility legacy que webs nuevas no replican.

## Para qué la usa la gente

- **Verificación de claims**: cuando alguien dice "X weapon mata más rápido que Y", el Sheet es la fuente que la community usa para confirmar o desmentir.
- **Theorycrafting profundo**: si quieres calcular TTK manual con custom modifiers, el Sheet expone las formulas directamente.
- **Backup cuando webs caen**: si apexseasons o alienfusion están down, Drybear funciona — es Google Sheets, infrastructure rock-solid.
- **Historical research**: ver damage values pre-patch via version history del Sheet.
- **Referencia para writers/streamers**: artículos de balance discussion suelen incluir screenshots del Sheet.

## Para quién NO es esta herramienta

Si no estás cómodo navegando Google Sheets — multiple tabs, formulas visibles, filters not as friendly — la web UI de ApexSeasons es way más accesible. Si solo quieres respuesta rápida "qué TTK tiene esta gun", apexseasons o tier lists editoriales responden faster.

## Cómo se usa en la práctica

1. Abre el [Google Sheet de Drybear](https://docs.google.com/spreadsheets/d/1iNF-aa9eR6giunmHe4Ed_fpf0QnRHx_knxfruvjdMAE/edit).
2. Multiple tabs en la parte inferior: cada weapon class tiene su tab (Assault Rifles, SMGs, LMGs, Shotguns, Snipers, Pistols).
3. Cada weapon row tiene columns calculadas: damage por shot, against each armor tier, TTK calculado, mag dump damage.
4. Para personalizar: clic en File → Make a copy → editá tu copy con custom values.
5. Drybear update notes están en una tab dedicada — lee esa para entender última fecha de update.

## Limitaciones honestas

- **UX es Google Sheets**: si nunca usaste Sheets navegación complex, hay curve de aprendizaje.
- **Update cadence depende de Drybear**: no hay editorial team, solo él. Tras un patch, puede tardar 1-2 semanas en actualizar todo.
- **No tiene visualizations**: comparativas no son gráficas, solo numbers en cells.
- **No mobile-friendly**: Sheets en teléfono es pain.
- **Solo inglés**.

## Cómo empezar

Abre el [Sheet](https://docs.google.com/spreadsheets/d/1iNF-aa9eR6giunmHe4Ed_fpf0QnRHx_knxfruvjdMAE/edit), bookmark si pensás revisarlo seguido. La primera vez, navega las tabs para entender la organización (cada weapon class en su tab). Para queries puntuales, ApexSeasons probablemente sea más rápido — usa Drybear cuando quieres profundidad o validación de un specific claim.
