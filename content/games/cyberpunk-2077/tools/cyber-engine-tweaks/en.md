---
title: "Cyber Engine Tweaks (CET)"
description: "Lua scripting framework and debug console for Cyberpunk 2077. Enables most modern-era mods of the game."
quickTake: "If you're going to mod Cyberpunk 2077 seriously, CET is non-negotiable. Most popular mods (AMM, Native Settings UI, etc.) depend on it. Without CET many mods simply won't load."
---

## What it is

Cyber Engine Tweaks (CET) is a scripting framework that injects into the Cyberpunk 2077 executable and exposes the game's internal functions to Lua, the scripting language REDengine 4 uses. Open-source (MIT), maintained by yamashi (maximegmd) with an active community of contributors on GitHub.

Beyond the Lua runtime, CET ships an integrated debug console (configurable hotkey, unbound by default), predefined engine tweaks (FPS cap, fixes for specific 1.x bugs — some already resolved by CDPR but kept as options), and a game state object inspector.

## What problem it solves

REDengine 4 doesn't expose a public modding API. Without an intermediate framework, modifying in-runtime game behavior requires binary reverse-engineering — viable for maybe 3 people in the world, not for a modder community. CET solves this by translating internal C++ functions into Lua calls accessible from mods.

That's why CET is a **transitive dependency** for hundreds of mods: Appearance Menu Mod, Native Settings UI, UI mods, item-adding mods, gameplay mods. If CET isn't installed, those mods won't load.

## Differentiation

Versus **RED4ext** (another essential framework), CET exposes Lua scripting and an interactive console; RED4ext exposes native C++ for compiled mods. Most modern mods require **both** — CET for the Lua layer, RED4ext for the native bridge. They're not alternatives, they're complementary.

Versus **REDmod** (CDPR's official one), CET is community-built, deeper, reaches parts of the engine REDmod doesn't touch. REDmod covers launcher integration (what the game officially supports); CET goes further.

## What people use it for

**Prerequisite for modding almost anything**: the first time you try to install AMM, Native Settings UI, or any modern mod, you realize you need CET. You install it and it stays as permanent infrastructure.

**In-game command console**: configurable hotkey opens an overlaid console where you can run Lua or predefined commands: spawn items, teleport, set quest flags, etc. Useful for debugging, not for legit gameplay.

**Diagnosing mod issues**: when a mod doesn't load, CET shows logs in its panel. The "Logs" window enumerates Lua errors and warnings — first place to look when something breaks.

**Accessing Codeware / TweakDB / RTTI**: for advanced modders, CET exposes hooks to the game's internal APIs (Codeware, TweakDB browser, RTTI inspector). Enables writing new mods from scratch.

## Who this tool isn't for

If you play pure vanilla without mods, CET is unnecessary overhead. It adds no visible features unless you install mods that use it.

If you want to mod on console (PS5, Xbox), CET doesn't apply — it's Windows-only due to the injection architecture.

If your hardware is very modest, CET adds a small loading overhead. Not significant but present.

## How it works in practice

1. Download the latest release from `github.com/maximegmd/CyberEngineTweaks/releases` or from Nexus Mods (same binary).
2. Extract the ZIP into the game install folder (`Cyberpunk 2077\bin\x64\`). Verify that `version.dll` and the `plugins\cyber_engine_tweaks\` folder appear.
3. Launch the game once. CET injects on load.
4. Once in the main menu, open the console overlay (configure the hotkey in `config.json` or via the Settings window if available).
5. The console shows several panels: Console (live Lua), Logs, TweakDB Editor, etc.
6. From there, install mods that depend on CET — most are drag-and-drop into `bin\x64\plugins\cyber_engine_tweaks\mods\`.

## Honest limitations

**Updates required after each game patch**. When CDPR ships a new patch, CET needs an update. Using mods with old CET and a new game crashes or produces erratic behavior. Wait 1-3 days post-patch for stable mods.

**No user-friendly GUI for casual players**. The console and panels assume familiarity with scripting/debug. For a user who just wants to "install the mod and play", CET is invisible (which is fine) — but if something breaks, debugging requires technical knowledge.

**(Minimal) risk with anti-tamper checks**. CET injects code into the executable; in single-player it's not a problem, but Steam achievements can stay disabled when mods are loaded (a specific mod re-enables achievements).

**Confusing initial setup**. The first time you install CET, it's not obvious where mods go, what each panel does, or how to assign the hotkey. Worth reading the official wiki first (`wiki.redmodding.org/cyber-engine-tweaks`).

**Phantom Liberty compatibility**. Phantom Liberty required a major CET rebuild. Older mods may not work with PL until updated.

## How to get started

1. Read the official wiki: `wiki.redmodding.org/cyber-engine-tweaks/getting-started/installing`. It has up-to-date step-by-step.
2. Download the latest release from GitHub or Nexus. Both sources offer the same binary.
3. Back up your install folder first (or better: use a second install dedicated to modding if you have disk space).
4. After installing CET, launch the game once and verify the overlay appears (default hotkey: home key, but check your config).
5. When it works, you can install CET-dependent mods. Start with something simple (Native Settings UI) before going big (AMM).

If something fails, the first place to look is the "Logs" panel inside the overlay — Lua errors there indicate exactly what mod or function is broken.
