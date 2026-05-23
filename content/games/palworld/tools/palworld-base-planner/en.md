---
title: Palworld Base Planner
description: Web planner that lets you simulate the Pal lineup at each of your bases and validate you cover every required work suitability.
quickTake: The only decent tool for planning "which Pals go in which base". Tells you if your current mix has gaps in mining, lumbering, or transporting before you waste hours discovering it in-game.
---

## What it is

Palworld Base Planner (palworld-base.eldritchtools.com) is an open-source web app maintained by Mysidian of the Eldritch Tools project. You add your bases, assign Pals to each one, and the tool automatically calculates work suitability coverage: what levels you have in mining, lumbering, transporting, kindling, watering, gathering, medicine production, cooling, planting, etc. Free, open source, no login (state lives in localStorage).

## What problem it solves

Palworld lets you run up to 3 simultaneous bases, each with a max of 15 Pals. The non-obvious question is: which Pal combo optimizes coverage without wasting slots? If you put 4 Pals with Mining Lv 3, only one works at a time — the other 3 stand around at empty stations while your mining base produces 1/4 of what it could. The planner shows these overlaps before you build them.

## How it differs

There's no real competition in this niche. Other calculators cover breeding or Pal locations, but "plan which Pals go in which base with which stations" only this tool solves. The differentiator is: exists vs doesn't exist.

## What people use it for

- **Plan each base's lineup**: one for mining, another for lumber and cooking, etc.
- **Validate coverage before breeding**: confirm which work suitabilities you're missing and prioritize which Pals to breed.
- **Optimize overlap**: spot duplicate Pals in the same skills and rotate one to another base.
- **Setup sharing**: state exports to JSON to share with your co-op group.

## Who this isn't for

If you only have one base with 10 random Pals and don't care about efficiency, it's overkill. This tool shines when you're optimizing seriously or coordinating multiple bases in multiplayer.

## How it's used in practice

1. Hit palworld-base.eldritchtools.com.
2. Click "Add Base" to create a base.
3. Drag Pals from the sidebar into the base slot.
4. The tool shows coverage by work suitability with visual bars — green = covered, red = gap.
5. Iterate: swap Pals, see impact in real time.
6. To save/share, export the state as JSON.

## Honest limitations

- **Work suitability only**: doesn't calculate combat stats, breeding, or passive skills — other tools handle those.
- **Doesn't consider physical positioning**: it tells you "you have what's needed for mining", not "this Pal will actually walk to the mining station". Some bases with spread-out stations have issues the planner doesn't catch.
- **localStorage**: if you switch browsers or clear storage, you lose the plan.
- **No S/A/B/C tier layer for newer Pals**: the planner has been updated but some decisions still need cross-checking with Palworld.gg.

## How to get started

Open palworld-base.eldritchtools.com. Create your first base, drag in the Pals you own, see the coverage matrix. In 5 minutes you'll already see which work suitabilities you over-cover and which have gaps. Mandatory plan before any serious breeding session or setting up a new base.
