---
title: "Universalis"
description: "Crowdsourced cross-world market board tracker for FFXIV. See prices, sales history, and stock per server without traveling to each datacenter, thanks to uploads from community plugins."
quickTake: "Universalis is the market tool anyone with a retainer uses. Crowdsourced by XIVLauncher/Dalamud users, it shows you up-to-date cross-server prices without World Visiting. If you craft or flip, you'll open it 10 times a day."
---

## What it is

Universalis (universalis.app) is a crowdsourced market board tracker for FFXIV. Data comes from Dalamud plugins that automatically upload price information when users visit retainers. Open source on GitHub (`Universalis-FFXIV/Universalis`), AGPL-3.0 license.

Features:

- **Item lookup**: see current prices on each server of the datacenter, with sales history.
- **Cross-world comparison**: which server has the lowest price for Allagan Tomestones X.
- **Sales velocity**: how many units sell per day, crucial info for flipping.
- **Min/max/avg per period**: price trends in 24h / 7d / 30d.
- **Public API**: third-party integrations (Teamcraft, etc.) query Universalis for automated data.

Free, no login for queries. Login only if you want to contribute as an uploader or have favorites.

## What problem it solves

Square Enix has no official market board API. To know the price of an item on another server, officially you'd have to World Visit, spending 15 minutes per server + travel. That's prohibitive when comparing 6-8 servers in your datacenter.

Universalis solves this by aggregating community data:

- Players with the Dalamud Marketboard Uploader plugin contribute automatically.
- Universalis aggregates and serves the data in a queryable UI.
- Any item, any server: current price, history, trend — all in seconds.

For serious crafters and flippers, this is transformational. Without Universalis, market optimization is blind.

## How it differs from Mogboard

Universalis and Mogboard are both cross-world market trackers. Differences:

- **Universalis**: fresher data (more users uploading), robust public API, modern UI.
- **Mogboard**: more classic UI, integration with XIVAPI (XIVAPI maintains the site), data in some cases less up-to-date.

Universalis is the dominant. Mogboard remains active and some prefer it out of habit. Most third-party tools (including Teamcraft) integrate with Universalis API by preference.

## What people actually use it for

**Pre-sale lookup**: about to sell 50 stacks of a mat. Universalis tells you current price and velocity (does it sell fast or stuck in queue?).

**Flip-hunting**: looking for arbitrage between DC servers. Universalis shows "Bahamut has 50 at 1000 gil, Diabolos at 1500". Buy low, travel, sell high.

**Crafting profit calc**: about to craft 20 items for market. Calculate cost of mats vs final price via Universalis.

**Pre-purchase verification**: about to buy gear/glamour from a retainer. Check Universalis to not overpay.

**Trend history**: considering crafting consumables for a Savage tier. Universalis shows how prices moved in previous tiers.

## Who it's NOT for

- **Casual without market interest**: if you only play MSQ and don't buy/sell on marketboard, Universalis adds nothing.
- **Small servers without uploaders**: data on JP small servers or some new DC can be thin. Universalis depends on community uploaders.
- **Anyone not using Dalamud / XIVLauncher**: you can read Universalis without contributing, but data stays fresh thanks to uploaders. Consider contributing if you benefit.
- **Data-sharing-averse players**: if you have concerns about a plugin tracking your retainer activity (even anonymized), don't use the uploader.

## How it's actually used

1. Go to [universalis.app](https://universalis.app).

2. Search an item by name. Autocomplete suggests.

3. The item page shows: current prices per server, sales history, 7d/30d charts.

4. Filters: Quality (NQ vs HQ), specific server, etc.

5. For cross-DC flipping: navigate between DC servers, compare prices.

6. To contribute data: install the Dalamud Marketboard Uploader plugin via XIVLauncher. Your data uploads automatically every time you open the market board.

7. Public API: documented at docs.universalis.app if you want to consume from your app/script.

## Honest limitations

**Quality depends on uploaders**: on small servers/datacenters, data can be stale (1-3 days old) when there are few contributors. Better in NA/EU; thinner on JP small servers.

**Doesn't predict the future**: gives you historical trends, not predictions. For a new tier or limited event, prices can be volatile and historical data doesn't help.

**Plugin TOS gray area**: the Dalamud Marketboard Uploader is technically third-party software not approved by Square Enix. In practice no one has been banned for using it, but it exists.

**Market board global data only**: doesn't track player-to-player sales, gifting, or quest rewards. Only retainer market.

**Doesn't filter "buyout" vs "asking price"**: shows lowest asking. Sometimes there are retainers with crazy low prices (typo, undercut). Those can pull averages down.

**Server visit costs gil**: although Universalis shows price on another server, traveling requires World Visit. There's tax involved.

## How to get started

1. Go to [universalis.app](https://universalis.app).

2. Type a known item (e.g., "Tomestone Materia X"). Look at cross-DC prices.

3. Compare with what you expected — if the difference is big, there's a flip margin.

4. To contribute: install Dalamud Marketboard Uploader via XIVLauncher (Settings → Plugins → search uploader). Once active, every time you open the market board, you contribute data.

5. For integrations: if you use Teamcraft, its market data comes from Universalis API. No extra setup required.

6. If you serve a specific audience (FC Discord, flip postings), consider setting up alerts via API/bot. Tutorials at universalis.app docs.

7. The XIVLauncher + Dalamud + Teamcraft + Universalis integration is the "modern stack" of FFXIV optimization. If you're going to optimize economy, they go together.
