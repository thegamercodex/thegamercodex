---
title: "Path of Exile 2 Trade"
description: "Grinding Gear Games' official trading website for Path of Exile 2."
quickTake: "The backend that makes the game work as an economy. Every external trading tool (poe.ninja, Exiled Exchange) queries this endpoint. If trading is part of your loop, you'll use it — directly or by proxy."
---

## What it is

Path of Exile 2 Trade (`pathofexile.com/trade2`) is the official site where Grinding Gear Games hosts the game's trading system. It lets you search items posted by other players with filters by mods, base type, level requirements and currency price, then directly contact the seller via in-game whisper.

Unlike PoE 1's trade (which lives at `/trade`), PoE 2 has its own endpoint with similar UI adapted to new mechanics (Spirit, gem combinations, runes). Access requires login with your PoE forum account.

## What problem it solves

Trading in PoE 2 works player-to-player, with no auction house. Without a central system showing listings, it would be impossible to connect buyers and sellers. The official trade site is that index: any item a seller lists through premium stash tabs becomes searchable on the site for everyone.

It's the only canonical endpoint. poe.ninja, Exiled Exchange 2 and any other trading tool consumes data from this site (via authorized polling or scraping while respecting rate limits). Without trade2, the economic ecosystem doesn't exist.

## Differentiation

Compared to Exiled Exchange 2 (overlay for fast queries), the official site wins on precision for complex queries — search for an item with 5 specific mods, custom ranges, exact sockets, and the site allows it. EE2 is faster but covers simpler cases.

Compared to poe.ninja (economy panorama), the official site is purely transactional: it doesn't give you history or trends, it gives you active listings now. Combine all three: poe.ninja to understand the market, official site to make the transaction, EE2 to accelerate the flow during mapping.

## What people use it for

**Search specific gear for your build**: searches with target stats (e.g., rare boots with +30% movement speed + life + three resistances > 30%). The site returns price-sorted listings.

**Bulk currency exchange**: the `/exchange` endpoint lets you swap large quantities of currency (Exalted ↔ Divine, Chaos ↔ Exalted, etc.) in structured form with current ratios.

**List your own items**: the site reflects your premium stash tabs flagged as "public". Any item there is automatically listed at its set price.

**Investigate niche markets**: for specific uniques or crafted items with exotic mod combinations, seeing active listings tells you if there's liquidity or you'll be listing for weeks.

**Verify prices before crafting**: if you're going to invest 50 Exalted in crafting, you want to know what the result is selling for. The site shows real listings, not estimates.

## Who this isn't for

If you play SSF, the trade site is irrelevant — you can't trade. Hard lockout applies.

If you just want "the approximate price" of something and aren't transacting, poe.ninja is faster and shows history. Official trade is for doing the operation, not for observing the market.

If you're new and don't yet understand which mods matter for your build, trade will frustrate you — you'll be able to search but won't know what filters to apply. Better to first follow a guide that tells you which mods matter, then use trade.

## How it's used in practice

1. Go to `pathofexile.com/trade2` and log in with your forum account.
2. Pick league (Standard, current league, SSF if applicable) in the top dropdown.
3. To search: enter the item base (e.g., "Vaal Regalia") and add filters (item level, mods, sockets). The site returns live matches.
4. Click a listing → "Whisper" copies a message to clipboard. Paste it in-game (chat) and send the whisper to the seller.
5. The seller invites you to their hideout, you trade in-game, confirm.
6. For bulk: `/exchange` tab. Pick currency you have / currency you want, minimum ratio, amount. The site lists bulk listings.

## Honest limitations

**Strict search by default**. PoE 2 Trade defaults to a stricter fuzzy mode than PoE 1. If your query returns nothing, prepending a tilde (~) to the name forces fuzzy mode. A tip newcomers don't know.

**Whisper doesn't guarantee a sale**. The seller can ignore you, be afk, or have already sold the item. Without instant auction house, frustrating buyers is free for sellers. Try multiple listings when you need it urgently.

**Aggressive rate limits**. If you open many listings quickly, the site temp-locks you. It's GGG's mechanism to discourage bots — affects legitimate humans occasionally too.

**No seller reputation on the site**. You don't know if the seller is serious or re-sells fakes. In-game protections (in-game verification) reduce the risk but don't eliminate it.

**Functional, not modern UI**. Dense, lots of information, navigation that rewards familiarity. The initial curve is rough.

**Limited in-game shortcut**. You can invoke `/trade` in-game but it opens an external browser — no native overlay. For native overlay, Exiled Exchange 2.

## How to start

No additional registration beyond PoE — use your forum account. The first time you trade, the flow is: find the item on the site, click whisper, paste in-game, wait for invite, confirm trade.

Productivity tip: set your stash tabs as premium (paid) to list. The site expects you to use premium tabs — it's GGG's intentional friction to monetize trade. Without premium tabs, you can't sell (only buy).

To integrate it: open it when you're going to buy specific gear or when ending a session and want to list drops. For ultra-fast queries while mapping, Exiled Exchange 2 is more efficient. The official site is for more planned operations.
