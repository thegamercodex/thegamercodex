---
title: Path of Exile Trade
description: Grinding Gear Games' official trading site, where most player-to-player commerce happens in Path of Exile, with advanced search, live search, and bulk currency exchange.
quickTake: This isn't optional. If you play PoE beyond the first week of a league, you'll live on this site. The initial learning curve is real, but mastering search filters and live search is what separates players who progress fast from those farming the same content forever.
---

## What it is

Path of Exile Trade is Grinding Gear Games' official trading site. It's an indexer that scans the contents of every public premium stash tab in the game via the Public Stash Tab API, and lets you search for items, currency, and almost anything tradeable using granular filters for mods, stats, price, and rarity.

It's been around for years and is the central piece of PoE commerce. Most of the third-party trading tools you know (including Awakened PoE Trade and poe.ninja) use this site as a backend or complement it, they don't replace it.

## What problem it solves

Path of Exile doesn't have a traditional in-game auction house. Player-to-player trading has always happened through direct messages, whispers, and meetups in hideouts. Without a centralized indexer, finding the exact item your build needs would be searching for needles in thousands of haystacks.

PoE Trade solves this by indexing the entire public inventory of the game in near-real time. You search for a ring with fire resistance between 30-45%, life between 70-90, and an open prefix; the site shows you every matching item, sorted by price, with a button that copies to clipboard the exact whisper to send the seller in-game.

Since patch 3.27, GGG added **asynchronous trading** via Faustus, an NPC that appears in your hideout (requires converting a premium tab to a "merchant tab", at no cost). This means a growing portion of trades no longer require coordinating schedules with the seller: you buy, receive the item, done.

## What people use it for

Typical use cases:

Searching specific upgrades for your build with precise mod filters. Buying uniques you need to enable build mechanics. Selling rare items that dropped and rolled well. Bulk exchanging currency (1000 chaos for divines, for example). Setting live searches for rare items with very specific criteria, that ping you the moment someone lists a match. Researching which items are undervalued or have limited supply for flipping.

## Differentiation from poe.ninja and Awakened PoE Trade

The three tools touch PoE's economic ecosystem but do different things:

**poe.ninja** is a statistical aggregator. It tells you what things cost on average, what builds are trending, how the economy evolves. It's for analysis and quick price-check, not for buying.

**Awakened PoE Trade** is a desktop overlay that integrates with the game. You hover an item, press a hotkey, and it shows suggested price or launches a search. It uses the PoE Trade API as backend.

**Official PoE Trade** is the marketplace itself. It's where you actually buy and sell. The other two help you make decisions, but the transaction happens here (or via Faustus NPC, which is also wired into this system).

## Honest limitations

**The interface has a curve.** The filter system is powerful but not intuitive. The difference between explicit stats, implicit stats, pseudo-mods, and mod groups confuses new players. Official documentation is sparse; most learn from community guides or trial and error.

**Ghost listings and price-fixing.** This is a chronic PoE problem: players who list items at absurdly low prices to attract messages and then don't respond, trying to manipulate price perception. PoE Trade doesn't solve this; you have to learn to spot patterns and use live search for critical items.

**Synchronous trading still dominant.** Although Faustus introduced asynchrony, much of the trading still requires coordinating with the seller in real time. If you play during off-peak hours, friction increases.

**"Exact" search isn't always exact.** Pseudo-filters (like "total elemental resistance") group individual stats, which sometimes hides items that technically meet what you want. You have to learn when to use pseudo and when to go stat-by-stat.

**Available in Spanish but limited translation.** The interface has Spanish, but mod names, item names, and mechanics remain in English. The community and guides are predominantly English-speaking.

## How it's used in practice

Typical flow of an established player:

1. Identifies what upgrade they need (more life, more resistance, a specific mod for their build).
2. Opens PoE Trade and configures filters: item type, required mods with min/max ranges, budget in chaos or divines.
3. Sorts by ascending price and reviews the first results.
4. For critical items, activates Live Search and leaves the tab open while playing.
5. When a candidate appears, copies the whisper, pastes it in-game, waits for seller response.
6. If the seller is online and responds, goes to their hideout and completes the trade. If the item is sold through Faustus, receives it asynchronously.
7. For bulk currency exchange, uses the "Bulk Item Exchange" tab with simplified interface for standard swaps.

## How to get started

Go to `pathofexile.com/trade`, log in with your Path of Exile account (or create one for free), and select the current league in the top dropdown. Start with something simple: search for a known unique by name, no additional filters. That familiarizes you with the interface.

Then try a rare search with a single mod, for example a ring with "+to maximum life" between 70 and 90. You'll see how stat filters appear and how they combine.

To sell, make sure you have at least one premium stash tab (paid, they're fundamental for endgame), mark it as public with prices, and your items get indexed automatically. No additional action required, the API does everything.