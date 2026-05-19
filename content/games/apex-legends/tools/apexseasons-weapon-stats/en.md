---
title: "ApexSeasons — Weapon Stats"
description: "Web app dedicated to Apex weapon stats: per-gun DPS, effective TTK against each armor tier, full mag-dump damage, head-to-head comparisons, and season-versioned data for easy rollback of balance changes."
quickTake: "Drybear's TTK calculator's modern successor. More visual, better UX, patch-by-patch updated data. If you want to know 'which weapon kills fastest against purple armor', this is where you go."
---

## What it is

ApexSeasons.online tools/weapon-stats is an interactive Apex weapon table focused specifically on TTK (time-to-kill) and DPS. Each gun listed with stats: base damage, mag size, fire rate, reload time, attachment effects. Filters to compare against armor tiers (white/blue/purple/red), body part hit (head/body/leg), and equipped attachments. Season-versioned data — you can see pre-buff and post-buff TTK of a gun side-by-side.

## What problem it solves

In-game weapon descriptions are minimal. You know the R-99 fires fast but not exactly how much damage it does against purple armor with extended mag. ApexSeasons does the math: given your settings (attachments, armor target), it shows you the exact milliseconds to kill. This is critical for loadout decisions — a weapon with TTK 0.95s vs 1.2s against purple is 25% more lethal in direct engagements.

## Differentiation

- **vs drybear-ttk-calculator (Google Sheets)**: Drybear is the OG, still active but feels dated. ApexSeasons has modern UI, faster filters and comparisons.
- **vs apex-legends-wiki**: wiki has raw stats but doesn't calculate TTK against specific targets. ApexSeasons does.
- **vs alienfusiongenerator**: alienfusion is more comprehensive with ability multipliers (Fortified). ApexSeasons is more visual and faster for casual TTK queries.

## What people use it for

- **Decide between 2 weapons in loadout**: "do I run R-99 or Volt in mainhand?" — compare TTK against common armor in the current meta.
- **Validate weapon tier lists**: many tier lists are opinion. ApexSeasons gives hard data to verify claims.
- **Plan loadouts against specific squads**: if you know the enemy squad runs purple armor, optimize your loadout against that tier.
- **Analyze post-patch nerfs/buffs**: compare pre and post-balance TTK to understand real impact.
- **Community theorycrafting**: Reddit balance discussion posts frequently cite ApexSeasons.

## Who this tool is NOT for

If you only want a general "what's the meta gun" tier list, editorial articles (Game.gg, Method) answer that more digestibly. If you want to calculate sniper damage drop-off by distance, ApexSeasons doesn't cover that in detail.

## How it's used in practice

1. Open [apexseasons.online/tools/weapon-stats](https://apexseasons.online/tools/weapon-stats/).
2. Table with all weapons; sort by DPS, TTK, damage per shot.
3. Side filters: target armor (white/blue/purple/red), body part (headshot/body/leg), include/exclude shotguns and snipers.
4. Comparison: select 2-3 weapons → side-by-side TTK comparison against each armor tier.
5. For attachments: weapon detail page lets you toggle attachments (extended mag, scopes) to see impact on stats.

## Honest limitations

- **Assumes perfect hits**: calculated TTK is a lower bound (all shots hit, no missed bullets). Real-game TTK is always longer.
- **Doesn't account for ability mods**: Fortified legends have damage reduction; ApexSeasons doesn't auto-apply that modifier (alienfusion does).
- **Post-patch update lag**: 1-3 days to reflect new damage changes.
- **PC-only stats**: console aim assist doesn't change DPS but effective TTK does (aiming is easier = more hits = lower real TTK). Not reflected in the tool.

## How to get started

Open [apexseasons.online/tools/weapon-stats](https://apexseasons.online/tools/weapon-stats/) and filter by "Purple Armor" (the most common mid-game armor). Sort by TTK ascending to see the order of meta weapons. Pick 2-3 that catch your interest and compare head-to-head to decide your default loadout.
