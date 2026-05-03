---
title: "Porofessor"
description: "Overlay and web app specialized in champ select and live games for League of Legends, with instant scouting of teammates and opponents at the exact moment you need it."
quickTake: "The best champ-select scout in the ecosystem. If you use one tool in the 90 seconds before a match starts, this is it. More focused and less invasive than Blitz, without the Overwolf overhead Mobalytics carries."
---

## What it is

Porofessor is a tool specialized in the exact moment of champ select and the first minutes of a League of Legends match. Operated since 2014 by a French company (InternetServices), its product centers on a very concrete question: who are the 9 players you're about to share the next 30 minutes with, and what do you need to know about them before the match starts?

There are two ways to use it: the website (porofessor.gg) that works as an OP.GG-style dashboard with a "Live Game" tab, and a native Windows desktop app ("Activity Tracker") that integrates with the LoL client and triggers info automatically when you enter champ select. The desktop app **does not require Overwolf** — it's a standalone binary, which sets it apart from Mobalytics.

A paid tier ("Porofessor Plus") unlocks extras like extended history, more detailed threat assessment, and ad removal. The free tier covers all the core — teammate scouting, matchup info, recent win rate, champion mastery, and a "tilt" indicator based on recent streak.

## What problem it solves

Champ select lasts ~90 seconds. In that time you have to decide your pick, ban the right champion, assess who's tilted, identify who's autofilled, see who's a one-trick pony and who's spamming something new. Doing this manually by opening OP.GG on each player is mathematically impossible — you don't make it in time.

Porofessor solves exactly this: as soon as champ select opens, it shows you a compact view summarizing all 9 players — current rank, win rate over the last N matches, champion mastery on their current pick, and a "tilt level" indicator based on recent streak. What used to take 5 minutes of scattered scouting now fits on one screen during the 90 available seconds.

## The difference with Blitz.gg

Porofessor and Blitz are the two most used overlays in the ecosystem. The difference is one of scope:

**Porofessor**: specialist. Does one thing very well — champ select assistance + live-game scouting. It doesn't help with builds (you leave that to U.GG) or coaching (that to Mobalytics). Its desktop app is lightweight, doesn't install an extra runtime (no Overwolf or heavy Electron), and has a minimal system footprint.

**Blitz.gg**: generalist. Covers champ select + builds + runes + match history + complete automation (auto-import of runes, post-game review). More features but also more invasive: aggressive paywall on advanced features, broader telemetry, heavier app.

If your need is "specific help in champ select and nothing more", Porofessor. If you want an integrated assistant that automates the whole flow (with the associated cost in complexity and monetization), Blitz.

## What people use it for

**Instant champ select scouting**: the central use case. As soon as the lobby opens, you see a summary of all 9 players on one screen — rank, recent win rate, champion mastery on the current pick, tilt indicator.

**Identifying autofills and one-tricks**: if a teammate is playing a champion they have 3 mastery games on, you know it's an autofill; if they have 800, you know it's a one-trick. That changes how you plan the composition and who you prioritize on bans.

**Deciding bans with threat assessment**: the app flags "dangerous" enemy picks (champions with high win rate for that player, or picks with strong synergy with the comp they're building).

**Public live-game lookups**: the Live Game tab works without login — paste a Riot ID, see if they're in a game right now, and get real-time info on all players in that match. Useful for spectating friends or pros.

**OP.GG-style match history**: as a complementary feature, it also has a summoner profile with history, though with less UX depth than op.gg specifically.

## Who this tool isn't for

Porofessor shines in its specific niche but isn't the right choice if:

- **You want an integrated assistant with builds, runes, and automation** → Blitz.gg covers more territory, although with the trade-offs mentioned.
- **You want structured coaching and improvement tracking** → Mobalytics has the GPI, Porofessor doesn't go into that territory.
- **You only use match history to check your rank** → OP.GG is more comfortable for that specific function.
- **You don't play on Windows** → the desktop app is Windows-only. The web app works in any browser but you lose the client integration.

## How it's used in practice

1. **Web app (no install)**: go to `porofessor.gg`, enter a Riot ID, get a summoner profile. The Live Game tab shows real-time info if the player is currently in a match.

2. **Desktop app (Activity Tracker)**: download the installer from the site. Once installed, it runs in the background and automatically detects when you open champ select.

3. As soon as the lobby opens, the app pops a window with scouting on the 9 players: name, rank, recent win rate, champion mastery on the pick, tilt indicator (based on recent loss streak).

4. During the match, you can summon the overlay manually for updated info (champion stats, items recommended for the matchup).

5. Post-game: the app keeps history of analyzed matches, accessible via the web dashboard.

For recurring use: keep the desktop app running on startup. Zero friction, zero extra clicks — it activates itself when you enter champ select.

## Honest limitations

**Ads in the free version**: the web app and desktop app load ads in the free tier. Tolerate or pay for Plus.

**Tilt indicator is heuristic, not science**: the "tilt" indicator is based on recent loss streak and win rate delta. Useful directional signal, but not real prediction — a player can have a bad streak and still be perfectly focused, or vice versa.

**Uneven coverage of smaller regions**: like op.gg / U.GG, datasets are more reliable in KR, NA, EUW. In LAS, LAN, OCE, BR, per-player aggregated stats remain valid but some features (like region-relative threat assessment) are less representative.

**Plus tier is a visible upsell**: the site pushes the paid tier with prompts and banners. Core features are in free, but the upsell is persistent.

**Desktop app is Windows-only**: there's no native Mac or Linux version. Users outside of Windows are limited to web use (which works but loses the automatic client integration).

## How to get started

1. Decide whether you want the web app (casual use / one-off scouting) or the desktop app (recurring use / automatic champ select assistance).

2. **For web**: go to `porofessor.gg`, no login required, enter a Riot ID. Done.

3. **For desktop**: download the Activity Tracker from the site, install, and allow it to run in the background. The first time you enter champ select, the app fires automatically.

4. Configure the app to launch with Windows if you'll use it every session — zero operational friction.

5. Use the first minute of each champ select to review the scout. Identify who's a one-trick (priority for protection or ban depending on whether they're teammate/opponent), who's autofilled (don't expect carry from them), and who's tilted (be careful with flame, consider dodging if they're your teammate and the composition isn't viable).
