---
title: "Mod Engine 2"
description: "The community's de facto official mod loader for Elden Ring and other modern Souls. Runtime injection without touching the game folder."
quickTake: "If you're going to install any PC mod for Elden Ring, Mod Engine 2 is the base — overhauls, Seamless Co-op, and most big mods assume it installed. It's infra, not optional."
---

## What it is

Mod Engine 2 is an open-source mod loader maintained by the soulsmods collective (the same people behind DSMapStudio). It succeeds the original Mod Engine (DS3 era) and supports Elden Ring, DS3, and Sekiro natively. The repo lives at `github.com/soulsmods/ModEngine2` under the MIT license.

Technically it's a DLL injector written in Rust. It gives you a launcher executable (`launchmod_eldenring.bat`) that starts the game with mods loaded from a separate `mod/` folder, without writing anything to the Steam directory.

## What it solves

Elden Ring mods before Mod Engine 2 required replacing files in the game folder or using the original Mod Engine with fragile configs. This caused problems: Steam updates overwrote your mods, reinstalling required redoing everything, and any conflict between mods was invisible.

Mod Engine 2 solves this with runtime injection: mod files live in their own folder, and launching the game with the matching bat injects them at runtime. Steam updates don't touch your mods. Install something, it breaks, you uninstall and you're back to clean vanilla.

It also solves the anti-cheat problem: launching from Mod Engine 2, the game runs in offline mode (with EAC bypassed), avoiding bans.

## What people use it for

**Base for overhauls**: ELDEN RING Reforged, The Convergence, Garden of Eyes — all assume Mod Engine 2 installed.

**Base for QoL mods**: improved UI mods, hotkeys, item drop rate adjustments, redesigned Torrent model.

**Seamless Co-op support**: LukeYui's mod loads via Mod Engine 2.

**Safe testing**: try a mod, don't like it, uninstall with no residue in the game folder.

**Multi-profiles**: keep several Mod Engine 2 instances with different mods (vanilla+, overhaul, testing) and rotate between them.

## Who shouldn't use it

If you play Elden Ring on console (PS5/Xbox), mods don't exist on those platforms — Mod Engine 2 is PC-exclusive.

If you only plan to install 1-2 cosmetic mods (armor re-skins) that don't require a mod loader, you can technically skip it — but most serious mods still assume it.

If you want to play vanilla online with EAC active, you can't use Mod Engine 2 — it forces offline mode.

## How it's used in practice

1. Download the latest release from the GitHub repo (`github.com/soulsmods/ModEngine2/releases`).
2. Extract the ZIP to any folder (not necessarily the game's).
3. Read the README — it explains the expected `mod/` folder structure.
4. Place the mod files you want (following the README structure) inside `mod/`.
5. Double-click `launchmod_eldenring.bat` to start the game with the mod loaded.
6. Verify it loaded correctly (typically a mod splash screen or modified title screen).

For Seamless Co-op specifically, it has its own launcher but internally uses Mod Engine 2.

## Honest limitations

**Not a mod manager**: Mod Engine 2 only loads what's in its `mod/` folder. No UI, no conflict resolution, no dependency management. If you want a mod manager with UI, use Vortex or another tool — but most of the ER community prefers a manual stack with Mod Engine 2.

**Tied to the game patch**: every time Bandai updates Elden Ring, Mod Engine 2 may break until updated. The team is fast (1-3 days typically) but there's a window.

**Doesn't bypass anti-cheat for online**: only enables offline play. It's not a cheating tool — the devs are explicit about that.

**Manual setup**: no GUI installer. It's extracting a ZIP + placing files in a specific structure + launching a bat. For technical users that's nothing; for beginners it's the main barrier.

## How to start

1. Visit `github.com/soulsmods/ModEngine2/releases`.
2. Download the most recent version (Elden Ring build).
3. Extract to any folder (e.g., `D:\ModEngine2`).
4. Before loading mods, test the vanilla launcher to confirm it starts.
5. When it works, download your first mod (e.g., Seamless Co-op) and follow its specific README.
