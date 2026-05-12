---
title: "REDmod"
description: "CD Projekt RED's official modding system for Cyberpunk 2077. Distributed as a free DLC and integrated into the launcher."
quickTake: "REDmod is what CDPR officially endorses: stable, keeps achievements enabled, launcher-integrated. Limited in scope versus CET/RED4ext, but the right path if you want to mod without touching the binary."
---

## What it is

REDmod is the official modding toolkit published by CD Projekt RED. It shipped as a free DLC in September 2022, downloadable from Steam, GOG, or Epic. It officially supports a subset of modifications — animations, sounds, redscript scripts — integrated with the game's launcher.

Unlike community frameworks (CET, RED4ext), REDmod doesn't inject code into the executable: REDmod mods compile in a "deployment" step before launching the game, and run inside the CDPR-supported runtime. That makes it more stable across patches and compatible with Steam achievements.

## What problem it solves

Before REDmod, modding Cyberpunk 2077 meant injecting DLLs (CET, RED4ext) — it works, but requires the community to maintain post-patch compatibility, and technically disables some achievements. For casual users who want simple mods without community frameworks, that's overhead.

REDmod solves this by offering an official channel: download the toolkit for free, install compatible mods, activate them from the launcher, and play. CDPR guarantees the REDmod stack keeps working across updates.

## Differentiation

Versus **CET / RED4ext**: REDmod is narrowly scoped (animations, sounds, redscript, animation files) but stable; CET/RED4ext are unlimited (deep engine hooks) but require community maintenance. For complex mods (AMM, radical UI mods), CET/RED4ext are mandatory. For simple mods (animation replacements, sound packs), REDmod is enough and cleaner.

Versus **Archive mods (direct .archive files)**: a few years back, mods shipped as `.archive` files that swapped assets. REDmod is the official evolution — it wraps those files with metadata, version support, and explicit load ordering.

## What people use it for

**Enabling official animation and sound mods**: many modern animation mods (changing dance moves, idle poses) and sound mods (extended Phantom Liberty music, ambient replacements) use REDmod by default.

**Keeping achievements enabled**: REDmod doesn't trigger the protections that disable achievements in CET-modded games. If Steam achievements matter to you, REDmod is the way.

**Modding post-patch without waiting on the community**: when a game patch ships, REDmod keeps working because CDPR maintains it. CET/RED4ext can take 24-72h to update.

**Distributing mods as a creator**: if you're making a simple mod and want broad reach, packaging it as REDmod means users don't need community frameworks.

## Who this tool isn't for

If you want complex mods touching UI, gameplay deeply, or exposing Lua scripting (Appearance Menu Mod, Native Settings UI, etc.), REDmod is insufficient. For that you need CET + RED4ext.

If you mod on console, it doesn't apply — REDmod is Windows-only.

If your mod requires hooking engine functions (intercepting scripts, listening for events), REDmod doesn't expose that API. It's deliberately limited.

## How it works in practice

1. Download REDmod from Steam / GOG / Epic as a free DLC (find it on the game's store page as "REDmod").
2. Once installed, open the Cyberpunk 2077 launcher: two options appear — "Play" and "Play with mods". The second activates the REDmod flow.
3. REDmod-compatible mods install into `mods\` inside the game folder.
4. When you run "Play with mods", REDmod runs a deployment step (compiles scripts, merges archives) before launching the game.
5. If everything's fine, the game loads with mods applied. If deployment fails, REDmod shows logs explaining which mod broke.

## Honest limitations

**Narrow scope**. Only supports animations, sounds, redscript, and asset files. Mods requiring injected C++ (most popular mods) aren't REDmod.

**Not an alternative to CET / RED4ext**. If you want to install AMM or Native Settings UI, you need community frameworks in addition to REDmod (they can coexist).

**Deployment takes time**. Every launch with "Play with mods" recompiles — for builds with many mods, the deploy can take 30-60 seconds before game start. Vanilla launch is instant.

**Limited official documentation**. CDPR provides technical reference for mod authors but no practical guides for end users. The community wiki (`wiki.redmodding.org/redmod`) fills that gap.

**No centralized community hub**. REDmod mods coexist with CET / direct archive mods on Nexus — there's no separate store just for REDmod. Finding compatible mods requires filtering by category on Nexus.

## How to get started

1. On Steam (or GOG, or Epic): search "REDmod" in the store and add it to your library. It's free DLC.
2. Install it (about 1GB of tools downloads).
3. Restart the Cyberpunk 2077 launcher: the "Play with mods" option should now appear.
4. If you're installing your first REDmod (e.g., a sound pack from Nexus), download it, read the mod's README to verify it's REDmod-compatible, and extract into `mods\`.
5. Launch with "Play with mods". If it loads without errors, REDmod is OK.

For users coming from the CET/RED4ext workflow: REDmod is complementary, not a replacement. Keep them all installed if you want full mod range.
