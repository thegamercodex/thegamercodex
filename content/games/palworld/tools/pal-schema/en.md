---
title: PalSchema
description: Mod that lets you modify Palworld's data tables and blueprints via JSON files, avoiding conflicts between mods that touch the same data.
quickTake: The second most common dependency after UE4SS. If you'll use balance mods, Pal stat tweaks, recipe changes, or any data adjustments, you'll almost certainly need it. Plays nicely with other PalSchema mods.
---

## What it is

PalSchema is an open-source mod maintained by Okaetsu that runs on top of UE4SS and lets you modify Palworld's data tables and blueprints using declarative JSON files. The point of the JSON approach is that **two mods that change the same data table can coexist without conflict** — PalSchema merges the changes instead of overwriting the whole file. This is huge for a healthy modding scene.

## What problem it solves

Modifying Palworld the old-school way means editing binary .pak files, which:
- Requires complex unpacking/packing tools.
- Is hard to version (binary, not diff-able).
- Creates catastrophic conflicts when two mods touch the same file (last one loaded wins, the first dies).

PalSchema replaces that with JSON files that get merged at load time, letting multiple mods coexist.

## How it differs

In the Palworld scene, PalSchema is basically the only decent "data mod" framework that exists. Some modders still ship raw .pak mods out of inertia or because they're modifying something PalSchema doesn't cover, but most have migrated. Recent updates added TMap property support, enum values, and loading .pak files from inside the mod folder (useful for hybrid mods).

## What people use it for

- **Balance mods**: tweak Pal stats, adjust drop rates, modify XP curves.
- **Recipe mods**: add new items, change crafting requirements.
- **Spawn table mods**: add new Pals to existing zones.
- **Low-conflict hybrid mods**: JSON layer + asset .pak files in the same folder.

## Who this isn't for

If you won't develop mods or install balance/data mods, you don't need it. PalSchema is a dependency you install because some other mod requires it.

If you'll make mesh/texture/animation (visual) mods, PalSchema isn't what you want — those are still raw .pak files. But you can combine them (PalSchema for data + .pak for assets).

## How it's used in practice

**As a user (installing mods)**:
1. UE4SS Palworld-compatible already installed.
2. Download PalSchema from the GitHub releases or from Nexus Mods (entry 2361).
3. Unzip under `Pal/Binaries/Win64/Mods/PalSchema/`.
4. For each PalSchema mod, copy its folder into `Mods/PalSchema/Mods/<ModName>/`.

**As a modder (developing)**:
1. Official documentation at okaetsu.github.io/PalSchema/.
2. JSON schema with autocompletion in VS Code via JSON schema reference.
3. Iterate changes without restarting the game (live-reloads tables).

## Honest limitations

- **Doesn't cover 100% of the game**: certain engine properties still need raw .pak edits. Coverage grows with each release but isn't total.
- **Still in active development**: occasional breaking changes between major versions. Read the changelog before updating.
- **Incomplete docs**: docs cover common cases; for edge cases you have to read GitHub issues or ask in Discord.
- **Requires UE4SS Palworld-compatible**: same version trap, see the UE4SS entry for details.

## How to get started

Install UE4SS Palworld-compatible first. Then download PalSchema from the GitHub repo. Unzip under `Pal/Binaries/Win64/Mods/PalSchema/`. Confirm it loaded: open Palworld, the UE4SS console should show PalSchema startup logs. From there any PalSchema-compatible mod installs drag-and-drop into the `PalSchema/Mods/` folder.
