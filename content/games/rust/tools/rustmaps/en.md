---
title: RustMaps
description: Procedural Rust map generator and gallery with monument filters, resource heatmaps, and API for servers.
quickTake: If you admin a server, this isn't optional — it's how you decide which map your community plays each wipe. For players, it's how you scout the server map before logging into a new wipe.
---

## What it is

RustMaps is the standard web tool for Rust map generation and discovery. It has three main uses: generate custom maps with specific seed/size, browse a gallery of already-generated maps, and consume everything via API from a server or plugin. It's free for basic use (generates maps available until the next force wipe) and has a paid tier for custom map generation with 2-month retention.

## What problem it solves

Each server picks the map it boots the wipe with — seed + size determine monuments, terrain, and resource distribution. Without RustMaps, admins generated blind: either they took Facepunch's default map for that seed (which could spawn without Oil Rig or with every monument in one corner), or they used custom procedural maps without knowing what they'd get. RustMaps shows the entire map before serving it, with filters by monument presence, node count, biome distribution, etc.

## Differentiation

It's the only generator with a large public gallery and detailed filters. Alternatives like Rust:IO (live map plugin for running servers) cover the "play on the server" case, but none replicate RustMaps' "generate + filter before commit." For hand-edited custom maps, RustEdit is the complement (not competitor) — RustEdit edits, RustMaps generates procedurals.

## What people use it for

- **Admins picking the wipe map**: generate several candidates, filter by size + monuments present, pick the best.
- **Players scouting their current server**: copy seed + size from server console, paste into RustMaps, see the map before logging in.
- **Plugin integration**: MapVoter and Automated Maps consume the RustMaps API so the server community can vote on the next map.
- **Resource heatmaps**: see where sulfur nodes, animals, and prospect points concentrate — useful for roaming planning.
- **Monument coordinates**: copy coordinates of a specific monument for chat or screenshots.

## Who this isn't for

If you only play vanilla on official Facepunch servers without admin, you'll almost never open RustMaps — official servers rotate maps automatically. If you want a hand-designed custom map (with custom monuments, lore, puzzles), RustMaps doesn't edit; for that, RustEdit.

## How to use it

1. Open rustmaps.com, no registration for gallery viewing.
2. To generate a map: "Generate" → enter seed (any number) + size (3000-6000), wait ~2-5 min.
3. The map appears with monuments listed, biome distribution, toggleable heatmaps.
4. For admin use via API: register account, obtain API key, integrate with plugin of choice (MapVoter, Automated Maps, RustMaps CLI).
5. For custom 2-month retention, subscribe to the paid tier.

## Honest limitations

- **Generation takes time**: 2-5 minutes per map, longer for big sizes (5000+).
- **Free maps expire at the next force wipe**: if you want persistence, paid tier or regenerate.
- **English only**: no localization.
- **API paid tier for heavy use**: free tier limits generations/day for casual use.
- **Doesn't edit maps**: if you want a map with custom monuments, RustEdit is the tool.

## Getting started

For casual use (browse + check the current server map): rustmaps.com with no account. For server admin: register, obtain API key from dashboard, install MapVoter or Automated Maps via uMod/Carbon, configure the plugin with your API key. The RustMaps docs at guides.rustmaps.com have walkthroughs per integration.
