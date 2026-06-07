---
title: OSRS Wiki Real-time Prices
description: The OSRS Wiki's real-time Grand Exchange prices, maintained by Weirdgloop. Data is crowd-sourced from players running RuneLite, giving near-live buy and sell prices with volumes.
quickTake: It's the canonical OSRS price feed, free and open, that nearly every other tool feeds on. It's not a flipping suite, it's the source of truth for what each thing is worth.
---

## What it is

OSRS Wiki Real-time Prices is the real-time Grand Exchange pricing system maintained by the OSRS Wiki, operated by Weirdgloop. Prices are crowd-sourced: players running RuneLite submit their trade data, which gives near-live buy and sell prices along with traded volumes. It exposes a free, public API with `/latest`, `/5m`, `/1h`, and `/timeseries` endpoints, plus browsing pages and simple per-item graphs.

It's not a flipping suite. It's the authoritative price data source — the same one that powers many other tools, including GE Tracker and RuneLite's own price overlays.

## What problem it solves

Any economic decision in OSRS needs a reliable starting figure: what an item is worth right now and how much is being traded. This service solves that by delivering a real-time price feed, free and without strict rate limits, that you can query or build on. It's the foundation: flipping suites don't invent their prices, they pull them from data like this.

## Differentiation

Of the three economy tools we list, this is the base. **OSRS Wiki Real-time Prices** is the raw, authoritative, open feed: it tells you what each item is worth but doesn't recommend what to flip. **OSRS Exchange** takes data of this kind and adds a free, action-oriented flip finder. **GE Tracker** builds a full suite on top — margins, alerts, app — but hides the good parts behind a subscription. If you want pure, reliable data with no one interpreting it for you, this is the place. The other two are convenience layers over the same kind of feed.

## What people use it for

- **Checking the real price** of an item and its volume, straight from the source.
- **Building their own tools** using the free, open API.
- **Verifying prices** shown by other tools, to catch stale data.
- **Looking at simple graphs** of an item's price over time.

## Who this tool is NOT for

It's not for someone who wants a tool to directly tell them what to flip with calculated margins and alerts — OSRS Exchange or GE Tracker are for that. It's also not for someone after a polished merchanting interface with dashboards and profit logging. It's deliberately simple: data and little else. And it doesn't apply to pure iron man players, who don't use the Grand Exchange.

## How it's used in practice

1. Go to prices.runescape.wiki and search for the item you care about.
2. Look at its current buy (high) and sell (low) price, the timestamp, and the volume.
3. Check the graph to see the recent trend.
4. If you develop, query the API's `/latest`, `/5m`, or `/1h` endpoints to pull the data into your own tool.
5. Cross-check the figure with another source if the item is low-volume and the price looks doubtful.

## Honest limitations

- **It's not a flipping suite.** It doesn't calculate margins with tax, give alerts, or recommend flips. It just delivers data.
- **Prices may not be 100% accurate.** Being crowd-sourced from RuneLite, low-volume items can show stale figures.
- **It's not official from Jagex.** It's maintained by Weirdgloop, the organization behind the Wiki, not Jagex.
- **It's a community project.** It can have occasional downtime, and the maintainers warn prices may not be perfect.

## How to get started

Go to [prices.runescape.wiki](https://prices.runescape.wiki) and search any item to see its live price and graph. If you want to build something on top, the API documentation is linked from the site and the endpoints are free. If what you want is a tool that recommends flips, look at OSRS Exchange (free) or GE Tracker (freemium) instead.
