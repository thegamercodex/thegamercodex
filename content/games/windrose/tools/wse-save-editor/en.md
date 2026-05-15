---
title: "WSE Project — Windrose Save Editor and ItemDB"
description: "Save editor with integrated item database for Windrose. Lets you edit inventory, stats, talents, and discoveries directly on the save file without launching the game. Distributed via Nexus Mods."
quickTake: "If you want to respec without spending resources or test a build without grinding, this editor lets you. Use responsibly — single-player or servers where you're authorized, not competitive multiplayer."
---

## What it is

WSE Project (Windrose Save Editor and ItemDB) is a Windows tool that opens and modifies Windrose save files. Includes an integrated item database: instead of knowing each weapon or armor's internal ID, you can search by name and the editor inserts it into the inventory. Also allows resetting talent allocation, adjusting stat points, granting resources, and unlocking discoveries.

## What problem it solves

Windrose has limited respec and end-game item crafting that burns hours of farming. WSE Project offers an alternative path for players who'd rather spend that time on other parts of the game: testing combat, exploring new regions, or simply experimenting with builds without permanent commitment. For modders and theorycrafters, it's also the tool to validate hypotheses without investing full runs.

## Differentiation

- Versus the **in-game console** (enabled by Simple Mod Loader): the console allows spawn and commands but requires knowing command syntax. WSE Project offers structured UI with browse capability.
- Versus a **web planner** (Windrose.tools): the planner is projection, WSE Project is actual save mutation.
- Versus **QoL mods** like Hero Reforged: mods buff stats globally. WSE Project makes targeted edits — more surgery, less sledgehammer.

## What people use it for

- **Unrestricted respec**: reset everything and reallocate 12 talent + 45 stat points without paying the penalty.
- **Validate builds before grinding**: grant the gear needed, test if the build works, decide whether to invest the real grind.
- **Recover corrupted saves**: if a bug broke your progress, there's a chance to manually salvage what broke.
- **Skip tedious grind**: time-constrained players who want to see end-game content without the prior 50+ hours.
- **Modder workflow**: test that a custom items mod works by inserting the item directly into the save.

## Who this tool is NOT for

If you play competitive multiplayer or on PvP servers where the host detects cheating, don't use it — you can be kicked/banned. If part of the fun for you is organic progression, this tool ruins the experience. If you play on Mac/Linux, no cross-platform build exists.

## How it's used in practice

1. **Back up the save first** — always. Copy `%LOCALAPPDATA%\Windrose\Saved\SaveGames\` before touching anything.
2. Download [WSE Project from Nexus](https://www.nexusmods.com/windrose/mods/153). Free subscription required.
3. Close the game before editing — the editor doesn't support hot-reload.
4. Open the app, load your save from the "Open" dialog.
5. Navigate the tabs (Inventory, Stats, Talents, Discoveries) to edit what you need.
6. Save and open the game to verify changes.

## Honest limitations

- **Save format may change with patches**: when Windrose patches, the editor may not open new saves until the author releases an update.
- **No in-editor undo**: if you commit a wrong change to the save, there's no undo — hence backup first.
- **Item database may have gaps**: very recent items may not be in the DB yet.
- **Closed source**: you have to trust the author. The tool touches a binary save file, non-trivial risk.
- **Not FOSS**: no fork option if the author abandons it.

## How to get started

Back up your save first. Download WSE Project, open your save (not the original — the copy). Start with a small change (add 100 gold) to verify the pipeline works. Once confirmed, you can make larger edits. For safe use, maintain two saves: one edited and one "pure" untouched.
