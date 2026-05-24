---
title: Just-Wiped
description: Web server browser focused on finding just-wiped servers, with fine filters by type, slots, and schedule.
quickTake: The fastest way to find a fresh server to start a wipe. If you hop between servers each force wipe or want weekly freshes, this is your home page on Thursday mornings.
---

## What it is

Just-Wiped is a free web server browser for Rust with a specific focus: showing servers that just wiped. It lists every Rust server with last wipe timestamp, current player count, max slots, tags (vanilla, modded, PvE, etc.) and filters to combine them. Free, no login, maintained by an independent dev.

## What problem it solves

Joining a fresh wipe in Rust is the difference between finding barrels and nodes vs. finding pre-built bases and distributed blueprints. The in-game browser doesn't show wipe time usefully — only "Server age" in hours. Just-Wiped solves it: filters for wiped in last hour, last 24h, this week, this force wipe cycle, with legible details at a glance.

## Differentiation

Against BattleMetrics, Just-Wiped is simpler and focused on wipes. No player tracking, configurable alerts, or RCON tool — just the browser. For finding the fresh wipe, that simplicity is an advantage: zero scroll, direct filters, join. BattleMetrics gives you more data depth if you need beyond.

## What people use it for

- **Finding fresh wipes**: filter by "Wiped in the last hour" + tag + region, see list, join.
- **Force wipe day (first Thursday of each month)**: the site becomes the community's standard dashboard — every server wipes simultaneously, you have to pick fast.
- **Finding a weekly server matching your schedule**: filter by wipe schedule (weekly Tuesdays, biweekly Thursdays, etc.) for consistency.
- **Browse modded servers**: filter by tags (10x, 100x, KitPVP, Battlefield, Build) to find the play rhythm you want.
- **Track favorite servers**: mark servers as favorites to see them fast when they wipe.

## Who this isn't for

If you want admin features (RCON, player tracking, alerts), BattleMetrics is the tool. If you only play one fixed server, you don't need a browser — the in-game one is enough. If you play vanilla on Facepunch officials, those servers are listed but have their own rotation system that the in-game browser shows fine.

## How to use it

1. Open just-wiped.net, no registration.
2. Top filters: "Wiped in" (1h, 24h, week, cycle), tag, region, group size, slots.
3. Click on a server to see details: last wipe, next predicted wipe, wipe history, connect IP/port to join.
4. Click "Connect" opens the Rust client and joins directly (requires Rust installed).
5. To favorite, click the star — without login favorites are stored in browser localStorage.

## Honest limitations

- **No player tracking or alerts**: for that, BattleMetrics.
- **English only**: no localization.
- **No RCON or admin features**: purely a browser.
- **Next wipe prediction can be off**: for new servers without history, "next wipe" is an estimate based on defaults.
- **List may have downed servers**: occasionally a server shows "wiped recently" but is already offline.

## Getting started

For casual use: just-wiped.net and bookmark. Each force wipe (first Thursday), open, filter by your preferred tag and region, join. For weekly wipes, set filter for "weekly wipe schedule" and bookmark with those filters in URL.
