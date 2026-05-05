---
title: "Path of Building Community (PoE 2)"
description: "Offline DPS calculator and build planner for Path of Exile 2, maintained by the community as a dedicated fork of the original PoB."
quickTake: "If you're putting more than a few hours a week into PoE 2, stop playing blind. PoB 2 is still under construction and has gaps, but today it's the only way to see mathematically what your character actually does."
---

## What it is

Path of Building Community for PoE 2 (PoB 2) is a fork of the Path of Exile build planner adapted to Path of Exile 2's mechanics. It runs offline on Windows, macOS and Linux, imports your character from the official site, and shows effective DPS, survivability, skill scaling and the impact of every gear or passive tree decision.

It's a separate project from the original PoB (which still covers PoE 1) and lives in its own repository: `PathOfBuildingCommunity/PathOfBuilding-PoE2`. It's maintained by the same community organization that sustains PoB for PoE 1, with a contributor team adjusting calculations every time GGG changes balance — and during Early Access that's frequent.

## What problem it solves

PoE 2 shows even less in-game information than PoE 1. The damage tooltip is a first approximation: it ignores flasks, ignores interactions between supports, doesn't correctly factor in new combo mechanics (Spirit, gem combinations) and won't tell you whether you'll survive against the Arbiter.

PoB 2 exposes those calculations. It shows real DPS against different enemy archetypes, validates whether you're capped on resistances including endgame penalty, and lets you simulate any item before spending Exalted Orbs on it. That visibility is what separates "my build feels strong" from "my build hits for 1.2M and tanks physical hits up to 18k".

## Differentiation

Compared to web-based alternatives (Mobalytics, PoEPlanner), PoB 2 offers two things none can match yet: **simulation depth** (every derived stat is visible, not just the "highlighted" ones) and **offline operation** (no server dependency, doesn't go down when 200k people log in on patch day).

In return, web planners win on accessibility: no install required, builds shareable via link, gentler UX curve. The practical rule is web planner to explore, PoB 2 to mathematically validate the build before investing.

## What people use it for

**Import your character and diagnose gaps**: paste your PoE 2 profile link and PoB 2 pulls items, gems, passive tree, and atlas. In 30 seconds you see where you're low on resistances, accuracy, or crit, and which tree nodes are wasted.

**Compare items before buying them**: edit a slot with the candidate item and see the DPS, life, ES delta instantly. Decide whether 80 Exalted on the trade are worth it before making the offer.

**Design builds from scratch**: start with an empty character, pick class and ascendancy, plan passive tree and atlas. PoB 2 tells you exactly the result you'll get before leveling.

**Validate creator guides**: serious buildmakers publish PoB 2 links with their builds. Importing one shows you exactly how it's structured — no intermediary translation, no "I think they meant this".

**Theory-craft new combos**: PoE 2 introduces skill-gem combinations and Spirit as new axes. PoB 2 is where you test whether an idea scales before spending 30 hours leveling to find out it doesn't.

## Who this isn't for

If you just started PoE 2 and haven't finished the campaign, PoB 2 will overwhelm you. The interface is dense — tabs, panels, calcs — and most of the information only makes sense once you understand the game's core mechanics. For that phase, written guides and creator videos pay better.

If you play casually (a couple hours a week, no pinnacle bossing ambition), you don't need it either. PoB 2 pays back its learning curve when you're optimizing endgame; for campaign and first atlas tier, the game is enough on its own.

## How it's used in practice

1. Download the installer from `pathofbuilding.community` (PoE 2 section) or the fork's GitHub Releases. Installs as a desktop app.
2. Open PoB 2, click "Import/Export Build", paste the character link from PoE's official site.
3. Toggle correct flask uptimes, buffs and conditions in the "Configuration" panel (e.g., enemy at low life, on full life). This dramatically changes estimated DPS — without this, the numbers are fantasy.
4. Read the left-side stats panel: Hit Rate / Skill DPS / Combined DPS, Life / ES / Mana, and resistances. Anything red is where you have a problem.
5. To iterate: edit items or tree nodes, compare versions with the "Compare" option between two calcs, save candidate builds.

## Honest limitations

**The PoE 2 fork is behind the PoE 1 one in maturity**. New mechanics take days or weeks to be modeled correctly when GGG introduces them. On patch day there are frequently items or gems with provisional or incomplete calculations. Check the fork's release notes before trusting a DPS number 100%.

**English only**. No Spanish localization. If you don't handle PoE technical terminology in English (More vs Increased, ailment threshold, etc.) there's a barrier. Spanish-language creator videos help bridge it.

**The interface is functional but ugly**. It's not Modrinth or a modern dashboard: it's a tool made by players for players. Expect dense tables and abbreviations. Once you get used to it it's efficient; the first use is jarring.

**Some exotic mechanics (specific Sekhema buffs, certain legacy effects) may not be perfectly modeled**. For niche builds, cross-check the calculation with in-game tests.

## How to start

Download the installer from the official site or GitHub. Install. Open the program. The fastest way to learn isn't reading docs: import the build of some PoE 2 creator you follow and click around. Seeing a real build laid out teaches you what each panel does better than any tutorial. When you have questions, the YouTube videos cover the flow step-by-step from install to advanced usage.
