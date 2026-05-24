---
title: rustplusplus
description: "Open-source Node.js Discord bot that uses the Rust+ API to extend features: channel alerts, remote commands, team chat integrated into your clan's Discord."
quickTake: If your clan already lives on Discord, rustplusplus turns the server into a real-time Rust dashboard. Setup is non-trivial but the payoff for organized clans is big.
---

## What it is

rustplusplus is an open-source Discord bot in Node.js maintained by alexemanuelol. It uses the unofficial-but-stable Rust+ API (rustplus.js library) to extend the mobile app into Discord. Setup: self-hosted (you run the bot on your PC, VPS, or Raspberry Pi), connect it to your Discord server, pair with your Rust server, and the bot publishes info and accepts commands from Discord.

## What problem it solves

Official Rust+ is app-centric and per-player: each person has their own app, individual alerts, their own view. For a clan, that's fragmented — you want CH47 alerts to hit everyone at once in a shared channel, you want anyone in the clan to be able to control compound smart switches, you want a shared event log. rustplusplus turns Rust+'s individual flow into a team flow via Discord.

## Differentiation

No real competition. Official Rust+ covers individual use; rustplusplus is the only popular community extension. There are some uMod plugins exposing server info to Discord webhooks but they're server-side (admin must install) — rustplusplus runs client-side for any player with Rust+ paired, without requiring server admin.

## What people use it for

- **Shared alerts to clan Discord channels**: CH47, Cargo, Helicopter, Bradley pop in #server-events for the whole team at once.
- **Remote commands**: /switch [name] on/off, /info, /team, /map executed from Discord control your remote base.
- **Storage monitoring**: bot can notify when a storage container drops below threshold ("Quincho TC dropped below 100 wood").
- **Team Discord integration**: Discord roles, channels, and permissions map to bot actions (only officers can /switch).
- **Logs**: server event history stays recorded in the channel, recoverable days later.

## Who this isn't for

If you play solo or duo, official Rust+ is enough. If you don't admin your own Discord server, setup doesn't apply. If you've never run a Node.js script or a Docker container, the setup curve is steep (there are good tutorials but they require patience). If your server blocks Rust+, rustplusplus doesn't work either because it depends on the same pairing.

## How to use it

1. Create a Discord application + bot at discord.com/developers, copy the token.
2. Clone the repo from GitHub (alexemanuelol/rustplusplus), install dependencies with `npm install`.
3. Configure `config/config.json` with Discord bot token, server URL, etc.
4. Run the bot: `node index.js` or via Docker.
5. Invite the bot to your Discord server with the correct permissions.
6. From Discord, use `/credentials` to assign your Rust+ pairing to the bot.
7. Once paired, the bot starts publishing alerts and accepting commands.

## Honest limitations

- **Non-trivial setup**: you need node.js or Docker, knowledge of how to create a Discord app, patience to debug.
- **Self-hosted**: runs on your machine. If you turn it off, the bot stops. A small VPS ($5/mo) solves this.
- **Depends on unofficial Rust+ API**: if Facepunch changes the API, the bot can break until update.
- **Maintained by a single dev**: alexemanuelol keeps this up in his free time — releases are consistent but can have gaps.
- **No graphical UI**: configuration via JSON files, no admin panel.

## Getting started

If you've never run a Discord bot: start with the setup guide in the GitHub README, read everything before installing. If you already run bots: the docker-compose in the repo simplifies deployment. The community in the Discord linked from the README is active and helps with troubleshooting. For serious clans, the initial setup is worth it — it's high ROI in clan QoL.
