---
title: "Craft of Exile"
description: "Complete web-based item crafting simulator covering every method in the game, from alteration spam to harvest crafting."
quickTake: "The definitive tool for serious crafting in PoE. Not for beginners, but if you're going to craft high-end items, there's no alternative."
---

## What it is

Craft of Exile is a web application that simulates Path of Exile's complete crafting system. It includes absolutely every method available in the game — from the basic stuff (alteration, regal, exalt orbs) to advanced league systems like Betrayal, Heist, Harvest, Eldritch, and recent league methods.

It lets you simulate the crafting process step by step, calculate real probabilities, estimate currency costs, and explore the complete pool of modifiers available for any item base.

It was created and is maintained by Siegrest, who updates it with every game patch and new league.

## What problem it solves

Crafting in Path of Exile is one of the deepest and most opaque systems in the game. When crafting an item involves decisions like "do I use 50 chaos orbs and pray, or invest 100 chaos in specific fossils?", or "what's my real probability of getting this modifier with this method?", the game gives you no answers. You have to calculate or guess them.

Craft of Exile makes those calculations accessible. Instead of spending real currency trying methods blindly, you simulate in CoE first, see probabilities, calculate expected costs, and enter the game knowing what to do.

For high-end items (the ones that sell for hundreds or thousands of divine orbs), the difference between knowing what method to use and not knowing it can be the difference between completing the item or losing hundreds of divines in failed attempts.

## What people use it for

**Validating viability of target items**: you have an idea for a perfect item for your build. Before starting to craft it, you model it in CoE to see if it's even possible, what methods give you the highest success probability, and how much it would cost on average.

**Comparing crafting methods**: for the same objective, there are typically 3-5 viable methods. CoE lets you simulate each one, see probabilities and costs, and pick the optimal one based on your available currency.

**Planning chain crafts**: endgame items often require multiple steps (preparing the base, getting specific mods, finishing with closing methods). CoE helps you plan the complete sequence.

**Searching optimal bases**: what's the best armor base for a Stormshroud? What dagger type is ideal for a critical strike build? CoE shows you what bases can roll the modifiers you need and at what tiers.

**Learning the crafting system**: paradoxically, CoE also serves as an educational tool. By exploring methods and seeing how they affect results, you start understanding the mod system and how methods interact. It's a learning lab.

## Who this tool is NOT for

If you're starting with PoE or have few hours of gameplay, Craft of Exile is probably not for you yet. The tool assumes prior knowledge of:

How the mod system works (prefixes vs suffixes, tiers, ilvl).

What the various crafting currencies are and what they do.

Basic crafting methods (alteration spam, chaos spam, regal/exalt).

The concept of mod tags and how they affect crafting.

Without that foundation, CoE feels like an overwhelming collection of tables and numbers without context. The honest recommendation is: play PoE for a few leagues, attempt basic crafts in-game, read crafting guides, and when you hit the question "what's my real probability of getting this mod?", that's when CoE starts making sense.

## How it's used in practice

CoE is organized into main tabs by crafting method. You pick the method you're interested in (Fossils, Harvest, Essence, etc.), then the item base, and start configuring the simulator.

The emulator is the central function: you simulate item-by-item, seeing each step of the craft and the random results. You can run hundreds of simulations to understand the statistical distribution of outcomes.

The mass crafting function is complementary: instead of simulating individual attempts, it tells you statistically how many attempts you'd need to reach an objective and how much it would cost.

There are also mod search tools, item quality calculators, and complete crafting bench references.

## Honest limitations

**English only**. And game terms are technical. If you don't handle PoE crafting terminology in English, you'll be googling constantly.

**Steep learning curve**. The interface has lots of content on screen. There are tooltips and help, but no guided tutorial. It's the kind of tool where "you learn by doing" — you learn in the context of a specific craft you need to solve.

**Some new league mechanics take time to implement**. When GGG introduces a new crafting system (Eldritch implicits, for example, or Sanctum-specific crafts), CoE can take weeks or months to cover them completely.

**Probabilities are estimates based on community data**. PoE doesn't publish exact weights for each modifier. CoE uses datamined and community-calculated information. It's very precise but not 100% infallible.

**Without an account you don't save simulations**. If you work on a complex craft over several days, without an account you have to reconfigure the simulator each time. With a free account you save configurations.

## How to get started

Doesn't require installation. You go to craftofexile.com.

For your first time, don't try to explore everything. You have a concrete objective in mind — for example, "I want to craft a dagger with +1 to physical gem level". Go to the bases section, choose the dagger, and start exploring what mods exist for that objective. Once you identify the mods you need, go to the emulator and simulate the crafting method you want to use.

Starting with a concrete objective is much more productive than trying to "learn CoE in general". The tool makes sense in the context of a specific problem you're solving.

To complement learning, crafting videos from creators like Steelmage, Ben_, or GhazzyTV are excellent. Many use CoE in their videos and seeing the flow in action accelerates understanding.