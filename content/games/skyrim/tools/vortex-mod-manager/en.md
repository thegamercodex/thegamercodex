---
title: "Vortex Mod Manager"
description: "Open-source Nexus Mods mod manager with one-click install, load order management, and multi-game support."
quickTake: "If you're starting to mod Skyrim and MO2 overwhelms you, Vortex is the friendly entry. Install mods, auto-sort load order, and clean up properly on uninstall — all from a modern UI."
---

## What it is

Vortex is the official mod manager maintained by Nexus Mods — the site where most Skyrim mods live. Open-source (GPL-3.0), free, supporting 100+ games including Skyrim SE/AE, Fallout 4, Starfield, Cyberpunk 2077, and many more.

For Skyrim Special/Anniversary Edition it handles: direct download from Nexus, deployment to the game's Data/ using hardlinks or symlinks, load order management with LOOT integrated, conflict resolution via "after"/"before" rules, profile management for multiple modlists, and complete cleanup on uninstall.

## What problem it solves

For a player starting to mod Skyrim, the manual flow is: download a ZIP from Nexus, extract, move files to the game's Data/, sort the plugin list by hand. Multiply that by 20 mods and it becomes unsustainable.

Vortex automates the loop:
- Direct download from Nexus with the "Mod Manager Download" button.
- Automatic deploy to Data/ in one click ("Deploy Mods").
- Plugin order sorted by LOOT.
- Conflict detection that warns when two mods overwrite each other.
- Update notifications when a mod has a new version on Nexus.

## Differentiation

Versus **Mod Organizer 2 (MO2)**: both are mature, both are free. The technical difference is that **MO2 uses a virtual file system** (doesn't touch Data/) and **Vortex uses hardlinks/copies** to Data/. For small modlists (~30 mods) Vortex is simpler. For heavy modlists (200+) MO2 scales better because zero files end up orphaned in Data/ after uninstall.

Versus **NMM (Nexus Mod Manager) legacy**: NMM has been deprecated since 2017. Vortex is its official replacement. If an old guide mentions NMM, mentally substitute Vortex.

Versus **manual install**: manual gives absolute control but doesn't scale. Past 10 mods, managing files by hand becomes ungovernable.

## What people use it for

**One-click install from Nexus**: with Vortex running, Nexus' "Mod Manager Download" button pulls the mod, registers it, and leaves it ready to activate.

**Auto-sort plugin order with LOOT**: Vortex has LOOT integrated. One button and plugins are sorted by community masterlist rules.

**Separate profiles**: a vanilla profile, a graphics modlist, a Requiem hardcore profile. Each with its own plugin list, INI tweaks, and active mods.

**Conflict rules**: when two mods clash, Vortex shows a screen where you define which wins. The rule is saved — it won't ask again.

**Native multi-game support**: if you mod Skyrim AND Fallout 4 AND Cyberpunk with a single manager, Vortex handles all three without separate instances.

## Who this tool is NOT for

If your modlist will exceed 150-200 mods with many overrides, MO2 is the better technical pick. Vortex works but takes more care to keep Data/ clean.

If you're sharing or exporting complex modlists (Wabbajack-style), MO2 is the standard — most curated modlists ship as MO2 exports.

If you don't care at all about a modern UI and just want terminal/CLI, none of the current managers offer that — they're Electron apps.

## How to use it in practice

1. Download Vortex from `nexusmods.com/site/mods/1` (Nexus Mods website). Standard Windows installer.
2. On first run it asks you to log into your Nexus account.
3. Vortex auto-detects your installed games (Steam, GOG, Epic). Enable "Skyrim Special Edition" as a managed game.
4. Configure SKSE: add `skse64_loader.exe` as a tool (Dashboard → Tools → "Add Tool") and mark it primary. From now on "Play" launches with SKSE.
5. On Nexus, mods expose "Mod Manager Download" — one click pulls into Vortex.
6. In Vortex, under "Mods", check the ones you want active.
7. Click "Deploy Mods" to sync state into the game's Data/.
8. Launch the game from Vortex' dashboard.

## Honest limitations

**Touches the game's Data/**. Even using hardlinks (not full copies), the files appear in Data/. If you uninstall Vortex without "Purge Mods" first, mods get orphaned. The "Purge" operation is critical before uninstall.

**Conflict resolution is manual**. When two mods clash, Vortex doesn't decide on its own — it asks. For large modlists, clicking through each conflict is tedious.

**Consumes RAM**. It's an Electron-based app, running 300-500 MB while open.

**Profile switching slower than MO2**. Changing profile in Vortex requires re-deploying files; MO2 only changes the virtual mount.

**Rules-model learning**. For complex conflicts you need to understand "rules" (mod A goes before/after mod B), which take a while to internalize.

## How to get started

1. Install SKSE64 first (see related tool).
2. Download Vortex from `nexusmods.com/site/mods/1`.
3. Install and log in with your Nexus account.
4. Enable Skyrim Special Edition under "Games".
5. Add `skse64_loader.exe` as a tool and mark it primary.
6. Install your first mods: Address Library + SkyUI via "Mod Manager Download".
7. Click "Deploy Mods" and launch from the dashboard.

For video tutorials, Nexus' official wiki at `help.nexusmods.com` covers each flow with screenshots.
