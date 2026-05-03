---
title: "TradeSkillMaster"
description: "Complete auction house management and goldmaking suite for WoW. Combines an in-game addon, mandatory desktop app (TSM4+), and website. Around since 2010 and the reference tool for players who treat the AH as a business."
quickTake: "If you goldmake seriously, TSM is the only option that scales. The curve is steep and the desktop-app dependency since TSM4 was controversial. But the ROI on initial setup is huge: going from 'sell random items at random prices' to 'operate a business in the AH' is the change TSM enables."
---

## What it is

TradeSkillMaster (tradeskillmaster.com) is the most complete ecosystem for auction house management and goldmaking in WoW. It's been around since 2010 and evolved from a simple addon to a suite with three interdependent components:

1. **TSM Addon (in-game)**: lives in the WoW client, integrates with the auction house UI, and adds bulk operations features (post multiple items at once, automatic cancel/repost, sniper/dealfinder, accounting).

2. **TSM Desktop App (Windows/macOS, mandatory since TSM4)**: runs outside the game, scans prices via Blizzard's API, and uploads data to the in-game addon. Without the app, in-game prices don't update.

3. **Website (tradeskillmaster.com)**: online dashboard, historical accounting, account management, addon and app downloads.

Full setup requires all three. The desktop app is the friction point: in TSM3 it was optional; in TSM4+ it's mandatory. That decision generated significant community pushback — some players abandoned TSM in protest — but the team justified it as a necessary tradeoff to keep data accurate and reduce in-game overhead.

## What problem it solves

For a casual player who sells raid drops on the AH, WoW's auction interface is sufficient. List an item, pick a price, done.

But for serious goldmaking (selling hundreds of items per week, profitable crafting, sniping deals, market manipulation), the default auction interface is prohibitively limited. Without tools, you do:

- Manual re-list every 2 hours because items expire.
- Calculate reasonable price by scanning other listings one by one.
- Manage accounting (cost-to-craft vs. sale price) on a separate spreadsheet.
- Decide what to craft without aggregated market data.

TSM solves each: post groups with dynamic price strings ("market value × 1.1"), automatic cancel/repost, integrated accounting, deal alerts (sniper), and cross-realm comparison if you play multiple servers.

For players who treat the AH as a business (gold ≥1M/week is the typical threshold), TSM is the difference between "I sell things" and "I operate a business."

## What people actually use it for

**Bulk posting of crafted goods**: if you craft 50 items per week to sell, TSM groups by category and posts with dynamic price strings.

**Automatic cancel/repost**: when someone posts cheaper than you, TSM detects and cancels your listings (so they don't sell at sub-optimal price). Then reposts at competitive price. You do nothing manually.

**Sniper / Dealfinder**: TSM constantly scans the AH (via desktop app data) and alerts when a deal appears: items posted well under market value. Enables profitable arbitrage.

**Crafting decisions**: TSM compares material cost vs. sell price for your profession spec. If profit is positive, craft. If negative, don't. Critical for serious crafters.

**Historical accounting**: tracking of gold earned/spent by category, item, period. Useful for optimizing strategy and detecting items that no longer are profitable.

**Cross-realm goldmaking**: if you have characters on multiple servers, TSM can aggregate accounting and compare markets between realms.

**Materials sourcing**: for crafters, TSM can auto-build a shopping list of materials needed for profitable crafts.

## Who it's NOT for

- **Casual players who only occasionally sell raid drops**: setup overhead doesn't pay off given volume. Default Auction House is sufficient.
- **Players sensitive to "mandatory" desktop apps**: TSM Desktop App's dependency since TSM4 is controversial. If it bothers you philosophically, there's no real alternative for TSM.
- **Classic / SoD players who prefer legacy approach**: TSM covers both but some Classic goldmakers prefer simpler tools or manual approach.
- **Players without time to learn the curve**: TSM is advanced. Learning it well requires hours of reading guides + experimentation. Not worth it for casual use.

## How it's actually used

**Initial setup (required pre-use)**:

1. Create an account on [tradeskillmaster.com](https://tradeskillmaster.com).

2. Download **TSM Desktop App** (Windows/macOS).

3. Download **TSM Addon** via CurseForge or Wago.

4. Log in to the desktop app with your account. Configure which realms to scan.

5. The app downloads data and uploads it to the in-game addon.

6. In-game, open AH and you'll see TSM data (market value per item, estimated profit).

**Recurring use**:

1. Before goldmaking session, open TSM Desktop App. Run a manual scan or wait for automatic scan.

2. In-game, open AH with TSM addon active.

3. To post: TSM groups with price strings (e.g., `100% market`). Click "Post" — bulk-post.

4. To cancel/repost: TSM detects undercutting automatically. Click "Cancel" then "Post" if you want to stay competitive.

5. To sniper: leave TSM scanning in background. Deal alerts appear.

6. Post-session: review accounting in-game or web to see day's profit.

## Honest limitations

**Steep curve**: TSM has complex UI, custom concepts (groups, operations, custom price strings), and specific workflow. Learning the basics takes 5-10 hours; advanced uses require weeks of practice. Not plug-and-play.

**Mandatory Desktop App dependency**: post-TSM4, without the app, prices don't update. For players who prefer in-game-only solutions, there's no workaround. That was (and remains) controversial.

**Premium upsell**: free tier is functional but Premium ($5/month or $50/year) adds important features: automatic config backup, more frequent scans, restore history. For serious goldmakers, Premium tends to be worth it.

**Performance overhead**: TSM addon is "heavy" — consumes notable RAM and CPU. If your PC is marginal, it can cause in-game frame drops. The Desktop App also has footprint.

**Lock-in**: once you have everything configured in TSM (groups, operations, accounting), migrating to another tool would be starting from scratch. No universal export.

**Uneven Classic / SoD coverage**: although they cover both, some features are less polished on legacy versions.

**Accounting depends on scan frequency**: if Desktop App doesn't scan regularly, prices go stale. This can lead to decisions on outdated data.

**Documentation curve**: official docs are dense. The community (Reddit, Discord) has more accessible guides, but truly understanding TSM requires intentional time investment.

## How to get started

1. If you casually goldmake and don't need scale, consider whether you really need TSM. To sell 5 items per session, default UI works.

2. If you decide to adopt TSM:
   - Create an account on [tradeskillmaster.com](https://tradeskillmaster.com).
   - Download Desktop App + Addon.
   - Log in, configure realms, let it run a first scan.

3. For learning curve: read official guides on the site, watch YouTube videos about TSM4 setup (Studen Albatroz, JMTC, ProtCowSham are well-known goldmaking creators).

4. Start simple: 1-2 groups with basic operations (post + cancel/repost). When you master that, expand to sniper, accounting tracking, crafting decisions.

5. If after 2-3 sessions you find TSM doesn't justify the overhead (which is reasonable for many cases), it's not failure — it's a signal your workflow doesn't require TSM at this moment. There's time to revisit later.
