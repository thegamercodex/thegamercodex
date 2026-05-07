---
title: "PoE 2 Scout"
description: "Open-source website tracking real-time prices and market data for Path of Exile 2, with a public API and per-league filtering."
quickTake: "For PoE 2 it's what poe.ninja was for PoE 1: where you go when you need to know what a currency, base, or unique is worth without launching the game or opening the trade site. It works, it's free, and it has an API if you want to build on top."
---

## What it is

PoE 2 Scout is a community-maintained website that tracks Path of Exile 2 prices and market data in real time. It lives at `poe2scout.com`, requires no signup, and is fully open source under MIT.

The architecture is built to be consumed by third parties: Python backend, React frontend, and a documented API any external tool can integrate to surface live prices.

## What problem it solves

PoE 2 is in early access and the economy shifts fast between patches. Knowing what a Divine Orb costs today, which bases are cheap, or how a unique evolved price-wise during the week is information players traditionally got by walking through the official trade item by item.

PoE 2 Scout collapses that into a single screen with searches filterable by league, category, and price range. Time granularity lets you see 24h, 7d, and longer trends — useful for deciding whether to hold an item expecting it to rise or just sell now.

## Differentiation

Versus poe.ninja: poe.ninja has traditionally covered PoE 1 with years of polish. Its PoE 2 support is functional but comparatively lighter. PoE 2 Scout was built from the ground up for PoE 2.

Versus GGG's official trade site: the trade site is the source of truth for active listings but doesn't aggregate or chart historically. For "what is this worth on average," PoE 2 Scout wins; for "buy this specific item now," the official trade site is still the right destination.

## What people use it for

**Quick pricing while crafting or looting**: sold a base, hit a rare, found a unique — open Scout, see price range, decide whether to sell or use.

**Currency conversion**: a table of exchange rates between Divine, Exalted, Chaos and more obscure currency. Useful when someone offers you a trade in non-standard coin.

**Tracking specific items during a league**: bookmark items and watch historical evolution to spot investment or flipping opportunities.

**Integration with your own tools**: the public API allows building overlays, Discord bots, or personal dashboards that consume prices without scraping.

**Scam verification**: if someone offers you "the trade of the century", checking the normal price on Scout saves you from overpaying on social transactions.

## Who it's not for

If you're just starting and don't know what a Divine Orb is, Scout won't teach you — it assumes familiarity with the basic items and currency.

If you play SSF (Solo Self-Found), price info is entertaining but doesn't apply to your game — you won't trade.

If you need active listings to buy a specific item right now, GGG's official trade site is the correct tool. Scout is for ranges and trends, not for finding the concrete listing.

## How to use it in practice

1. Go to `poe2scout.com`. Pick the active league in the header (Standard, Hardcore, current temp league).
2. For currency: open the Currency tab, view the exchange rate table.
3. For items: use the search bar with the unique's name or filter by category (weapons, armour, jewels, maps).
4. Clicking an item takes you to a detail page with price history.
5. For integration: check the API documentation in the GitHub repository.

## Honest limitations

**English only**. No other language localization. The UI is simple so it's not a blocker, but notable.

**Coverage depends on market activity**. Extremely rare items with few listings have less reliable prices (statistical noise).

**Displayed prices are indicative, not a sell guarantee**. Listing your item at "Scout price" doesn't guarantee a sale — real market depends on concurrent listings and active demand.

**Lag versus official trade**. Prices aggregate periodically; during announcements or meta shifts there can be a few minutes of delay versus live.

**Dependency on GGG's API**. When GGG performs maintenance on the official trade or shifts rate limits, Scout can briefly show stale data.

## How to start

No signup required. Go to `poe2scout.com` and start browsing. The first time, it's worth exploring the Currency and Items tabs to get a feel for the layout.

If you build on top via the API, the GitHub repository has endpoint documentation and rate limits — follow the rules to avoid burning the service for everyone else.
