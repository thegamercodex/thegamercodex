---
title: Totov Builder
description: Open-source weapon and loadout builder with costs calculated per trader level, mod comparison, and preset export.
quickTake: Totov Builder is the most complete tool for building weapons with a budget margin. Its per-trader-level filters make visible which mods are within your real wipe reach, not just the endgame meta that assumes Edge of Darkness.
---

## What it is

Totov Builder is an open-source web app for building complete Escape from Tarkov loadouts: weapons with all mods, body armor, helmets, rigs, headsets, backpacks. For each component it calculates total rouble cost considering the player's current trader level. JSON preset export for sharing. Public repo under GPL-3.0.

## What problem it solves

Tarkov's meta assumes you have Edge of Darkness with trader level 4 — but most don't. Knowing which mods are gated by trader level or require keybind tasks is invisible in the game itself. Totov Builder filters available mods by your real trader levels, giving you builds feasible within your budget.

## Differentiation

Versus EFT Ammo Builder (focused on ammo plus simple builder) and the gun builders embedded in tarkov.dev (read-only, no per-trader filters), Totov specializes in weapon + complete loadout with awareness of trader progression. Its unique feature is the "what's available to me now" filter that respects the real wipe state.

## What people use it for

- **Build feasible weapon builds** with filters for your current Prapor, Skier, Peacekeeper level, etc.
- **Calculate total loadout cost** before heading into raid so you don't blow the budget.
- **Compare mod options** side by side to decide between two compensators or sights by cost and stats.
- **Share presets** with the team via JSON export to coordinate loadouts.
- **Plan endgame builds** for mature wipes when all traders are maxed.

## Who this tool isn't for

If you only want to see the absolute meta with no restrictions, YouTube videos from creators like NoiceGuy or Veritas give that directly. If your interest is ammo over mods, EFT Ammo Builder or eft.monster are more focused on that. And if you want the site to recommend popular builds directly without assembling them, KappaGuide has curated presets.

## How it's used in practice

1. Visit totovbuilder.com.
2. Select a base weapon and set your current trader level for each trader in Settings.
3. Add mods one by one; the ones gated by trader level appear crossed out with the requirement.
4. Total cost updates in real time at the bottom of the builder.
5. To share, use "Export" to generate JSON with the full build.

## Honest limitations

- **Initial curve**: the number of compatible mods can be overwhelming. Filter by trader level from the start.
- **English only**: no localization.
- **Community-driven data**: depends on manual updates after big patches. Verify in the game to confirm.
- **No editorial guides**: it gives you the data to build, but doesn't tell you which build is meta — that you decide by consulting creators or KappaGuide.

## How to get started

Visit totovbuilder.com — no registration required. Configure Settings with your trader levels so filters are accurate. The public repo on GitHub at TotovBuilder accepts contributions and bug reports.
