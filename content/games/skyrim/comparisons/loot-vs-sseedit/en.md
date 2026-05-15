---
title: LOOT vs SSEEdit — sort plugins or resolve conflicts
description: Short comparison between the community auto-sort tool and the xEdit record editor. Why you need both and in what order to use them.
---

A common confusion for new modders: "Isn't LOOT enough? Why does everyone talk so much about SSEEdit?". The short answer is they cover different layers of the problem of having a stable modlist. **LOOT** sorts your load order automatically to avoid obvious crashes; **SSEEdit** lets you inspect and resolve the conflicts LOOT can't fix on its own.

## What LOOT does

LOOT (Load Order Optimization Tool) does one thing very well: **sort plugins**. It reads the masters and dependencies of each plugin, consults a community-curated database with explicit rules ("Mod X must come after Mod Y because it depends on its records"), and produces a safe load order.

Without LOOT, installing 50 mods and leaving the order as-is on install is a recipe for launch-time crashes, headless NPCs, invisible items, and random bugs. With LOOT, the order satisfies basic dependencies and most small modlists work on the first try.

It also warns about:
- Dirty plugins (ITM/UDR) that need cleaning.
- Missing masters.
- Known conflicts between popular mods.
- Plugins it can't sort on its own.

But LOOT **doesn't resolve the conflicts**, it just flags them.

## What SSEEdit does

SSEEdit is a record editor. When LOOT tells you "Mod A and Mod B have conflicting records, there could be problems" — SSEEdit is where you open both plugins, see the conflict in detail, and decide what to do:

- Forward the winning record to a manual patch.
- Clean the plugin with Quick Auto Clean.
- Write a new compatibility patch.
- Investigate why a mod is doing something weird in-game.

It's the tool LOOT implicitly recommends when it says "this conflict requires manual attention".

## The standard workflow

The typical sequence when adding new mods:

1. **Install the mod** with your mod manager (MO2 or Vortex).
2. **Run LOOT** so it auto-sorts plugins.
3. **Review LOOT warnings** — dirty plugins, missing masters, known conflicts.
4. **Open SSEEdit** to clean what LOOT marked dirty and write patches for the conflicts that require attention.
5. **Play** and debug in SSEEdit if anything surfaces.

Each tool is a different link in the chain. Skipping LOOT leaves you with fragile manual ordering; skipping SSEEdit leaves you with unresolved conflicts LOOT can't fix on its own.

## What if I only have one?

- **LOOT only**: works for very small modlists (10-20 mods without complicated conflicts). Prevents obvious crashes but doesn't help when two mods do the same thing in incompatible ways.
- **SSEEdit only**: you can sort plugins manually by reading dependencies, but it's error-prone and slow. For everything else SSEEdit does cover.

In practice, serious modders have **both in their tools folder** and run them at different points in the workflow.

## What neither does

Neither LOOT nor SSEEdit installs mods (that's MO2 or Vortex), generates LODs (DynDOLOD), patches animations (Nemesis), automates recurring patches (Synthesis), or resolves leveled-list merges (Synthesis or SSEEdit's Leveled List Patcher). They're pieces of a bigger pipeline.

## At a glance

- **LOOT**: plugin auto-sort. You run it often.
- **SSEEdit**: record editor and patcher. You run it when there are conflicts or you need to clean.

They're not competitors: they're sequential. LOOT first, SSEEdit after.
