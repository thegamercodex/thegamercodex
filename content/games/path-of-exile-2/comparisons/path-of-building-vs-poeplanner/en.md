---
title: Path of Building vs PoEPlanner — which planner to use in PoE 2
description: Comparison between PoE 2's two most-used planners. Math depth, atlas planning, sharing, support maturity, and the scenarios where each one wins.
---

PoE 2 is still consolidating its tool ecosystem, but the build planning space already has two clear options: **Path of Building Community for PoE 2** (PoB 2), a community-driven desktop planner focused on exact damage calculation, and **PoEPlanner**, a web app with dedicated PoE 2 support that prioritizes accessibility and sharing. They cover partially different needs, and understanding when to open each one is worth the 5-minute read.

## Calculation depth and simulation

PoB 2 inherits the original project's philosophy: model the game's damage engine with the highest possible fidelity. That means simulating uncut skill gems with their swappable support gems, calculating stat interactions over individual gear, accounting for auras, charges, ailments, conversion chains, and every mechanic the engine implements. When a PoE 2 build claims "X million DPS against a T4 boss", the number almost always comes from PoB 2.

PoEPlanner doesn't aim for this depth. Its passive tree is functional and useful for visual mockup, but it doesn't calculate damage at the level the community expects for build optimization. If you're shaving passive points or weighing two competing clusters for a 5% damage gain, PoB 2 is the only serious option.

There's an important caveat: **PoB 2 is still maturing**. The community fork is actively maintained but some PoE 2 mechanics are modeled with less precision than others, especially those introduced in recent patches. In the first few big patches the community usually waits a day or two for PoB 2 to incorporate the changes. This will improve over time as the project matures.

## Atlas tree planning in PoE 2

PoE 2's atlas tree has a simpler structure than comparable ARPGs, with few specialized nodes at launch, and is still evolving per GGG's decisions. **PoEPlanner** is the dominant atlas planning tool for PoE 2: clear UI, visible connections at a glance, and pre-built strategies as the community discovers them.

PoB 2 supports atlas but it's clearly not the focus. When the community shares a PoE 2 atlas strategy it does so with a PoEPlanner link, not a PoB export.

If you've reached endgame and are polishing what to farm, opening PoEPlanner is the short path.

## Sharing and collaboration

PoEPlanner wins this axis comfortably. Build or atlas ready, click share, public URL anyone opens in their browser. It's the default tool when you see builds in casual Discord or short Reddit threads.

PoB 2 works through a code export system (typically pasted into pastebin) the recipient imports into their install. Functional but with extra friction: they need PoB 2 installed, knowledge of how to import, and a machine where they can run the client. For discussion between serious players the friction is accepted; for quick mockups PoEPlanner wins every time.

## Importing your real character

PoB 2 has the feature PoEPlanner doesn't replicate: **direct import from your PoE 2 account**. You give it your account name + character, PoB 2 pulls your equipment, gems, jewels, and passives. In 30 seconds you have your real character loaded to start simulating changes against what you actually have equipped.

This is central to PoE 2's optimization loop: see an upgrade on the official trade site, copy the item code into PoB 2, swap it in your setup, and see the DPS delta before spending the currency. PoEPlanner doesn't support this flow; your character stays as a mockup.

## Learning curve and installation

PoB 2 requires installation. On Windows it's a direct installer; on Mac and Linux the community fork works but requires more setup. The UI is dense — panels, configs, simulation-specific tabs — and assumes the user is willing to learn the damage engine in detail. The initial learning curve is real.

PoEPlanner just opens a browser. Cleaner UI, fewer exposed options. It's the natural tool for someone starting with PoE 2 without prior ARPG planner background.

## Project maturity

Worth keeping in mind that **the PoE 2 tool ecosystem is still consolidating**. PoB 2 is a fork that will evolve over the coming patches. PoEPlanner is a consolidated tool with dedicated PoE 2 support that holds stability release to release. In 6-12 months both will be more mature; today there are tradeoffs because the game is new.

## At a glance

| Scenario | Best pick |
|---|---|
| Exact PoE 2 DPS calculation | PoB 2 |
| Atlas tree planning | PoEPlanner |
| Quick build sharing in Discord | PoEPlanner |
| Importing and adjusting your real character | PoB 2 |
| Browser-only access, no install | PoEPlanner |
| Deep optimization with bench crafts | PoB 2 |
| Casual tree mockup | PoEPlanner |
| Early patch support for PoE 2 | PoB 2 |

## Final verdict

**Not direct competitors, complements**. Serious PoE 2 players use both. PoB 2 is the heavy calculator when you're polishing a build with your real gear; PoEPlanner is the fast web app for sharing, atlas planning, and idea mockups when you're away from your PC.

If you're starting with PoE 2: **PoEPlanner**. It's accessible, web-based, and covers 80% of what you want to visualize. When you start obsessing over exact DPS, install PoB 2 — it becomes the primary tool without displacing PoEPlanner. Two distinct roles in your workflow.
