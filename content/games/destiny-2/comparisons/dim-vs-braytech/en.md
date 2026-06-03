---
title: "DIM vs Braytech — inventory management or progression tracking"
description: "Two open-source Destiny 2 web apps with opposite focuses: DIM manages your inventory and loadouts, Braytech audits your weekly progression. When to use each."
---

People compare DIM and Braytech because both are free, open-source web apps that connect to your Bungie.net account via OAuth and coexist in many players' flow. But they solve different problems: DIM focuses on **active inventory management** (moving gear, building loadouts, cleaning the vault), while Braytech is oriented to **progression tracking** (vendor checklists, triumphs, collections, lost sector rotation). They aren't direct rivals; the real question isn't which to pick, but which task you use each for.

## What each one does

DIM collapses all three characters and the vault into a single searchable grid. Drag-and-drop between slots, powerful search syntax (`is:weapon is:masterwork perk:rampage`), saved loadouts that equip with one click, and a Loadout Optimizer that combines armor, mods, and target stats. Everything revolves around "build today's loadout and move gear fast".

Braytech consolidates the game's parallel progression systems into one screen:

- Vendor checklists (what Banshee, Spider, Saint-14 have this week and what you already own).
- Triumph progress filterable by seal or title (Conqueror, Flawless, Dredgen).
- Collections for gap analysis by slot.
- Lost sector rotation and weekly trackers (Nightfall, Empire Hunts).

DIM covers none of that, and Braytech doesn't move a single item in your inventory.

## Depth and maintenance

DIM has been active since 2017, maintained by a community of contributors under MIT license. Braytech has been active since 2018, maintained by a single dev (Tom Chapman, justrealmilk) under GPL-3.0. Both depend on the Bungie API, so both can go down on big expansion patch days or lag when the manifest changes.

DIM's learning curve is real: the search syntax is powerful but you need to read the docs to squeeze it. Braytech bets on a minimalist, clean design that some find cold — everything is grid and data, no decoration.

## Languages, platforms, and monetization

- **DIM**: web, Windows, macOS, Linux, Android, and iOS (as a PWA). Available in English and Spanish. Free, open-source, no ads.
- **Braytech**: web only. English only, no localization. Free, open-source, no ads.

If you need the tool in Spanish or on mobile, DIM is the only one of the two that covers that case.

## Which one?

- **Moving gear between characters and vault** → DIM. It's its core function; Braytech doesn't touch inventory.
- **Building and equipping loadouts per activity** → DIM. Dedicated loadout builder and optimizer.
- **Cleaning duplicates and sharding in bulk** → DIM. `is:dupe` searches and tags resolve it in seconds.
- **Seeing what each vendor has for you this week** → Braytech. Vendor checklists with a "don't have yet" filter.
- **Chasing a seal or title** → Braytech. Triumph progress filterable by seal.
- **Auditing collections by slot** → Braytech. Gap analysis for completionists.

In practice they tend to be complementary: DIM for "build today's loadout", Braytech for "see what I'm missing this week". If you play endgame with any regularity, having both open is the norm.
