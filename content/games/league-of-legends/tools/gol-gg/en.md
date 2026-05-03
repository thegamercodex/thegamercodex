---
title: "Gol.gg"
description: "Analytical database of professional League of Legends esports, active since 2014 from Europe. Deep metrics per match, player, team, and tournament: KDA, gold per minute, vision score, damage share, gold differential, and more."
quickTake: "The European esports analytical reference. If you need deep metrics on a player or team in a specific tournament —not just results, but performance broken down— Gol.gg is the source. More navigable than Oracle's Elixir, less raw on data."
---

## What it is

Gol.gg is an analytical database of professional League of Legends esports, operated from France since 2014. Its product covers what Leaguepedia doesn't: deep statistical metrics per match, player, team, and tournament. Where Leaguepedia tells you who won and with which picks/bans, Gol.gg tells you how many wards that player placed per minute, what their gold differential vs their lane opponent was at min 15, what percentage of team damage they concentrated, and how that compares to the historical average for their role.

It covers the four major leagues (LCK, LPL, LEC, LCS) plus international events (MSI, Worlds), academies, and European regional leagues with particular emphasis. URLs are organized by tournament → match → player, navigable without searching.

It's 100% free, no paid tier, sustained by relatively discreet ads. No login required for lookups.

## What problem it solves

For analysts, journalists, content creators, and serious competitive esports fans, results (who won, with which picks) are only the start. The real question is **how** they won — which player performed above their average, which macro decisions made the difference, which metrics explain the outcome.

Gol.gg answers this with advanced metrics: gold per minute, gold differential, damage share, kill participation, vision score, ward placements, control wards, deaths per game, CS per minute. Each metric is normalized by role and compared against the tournament average, allowing you to identify elite performers vs. average quickly.

This fills a real gap: Riot doesn't publish this aggregated data in a navigable way, Leaguepedia doesn't get into analytics, and personal-stats sites (op.gg, etc.) don't cover the pro scene with that depth.

## The difference with Oracle's Elixir

Gol.gg and Oracle's Elixir are the two analytical-esports references, with different emphasis on presentation and philosophy:

**Gol.gg**: focus on navigability. Stats are presented in tables and dashboards you can explore by clicking — tournament → match → player → individual metrics. The learning curve is lower. Complete coverage but stronger in European leagues.

**Oracle's Elixir**: focus on raw data and downloadable datasets. Tim "Magic" Sevenhuysen maintains the base with exportable CSV datasets and a blog with periodic editorial analysis. More statistical rigor, better for analysts who want to run their own queries. Stronger coverage in Anglo leagues (LCS, LCO).

If your workflow is "explore visually to find insights", Gol.gg. If your workflow is "download datasets and do your own analysis", Oracle's Elixir. For complete coverage of an international tournament, it's worth keeping both — each has gaps the other covers.

## What people use it for

**Analyzing a player's performance in a specific tournament**: central use case. Filter by tournament and player, and get a complete breakdown of their metrics: KDA, GPM, damage share, vision score, kill participation, compared against the role average in that tournament.

**Studying macro trends across leagues**: comparing average gold differential or vision score by role across LCK, LEC, LCS, and LPL reveals paradigmatic differences (more aggressive vs structured styles).

**Validating hot takes with data**: when a cast analyst says "that support is playing very passively", Gol.gg lets you verify with metrics (vision score per minute, ward placements, kill participation) whether the hypothesis has a basis.

**Tracking player evolution across seasons**: see how a player's performance changed from Spring to Summer, or from one season to another.

**Journalistic research**: reporters and content creators writing about esports use Gol.gg to contextualize narratives with verifiable numbers.

## Who this tool isn't for

Gol.gg is excellent for pro analysis but isn't what you need if:

- **You want encyclopedic team/player history** → Leaguepedia has rosters, exact dates, and achievements; Gol.gg is analytics, not history.
- **You want downloadable datasets for your own analysis** → Oracle's Elixir is a better option — CSV datasets, documented methodology.
- **You want soloqueue / personal stats** → OP.GG covers that. Gol.gg is exclusively pro scene.
- **You want game info (champions, items, mechanics)** → the official LoL wiki is the source.

## How it's used in practice

1. Go to `gol.gg`. No login for reading.

2. Home shows navigation by: ongoing tournaments, regional leagues, recent international events.

3. Clicking a tournament opens a view with: standings, calendar, top performers, aggregated stats by team and player.

4. Clicking a player opens a profile with: aggregated stats in the tournament, per-match breakdown, comparison against role average.

5. Clicking a match opens detailed view with: picks/bans, per-player KDA, gold differential timeline, damage breakdown, vision score, final builds.

6. Available filters: by league, by season, by role, by specific champion.

For recurring use: bookmark URLs of tournaments you follow. Pages update in near-real-time during events.

## Honest limitations

**Dense UX, not for casual use**: Gol.gg is built for analysts and serious fans. If you just want to know a match result, it's overkill — Leaguepedia is more direct.

**Uneven coverage across leagues**: European leagues (LEC, LFL) have excellent coverage. LCK, LPL, LCS are complete but may have some gaps in secondary events. Smaller regional leagues may be incomplete.

**No editorial blog / qualitative analysis**: it gives you the numbers but doesn't interpret them. For narrative + analysis, Oracle's Elixir has a blog section Gol.gg doesn't.

**Visible ads**: discreet but present. The tool is free and sustained by ads.

**Vocabulary learning curve**: if you don't understand concepts like "gold differential at 15", "damage share", or "kill participation", the info can feel opaque at first. Worth reading a basic explainer of advanced metrics before using the tool seriously.

## How to get started

1. Go to `gol.gg`. No registration.

2. If you're following an ongoing tournament (MSI, Worlds, regional leagues), find its page and explore. Standings + top performers are the most comfortable visual entry.

3. Click on a player you're interested in and review their breakdown — comparisons against role average are the most useful insight for identifying real performers.

4. If you want to understand a specific metric (e.g.: "what does kill participation exactly mean"), look for an external explainer (Reddit r/leagueoflegends or r/summonerschool have pedagogical threads).

5. For serious own analysis or journalistic research, complement with Oracle's Elixir — downloadable datasets allow queries the native web doesn't support.

6. For non-analytical team/player history (rosters, achievements, dates), Leaguepedia is the complementary source.
