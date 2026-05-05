---
title: "Exiled Exchange 2"
description: "Price-check overlay for Path of Exile 2 that reads copied items and queries the official trade site without alt-tabbing."
quickTake: "If you trade more than occasionally, Exiled Exchange 2 is the difference between selling items at their real price and leaving value on the table because you don't have time to manually search each one."
---

## What it is

Exiled Exchange 2 is an overlay application for Path of Exile 2 developed by Kvan7, based on the Awakened PoE Trade project (which only covered PoE 1). It runs alongside the game on Windows or Linux, listens for hotkeys (typically Ctrl+D), and on copying an item returns active listings, median price and market statistics from GGG's official trade site.

It's open source under MIT, with active GitHub releases and an open issues community. Zero cost, zero registration, zero dependency on third-party servers beyond GGG's own trade.

## What problem it solves

PoE 2 has no auction house mechanic or in-game vendor. Every trade is manual: find the item, copy text, open browser, search the official trade, adjust filters, read prices, decide. For one item that's 30 seconds. For 50 items from a map run that's as long as the map itself, and the friction kills motivation.

Exiled Exchange 2 collapses that flow to a hotkey. You hover the item, press Ctrl+D, a panel pops up with listings already filtered by relevant mods. You decide if it's worth listing or dropping. The time between "saw the item" and "have the price" drops to 2-3 seconds.

## Differentiation

Compared to poe.ninja (which is panoramic — what's happening in the economy generally), Exiled Exchange 2 is transactional — give me the price of this specific item right now. They're complements, not competitors: you use EE2 while farming, poe.ninja in planning sessions.

Compared to using the official trade site directly, EE2 is the friction-free version: no browser open, no manual copying, no losing focus on the game. The trade-off is it covers fewer advanced features (complex stat-by-stat queries are still more comfortable on the site).

## What people use it for

**Decide which items are worth listing**: when you finish a map and have 30 rares in your inventory, EE2 tells you which have a real market. The ones with low prices you drop; the ones with decent prices you list.

**Price-check before buying**: when you're considering buying an item, hover + Ctrl+D tells you the real price range. You avoid overpay when the seller listed at an inflated price.

**Bulk currency exchange**: EE2's bulk panel shows current exchange ratios pulled directly from the official trade. Useful for flipping currency or converting large amounts without setting up trade-by-trade manually.

**Validate endgame drops**: when a unique or rare with weird stats drops, the price-check tells you if it's 5 Exalted or 5 Divine. That difference decides whether you keep mapping or pause to trade.

**Investigate value of specific uniques**: any item base + mod combination, EE2 searches against active listings. No listings, you know it's niche; 200 listings, you know it's common.

## Who this isn't for

If you play SSF, EE2 doesn't help — you can't trade. For HC SSF the tool is decorative.

If you're new to trading and don't understand how mods work on rare items, EE2 can give you false confidence. Suggested prices assume you know which mods matter; if you filter wrong, the numbers will be off. Learn the mod system first, then use EE2 to accelerate.

## How it's used in practice

1. Download EE2 from the official site (`kvan7.github.io/Exiled-Exchange-2/`) or GitHub Releases. Extract and run the .exe (Windows) or Linux executable. Starts as an overlay.
2. Configure `windowTitle` to "Path of Exile 2" in settings (important for the overlay to hook the right client).
3. In PoE 2, hover any item → Ctrl+D (or the hotkey you configured). EE2's panel opens with active listings for the item filtered by relevant mods.
4. For bulk exchange: Alt+Shift+D (configurable) opens the bulk panel with current currency ratios.
5. Typical workflow: while mapping, hover items as they drop, Ctrl+D the doubtful ones, drop the trash. In town, bulk-exchange to convert surplus currency.

## Honest limitations

**English only and Windows/Linux only**. There's no macOS version and no Spanish localization. For Mac users it's a blocker.

**The game client must be in English**. EE2's item parser reads text, so if your PoE 2 is in another language it won't recognize mods correctly.

**Can break temporarily with major patches**. When GGG changes item formats or adds new keywords, EE2 sometimes takes days to update. The community reports quickly on GitHub Issues, but on patch day there may be a window where it doesn't work perfectly.

**No officially signed version**: Windows will flag it as unknown app. You open it anyway accepting SmartScreen, but it can scare a novice user. It's legitimate (open source, verifiable code), just unsigned due to cost.

**Antivirus sometimes flags it**. Because it reads keyboard events and communicates with the trade site, some AVs mark it as suspicious. Known false positive — add manual exception.

## How to start

Download the executable from the GitHub Releases page. Unzip in any folder (no install needed). Run it while PoE 2 is open. Configure windowTitle if you play in another language or custom client. First time, test a known item (e.g., a common unique like the PoE 2 equivalent of Headhunter) to validate the price-check responds.

Once it works, the learning curve is minimal: hover + hotkey. Everything else (bulk, advanced filters) you discover as you need it.
