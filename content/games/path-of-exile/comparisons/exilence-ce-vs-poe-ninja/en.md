---
title: Exilence CE vs poe.ninja — which PoE economy tool to use
description: Short comparison between PoE's two most-used economy tools. One looks at the whole market, the other looks at your portfolio.
---

Both are called "economy tools" but they answer different questions. **poe.ninja** looks at the whole PoE market: aggregates prices across all listings and shows currency, item, build, and trend values. **Exilence CE** looks at *your* portfolio: scans your stash tabs and calculates how much you're worth, how much you earned this session, and where your net worth is concentrated.

## Scope: market-wide vs personal

poe.ninja is the community reference for prices. When someone says "exalt is at 90 chaos this league" or "this item ranks top 1% of usage among slayers", the data comes from poe.ninja. It aggregates trade site listings, normalizes them, and shows averages + trends per hour/day/league. It also has the build browser, which scans the top 15k characters on the ladder and shows which builds, skills, ascendancies, and unique items are in use.

Exilence CE does the opposite: it connects to your PoE account, reads your stash tabs, and applies market prices to your inventory to give you a total value. You tell it "these are the tabs I want to track", hit play, and the tool shows you your net worth in real time plus a profit-per-hour graph for the session.

## When to use each one

**poe.ninja:**
- Decide how much to ask for something you're about to list.
- Know whether it's worth changing farming strategy (did the div card market explode this league?).
- Research the meta: what builds are dominating? Which uniques are most used?
- Track macro trends: chase item prices, currency fluctuation, skill popularity.
- Decide whether a farming mechanic is still profitable.

**Exilence CE:**
- Know how rich you are quantitatively.
- Measure the real effectiveness of a farming session (did I earn 100 div or just 20?).
- Identify where your value is stuck (is 85% of your wealth in a single currency tab?).
- Personal accountability: how much more do I need to buy that mirror-tier item?
- Compare across leagues: if you save snapshots, you see your progress.

## Cost, install, and privacy

poe.ninja is pure web — no login, no individual user tracking. Just open the browser. It aggregates data by scraping public trade; you don't appear in their data as an individual.

Exilence CE is an open-source desktop app (Windows/Mac/Linux). It needs you to grant permission to read your stash tabs via PoE's public API (same as any tool that connects to your account). Your data lives on your PC and in the project's optional cloud account if you want sync across devices. It's the community successor to Exilence Next (which the original dev archived).

## Which one?

If you just want market information: **poe.ninja**. Browser only, no login, has everything you need.

If you want auto-tracking of your portfolio: **Exilence CE**. Install, connect account, watch numbers grow.

They can run in parallel: Exilence CE actually **uses poe.ninja prices** to value your portfolio. They're not alternatives; they're different layers on the same economic dataset.
