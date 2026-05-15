---
title: "SkyUI"
description: "UI overhaul for Skyrim Special Edition with sortable, filterable menus and the Mod Configuration Menu (MCM) used by hundreds of mods."
quickTake: "It's the most-installed mod in Skyrim, and for good reason. The vanilla UI is atrocious; SkyUI makes it usable. Plus, MCM is where other mods expose their settings — without SkyUI you can't configure them."
---

## What it is

SkyUI is a UI overhaul originally created by the SkyUI Team (schlangster, snakster, kratosaurion, and others) in 2012 for Skyrim LE, ported to Special Edition in 2017. Distributed via Nexus (`nexusmods.com/skyrimspecialedition/mods/12604`).

It replaces the inventory, magic, barter, container, and favorites interfaces with versions that work natively with keyboard and mouse (the vanilla UI is designed for gamepad and clumsy on M&K). It adds sortable columns, filters, search, and categories.

Critically, SkyUI includes **MCM (Mod Configuration Menu)**, a framework that lets other mods expose their settings in-game. Hundreds of modern mods use it.

## What problem it solves

**Horrible vanilla UI for M&K**: base Skyrim's inventory is a scrollable column with no sort, no filters, no search. With 200 items in inventory, it's unmanageable. SkyUI adds columns (weight, value, type), clickable sort, category filters.

**No UI to configure mods**: many mods have settings (hotkeys, balance tweaks, feature toggles). Without MCM, mods would have to hard-code everything or ask you to edit INI files by hand. With MCM, open the pause menu → Mod Configuration → your mod → configure visually.

**Without SkyUI, no MCM**. That's the invisible dependency. Dozens of mods say "configurable via MCM" without explaining you need SkyUI first.

## Differentiation

Versus **vanilla UI**: SkyUI is strictly superior for M&K. For pure gamepad, vanilla can feel more natural, but SkyUI has gamepad-friendly preset variants.

Versus **DUI / Untarnished UI / other modern UI overhauls**: alternatives exist, but SkyUI is the de facto standard. Most mods assume SkyUI is present. Switching means losing MCM compatibility.

Versus **SkyUI VR**: SkyUI VR is the Skyrim VR version. Same concept but optimized for VR controllers.

## What people use it for

**Usable inventory**: the foundational use case. Sortable inventory, search, filters, columns. This alone justifies the mod.

**MCM as a platform**: for mods with many options (e.g., Frostfall, iNeed, Wildcat), MCM is where the user configures behavior.

**Column sort**: sort by value/weight to identify what to sell, what to drop, what to keep.

**Fuzzy search**: type part of a name to find a specific item among 300 in your stash.

**Improved barter**: when trading with NPCs, the barter screen has the same structure — sorting, filters, ratios.

## Who this tool is NOT for

If you play Skyrim only with a gamepad and the vanilla UI feels comfortable, SkyUI isn't indispensable — but you still need it for MCM if you have other mods.

If you play Skyrim on console (PlayStation/Xbox/Switch), SkyUI isn't available. Bethesda.net Creations have simpler but limited alternatives.

If your modlist is pure vanilla with no other mods depending on MCM, you could technically skip it — but that modlist is rare.

## How to use it in practice

1. Make sure SKSE64 is installed (SkyUI requires it).
2. Download SkyUI from Nexus (`nexusmods.com/skyrimspecialedition/mods/12604`).
3. Install via MO2/Vortex with "Mod Manager Download".
4. Activate it.
5. Launch Skyrim. Open inventory (Tab). It should look completely different — columns, filters, sort options.
6. In the pause menu you'll see a "Mod Configuration" option — that's MCM. Empty if you don't have other MCM mods.

Once SkyUI is active, when you install a mod with MCM, its options appear automatically in that menu.

## Honest limitations

**Not open-source**. SkyUI never published its source. This limited the community's possibilities to fork/iterate — some modern UI mods aim to replace it but none have the same adoption.

**Sporadic maintenance**. The original team is less active. Recent versions are bug fixes; there's no roadmap for new features.

**Conflicts with other UI mods**. SkyUI overrides many components. Mods like "TrueHUD" or "Dear Diary" may need specific patches to coexist.

**MCM can be slow with many mods**. If you have 30 MCM-enabled mods, opening the menu can take several seconds.

**2012-era visual design**. Functional but not aesthetically modern. There are "skin packs" for SkyUI that improve visuals without changing functionality.

## How to get started

1. Install SKSE64 and Address Library first.
2. Download SkyUI from Nexus.
3. Install via mod manager.
4. Activate it.
5. Launch Skyrim (with `skse64_loader.exe`).
6. Verify: open inventory → should show columns. Pause → should have "Mod Configuration".
7. When you install MCM mods (most modern ones), their settings appear automatically.

It's one of the mods we recommend installing immediately after SKSE and Address Library. Without SkyUI, seriously modding Skyrim is impractical.
