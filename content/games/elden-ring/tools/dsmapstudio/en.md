---
title: "DSMapStudio"
description: "Map, param, event, and text editor for every modern Souls including Elden Ring. The main tool of any serious mod author."
quickTake: "If your goal is to create mods (not just install them), DSMapStudio is the tool. The curve is real but no editor covers as much of the game data in a single UI."
---

## What it is

DSMapStudio is an open-source application developed by the soulsmods collective (same people behind Mod Engine 2). It lives at `github.com/soulsmods/DSMapStudio` under MIT license and supports DS1, DS2, DS3, Bloodborne, Sekiro, and Elden Ring.

It's the direct descendant of DSMapStudio (DS1 era) and Yapped (params editor). It combines visual map editing, param editing, text editing, and event scripting in a single UI.

## What it solves

Creating Elden Ring mods without DSMapStudio means editing binary files by hand with hex editors — viable only for trivial cases. DSMapStudio opens FromSoftware's proprietary formats and shows them as editable UI: visual map editor with click-to-place, param tables with dropdowns, global search across param values.

For mod authors it's the difference between "this will take weeks" and "I can prototype in hours."

## What people use it for

**Map editing**: spawning enemies, NPCs, items at specific map positions.

**Param editing**: changing stats of weapons, spells, bosses, NPCs (HP, damage, scaling).

**Text editing (FMG)**: changing item names and descriptions.

**Event scripting**: editing game event logic (boss spawns, gate opens, etc.).

**Initial datamining**: exploring game data to understand its structure before modifying.

## Who shouldn't use it

If you only want to install mods (not create), DSMapStudio adds nothing — for end users, Mod Engine 2 is enough.

If you don't have patience for a technical learning curve (1-2 weeks of exploration), you won't take advantage of it.

If you play on console, doesn't apply — PC modding exclusive.

## How it's used in practice

1. Download the latest release from `github.com/soulsmods/DSMapStudio/releases`.
2. Extract to a dedicated folder.
3. Launch the app and select "Elden Ring" as target game.
4. Point to your game data folder (Steam path).
5. Edit what you need: param tables, map files (`.msb`), text files.
6. Export the modified files.
7. Place the exported files in Mod Engine 2's `mod/` structure.

## Honest limitations

**Steep curve**: the UI has hundreds of tabs and options. No guided tutorial outside the repo README and community videos.

**Limited docs**: README covers basics; lots of knowledge lives in the soulsmods Discord.

**Occasional crashes**: with large files (typical of Elden Ring), the app can hang. Save constantly.

**Not WYSIWYG**: although visual, you can't "see" your mod running from DSMapStudio — you have to export and test with Mod Engine 2.

**Updates tied to engine changes**: when Bandai patches ER with structural changes (rare but happens), DSMapStudio takes time to align.

## How to start

1. Visit `github.com/soulsmods/DSMapStudio` and read the README.
2. Download the most recent version from Releases.
3. Join the soulsmods Discord (link in repo) for troubleshooting.
4. Watch a few "DSMapStudio Elden Ring tutorial" YouTube videos for visual context.
5. Start with a simple mod (change a weapon's stats) before map editing.
