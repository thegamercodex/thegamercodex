---
title: "Dotabuff"
description: "The most widely used Dota 2 match history tracker, with per-hero stats, win rate by MMR bracket, leaderboards, and the premium TrueSight replay analysis platform."
quickTake: "If you only use one Dota 2 stats tool, this is the safe pick. Web-only, no install, dataset is the broadest in the ecosystem, and the free tier covers 95% of what most players need."
---

## What it is

Dotabuff is the longest-running and most widely used statistics website for Dota 2. The site has operated since 2012 — practically since the game's launch — and remains the default reference for any player who needs to look up stats on an account, scout an opponent, or check whether a hero is currently strong.

Usage is direct: paste a Steam ID or search by player name, and the page returns a full profile with public match history, win rate per hero, recent performance, and lifetime stats. No install, no client, no overlay — just a free web app accessible from any browser.

The free tier covers everything most players need. Dotabuff Plus (~$3.50/month) unlocks deeper filters, longer history retention, and the TrueSight replay analysis platform that automatically downloads each match's replay and breaks it down move-by-move. For most players the free tier is enough; competitive players who want post-match deep dives may find Plus worth it.

## What problem it solves

Dota 2's in-game profile shows only basic match history with limited filters. Comparing per-hero performance across patches, scouting an opponent in champ select, or finding meta heroes by MMR bracket is impossible from inside the client.

Dotabuff fills that gap with a public profile per Steam ID: lifetime stats, win rate per hero (overall and recent), match history with full per-player breakdowns, hero meta tier lists by patch and MMR bracket, and global leaderboards. The dataset is genuinely huge — Dotabuff has been ingesting public match data for over a decade.

## The difference with OpenDota and STRATZ

The three big stats sites share a base function but have different philosophies:

**Dotabuff**: closed-source, friendliest UI, broadest brand recognition, has the strongest premium offering (TrueSight). The most "pop" of the three.

**OpenDota**: fully open-source, the most accessible API for developers, "honest hacker" aesthetic. Less polish, more depth for those who know where to look.

**STRATZ**: closed-source but free-tier generous, modern aggressive UI, AI-powered match predictions and breakdowns. The newest of the three and the one investing most in product features.

For casual lookup and a familiar interface: Dotabuff. For deep data dives or building tools: OpenDota. For modern visualizations and AI insights: STRATZ. Most committed players bookmark all three.

## What people use it for

**Quick post-match review**: open Dotabuff, find your latest match, check team builds, item timings, and per-player damage. Fastest read of "what happened in that match."

**Scouting in champ select**: paste a teammate or opponent's name to see their hero pool, recent win rate, and recent performance. Useful 30-second context.

**Hero meta browsing**: the "Heroes" tab shows win rate, pick rate, and ban rate by MMR bracket and patch. Useful pulse on the meta without diving into pro stats.

**Tracking personal progress**: see MMR evolution, identify your best heroes, spot tilt streaks in long-term graphs.

**Leaderboards**: regional leaderboards (Americas, Europe, SEA, China) for the top players in the world.

## Who this tool isn't for

Dotabuff is excellent as a general dashboard but not the best for every use case:

- **Building tools or data pipelines** → OpenDota's open API is more developer-friendly.
- **AI-powered match predictions and modern UX** → STRATZ has invested more in those features.
- **High-MMR-only meta tracking** → Dota2ProTracker is more targeted.
- **Pro tournament stats** → datdota is more specialized.
- **Live in-game assistance** → Dota Coach or DotaPlus by Overwolf provide real-time tips.

## How it's used in practice

1. Go to `dotabuff.com` and search by player name or paste a Steam profile URL.

2. Open your profile to see lifetime stats, last 20 matches, win rate per hero, and per-role performance.

3. Click any match to open the detail view: per-player KDA, final builds, damage breakdowns, gold/xp graphs, and team fight summaries.

4. Browse the Heroes tab for current-patch tier list by MMR bracket.

5. For premium TrueSight: enable Dotabuff Plus and the platform auto-parses each replay with positioning data, vision usage, smoke timings, and per-fight breakdowns.

For recurring use, follow your duo's accounts to keep their match history visible from your dashboard.

## Honest limitations

**Synchronization can lag**: a freshly finished match can take 5-30 minutes to appear, depending on the Steam API's queue. This is not a Dotabuff issue but a Valve API one — every third party experiences it.

**Ads in free tier**: like every gaming-stats site, Dotabuff loads ads that get annoying on mobile. Plus removes them.

**Some private profiles can't be tracked**: if a player has hidden their Steam profile or match history, Dotabuff cannot access their data. This is expected behavior, not a bug.

**Premium TrueSight requires Plus**: the deepest replay analysis is paywalled. Free OpenDota offers comparable raw data but in a less polished interface.

**Hero metadata can lag a patch**: when a major patch ships, item descriptions or new hero abilities may take 1-2 days to fully populate. Aggregated stats refresh quickly.

## How to get started

No registration needed for the basics. Go to `dotabuff.com`, search your player name, and your profile loads. To improve the experience:

1. Link your Steam account to claim your profile and unlock favorites.

2. Bookmark the Heroes tab filtered by your MMR bracket — useful before each session.

3. While in champ select, open opponent profiles in parallel (takes 30 seconds and adds context).

4. Consider Dotabuff Plus only if you'll actually use TrueSight replay analysis regularly — most players don't, and the free tier is plenty.
