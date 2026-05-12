---
title: "RED4ext"
description: "Native extension framework for REDengine 4 that enables C++ plugins inside Cyberpunk 2077."
quickTake: "RED4ext is the SKSE of Cyberpunk: nobody runs it directly, but TweakXL, ArchiveXL, and Codeware (which most mods use) depend on it. Install once and forget."
---

## What it is

RED4ext is an open-source (GPL-3.0) framework that extends REDengine 4, the proprietary engine behind Cyberpunk 2077. It lets mods written in C++ load as plugins inside the game process: they add functions, modify engine behaviors, or expose new APIs other mods can use.

Maintained by WopsS and a contributor group on GitHub. It's the conceptual equivalent of SKSE (Skyrim Script Extender) or F4SE (Fallout 4 Script Extender): silent infrastructure the modding ecosystem builds on.

## What problem it solves

Cyberpunk 2077's internal functions live in compiled C++. Without a layer that exposes those functions to external code, writing C++ mods means manually patching binaries — fragile, unshareable, unmaintainable.

RED4ext does two things:
1. Hooks the game loader and loads plugins from a dedicated folder.
2. Exposes typed wrappers to safely call internal game functions.

That enables TweakXL, ArchiveXL, Codeware and others to ship as clean DLLs instead of binary patches. Modders writing native code depend on RED4ext.

## Differentiation

Versus **Cyber Engine Tweaks (CET)**: CET is the Lua scripting layer; RED4ext is the native C++ layer. Lua mods use CET. C++ mods use RED4ext. Most complex mods use **both**, because intermediate dependencies (TweakXL, ArchiveXL) are C++ but final mods can be Lua.

Versus **REDmod**: REDmod is CDPR's official system, integrated into the launcher. RED4ext is community, parallel, reaches lower (down to C++ hook level). REDmod and RED4ext coexist without conflict — many modern mods need both.

## What people use it for

**As an invisible dependency**: the typical user installs RED4ext once and never interacts with it again. What they see are mods that need it (TweakXL, ArchiveXL, etc.) — RED4ext sits beneath, quiet.

**As a base for writing native mods**: developers who want performance or deep access write RED4ext plugins directly. The repo has examples and documentation on how to scaffold them.

**To guarantee cross-mod compatibility**: when two C++ mods run together, RED4ext provides the shared context (hook registers, plugin table, init order) that prevents them from stepping on each other.

**For post-patch maintenance**: when a game patch ships, RED4ext is updated first. C++ mods rebuild against the new RED4ext. Without that layer, each mod would have to adapt to the new binary individually.

## Who this tool isn't for

If you play vanilla, RED4ext contributes nothing — no UI, no features, only exposes APIs. Without mods using it, it's a dormant DLL.

If you mod on console, RED4ext doesn't apply — Windows-only by architecture.

If you only want simple mods (texture replacements, reshade, direct pak archives), RED4ext may not strictly be required. But most modern mods assume it, so in practice it's worth installing upfront.

## How it works in practice

1. Download the latest release from `github.com/WopsS/RED4ext/releases` (or from Nexus Mods).
2. Extract the ZIP into the game install folder. RED4ext creates `bin\x64\red4ext\` and a `RED4ext.dll`.
3. Launch the game once. RED4ext loads alongside the process. If everything's fine, you notice nothing — plugins depending on it can now load.
4. Install the C++ mods you'll use (TweakXL, ArchiveXL, Codeware, etc.) into the `red4ext\plugins\` folder following each mod's structure.
5. Check logs in `red4ext\logs\` after the first launch: there you see which plugins loaded OK and which failed.

## Honest limitations

**Zero UI**. No menu, no panel, nothing. If something fails, the only feedback is text logs. For non-technical users that can be frustrating.

**Mandatory update post-game-patch**. RED4ext breaks when CDPR changes the game binary (any major patch). Until a new version ships, every C++ mod depending on the framework fails to load. Expect a 24-72h window post-patch.

**Scattered documentation**. Official docs live in the GitHub README and at `wiki.redmodding.org`, but there's no step-by-step tutorial for end users. Advanced modders find what they need; casual users can get lost.

**No fallback if it fails**. If RED4ext crashes during load, the mods depending on it don't start either. No graceful degradation — all or nothing.

**Conflicts with online-game anti-cheats**. Cyberpunk 2077 is single-player so this doesn't apply here, but if the binary were used with any online integration, RED4ext would trip it.

## How to get started

1. If you're going to install CET or any mod that lists "REQUIRES RED4ext", grab it from `github.com/WopsS/RED4ext/releases` (most recent stable tag).
2. Extract directly into your Cyberpunk 2077 folder (where `bin\x64\Cyberpunk2077.exe` lives).
3. Launch the game once to verify it loads. If the game opens normally, RED4ext is OK.
4. Proceed to install the rest of your mods. RED4ext stays invisible — you only see the effects of plugins it loads.
5. If something fails later, check the logs in `bin\x64\red4ext\logs\` — errors there indicate which plugin broke and why.

Tip: when the next game patch drops, before playing with mods, verify RED4ext has a compatible release (check releases on GitHub). If not yet, better to play vanilla until it updates.
