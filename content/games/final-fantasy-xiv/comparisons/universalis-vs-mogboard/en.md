---
title: "Universalis vs Mogboard — which market tracker to use"
description: "Comparison between the two cross-world market board trackers for FFXIV. Universalis dominated the category; Mogboard remains active as an alternative."
---

Both track cross-world market board prices by consuming data crowdsourced from Dalamud plugins. The question isn't which is "better" in the abstract — it's which fits better in your workflow.

## Why Universalis won the category

Universalis launched after Mogboard but grew faster for two concrete reasons:

1. **Bigger uploader pool**. Universalis was aggressive about recruiting contributors via the Dalamud Marketboard Uploader plugin. Mogboard accepts uploads too but its community is smaller. Result: on popular servers, Universalis tends to have data fresh within minutes; Mogboard can have 1-3 day old data on less popular items.

2. **Robust, well-documented public API**. Third-party tools (Teamcraft, various FC scripts/bots) query Universalis by default because its API is stable and documented. Mogboard has an API too but didn't become the standard.

For daily use, Universalis is the choice. That's the practical reality for 95% of users.

## When Mogboard is still worth it

Although secondary, Mogboard has its place:

**As backup**. Universalis occasionally has downtime (maintenance, scaling issues). When that happens and you need to urgently check a price, Mogboard tends to be functional with similar data.

**Preferred classic UI**. Some users prefer Mogboard's more sober UI for spot queries without distractions. It's personal preference — both have the same core data.

**If you're already in the XIVAPI ecosystem**. Mogboard is part of the XIVAPI suite (by Vekien). If you build a bot or script that already queries XIVAPI for items, NPCs, lore, etc., Mogboard integrates naturally in that flow.

## What neither covers well

Both depend on the Dalamud Marketboard Uploader, which creates common issues:

- **Plugin TOS gray area**: technically Square Enix doesn't approve that plugin. In practice no one has been banned, but the risk exists.
- **Small servers with little data**: JP small datacenters and lesser-populated NA/EU servers have sparser data. No tool solves this — it's a community adoption problem.
- **No future prediction**: both are historical. If an item's price will rise tomorrow because a patch is dropping, neither tells you.

## Practical recommendation

- **Casual or serious daily user**: Universalis. No debate.
- **Wanting a backup**: keep Mogboard bookmarked in case Universalis is down.
- **Building your own tooling**: Universalis API is the default choice. Mogboard as secondary.
- **Valuing minimalist UI over fresh data**: Mogboard can win on personal preference.

In practice, both do the same thing. The operational difference is uploader pool and community adoption. Universalis won that race; Mogboard survives as a viable alternative but not the leader.
