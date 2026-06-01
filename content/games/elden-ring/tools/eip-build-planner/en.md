---
title: "EIP Gaming Build Planner"
description: "Web build calculator for Elden Ring with stats, previewed AR, defenses, and resistances, supporting all base-game content plus Shadow of the Erdtree."
quickTake: "The most complete planner in the ecosystem: clean UI, data updated to the latest patch, and explicit SOTE support — if you're going to use only one, this is the safe default."
---

## What it is

EIP Gaming Build Planner is a web calculator maintained by EIP Gaming, a site dedicated to Souls and action-RPG guides. The tool lives at `eip.gg/elden-ring/build-planner/` and lets you build a character from scratch: starting class, stats, equipment, ashes of war, spells, talismans, and consumables. It calculates real attack rating, defenses, resistances, and status buildup.

It's free, no login required. The current version covers all base-game content plus Shadow of the Erdtree, including Scadutree Fragments and Revered Spirit Ashes that modify damage/defense only inside the Realm of Shadow.

## What it solves

Designing an Elden Ring build without a planner means doing scaling math in your head — knowing that a Bloodhound's Fang +10 with C/D in str/dex gives you X AR at Y level — and that's error-prone. EIP does the math in real time: change one stat point, AR recalculates instantly.

It also solves the pre-Larval-Tear planning problem: since respecs are limited in-game, planning in EIP before raising stats prevents wasting Larval Tears.

## Differentiation

Against Mugen Monkey (the classic), EIP wins on modern UI and DLC coverage; Mugen is minimalist but its SOTE data is incomplete. Against tarnished.dev, it wins on coverage — tarnished has better UX for quick builds but EIP is more thorough on rare items and specific AoWs.

## What people use it for

**Pre-respec theorycrafting**: plan an alternative build before spending Larval Tears in-game.

**Hunt stat breakpoints**: is it worth raising str from 50 to 55 for this weapon? The planner shows exactly how much AR you'd add.

**Compare two weapons**: lock your base build, swap the weapon, and compare AR/movement directly.

**Share builds with friends**: the final URL encapsulates the full build; paste and open elsewhere preserves everything.

**Plan for SOTE**: with Scadutree level previewed, you know how much Scadutree damage you need for your next Promised Consort Radahn attempt.

## Who shouldn't use it

If you want a minimalist planner (stats + starting class only), Mugen Monkey is faster and cleaner.

If your workflow revolves around importing/exporting JSON or scripting the planner, EIP doesn't expose an API.

If you play Nightreign, this planner doesn't apply — use Mobalytics or Relics.pro.

## How it's used in practice

1. Open `eip.gg/elden-ring/build-planner/`.
2. Pick a starting class (Wretch for max flexibility, Astrologer for pure INT, etc.).
3. Raise stats with `+` buttons or type the target value.
4. Click each gear slot (head, chest, hands, legs, main hand 1-3, off hand 1-3, talismans, sorceries, incantations).
5. Filter items by damage, weight, requirements; click to equip.
6. Watch the side panels: total AR, scaling, defenses, resistances.
7. Copy the URL to save or share.

## Honest limitations

**Some rare items out of date**: data from recent patches takes 1-2 weeks to land; a very new weapon from the latest patch may be missing.

**Doesn't simulate per-scenario DPS**: the planner calculates static AR but not DPS against a specific boss with its elemental resistances.

**Ads**: the site is ad-supported; occasional but not aggressive pop-ups.

**No offline version**: requires connection.

## How to start

1. Visit `eip.gg/elden-ring/build-planner/`.
2. Pick a starting class.
3. Set a target level (NG cap is 713, but most PvP players cap at 125 or 150).
4. Iterate stats until you hit the AR/defenses you want.
5. Copy the final URL and save it.
