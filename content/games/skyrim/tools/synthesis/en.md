---
title: "Synthesis"
description: "Open-source C# framework that runs automated patchers over your modlist: leveled lists, NPC face generation, perks, item distribution."
quickTake: "If your modlist has repetitive patterns (distribute loot, adjust leveled lists, propagate race changes), Synthesis resolves them in code. More maintainable than a manual SSEEdit patch."
---

## What it is

Synthesis is an open-source framework (MIT) built on top of Mutagen — a .NET library for manipulating Bethesda plugins. Maintained by Noggog and the Mutagen-Modding team, distributed via Nexus (`nexusmods.com/skyrimspecialedition/mods/33996`) and GitHub.

Functionally, Synthesis is a host for "patchers" — small C# programs that read your full modlist and emit a custom plugin as output. The community publishes pre-written patchers covering common tasks; you can run them like any other mod automation tool.

## What problem it solves

There are things in a modlist done better with code than by hand:
- Distribute a new item to every bandit leveled list.
- Apply the same custom name to 50 NPCs.
- Convert armor en masse between body types.
- Generate visual NPC patches (face mods) automatically.

With SSEEdit/xEdit you do this manually: open the plugin, navigate records, copy overrides, repeat. For 5 records, fine. For 500, you'll make mistakes.

Synthesis automates that. A C# patcher iterates all relevant records and applies the logic. Output: a consistently generated plugin.

## Differentiation

Versus **SSEEdit scripts** (Pascal): SSEEdit has its own scripting language (Pascal-like). It works but the language is legacy and docs are sparse. Synthesis' C# has auto-complete, type safety, and the full .NET ecosystem.

Versus **zEdit autopatchers**: zEdit is another auto-patching framework, JavaScript-based. Synthesis is more modern and more actively developed. The choice depends on which patchers you need — some only exist for one or the other.

Versus **manual SSEEdit patches**: for one-off tasks, manual SSEEdit is faster. For recurring tasks (every modlist change requires redoing the patch), Synthesis pays off via automation.

## What people use it for

**Leveled list integration**: patchers like "ENB Light" or "Skyrim Souls patch" distribute items/effects to all relevant enemies without you touching each leveled list.

**NPC Face Patcher**: when you have multiple mods altering NPC appearance, Synthesis generates a patch taking the highest-load-order version for each NPC, no manual assembly.

**Spell Perk Item Distributor (SPID) patchers**: patchers that automatically generate conditional distribution.

**Outfit assignment automation**: when you add armor mods, Synthesis can distribute the new armors to NPCs by tags.

**Encounter scaling**: adjust NPC levels en masse by rule (this enemy is +2 levels, that one -1) without editing each NPC manually.

## Who this tool is NOT for

If you've never touched a programming IDE, Synthesis is advanced — although you can use third-party patchers without writing code, a technical mindset helps.

If your modlist is small (<50 mods), you probably don't need auto-patchers — conflicts are few and manual SSEEdit covers them.

If your workflow already uses zEdit and you're happy, you don't need to migrate — both systems are valid.

## How to use it in practice

1. Download Synthesis from Nexus or GitHub releases.
2. Extract to a dedicated folder (NOT Program Files).
3. Launch `Synthesis.Bethesda.GUI.exe`. First time it asks you to configure your game type (Skyrim Special Edition).
4. Add patchers via the Nexus browser or the GitHub registry built in.
5. For each patcher, configure specific settings (e.g., "include mod X" or "exclude tag Y").
6. Click "Run" — Synthesis compiles patchers (if it's the first time, it downloads the needed .NET SDK) and runs them on your modlist.
7. Output goes to an `Output/` folder. Move it into a mod named "Synthesis Output" in MO2 and activate it.
8. Launch Skyrim normally.

Every time you change relevant mods, you'll rerun Synthesis to regenerate the patch.

## Honest limitations

**Requires .NET runtime**. Synthesis needs .NET SDK installed. For users without a dev background, first setup can be intimidating.

**First compilation time**. The first run downloads dependencies and compiles patchers — can take 10-20 minutes. Subsequent runs are fast.

**Third-party patchers can be abandoned**. Like any open-source ecosystem, some registry patchers have sporadic maintenance.

**Output can overlap with other patches**. Synthesis output sometimes conflicts with manual SSEEdit patches or Wabbajack-shipped patches. You have to understand the full flow.

**No rich configuration UI**. The GUI is functional but austere. Complex configs sometimes require editing JSON by hand.

## How to get started

1. Verify you have .NET SDK 6+ installed (link on the Synthesis page).
2. Download Synthesis from Nexus (`nexusmods.com/skyrimspecialedition/mods/33996`).
3. Extract to `C:\Modding\Synthesis\`.
4. Configure Skyrim Special Edition as the game.
5. Start with a simple patcher: "Outfit Patcher" or "Race Patcher" are entry-friendly.
6. Run → move output into MO2 → test in-game.

For a deep dive, the wiki at `mutagen-modding.github.io/Synthesis` covers writing your own patchers.
