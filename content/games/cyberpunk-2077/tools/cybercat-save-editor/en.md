---
title: "CyberCAT Save Editor"
description: "Desktop save-file editor for Cyberpunk 2077. Lets you edit stats, inventory, appearance, money, and quest flags."
quickTake: "If you've ruined your build, corrupted a quest flag, or want to clone a character to another slot, CyberCAT solves it without reinstalling. Single-player, doesn't break anything — but use it with backups."
---

## What it is

CyberCAT Save Editor (Project CyberCAT-SimpleGUI) is a `.sav` file editor for Cyberpunk 2077, developed by Deweh as a simplified fork of SirBitesalot's original CyberCAT. Open-source (MIT), free, maintained on GitHub.

It's the community's reference tool for save editing: changing V's appearance, adjusting attributes, modifying inventory, adding money, marking quest flags. Use is 100% single-player — Cyberpunk 2077 has no multiplayer and no achievements blocked by save edits (achievements do depend on CET not injecting code, but pure save edits don't block them).

## What problem it solves

Cyberpunk 2077 has cases where a legitimate save reaches problematic states:
- Quest bug leaving a flag stuck without a way to advance.
- Terrible perk/attribute distribution that the Tarot Card doesn't fix without tedium.
- V appearance you no longer like and want to change without starting over.
- Curiosity to try a build without grinding the items.

CyberCAT opens the `.sav` file (REDengine 4's proprietary binary) and exposes the data for editing. Save → load → edit → save → load the modified save in-game.

## Differentiation

Versus **WolvenKit**: WolvenKit edits game assets (models, textures); CyberCAT edits player state (V, inventory). Different tools for different problems.

Versus **PixelRick's CyberpunkSaveEditor**: PixelRick's (`github.com/PixelRick/CyberpunkSaveEditor`) is another save editor, more raw — exposes more data but with fewer visual abstractions. CyberCAT-SimpleGUI is friendlier; PixelRick is more powerful for advanced data. For 95% of uses, CyberCAT is enough.

Versus **CET console** (editing via runtime Lua): CET can modify player state at runtime via commands, but that requires knowing the internal APIs. CyberCAT edits the `.sav` offline directly, doesn't require the game to be open.

## What people use it for

**Changing V's appearance mid-playthrough**: base Cyberpunk 2077 has no mirror for re-customization (added in a patch, but some players want more options). CyberCAT lets you edit all creator sliders externally.

**Respec without a Tarot Card**: instead of spending the rare item, you open CyberCAT, reset attributes and perks, redistribute.

**Add money / components / items**: for players wanting quick testing or just to try a build without grinding, CyberCAT lets you add eddies, weapons, components.

**Unstuck quests**: when a quest has a bugged flag and won't progress, CyberCAT lets you edit the flag manually. Requires knowing which flag to move (community on Reddit / Discord helps).

**Cloning V to another slot**: copying a full character to another save, useful for experimenting with parallel narrative paths.

## Who this tool isn't for

If you value legitimate progression, save editing breaks that by definition. CyberCAT is for a player who already finished the game or has a concrete problem, not for first-playthrough shortcuts.

If you play on console (PS5, Xbox), CyberCAT doesn't apply — PC-only.

If you want to modify game entities (NPCs, world state), CyberCAT doesn't go that deep — it's focused on player save data, not world state.

## How it works in practice

1. Download CyberCAT-SimpleGUI from `github.com/Deweh/CyberCAT-SimpleGUI/releases` or from Nexus Mods (`nexusmods.com/cyberpunk2077/mods/718`).
2. Extract it to any folder — portable, no install.
3. **BACK UP** your save before touching anything. Cyberpunk saves live in `Saved Games\CD Projekt Red\Cyberpunk 2077\`. Copy the entire folder elsewhere.
4. Open CyberCAT and load the `.sav` (the file is named `sav.dat` inside a per-slot folder).
5. Tabs show: Appearance (creator sliders), Character (attributes, perks), Inventory (items), Stats (money, level, etc.), Facts (quest flags).
6. Edit what you need, save. CyberCAT writes the modified file.
7. Load the save in-game. If it works, great. If there's corruption, restore the backup.

## Honest limitations

**Risk of save corruption**. Editing the `.sav` wrong can leave it unreadable by the game. CyberCAT tries to validate, but edge cases exist. **Always with backup**.

**Doesn't identify all quest facts**. For rare quest flags, CyberCAT shows the hex ID but not a readable name. Investigating which flag to touch requires forums and community mods.

**Phantom Liberty support**. PL saves added new flags and entities. CyberCAT kept up with updates but some exotic fields may not be perfectly labeled.

**Infrequent updates**. Deweh's last push was July 2025 at time of writing. Still functional for current game saves, but future save format versions might not be supported immediately.

**No Spanish localization**. UI all in English. For Spanish-speaking players, English technical names are an extra barrier.

## How to get started

1. Before downloading CyberCAT, make sure you have a clean backup copy of your save. **Copy the entire `Saved Games\CD Projekt Red\Cyberpunk 2077\` folder to another disk or cloud**.
2. Download the latest release from GitHub (or Nexus). Extract the zip.
3. Run `CP2077SaveEditor.exe`. UI opens.
4. File → Open → navigate to your save folder → pick the `sav.dat` you want to edit.
5. Make a minimal change first (e.g., add 10 eddies). Save it. Load in-game to verify the save remains functional.
6. After validating the flow works, make your real changes.

Tip: if you're using CyberCAT to fix a specific quest bug, first search Reddit or the modding community Discord for the exact flag. Editing flags blindly can break more downstream quests than the one you're trying to fix.
