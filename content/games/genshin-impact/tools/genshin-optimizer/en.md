---
title: "Genshin Optimizer"
description: "Complete web-based build, artifact, and damage optimizer for Genshin Impact, open source and available in multiple languages."
quickTake: "The indispensable tool for any Genshin player who wants to seriously optimize damage. If you farm artifacts, not using Genshin Optimizer is wasting your time."
---

## What it is

Genshin Optimizer (GO) is an open source web application that lets you manage everything related to builds in Genshin Impact: characters, weapons, artifacts, complete teams, and damage calculation. Its standout functionality is the artifact optimizer, which given your current inventory, mathematically calculates the optimal combination of artifacts to maximize each character's performance.

It's completely free, no registration required, and data is stored locally in your browser. It's available in multiple languages including Spanish, English, French, Japanese, Korean, Russian, and Chinese.

The project is maintained by frzyc and a team of contributors on GitHub under MIT license, updating with each new game patch.

## What problem it solves

Genshin Impact has a complex artifact system: each character can equip 5 pieces, each piece has a main stat and up to 4 substats, and there are dozens of sets with different bonuses. If you have 100 artifacts in your inventory, the number of possible combinations is astronomical. Manually deciding which to equip is practically impossible.

Genshin Optimizer solves this mathematically. You tell the optimizer "I want to maximize Hu Tao's damage using Crimson Witch + Wanderer's Troupe set", and the system evaluates millions of combinations of your artifacts to find the one that produces the highest DPS. In seconds. Without you having to manually test.

Beyond the optimizer, GO is also a complete damage calculator: you input your character with their current build and it shows you exact DPS, damage per skill, damage with active buffs, against specific enemies. What in-game only feels like "I think this hits harder", GO shows you as concrete numbers.

## What people use it for

**Optimizing farmed artifacts**: the central use case. After hours of domain runs, you have a bunch of new artifacts. GO instantly tells you which ones are worth equipping and which to throw away.

**Comparing builds before investing**: is it worth switching from Gladiator to Shimenawa set for your Xiangling? GO calculates damage with each option before you spend resin farming a new set.

**Long-term progression planning**: how strong would your Yelan be if you got that 5-star weapon? GO lets you simulate that scenario without spending primogems on wishes.

**Team comp theory-crafting**: how does a Hyperbloom team compare to Spread? GO lets you build both complete teams and compare theoretical results.

**Identifying character bottlenecks**: why doesn't your Raiden hit as hard as expected? GO shows you exactly where the bottleneck is (lack of Energy Recharge, poorly balanced ER%, incorrect attack vs crit ratio).

**Deciding which characters to improve**: if you have limited resin and want to prioritize improving just one character, GO shows you which has the most growth potential given your current inventory.

## How it's used in practice

The basic flow has two versions: manual and automatic.

**Manual**: you add each character, weapon, and artifact manually. Tedious at first but gives total control. For each artifact you input its set, slot, main stat, substats, and level. Same with weapons (refinement, level, ascension).

**Automatic with scanner**: there's Genshin Scanner, a complementary tool that takes screenshots of your inventory and processes them with OCR to import everything to GO automatically. Initial setup takes 30-60 minutes but afterwards GO has your complete inventory.

Once you have your data in GO, the typical flow is:

1. You choose a character and their target weapon.

2. You choose which stat you want to maximize (DPS, healing, shield strength, etc.).

3. You choose which artifact sets to consider (all, only specific sets, etc.).

4. Click "optimize". The system evaluates combinations and shows you the top 50.

5. You compare builds, choose the best, equip in-game.

For users who don't want to use the optimizer per se, GO also works as a pure damage calculator: you input your build manually and it shows you the resulting numbers.

## Honest limitations

**Initial learning curve**. The interface has lots of information and many options. To take full advantage you need to understand Genshin's combat system (elemental reactions, multipliers, scaling stats, etc.). For beginners who just want to know "what to equip on my character" there are simpler tools that give generic recommendations.

**Data setup takes time**. The first time you use it, inputting your 50+ artifacts can take an hour if done manually. With scanner it's faster but requires additional setup.

**Doesn't handle advanced mechanics perfectly**. Some specific character interactions (certain talent passives, very specific team buffs) may not be perfectly modeled. For extremely niche builds it's worth verifying manually.

**Doesn't tell you how to play**. GO shows you theoretical DPS optimizing rotation. But executing that rotation correctly in-game is another thing. An optimal build in GO requires player skill to reach its theoretical damage.

**Data is local**. If you lose your browser or clear data, you lose your entire inventory. GO allows exporting/importing your data as JSON, it's worth doing backups.

**Doesn't include Spiral Abyss specifics**. GO calculates damage against "generic enemies". If your objective is to clear specific Spiral Abyss (with its unique modifiers per cycle), you have to manually adjust simulations.

## How to get started

Doesn't require installation or an account. You go to `frzyc.github.io/genshin-optimizer` from any browser.

For your first time, practical recommendation: start with ONE character, don't try to input your entire inventory immediately. Choose your main character, input their current weapon, input only the 5 artifacts they have equipped, and play with the damage calculator to understand the interface.

Once you familiarize, then it's worth inputting more inventory. For users who want to go all-in, consider Genshin Scanner to automate the process.

To understand what to do with results, it's worth complementing GO with character guides (KQM/Keqing Mains has excellent guides that tell you "for Hu Tao look for this set, this weapon, these target stats"). GO helps you reach those goals optimally, but knowing what the goals are requires prior knowledge.

The official documentation within the tool itself has tutorials covering advanced functionality. No need to read it all at the start, but it's there when you want to dive deeper.