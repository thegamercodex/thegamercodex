---
title: Path of Building for Last Epoch vs Last Epoch Tools planner — which planner to use
description: Two Last Epoch planners with opposing propositions. PoB-LE prioritizes simulation depth; LE Tools prioritizes visualization and community sharing. Serious theorycrafters use both.
---

LE has two main planners and the question "which do I use" depends entirely on what you're doing. PoB for Last Epoch and Last Epoch Tools' integrated planner solve different problems — they don't compete head-to-head.

## Simulation depth vs visualization

PoB-LE (lastepochplanner.com or desktop) inherits the original Path of Building's calculation engine — the reference planner for ARPG theorycraft. For LE that means real-precision simulation:

- Shock stacks with all their multipliers.
- Ignite/bleed stacking with correct duration math.
- Conditional damage (vs full life, while channeling, on crit).
- Defense layers computed with the correct order of operations.

LE Tools planner approximates these calculations. For 90% of builds the approximation is sufficient — final numbers are close enough. For the 10% where the difference matters (ailment-stacking builds, conditional damage, ward defense optimization), PoB is the only honest option.

## UI and learning curve

LE Tools planner is desktop-first but web-friendly, with clear self-explanatory UI. Drag/drop gear, click skills to open tree, stats visible. For newcomers, open and iterate in 2 minutes.

PoB-LE inherits PoB PoE layout — dense, with panels that assume you know the flow. For players never exposed to PoB, there's a real 30-60 minute curve before feeling productive. For players who already used PoB on PoE, it's instantly familiar.

## Share and collaboration

LE Tools generates a unique URL per build. Paste into Discord/Reddit/forum and another user opens instantly. Ideal for community discussion.

PoB uses "build codes" — long strings (~500-1000 chars) you paste into chat. Works but less friendly. URLs win in discoverability and mobile.

## Offline vs always-online

PoB-LE desktop runs 100% offline. If your internet goes down, you keep iterating builds.

LE Tools is web-only. Without internet, you can't access even your saved builds. For players with spotty connections or who travel, PoB desktop is a real advantage.

## When each wins

| Use case | Winner | Why |
|---|---|---|
| Exact DPS simulation | PoB-LE | Engine inherits PoB PoE precision |
| Compare 2 items with delta | PoB-LE | Swap instantly and see per-stat delta |
| Share via URL in chat | LE Tools | Unique URL vs long build code |
| Fast visual iteration | LE Tools | Friendlier UI, drag/drop |
| Works offline | PoB-LE | Self-contained desktop binary |
| Newcomer to planners | LE Tools | Smooth learning curve |
| Validate creator claims | PoB-LE | Recompute their numbers from build code |

## The combined recommendation

For intermediate/advanced players: **LE Tools to draft + PoB to validate**. You iterate visually in LE Tools because it's fast, then port the build to PoB when you need to validate numbers or decide to spend gold on crafting.

For newcomers: LE Tools is enough. PoB is overkill while you're still learning mechanics. When you reach endgame and start min-maxing specific items, that's when PoB starts paying off.

For pure theorycrafters: PoB first. The UI is worth the learning curve because precision is the only thing that matters in serious theorycraft.
