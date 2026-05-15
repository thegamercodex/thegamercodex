---
title: "BodySlide and Outfit Studio"
description: "Open-source editor for customizing body types (CBBE, UNP, 3BA) and adapting armor meshes to the chosen body without breaking rigging."
quickTake: "If your modlist includes CBBE, UNP, or 3BA plus custom armor, BodySlide is where you bring it all together. Without it, armor doesn't fit the body and you get clipping or gaps."
---

## What it is

BodySlide and Outfit Studio is an open-source suite (GPL-3.0) maintained by ousnius and Caliente. Distributed from Nexus (`nexusmods.com/skyrimspecialedition/mods/201`) and GitHub. It supports Skyrim Special/Anniversary Edition, Skyrim LE, Fallout 4, and other Bethesda-asset games.

It bundles two apps:
- **BodySlide**: a slider-driven editor. Load a preset (body shape) and a set of compatible armor pieces, and the app generates the final meshes with the body shape applied.
- **Outfit Studio**: full mesh editor. Lets you take an armor, fit it to a new body type, fix clipping, conform meshes, and manage weights.

## What problem it solves

Skyrim ships with two vanilla body types (female and male, no variation). The community built body replacements: CBBE (Caliente's Beautiful Bodies Edition), UNP, 3BA, HIMBO, etc. Each defines a different mesh for the body.

The issue: if you install CBBE, your PC has a different body than vanilla, but the game's armor pieces are still modeled for the original body. Result: clipping, gaps, armor floating.

BodySlide solves this by generating armor adapted to your body. Functionally:
- Pick a preset (e.g., CBBE "Vanilla SSE" or a custom preset).
- Check "Build" on each armor you have installed.
- BodySlide generates the fitted meshes, saves them to the correct folder, and overwrites the originals.

## Differentiation

Versus **installing body mods directly**: many body mods (CBBE, UNP) ship with pre-generated meshes for some armor sets. But they only cover a specific body shape — if you want to customize the shape or fit third-party armor, BodySlide is indispensable.

Versus **Blender / 3ds Max**: professional 3D editors are more powerful but the curve is huge. BodySlide is optimized for the Skyrim workflow — open, adjust sliders, "Build", done.

Versus **Outfit Studio standalone**: Outfit Studio comes bundled with BodySlide. For casual use you only use BodySlide; for advanced editing of new meshes, Outfit Studio.

## What people use it for

**Generate armor compatible with CBBE/UNP/3BA**: the main use case. Install a body, install armor, launch BodySlide, "Batch Build" over everything. Armor fits the body.

**Create custom body presets**: BodySlide has sliders for altering proportions (bust, waist, glutes, weight). Save as a preset and every armor builds to that shape.

**Fix clipping on specific armor**: when an armor doesn't fit perfectly, open the .nif in Outfit Studio and adjust manually.

**Convert armor between body types**: armor modeled for UNP can be converted to CBBE with Outfit Studio (conform process).

**Create new armor**: if you modeled something in Blender, Outfit Studio lets you rig and weight it to bring into Skyrim.

## Who this tool is NOT for

If you play with a male character and don't use custom male body replacers (HIMBO, SOS), you don't need BodySlide.

If you play a female character but didn't install a body replacement and you're content with vanilla, BodySlide is overhead.

If you only mod Skyrim at the gameplay level (combat overhauls, quest mods) without touching cosmetics, BodySlide doesn't apply.

If concepts like meshes, .nif files, sliders, and weights overwhelm you, postpone BodySlide until your modlist is more comfortable.

## How to use it in practice

1. Pick a body type: CBBE 3BA and CBBE SE are the most popular today.
2. Install the body via Nexus (with MO2 or Vortex).
3. Install BodySlide and Outfit Studio (`nexusmods.com/skyrimspecialedition/mods/201`).
4. Configure BodySlide as an executable in your mod manager.
5. Install the armor you want. Each CBBE/UNP-compatible armor mod ships BodySlide files (sliders + reference templates).
6. Launch BodySlide from your mod manager.
7. In the "Outfit/Body" dropdown, pick "CBBE Body" (or the body you installed).
8. Pick a preset from the "Preset" dropdown (vanilla, custom, slider tweaks).
9. Check "Batch Build" → select all outfits → "Build". Wait.
10. The generated meshes save to `Data/meshes/` (or the mod's folder in MO2).

## Honest limitations

**Output goes to Overwrite in MO2**. As with Nemesis, BodySlide writes meshes to Overwrite. You have to move them into a named mod like "BodySlide Output" to persist.

**Doesn't know Bethesda vanilla armor by default**. Base-game armor pieces don't ship BodySlide sliders. You need a mod like "CBBE Vanilla Outfits" that adds sliders for them.

**Outfit Studio has its own curve**. Real mesh editing (conform, weight painting, vertex movement) takes hours to grasp well.

**Bone weighting is error-prone**. If you manually modify armor, rigging can break: armor that deforms weirdly when walking. You have to respect the reference's bone weight.

**Generates many files**. Each body build writes many .nif files. Modlists with lots of armor reach several GB of generated meshes.

## How to get started

1. Install CBBE (`nexusmods.com/skyrimspecialedition/mods/198`) or your chosen body type.
2. Install BodySlide and Outfit Studio.
3. Configure BodySlide.exe as an executable in MO2/Vortex.
4. Install a compatible armor mod (e.g., Immersive Armors or CBBE Vanilla Outfits).
5. Launch BodySlide, pick preset "Vanilla SSE" or "CBBE Curvy".
6. "Batch Build" → check all → "Build".
7. Move the Overwrite (in MO2) into a "BodySlide Output" mod and activate it.
8. Launch Skyrim, equip armor. It should fit the body shape.

Standard tutorial: the "BodySlide Tutorial for Skyrim SE" video on YouTube covers the complete flow.
