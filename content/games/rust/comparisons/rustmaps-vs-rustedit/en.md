---
title: RustMaps vs RustEdit — procedural generator vs custom editor
description: RustMaps generates procedural maps for servers. RustEdit edits maps by hand with custom monuments. They don't compete — they cover opposite scopes.
---

RustMaps and RustEdit are the two mainstream tools in Rust's map ecosystem, but they do different things. RustMaps generates procedural maps and exposes them via gallery + API. RustEdit edits .map files by hand to create or modify custom maps. The question isn't "which is better" but "which covers your case."

## How they feel

**RustMaps** is a web app: enter, pick seed + size, wait 2-5 min, receive a procedural map with monuments, heatmaps, and stats. For an admin who wants a balanced map without designing anything, it flows perfectly.

**RustEdit** is a standalone app (Windows-only) closer to a Source Engine or Bethesda map editor. Terrain brushes, biome paint, drag-and-drop prefabs, custom IO via Oxide extension. For someone who wants granular control, RustEdit is the entry.

## What only one covers

**Only RustMaps**:
- Automatic procedural generation with seed/size.
- Public gallery of already-generated maps.
- API for plugin integration (MapVoter, Automated Maps).
- Heatmaps for animals, nodes, monuments.

**Only RustEdit**:
- Hand terrain editing (height brushes, splat painting).
- Prefab placement (stock or custom monuments).
- Cargo Ship and Bradley APC path modification.
- Custom IO via Oxide extension: custom puzzles, vending machines, loot tables.

## When each wins

| Use case | Winner |
|---|---|
| Map for vanilla weekly wipe | RustMaps |
| Server with custom monuments and lore | RustEdit |
| Scout current server map | RustMaps |
| Sell custom map on Codefling | RustEdit |
| Map voting integration | RustMaps |

## Combined recommendation

If you admin a vanilla/lightly modded server: RustMaps covers everything. ~5-min learning curve to understand generation + filters.

If you admin a roleplay server, build server, or want differentiation from other vanilla servers: RustEdit is the tool. 20-30-hour curve to make your first decent map, but the result is worth it for servers aimed at a permanent community.

Important: the two complement each other. Common workflow — generate a procedural base with RustMaps, export the .map, open it in RustEdit, add custom monuments or modify specific areas. Best of both.
