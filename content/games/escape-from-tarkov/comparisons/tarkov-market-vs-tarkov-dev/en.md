---
title: Tarkov Market vs Tarkov.dev — which price source to use
description: "Tarkov.dev has prices. Tarkov Market does too. But both tools optimize for different economic uses: one for quick lookup, the other for serious flipping."
---

If you only care about an item's current value, tarkov.dev gives it to you in two clicks along with every other data point on the item. If you play the flea market as a core mechanic — flipping, sniping deals, configuring alerts when something drops — Tarkov Market is the specialized tool. They partially compete (both show prices) but their sweet spots are completely different.

## Current price vs economic specialization

tarkov.dev shows the sell price at each trader and the flea price on the item page, alongside recipes using it, tasks requiring it, and stats. Perfect for the one-off lookup: open, search, read, close. But it has no visual history, alerts, or deep barter comparisons.

Tarkov Market is economy-first. Its item page shows current price + 7 and 30-day charts + configurable alerts + barter comparison. For someone whose bottom line depends on economic timing, those features are worth their weight.

## Alerts and push notifications

Tarkov Market wins here without discussion. You set "alert when GPU < 350k" and when that threshold crosses you get a push notification in the mobile app. If you flip seriously, that difference between sniping and missing the deal is the wipe's profit.

tarkov.dev has no alerts or push. To replicate the equivalent you'd have to build your own tool on top of the GraphQL API — possible but requires effort.

## Barter trade analysis

Tarkov has barter trades — items exchanged for other items instead of bought with roubles. Sometimes the barter is cheaper than buying the item directly on flea, and sometimes more expensive. Tarkov Market has a dedicated section that automatically calculates which option is more profitable.

tarkov.dev includes barter trades in its data but doesn't specialize in the visual comparison. For someone optimizing every barter, Tarkov Market is the specific tool.

## API for downstream tools

tarkov.dev wins on the free public GraphQL. Tarkov Market exposes an API but more restricted — requires a token and has lower rate limits. If your project requires feeding data to your own tool, tarkov.dev is the option.

## When each one wins

| Use case | Winner | Why |
|---|---|---|
| Current price + item data at once | tarkov.dev | Single integrated page |
| Price alerts with mobile push | Tarkov Market | Unique feature |
| 7-30 day history for timing | Tarkov Market | Visual charts |
| Compare barter vs flea | Tarkov Market | Dedicated section |
| API for your own tool | tarkov.dev | Free GraphQL |

## Recommendation

If your rolling economy is casual, tarkov.dev covers 80% of needs. If you flip, snipe, or play the flea as a core mechanic, Tarkov Market is indispensable — alerts alone justify the switch. For most, have both: tarkov.dev as a permanent tab, Tarkov Market app on mobile for alerts.
