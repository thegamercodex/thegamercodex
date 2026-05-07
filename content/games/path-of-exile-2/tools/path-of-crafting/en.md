---
title: "Path of Crafting"
description: "Web crafting simulator for Path of Exile 2 focused on real-time mod pools and exact probabilities, kept current with the active league patch."
quickTake: "To verify exactly which mods can roll and at what probability before spending currency on a craft, this site is direct: pick the item, see the full pool with percentages. Simpler than Craft of Exile, more focused on PoE 2, minimal learning curve."
---

## What it is

Path of Crafting is a web crafting simulator focused specifically on Path of Exile 2. It lives at `pathofcrafting.net`, requires no signup, and stays current with the active league patch (at verification time, "Last of the Druids" 0.4).

The core proposition is showing real-time mod pools with exact probabilities — before spending an Exalted or Regal Orb, you see which mods can roll and at what percentage. That converts crafting from intuition to calculation.

The team behind the site also maintains a mobile app of the same name that primarily covers Path of Exile 1, but the web version is dedicated to PoE 2.

## What problem it solves

PoE 2 inherits PoE 1's deep crafting system: every base item has a pool of possible mods, orbs modify them according to specific rules, and the numbers matter. The difference between a successful craft and a mediocre one can be a specific mod with low probability.

Without a simulator, the workflow is: read the wiki to understand a base's mod pool, mentally calculate probabilities, spend orbs, and pray. Path of Crafting replaces the "pray" step with "see the number before acting". For players crafting endgame gear, that saves real currency.

## Differentiation

Versus Craft of Exile (`craftofexile.com`): Craft of Exile is the historical crafting tool since PoE 1, massively more comprehensive, with simulations of fossils, essences, harvest, beast crafting, and more. Path of Crafting is simpler, more focused on base mod pools and probabilities, and specifically PoE 2.

For advanced crafts with multi-orb mechanics (multimod, beast craft, fossil combinations) Craft of Exile is superior. For "what can I roll with an Exalted on this base item" Path of Crafting is faster and more direct.

## What people use it for

**Pre-craft pool check**: before buying or using a base, verify which mods are possible. Avoids buying bases that can't roll what you need.

**Exact hit probability**: if you need "T1 Increased Physical Damage" rolled with an Exalted, the site tells you the percentage. You decide whether it's worth it.

**Craft budget calibration**: with the probability you know how many attempts to expect. If it's 1/200, you calculate realistic currency required.

**Learning mod pools per slot**: players new to crafting use the site to understand which mods exist on each gear type without having to memorize the wiki.

**Verifying rare items before buying**: if someone lists an item with a certain mod combo, you verify whether the mods exist on that base (sometimes there are scams with renamed impossible mods).

## Who it's not for

If you need to simulate fossil crafting, harvest crafting, beast crafting, or any advanced mechanic, Craft of Exile is the right tool — Path of Crafting doesn't cover that depth.

If you play casually and don't craft (just equip drops and buy ready gear), a crafting simulator adds nothing.

If you play Path of Exile 1, this tool covers PoE 2 — for PoE 1 there are other options (Craft of Exile, awakened-poe-craft, etc.).

If you expect a polished UI like the official PoE Trade, know that Path of Crafting is functional but more visually austere.

## How to use it in practice

1. Go to `pathofcrafting.net`. The home page takes you to the simulator.
2. Pick the base item type (weapon, armour, jewel, etc.) and the specific category (one-handed sword, heavy body armour, etc.).
3. Pick the item level of the base (affects which mods are accessible).
4. Pick the orb you want to simulate (Transmute, Augmentation, Regal, Exalted, Chaos, etc.).
5. The site shows the full mod pool with each mod's probability.
6. (Optional) Filter mods by keyword or tier to focus the read.
7. If the result looks right, spend the actual orbs in-game with calibrated expectations.

## Honest limitations

**Doesn't simulate advanced crafts**. Fossils, essences, harvest, beast crafting — all of that lives in Craft of Exile, not here.

**English only**. No Spanish localization. Game-specific terms (mod names, suffixes/prefixes) are in English.

**Apparently closed source**. The web version has no associated public GitHub repo (the legacy mobile app has one, but it's PoE 1 and unmaintained since 2021). If you want to audit code or fork, this isn't an option.

**Lag after patches**. When GGG adjusts mod pools or probabilities in a patch, the site updates but there can be a few days of delay. Check the codex's `lastVerified` against the game's current patch before important crafts.

**Data comes from community extraction**. The exact probabilities come from community leak/datamining/playtest. Generally correct but unofficial — GGG doesn't confirm numbers.

**Doesn't simulate cumulative results across multiple orbs**. If you want to simulate "I threw 100 Chaos Orbs on this item, what to expect statistically", the site shows per-orb probability but not cumulative. For Monte Carlo you need another tool or manual calculation.

## How to start

Go to `pathofcrafting.net` and start by picking a simple base item to get familiar. The first time, it's worth exploring 2-3 different bases watching how the pool changes per category.

For productive use: when you're about to spend real currency (Exalted, Divine, Annul) on a craft, open the site first and verify the pool. If the mod you need has 1% probability, decide if you have the budget; if it has 30%, go ahead.

For simple crafts (1-2 orbs on a base), the flow is 30 seconds. For complex crafts (Exalted slam chains over locked prefixes), the site helps you plan but you still need mechanic knowledge that lives in written guides (Maxroll, wiki).
