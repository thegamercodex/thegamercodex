---
title: "Baldur's Gate 3 Script Extender"
description: "Norbyte's runtime hook that exposes BG3's internal functions to mods. The base dependency of much of advanced modding."
quickTake: "The invisible foundation of advanced BG3 modding. It does nothing on its own, but half the ecosystem of mods with real logic won't run without it. If a mod asks for Script Extender, it isn't optional."
---

## What it is

Baldur's Gate 3 Script Extender (BG3SE) is a runtime hook developed by Norbyte that exposes the game's internal functionality to mod code. It's open source and distributed from Norbyte's GitHub repository and as a Nexus entry.

Concretely, BG3SE lets mods run Lua logic and access game systems that basic modding doesn't touch. That's why it's a dependency: many mods don't just add files, they need this bridge to run their code.

## What problem it solves

Data-only modding (changing values, adding items) has a ceiling. Mods that change real behavior — new mechanics, conditional logic, systems that react to game state — need to run code, and the base game doesn't expose that door.

Script Extender opens that door. It's what separates cosmetic mods from mods that genuinely alter how BG3 works. Without BG3SE, a whole swath of the ecosystem simply wouldn't exist.

## What people use it for

**Enabling advanced mods**: any mod that runs Lua logic requires it as a base.

**Supporting frameworks**: tools like Mod Configuration Menu lean on the capabilities BG3SE exposes.

**Accessing internal systems**: mod authors use the API to interact with mechanics data modding can't reach.

**Maintaining per-patch compatibility**: the manager downloads the BG3SE version matching the game's current build.

## Who this tool is NOT for

If you only want cosmetic mods — skins, visual replacements, simple UI tweaks — you probably don't need Script Extender; many of those mods work without it.

If you play on console, BG3SE doesn't apply: console modding goes through mod.io's official catalog, which doesn't include Script Extender-dependent mods.

## How it's used in practice

1. Confirm that a mod in your setup asks for Script Extender.
2. Use BG3 Mod Manager: Tools → Download & Extract Script Extender, which fetches the right version for your patch.
3. Alternatively, manually install the repo files into the game's bin folder.
4. Verify the Script Extender console appears when launching the game with mods active.
5. After each Larian update, re-download the updated version.

## Honest limitations

**Tied to the game build**: a BG3SE version compiled for one patch won't work on another. After an update you must update it or the mods depending on it fail.

**Does nothing alone**: it's infrastructure; without mods using it, it adds nothing visible.

**Technical setup**: even though the manager simplifies it, it's still a component a casual player can find intimidating.

**PC only**: no console presence.

## How to get started

The safest way is to let BG3 Mod Manager install it for you: Tools → Download & Extract Script Extender pulls the correct signed version from Norbyte's GitHub. After installing, launch the game with your mods and confirm the BG3SE console appears. Remember to re-update it every time Larian ships a new patch.
