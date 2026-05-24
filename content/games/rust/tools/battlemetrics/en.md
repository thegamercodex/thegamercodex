---
title: BattleMetrics
description: "All-in-one platform for Rust servers: filterable browser, player and group tracking, alerts, and remote RCON from the browser."
quickTake: For players, the best way to track when your enemies log in. For admins, RCON from any device without opening the game client.
---

## What it is

BattleMetrics is a multi-game web platform for Rust servers (and 60+ other games). It combines four functions: global server browser with filters, player and group tracking with history, configurable alerts system, and an RCON tool for remote server admin. It's freemium: basic features are free, pro features (more alerts, longer history, premium RCON) require subscription.

## What problem it solves

Rust's in-game server browser is very limited: you can't filter by fine wipe time, you can't track "is my rival in the server now," you can't know what times the clan that raided you last week logs in. BattleMetrics solves all of that outside the game. For admins, in-game RCON requires being logged into the server — BattleMetrics gives you browser RCON on any device.

## Differentiation

Against Just-Wiped (server browser), BattleMetrics wins on data depth: tracking specific players, alerts, history. Just-Wiped wins on simplicity and focus on fresh wipes. Against the in-game server browser, BattleMetrics wins on everything except "join with one click." Against native RCON (needs client open), BattleMetrics enables remote admin from mobile.

## What people use it for

- **Advanced server browser**: filters by wipe time (last 1h, 24h, this wipe cycle), tag (vanilla, modded, PvE, PvP), region, available slots, BP wipe status.
- **Player tracking**: set watch on specific players to see when they connect, how long they play, what servers they frequent.
- **Group tracking**: track entire clans with related players, see raid patterns (they group-log at 9pm Fridays).
- **Configurable alerts**: push/email notification when a target player connects, when your server goes down, when a slot opens.
- **Remote RCON**: admin your server from the browser, kick/ban/teleport without needing to log into the game.

## Who this isn't for

If you just want to find a fresh server to start a wipe, Just-Wiped is more direct. If you've never admin'd a server and don't track players, BattleMetrics is overkill. For casual search use, the in-game browser is enough. Some features (heavy tracking, premium RCON) cost money.

## How to use it

1. Open battlemetrics.com, register account (free for basic tier).
2. To browse: battlemetrics.com/servers/rust with side filters.
3. To track players: search the player by name or Steam ID, click "Watch."
4. For alerts: configure from your profile → Alerts, connect email/Discord webhook.
5. For RCON: enable RCON in server.cfg with BattleMetrics IP whitelisted, link the server to your account, then admin from the dashboard.

## Honest limitations

- **Free tier has limits**: track up to N players, limited alerts, basic RCON. Heavy use requires paid.
- **Not 100% real-time**: player count and presence data can have 1-5 minute delay.
- **Player tracking raises ethics debate**: some community members consider tracking specific players as "stalking." Use with judgment (no harassment).
- **RCON requires server config setup**: not plug-and-play, you must whitelist IPs and configure passwords.
- **English only**: no localization.

## Getting started

For casual use: register an account and browse servers. For light tracking: set watch on 1-2 players. For admin: link your server (requires being owner/admin), configure RCON whitelisting per docs at battlemetrics.com/docs. For Discord alerts, configure the channel webhook and test with a dummy alert.
