---
title: "Windrose Mod Manager (CertiFried)"
description: "Community-built mod manager for Windrose with full target support: client install, local server, Steam Windrose Dedicated Server standalone, and remote servers via SFTP/FTP. Automatic backup before every change."
quickTake: "If you run a dedicated server or change mods frequently, this is the manager that goes beyond drag-and-drop. SFTP integration is the key differentiation versus client-only alternatives."
---

## What it is

Windrose Mod Manager (CertiFried's, entry #148 on Nexus) is a community-built Windows application that automates installation, updating, and management of PAK mods for Windrose. Supports four distinct targets: the game client, the local server file (if you play local co-op), the standalone Windrose Dedicated Server from Steam, and remote servers via SFTP/FTP — useful if you host with g-portal, low.ms, or another provider.

## What problem it solves

Manual PAK mod installation requires: download zip from Nexus, extract, move .pak to the correct directory, repeat per mod, remember which ones you installed. When you have 10+ mods and a remote server, this process becomes chaos. Windrose Mod Manager consolidates everything: drag the .zip or .7z, the manager extracts, installs to the right place, keeps a registry of what's installed and backs up each change. If something breaks the game, rollback is one-click.

## Differentiation

- **Manual install**: error-prone, no tracking. Works but doesn't scale.
- **Vercadi's mod-manager** (GitHub, open source): covers client + local server but no SFTP. Simpler, focused on client install.
- **Windrose Mod Manager (CertiFried)**: covers all targets including remote SFTP. More feature-rich but also more complex.
- Choice between them depends on whether you manage a remote dedicated server: if yes, CertiFried; if no, Vercadi suffices.

## What people use it for

- **Install 10+ mods without going crazy**: bulk install, visible registry, per-mod toggles.
- **Sync mods between client and dedicated server**: install once, push to both targets.
- **Edit `ServerDescription.json` and `WorldDescription.json` safely**: the manager opens configs with structured UI instead of raw text editing.
- **Automatic backup before each change**: if a mod breaks the save, restore from the backup.
- **Bulk updates**: see which mods have a new version available and apply updates together.

## Who this tool is NOT for

If you only want to install 1-2 QoL mods on your single-player client, this manager is overkill — manual drag-and-drop or Vercadi's manager is enough. If you play on Mac/Linux, the manager isn't supported — no cross-platform build.

## How it's used in practice

1. Sign up for Nexus Mods, download [Windrose Mod Manager](https://www.nexusmods.com/windrose/mods/148) (.exe).
2. Install and launch the app. It auto-detects your Windrose install if it's in a standard path.
3. For remote dedicated server: add SFTP/FTP connection in settings with host, port, credentials.
4. To install a mod: drag the .zip or .7z to the app — the manager extracts and prompts for target (client/local server/dedicated server).
5. To configure server: "Server Config" tab, where you can edit `ServerDescription.json` and `WorldDescription.json` with guided UI.
6. For rollback: "History" tab, click any past change to revert.

## Honest limitations

- **Windows only**: no Mac/Linux builds.
- **Closed source**: you have to trust CertiFried — the manager has filesystem and network access, not trivial.
- **Update cadence depends on author**: when Windrose patches, the manager may need its own update for compatibility.
- **Remote dedicated server via SFTP requires technical knowledge**: if you don't know what SFTP is or how to find provider credentials, there's a learning curve.
- **Small community still**: reported bugs may take time to be fixed.

## How to get started

Download Windrose Mod Manager from Nexus, install. If you play only single-player or local co-op, configure only the "Client" target. If you have a dedicated server, add the SFTP connection in settings. For your first mod, test a lightweight one (Faster Cooldowns) to verify the pipeline works before investing in large sets.
