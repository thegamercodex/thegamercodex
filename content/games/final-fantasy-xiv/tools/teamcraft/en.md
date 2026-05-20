---
title: "FFXIV Teamcraft"
description: "All-in-one suite for FFXIV crafters and gatherers: HQ rotation simulator, mats lists, gathering node alarms, inventory sync, market data, and open-source desktop companion app."
quickTake: "If you craft or gather seriously in FFXIV, Teamcraft is the tool. It replaces spreadsheets, calculators, and guides in a single integrated workflow. The desktop app with inventory sync is what separates casual crafters from serious ones."
---

## What it is

FFXIV Teamcraft (ffxivteamcraft.com) is a web + desktop suite for crafters (DoH) and gatherers (DoL) maintained by Supamiu and the community. Open source on GitHub (`ffxiv-teamcraft/ffxiv-teamcraft`), MIT license. Exists since 2018 and updates with every patch.

Main features:

- **Crafting rotation simulator**: simulates your crafting rotation step by step, shows progress/quality/durability, and predicts HQ.
- **Recipe lists**: list items you want to craft, Teamcraft expands recursive mats and calculates totals.
- **Inventory sync**: with the desktop app, see what's in your bags/retainers in real time.
- **Gathering nodes with alarms**: spawn timers, in-game alarms for timed nodes.
- **Market integration**: prices via Universalis to calculate crafting profit.
- **Workshops and FC crafting**: multi-player planning for Free Companies.

Has web (full features), desktop app (with inventory sync — Windows/macOS), and mobile companion.

## What problem it solves

Endgame crafting in FFXIV is complex: precise rotations required for consistent HQ, recursive material trees, market timing for profit, inventory tracking to avoid duplicate farms. Without a tool, all this is manual spreadsheet + memory.

Teamcraft centralizes:

- **Rotation**: simulate before crafting, validate your setup works.
- **Mats list**: add 5 items to craft → Teamcraft tells you "you need X of Y and Z, gather them this way".
- **Inventory sync**: the desktop app reads your inventory live → tells you "you already have 50 Spruce Logs, you're missing 30".
- **Market timing**: is it worth crafting this item now vs in 2 days? Teamcraft compares prices.

This turns hours of planning into minutes.

## How it differs from Garland Tools

- **Garland Tools**: pure database. Efficient lookup, no workflow planning.
- **Teamcraft**: workflow tool. You start with "I want to craft X", Teamcraft takes you from recipe to execution.

For spot queries of "where is this mat?", Garland is faster. For "I'm going to craft the full Disciples of the Hand BiS", Teamcraft is the choice. Many serious users use both.

## What people actually use it for

**Pre-Savage crafting**: 2 weeks before a tier, add the crafted accessories to a list in Teamcraft. It tells you which mats to farm and which rotation to use for consistent HQ.

**Daily crafting rotations**: complex rotations of 30+ steps (with Reuse, Trained Eye, etc.) are programmed in the simulator, saved, and executed in-game with macros.

**Gathering alarms**: rare nodes (legendary, ephemeral) require your presence at a specific ET. Teamcraft warns you with an alarm 5-15 min in advance.

**Free Company supply runs**: coordinate with your FC who gathers what for a materials raid.

**Profit flipping**: check Universalis prices vs cost of mats → Teamcraft tells you whether it's worth crafting for market vs buying outright.

## Who it's NOT for

- **Pure combat players**: no combat here. If you only raid and don't craft, Teamcraft adds nothing.
- **Casual leveling crafters**: if you only level crafters for the trophy and don't optimize, advanced features (rotation sim, inventory sync) are overkill. Garland Tools is enough.
- **Mobile-only users**: web works on mobile but advanced features (rotation sim) are desktop-first.
- **PC without Windows or macOS**: inventory sync requires the desktop app — Linux only via Electron community build.

## How it's actually used

1. Go to [ffxivteamcraft.com](https://ffxivteamcraft.com). Create an account to save lists.

2. **List Maker** → search an item (e.g., "Endwalker BiS Crafter's Tools"), Teamcraft generates the recursive mat list.

3. **Simulator** → pick a recipe, configure stats (Craftsmanship, Control, CP), run the rotation you want to test. The simulator shows expected outcome.

4. For inventory sync: download the desktop app, configure (requires XIVLauncher for legal capture). Your inventory shows live.

5. **Gathering Alarms** → select timed nodes you care about. The app notifies when they spawn.

6. **Market sync**: Teamcraft queries Universalis automatically for prices. Filters by server.

## Honest limitations

**Steep learning curve**: the app has MANY features. For new crafters it's overwhelming. Start with List Maker and Simulator, ignore the rest initially.

**Inventory sync requires technical setup**: the desktop app + integration with XIVLauncher/ACT can be fragile. Works but requires initial patience.

**Performance**: on older machines the app can feel heavy. Web is lighter but loses features.

**Updates depend on Supamiu and contributors**: major changes post-patch can take 1-2 weeks for all features (rotation sim up to date, exact recipe data).

**Market data depends on Universalis**: if Universalis has thin data on your server (small servers), profit calculations are inexact.

**Limited mobile companion**: the mobile app is viewer-only, you don't edit serious lists from a phone.

## How to get started

1. Go to [ffxivteamcraft.com](https://ffxivteamcraft.com). Create an account.

2. **List Maker** → first list: add 1-2 endgame crafted items (e.g., current DoH weapon). Look at the expanded mat tree.

3. **Simulator** → load a Balance-recommended rotation for your DoH job. Adjust stats and run it. Get familiar with the UI.

4. Download the **desktop app** if you want inventory sync. Follow the setup guide (includes config with XIVLauncher).

5. **Gathering Alarms** → select 2-3 timed nodes you care about. Verify the alarm works.

6. When you're comfortable with the UI, explore advanced features: workshops, FC crafting, market flipping.

7. The [official Teamcraft Discord](https://discord.gg/N67vfgD) is active if you need help with setup or to report bugs.
