---
title: "Vercadi Mod Manager"
description: "Open-source mod manager for Windrose hosted on GitHub. Drag-and-drop .zip and .7z, auto-detect game path, pre-install backup, tracking of installed mods for clean uninstall. Focused on client and local server."
quickTake: "The transparent, FOSS alternative to CertiFried's manager. Simpler, no SFTP, but auditable and free. If you don't want to trust closed-source software for your setup, this is the option."
---

## What it is

Vercadi Mod Manager is an open-source mod manager published on GitHub by Vercadi. Covers the most common use case: install PAK mods on the game client and on local server files (not remote). Supports drag-and-drop of .zip and .7z, auto-detects game install paths, backs up files before each change, and tracks installed mods to allow clean uninstall.

## What problem it solves

Same problem as CertiFried's Windrose Mod Manager: automate PAK mod installation. The difference is the approach — Vercadi prioritizes simplicity and open source over advanced features. Doesn't include SFTP, doesn't manage remote dedicated servers, doesn't edit JSON configs with guided UI. But the code is open: if you want to audit what it does or fork it for your needs, you can.

## Differentiation

- **CertiFried's manager**: closed source, complete features (includes SFTP/remote server).
- **Vercadi's manager**: open source on GitHub, reduced scope to the common case (client + local server).
- **Manual install**: no manager, manual extract and move.
- The choice: if you trust closed-source software and want complete features, CertiFried; if you prefer transparency and only need client install, Vercadi.

## What people use it for

- **Install mods on client without manual tracking**: drop the .zip, manager does the rest.
- **Edit `ServerDescription.json` and `WorldDescription.json`** safely via structured UI.
- **Pre-install backup**: rollback if a mod breaks the save.
- **Clean uninstall**: the install registry allows removing mods without leaving residual files.
- **Audit transparency**: read the code on GitHub to understand exactly what it does.

## Who this tool is NOT for

If you run a remote dedicated server via SFTP/FTP, Vercadi doesn't support it — you need CertiFried. If you play on Mac/Linux, there's no cross-platform build. If you want an advanced feature set (mod versioning, dependency resolution), neither — the scope is deliberately reduced.

## How it's used in practice

1. Go to the [GitHub repo](https://github.com/Vercadi/windrose-mod-manager), download the latest release from the "Releases" tab.
2. Install the .exe, launch the app. It auto-detects the Windrose path.
3. Drag the mod's .zip/.7z to the app — extract and install automatically to the selected target (client or local server).
4. To uninstall: "Installed Mods" tab, click uninstall, the manager restores files.
5. To report a bug or feature request: open an issue on the GitHub repo.

## Honest limitations

- **No SFTP**: for remote dedicated server, you have to use CertiFried or manual deployment.
- **No automatic mod updates**: the manager doesn't detect new versions automatically.
- **Windows only**: like most of Windrose's modding ecosystem.
- **Small community**: fewer issues reported, fewer contributors. Active but solo-maintained.
- **Documentation in README only**: no separate wiki or docs; everything lives in the repo.

## How to get started

Clone or download the latest release from [the GitHub repo](https://github.com/Vercadi/windrose-mod-manager). Launch the app, verify it detected your Windrose install, test with a lightweight mod. If you need features it doesn't have (SFTP, dependency resolution), switch to CertiFried's manager or open a PR — the project accepts contributions.
