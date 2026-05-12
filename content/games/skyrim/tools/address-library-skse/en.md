---
title: "Address Library for SKSE Plugins"
description: "Library mapping Skyrim memory addresses to stable IDs, letting SKSE plugins work across game versions without recompilation."
quickTake: "Invisible mod dependency: without it, half the SKSE plugins in your modlist won't load. Install and forget — it only exists to make other mods work."
---

## What it is

Address Library for SKSE Plugins is a support library maintained by meh321 and the community. Distributed via Nexus (`nexusmods.com/skyrimspecialedition/mods/32444`) and GitHub. It's a mandatory dependency for hundreds of modern SKSE plugins.

Functionally: it provides a mapping between absolute memory addresses in `SkyrimSE.exe` and stable IDs that plugins can use. This lets an SKSE plugin compiled against one Skyrim version keep working when Bethesda ships an update — the plugin asks for the ID, the library resolves the current address.

Without the library, each SKSE plugin would have to be recompiled after every Bethesda update. With it, many keep working because the ID is stable even though the address changes.

## What problem it solves

Before Address Library, the SKSE ecosystem was fragile: Bethesda would update Skyrim, the binary's internal addresses would shift, and every SKSE plugin (C++ DLL) would break until each author recompiled.

With Address Library:
- meh321 (and the community) updates the ID database after each Bethesda update.
- Plugin authors use IDs instead of hard-coded addresses.
- When Bethesda updates, authors don't need to recompile — you just need the updated database.

This dramatically lowered fragility. Old plugins can keep working years after their last official release.

## Differentiation

Versus **VR Address Library**: VR Address Library is the equivalent for Skyrim VR. Same concept, different database. If you play VR, that's the one you need.

Versus **CommonLibSSE-NG**: CommonLibSSE-NG is a complete programming framework for SKSE plugins. Address Library is part of its infrastructure — a plugin built on CommonLibSSE-NG indirectly uses Address Library.

Versus **hard-coded address offsets**: the old alternative. It only worked for the exact game version. After an update, immediate breakage.

## What people use it for

**Enable modern SKSE plugins**: hundreds of modern mods require Address Library in their prerequisites. Without it, the plugin won't load (log message: "address library not found").

**Future-proofing a modlist**: having Address Library installed means that when Bethesda updates Skyrim, most of your modlist keeps working once the database is updated.

**Support CommonLibSSE-NG plugins**: any mod based on CommonLibSSE-NG (most recent plugins) requires it indirectly.

## Who this tool is NOT for

If you only use mods that aren't SKSE plugins (texture packs, ESP-only mods), you don't need Address Library.

If you only mod Skyrim VR, make sure to use VR Address Library instead of the SE/AE one.

But honestly: if you mod Skyrim to the point of having SKSE installed, the answer is always "install it, it does no harm".

## How to use it in practice

1. Download Address Library from Nexus (`nexusmods.com/skyrimspecialedition/mods/32444`).
2. The Nexus page has **two files**: one for SE 1.5.97 ("All in one") and another for AE/1.6+ ("Anniversary Edition"). Pick based on your exact Skyrim version.
3. Install like any other mod in MO2/Vortex.
4. Activate. Done.

There's no configuration, no UI. The library just sits there waiting for other plugins to ask for it.

## Honest limitations

**Wrong version**. If you install the SE 1.5.97 version while running AE/1.6.x, all plugins fail. Verify your Skyrim version first.

**Updates needed after Bethesda patches**. When Bethesda ships a patch, meh321 publishes an updated database. There's a delay (sometimes hours, sometimes days).

**It's not a visible mod**. This can confuse new users: you install Address Library and nothing happens visually. Its job is enabling other mods.

**Conflicts with multiple versions**. If you accidentally have both the SE and AE versions installed, plugins may pick the wrong one. Keep only the matching one.

## How to get started

1. Verify your Skyrim version (in Steam → Properties → Local Files).
2. On the Nexus page, pick "All in one" if you have SE 1.5.97 or "Anniversary Edition" if you have 1.6+.
3. Install via MO2/Vortex with "Mod Manager Download".
4. Activate — load order position doesn't matter because it's an SKSE plugin (loaded outside the .esp system).
5. Verify it works: install an SKSE plugin that requires it (e.g., SkyUI or Powerofthree's Tweaks). If it loads without warnings, Address Library is fine.

It's one of the easiest mods to install and one of the most important in a modern modlist.
