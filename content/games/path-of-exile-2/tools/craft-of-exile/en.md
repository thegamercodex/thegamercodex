---
title: "Craft of Exile (PoE 2)"
description: "Online crafting simulator for Path of Exile 2 that computes odds, expected costs, and possible outcomes."
quickTake: "PoE 2 crafting is brutal — items can't be re-rolled. Before throwing 30 Exalted at a slam, Craft of Exile tells you the real probability. For serious crafters it's near-required input."
---

## What it is

Craft of Exile (`craftofexile.com`) is an online crafting simulator covering both Path of Exile 1 and PoE 2 (toggle in the upper-left corner). It computes mathematical odds for every crafting method: chance to hit specific mods, modal expected costs in chaos, mass simulations showing outcome distribution.

It's a project maintained by Siegrest since the PoE 1 era — extended to PoE 2 once game files allowed. Everything in browser, free, no registration required.

## What problem it solves

PoE 2 drastically changed the crafting system relative to PoE 1. Philosophy: items can't be reset or fully re-rolled — every step is semi-permanent. That means throwing 30 Exalted Orbs at a slam without knowing the odds is financially reckless.

Craft of Exile exposes the math. What's the chance a Regal Orb adds exactly the mod you want? What's the expected currency cost to reach a 4-mod item with stats X, Y, Z using a given method? On average, how many attempts? The site answers these questions before you spend.

## Differentiation

Compared to PoE2DB (raw data), Craft of Exile processes that data. PoE2DB tells you "this mod has weight 1000"; Craft of Exile tells you "with weight 1000 out of 5000 total mods, your chance to hit it on a slam is 20%, expected cost 5 orbs if you want a 90% cumulative probability".

Compared to Path of Building (focus on damage scaling), Craft of Exile is the flip side: PoB optimizes output, CoE optimizes the path to reach the item. Combined workflow: PoB defines what item you need, CoE tells you how to get it economically.

## What people use it for

**Model the expected cost of a craft**: you have a concrete target (rare ring with +life, +crit, +three resistances) and want to know if you'll spend 50 Exalted or 500. Craft of Exile simulates and gives you a range.

**Compare alternative methods**: is it better to craft with Essences or pure slam? Is it worth chroming specific items before slamming? CoE shows the cost of each strategy for the same goal.

**Verify odds before a critical step**: you're about to use an expensive Divine Orb on a half-decent item — real probability of improving? CoE models it.

**Mass simulation for distributions**: Mass Simulation options show what outcome distribution you can expect from 100 or 1000 attempts of a craft. Useful for understanding variance, not just average.

**Investigate mod pools**: the site exposes which mods can roll on each base type, at which tiers, with which weights. Useful for target-crafting with explicit strategy.

## Who this isn't for

If you're new to PoE 2 and not yet trading, Craft of Exile doesn't help. Serious crafting starts when you have currency surplus and want to optimize gear you can't buy.

If you play casually and buy everything via trade, you don't need CoE. The tool earns its learning curve when you craft your own items — for pure "buy gear" players, it's overkill.

If probability math is uncomfortable for you, CoE can frustrate. Simulations require some intuition of what "70% cumulative chance after 10 attempts" means. Without that base, numbers get misinterpreted.

## How it's used in practice

1. Go to `craftofexile.com/?game=poe2` (or change toggle on home if you land on the PoE 1 version).
2. Build the base item: pick category (weapon, armor, accessory), specific base type, item level. CoE shows the applicable mod pool.
3. Define your target mods: mark which ones you want and at minimum tier. CoE blocks other mods or leaves them open per your setup.
4. Pick crafting method: alch+slam, essence-spam, fossil (if applicable in PoE 2), graveyard, etc. The site recalculates odds.
5. Read out: chance per attempt, expected cost in currency, distribution via mass simulation.

Real workflow: you're about to craft, open CoE in a parallel tab, model the plan, decide if it's worth it, execute in-game with the numbers in mind.

## Honest limitations

**English only**. No Spanish localization. Crafting technical vocabulary is demanding — you need to handle terms like "weight", "tag", "tier" in English.

**Covers standard crafting; exotic mechanics may not be 100% modeled**. PoE 2 introduces new methods (graveyard, Sekhema-based crafting) that CoE incorporates progressively. If a mechanic just dropped, it can take weeks to appear in the simulator.

**The interface is dense**. Lots of information per screen, assumed vocabulary, navigation rewarding familiarity. Steep learning curve for the first 20 minutes.

**Currency costs are approximations**. CoE uses market prices but the economy changes daily — outputs are orienting, not cent-exact.

**No import from the game**. You start each simulation from scratch building the base item manually. No paste-from-game like PoB has.

## How to start

No registration needed. Go to `craftofexile.com/?game=poe2`. First time, try a simple case: simulate alch+slam on a base you know to validate the numbers match your intuition.

To go deeper, the site has a "crafting guides repository" with explanations of specific strategies. Useful when you want to learn a new method (e.g., graveyard crafting) without zero context.

CoE isn't daily-use — it's consultative. Open it when you're going to invest significant currency in crafting. A 15-minute modeling session before spending saves hours of frustration after.
