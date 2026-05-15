---
title: "Windrose.tools"
description: "Community-driven database that consolidates the seed-aware interactive map, talent planner, item/building/quest lookup, and discovery tracker for Windrose in a single site."
quickTake: "If you're only going to open one Windrose tool in the browser, this is it. Covers 80% of the lookups most players need — map, talents, items, recipes — without jumping between five different sites."
---

## What it is

Windrose.tools is a community site launched a few weeks after Early Access release that quickly positioned itself as the reference database for Windrose. It consolidates several tools at a single URL: interactive map with seed detection, talent planner covering all four branches (Fencer, Crusher, Marksman, Toughguy), full item/building/weapon lookup, and a discovery tracker that helps you not miss unique POIs by biome. Free, no mandatory login.

## What problem it solves

Windrose's world is procedural: each island's shape and POIs are consistent, but their position and orientation change by seed. Without a seed-aware tool, finding copper mines, faction camps, or boss spawns means wandering blindly. Windrose.tools takes your seed (manually or auto-detected from your save file) and projects the actual map of your run, not a generic one — which makes coordinates and routes directly actionable.

## Differentiation

Against the alternatives, Windrose.tools is the "all in one":

- **Windrose Wiki (wiki.org)** focuses on textual lookup and written guides. Windrose.tools adds interactivity: clicks on the map, build sharing via URL.
- **Calculators.games/windrose** specializes in damage/DPS math. Windrose.tools covers talent planning more visually and user-friendly, but lacks deep damage calculation.
- **Windrose Gaming Tools (windrose.gaming.tools)** is the most direct competitor. Choice between the two today is a UI preference — both cover map + planner.

## What people use it for

- **Plan the build before spending levels**: with respec limited, many players design the build in the web planner before spending talent points in-game.
- **Find specific resource nodes**: upload save, see where the nearest copper mines are, plan ship route.
- **Discovery tracking**: mark which POIs you've completed and which are still pending for 100% completion.
- **Lookup item recipes**: direct item lookup, see what materials it needs and where to obtain them.
- **Share builds on Discord or forums**: talent builds export to a URL anyone can open and edit.

## Who this tool is NOT for

If you need deep damage math (exact TTK against a specific enemy, comparing two armor sets with specific perks in stat aggregation), Calculators.games/windrose gives you more numeric control. If you only want to read long textual guides or check tier lists, a traditional wiki (Windrose Wiki or Fextralife) is more appropriate.

## How it's used in practice

1. Open [windrose.tools](https://windrose.tools) in any modern browser (no login required for basic use).
2. For the map: click "Map", then "Change" (top-right corner) → upload your save file (`.sav`) to auto-detect the seed, or enter the seed manually if you know it.
3. For the talents planner: click "Talents", pick one of the four branches, allocate the 12 talent points and 45 stat points, share the build by copying the URL.
4. For item lookup: use the search bar at the top — enter exact or approximate name, filter by type if ambiguous.

## Honest limitations

- **English only**: no localization to Spanish or other languages. UI and data are full EN.
- **Not FOSS**: no public GitHub, so if the site goes down or monetizes aggressively in the future, there's no direct fork.
- **Community update cadence dependency**: each Windrose patch introduces new items/talents. The site updates relatively fast but there are days of lag between patch and data sync.
- **No integrated ad-blocker**: the site has ads, non-intrusive but present.

## How to get started

Open [windrose.tools](https://windrose.tools), navigate to the section you need (Map, Talents, Items, Discoveries). For the map, the most useful thing is to upload your save once so the seed gets linked to your browser. The save lives in `%LOCALAPPDATA%\Windrose\Saved\SaveGames\` on Windows.
