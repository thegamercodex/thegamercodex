---
title: Palworld Pal Editor
description: Open-source save editor with WebUI, Docker, and CLI that lets you add, delete, and modify individual Pals — also unlocks Viewing Cage in multiplayer.
quickTake: The most complete save editor in the ecosystem. Docker support lets you run on a dedicated server and edit remotely. If you play multiplayer and want the Viewing Cage, this is the only way to enable it.
---

## What it is

Palworld Pal Editor is an open-source save editor maintained by KrisCris, available as CLI, desktop GUI, WebUI, and Docker container. It lets you modify individual Pals inside the save file: change species, stats, level, IVs, passives, nickname, gender, owner. Its standout feature is that **it unlocks the Viewing Cage in multiplayer** — Pocketpair restricted it to singleplayer and Palworld Pal Editor lets you override that by flipping a flag in the save. Free, GPL-3.0.

## What problem it solves

Two common cases:
1. **Corrupted Pals**: occasional game bugs leave Pals in invalid states (impossible stats, missing references). The editor lets you fix or cleanly delete them.
2. **Free experimentation**: try builds with specific passives without spending 20 hours breeding, or test how a Pal scales in endgame.
3. **Viewing Cage in multi**: editor-specific, the only feature you can't get any other way.

## How it differs

Compared to Palworld Save Pal (the other serious option), Pal Editor wins on:
- **Docker/WebUI support**: ideal if you play on a dedicated server and want to edit remote saves.
- **Scriptable CLI**: you can automate workflows.
- **Viewing Cage unlock**: exclusive feature.

Save Pal wins on:
- **More comfortable GUI for desktop-only users**: if you just want to edit your local Steam save, Save Pal is faster.
- **More mature Game Pass support**.
- **Better for quick single-player work**.

## What people use it for

- **Fix Pals corrupted by game bugs**.
- **Enable Viewing Cage on a multiplayer dedicated server**.
- **Set Pals to target passives without breeding** (controversial: breaks the curve, but people do it).
- **Recovery after updates**: when a big patch breaks saves, the editor can sometimes salvage what's salvageable.
- **Granular backup and restore**: export specific Pals to migrate between saves.

## Who this isn't for

If your only goal is editing your local Steam save casually, Save Pal has friendlier UX. Pal Editor shines in remote setups (dedicated server, Docker) or when you need advanced features like the Viewing Cage unlock.

For non-technical users, the Docker/CLI version can be intimidating — use the desktop GUI or local WebUI.

## How it's used in practice

**Local WebUI**:
1. Download the zip from GitHub Releases.
2. Run `palworld-pal-editor-webui.exe` (Windows) or equivalent.
3. Open `http://localhost:8080` in the browser.
4. Point it at your save folder.
5. Edit Pals visually.

**Docker (remote server)**:
1. `docker run -p 8080:8080 -v /path/to/save:/save kriscris/palworld-pal-editor`.
2. Hit `http://server-ip:8080`.
3. Edit remote saves via browser.

**CLI**:
1. `pip install palworld-pal-editor`.
2. Commands to list, export, edit Pals.

## Honest limitations

- **Corruption risk**: editing saves always carries risk. **Backup mandatory before every session**.
- **Steam version only** (officially; Game Pass save has partial support, check the issue tracker).
- **Doesn't work with very old saves**: each major patch can change the format; the editor needs updates. There's a 1-2 week lag after big patches.
- **WebUI learning curve**: the UI is functional but unpolished — power-user oriented.
- **Bypassing the single-player restriction is controversial**: editing multiplayer saves can affect other players on the server. Use with the host's consent.

## How to get started

If you play solo on Steam: download the release from GitHub, open the desktop GUI, point at the save folder. If you play on a dedicated server: set up the Docker container pointing at the save volume, hit the remote WebUI. **Always backup first**: full copy of `Saved/SaveGames/<world>/` before any edit.
