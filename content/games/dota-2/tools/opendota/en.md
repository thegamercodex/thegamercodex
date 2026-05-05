---
title: "OpenDota"
description: "Fully open-source Dota 2 statistics platform with deep replay parsing, the most accessible public API in the ecosystem, and an active community of contributors."
quickTake: "If Dotabuff is the polished consumer product, OpenDota is the engineer's choice. Open-source, deeper raw data, and the API everyone building Dota 2 tools eventually integrates with."
---

## What it is

OpenDota is a Dota 2 statistics platform launched in 2014 as a fully open-source alternative to closed-source trackers. The codebase, the data ingestion pipeline, and the backend API are all public on GitHub under MIT license. Anyone can run their own instance, contribute features, or build derivative tools on top of the public API.

The website itself offers what other trackers offer: player profiles, match history, hero stats, win rates, and leaderboards. But the differentiator is what's underneath — the replay parser (YASP, then Manta) extracts unusually detailed data per match: ability uses, ward placements, smoke timings, lane assignments, runes collected, and full positional data when replays are parsed in detail.

The project is sustained by community contributions and a "Plus" model (~$3/month) that funds infrastructure but does not paywall the core data. The API is free for non-commercial use up to 50,000 calls/month, paid above that. Dozens of Dota 2 tools — including some with their own brand — fundamentally use OpenDota's API or its open-source replay parser.

## What problem it solves

Dotabuff and STRATZ are excellent products but they're closed boxes: you can only see what they choose to show you, and you cannot build on top of their data. For developers, advanced players, and the Dota 2 community as a whole, this is a significant limitation.

OpenDota solves this in two ways: first, by exposing the same data raw and queryable via API, allowing anyone to build their own tools or analyses. Second, by being transparent about parsing methodology — if a stat seems wrong, you can audit how it's calculated.

For an end user it also has unique uses: query "Explorer" with custom SQL on the public match database is the most powerful way to answer questions like "what's the average buyback rate of heroes that win games above 4K MMR" or "what's the win rate of Templar Assassin in Dota 2 with vs without Desolator on this patch."

## The difference with Dotabuff

Both fundamentally do the same thing — Dota 2 stats tracking — but with very different audiences:

**Dotabuff**: closed-source, polished UI, premium-tier strong (TrueSight), broader brand recognition. The default for most casual players.

**OpenDota**: open-source, more direct UI, deeper raw data, public API for developers, no aggressive paywall. The default for advanced users, builders, and anyone wanting verifiable data.

For typical match history lookup either works. For deep analyses, custom queries, or building things, OpenDota wins.

## What people use it for

**Detailed match analysis**: every match has parsed-replay data with timings, positions, and granularity unmatched by competitors. Excellent for honest post-match deep dives.

**SQL Explorer**: the public Explorer page lets you run custom SQL on the match database. The example queries answer real meta questions ("Top 50 heroes by win rate at 5K+ MMR last 30 days") and you can write your own.

**Public API for tools**: dozens of Dota 2 tools, Twitch overlays, and Discord bots use the OpenDota API as data backend. If you're building anything Dota 2-related, this is the API to learn.

**Patch-level meta analysis**: hero meta tables update by MMR bracket and patch, with standard filters for time range and skill level.

**Public profile lookup**: like Dotabuff, just with a denser UI and better filters for the technically-minded user.

## Who this tool isn't for

OpenDota's strength (raw, complete, open) is also its limitation. Some user profiles are better served elsewhere:

- **Casual players who want quick visual lookup** → Dotabuff is friendlier and faster to read.
- **AI-driven coaching with ML insights** → STRATZ has invested specifically in that.
- **Polished mobile experience** → Dotabuff and STRATZ have better mobile UX.
- **Competitive pro stats with editorial context** → datdota and Liquipedia provide more curation.
- **In-game live tips** → for that you need an overlay (Dota Coach, DotaPlus).

## How it's used in practice

1. Go to `opendota.com` and search by player name or paste Steam ID.

2. The profile shows hero stats, recent matches, and lifetime stats. Click any match to view detailed parsed data.

3. For deep research, navigate to `opendota.com/explorer` — the SQL Explorer with the public match database. The dropdown suggests example queries that work as ready-made templates.

4. To build something on top: read the API docs at `docs.opendota.com`. The free tier (50K calls/month) is enough for personal projects and small tools.

5. For replay parsing: upload a replay manually or wait for the system to auto-parse a match. Detailed parsing requires more time/resources, so not all matches are parsed automatically — you can request specific matches via Plus.

## Honest limitations

**Less polished UI than Dotabuff or STRATZ**: the experience is functional and dense, with less attention to visual onboarding. New users may need a few minutes to get oriented.

**Replay parsing is not automatic for all matches**: due to compute cost, OpenDota only parses some matches in full detail by default. Plus subscription guarantees parsing for your matches; otherwise you can manually request.

**API rate limits**: the free tier is generous (50K calls/month) but if you build a tool with traffic, you'll need a paid plan or your own instance.

**Project sustainability dependent on community**: as an open-source project, OpenDota's continuity depends on volunteer contributions and donations. There have been historical periods of slow updates. Currently active.

**Mobile UI behind competitors**: the responsive design works but isn't tuned for one-handed mobile use the way Dotabuff is.

## How to get started

For passive use, no registration: `opendota.com`, search your player name, browse data. To make the most of it:

1. Login with Steam to claim your profile and unlock match favorites.

2. Try the SQL Explorer at `opendota.com/explorer`. Start with the example dropdown queries — they teach you what data is available.

3. If you have a developer profile, read the API docs and apply for an API key. The first 50K calls/month are free.

4. Consider OpenDota Plus only if you genuinely use the platform daily and want to support the project — there's no functional core paywall.

5. For comparison or fact-checking against another tracker, open Dotabuff or STRATZ in parallel — the three are complementary, not redundant.
