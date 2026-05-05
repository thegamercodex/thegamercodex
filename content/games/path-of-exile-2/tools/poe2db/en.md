---
title: "PoE2DB"
description: "Primary database for Path of Exile 2 with items, skills, monsters, and mods extracted directly from the game files."
quickTake: "When a guide says 'this mod tier can roll up to 90% increased damage', PoE2DB is where you verify the data. The source for anything that needs numerical precision."
---

## What it is

PoE2DB is the PoE 2 version of poedb.tw's traditional datamining — a site that extracts items, skills, gems, monsters, mods, ascendancies and basically any structured data directly from the game files. It maintains tables with tier ranges, weights, and interrelations between components that the game doesn't surface in-game.

Unlike edited wikis (which can be outdated or carry interpretations), PoE2DB literally reflects what the game files say. If the game changed a mod in the last patch, PoE2DB reflects it within hours — latency depends on when the project's dataminer processes the new files.

## What problem it solves

PoE 2 doesn't document the granular detail of its systems. A mod on an item says "increased damage" but doesn't show the tier or possible range. A skill says "deals fire damage" but doesn't expose the exact coefficient that scales with stats. For players who want to understand why something works, that opacity is blocking.

PoE2DB solves this by exposing primary data. Look up any mod and see all existing tiers, the level requirement of each, and the weight (relative probability) in crafting. Look up any skill and see exact coefficients, the gems that can modify it, and unique items that interact with it.

## Differentiation

Compared to poe2-wiki, PoE2DB is the raw version — extracted tables, no narrative. The wiki adds context, examples and commentary; PoE2DB just gives you the number. Normal workflow: poe2-wiki to understand what something is, PoE2DB to verify the exact data.

Compared to Craft of Exile, PoE2DB doesn't simulate crafting — it only provides the inputs (mod weights, tier ranges) that CoE uses for its simulations. They're tools at different levels: PoE2DB the source, CoE the processor.

## What people use it for

**Verify mod tier ranges**: when a build guide says "look for an item with T1 fire damage", PoE2DB tells you exactly what numeric range T1 covers and what level requirement it has.

**Study skill mechanics**: for a given skill, PoE2DB lists damage coefficients, compatible support gems, and modifiers that interact. Useful for deep theory-craft.

**Investigate specific monsters**: if you're going to farm a particular boss, PoE2DB has its HP, resistances, and mechanics listed (when datamining exposes them).

**Search uniques by mod**: which uniques exist with "increased life" or such-and-such specific mod? PoE2DB has reverse search by mod.

**See all variants of an item**: for each base type, PoE2DB lists which mods can roll, in which tiers, at which levels. Useful for crafting planning.

## Who this isn't for

If you're new to PoE 2, PoE2DB will overwhelm you. It's dense data without didactic polish — expect tables with cryptic columns and assumed vocabulary. The utility curve rises once you already understand core mechanics; before that, wikis offer better onboarding.

If you just want "good builds to level", PoE2DB doesn't help. No guides, no rankings, no opinion. It's a dictionary, not a curator.

## How it's used in practice

1. Go to `poe2db.tw/us/`. The home has category navigation: Items, Skill Gems, Support Gems, Monsters, Maps, Ascendancies.
2. To find a specific mod: use the global search bar. Results take you to dedicated pages with tier table, weight, level req.
3. To investigate a skill: navigate Skill Gems → select → see the full page with damage coefficients, scaling stats, support compatibility.
4. Typical workflow: during crafting or build planning, open PoE2DB in a parallel tab and verify specific data mentioned by guides.

## Honest limitations

**Minimalist, almost raw interface**. No modern design or optimized UX. Functional but old-school aesthetic: wide tables, small typography, category navigation without fancy filters.

**English and traditional Chinese only**. The project's original languages. There are locale versions but Traditional Chinese is the most complete in some corners.

**Post-patch coverage can lag**. When GGG ships a patch, PoE2DB has to process new files. They generally update within hours, but there can be lag, especially for new mechanics requiring additional context.

**It doesn't interpret**. PoE2DB gives you the data; you have to understand what it means in the game context. If a mod has 5 tiers, the site doesn't tell you which is "good enough" — it just lists all 5.

**No editorial opinion on balance**. No tier lists, no "this item is better than that". For evaluation you go to Maxroll or Mobalytics.

## How to start

No registration or download needed. Go to `poe2db.tw/us/`. First time, explore an item you know to get familiar with how the data is presented — for example, look up a known unique and read how PoE2DB breaks down its mods.

To integrate into your workflow: open it when a guide mentions a stat you want to verify, when you're going to craft and need to know what mods can roll, or when theory-crafting complex interactions. Not daily reading — consultative reference.
