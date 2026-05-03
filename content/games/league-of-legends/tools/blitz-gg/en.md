---
title: "Blitz.gg"
description: "All-in-one assistant for League of Legends with native overlay during champ select and matches, auto-import of builds and runes into the client, and post-game dashboard with automated analysis."
quickTake: "If you want a single tool that automates the entire flow —from champ select to post-game— Blitz is the most ambitious option. In exchange you accept a heavy desktop client, an aggressive paywall, and broad telemetry. For users who value convenience over fine-grained control."
---

## What it is

Blitz.gg is an all-in-one assistant for League of Legends, launched in 2018 by Blitz Esports (a team previously known for editorial content and esports video production). Unlike specialized tools that cover one slice of the flow (Porofessor for champ select, U.GG for builds, OP.GG for match history), Blitz aims to be **the only external client** a player needs to run.

Its main product is a desktop app (Windows and macOS, no Overwolf — own runtime) that detects the LoL client's state and triggers contextually: during champ select it shows an overlay with builds and runes importable in one click; during the match it shows item and matchup info; on game end it triggers a post-game dashboard with analysis. It also has a web app (blitz.gg) for OP.GG-style dashboard lookups.

A paid tier ("Blitz Pro", ~$5/month) unlocks extended history, advanced post-game analysis, and ad removal. The free tier covers basic overlay, builds and runes, and recent dashboard.

## What problem it solves

There's a player profile that doesn't want to fragment their flow across 4 tools (one for builds, one for scouting, one for history, one for coaching). They want to open the client, play, and have everything else automatic: build loaded automatically, runes imported without an extra click, scouting appearing when they enter champ select, and a ready-made summary at the end.

Blitz covers exactly that profile. The technical investment is in client integration and automation — it isn't the tool with the deepest data, the most curated builds, or the most structured coaching, but it's the one with **the least operational friction** once installed.

## What people use it for

**One-click auto-import of builds and runes**: the central use case. During champ select, Blitz detects your pick and shows build/runes; one button imports them directly into the client, no manual copying.

**Overlay during the match**: real-time matchup stats, power-spike reminders, recommended item info per situation.

**Automatic post-game dashboard**: when the match ends, Blitz fires a screen with summary, comparative KDA, improvement recommendations, and saves history.

**OP.GG-style match history**: as a complementary feature, summoner profile with history, accessible from the web without needing the desktop app.

**Champ select scouting**: similar to Porofessor — info on teammates and opponents in the lobby, although Porofessor remains the specialist in that specific niche.

## Who this tool isn't for

Blitz is ambitious in scope but isn't the right choice if:

- **You prefer pure web without installing a desktop client** → OP.GG covers match history and U.GG covers builds from the browser, with no extra runtime or app telemetry.
- **You only want specific help in champ select** → Porofessor is lighter and more specialized, without the rest of the feature creep.
- **You want structured coaching and long-term improvement** → Mobalytics has the GPI with an improvement framework; Blitz does post-game analysis but more shallowly.
- **You're bothered by broad telemetry or don't want to depend on a Pro tier for advanced features** → Blitz's monetization model is notably more pushed than op.gg / Porofessor / U.GG.

## How it's used in practice

1. Go to `blitz.gg` and download the desktop app (Windows or macOS).

2. Install and allow it to integrate with the LoL client. The first time it asks for login (Riot ID or Blitz account).

3. The app runs in the background. When you open the LoL client and enter champ select, Blitz automatically fires the overlay with build and runes for your pick.

4. Clicking "Import" sends build and runes directly into the client — no manual copying or window switching.

5. During the match, you can summon the overlay to see current stats and item recommendations by matchup.

6. When the match ends, Blitz automatically fires the post-game dashboard with analysis and saves the match to history.

7. The web app (blitz.gg) works in parallel for lookups without the desktop app.

Recommended setup: leave the desktop app on startup so it's available without manual intervention.

## Honest limitations

**Aggressive paywall**: Blitz Pro pushes via popups, banners, and locked features that appear as teasers in the free version. More visible than op.gg / Porofessor / U.GG. Ignorable but annoying.

**Broad telemetry**: the desktop app has its own runtime that captures signals from the LoL client to feed features (auto-detection, contextual recommendations). The privacy policy is legible but the tracking footprint is larger than that of web-first tools. For privacy-sensitive users, this is a real trade-off.

**System footprint**: the app weighs more in RAM and disk than Porofessor or the op.gg web app. On setups with limited specs, this is noticeable.

**Builds and runes are derived, not curated**: Blitz aggregates data automatically like U.GG/Lolalytics, but doesn't have heavy editorial curation. For complex meta (champions with strong situational builds), recommendations can be generic.

**Dependence on the app for real value**: the web app only covers dashboard and match history. The real differential (auto-import, overlay, post-game) requires installing the desktop app. If your goal is occasional casual use, it isn't worth it.

## How to get started

1. Download the desktop app from `blitz.gg` (Windows or macOS).

2. Install and accept the integration permissions with the LoL client. Login with Riot ID.

3. The first time you open champ select, Blitz fires the overlay automatically. Try importing runes and build with one click to validate the integration.

4. Set the app to launch with the system if you plan to use it every session — that eliminates all manual friction.

5. After 1-2 weeks, if you feel the automation justifies the complexity, consider the Pro tier. If you feel the overlay bothers you more than it helps, uninstall it and go back to specialized tools (op.gg + U.GG + Porofessor cover equivalent functions with less overhead).

6. For pure web match-history use without installing a client, stay with op.gg — Blitz doesn't add differential value in that mode.
