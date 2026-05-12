---
title: "WolvenKit"
description: "Open-source editor for REDengine games that extracts, edits, and packages Cyberpunk 2077 assets."
quickTake: "If you're going to create mods (not just install them), WolvenKit is the tool. It extracts game archives, edits meshes and textures, and packages the final mod. Steep learning curve, no real alternative."
---

## What it is

WolvenKit is an open-source REDengine game-editing suite (GPL-3.0), GUI for Windows and Linux. Supports Cyberpunk 2077 and The Witcher 3 — the two games sharing the engine. Maintained by the WolvenKit team with active contributors: the repo had activity as recent as April 2026 according to GitHub.

It's the canonical tool for datamining (what assets the game contains) and for creating mods from scratch: you extract archives, edit meshes, textures, scripts, animations, sounds, and package the result in a format the game loads.

## What problem it solves

Cyberpunk 2077's assets live in proprietary REDengine 4 archives (`.archive` files). Without a tool to open them, modding a weapon mesh, retexturing an outfit, or changing a sound requires manual format reverse-engineering — unfeasible for most.

WolvenKit opens those archives, exposes the internal structure (folder hierarchy, asset names, cross-dependencies), allows editing in-place or exporting to standard formats (GLTF, FBX, PNG, WAV), and reimports them afterward.

## Differentiation

Versus **CET / RED4ext** (runtime frameworks): WolvenKit is authoring-time. It doesn't inject into the game; you work offline editing assets you later install as a mod. The three are complementary — WolvenKit creates the files, RED4ext/CET load them at runtime.

Versus **REDmod** (CDPR official): WolvenKit is independent, lower-level. It lets you edit literally any asset; REDmod has narrow scope (animations, sounds, scripts). Complex mods are built in WolvenKit even when distributed as REDmod.

## What people use it for

**Datamining**: extract every asset from the game (models, textures, sound files) for inspection. Useful for verifying what's available before modding, or for fan art content.

**Creating texture replacements**: extract original texture → edit in Photoshop/Substance → reimport → package as `.archive`. Standard flow for visual mods (HD reworks, NPC retextures).

**Editing meshes**: modify weapon, vehicle, or outfit geometry. Requires Blender/Maya knowledge to edit the exported FBX, but WolvenKit handles bidirectional conversion.

**Creating new-asset mods**: adding items, weapons, vehicles to the game. Involves understanding TweakDB (for registering the item), ArchiveXL (for loading the asset), and WolvenKit for packaging.

**Editing and debugging redscript scripts**: redscript compiler integration lets you edit game scripts from the UI.

## Who this tool isn't for

If you only want to **install existing mods**, WolvenKit is overkill — Vortex / manual install + CET/RED4ext are enough. WolvenKit is for creating, not consuming.

If your hardware is modest, WolvenKit can be heavy: the full game asset repository is several GB and the editor consumes significant RAM when loading.

If you don't want to invest time learning the REDengine format, WolvenKit workflows, and concepts like TweakDB / ArchiveXL: the learning curve is days/weeks, not hours.

## How it works in practice

1. Download the latest release from `github.com/WolvenKit/WolvenKit/releases` (installer or portable).
2. Open it and configure the path to your Cyberpunk 2077 install — WolvenKit indexes the archives.
3. Create a new project: that's where assets you'll edit live.
4. Asset browser: navigate the game's archives like a file explorer. When you find something to modify (e.g., a car mesh), you add it to the project.
5. Edit: directly for textures (with preview), exporting to Blender/Maya for meshes, in a text editor for scripts.
6. Package: WolvenKit compiles your project into an `.archive` or REDmod structure ready to install.
7. Test in-game: install the output into your modded Cyberpunk 2077 install and verify it works.

## Honest limitations

**Very steep learning curve**. WolvenKit isn't Photoshop — understanding REDengine's data model, TweakDB, archive layering takes weeks of practice. YouTube tutorials and the wiki help but require commitment.

**Updates can break in-progress projects**. When WolvenKit changes major versions (especially aligning with a game patch), live projects may need to be reopened and reconverted.

**Bugs in advanced features**. Animation editing, certain exotic mesh formats, or cross-version exports can have edge cases. The community reports and fixes them — but as a WolvenKit user, you'll eventually hit one.

**Heavy performance on large datasets**. Indexing all game assets can take minutes and consumes RAM. Loading large projects is slow.

**No unified tutorials**. Official docs are scattered between `wiki.redmodding.org/wolvenkit`, various creators' YouTube tutorials, and the modding community Discord. There's no linear "official guide".

## How to get started

1. If you're going to do serious modding, first read `wiki.redmodding.org/wolvenkit/help/community` to understand what WolvenKit does and doesn't.
2. Download the latest release from GitHub.
3. Watch one or two YouTube tutorials for your use case (e.g., "Cyberpunk 2077 texture replacement tutorial WolvenKit").
4. Do a small project first — replace a weapon texture. The exercise teaches the end-to-end flow.
5. When you hit problems, the Cyberpunk Modding Community Discord is where they get solved (link `discord.com/invite/redmodding`).

WolvenKit is the most expensive learning investment in the entire Cyberpunk modding stack, but also the one that unlocks any imaginable mod. Worth it if your ambitions justify it.
