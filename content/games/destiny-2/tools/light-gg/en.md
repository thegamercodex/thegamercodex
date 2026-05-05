---
title: "light.gg"
description: "Web database of Destiny 2 weapons, armor, perks, and mods, with community-voted god rolls."
quickTake: "The first site you open when a new weapon drops. light.gg's god rolls are the wisdom-of-crowds of Destiny 2's meta: imperfect, but useful so you don't accidentally shard valuable pieces."
---

## What it is

light.gg is the most-used web database for Destiny 2 weapons and armor. Every item in the game has a page with full stats, perk list by column, and **community-voted god rolls** for PvE and PvP. Free, no required login, ad-supported.

Active since 2017 — the site grew as the quick-reference for the weapon pool and has kept that identity for nearly a decade. Not open source, doesn't document its backend, but the database typically updates on patch day.

## What problem it solves

When a new weapon drops, there's no way to know if your roll is good from inside the game. Destiny 2 shows the perks but not which combinations are meta, nor how it compares to others in the same archetype. light.gg answers that in 30 seconds: open the weapon's page, see the voted god rolls, compare to your roll, decide to keep or shard.

It also solves the problem of looking for specific perks: "which scout rifles have Rapid Hit + Kill Clip" is answered by the search filter. Useful when replacing a weapon that was sunset or no longer drops.

## How it differs

Versus D2 Foundry (the more recent alternative), light.gg wins on **catalog coverage** (all current content, vendor rolls included) and **community god rolls** (the community vote carries weight). D2 Foundry wins on **mathematical simulation** (TTK, damage scaling, precise comparisons).

The practical rule: light.gg for "what perks am I looking for", D2 Foundry for "how much damage against X enemy". Both complement each other.

Versus the wiki or destinypedia, light.gg is faster and better designed for the concrete question "is this roll good?". The wiki covers lore and encyclopedic cataloging; light.gg is optimized for in-game decisions.

## What people use it for

**Appraising a drop**: paste the item into its page, see how it compares to the community god roll. Green = keep, red = shard.

**Looking up god rolls before farming**: filter by activity (Trials, Iron Banner, raid X) and see which chase-worthy weapons have rolls that complement your build.

**Comparing archetypes**: each weapon page shows archetype averages. Useful to decide between two aggressive-frame hand cannons with similar perks.

**Vendor rolls lookup**: when Banshee, Xur, or a vendor rotates inventory, light.gg usually has the rolls listed before you open the game.

**Search by perk**: the filter allows "all weapons that can drop with [perk]". Saves time when rebuilding an archetype.

## Who it's not for

If you want mathematical precision for DPS min-maxing against a specific boss, light.gg isn't enough — its god rolls are popular approximations, not damage analysis. D2 Foundry is the right tool for that.

If your primary interest is lore or cosmetics, light.gg covers those fields but more specialized sites exist (Ishtar Collective for lore, emblem.report for emblems).

## How to use it in practice

1. Search for the weapon by name in the top bar. The individual page loads.
2. Scroll to "Community Average Rolls" — greens are the most-voted, in column order.
3. Compare to your roll. If your weapon matches 3 of the 4 voted perks, it's a keeper.
4. For items with variable masterwork bars or configurable stats (e.g. armor pieces with tiers), light.gg lists the max possible stats and averages.
5. For more complex searches, use the `/db/items` page with filters by category, frame, perk, and archetype.

## Honest limitations

**God rolls are popular votes, not rigorous statistical analysis**. They reflect what the community uses, which sometimes lags a meta shift by a few weeks. For new builds, creator videos or D2 Foundry are more reliable.

**Not open source and doesn't document how votes aggregate**. If you care about process transparency, the site doesn't provide it.

**Heavy ads**. The mobile experience without an adblocker is poor. On desktop with uBlock Origin, navigable.

**Lag on patch day**. When Bungie ships an expansion, light.gg can take 24-48h to have final god rolls and stats. Preliminary data shows fast but votes lag.

**English only**. Spanish localization is nominal on some labels but the editorial bulk is EN.

## How to get started

Go to `light.gg`, search for a weapon you own, and review its page. If you have a Bungie.net account you can link it so the site automatically compares your rolls against the god rolls — but it's not required. For casual use, search + reading the community average is enough.
