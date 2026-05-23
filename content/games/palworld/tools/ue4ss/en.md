---
title: UE4SS (Palworld)
description: Open-source modding framework that injects support for Lua and Blueprint mods into Unreal Engine games, including Palworld.
quickTake: The foundation almost every Palworld mod needs. Without UE4SS, most Nexus mods simply don't load. It's a dependency, not a final product — install it first, then install everything else.
---

## What it is

UE4SS (Unreal Engine 4/5 Scripting System) is an open-source framework that injects into Unreal Engine games to enable loading Lua and Blueprint mods, hook engine functions, and expose APIs to other mods. It's the foundation 80%+ of the Palworld modding scene is built on. There's a **Palworld-specific fork of UE4SS** because Pocketpair made engine changes that need adjustments in UE4SS (a specific MemberVariableLayout.ini).

## What problem it solves

By default, Unreal Engine doesn't load external code. For a mod to inject behavior (change stats, add UIs, alter pathfinding), something has to "activate" it from inside the engine. UE4SS is that something: a DLL that loads at game startup and opens the door for mods to exist.

## How it differs

In Unreal Engine moddable scenes, UE4SS is basically the standard. No serious alternative covers the same scope. For Palworld specifically, you need **the Palworld-linked version** of UE4SS, not the mainstream one — the mainstream one crashes the game with most mods.

## What people use it for

- **Prerequisite for almost any mod**: PalSchema, QoL mods, gameplay mods... almost all of them need it.
- **Develop new mods**: if you want to write a mod, UE4SS gives you the SDK.
- **Debug the game**: UE4SS exposes an in-game console with commands to inspect entities, modify values live.
- **Load Lua mods**: Lua scripts for automation (auto-craft, auto-Pal-management).

## Who this isn't for

If you won't use mods, you don't need it. UE4SS doesn't add features on its own — it's infrastructure. If you use mods in Palworld, you almost certainly need it.

## How it's used in practice

1. Download the Palworld-linked release from the GitHub repo or the official Nexus Mods entry.
2. Unzip everything into `Palworld/Pal/Binaries/Win64/`.
3. When you open Palworld, UE4SS injects automatically.
4. Verify it loaded: the UE4SS console appears in a second window (configurable).
5. Any mod you drop into `Mods/<ModName>/` from here loads when you start the game.

## Honest limitations

- **Tricky versioning**: UE4SS has mainstream and per-game forks. For Palworld you need the specific fork, not the latest mainstream. Downloading the wrong one crashes the game.
- **Paranoid antivirus**: like any DLL injection, some antivirus tools flag it. Add a manual exception.
- **Windows only**: the Unreal engine modding scene lives there. No Mac/Linux version.
- **Scattered documentation**: part is in the GitHub README, part in external docs, part in the UE4SS Discord. Real learning curve if you'll develop mods.

## How to get started

Visit the repo at github.com/UE4SS-RE/RE-UE4SS and download the Palworld-compatible release (release notes specify which version is which). Unzip into `Pal/Binaries/Win64/`. Confirm it loads by starting Palworld and seeing the UE4SS console appear. After that, you can install PalSchema and any compatible mod.
