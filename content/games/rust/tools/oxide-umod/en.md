---
title: Oxide / uMod
description: Rust's dominant modding framework with a repo of 1400+ free plugins, permissions system, hooks, and cross-version compatibility.
quickTake: If you're going to host a modded server, Oxide is the default — most community plugins were written for it. Carbon is the modern alternative; Oxide is the incumbent covering 90% of servers.
---

## What it is

Oxide (rebranded to uMod in 2018, though the community keeps saying Oxide interchangeably) is an open-source modding framework for Rust maintained since 2014. It provides a hook system that intercepts game events (player connect, entity spawn, damage, etc.) and lets C# plugins modify behavior. The umod.org repository has 1400+ free plugins, all open-source, with versioning and dependency systems.

## What problem it solves

Vanilla Rust is brutal and inflexible — fixed gather rates, limited server config, no economy, no kits, no teleport. To run a server with an active community you have to customize: tweak gather rates, give starter kits, add shops, create PvP arenas, whatever. Oxide is the framework that makes that possible without recompiling the server or touching the game's code. You install Oxide, drop plugins in a folder, restart.

## Differentiation

The real alternative is Carbon (carbonmod.gg), a modern framework with 30-40% faster boot times and ~99% Oxide cross-compatibility. Carbon runs the same .cs plugins and many devs now release dual or "Carbon only." The question between the two: Oxide wins on historical stability and catalog (every plugin was written thinking about it); Carbon wins on performance and new features. For new servers in 2026, many choose Carbon. For servers already running Oxide without issues, there's no urgency to migrate.

## What people use it for

- **Customize gather rates**: GatherManager and similar adjust rates by resource type.
- **Permission system for staff**: PermissionsGUI + commands for granular admin permissions.
- **Starter kits for wipes**: Kits plugin so new players start with a loadout.
- **Anti-cheat and bans**: NoEscape, BetterChat, death event logging plugins.
- **Custom events**: shop economies, arenas, event scheduling, raid block on cooldown.
- **Coexist with Carbon**: 99% of uMod plugins run on Carbon unchanged.

## Who this isn't for

If you play on Facepunch officials (vanilla), you can't use Oxide — it only applies to community-hosted servers. If you want admin without touching plugins, officials are the best option. If your server needs critical performance with hundreds of plugins, Carbon may give better results.

## How to use it

1. Your Rust dedicated server has to be installed (via SteamCMD).
2. Download the latest Oxide.Rust release from umod.org/games/rust.
3. Extract over the server folder (RustDedicated root).
4. Restart the server — Oxide installs automatically and creates `oxide/plugins/` and `oxide/config/`.
5. To install plugins: download .cs file from umod.org/plugins, drop in `oxide/plugins/`, it auto-loads.
6. To configure: .json files in `oxide/config/` are generated on plugin load, edit with a text editor.

## Honest limitations

- **Active plugins can break with big patches**: when Facepunch refactors something major, old plugins can break until their dev updates them.
- **Carbon performance edge**: Carbon boots 30-40% faster and uses less RAM in recent benchmarks.
- **No native GUI for management**: everything is files + commands. Hosting panels (Pterodactyl, etc.) abstract that, but Oxide alone doesn't.
- **uMod paid plugins don't exist**: everything on umod.org is free. For paid (premium) plugins, you go to Codefling.
- **Migrating to Carbon is relatively easy but needs validation**: the ~1% of incompatible plugins are typically those depending on Oxide internals.

## Getting started

Install Rust dedicated server first (hosts like Pterodactyl, RocketNode, Shockbyte abstract this with templates). Then, download Oxide from umod.org/games/rust and follow the install guide on the uMod wiki. To start with plugins, the essentials most install first are: Kits, BetterChat, GatherManager, PermissionsGUI. The uMod Discord community answers installation questions.
