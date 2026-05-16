---
title: "Simple Mod Loader And Console Enabler"
description: "Foundational mod hosted on Nexus Mods that enables loading PAK files outside the game's canonical directory and unlocks the in-game console for debug/cheats. Without it, most PAK mods don't work."
quickTake: "The silent prerequisite of practically any mod you'll install. If you're just entering Windrose's modding ecosystem, this is the first file you download."
---

## What it is

Simple Mod Loader And Console Enabler is a mod on Nexus Mods (entry #2 in the game's listing, indicating its early impact) that does two core things: enable loading PAK files from a `~mods/` folder adjacent to the game directory, and unlock the in-game console traditionally shipped but disabled. Free, no Nexus subscription required to download.

## What problem it solves

Windrose in Early Access doesn't expose official hooks for loading mods. By default, custom .pak files aren't loaded by the game engine — mods are inert. Simple Mod Loader injects the behavior that lets the engine recognize the `~mods/` folder and load any .pak/.ucas/.utoc file inside. Without it, the entire PAK mod ecosystem doesn't function.

## Differentiation

- It's not a mod manager — doesn't install, doesn't organize, doesn't toggle. It's a loader: enables the game to read PAKs.
- **Windrose Mod Manager** (Nexus) and **Vercadi's** automate installation on top of Simple Mod Loader, assuming it's installed.
- In summary: Simple Mod Loader is the base of the stack, mod managers are the UX on top.

## What people use it for

- **Enable any PAK mod**: prerequisite for Expanded Horizons, Pirate Depot, UnLockShip, every QoL mod out there.
- **Access the in-game console**: cheats, debug, spawn items, give XP. Useful for testing or for players who want to skip grinding.
- **Enable hidden dev features**: community-documented command list the dev left accessible but unexposed.
- **Base for modders**: if you want to create a PAK mod, this is the loader that will load your work.

## Who this tool is NOT for

If you don't want to mod the game and only want to play vanilla, don't install it — no value.

## How it's used in practice

1. Sign up for Nexus Mods (free), go to [nexusmods.com/windrose/mods/2](https://www.nexusmods.com/windrose/mods/2).
2. Manually download the .zip file.
3. Extract the contents to the game's root directory (typically `C:\Program Files (x86)\Steam\steamapps\common\Windrose`).
4. If your install doesn't have a `~mods/` folder, create it (with the tilde — NOT `mods` alone).
5. Restart Steam so it detects the new files. Launch the game.
6. For console: tilde key (`~`) during the game. If it doesn't open, verify Simple Mod Loader is correctly installed.

## Honest limitations

- **Client and server must match**: if you connect to a multiplayer server, both sides need the same PAKs loaded or you'll be kicked.
- **Updates with every game patch**: when Windrose patches, the loader may break temporarily until the author releases a compatible version.
- **No auto-update**: you have to manually check the Nexus page to update.
- **Not FOSS**: closed codebase, you have to trust the author.
- **Cheats and bans**: if you enter a PvP server using console to give yourself items, you can be kicked/banned by the server owner.

## How to get started

Sign up for Nexus Mods if you haven't, download Simple Mod Loader, follow the README. Once installed, test with a lightweight mod (Faster Cooldowns or similar) to verify the stack works before investing in mod managers or more complex sets.
