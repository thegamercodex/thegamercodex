---
title: "Nightreign Map Router"
description: "Open-source web app that identifies the current Nightreign map seed and suggests optimal routes based on target Nightlord and team composition."
quickTake: "If you optimize Expedition runs, knowing the map seed before you move changes the meta — Map Router identifies it and suggests per-landmark priorities."
---

## What it is

Nightreign Map Router is an open-source web app maintained by NikVince. Repo at `github.com/NikVince/nightreign-map-router`. Free, no login.

Covers Nightreign's 320 map patterns + DLC additions. Identifies your current map seed (via screenshot recognition or manual seed input) and suggests optimal routes based on target Nightlord and team comp.

## What it solves

Nightreign has 320 different map patterns, each with different loot, landmark, and enemy spawn layouts. Without knowing which seed you're playing, routing decisions are blind. Map Router solves seed identification quickly and suggests priorities.

For serious players, knowing the seed multiplies value per Expedition: you go straight to landmarks that drop the relics you need vs exploring blindly.

## What people use it for

**Seed identification**: see which pattern you're playing before deciding.

**Optimal routing by Nightlord**: given your target, which landmarks to prioritize.

**Team comp adaptation**: suggests different routes by which Nightfarers are in party.

**Speedrun planning**: for serious speedrun attempts, knowing seed is critical.

**Community data**: aggregations of which seeds yield best.

## Who shouldn't use it

If you play casually and don't optimize runs, it's overkill.

If you only want to enjoy the game blind, seed knowledge "breaks" the experience.

If you expect a mobile app, doesn't exist — web only.

## How it's used in practice

1. Visit `github.com/NikVince/nightreign-map-router` and open the demo (or install locally).
2. Start an Expedition.
3. Identify seed: upload a screenshot of the initial map or type the seed code visible in-game.
4. Define your target Nightlord and party comp.
5. The app suggests prioritized routing.
6. Follow the routing through the 3 days.

## Honest limitations

**Not official**: data extracted by community; some seeds may have undocumented variations.

**Initial technical setup**: the "live" version may not always be available; local setup requires npm install.

**No mobile**: web only.

**Incremental DLC coverage**: Forsaken Hollows seeds took time to map completely.

**Initial curve**: understanding what each landmark means requires Nightreign familiarity.

## How to start

1. Visit the repo on GitHub.
2. If there's a live version, use it; otherwise, follow README to run locally.
3. Start with a simple Expedition to test identification.
4. Once it works, integrate into your regular workflow.
5. Consider contributing to the repo if you find bugs or missing data.
