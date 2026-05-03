---
title: "Mobalytics"
description: "Coaching platform for League of Legends built around the GPI (Gamer Performance Index), with improvement-area analysis, per-champion builds, and a desktop app integrated into Overwolf."
quickTake: "If your question is 'what do I have to improve to climb', Mobalytics is the only tool in the ecosystem that answers it in a structured way. Everything else tells you what to build or what happened; Mobalytics tells you why you lose."
---

## What it is

Mobalytics is a coaching and personal-analysis platform for League of Legends, launched in 2016 by a San Francisco-based company that raised multiple funding rounds specifically to build "self-improvement" tools for gamers. Its central product is the **GPI (Gamer Performance Index)**: a multidimensional score that breaks down your performance into 8 areas (combat, vision, farming, aggression, consistency, objectives, versatility, survivability) and tells you which are your strengths and weaknesses relative to players in your rank.

There are three ways to use it: the website (mobalytics.gg) for lookups and dashboard, a desktop app that runs inside the Overwolf client, and a set of coaching guides written by coaches and pros. It also covers functions that overlap with OP.GG and U.GG (match history, builds, runes, tier lists), but its editorial angle is always player improvement, not just lookup.

A paid tier ("Mobalytics Pro", ~$5/month) unlocks unlimited history, deeper recommendations, and premium guides. The free tier covers basic GPI, builds, and recent-match dashboard.

## What problem it solves

OP.GG tells you **what happened** in your match (KDA, gold, damage). U.GG tells you **what to build** on a champion. But neither tells you **why you're stuck in your current elo** or **which concrete areas you need to focus on to improve**.

That's the question Mobalytics tackles. The GPI processes your matches, compares them against players in your same rank and role, and returns a readable diagnosis: "your farming is in the 80th percentile (excellent), but your vision score is in the 30th (below your rank average — priority improvement area)". On top of the diagnosis, it suggests concrete actions and specific guides for working on those areas.

This covers a real gap: most mid-to-low elo players don't know what to prioritize. Mobalytics translates data into an action plan.

## What people use it for

**Identifying priority improvement areas**: the central use case. Look at your GPI, identify the 1-2 axes with the lowest score, and focus your practice there.

**Progress tracking over time**: the GPI keeps history, so you can see whether your vision score (for example) is actually improving after two weeks of focusing on wards.

**Builds and runes with pedagogical context**: like U.GG, it lists builds by champion, but annotates them with "why" explanations — which situations favor each item, when to deviate from the core.

**Written coaching guides**: the Academy section has long-form guides written by coaches on macro game, wave management, vision control, mentality. Useful for players who learn better by reading than by watching videos.

**Champ select assistant (desktop)**: the desktop app detects your champion in champ select and automatically loads the build, runes, and tips for the specific matchup you're about to play.

## Who this tool isn't for

Mobalytics is excellent as a structured improvement tool, but it isn't what you need if:

- **You only want to check your rank or a friend's** → OP.GG is faster and more direct, without the pedagogical layer that in that case is overhead.
- **You only want to see builds and runes** → U.GG is lighter and has the cleanest builds data, without the coaching overlay.
- **You don't want to install the Overwolf client** → Mobalytics' web app works, but the desktop app requires Overwolf as runtime (see "Honest limitations"). Porofessor has a lighter overlay if you only want champ select assistance.
- **You want deep aggregated meta stats** → Lolalytics and League of Graphs are better for that kind of statistical analysis.

## How it's used in practice

1. Go to `mobalytics.gg`, create a free account (login with Google, Discord, or Riot ID).

2. Connect your LoL account by entering your Riot ID. Mobalytics imports your recent matches and computes the initial GPI.

3. Main dashboard shows: GPI with its 8 areas, comparative ranking vs your elo, highlighted priority improvement areas, and recommendations for related guides.

4. For each recent match: automatic analysis with feedback ("high lane-phase pressure but low team-fight impact — consider practicing positioning post-15min").

5. **Champions** section: builds, runes, matchups, like U.GG but with pedagogical notes.

6. If you install the desktop app (via Overwolf), it assists you automatically in each champ select by loading the corresponding build without you having to navigate to the site.

## Honest limitations

**Desktop app requires Overwolf**: in November 2022, Mobalytics migrated its desktop app from the standalone runtime (Electron) to Overwolf. The old app is frozen and every new feature ships in the Overwolf build. This means using the champ select assistant requires installing Overwolf, a platform with its own runtime, injected ads, and its own telemetry (controversial in parts of the gaming community). The web app does NOT have this limitation — it runs in any browser without an extra runtime.

**The GPI is opaque on its exact formula**: Mobalytics doesn't publish the exact weights of the GPI algorithm. You know it combines several sub-scores and compares against your peer group, but the detail is proprietary. That makes it useful as directional guidance but not as absolute ground truth.

**Learning curve on the GPI itself**: the 8 performance areas take time to internalize. A new player can feel overwhelmed by dense dashboards.

**Paid tier pushes upsells**: Mobalytics Pro offers extended history and premium guides. Upsells appear often in the free tier. The core product (basic GPI, builds, dashboard) remains free and useful without upgrading.

**Generic recommendations at low data volume**: if you only have 5-10 analyzed matches, the GPI has low statistical confidence and recommendations may feel generic. Improves with volume (50+ matches).

## How to get started

1. Go to `mobalytics.gg` and create an account (login with Riot, Google, or Discord).

2. Connect your Riot ID in the relevant region. Wait ~2-3 minutes for matches to import and the initial GPI to compute.

3. Look at your 8 GPI areas. Identify the 1-2 with the lowest score relative to your peer group — those are your real priorities.

4. Search the Academy section for a guide related to that area (e.g.: if your vision score is low, look for warding and vision-control guides).

5. Check the GPI again every 1-2 weeks to see evolution. If you're just starting, wait until you have 30-50 analyzed matches before making big decisions based on the score.

6. If you want the champ select assistant, decide whether installing Overwolf is worth it for you. If your priority is lean/standalone, stay with just the web app — the dashboard covers 80% of the value without extras.
