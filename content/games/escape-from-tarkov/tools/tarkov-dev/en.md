---
title: Tarkov.dev
description: Open-source community database for Escape from Tarkov with items, traders, flea market, maps, hideout, and a free public API.
quickTake: If you only open one site while playing Tarkov, make it tarkov.dev. It's the source most other tools — including TarkovTracker and Tarkov Advisor — pull data from, and the only one that covers the whole ecosystem without ads or paywalls.
---

## What it is

Tarkov.dev is an open-source web app maintained by The Hideout collective that centralizes every piece of jugable data in Escape from Tarkov: full item catalog with stats, hideout recipes, per-trader tasks, interactive maps with spawn and extract markers, ammo chart, and real-time flea market prices. The project lives on GitHub under GPL-3.0 and exposes a free public GraphQL API that powers most of the other community tools.

## What problem it solves

Tarkov hides almost all of its jugable information behind cryptic menus or simply omits it. Knowing how much an item sells for to the optimal trader, what materials a hideout module needs, or where a key spawns on Customs requires either extreme memorization or leaving the game to check wikis. Tarkov.dev concentrates that information in a single site with fast search and deep links between related data.

## Differentiation

Compared to the Fandom wiki (slow, ad-heavy, outdated data) and the wiki.gg migration (better but lore-centric), tarkov.dev focuses on jugable data updatable via API. When a patch drops, flea prices refresh within hours — wikis take weeks. And unlike TarkovTracker or Tarkov Advisor (specialized in quest tracking), tarkov.dev is read-only: it doesn't manage your progress, just gives you the raw data so you can decide.

## What people use it for

- **Looking up the optimal sell price** for a freshly looted item to decide whether to dump it at the trader, flea it, or keep it for a barter.
- **Checking task requirements** before starting a quest, so you don't get to the end and realize you're missing a wrench FIR.
- **Planning hideout upgrades** with the exact materials list and total rouble cost.
- **Consulting the ammo chart** to compare penetration against armor class before picking ammo for a mid-range raid.
- **Browsing maps with filters** for loot, extracts, keys, and spawn points to prep a run without hours of memorization.

## Who this tool isn't for

If you need active tracking of your task and hideout progress (what's left, what's done), tarkov.dev doesn't manage state — use TarkovTracker or Tarkov Advisor for that. And if you want more opinionated interfaces with tier lists, curated builds, or editorial guides, KappaGuide and TarkovHead are more opinionated alternatives.

## How it's used in practice

1. Open tarkov.dev in a dedicated tab while playing.
2. Use the global search (top bar) to find any item, task, trader, or module.
3. The item page shows current sell value at each trader, flea value, recipes using it, and tasks requiring it.
4. The Maps section has interactive maps with filters — toggle the layer you need (keys, extracts, loot).
5. The GraphQL API at api.tarkov.dev is free and open if you want to build your own tool on top.

## Honest limitations

- **English only**: no official localization. Item names appear exactly as they are in-game.
- **No personal tracking**: the site is read-only. Quest or hideout progress is managed in other tools.
- **Maps less polished than Map Genie**: they have the essentials but the filter and marker UX is less refined than the premium competitor.
- **Data depends on community**: when a patch changes a lot, there's a lag of hours to days as the community catches up.

## How to get started

Open tarkov.dev in your browser — no login or install required. To contribute data or report bugs, the public repo at github.com/the-hideout/tarkov-dev accepts PRs and has an active Discord for roadmap discussion.
