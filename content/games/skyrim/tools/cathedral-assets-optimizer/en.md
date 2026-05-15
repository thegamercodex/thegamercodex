---
title: "Cathedral Assets Optimizer"
description: "Open-source optimizer for Skyrim textures, meshes, and animations — converts LE assets to SE format and compresses for better performance."
quickTake: "When you port a Skyrim LE mod to SE or when a modlist eats too much VRAM, CAO is the optimization tool. Fast batch processing with consistent results."
---

## What it is

Cathedral Assets Optimizer (CAO) is an open-source optimizer (GPL-3.0) maintained by G_k. Distributed via Nexus (`nexusmods.com/skyrimspecialedition/mods/23316`) and GitHub. It supports Skyrim Special/Anniversary Edition, Skyrim LE, Fallout 4, and other Bethesda games.

It processes three kinds of assets:
- **Textures (.dds)**: compresses with BC7, downsamples when resolution is excessive, fixes mipmaps.
- **Meshes (.nif)**: converts LE → SE format (geometry is the same but the binary header differs), optimizes structure.
- **Animations (.hkx)**: converts LE → SE.

## What problem it solves

Two concrete problems:

**1. Converting LE mods to SE**: many great mods only have an LE version (original Skyrim, 2011-2016). To use them in SE/AE, meshes and animations must be converted to the new format. Without conversion, the game crashes on mod load.

**2. Reducing VRAM**: modlists with 4K textures consume GB of VRAM. CAO can downsample to 2K while preserving visual quality, recompress to BC7 (modern, more efficient format), and fix poorly generated mipmaps.

Both are problems most modders hit sooner or later.

## Differentiation

Versus **NIF Optimizer (legacy)**: NIF Optimizer is the predecessor — only optimizes meshes and LE→SE conversion. CAO is the modern replacement with broader scope.

Versus **paint.net / Photoshop manual**: for optimizing a single texture, image tools work. For batch-processing hundreds of files, CAO is radically faster.

Versus **DDSopt / GIMP scripts**: custom scripts work if you can code. CAO is the community standard GUI for non-coder users.

## What people use it for

**Porting LE mods → SE**: the most common use case. You download an LE mod with no SE version, run it through CAO, batch process, get a usable SE output.

**Optimizing heavy textures**: you have HD texture packs eating 8 GB of VRAM. CAO recompresses with BC7 (better quality/weight ratio) and optionally downsamples to a more reasonable resolution.

**Fixing bad mipmaps**: textures without mipmaps cause shimmering at distance. CAO generates correct mipmaps automatically.

**Reducing total modlist size**: for heavy modlists (50+ GB), CAO can significantly shrink the disk footprint.

**Pre-process before uploading mods**: mod authors publishing on Nexus use CAO to deliver textures/meshes in the most efficient format.

## Who this tool is NOT for

If your modlist is small and your VRAM is sufficient, CAO is overhead — no need to optimize.

If you care about preserving every texture's exact visual quality at 100% (extreme photoreal modding), CAO with downsampling can degrade imperceptibly or not — verify by comparing before/after.

If you only work with pure Skyrim SE (no LE porting), half of CAO's features don't apply.

## How to use it in practice

1. Download CAO from Nexus (`nexusmods.com/skyrimspecialedition/mods/23316`).
2. Extract to a dedicated folder (NOT Program Files).
3. Launch `Cathedral Assets Optimizer.exe`.
4. In "General settings": pick your mode (Skyrim SE), select the input folder (an unprocessed mod).
5. In "Texture" / "Mesh" / "Animation" tabs: configure which optimizations you want (compression, resampling, format).
6. Click "Run" → CAO processes every file in the input folder.
7. Output: the original folder gets overwritten (there's a backup option) or it gets written to another folder per config.
8. If it was for SE conversion, drop the output as a mod in MO2 and test.

Typical workflow for LE→SE conversion: input is the unzipped LE mod's folder, output is a new mod "MyMod-SE".

## Honest limitations

**Doesn't guarantee the mod works**. CAO converts formats. If a mod uses Papyrus scripts specific to LE that don't exist in SE, CAO doesn't resolve that — it only fixes assets.

**Opaque settings**. Optimization settings have many parameters (compression formats, resampling filters, etc.). Without technical background, picking well takes time.

**Downsampling is lossy**. If you downsample a 4K texture to 2K to save VRAM, you lose detail. The choice is a trade-off, not free.

**Full modlist batch processing can take long**. A modlist with 50 GB of assets can take 1-3 hours in CAO.

**Occasional bugs in new versions**. Like any small OSS project, new releases sometimes ship regressions. Staying on a known stable version is safe.

## How to get started

1. Download CAO from Nexus.
2. Extract to `C:\Modding\CAO\`.
3. Identify an LE mod you want to port to SE.
4. Unzip the mod into an input folder.
5. Launch CAO, set mode to Skyrim SE, point at the input folder.
6. Recommended settings for conversion: "Necessary optimization" + Mesh enabled + Texture optional.
7. Run. Output is the ported SE mod.
8. Drop into MO2, activate, test in-game.

For optimizing an existing modlist, specific guides on `r/skyrimmods` cover balancing quality vs VRAM.
