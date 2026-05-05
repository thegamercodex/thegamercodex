---
title: "D2 Foundry"
description: "Open-source simulator for damage, TTK, and damage falloff curves on Destiny 2 weapons."
quickTake: "When light.gg tells you 'this roll is popular' but you want to know 'how much exactly does it hit', D2 Foundry is the answer. Math exposed, no black box."
---

## What it is

D2 Foundry is an open-source web simulator for Destiny 2 that calculates damage, TTK (time-to-kill), damage falloff, and other weapon metrics using Bungie's manifest data. Maintained by Clark Perkins on GitHub under MIT license, no official affiliation. Active since 2023.

The distinguishing feature is **mathematical transparency**: every number comes from documented formulas, not community votes. You can see exactly how damage is calculated against a specific enemy, which perks apply, and how TTK changes with the opponent's resilience.

## What problem it solves

light.gg tells you which perks the community voted for but not how much damage they actually do. When two god roll options look similar, which hits more against a Major? Which has better TTK against a Guardian with resilience 9? Those questions need calculation, not voting.

D2 Foundry exposes those calculations: paste a weapon, configure perks, choose the target (PvE Major, Champion, Guardian with resilience X), and see damage per bullet, damage per reload, TTK, and comparison with other weapons in the same archetype.

## How it differs

Versus light.gg, D2 Foundry doesn't compete — it complements. light.gg covers **what to look for** (god rolls, vendor rolls, catalog), D2 Foundry covers **how much it hits** (damage and TTK math against specific targets). The common flow is appraise with light.gg → simulate with D2 Foundry when you want precision.

Versus Destiny Massive Breakdowns (the TTK spreadsheet the community has used for years), D2 Foundry wins on interactivity (you don't read a table, you configure a scenario) and maintenance (auto-updates with the manifest when Bungie changes numbers). DMB remains gold standard for deep editorial analysis, but D2 Foundry gets you concrete answers faster.

## What people use it for

**Comparing two similar weapons**: paste two aggressive-frame hand cannons in split screen, configure the same perks, see which hits more against X target. Informed decision instead of feeling.

**Validating a god roll before farming it**: the roll light.gg votes #1 isn't always optimal for your use. D2 Foundry shows the real damage delta between alternatives.

**Optimizing PvP loadout**: precise TTKs against variable enemy resilience. Critical for Trials where the matchup matters.

**Theorycrafting specific perks**: Vorpal vs Frenzy against Champions? D2 Foundry simulates both scenarios and shows the delta.

**Verifying nerfs/buffs post-patch**: when Bungie changes numbers in a balance pass, D2 Foundry reflects the change in hours (via manifest update) without waiting for community votes.

## Who it's not for

If you're looking for "what weapon to use" without wanting to think about math, light.gg gives a faster answer. D2 Foundry asks you to know what to configure.

If you play Destiny 2 very casually and rarely optimize, mathematical tools are overkill. Point-and-shoot works perfectly fine.

If your interest is lore, cosmetics, or progression tracking, this site covers none of that.

## How to use it in practice

1. Go to `d2foundry.gg`. No required login.
2. Search for the weapon by name. The page shows base stats and a perk selector.
3. Configure perks for your roll (or target god roll) in each column.
4. Choose the target in the right panel: PvE (Major, Champion, Boss) or PvP (with enemy resilience).
5. Look at damage per bullet, damage per mag, TTK, damage falloff. To compare, open a second weapon in split.

## Honest limitations

**Higher usage curve than light.gg**. If you don't understand concepts like damage falloff or crit multiplier, the numbers can be opaque. Help text exists but requires reading.

**Weapons-only coverage**. Armor and mods aren't modeled here; for armor stat-budget builds, other tools (DIM Loadout Optimizer) are better.

**Simplified models**. Calculations assume controlled conditions (one target, no movement, no abilities active). Real damage in a raid can vary due to surges, debuffs, and burns not fully modeled.

**English only**. No Spanish localization.

**Updates depend on the maintainer**. If Bungie changes something deep (e.g. perk rework), D2 Foundry can take days to reflect it. For major meta shifts, wait for the update before trusting 100%.

## How to get started

Go to `d2foundry.gg`, search for a weapon you use (ideally with a god roll you already know), and configure the perks. Switch the target between Major and Boss to see how it scales. Try an alternative perk (e.g. Frenzy vs Multikill Clip) and watch the delta. In 15 minutes the interface clicks.
