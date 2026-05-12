---
title: "Mod Organizer 2"
description: "Open-source mod manager with a virtual file system: every mod lives in its own folder and gets virtually mounted over the game folder on launch."
quickTake: "For Skyrim modlists past 50 mods, MO2 is the community standard. Its VFS lets you test combinations, reorder, and uninstall without leaving orphan files in Data/."
---

## What it is

Mod Organizer 2 (MO2) is an open-source mod manager (GPL-3.0) originally created by Tannin for Bethesda games (Oblivion, Skyrim, Fallout) and now maintained by the MO2 community on GitHub. It supports Skyrim Special/Anniversary Edition, Fallout 4, Starfield, and more.

Its key differentiator is the **virtual file system (VFS)**: instead of copying mod files into the game's `Data/` folder (like Vortex and manual installers), MO2 keeps each mod in its own folder and on launch virtually "mounts" all active mods. The game sees the files where it expects them, but on disk they stay separate.

## What problem it solves

Without VFS, every mod activation/deactivation moves files. With 50+ mods, that gets fragile: orphan files stay in Data/ after uninstalling, conflicts are invisible, and you can't maintain multiple modlists.

MO2 solves all of that:
- Zero files copied to Data/ — the folder stays exactly as Bethesda shipped it.
- Conflicts visible in a UI column: if two mods overwrite the same file, MO2 shows it and lets you pick the winner.
- Profiles: switch between "clean vanilla", "graphics modlist", "mage playthrough", "Requiem hardcore" with no reinstall.
- Instant uninstall: deactivating a mod literally drops it from the virtual mount, leaving no traces.

## Differentiation

Versus **Vortex** (also from Nexus): Vortex copies files to Data/ using symbolic links. MO2 uses pure VFS. For small modlists (~20 mods) Vortex feels friendlier; for heavy modlists (200+) MO2 scales better because uninstalls don't degrade the game state.

Versus **manual install**: manual gives absolute control but doesn't scale. Past 10 mods, remembering which file belongs to which mod is impossible.

Versus **Wabbajack**: Wabbajack installs curated modlists using MO2 underneath. If you want to build your own modlist from scratch, use MO2 directly. If you want a premade list as a starting point, use Wabbajack — but the result still runs on MO2.

## What people use it for

**Heavy modlists (100+ mods)**: the VFS is indispensable when you have many mods. MO2 manages mount order (mods at the top lose to mods at the bottom, or vice versa depending on left pane order) and shows conflicts in real time.

**Multiple profiles**: one profile for Requiem, another for Skyrim hardcore, another for casual with cosmetic mods. Switch between them in seconds.

**Incremental modlist testing**: activate/deactivate mods one by one and observe impact without reinstalling.

**Sharing setups**: a complete profile (mods + load order + plugin list + INI tweaks) fits in an MO2 export another player can import.

**Multi-game support**: if you mod Skyrim AND Fallout 4 AND Starfield, MO2 handles all three with separate instances.

## Who this tool is NOT for

If you're installing 1-5 very specific mods, MO2 is overkill. Vortex or manual install are simpler for that case.

If you've never touched a mod manager and concepts like "load order", "plugin priority", and "VFS" overwhelm you: start with Vortex and migrate to MO2 once your modlist grows.

If your main disk is tight on space, MO2 takes room: every downloaded mod lives in `Downloads/` and every active mod lives in `mods/` — both can move to another drive, but by default they pile up in the install.

## How to use it in practice

1. Download MO2 from Nexus (`nexusmods.com/skyrimspecialedition/mods/6194`) or GitHub releases.
2. Install MO2 outside Program Files (typically `C:\Modding\MO2-Skyrim\`) — Windows protects Program Files and MO2 can hit permission issues there.
3. On first launch, MO2 detects your Skyrim install. Confirm the path.
4. Configure executables: add `skse64_loader.exe` and mark it default. From now on MO2 launches the game with SKSE.
5. Download mods from Nexus. With MO2 open, Nexus' "Mod Manager Download" button sends them directly into MO2.
6. In MO2, mods appear in the "left pane". Check them to activate, drag to reorder.
7. In the "right pane" are plugins (.esp/.esm/.esl). Sort them manually or run LOOT from inside MO2.
8. Launch the game from MO2 with the "Run" button at the top right.

## Honest limitations

**Steep learning curve**. Concepts like "left pane vs right pane", "mod order vs plugin order", "overwrite folder", and "conflict winner" take several hours of real modding to internalize. Official docs are decent but assume some background.

**Mandatory install outside Program Files**. If you install it in Program Files (Steam's default location), Windows UAC interferes and MO2 throws weird errors. The rule: never in Program Files.

**Doesn't support every game**. MO2 is oriented to Bethesda-style games with a Data/ structure. For games like Cyberpunk 2077 it works but with caveats — most people use Vortex there. For Skyrim/Fallout/Starfield, MO2 is the obvious pick.

**Dense, technical UI**. Many columns, many options, many context menus. It's not as polished visually as Vortex.

## How to get started

1. Install SKSE64 first (see related tool).
2. Download MO2 from `nexusmods.com/skyrimspecialedition/mods/6194`.
3. Install it in `C:\Modding\MO2-Skyrim\` (NOT in Program Files).
4. Set SKSE64 as the default executable.
5. For your first mods, install Address Library + SkyUI from Nexus using "Mod Manager Download".
6. Activate each mod in the left pane.
7. Launch from MO2 and confirm SkyUI loaded (you should see the new UI when opening the inventory).

For deeper guidance, the official wiki at `modorganizer2.github.io` covers every advanced flow.
