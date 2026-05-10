---
title: "MBINCompiler"
description: "Open-source tool that decompiles No Man's Sky's .MBIN files (Hello Games' proprietary binary format) into readable, editable XML, and recompiles them after modification. Maintained by monkeyman192 with fast cadence after every game patch."
quickTake: "The invisible prerequisite of NMS' modding scene. If you only use mods, you don't need to know about it. If you'll create mods that touch game logic (not just textures), MBINCompiler is what opens the files. monkeyman192 is one of the silent heroes of the ecosystem — without this tool there'd be no mod scene."
---

## What it is

MBINCompiler is an open-source command-line tool that decompiles No Man's Sky's `.MBIN` files into readable XML (`.MXML`), letting you edit them in any text editor, and recompiles them to `.MBIN` after modification. It lives at github.com/monkeyman192/MBINCompiler, written in C# (runs on Windows, Linux and macOS via .NET).

The project was started by emoose and is now maintained by monkeyman192. Release cadence follows NMS' patch calendar: after every big patch (which usually changes the binary format), monkeyman ships an updated release within days or weeks. That's critical — without compatibility for the current version, no new mods can be made.

Open source under MIT (permissive). Fully free.

## What problem it solves

Hello Games stores nearly all game logic (balance, items, recipes, enemy behavior, drops, sound, world-generation seeds) in binary `.MBIN` files. Without decompiling, they're opaque blobs. With MBINCompiler, you open them as XML, modify fields, recompile, and NMS reads them as if they were original.

It's the base abstraction that makes 90% of Nexus mods (anything beyond texture swaps) possible.

## Differentiation

Versus **Nexus Mods**: Nexus is the end-user repo. MBINCompiler is the mod-author tool. They don't compete — they're complementary in the stack.

Versus similar tools: no real competition. MBINCompiler is the only viable implementation because it requires constant reverse-engineering of Hello Games' proprietary MBIN format. The community has coordinated around this project for years.

Versus **NMS.py** (also by monkeyman192): NMS.py is a Python framework for runtime logic injection without touching files. Different use case — NMS.py for dynamic experimentation, MBINCompiler for classic static mods.

## What people use it for

**Modifying balance files**: drop rates, costs, ship stats. Find the right .MBIN, decompile, edit values in the XML, recompile.

**Changing fauna behavior**: spawn rates, aggression, sizes. Edit the corresponding file in /METADATA.

**UI tweaks**: text strings, layouts (limited), colors via config files.

**Investigating game structure**: many modders started by simply decompiling files to understand how NMS structures data.

**Validating other people's mods**: if you download a mod and want to know what it changes, you decompile the .pak and look at the XML.

## Who this isn't for

If you only want to use mods, this isn't for you — download from Nexus directly.

If command lines bother you: MBINCompiler is CLI-first. Community GUIs exist (AMUMSS uses it internally), but direct usage assumes a terminal.

If you've never read XML or touched game config files before, there's a curve. MXML syntax isn't easy without prior context.

If you only play on console: irrelevant. NMS modding is PC-only.

## How it's actually used

1. Download the latest release from github.com/monkeyman192/MBINCompiler/releases/latest. Confirm the version matches your NMS version — the release name explicitly states it (e.g. "MBINCompiler 6.30.0 for NMS 6.30").
2. Extract the ZIP into a folder. You get `MBINCompiler.exe` (Windows) or the equivalent binary.
3. To decompile, run: `MBINCompiler.exe convert input.mbin` — yields `input.mxml`.
4. To recompile, same with the .mxml: `MBINCompiler.exe convert input.mxml` — yields `input.mbin`.
5. For batch: pass an entire directory and it processes recursively.
6. Typical flow: extract the vanilla .pak with `psarc.exe` (from Sony Toolkit), decompile the .mbins you want to edit, modify XML, recompile to .mbin, re-package as .pak with the correct folder layout, drop into the MODS folder.

## Honest limitations

**CLI-only**. No official GUI. The community wraps it (AMUMSS for example) but the wrapping isn't perfect.

**Needs .NET runtime**. On Linux and macOS you have to install .NET. On Windows it's almost always present.

**Lag after big patches**. When Hello Games changes the binary format significantly, MBINCompiler needs a rebuild. Until then, you can't make new mods compatible with that version.

**No extensive documentation**. The README covers basics but most knowledge about which files to touch for which effect lives in informal wikis and Nexus posts.

**Breakage risk**. If you recompile a badly edited .mxml, NMS may crash or ignore the file. Iteration is required.

**Single maintainer of the active fork**. monkeyman192 maintains the productive fork; a pause from him equals lag for every modder.

## How to start

Go to github.com/monkeyman192/MBINCompiler/releases/latest and download the ZIP matching your OS and current NMS version.

Extract to a folder like `C:\nms-modding\mbincompiler\` and add it to PATH (or run from there directly).

For experimenting, install psarc.exe (part of the Sony Toolkit, legally accessible) or use AMUMSS, which abstracts the flow.

Start with a simple mod: extract `NMSARC.GLOBAL.MERGED.PAK`, find a trivial .mbin (typically `BALANCE/STARSHIPCATALOGUE.MBIN` for ship variants), decompile, open the .mxml in VSCode, change a numeric value, recompile, repackage as a .pak in `MODS/`, launch NMS and verify.

Once that flow works, you have the foundation for more complex mods.
