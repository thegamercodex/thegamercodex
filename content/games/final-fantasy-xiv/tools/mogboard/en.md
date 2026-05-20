---
title: "Mogboard"
description: "Alternative cross-world market board frontend for FFXIV powered by XIVAPI: prices, sales, and items with a classic UI and lighter experience than Universalis."
quickTake: "Mogboard is Vekien's (XIVAPI) original market tracker. Functional and good-looking, but Universalis has eclipsed it in mindshare. Still worth knowing: if Universalis is down or you prefer its simpler UI, it's here waiting."
---

## What it is

Mogboard (mogboard.com) is a cross-world market board tracker for FFXIV maintained by Vekien as part of the XIVAPI ecosystem. Open source on GitHub (`xivapi/mogboard`), AGPL-3.0 license. Predates Universalis and was the first market tracker for XIV at scale.

Features:

- **Item lookup**: prices per server, sales history, trend charts.
- **Cross-world view**: quick comparison between datacenter servers.
- **Recent global sales**: log of latest large sales on known marketplaces.
- **Multi-language support**: EN, FR, DE, JA.

Data comes from scraping and from Dalamud uploaders (similar to Universalis but a smaller pool). Free, no login for queries.

## What problem it solves

Before Universalis, Mogboard was the only serious way to see cross-server prices. Today, the problem is the same (Square Enix has no official market board API) but Mogboard serves as **alternative or backup**:

- When Universalis goes down (rare but happens), Mogboard keeps working.
- For simple queries, Mogboard has a lighter UI.
- For integrations with XIVAPI (the API ecosystem that also handles Lodestone scraping), Mogboard is part of the stack.

## How it differs from Universalis

- **Universalis**: bigger uploader pool (fresher data), very robust API, modern UI, default Teamcraft integration.
- **Mogboard**: smaller uploader pool, less fresh data on certain servers, more classic UI.

Universalis won by aggressive community uploading. Mogboard remains active and useful, but today it's the secondary option. If you must pick one, Universalis. If you like Mogboard for its UI or know it from before, no reason to switch for casual use.

## What people actually use it for

**Backup when Universalis is down**: Universalis has occasional downtime. Mogboard tends to be up.

**Simple queries without info overload**: Mogboard's UI is cleaner and more minimal. For quick price checks, some prefer it.

**Cross-reference with Universalis**: paranoid sellers check both to detect data discrepancies.

**Integration via XIVAPI**: if your app/script already uses XIVAPI for other endpoints (NPCs, items, lore), Mogboard market integration is a natural extension.

**Servers with low Universalis coverage**: on some small JP servers, Mogboard may have alternative data.

## Who it's NOT for

- **Serious optimization**: if you make gil flipping at volume, go straight to Universalis. The community uploader pool is bigger.
- **Teamcraft users**: Teamcraft queries Universalis by default. Mogboard doesn't integrate. For that workflow it adds nothing.
- **Mobile-first users**: neither is excellent on mobile, but Universalis has slightly more responsive UI.
- **Anyone who wants advanced features (alerts, watchlists)**: most are better maintained on Universalis.

## How it's actually used

1. Go to [mogboard.com](https://mogboard.com).

2. Search an item. Autocomplete suggests.

3. The item page: prices per server, recent sales, charts.

4. Filters: HQ vs NQ, server, time range.

5. For related XIVAPI queries (NPC vending an item, recipes), navigate to XIVAPI.com directly — Mogboard and XIVAPI are siblings of the same ecosystem.

## Honest limitations

**Smaller uploader pool**: data on many items/servers is less fresh than Universalis. For popular servers it's similar; for small servers there's a gap.

**No advanced features**: no alerts, watchlists, advanced multi-server graphical comparisons. Universalis covers that better.

**Less active maintenance**: Vekien maintains XIVAPI + Mogboard as a side project. Updates may take longer vs Universalis (which has a broader team).

**Less recognized brand**: many community guides (Teamcraft, Reddit FFXIV economy) refer to Universalis directly. Mogboard no longer appears in recommended workflows.

**No mobile app**: only responsive web.

**Same TOS gray area as Universalis**: both depend on Dalamud uploaders, same technical issue.

## How to get started

1. Go to [mogboard.com](https://mogboard.com).

2. Search a test item. Compare the presentation with Universalis for the same item.

3. If you like Mogboard's UI more, use it. If not, go to Universalis.

4. For integrations: if you build a bot/script that uses XIVAPI for general lookups, Mogboard's market endpoint fits naturally.

5. Not indispensable. If you just need a market tracker, Universalis covers everything. Mogboard is the option if you want an alternative or if you got into the XIVAPI ecosystem first.

6. If you find bugs, Vekien accepts reports on GitHub — the repo is active but cadence is slower than Universalis.
