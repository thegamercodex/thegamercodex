---
title: RatScanner
description: Open-source overlay that scans items in raid with OCR and shows flea prices and stats without leaving the game.
quickTake: "RatScanner is the killer overlay feature for Tarkov: point at an item, press the hotkey, and the price appears over the game without Alt-Tab. For flippers and high-value looters, it saves critical seconds that save extracts."
---

## What it is

RatScanner is an open-source Windows app maintained at github.com/RatScanner/RatScanner. It runs as an external overlay (without touching game files) and uses OCR to identify items when you aim with the cursor or press a hotkey. Shows current flea price, value per slot, and key stats. GPL-3.0 license, regular releases (the latest 3.9.2 is from December 2025), 611+ stars.

## What problem it solves

In Tarkov you can't know an item's price without Alt-Tabbing to tarkov.dev or tarkov-market. When you're under pressure in raid and discover a container with mixed loot, deciding what to put in the rig requires knowing value per slot fast. RatScanner solves that by showing you the price directly above the item.

## Differentiation

Versus tarkov-market and tarkov.dev (external sites that need Alt-Tab), RatScanner brings the info into the game. Versus other overlays that touch game files (potential ban risk), RatScanner is external and only reads pixels — Battlestate hasn't banned it as of now. It's the only tool of its category with consolidated presence.

## What people use it for

- **Identify loot in-raid** without pausing to Alt-Tab when seconds matter.
- **Decide what goes in the rig** by comparing value per slot of competing items.
- **Verify meta flea prices** while trading or selling from the menu.
- **Quick stash scan** to inventory total value without clicking item by item.

## Who this tool isn't for

If you play solo PvE relaxed and don't care about time-to-loot, you can live with tarkov-market in a tab. If your setup is Mac or Linux (without SPT), RatScanner doesn't run — it's Windows-only. And if you're uncomfortable using tools that read the game's screen (even if they don't touch files), avoid it.

## How it's used in practice

1. Download the latest release from github.com/RatScanner/RatScanner/releases.
2. Extract and run RatScanner.exe (may request admin permissions).
3. Configure scan hotkey (default is usually Ctrl+Click over the item).
4. Aim at the item in raid and press the hotkey — price appears as a tooltip.
5. Adjust price sources (tarkov-market / tarkov.dev) from settings.

## Honest limitations

- **Windows-only**: no native Mac/Linux version.
- **OCR isn't perfect**: items with similar names can get confused; verify in critical cases.
- **Battlestate hasn't endorsed it**: tolerated but technically third-party tool use is against ToS. Low historical risk, but it exists.
- **Performance overhead**: like any overlay, it consumes RAM/CPU. On low-spec machines it can impact FPS.

## How to get started

Visit github.com/RatScanner/RatScanner. Download the latest Windows release. Follow the hotkey setup in the README. The GitHub issues community is active for support.
