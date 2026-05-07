---
title: "POE Overlay"
description: "In-game overlay for Path of Exile and Path of Exile 2 showing estimated prices, market history, and carry services without alt-tabbing."
quickTake: "More than a million users and five years of active maintenance aren't an accident: POE Overlay does what you need at the exact moment you need it — hover an item, hit a hotkey, you're seeing prices. The trade-off is that it's closed source and depends on Overwolf if you want auto-updates."
---

## What it is

POE Overlay is an in-game overlay that sits on top of the Path of Exile client (classic version) and Path of Exile 2 ("POE Overlay II" build) to surface market data, price-check hotkeys, and an integrated browser for services like boss carries, trials, and leveling.

It's been actively maintained for over five years and reports more than a million users. Windows-only. Installation comes in two flavors: via Overwolf (auto-updates) or standalone (no Overwolf, manual updates).

It is not affiliated with Grinding Gear Games — that disclaimer is explicit on the site.

## What problem it solves

Pricing items by hand in PoE 2 is a six-click workflow: copy item, open browser, open official trade, paste mods, adjust filters, scroll listings. POE Overlay collapses that to hover + hotkey: you see an estimated price in seconds without alt-tabbing.

On top of that, it integrates 7-day market history so you can spot whether an item is trending up or down, and lets you browse carry services straight from inside the game — useful for one-off boss kills or Ascendancy trials.

## Differentiation

Versus Awakened PoE Trade and exiled-exchange-2 (open-source alternatives): POE Overlay has more polished features (services browser, 7d history) but is closed source and depends on its own backend. If code transparency and forkability matter to you, the open-source alternatives win. If "it just works and updates itself" matters, POE Overlay wins on convenience.

Versus Sidekick: Sidekick is minimalist, open source, and cross-OS. POE Overlay is more feature-rich but Windows only.

## What people use it for

**Quick price check while mapping**: hover a rare/unique, hotkey, keep playing. Loot decisions in seconds instead of minutes.

**Verification before listing**: drop an item in your priced stash tab and compare with the overlay's suggestion before setting your price. Avoids underpricing.

**Browsing services without leaving the game**: when you need a boss carry or a trial run, launch the integrated browser and contact a seller without breaking the session.

**Currency and volume tracking**: for builds requiring specific currency, seeing listing volume helps decide whether to buy in batches.

**7d history for timing**: for items with fluctuating prices, the 7-day chart helps decide between selling now or waiting.

## Who it's not for

If you're on Linux or macOS, POE Overlay is not for you — Windows only. Open-source alternatives work on Linux via Wine or natively.

If closed-source software on your system bothers you, prefer the auditable alternatives.

If you play SSF, there's no trade to monitor — the overlay doesn't add value.

If you only open the game occasionally, installing Overwolf for a few hours a week is overkill. For casual use, lighter standalone alternatives are a better fit.

## How to use it in practice

1. Download from `poeoverlay.com`. Pick Overwolf (recommended for auto-updates) or standalone.
2. Install via the wizard. Overwolf bundles its runtime; standalone is direct.
3. Launch PoE 2. POE Overlay injects itself on top of the client.
4. Configure hotkeys (default: Ctrl+D for price check, others configurable).
5. In-game, hover an item + hotkey → an overlay panel shows estimated price.
6. For services: a dedicated hotkey opens the integrated browser.

## Honest limitations

**Closed source**. You can't audit the code or fork it. For some users that's a deal-breaker; for others, irrelevant.

**Windows only**. Linux and macOS are out. Open-source alternatives cover those systems.

**Overwolf dependency** (recommended mode). Overwolf is a third-party runtime with its own resource use and telemetry. Installing standalone avoids Overwolf but trades that for losing auto-updates.

**Built on top of GGG's public API**. When GGG changes rate limits or trade structure, there's a lag until the team patches.

**Donation-funded, no formal commitment**. The project runs on donations (~938 reported donors). No service contract — if the team pauses development, there's no contractual fallback.

**"Free" has an indirect asterisk**. It's free to use, but the Overwolf model can surface ads within its own interface (not the PoE overlay itself). If that bothers you, go standalone.

## How to start

Go to `poeoverlay.com`. Pick PoE Overlay II (for PoE 2) or classic PoE Overlay depending on the game. Recommended via Overwolf so you don't miss updates. After installing, launch PoE 2 and configure basic hotkeys.

The learning curve is flat: if you've used Awakened PoE Trade or any similar overlay, the flow is practically identical. First session, you only use the hotkey price check; advanced features (services, market history) reveal themselves over time.
