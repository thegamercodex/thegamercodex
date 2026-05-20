---
title: "Garland Tools"
description: "Exhaustive FFXIV database with items, recipes, NPCs, fish, mobs, gathering nodes, and drops — all cross-referenced with granular filters and tree views."
quickTake: "Garland Tools is the FFXIV power-user database. When you need 'how many Spruce Logs for a carpenter 100 recipe + where they're gathered' or 'which fish requires mooching from Y at hour X', you find it here in seconds. Dense UI, but exhaustive."
---

## What it is

Garland Tools (garlandtools.org) is an FFXIV web database maintained by ufx since 2013. It's one of the first surviving community tools and gets updated patch after patch without fail. Open source on GitHub (`ufx/GarlandTools`).

The data covers:

- **Items**: any item in the game with its drops, vendors, recipes, uses.
- **Recipes**: by crafter, with recursive ingredients.
- **NPCs and vendors**: what they sell and at what price.
- **Mobs**: what they drop, where they spawn.
- **Fishing**: nodes, baits, weather requirements, hookset, mooching chains.
- **Gathering**: Miner/Botanist nodes with coords and timing.
- **Achievements**: requirements and rewards.
- **Quests**: brief overview, no detailed walkthroughs.

Supports English, French, German, and Japanese.

## What problem it solves

FFXIV has tens of thousands of items with complex relationships (recipe trees, drop chains, gathering rotations). Without a queryable database, finding the best way to obtain X item is painful.

Garland Tools centralizes that:

- "Where do I get Spruce Logs?" → list of nodes with timing and zone.
- "How do I make a Sharpened Tomahawk?" → full recipe tree with all mats recursively.
- "Which fish are in Western La Noscea?" → list filterable by bait and weather.
- "Which item is the Yellow Scrip exchange in patch X.Y?" → vendor lookup.

For crafters, gatherers, and achievement hunters, it's the daily lookup tool.

## How it differs from Teamcraft

Garland Tools and Teamcraft cover much of the same ground but with different focus:

- **Garland Tools**: pure database. You go, query, find. It doesn't help you plan crafting rotations.
- **Teamcraft**: planner and workflow. Simulate rotations, materials lists, inventory sync.

For quick spot queries, Garland Tools is more direct. For full crafting workflow (I'm crafting X items, optimizing rotation, calculating profit), Teamcraft. Many use both.

## What people actually use it for

**Item search**: "what does Forgotten Knight NPC drop?" Direct lookup.

**Recursive recipe trees**: planning to craft pre-Savage gear. Garland expands the recipe to all root mats (mineral X, fish Y, etc.) and tells you how many you need.

**Fishing logs**: hunting a specific fish for an achievement. Garland shows the spot, bait, weather, and time-of-day required.

**Gathering nodes**: missing a specific mat. Garland shows nodes with coords + timing.

**Cross-reference**: want to know "this item is obtained from which sources?". Garland lists vendor, drop, gathering, recipe, all in one view.

## Who it's NOT for

- **Pure combat focus**: not relevant for raid analysis or BiS. That's FFLogs/Etro.
- **UI-sensitive users**: Garland has a dense UI, zero ornament, lots of info per screen. If you prefer clean modern UIs, Teamcraft or Gamerescape look better.
- **Glamour exclusive**: if you only care about glamour, Eorzea Collection has a better visual catalog.
- **Mobile users**: UI is desktop-first. Mobile works but is tedious.

## How it's actually used

1. Go to [garlandtools.org](https://garlandtools.org).

2. The top search bar: type the item, NPC, mob, fish, or achievement you want. Autocomplete suggests.

3. Each entry has tabs: **Overview**, **Source** (how to obtain), **Used in** (recipes that use it), **Notes**.

4. For recipe trees: click a crafted item → **Recipe** tab. Garland recursively expands all mats.

5. For fish: filter by zone, bait, weather, time-of-day. Each fish has its catch chain record.

6. For gathering: filter by job (MIN/BTN), zone, item. Shows coordinates and timing.

## Honest limitations

**Dated UI**: looks like 2013. Functional but not pretty. Filters and views require getting used to.

**Doesn't simulate crafting rotations**: Garland tells you which materials you need, not which crafting rotation to use to make the HQ. That's Teamcraft.

**No inventory sync**: you can't connect your account and see "what am I missing for this recipe". Manual only. Teamcraft does have this.

**Updates depend on a single maintainer**: ufx maintains the site solo. If they're late updating post-patch, everyone waits. Cadence has historically been good, but the bus factor is real.

**Poor mobile experience**: though the site loads on mobile, the amount of info per screen makes it hard to read.

**Primarily English**: although it supports 4 languages, there's content (especially community notes) only in English.

## How to get started

1. Go to [garlandtools.org](https://garlandtools.org).

2. Search for something familiar (e.g., your job's starter weapon). Explore the tabs (Overview, Source, Used in).

3. Try a typical gathering query: "Allagan Tomestone of X" → see where it's exchanged.

4. For crafting: search a crafted endgame item (e.g., your job's weapon in patch X.0). Look at the recipe tree and recursive mats.

5. For fish: filter by zone + weather → see all fish gettable in that combination.

6. Compare with Teamcraft for similar queries — Teamcraft shows the same with planning workflow. Which to prefer depends on your use case.

7. If you find outdated data or a bug, you can report to ufx's GitHub — the maintainer responds, though it may take a while.
