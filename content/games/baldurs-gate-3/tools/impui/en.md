---
title: "ImpUI (ImprovedUI)"
description: "UI framework for BG3 that stabilizes and extends the interface. Required by many race, class, and UI-element mods."
quickTake: "The UI framework half the race and class mod ecosystem takes for granted. It loads first in the order, and without it many content mods show a broken interface. Infrastructure, not content."
---

## What it is

ImpUI (ImprovedUI) is an interface framework for Baldur's Gate 3 that expands and stabilizes the game's UI so other mods can integrate without breaking it. It's distributed on Nexus Mods and is one of the most common dependencies in content modding.

Its role is foundational: it adds no gameplay by itself, it prepares the interface so race, class, and other UI mods can inject their options without generating conflicts or broken layouts.

## What problem it solves

When a mod adds a new race or class, it has to show it on the character creation screen. If several mods touch the same UI without a common framework, the interface breaks: options that don't appear, cut-off lists, overlapping menus.

ImpUI provides that common framework. It standardizes how mods extend the UI, so multiple content mods coexist without fighting over the interface. That's why so many mods list it as a requirement.

## What people use it for

**Enabling race and class mods**: most require ImpUI to show their options in character creation.

**Avoiding broken UI**: keeping the interface stable when several content mods coexist.

**Serving as an early-load base**: it sits at the start of the load order as a dependency of mods that come after.

**Supporting custom UI elements**: giving authors a framework to inject interface without reinventing it.

## Who this tool is NOT for

If you don't use mods that touch the UI — only balance changes, items, or tweaks that don't add menu options — you may not need ImpUI. Install it only if a mod asks for it.

If you play on console, it doesn't apply: these frameworks live in PC modding via Nexus, outside the official catalog.

## How it's used in practice

1. Check whether a mod in your setup lists ImpUI as a requirement.
2. Download ImpUI from its Nexus Mods page.
3. Add it in BG3 Mod Manager and place it early in the load order.
4. Then install the content mods that depend on it.
5. Confirm in character creation that the new options appear correctly.

## Honest limitations

**It's a dependency, not content**: on its own it changes nothing visible; its value is enabling other mods.

**Load-order sensitive**: if it doesn't load early, mods depending on it fail; load order matters.

**Tied to the patch**: after Larian updates, it may need updating to stay compatible.

**PC only**: no console presence.

## How to get started

Don't install it just in case: add it when a specific mod asks for it as a requirement. Download it from its official Nexus page, put it at the start of your load order in BG3 Mod Manager, then install the content mods that need it. If the character creation screen shows the new options without glitches, it's working.
