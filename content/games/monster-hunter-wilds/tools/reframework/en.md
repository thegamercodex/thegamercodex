---
title: "REFramework"
description: "Open-source modding framework for RE Engine games, including Monster Hunter Wilds, with a Lua scripting API that overlays and community mods run on."
quickTake: "The foundation of PC modding. It's not a directly-used tool: it's the base that HunterPie and most mods run on. If you're going to mod Wilds, you start here."
---

## What it is

REFramework is an open-source modding framework (MIT license, praydog's repo) for games built on Capcom's RE Engine, including Monster Hunter Wilds. It provides a Lua scripting API and an injection system that lets other mods hook the game. It's free and is the infrastructure much of the PC mod ecosystem leans on.

## The problem it solves

Without a common framework, each mod would have to reinvent how it accesses the game's memory and functions. REFramework standardizes that: it offers a stable layer so modders can write scripts and overlays without fighting the engine internals. For the player, it means tools like HunterPie and many QoL mods have a foundation to run on.

## Differentiation

It doesn't compete with HunterPie or a mod manager: it enables them. HunterPie is the app you see; REFramework is what lets it read the game state. Fluffy Mod Manager organizes and installs mods; REFramework is the technical base many of those mods require. It's infrastructure, not an end product.

## What people use it for

- **Overlay base**: enabling HunterPie and other overlays that read game state.
- **Running Lua scripts**: using QoL mods written on its API.
- **Developer menu**: accessing in-game debug and inspection tools.
- **Modding foundation**: a prerequisite for much of the mod catalog.

## Who it isn't for

Console players can't use it. If you're not going to install mods, you don't need it. And if you expect a polished ready-to-use interface, this is a technical layer: its value is in what it enables, not its own UI.

## How it's used in practice

1. Download REFramework from praydog's repo (the build matching Wilds).
2. Place the file (typically `dinput8.dll`) in the folder with the game's executable.
3. Launch the game: the framework loads alongside it.
4. Install the mods or overlays that depend on it.
5. Update the framework after each big game patch.

## Honest limitations

- **PC only**: doesn't apply to consoles.
- **Indirect use**: its value is enabling other mods, not a function of its own for the casual player.
- **Fragile after patches**: the game's anti-tamper can break compatibility until it updates; crashes have been reported.
- **Online mod risk**: using mods in public multiplayer carries risk; respect the game's rules.

## How to get started

Download the REFramework build for Wilds from praydog's GitHub and place it in the game folder. If what you want is an overlay, a mod manager like Fluffy simplifies installing the framework and mods together.
