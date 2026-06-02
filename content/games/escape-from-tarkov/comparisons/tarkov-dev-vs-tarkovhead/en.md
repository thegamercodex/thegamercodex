---
title: Tarkov.dev vs TarkovHead — database vs editorial hub
description: The two most visible Tarkov community webs. Tarkov.dev is the raw data source; TarkovHead is the editorial layer with quests, guides, and news.
---

Tarkov.dev and TarkovHead address the same problem (centralizing Tarkov info) but with opposite philosophies. tarkov.dev is the pure database, open-source, with free API. TarkovHead is the editorial hub with linked guides, TarkovTV recap, and an interactive quest panel. They don't compete — they complement — but the choice of which to open first depends on the job at hand.

## tarkov.dev: data first

tarkov.dev is the closest thing to a structured "source of truth" the community has. Items, traders, recipes, tasks, maps, ammo charts — everything accessible via fast search or the free GraphQL API. It's read-only by design: it doesn't manage your progress, just gives you the data.

That minimalism is its feature. When you're under pressure in a raid and need to know what an item sells for, you open tarkov.dev, type the name, read the price. Three seconds.

## TarkovHead: editorial first

TarkovHead adds an editorial layer over the data. Quests with embedded video guides, written recaps of BSG's official streams (TarkovTV), a quest panel with cross-referenced links to related items and maps. The layout is richer — more to look at, more navigation between components.

For someone starting a wipe and wanting to understand the quest story from scratch, TarkovHead is a better entry point than tarkov.dev. For someone who needs a specific data point fast, it's overkill.

## Update speed

Here tarkov.dev wins clearly. Since it pulls data from the tarkovdata repo via automatic and community-driven PRs, updates are in hours. TarkovHead, having an editorial layer on top, requires manual edits to the written guides — that introduces lag of days to weeks after big patches.

## API and ecosystem

tarkov.dev exposes free open GraphQL. That means TarkovTracker, RatScanner, Tarkov Advisor, and dozens of other tools depend on it. TarkovHead consumes part of that data too, but doesn't expose an equivalent API. If your need includes programming against the data, tarkov.dev is the only option.

## When each one wins

| Use case | Winner | Why |
|---|---|---|
| Look up an item price now | tarkov.dev | Fast search without extra layout |
| Understand quest path with guides | TarkovHead | Cross-link to editorial guides |
| Recap of official TarkovTV stream | TarkovHead | Section dedicated to this |
| Up-to-date numeric data | tarkov.dev | Updates in hours |
| API for your own tool | tarkov.dev | Free GraphQL |
| Polished layout for casual browsing | TarkovHead | Richer UX |

## Recommendation

If you only open one, tarkov.dev — the API and speed make it an inevitable operational reference. If you're starting a wipe and want an editorial layout with cross-links to guides, TarkovHead complements well. No serious player uses only one: tarkov.dev permanently as an open tab, TarkovHead when a patch with a new event drops.
