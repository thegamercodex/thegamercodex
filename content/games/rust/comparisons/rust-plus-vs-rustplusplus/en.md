---
title: Rust+ vs rustplusplus — official companion app vs clan extension
description: Official Rust+ is Facepunch's mobile app. rustplusplus is the open-source Discord bot that extends it for clans. When each fits.
---

Rust+ is Facepunch's official mobile app for remote smart switch control, server event alerts, and team chat from your phone. rustplusplus is an open-source Discord bot that uses the Rust+ API to bring that same functionality to a shared Discord server — perfect for clans. They don't compete — rustplusplus rides on top of Rust+. But the question is when setting up the second is worth it.

## How they feel

**Rust+** is a thin, official mobile app: download from App Store, log in with Steam, pair with server from in-game menu, done. Each player has their own app, their own alerts, their own view. Setup in 5 minutes.

**rustplusplus** is a self-hosted Discord bot: clone the GitHub repo, configure Discord bot, run on VPS or local, pair the bot with the server. After that, alerts and commands hit the shared clan Discord. Setup is 30-60 minutes for someone who's never run a bot, with ongoing operational overhead.

## What they both cover

Both expose: server event alerts (CH47, Cargo, Bradley, Patrol Heli), smart switch control, team info, map.

## What only one covers

**Only official Rust+**:
- First-class mobile app with native push notification.
- Trivial setup without technical dependencies.
- Maintained by Facepunch — doesn't break on API patches.

**Only rustplusplus**:
- Alerts to shared clan Discord channels.
- Commands via Discord (/switch, /info, /team, /map) any member can execute.
- Persistent event history in Discord channels.
- Storage monitoring with custom thresholds.
- Discord roles integration (only officers can /switch).

## When each wins

| Use case | Winner |
|---|---|
| Solo player with mobile app | Rust+ |
| Clan with active Discord | rustplusplus |
| Push alerts to mobile | Rust+ |
| Historical event logs | rustplusplus |
| Zero setup, plug-and-play | Rust+ |

## Combined recommendation

For solo or duo: Rust+ is enough. The rustplusplus setup investment isn't justified without a clan.

For organized clans (4+ players with Discord): rustplusplus is transformative. It turns the Discord server into a real-time Rust dashboard. Worth the 60 minutes of initial setup — the ROI in clan QoL is high.

Important: rustplusplus doesn't replace Rust+, it extends it. Each player keeps Rust+ paired, and the bot rides on top using the same API. If your server blocks Rust+ pairing, neither works.
