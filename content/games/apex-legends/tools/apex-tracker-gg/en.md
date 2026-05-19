---
title: "Tracker.gg — Apex Legends"
description: "Tracker Network's Apex Legends-dedicated platform: personal and global stats with KD, win rate, kills per minute, headshot accuracy, regional leaderboards, and an optional in-game overlay via the Overwolf app."
quickTake: "The default everyone in Apex bookmarks eventually. Overwolf integration and leaderboard depth make it hard to beat, though Cloudflare dependency and ads can frustrate. If you only open one tracker, this one."
---

## What it is

Tracker.gg is the largest multi-game stats tracker in PC gaming, and Apex was one of its first major integrations in 2019. The dedicated page (apex.tracker.gg) aggregates data from each match played by any player who has the game linked to a public EA account, and exposes it as dashboards with KD, win rate, damage per match, kills per minute, headshot accuracy, peak rank, and more. Free for basic use, optional Premium tier ($5/mo) removes ads and adds features.

## What problem it solves

Apex doesn't expose persistent in-game stats. Your post-match screen shows how many kills you got in THAT match, but you can't see your aggregated KD, your season-over-season evolution, or how you compare to other players at your rank. Tracker.gg fills that gap: enter your name + platform and you get decades of matches processed into tangible stats. It also lets you compare two profiles side-by-side — useful for coaching or verifying smurfs.

## Differentiation

- **vs apex-legends-status**: ALS is oriented toward META (what legend the top 1% picks, global pick rates, win rates). Tracker.gg is oriented toward you: your personal stats and how you compare. Complementary, not substitutes.
- **vs Blitz.gg**: Blitz has a more feature-rich overlay integrated (Apex companion app inside Blitz). Tracker.gg has better historical catalog and more detailed leaderboards.
- **vs Stryda.gg**: Stryda adds gamification with challenges. Tracker.gg is purer data without a gamification layer.

## What people use it for

- **Verify rank progress and projection**: see your recent matches, how much you need for the next tier, which legends perform best in your hands.
- **Compare with friends/teammates**: side-by-side analysis when forming trios.
- **Detect smurfs in lobbies**: putting an enemy's name in tracker.gg tells you if it's a brand new account with suspiciously high stats.
- **Leaderboard hunting**: see the top 100 global by damage, kills, wins, etc.
- **Overlay during play**: with the Overwolf app, see teammate and enemy stats live at the start of each match.

## Who this tool is NOT for

If you don't want to install Overwolf and only want game meta data (not your personal performance), apexlegendsstatus.com gives you more. If you play casually without caring about your stats, it adds no value.

## How it's used in practice

1. Go to [apex.tracker.gg](https://apex.tracker.gg).
2. Search bar: enter your exact IGN + platform (Origin/Steam/PS/Xbox/Switch). Your account must be public in EA Account settings.
3. Once your profile loads, navigate the tabs: Overview (core stats), Legends (per-legend breakdown), Weapons (gun stats), Sessions (per session).
4. For the overlay: download the Overwolf app from the site's banner, install it, log in. The overlay appears automatically when you launch Apex.
5. To compare profiles: click "Compare" on any profile and add up to 4 names to compare.

## Honest limitations

- **Ads without Premium**: free tier has visible ads, especially on mobile. Premium ($5/mo) removes them.
- **Cloudflare dependency**: tracker.gg has had outages when Cloudflare drops. No own failover.
- **Account privacy gating**: if your EA account is private, you don't show up. Default is public but some players make them private.
- **Lag with post-patch stats**: when Respawn patches, tracker takes a few days to reflect new or rebalanced legends/weapons in its dashboards.
- **No free public API** for programmatic queries. If you want programmatic data, options are apexlegendsstatus or mozambiquehe.re.

## How to get started

Open [apex.tracker.gg](https://apex.tracker.gg), search your IGN + platform, and bookmark your profile. For passive use that's enough. If you want an in-match overlay, download the Overwolf app — initial setup is 5 minutes but after that it's integrated at game launch. Premium can wait until you confirm you use it frequently and the ads bother you.
