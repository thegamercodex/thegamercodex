---
title: Palworld Server Manager (PSM)
description: Windows app that manages a Palworld dedicated server with RCON, automatic backups, scheduled restarts, and Discord webhooks.
quickTake: The most-used free option for managing a dedicated server. If you're hosting for your group and don't want to pay managed hosting, PSM covers 90% of what you need.
---

## What it is

Palworld Server Manager (PSM) is a Windows desktop app published on Nexus Mods (entry 512) that acts as an administrative wrapper around Palworld's official dedicated server. It gives you a GUI on top of what would otherwise be editing .ini files by hand and managing the server process from console. Free.

## What problem it solves

Hosting a Palworld server means:
- Download the dedicated server from Steam (free).
- Edit `PalWorldSettings.ini` by hand (custom format, easy to break).
- Launch the server process with flags.
- Handle crashes (manual restart when it crashes).
- Backup the save periodically (manual).
- Apply commands via RCON from another tool.

PSM consolidates all that into a GUI: visual settings editing, auto-restart, configurable auto-backup, integrated RCON, and Discord webhooks to announce events (player joined, server up/down, raid spawned).

## How it differs

In the "free dedicated server management for Windows" category, PSM is the most mature option. Other community tools (CrossPlay-Mod-Manager, AMP, Palworld Server Tool) exist but are less integrated or paid. For DIY hosters, PSM is the default.

Compared to managed hosting (HostHavoc, BisectHosting): managed removes the problem entirely in exchange for a monthly fee. PSM is for whoever has the machine and wants full control.

## What people use it for

- **Host a home server for a friend group**: 4-8 players on a home machine.
- **Visual settings configuration**: experience rate, capture rate, day length, etc.
- **Discord notifications**: announce joins, raids, crashes.
- **Auto-backup**: snapshot the save every X hours, retain N copies.
- **Scheduled restart**: every 12-24h so server memory doesn't build up.

## Who this isn't for

If you play solo in a singleplayer world, you don't need a dedicated server or PSM. If you go with managed hosting (paid), same thing — the provider already has their panel.

If you play on Linux, PSM isn't for you — it's Windows-only. For Linux there are community scripts (systemd units, Docker images of the dedicated server) but you're in CLI territory.

## How it's used in practice

1. Download the Palworld Dedicated Server (free, separate from the game, in Steam library).
2. Download PSM from nexusmods.com/palworld/mods/512.
3. Point PSM at the Dedicated Server folder.
4. Configure settings visually (rates, daylength, password).
5. Click "Start Server".
6. Configure the Discord webhook in the corresponding panel.
7. Set scheduled restart (recommended every 12h).
8. Define backup interval (recommended every 1-2h with 24+ snapshots retained).

## Honest limitations

- **Windows only**: like most Palworld modding stuff.
- **Not open source**: the binary is freeware but the code isn't public — some sysadmins prefer auditable alternatives.
- **Updates depend on the author**: after big Palworld patches there's sometimes a day or two of lag before PSM updates.
- **No web panel**: desktop only, no remote access. For remote management you need RDP or similar.
- **Limited to one server per install**: for multiple servers on the same machine, you have to duplicate installs.

## How to get started

Download the Palworld Dedicated Server from Steam (in library under Tools). Download PSM from Nexus. Point PSM at the server folder. Configure settings, password, and restart schedule. Launch. To open the server to the internet: forward UDP port 8211 on your router, share the public IP with your group.
