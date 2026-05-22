---
title: "Better Continents"
description: "Mod that replaces Valheim's procedural terrain generation with custom image-file-based maps. Lets you define heightmaps, biomes, POI placement, and forest coverage pixel by pixel."
quickTake: "Better Continents is the tool for custom map makers who want to hand-design a Valheim world. Not for the average player — you need to prep heightmap and biome images — but it unlocks possibilities vanilla worldgen can't deliver."
---

## What it is

Better Continents is a mod (MIT) originally built by **billw2012** and now maintained by **JereKuusela**. It replaces Valheim's procedural terrain generator with one that accepts **image maps** as input: grayscale PNGs that define height, biome layers, location placement, and forest coverage.

Combined with its own noise layer system (built on FastNoiseLite), it lets you mix procedural generation with manual override. There's an in-game UI to tune settings without rebooting the world, and configs export to a `.BetterContinents` file that travels with the world and can be shared.

## What it solves

Valheim's procedural worldgen is excellent — biomes with identity, reasonable distribution, endless exploration — but **you can't control it**. Want a world with a big central island and surrounding archipelago, or a single continent with alternating biomes? You can't. You roll seeds until something works (Valheim-map.world helps preview), but you don't design anything.

Better Continents solves that:
- **External heightmap**: a grayscale image (white = high, black = low) defines world relief.
- **Biome mask**: another image with specific colors defines which biome lives where.
- **POI placement**: force specific locations (boss altars, traders, crypts) at exact coordinates.
- **Forest coverage**: how many trees grow in each region.
- **Noise layers**: stack procedural noise on top of manual input to keep things from looking artificial.

For custom map creators or themed servers (RP, recreations of famous maps, custom challenges), Better Continents is the only serious option.

## Differentiation

No direct competitor in Valheim. **It's the only world-gen override mod** actively maintained. Other mods touch worldgen tangentially (e.g., Cartography Skill adds map mechanics, not terrain) but none replaces the generator wholesale.

Vs. **simple "more biomes" or "biome diversity" mods**: those rebalance vanilla worldgen parameters; Better Continents replaces the generator entirely with one you control. They're different layers of the problem.

Vs. **Valheim-map.world** (seed viewer): the viewer shows what a specific seed would generate. Better Continents lets you design the world from scratch, seed-independent.

## What people use it for

**Custom maps for RP servers** — communities recreating Skyrim, Westeros, Lord of the Rings, Earth maps in Valheim. The heightmap can map any coastline/relief reasonably well.

**Challenge maps** — worlds designed with hard biomes up-front (all Swamp, all Mountain) for groups seeking extra difficulty.

**Edited recreations of famous seeds** — take a known-good seed, modify it (move a too-far Haldor, shrink a giant Swamp), save as a new world.

**Competitive maps** — speedruns or races where every player plays exactly the same world (a shared `.BetterContinents` guarantees determinism).

**Narrative design** — for quest mods or custom stories, controlling world layout is necessary. Better Continents is the base.

## Who this tool is not for

If you just want to **play normal Valheim**: Better Continents is brutal overkill. Vanilla generation is excellent.

If you've never touched **Photoshop/GIMP/Krita** to make image maps: the curve is steep. You need to understand how grayscale maps to height, how to choose biome colors, how to avoid artifacts.

If your PC is modest: custom world gen can be heavy. Initial world generation is slower and more RAM-hungry.

If you mod for multiplayer with players who DON'T have the mod: it breaks. Better Continents must be on both clients and server.

## How it works in practice

1. Install Better Continents via r2modman/Gale/TMM (modding-utilities category).
2. Launch the game once so the mod generates its config folder and default settings.
3. Create a new world. Before generating, the mod's extra menu lets you point at a heightmap PNG, biome mask PNG, and forest mask PNG.
4. Generate the world. The `worlds/<world-name>/` folder contains world files + a `.BetterContinents` with the config.
5. To iterate, tweak settings in-game (mod UI, opens with a configurable keybind). Changes apply partially without regenerating — some require a new world.
6. To share, send the `.fwl` + `.db` + `.BetterContinents` and another player with the mod has your identical world.

For learning, the official docs at `jerekuusela.github.io/BetterContinents-Docs/introduction.html` cover each parameter with visuals.

## Honest limitations

**Steep learning curve**. Even with a UI, understanding how image maps translate to terrain takes hours. Docs are decent but assume comfort with image editing tools.

**Expensive iteration**. Some changes require regenerating the entire world, taking minutes. Design image, generate, see result, tune image, regenerate. The workflow isn't fast.

**Conflicts with other worldgen mods**. If your modlist has mods that touch world generation (rare but they exist), they can be incompatible.

**Multiplayer requires matching**. Server and clients need the same `.BetterContinents` to sync. A client without it can't connect.

**Iron Gate patches may break it**. Big patches can require an update before worldgen runs again. Typically JereKuusela ships fixes in days.

## Getting started

1. If you've never designed a custom map: read the docs at `jerekuusela.github.io/BetterContinents-Docs/` before downloading. You'll understand what it actually is.
2. Install Better Continents in a clean modlist (don't mix it with your main QoL modlist while experimenting).
3. Download a heightmap + biome mask example from the docs (samples are provided to get started).
4. Launch Valheim, create a world with those samples as input.
5. Explore in-game to see how the image map translated into terrain.
6. Edit the image in GIMP/Krita, regenerate the world, compare.
7. Once you've got the flow, design your own map from scratch.

For inspiration, public servers have shared their `.BetterContinents` files (search Valheim subreddits for "Better Continents map share").
