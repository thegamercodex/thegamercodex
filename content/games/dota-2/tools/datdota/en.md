---
title: "datdota"
description: "Statistics platform specialized in professional Dota 2: customizable queries on tournament data, draft analysis, hero performance breakdowns by patch and competitive context."
quickTake: "The analyst's tool. If you only watch pubs, this is overkill. If you follow the pro scene seriously or want to understand draft trends across patches, datdota has data nowhere else available."
---

## What it is

datdota is a Dota 2 statistics website specialized exclusively in professional games. It was created by Ben "Noxville" Steenhuisen, a known statistician within the Dota 2 esports community who has worked with pro teams and broadcasters as data analyst. Active since 2014, datdota has become reference for analysts, casters, and enthusiasts of the competitive scene who want serious data on how the meta evolves at the highest level.

Unlike Dotabuff, OpenDota, or STRATZ — which mix public matches with pro games — datdota only ingests professional matches: DPC tournaments, majors, regional leagues, and select third-party events. This means the data is much more curated and less noisy: exactly the matches that are worth analyzing for understanding pro meta.

The tool is fully free and the focus is on customizable queries: combinations of filters by hero, patch, tournament, region, team, player, and item to extract specific data crosses. There's no fancy UI nor mobile app — datdota is a tool for users who know what they're looking for and want maximum data flexibility.

## What problem it solves

Pro Dota 2 stats matter for analysts, content creators, and serious enthusiasts of the scene. But getting them out of generic trackers is painful: Dotabuff and STRATZ mix all matches and require heavy filtering to isolate professional context. Liquipedia is excellent for tournament results and historical context but doesn't allow custom queries on data.

datdota is the option that combines: clean professional dataset, ability to filter by multiple specific dimensions, and visualization of historical trends. The "Statistics" page contains hundreds of pre-built queries (each hero's win rate by patch in pro games, drafts most picked at TI, players with highest GPM), and the "Custom Queries" section allows building your own.

## What people use it for

**Tracking the pro meta on a specific patch**: filter "win rate by hero in patch 7.42 in DPC tournaments." Useful before each major to know which heroes are real in the tournament context vs. only popular in pubs.

**Tournament-specific draft analysis**: which heroes were banned or first-picked in each match of a tournament, with global tournament aggregates. Perfect for content creators or fantasy league analysis.

**Player and team historical comparisons**: win rate, hero pool, average GPM, and KDA of any pro player across their entire career, filtered by patch or team.

**Patch effect analysis**: when a hero gets a major change (rework, big nerf, new Aghanim), how did their pro pick rate evolve in the following weeks? datdota is one of the few sources for that.

**Caster and pre-game analyst material**: the depth of pre-built queries makes it useful for pre-tournament prep and broadcast preparation.

## Who this tool isn't for

datdota is hyper-specialized. Many users are better served elsewhere:

- **Casual players who only follow their own MMR** → Dotabuff or STRATZ are correct.
- **Public match meta analysis (4K-7K MMR)** → Dota2ProTracker is more appropriate.
- **Tournament results and team/player history** → Liquipedia provides more editorial context.
- **Friendly UI and "what should I improve" suggestions** → STRATZ is more user-facing.
- **Real-time replay analysis of pubs** → OpenDota's parser is more direct.

## How it's used in practice

1. Go to `datdota.com`. The home shows recent tournaments and shortcuts to popular queries.

2. Browse the "Statistics" tab for pre-built queries: Heroes, Players, Teams, Tournaments, Items, etc. Each shows aggregated data filtered by tournament context.

3. Use the filters at the top of each table to narrow by patch, tournament tier, region, team, and time range.

4. For specific queries not pre-built, navigate to "Custom Queries" — combine multiple dimensions and parameters.

5. The "Drafts" tool offers visualization of pick/ban patterns by tournament and team, useful for understanding strategic preferences.

6. Most tables export to CSV for analysis in Excel/Google Sheets if you want to build your own visualizations.

## Honest limitations

**Spartan UI**: datdota is functional, dense, and not visually polished. Users new to data tools may need a few minutes to get oriented.

**No public match coverage**: if you want stats of pubs from your bracket, datdota does not have them. It's a feature, not a bug — but it's a real limitation if you wanted pub data.

**No mobile app**: web-only and the responsive design works but isn't tuned for mobile.

**Tournament coverage focuses on tier-1**: datdota covers DPC, majors, and large third-party events. Smaller regional tournaments may have partial coverage or none.

**Patch lag possible**: when a big patch ships, it can take a few weeks to accumulate enough pro games for the stats to be meaningful.

## How to get started

No registration needed. Go to `datdota.com` and start exploring.

1. The first useful screen is "Statistics → Heroes" — current top of the pro meta filtered by recent patch.

2. From there, click any hero to see their full breakdown: win rate by patch, by team, who plays them most, etc.

3. To understand a current tournament, navigate to "Tournaments" and select the tournament. The dashboard shows full data: drafts, team stats, top performers.

4. For custom analyses, learn the Custom Queries tool — there's a curve to it, but for users who know basic SQL it's intuitive in a couple of sessions.

5. Combine with Liquipedia for editorial context (results, brackets, narratives) and you have the most complete pro Dota 2 toolkit.
