---
title: Palworld Save Pal
description: Open-source desktop save editor with a friendly UI, full Steam and Game Pass support, and Player inventory editing in addition to Pals.
quickTake: The casual option for save editing. More polished UI than Pal Editor, more mature Game Pass support, and lets you edit Player inventory in addition to Pals. If you only play solo and want to modify local saves, this wins.
---

## What it is

Palworld Save Pal is an open-source Windows save editor maintained by oMaN-Rod. It's a pure desktop app (no Docker, no separate WebUI) focused on friendly UX. Supports both Steam and Xbox Game Pass save formats, and beyond Pals lets you edit Player inventory, personal stats, and tech unlocks. Free, MIT license.

## What problem it solves

Same domain as Palworld Pal Editor: fix corrupted Pals, experiment with builds, post-update recovery. The difference is focus: Save Pal is built for the user who wants to open the app, edit something, close it, and get back to the game without setting up Docker or learning a CLI.

## How it differs

Compared to Palworld Pal Editor:
- **More polished desktop UX**: faster workflow for casual edits.
- **Mature Game Pass support** (Pal Editor supports it with caveats; Save Pal works out of the box).
- **Player inventory editing**: items, resources, hotbar weapons.
- **Steam and Game Pass support**: detects and loads both formats.

Pal Editor wins on:
- **Remote/Docker setups**: if you have a dedicated server, Save Pal doesn't apply.
- **Viewing Cage unlock**: exclusive feature.
- **CLI scriptability**.

## What people use it for

- **Quick casual edits**: change a Pal's passive, add levels, fix weird stats.
- **Bug recovery**: fix Pals the game left in invalid states.
- **Modify inventory**: add rare materials, consumable items.
- **Test endgame builds without grinding**.
- **Migrate between saves**: export specific Pals.

## Who this isn't for

If you play multiplayer on a dedicated server and want to edit remote saves: use Pal Editor with Docker. Save Pal needs local file access.

If you want the Viewing Cage in multi: only Pal Editor enables it.

## How it's used in practice

1. Download the latest release from GitHub.
2. Run `palworld-save-pal.exe` (Windows).
3. The app auto-detects Steam saves (`%LOCALAPPDATA%/Pal/Saved/SaveGames/`) and Game Pass saves.
4. Pick the world to edit.
5. UI with tabs: Players, Pals, Inventory, Unlocks.
6. Edit visually and save. **Automatic backup of the original save** before the first save.

## Honest limitations

- **Windows only**: no Mac/Linux builds.
- **No Docker/WebUI**: if you want remote, use Pal Editor.
- **No CLI**: full workflow is GUI.
- **Big patches can break compatibility**: like any save editor, there's lag after updates. Check open issues before using after a big patch.
- **No Viewing Cage unlock**.

## How to get started

Download from GitHub releases. Run it. Auto-detects your save (Steam and/or Game Pass). Manual backup of the save folder before touching anything (the app does an auto backup but a second one never hurts). Start with a small edit (rename a Pal, for instance) to confirm the flow works before making bigger changes.
