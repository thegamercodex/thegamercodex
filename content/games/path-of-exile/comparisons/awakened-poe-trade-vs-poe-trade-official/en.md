---
title: Awakened PoE Trade vs official site — which to use for Path of Exile trading
description: Deep comparison between the most popular trading overlay and GGG's official site. Speed, filters, live search, and real limitations so you know which to use and when.
---

Anyone who trades in Path of Exile eventually faces the same choice: do I use an overlay like Awakened PoE Trade (APT) or stay on the official site? Both serve the same high-level purpose — find prices, buy and sell items — but the workflow, strengths, and blind spots are different. This comparison covers the real scenarios where one beats the other, and where the sensible move is to use both.

## Speed and workflow

APT's strongest argument is **speed without losing focus**. Hover an item in your inventory or on the ground, press `Ctrl+D` (or your configured hotkey), and a small window pops up with estimated prices, applicable filters, and a direct button to the official search. No alt-tab, no pasting text, no screen switching. For a mapper finishing a map with 30 unidentified items, that one second per item adds up fast.

The official site, by contrast, assumes you'll leave the game (or open a separate window) and switch to a browser. The flow is: copy the item (`Ctrl+C`), paste it into the site, wait for the stats to parse, and then you have your search. Each price check takes five to ten seconds, several times longer than APT.

Where APT loses speed is when you need to **iterate on filters**: add an extra mod, tweak a range, refine the query. The overlay has a compact UI that covers the common case but limits the depth of adjustments. The official site, with its full web layout, lets you manipulate filters without space constraints.

## Filter depth and advanced search

Here the web wins clearly. The official site exposes:

- **Stat group** search with `Sum`, `If`, `Count` operators to combine mods in non-trivial ways.
- Exact numeric ranges per individual mod, including pseudo mods (implicit + explicit sums).
- Filters by socket type, jewel tier, requirements, levels, quality, corrupted, mirrored, identified, fractured, synthesized, and so on.
- Filters by specific league, account, online-only sellers, listed within X time.

APT covers the filters that matter for 80% of price checks: item name, main mods, rarity. But when you're hunting something specific — a fractured ring with a particular mod and an exact life range — the overlay falls short and ends up bouncing you to the official site anyway.

For builders comparing multiple upgrade options or crafters evaluating bases, the web is the primary tool. APT is the complement for day-to-day farming.

## Initial setup and security

APT requires installation with elevated permissions on Windows: the overlay needs to capture global input (hotkeys while the game is focused) and read the clipboard. The binaries are signed and the source is on GitHub (it's open source), but it still involves trusting a third-party binary with system-level hooks. For many users that's acceptable because the community audits it; for a conservative minority careful with their PC (accounts with real currency value, for example) it can be a dealbreaker.

The official site runs in a browser. Zero install, zero special permissions, zero additional attack surface. It's the safest path by default and also the only viable option when trading from a machine that isn't yours (LAN party, work PC on break, borrowed laptop).

## Live search and trade alerts

For flippers, builders putting together a specific setup, or anyone who wants to know when an item matching their filters appears, the **official site's native live search** is the decisive feature. Configure your search, hit "live", and the site fires browser notifications when a new matching listing appears. It runs in the background with the tab open, and combined with system sound it lets you react in seconds.

APT doesn't replicate this at the native level. Third-party tools layered on top of the trade API (PoE Trade Macro, scripts, etc.) do provide live search with whisper hotkeys, but you're already in the overlay ecosystem and it's worth weighing whether that complexity beats simply leaving a tab with live search open.

## Limitations and costs

**APT limitations**:
- Only works with the game active and focused.
- Each PoE client update can temporarily break item parsing until the community ships a patch.
- New league mechanics often take days to gain full mod support.
- Macros and overlays are allowed by GGG but technically the user's responsibility; future policy changes are possible.

**Official site limitations**:
- Rate limits on searches: abuse live searches or automated queries and you can lose access for a while.
- The UI loads slowly when listing counts are huge (early league, very cheap items).
- Prices reflect what people ask, not what items are worth: it takes experience to filter out stale listings or trolling.

Both are free. APT has no paid tier, no ads, no monetization. The official site is a GGG service supported by the game itself.

## At a glance

| Scenario | Best pick |
|---|---|
| Loot price-checking while mapping | APT |
| Build research and upgrade comparison | Official site |
| Live search for flips | Official site |
| Trading from a machine you can't install on | Official site |
| Identifying 50 items after a map | APT |
| Bulk currency exchange | Official site |

The practical answer for most active players is **use both**: APT for the fast play-and-check loop, official site when it gets serious (live search, precise queries, builds). They don't cancel each other out — they complement.

## Final verdict

If you're picking only one, **APT** for active SC trade league players and **official site** for those who value zero install or trade less frequently but more strategically. The real question is when you stop using just one and add the second. For most players spending more than 10 hours a week in PoE, that moment comes quickly and the combined setup becomes standard.

If you're just starting and want a single entry point, start with the **official site** — you learn how the trade system works from the source, without abstractions — and add APT once alt-tabbing starts costing you real time.
