---
title: Explv's Map
description: Explv's Map is an interactive, Leaflet-based OSRS world map available since 2016 at explv.github.io. It shows the full map with coordinates and region IDs, and lets you define areas, paths, and positions.
quickTake: This is the tool when you need exact coordinates, region IDs, or to draw a specific path, things the wiki map doesn't do. For browsing and reading the world, the wiki is still more comfortable; Explv's Map shines at precision work.
---

## What it is

Explv's Map is a fully interactive Old School RuneScape world map, built on Leaflet and available since 2016 at explv.github.io. It lets you explore the full game map with live coordinates and region IDs, search for locations and dungeons by name, and create or define areas, poly-areas, paths, and individual positions.

It was born mainly for the bot-scripting and development community, where defining coordinate areas is part of the daily workflow. But that same precision makes it useful for any player who wants to navigate, locate obscure spots, or plan routes. It's open source and its code lives on GitHub.

## What problem it solves

The OSRS Wiki map is excellent for reading the world, but it isn't built for working with raw coordinates or exporting defined areas. When you need a tile's exact (x, y), an area's region ID, or to trace a route point by point, it falls short.

Explv's Map fills exactly that gap. It makes coordinates and region IDs visible, and lets you build areas and paths interactively on the map, ready to copy into a script or to plan a route with precision.

## Differentiation

The obvious competitor is the OSRS Wiki map. They're complementary, not equivalent.

The wiki map is oriented toward the reading player: it marks POIs, links to articles, integrates wiki search, and is comfortable for "where is this?". Explv's Map is coordinate-oriented: its value is exposing (x, y) and region IDs and giving you tools to define areas, poly-areas, and paths. Where the wiki tells you "this is here", Explv's Map tells you "this is the exact tile and here's how you define the area".

That's why many people use them together: the wiki to understand the world, Explv's Map to work with its geometry.

## What people use it for

- **Getting exact coordinates**: reading any tile's (x, y), useful for scripts, plugins, and guides.
- **Finding region IDs**: identifying a zone's region for debugging or development.
- **Defining areas and poly-areas**: drawing regions on the map and exporting them to code.
- **Tracing paths**: planning point-by-point routes for movement or navigation.
- **Locating obscure spots**: searching dungeons and locations by name when you can't recall where they are.

## Who this tool is NOT for

It's not for someone who just wants a comfortable map to read while playing; the wiki map is friendlier and more integrated with content for that. It's also not the tool if you're after annotated POIs, drops, or contextual info per zone: Explv's Map is geometry and coordinates, not an encyclopedia. Its value rises when you work with map data, not just the map.

## How it's used in practice

1. Open https://explv.github.io in your browser; no installation needed.
2. Navigate the map with the mouse; as you move you'll see live coordinates and the current region ID.
3. Use search to jump to a location or dungeon by name.
4. Enable area or path mode to start defining; click tiles to build the area, poly-area, or route.
5. Copy the generated coordinates or definition to use in your script, plugin, or guide.

## Honest limitations

- **Coordinate-oriented**: if you just want to read the world, the learning curve is less friendly than the wiki map's.
- **No contextual info**: it doesn't carry drops, annotated POIs, or article links like the wiki.
- **English only**: the interface is in English.
- **Map rendering**: it's a community tool; tile updates depend on project maintenance and may lag behind very recent in-game changes.
- **Built for devs**: many features (region IDs, poly-areas) only fully make sense if you work with coordinates.

## How to get started

Go to https://explv.github.io and start moving around the map: just by navigating you'll see coordinates and region IDs. If your goal is to define an area or a path, enable the matching mode and click tiles to build it. For casual navigation, keep it alongside the wiki map and use each for what it does best. The code is on GitHub if you want to review it or self-host it.
