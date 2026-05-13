---
title: Path of Building vs PoEPlanner — which planner to use in PoE
description: Comparison between PoE's two most-used planners. Math depth, atlas planning, sharing, installation, and the scenarios where each one wins.
---

At first glance they look like direct competitors: both let you build a character and view the passive tree. But as soon as you use one seriously, it becomes clear they cover different needs. **Path of Building (PoB)** is a desktop damage calculator and build planner whose simulation depth the rest of the community treats as the reference. **PoEPlanner** is a fast, shareable web app whose main strength is atlas tree planning, where it's the dominant option. This comparison helps you know which one to use when.

## Calculation depth and simulation

PoB is, by a wide margin, the most complete tool for calculating damage in PoE. It accounts for:

- Skill gems, support gems, links, and quality
- Individual gear with all explicit and implicit modifiers
- Jewels and special passives (anointed nodes, cluster jewels, etc.)
- Auras, buffs, debuffs, charges, flasks, debuff stacks
- Enemy resistances, enemy armor, levels, area types
- Crit, accuracy, dot effects, ailment scaling, conversion chains

The PoB engine is a model of PoE's real damage engine, maintained by the community with each patch. When a build claims "X million DPS against a boss with flasks active", the number comes from PoB. When there's debate about whether one passive is better than another for a given skill, the answer gets validated by opening PoB.

PoEPlanner doesn't aim for this depth. Its passive tree is functional for mockups, but it doesn't calculate damage at PoB's level. If you're optimizing between two passive clusters for a 4% DPS gain, PoB is the only serious option.

## Atlas tree planning

Here the situation flips. **PoEPlanner is the de facto standard for atlas tree planning** since GGG introduced the Atlas Passive Tree system in league 3.17. Its interface is clean, connection chains are visible at a glance, and it offers preconfigured strategies (essence farming, harvest, breach, expedition, etc.) you can load as a starting point.

PoB has atlas tree support, but clearly it's not the primary focus. The UI is less clear, strategy discovery is more manual, and when the community shares an atlas tree it almost always comes as a PoEPlanner link.

If you've reached endgame and are polishing your atlas for a specific farming strategy, opening PoEPlanner is the short path.

## Sharing and collaboration

PoEPlanner wins this axis comfortably. Build your character or atlas, hit share, and get a public URL anyone can open in their browser. No install, no import. That's why builds shared in casual Discord chats or short Reddit posts usually come as PoEPlanner links.

PoB has an export/import system based on a base64-encoded code (typically hosted on pastebin). It works, but it requires the other person to:
1. Have PoB installed
2. Know how to import (Import → paste code)
3. Be on a machine where they can install PoB

For communication between serious players, the extra friction is accepted. For quick mockups or casual discussions, the PoEPlanner link wins every time.

## Learning curve and installation

PoB requires installation. On Windows it's a standard installer; on Mac and Linux there are community forks that work well but need more setup. The first launch can be intimidating: the UI has dozens of panels, options, and configs. It's a powerful tool that assumes you know (or are willing to learn) how PoE's damage engine works.

PoEPlanner is just opening a browser. The UI is cleaner, with fewer options exposed upfront. For a casual player who wants to "see roughly what my build looks like", the barrier to entry is zero.

This matters especially for new players. Telling someone just starting "open PoB" is often overwhelming. Telling them "go to PoEPlanner.com" is accessible. Once the player matures and starts thinking about serious damage optimization, they naturally migrate to PoB.

## Importing your real character

PoB has a critical feature PoEPlanner doesn't replicate: **direct import from your PoE account**. Give it your account name, pick the character, and PoB pulls your real equipment, jewels, skill setup, and passives. In 30 seconds you have your exact character loaded and you can start simulating changes against what you actually own.

PoEPlanner doesn't have this flow. If you want to represent your character in PoEPlanner, you do it by hand: click by click on the tree, gear pasted one by one, jewels manually. For mockups it's fine, but for working on your actual build it's impractical.

For players who want to answer "what happens if I swap this ring for that one I saw in trade?" — the flow is: import in PoB, swap the item, see the DPS delta. This is the core optimization loop in PoE and PoB is the only serious way to do it.

## At a glance

| Scenario | Best pick |
|---|---|
| Exact DPS calculation | PoB |
| Atlas tree planning | PoEPlanner |
| Quick build sharing in Discord | PoEPlanner |
| Importing and adjusting your real character | PoB |
| Browser-only access, no install | PoEPlanner |
| Simulating bench crafts and potential gear | PoB |
| Casual tree mockup | PoEPlanner |
| Serious endgame build optimization | PoB |

## Final verdict

They're not direct competitors: they're complements. Most serious PoE players use **both**. PoB is the heavy calculator running while you polish a build; PoEPlanner is the fast web app you open to share, when you're away from your PC, or when planning the atlas.

If you had to pick only one and you're just starting: **PoEPlanner**. It's accessible, web-based, and covers 80% of what you want to see visually in a build. When you start obsessing over exact DPS and passive-point optimization, install PoB — it'll become your primary tool without displacing PoEPlanner. They're two distinct roles in your workflow.
