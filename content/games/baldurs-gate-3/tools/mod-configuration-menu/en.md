---
title: "Mod Configuration Menu"
description: "Framework that adds a centralized in-game menu to configure BG3 mods. A library many option-bearing mods depend on."
quickTake: "The single control panel for all your configurable mods. Instead of editing files per mod, MCM gathers their options into one in-game menu. If your mods have settings, this is where you change them."
---

## What it is

Mod Configuration Menu (MCM) is a Baldur's Gate 3 modding framework that provides a centralized in-game interface where players adjust the options of mods that support it. It's distributed on Nexus Mods and leans on the Script Extender's capabilities.

It's a library mod: it adds no content of its own, it gives other mods a consistent place to expose their settings. Authors who integrate MCM save themselves from building their own configuration UI.

## What problem it solves

Without a common framework, each configurable mod handles its options its own way: editing a text file, using a special in-game item, or simply offering no adjustments. For the player, that means a different method per mod and zero centralization.

MCM unifies all of that. Compatible mods expose their options in a single in-game menu, with sliders, toggles, and dropdowns. Changing a mod's behavior becomes a matter of opening MCM and tapping the option, without leaving the game or editing files.

## What people use it for

**Configuring mods from one place**: adjusting the settings of all compatible mods in a common menu.

**Avoiding file editing**: changing options with UI instead of editing configs by hand.

**Supporting MCM-dependent mods**: many mods list MCM as a requirement for their settings.

**Changing settings without restarting**: tapping options in-game and seeing the effect without reloading in many cases.

## Who this tool is NOT for

If none of your mods support MCM, installing it adds nothing: it's infrastructure that only gains value when other mods use it.

If you play on console, it doesn't apply: MCM lives in PC modding via Nexus and depends on Script Extender, outside the official catalog.

## How it's used in practice

1. Check whether a mod in your setup asks for MCM as a dependency.
2. Confirm you have Script Extender installed, since MCM leans on it.
3. Download MCM from Nexus and add it in BG3 Mod Manager, above the mods that depend on it.
4. Install the MCM-compatible mods.
5. Open the MCM menu inside the game to adjust the options.

## Honest limitations

**Requires Script Extender**: without BG3SE, MCM doesn't work, which adds a setup step.

**It's a dependency, not content**: on its own it changes nothing; its value is enabling other mods' configuration.

**Load order**: it must sit above the mods that use it or those mods won't find their panel.

**PC only**: no console presence.

## How to get started

Install it when a mod asks for it as a requirement. Make sure you have Script Extender first, download MCM from its Nexus page, and place it in the load order above the mods that depend on it in BG3 Mod Manager. Once in-game, open the MCM menu and you'll find the options for all your compatible mods there.
