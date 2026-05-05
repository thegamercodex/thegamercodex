---
title: "Trials Report"
description: "Specialized stats for Destiny 2's Trials of Osiris: flawless passages, matchup analysis, and PvP weapon trends."
quickTake: "If you play Trials with flawless ambition, you can't compete without this. Knowing the enemy fireteam before round 1 is asymmetric information that changes matchups."
---

## What it is

Trials Report is a website specialized in Trials of Osiris, Destiny 2's weekend PvP mode. Free, web-only, ad-supported. No login required for basic queries; optional for extended personal tracking. Active since Trials returned to D2 in 2020.

Covers Trials stats specifically: flawless passages per season, fireteam composition analysis, weapon usage trends in Trials, global leaderboards, and the distinguishing feature — **matchup tool** that shows the enemy fireteam's recent history as soon as the match starts.

## What problem it solves

Trials of Osiris is a high-stakes mode (one loss at 3-0 breaks the flawless run). Information asymmetry shifts matches: if you know your opponent is a flawless veteran with 200+ passages, you adjust strategy (more passive, avoid 50/50 trades). If you know they're a rookie, you press. Without info, you play blind.

Trials Report solves this with a "matchmaking history" toggle that loads as soon as Trials tracks the match. In 30 seconds you know who you're playing against, what weapons they use, their Trials K/D, and how many flawless they have.

## How it differs

Versus Destiny Tracker (which also has PvP stats), Trials Report is **specialized and deep in Trials**: real-time matchup tool, weapon usage filtered by Trials mode specifically, fireteam analysis. Destiny Tracker is more general; Trials Report is where Trials sweats live.

Versus Raid Report (its sister tool), they don't compete — Raid Report covers raids/dungeons, Trials Report covers Trials. Same team or similar philosophy of "specialized tool that does one thing very well".

## What people use it for

**Pre-game matchup analysis**: paste enemy fireteam Bungie IDs (or use automatic integration) and see Trials stats of the rival trio.

**Flawless run tracking**: in a season, how many flawless cards you've completed, win rate, best rounds.

**Weekend weapon meta**: what weapons are being used most in Trials this season, how it shifted from last patch.

**Fireteam composition leaderboards**: top fireteams of the weekend, useful to identify known squads in LFG.

**Personal history lookup**: how many flawless passages in your career, what weapons you use most, what maps you do best on.

## Who it's not for

If you don't play Trials of Osiris, this site is 100% irrelevant. Covers only that mode.

If you play Trials casually (a couple matches per weekend, no flawless ambition), the matchup tool has marginal utility — it matters only when matches are even and you want an edge.

If you're bothered by opponent "stalking", you can hide your Bungie profile (Trials Report respects these opt-outs) — but you lose symmetry: the rival can hide, so can you.

## How to use it in practice

1. Before the weekend, go to `trials.report` to review last season's meta and trending weapons.
2. Start Trials. As soon as the match begins, the site detects your fireteam (via API) and auto-loads matchup if you have your profile linked.
3. For manual lookup: paste enemy Bungie IDs in `/team`. See K/D, flawless count, weapon usage of all three.
4. Post-match, review round detail if you want to analyze specific trades.
5. For personal season tracking: dedicated tab with flawless cards, lighthouse passages, etc.

## Honest limitations

**Bungie API doesn't expose fireteam composition in real-time consistently**. There's a delay (seconds to minutes) between matchup and data availability. In fast matches, you can finish before having the lookup.

**Private profiles don't appear**. If rivals hid their career, you can't stalk anything. Fair privacy, but asymmetric.

**Trials only**. Doesn't cover regular Crucible, Iron Banner, or other PvP. For those, Destiny Tracker is the option.

**Ads and sponsored CTAs**. The free experience is functional but the site pushes PRO Tier for "matchup faster" and extra stats.

**Information isn't coaching**. Knowing the rival's K/D doesn't teach you to position better. To improve, your own gameplay and creator videos (Mactics, etc.) deliver more.

## How to get started

Go to `trials.report`, link your Bungie ID. The first weekend of Trials after, the site auto-shows each matchup. Try a manual lookup of the enemy fireteam after a tough round and see if the info makes sense with how they played. In 2-3 weekends you'll have integrated the flow into your Trials routine.
