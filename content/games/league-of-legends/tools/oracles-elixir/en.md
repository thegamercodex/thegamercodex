---
title: "Oracle's Elixir"
description: "Analytical database of professional League of Legends esports maintained since 2014 by Tim 'Magic' Sevenhuysen. Downloadable CSV datasets with per-match metrics, navigable web app, and editorial blog with periodic qualitative analysis."
quickTake: "The Anglo reference for rigorous LoL esports analysis. If you need raw data in CSV for your own analysis, or to read editorial analysis with serious statistical backing, Oracle's Elixir is the source. Tim Sevenhuysen is one of the most respected analysts in the ecosystem."
---

## What it is

Oracle's Elixir is an analytical database of professional League of Legends esports, maintained since 2014 by Tim Sevenhuysen (also known as "Magic" in the analytics community). The product has three components: a navigable web app with aggregated stats by tournament/match/player, a section of downloadable CSV datasets (the key differentiator in the ecosystem), and an editorial blog where Tim publishes periodic qualitative analyses backed by statistics.

It covers the four major leagues (LCK, LPL, LEC, LCS) plus international events (MSI, Worlds), with particular emphasis on Anglo leagues (LCS, LCO) given the author's origin. The methodology is publicly documented, allowing other analysts to replicate and validate calculations.

It's 100% free, no paid tier, sustained by Patreon donations. No login required for basic use — datasets are downloadable without registration.

## What problem it solves

For serious analysts, journalists with a quantitative bent, and students in fields like sports analytics or applied data science, navigating dashboards isn't enough. They need **raw data** they can process with their own tools (Python, R, Excel) to run queries, regressions, custom visualizations, or comparative analysis across seasons.

No other resource in the ecosystem offers esports datasets in CSV directly and freely. Riot has an API that requires technical setup and has rate limits; Leaguepedia has tables but no clean exports; Gol.gg gives you a web app with stats but no files. Oracle's Elixir fills exactly that gap, with downloadable CSVs that are the basis of most serious public analysis on LoL esports.

Additionally, Tim's editorial blog provides qualitative analysis backed by data — the kind of content that combines statistical rigor with accessible interpretation.

See "The difference with Oracle's Elixir" on Gol.gg for the full comparison between the two tools.

## What people use it for

**Downloading datasets for own analysis**: most distinctive use case. Download CSVs of a tournament or season and process with your own tools — Python, R, Excel, whatever — for queries the web app doesn't support.

**Reading editorial analysis with quantitative backing**: Tim's blog publishes periodic posts with analysis of meta patterns, regional trends, or player-specific performance evaluations. Uncommon combination of rigor + accessible reading.

**Verifying calculation methodology**: since methodology is documented, other analysts can replicate and validate. If you're going to cite numbers from Oracle's Elixir in an article or paper, you know exactly how they were calculated.

**Academic and personal research**: students and data-science enthusiasts use the datasets for portfolio projects, theses, or personal exploration of esports as a domain.

**Particularly strong LCS / LCO coverage**: due to the author's origin, Anglo leagues have especially dense coverage and dedicated editorial.

## Who this tool isn't for

Oracle's Elixir is excellent for serious analysis but isn't what you need if:

- **You want visual stats navigation without downloading anything** → Gol.gg has better UX for click-by-click exploration.
- **You want encyclopedic team and player history** → Leaguepedia is the source for rosters, dates, achievements.
- **You don't care about datasets or quantitative analysis** → if you only want to see results or follow a tournament casually, Oracle's Elixir is overkill.
- **You want personal or soloqueue stats** → OP.GG covers that function; Oracle's Elixir is exclusively pro scene.

## How it's used in practice

1. Go to `oracleselixir.com`. No registration for reading or basic download.

2. Home shows: recent editorial blog posts, links to ongoing tournaments, and access to the "Data" section for downloads.

3. The **Tournaments** section lists tournaments by league and season, with navigable aggregated stats.

4. The **Data** section has the downloadable CSVs — files per tournament with aggregated per-match metrics. Each file includes documented column headers.

5. The **Match Stats** blog publishes periodic editorial analysis — finals post-mortems, player evaluations, competitive meta trends.

6. If you want to contribute or check methodology, there's an "About" section with project info and how Tim maintains it.

For recurring use as an analyst: bookmark the current season's Data section. Each major tournament generates a consolidated CSV when it ends.

## Honest limitations

**More spartan UX than Gol.gg**: the web app is functional but visually less polished. For casual exploration, Gol.gg wins on navigational comfort.

**Single-maintainer**: the project depends heavily on Tim Sevenhuysen. That's great for consistency and rigor, but implies bus-factor 1 — if Tim stops maintaining it, there's no backup team. Track record: 10+ years active, positive signal.

**Stronger LCS / LCO coverage**: due to the author's Anglo origin. LCK, LPL, and LEC are covered but may have less editorial depth than Anglo leagues. For Euro-centric analysis, Gol.gg complements better.

**Vocabulary and CSV learning curve**: if you don't handle Python/R/Excel and don't understand advanced metrics, the datasets can seem cryptic. Worth reading the column documentation before using them.

**No mobile app or overlay**: 100% web. No client integration or active assistance. The tool is for analysis, not operational use.

## How to get started

1. Go to `oracleselixir.com`. No registration.

2. If you want to see what kind of analysis Tim publishes, read the latest 2-3 blog posts. It's the best onboarding to the tool's style.

3. For your first dataset: go to Data, pick a recent tournament you know (e.g.: Worlds 2024 or the last Spring of your favorite league), and download the CSV. Open it in Excel/Google Sheets and explore the columns.

4. If you handle Python, the CSVs are ideal for pandas — few rows, well-documented columns, easy to explore.

5. For complete pro analysis of an international tournament, use Gol.gg in parallel — Oracle's Elixir for deep data, Gol.gg for fast navigation.

6. Support the project via Patreon if you use it regularly — it's one of the most valuable resources in the ecosystem and depends on donations.
