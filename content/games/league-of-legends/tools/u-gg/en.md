---
title: "U.GG"
description: "Hub for builds, runes, and tier lists for every League of Legends champion, with a massive aggregated dataset and a more modern UX than the category average."
quickTake: "The cleanest reference for looking up builds and runes by champion. If your question is 'what do I build on this champion', U.GG answers it faster than anything else. For personal history and general tier lists, OP.GG remains more comfortable."
---

## What it is

U.GG is a web platform for builds, runes, and per-champion stats in League of Legends, launched in 2018 and operated by the company of the same name based in the United States. Its original focus was to build the fastest, cleanest builds site in the ecosystem, in an era when Mobafire and other legacy sites dominated the category with cluttered, rarely-updated UX.

The most common usage is direct: search for a champion, pick a role, and the page returns the optimal current-patch build (items, runes, summoner spells, skill order) computed over millions of aggregated games. It also covers match history (OP.GG-style), per-matchup counters, tier lists, and probuilds.

There's a paid tier ("U.GG Premium", ~$3/month) that removes ads and unlocks advanced filters, but the entire editorial core of the tool is free and accessible directly from a browser, with no login.

## What problem it solves

There are two distinct questions a LoL player asks constantly: "how did I do?" and "what do I build on this champion?". OP.GG answers the first canonically. U.GG answers the second.

Riot's client ships recommended builds, but they're static, generic, and often out of sync with the actual meta. A player who wants to optimize their build needs aggregated data from real games, ideally filtered by rank (Diamond+) and role. U.GG fills exactly that gap, with clear presentation: item by item, with associated win rate and pick percentage.

## The difference with OP.GG

OP.GG and U.GG cover overlapping functionality, but the primary entry point of each is different:

**OP.GG**: the natural entry is **a summoner**. You look up an account and from there navigate to its matches, its champions, its stats. Builds and tier lists exist but are secondary.

**U.GG**: the natural entry is **a champion**. You search "Yasuo mid" and immediately get the build, runes, matchups, situational items. Match history exists but is complementary.

Another note: U.GG often appears described as "Riot-approved" on forums and reddits. **There is no** formal "Riot Partner" program for builds sites — that designation is reserved for content creators. U.GG sponsored an LCS broadcast segment in 2019 (a one-off commercial deal), and the site itself includes the standard "isn't endorsed by Riot Games" disclaimer. It's third-party, just like OP.GG, Mobalytics, and Blitz.

If your workflow starts with "I want to see my last match", OP.GG. If it starts with "what do I build on this champion for this matchup", U.GG.

## What people use it for

**Looking up the optimal current-patch build**: the dominant use case. Search the champion + role and get items, runes, summoner spells, and skill order in a single view.

**Importing runes into the client**: U.GG has an optional desktop app that imports the rune page directly into the LoL client when it detects the champion selected in champ select.

**Studying matchups**: the "Counters" section shows which champions your pick beats / loses to, with percentages based on aggregated data. Useful for deciding bans or adapting your pick.

**Tier lists by role and rank**: U.GG's own tier list with color-coded tiers (S+, S, A, B, C, D) computed from win rate adjusted by pick rate.

**Probuilds**: section with recent builds from professional players by champion, useful for seeing what pros are building in new patches before aggregated data stabilizes.

## Who this tool isn't for

U.GG is excellent as a fast build guide and meta lookup, but it isn't the best fit for:

- **Deep statistical analysis** → Lolalytics and League of Graphs offer more granular breakdowns (by power-spike timing, by enemy composition, by game duration).
- **Structured coaching and personal improvement** → Mobalytics has the GPI (Gamer Performance Index) which tells you which areas to work on, U.GG doesn't go into that territory.
- **Active assistance during champ select and matches** → Porofessor (native overlay) or Blitz (overlay with automation) are the specialized options.
- **Match history as the primary entry point** → OP.GG remains more comfortable when your question starts with an account rather than a champion.

## How it's used in practice

1. Go to `u.gg` and search for the champion's name (or browse the champion grid).

2. Select the role (top, jungle, mid, ADC, support) — the site detects the most common role if you don't specify.

3. The page loads the recommended build with: starting items, core build path, situational items, primary and secondary runes, summoner spells, skill order.

4. Additional tabs per champion: **Counters** (matchups), **Probuilds** (pro builds), **Statistics** (win rate by item, by matchup, by duration), **Tier List** (general role ranking).

5. Available filters: by rank (Platinum+, Diamond+, Master+), by region, by specific patch.

If you want to import runes automatically into the client, install the desktop app — but for pure web lookup it isn't required.

## Honest limitations

**Heavy ads in the free version**: U.GG relies heavily on ads in the free tier. On desktop they're tolerable; on mobile they can become annoying. An ad-blocker handles most of them.

**Tier list algorithm is opaque**: U.GG assigns tiers (S+, S, A, etc.) with a proprietary algorithm that weighs win rate and pick rate, but doesn't publish the exact formula. Lolalytics is more transparent in how it derives its rankings.

**Smaller regions have gaps**: like op.gg, aggregated stats are very reliable in KR, NA, EUW, but may be less representative in LAS, LAN, OCE, BR.

**Pro coverage isn't its strength**: U.GG has Probuilds but the base is smaller than that of Probuilds.net or Probuild.gg, which are sites dedicated exclusively to that function.

**Premium tier is optional but pushed often**: the site upsells subscription via popups and banners. If you only want to look up builds, ignore the upsells — the free version covers 95% of use cases.

## How to get started

No registration or installation required. Go to `u.gg`, search for a champion, pick a role, done. For maximum value:

1. Bookmark the URL for the champion + role you play most — the builds update automatically each patch.

2. If you care about your role's general meta, save the corresponding tier list as a session-start resource.

3. Before each ranked match, open the Counters section of your champion to see which bans to prioritize.

4. Consider the desktop app only if you want auto-import of runes — for everything else, the web is enough.

5. If you want to understand why a build works (not just what to build), complement with Lolalytics which shows the statistical "why" better.
