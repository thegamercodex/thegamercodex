---
title: "FilterBlade"
description: "Visual editor and customizer for the NeverSink Loot Filter for Path of Exile 1 and 2."
quickTake: "Without a loot filter in PoE 2 you drown in trash items. Without FilterBlade, customizing the NeverSink filter is manual labor with Path of Exile syntax. For 95% of players, FilterBlade is 'the filter' — the only interface they need."
---

## What it is

FilterBlade (`filterblade.xyz`) is the official web tool from the NeverSink project to download, preview and customize loot filters for both Path of Exile 1 and Path of Exile 2. It's the companion site for the NeverSink filter: the filter defines the logic, FilterBlade is the GUI to tune it to taste without touching code.

The PoE 2 NeverSink filter lives in its own repository (`NeverSinkDev/NeverSink-Filter-for-PoE2`) and FilterBlade auto-loads the latest version. Each strictness level (soft to uber-plus-strict) is pre-configured, and you can customize from any of them.

## What problem it solves

PoE 2 drops dozens of items per map, much of it economic trash. Without a filter, your endgame screen is a visual chaos of items not worth a second of inspection. PoE's in-game filter engine accepts `.filter` files with specific syntax — writing one from scratch is hours of work and induces paranoia (you miss valuable items by one mod).

NeverSink solved this by creating a master filter, constantly maintained, based on economic data. FilterBlade solves the next layer: customization. Want certain uniques louder? Want T1 maps blue instead of violet? Want a rare currency to have a special sound effect? Click the item in FilterBlade, adjust visual and sound, export. Zero code.

## Differentiation

It has no real competition in PoE 2 currently. Other filters exist (custom community filters, basic generators), but none combine NeverSink's authoritative base with FilterBlade's customization GUI.

Compared to editing the `.filter` file by hand: FilterBlade is 100x faster and prevents syntax errors. Manual only wins when you need rules so custom the GUI doesn't expose — very rare case.

## What people use it for

**Download the NeverSink filter ready to use**: the main page lets you grab pre-set strictness levels (Soft, Regular, Semi-Strict, Strict, Very Strict, Uber-Strict, Uber-Plus-Strict) in one click.

**Customize visibility of specific items**: edit rules item by item. I want Tabula Rasa always loud, quality-20 gems to have a beam, small currencies to disappear after level 80.

**Test previews before applying**: FilterBlade has a visual preview showing how an item would look with your filter. Useful for tweaking colors before pushing the filter into the game.

**Switch between strictness levels quickly**: during campaign you want Soft (see more things). In endgame you want Strict (filter what doesn't scale). FilterBlade lets you generate variants and switch between them.

**Auto-update when a new league hits**: every time GGG changes balance, NeverSink adjusts the filter and FilterBlade reflects the update. Download the new version, paste in-game, done.

## Who this isn't for

If you play SSF Hardcore with a hardcore-minimal focus — very specific custom filter, no visuals tuning — FilterBlade can be too much interface for too little use. In that case, manual code or alternative community filters pay better.

If you've never used loot filters and you're in early campaign, you probably don't need customization yet. Download Soft or Regular preset, apply it, and learn with the base. FilterBlade earns its weight when you start having opinions on what to see and what not to.

## How it's used in practice

1. Go to `filterblade.xyz`. The home asks PoE 1 or PoE 2 — pick PoE 2.
2. Strictness selector: pick from 7 levels. For campaign, Semi-Strict is a good default. For endgame, Strict or Very Strict.
3. Click "Download" → file `.filter` downloads. Copy to `Documents/My Games/Path of Exile 2/` (Windows).
4. In-game: F8 → Item Filter → "Reload". Filter is active.
5. To customize: in FilterBlade, click any item in the preview → change color, sound, visibility. Re-download.

For PoE 2 specifically, the filter has "campaign leveling mode": the shift between leveling and endgame logic happens automatically when you reach area level 65. No need to manually swap filters.

## Honest limitations

**English only**. Site and filter. For Spanish-speaking users, the initial curve requires technical vocabulary (T1 mods, base types, etc.).

**Gross customization only, not extreme tuning**. If you want hyper-specific rules (hide rare swords with fewer than 3 mods that are pre-tier 4), FilterBlade may not expose enough granularity. For those cases, you end up editing the resulting .filter by hand.

**The NeverSink filter may not match your exact preferences**. It's opinionated — reflects NeverSink's view and his community's. If you disagree (e.g., you want trash currency for vendor recipes), you have to customize.

**You need to re-download and re-apply after each update**. No automatic sync with the game. When a new PoE 2 league hits, go to FilterBlade, grab the updated version, paste in-game.

**Some corners of the filter require mechanics knowledge**. To customize advanced rules (Sekhema-related, atlas mods), you have to understand what items mean economically. If you're new, NeverSink's presets cover well already.

## How to start

No registration needed. Go to `filterblade.xyz`, pick PoE 2, pick strictness (Semi-Strict if unsure), download. Copy to the correct folder and activate in-game.

Once the filter runs, play a few hours. When you start noticing items you don't want to see (or items you do want to see but the filter hides), go back to FilterBlade and customize those specific cases. The editor's learning curve is very gentle — drag-and-click on items.

For most players, NeverSink Filter + FilterBlade is setup-once-then-update — doesn't require monthly attention or domain expertise.
