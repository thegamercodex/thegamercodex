---
title: "Elden Ring Debug Tool"
description: "Nordgaren's offline tool for Elden Ring: inspect runtime values, spawn items, teleport, modify attributes, and test mods without restrictions."
quickTake: "If you mod Elden Ring or need to test extreme builds in NG+++, this tool accelerates everything. For normal gameplay, it's overkill — it's built for testing and debugging."
---

## What it is

Elden Ring Debug Tool is a standalone application developed by Nordgaren (a recognized Souls community modder). It lives at `github.com/Nordgaren/Elden-Ring-Debug-Tool` under open-source license. It's an Elden Ring-specialized cheat-engine/debug tool, exclusively for offline use.

It launches the game in offline mode (no EAC), connects to the process, and exposes a UI with tabs to inspect and modify game state at runtime.

## What it solves

Creating mods or testing extreme builds requires fast iteration: changing stats, teleporting between areas, spawning items for testing, seeing internal values. Doing it "legitimately" would mean grinding hours of game time for runes/Larval Tears.

Nordgaren Debug Tool solves this by exposing the game state directly: clicks to teleport, sliders for HP/runes/levels, dropdowns for item spawning.

It also solves mod testing: if you're developing a mod, you can verify your new item appears correctly without playing all the way to where it drops.

## What people use it for

**Testing mods in development**: spawn mod items to verify they load correctly.

**Runtime value verification**: read internal character and enemy attributes to understand mechanics.

**Speedrun routing**: testing alternate NG routes without investing time in setup.

**Cheat for fun runs**: to play offline with outlandish builds that aren't legitimate (infinite HP, all items, etc.).

**Validating fixes**: when you report a bug, you can recreate the conditions quickly.

## Who shouldn't use it

If you want to keep your character compatible with vanilla online, don't use it — using the tool "taints" your save.

If you only play legitimately and don't mod, it adds nothing — it's built for technical cases.

If you're ethically uncomfortable with cheat tools (even offline-only), don't use it.

If you play on console, doesn't apply — PC only.

## How it's used in practice

1. Download the latest release from `github.com/Nordgaren/Elden-Ring-Debug-Tool/releases`.
2. Launch the game in offline mode first (via Mod Engine 2 or EAC bypass).
3. Launch the Debug Tool.
4. The tool detects the process and attaches automatically.
5. Use tabs (Player, Items, Bosses, Map, Network) to inspect/modify.
6. Close the tool before exiting the game to avoid crashes.

## Honest limitations

**Online incompatible**: using the tool with EAC active is a TOS violation and bannable. The tool was designed for offline only.

**Save tainted**: once used, your save is marked and isn't compatible with vanilla online without risk.

**Occasional bugs with new patches**: when Bandai patches ER, the tool may fail until Nordgaren updates (usually 1-2 weeks).

**Not a mod manager**: the tool doesn't load mods; it only modifies runtime. For real mods you need Mod Engine 2.

**Technical UI**: dropdowns with hex IDs, tables with internal field names. Not user-friendly.

## How to start

1. Make sure the game is in offline mode (Mod Engine 2 forces this, or set up EAC bypass).
2. Download the tool from `github.com/Nordgaren/Elden-Ring-Debug-Tool/releases`.
3. Extract and launch the executable.
4. Start with the game already loaded on an offline-only save.
5. Explore tabs read-only first to understand what's exposed.
