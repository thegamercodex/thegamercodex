---
title: "HunterPie"
description: "Open-source overlay and companion for Monster Hunter Wilds on PC showing monster HP, real-time damage, timers, and Discord Rich Presence."
quickTake: "The series' reference overlay on PC. If you want to see monster HP and your damage in real time, HunterPie is the mature, open-source choice."
---

## What it is

HunterPie is an overlay and companion for PC, open-source (MIT license, Haato3o's repo on GitHub), with a long history in the Monster Hunter series and support for Wilds. It runs alongside the game and shows on-screen information the game hides: the monster's real HP, the damage each hunter deals, capture and crown timers, and Discord Rich Presence. It's free.

## The problem it solves

Monster Hunter doesn't show you the monster's HP or how much damage you're dealing. That makes it hard to know whether your build improved or whether you're on pace for a capture. HunterPie surfaces those numbers in real time, turning "I think I hit harder" into concrete data you see while hunting.

## Differentiation

REFramework is the low-level modding framework many scripts run on; HunterPie is a polished companion app focused on the overlay, friendlier for anyone who just wants the on-screen info without touching Lua. In fact, they're often used together. Against a loose overlay mod, HunterPie is the most complete and maintained.

## What people use it for

- **Real-time monster HP**: knowing exactly how much life the monster has left.
- **Damage meter**: measuring your damage and the team's during the hunt.
- **Timers**: tracking capture windows and crown sizes.
- **Discord Rich Presence**: showing what you're hunting on your Discord profile.

## Who it isn't for

It only works on PC: console players can't use it. If you play public matchmaking, mind community etiquette around damage meters. And if you don't want to install anything external to the game, an overlay isn't for you.

## How it's used in practice

1. Install REFramework if the overlay needs it to hook the game.
2. Download HunterPie from its Nexus Mods page or the GitHub repo.
3. Run HunterPie alongside the game.
4. Configure which widgets you want on screen (HP, damage, timers).
5. Enter a hunt and you'll see the info in the overlay.

## Honest limitations

- **PC only**: there's no console version.
- **Depends on modding updates**: after a big patch it can break until the framework updates.
- **Damage-meter etiquette**: in public groups, measuring others' damage can create social friction.
- **English only**: unlocalized interface.

## How to get started

Download HunterPie from its Nexus Mods page (mods/1945) or Haato3o's GitHub, make sure you have whatever modding framework it requires, and run it before hunting. Start with the monster HP widget, the most immediately useful.
