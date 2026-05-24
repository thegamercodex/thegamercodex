---
title: RustEdit
description: Standalone Rust map editor with terrain, splat, biome, topology, alpha, and prefab editing plus an Oxide extension for custom IO.
quickTake: If you want to run a server with a hand-designed map (not procedural), RustEdit is the community's editor. The curve is steep but the custom-map ecosystem on Codefling depends on it.
---

## What it is

RustEdit is a standalone Rust map editor, distributed as a click-to-run executable (no Unity or dev tools needed). It covers terrain, splat (textures), biome, topology, alpha, and prefab placement, with an optional Oxide extension that exposes Rust.World SDK functions not available vanilla — modifying Cargo Ship and Bradley APC paths, creating custom puzzles, custom vending machines and loot tables. Built by k1lly0u and actively maintained. Some advanced features are Patreon-only, but the base editor is free.

## What problem it solves

Rust has procedural maps by default (Facepunch's base), but a server with a custom map (cohesive, lore-driven, with custom monuments) is what separates popular servers from servers that die in the second wipe. Manually editing a .map file requires knowing the game's binary format, prefabs, stability mechanics, and physics — without an editor, basically impossible. RustEdit gives you a GUI for all of that.

## Differentiation

The main alternative is Rust-Map-Editor (RMME) by Adsito, based on Unity Editor and open-source. RMME is more powerful for advanced map makers who already know Unity (importing custom tools, scripting) but has a high barrier to entry (installing Unity, configuring the project). RustEdit is more accessible: download, open, edit. For 90% of map makers, RustEdit is the correct entry; RMME is the upgrade when it falls short.

## What people use it for

- **Designing custom maps for your server**: terrain by hand, biome splat painting, custom or stock monument prefab placement.
- **Modifying Cargo Ship / Bradley paths**: have the Cargo follow a custom route or the Bradley patrol a different area.
- **Creating custom puzzles**: add keycard doors, electricity puzzles with specific outputs.
- **Custom vending machines and loot tables**: NPCs / vending with items you define, not stock ones.
- **Marketing your map on Codefling**: many map makers sell their designs on Codefling, RustEdit is their primary creation tool.

## Who this isn't for

If you just want to generate a decent procedural map for your server, RustMaps covers that without needing RustEdit. If you've never touched a map editor (not Source Engine, not Bethesda, not Unity), RustEdit's curve is high — expect 20-30 hours to make your first useful map. If you only play without server admin, you have no reason to use it.

## How to use it

1. Download RustEdit from rustedit.io (free).
2. Open the editor, choose between new map (procedural base) or load existing.
3. For terrain, use height/smooth/flatten brushes.
4. For splat (texture), paint biomes and surface types with brushes.
5. For prefabs (monuments, custom buildings), drag from the library to desired position.
6. For custom IO (puzzles, paths), install the Oxide extension and configure from the plugin.
7. Export as .map and upload to the server, configuring server.cfg to load the custom map.

## Honest limitations

- **Windows only**: no macOS or Linux version.
- **Steep curve**: if you've never used a map editor, expect several sessions to understand the flow.
- **Some features are Patreon-only**: advanced features (height masks, advanced topology tools) require k1lly0u's Patreon (~$5/mo).
- **Custom IO requires Oxide on the server**: if your server runs vanilla, custom IO won't work.
- **Maintained by a single dev**: if k1lly0u pauses the project, updates may lag behind Facepunch patches.

## Getting started

Download from rustedit.io. To start, see the in-app "Getting Started" tutorial and/or the official RustEdit YouTube tutorial playlist. The official Discord (linked from the site) has active channels where the community answers questions and shares loose prefabs. If you'll sell maps, open a Codefling account and read their "submitting a map for sale" guide.
