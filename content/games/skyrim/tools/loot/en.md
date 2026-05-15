---
title: "LOOT (Load Order Optimization Tool)"
description: "Tool that auto-sorts your .esp/.esm/.esl plugins by a community-curated masterlist, avoiding crashes from incorrect load order."
quickTake: "Plugin load order in Skyrim matters a lot — a mod that should go last but sits in the middle causes mysterious CTDs. LOOT resolves 95% of that with one click."
---

## What it is

LOOT (Load Order Optimization Tool) is an open-source tool (GPL-3.0) maintained by the LOOT team since 2014. It replaced BOSS, its predecessor. It supports Skyrim Special/Anniversary Edition, Skyrim LE, Skyrim VR, Fallout 4, Fallout New Vegas, Starfield, Oblivion, and Morrowind.

It works by consulting a collaborative **masterlist** hosted on GitHub that defines ordering rules between plugins (this plugin must go before that one, this plugin requires that one as a master). When you run LOOT, it reads your active plugins, looks each one up in the masterlist, and reorders them by the rules.

## What problem it solves

In Skyrim, plugins (.esp/.esm/.esl) load in order and order matters. If a mod overrides a record another mod also modifies, the last one loaded wins. For the modlist to work correctly:
- Masters (.esm from Bethesda) go first.
- Plugins that depend on others go after their dependencies.
- Compatibility patches go last, after the mods they patch.

Computing that order by hand for 100 plugins is impossible. LOOT does it in seconds by consulting the community masterlist.

## Differentiation

Versus **manual ordering**: viable for 5-10 simple plugins. Past that, manual is error-prone.

Versus **BOSS legacy**: BOSS is deprecated. LOOT is its official replacement.

Versus **Vortex's internal auto-sort**: Vortex uses LOOT under the hood. If you use Vortex, you don't need standalone LOOT — the sort button calls it.

Versus **MO2's sort**: MO2 also has LOOT integrated as a plugin. Standalone vs. integrated, the engine is the same.

## What people use it for

**Sort plugins after installing new mods**: every time you add mods, run LOOT before playing. Guarantees load order remains valid.

**Detect masterless mods**: LOOT flags plugins that depend on a master you don't have installed. Without that, Skyrim crashes on save load.

**Detect dirty edits**: LOOT identifies plugins with "dirty" records — unintended edits that can cause bugs. It warns you to clean them with SSEEdit.

**Generate a modlist report**: the "Copy load order" button exports the complete order as text, useful when asking for help on forums.

**Validate before a long playthrough**: before starting a serious save, a LOOT run confirms everything's sorted and no critical warnings remain.

## Who this tool is NOT for

If you only have 3-5 simple mods, LOOT is overhead — order isn't a problem with so few plugins.

If your modlist requires a specific manual order the masterlist doesn't cover (typical for custom setups with hundreds of patches), you'll need to author local rules in LOOT. Possible but technical.

If you use MO2 or Vortex and already have LOOT integrated, downloading the standalone is redundant.

## How to use it in practice

1. Download LOOT from `loot.github.io` or install via Nexus.
2. On first run, LOOT detects your installed games.
3. Select "Skyrim Special Edition" from the dropdown.
4. The first time, LOOT downloads the updated masterlist (links to GitHub).
5. Click "Sort". LOOT analyzes your active plugins and reorders them.
6. Review warnings: each plugin can have notes ("dirty edits", "missing master", "known incompatibility"). Address the critical ones.
7. Click "Apply" to save the order to the game's `plugins.txt`.

If you use MO2: run LOOT from inside MO2 (button in the top toolbar). This ensures LOOT reads/writes the active profile's plugins.txt, not the global one.

## Honest limitations

**It's not infallible**. The masterlist is collaborative — new mods may not be registered yet, and the proposed order can be suboptimal for your specific setup.

**Doesn't resolve record conflicts**. LOOT sorts, but if two mods modify the same NPC, only the last one wins — that requires patches authored in SSEEdit, not a LOOT problem.

**Local rules require knowledge**. For custom overrides, you have to edit rules in the UI. Syntax like "load <plugin> after <otherplugin>" takes a while to internalize.

**Slow performance with huge masterlists**. For games with thousands of registered mods, sorting can take several seconds.

**Doesn't update plugin metadata**. If a mod changes its name or structure, LOOT may have stale info until the masterlist is updated.

## How to get started

1. Download LOOT from `loot.github.io`.
2. Install it (standard Windows installer) or use it portable if you prefer.
3. Open LOOT, select Skyrim Special Edition.
4. Wait for the masterlist to download (first time).
5. Click "Sort" → review warnings → "Apply".
6. Launch Skyrim. If it starts without CTD, LOOT did its job.

Repeat the sort after every modlist change. Typical habit: install new mods, run LOOT, play.
