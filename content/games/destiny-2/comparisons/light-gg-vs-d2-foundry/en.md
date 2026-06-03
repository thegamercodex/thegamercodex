---
title: "light.gg vs D2 Foundry — what perks to look for vs how hard it hits"
description: "light.gg catalogs weapons and community-voted god rolls; D2 Foundry simulates damage and TTK with transparent math. Two answers to two different questions."
---

When a new weapon drops, two questions follow back to back: "is this roll worth it?" and "how much does it actually hit?" light.gg answers the first with its weapon database and community-voted god rolls. D2 Foundry answers the second by simulating damage, TTK, and damage falloff against a specific target. They don't compete: most players use them in a chain, appraising with one and simulating with the other.

## What kind of data each one offers

light.gg is a catalog database. Every weapon and armor piece has a page with full stats, perks by column, and **community-voted god rolls** for PvE and PvP. It also lists vendor rolls (Banshee, Xur) and lets you filter the whole pool by category, frame, perk, or archetype.

D2 Foundry is a **simulator**, not a catalog. Pulling from Bungie's manifest data, it computes damage per bullet, damage per mag, TTK, and damage falloff curves. Every number comes from documented formulas, not votes. You configure a weapon, pick the perks, and select the target (Major, Champion, Boss, or Guardian at resilience X) to see the result.

- light.gg tells you **what perks the community looks for**.
- D2 Foundry tells you **how much damage those perks do** against a specific enemy.

## Audience, depth, and freshness

light.gg is built for fast in-game decisions and sits at beginner difficulty: search the weapon, read the god roll, decide. Its weakness is that god rolls are popular votes, not statistical analysis, and they sometimes lag a meta shift by a few weeks. On patch day it can take 24-48h to have final god rolls.

D2 Foundry asks more of the user (intermediate difficulty): you need to know what to configure and understand concepts like damage falloff or crit multiplier. In exchange, because it's tied to the manifest, it reflects nerfs and buffs within hours of a balance pass, without waiting on community voting. Its coverage is weapons only: armor and mods aren't modeled.

## Languages, monetization, and platforms

Both are free web apps and English only.

- **light.gg**: closed-source, ad-supported (the mobile experience without an adblocker is poor), with no documentation of how it aggregates votes. Active since 2017.
- **D2 Foundry**: open source (MIT, maintained by Clark Perkins on GitHub), no ads, math exposed. Active since 2023; updates depend on the maintainer, so deep Bungie changes can take days to reflect.

## Which one?

- **Appraising a recent drop** → light.gg. Community god roll instantly, green keeps, red shards.
- **Knowing the exact TTK or damage against a boss or Guardian** → D2 Foundry. It's the only one that computes concrete per-target numbers.
- **Looking up vendor rolls or filtering the pool by perk** → light.gg. Full catalog with a search filter.
- **Comparing two similar weapons before farming** → D2 Foundry. Split screen with the same perks and a real damage delta.
- **Validating a nerf or buff right after a patch** → D2 Foundry. It reflects the manifest within hours, no waiting on votes.
- **Casual lookup without wanting to think about math** → light.gg. Faster answer, less friction.

They're complementary: the natural flow is to appraise the drop in light.gg and, if two rolls look close, open D2 Foundry to see which hits harder. Keeping both on hand covers everything from "do I keep it?" to "which is optimal?".
