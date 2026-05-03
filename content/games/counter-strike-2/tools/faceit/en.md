---
title: "Faceit"
description: "Dominant third-party CS2 competitive matchmaking platform. 1-10 rank system (Faceit Level), proprietary anti-cheat (FACEIT Anti-Cheat), and an ecosystem of community leagues and tournaments."
quickTake: "If you're going to play CS2 competitively for real, Faceit is the default. Valve's matchmaking is fine for casual, but for an experience with strong anti-cheat and motivated players, Faceit is where the scene actually lives."
---

## What it is

Faceit is the most-used third-party platform for CS2 competitive matchmaking. Launched in 2012 originally as a tournament organizer, it evolved into a persistent matchmaking platform with its own rank system (Faceit Level 1-10), parallel numeric ELO, and a client-side anti-cheat (FACEIT Anti-Cheat / FACEIT AC) considered one of the strictest in the ecosystem.

Since 2022 it's part of **ESL FACEIT Group** (the result of merging ESL Gaming and FACEIT, both now under Savvy Games Group of Saudi Arabia). That group also operates IEM, ESL Pro League, and sponsored Majors, which makes FACEIT a central actor in the modern professional scene as well as a community platform.

The model is freemium: free tier allows unlimited matchmaking with basic map pool and stats. Paid tier (Faceit Premium, ~$6-10 USD/month depending on promo) unlocks features like priority queue, advanced stats, region selector, and Faceit Points bonus.

## What problem it solves

Valve's official matchmaking (Premier and Competitive) has known problems: weak anti-cheat (VAC + VACnet), large cheater pool even in high tiers, and heterogeneous community (lots of casual, lots of leavers, little cohesion).

Faceit covers the case "I want to play CS2 seriously with players who also want to play CS2 seriously." Its AC anti-cheat is more invasive client-side anti-cheat (kernel-level in some configs) and catches many cheats VAC ignores. The population is also more self-selected: if you bothered to install Faceit AC, you probably came to play.

For intermediate and advanced players (Faceit Level 6+), the quality of play is notably superior to Valve matchmaking in terms of coordination, comms, and behavior.

## What people use it for

**Serious competitive matchmaking**: the central use case. 5v5 queue with map veto, strong anti-cheat, and motivated players.

**Climbing Faceit Levels (1-10)**: the rank system is highly visible in the community — "I'm Level 8" is a recognized skill statement in the CS scene.

**Playing community leagues/hubs**: Faceit has Hubs (sub-communities with their own rules, e.g., "NA only, no AWPers"), regional leagues, and amateur tournaments.

**Accessing the ecosystem's upper scale**: at Faceit Level 10 you get cash tournaments and eventually FPL (Faceit Pro League) — where the semi-pro scene lives.

**ELO and stats tracking**: Faceit's own profile shows ELO evolution, KDA, and per-map performance, similar to CS Stats but limited to the Faceit ecosystem.

## Who this tool isn't for

Faceit is excellent for serious matchmaking but it isn't:

- **For casual/relaxed play** → the culture is competitive. If you want fun with random comms and memes, Valve's Premier is friendlier.
- **For avoiding anti-cheat installs** → FACEIT AC is kernel-level in some setups. If you have privacy/security objections, you can't use it.
- **For native Linux without friction** → FACEIT AC officially only supports Windows. Linux needs workarounds or Proton (limited).
- **For playing 1-2 hours and forgetting it** → queue can be long (especially in high tiers), and a Faceit match typically takes 45-60 minutes. It's a serious-session commitment.

## How it's used in practice

1. Go to `faceit.com`, register, and connect Steam.

2. Download and install the **FACEIT Anti-Cheat client** (Windows). It's required to play matchmaking.

3. Your first match is the **placement match** that defines your initial Faceit Level (typically 3-5 for normal MM players).

4. For queue: click on **Play CS2** → select region and mode (standard 5v5 is the main one). It assigns you a lobby with teammates, you enter the map veto, and the server.

5. After the match, ELO adjusts and level changes by breakpoints (Level 1: 1-500, Level 10: 2001+).

6. For leagues and tournaments: **Compete** section in the menu. There are free daily tournaments with Faceit Points prizes and premium tournaments with cash.

## Honest limitations

**FACEIT AC is invasive**: the anti-cheat is kernel-level in some cases, which raises legitimate security/privacy concerns. It's a trade-off against cheating; each user decides if they're comfortable with it.

**Queue can be long**: in off-peak hours or smaller regions, 5+ minute queues are common. At Level 10 it can be worse due to a smaller pool.

**Premium is well hidden**: many features that seem "essential" (region selector, advanced stats) are behind Premium. The free tier is playable but clearly designed to push the upgrade.

**Toxicity exists but differs from MM**: the community is more motivated but also more demanding. Costly mistakes generate more tilt than in MM. The culture is "play serious or don't," which doesn't suit everyone.

**Limited Linux/Mac support**: officially only Windows has full AC support. If you play on Linux, there are workarounds but it's real friction.

**Corporate consolidation**: with the ESL+FACEIT+Savvy acquisition, there are concerns about pro ecosystem integrity. Doesn't directly affect matchmaking but is context to know.

## How to get started

1. Create an account at `faceit.com` and connect Steam.

2. Download and install **FACEIT Anti-Cheat** (Windows). Required.

3. Play 5 placement matches (sometimes 1, depending on recent changes) to define your initial Level.

4. Start playing 5v5 matchmaking. The first weeks are an adjustment — the quality of play is noticeably different from MM and takes time to adapt to.

5. If you play regularly, consider Faceit Premium (~$6-10 USD/month). The feature bump (region selector, stats, priority queue) is worth it for serious use.

6. For detailed Faceit stats tracking, integrate with Leetify or scope.gg — both ingest Faceit demos with higher quality than Valve MM ones.
