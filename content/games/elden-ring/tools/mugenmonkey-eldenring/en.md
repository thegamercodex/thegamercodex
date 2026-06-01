---
title: "Mugen Monkey (Elden Ring)"
description: "The classic Souls planner ported to Elden Ring: minimalist, lightning-fast, specialized in starting class optimization for capped PvP builds."
quickTake: "If you play PvP at 125/150 and need the optimal starting class for your exact stat spread, Mugen Monkey calculates it in seconds — the UI is austere but the math is impeccable."
---

## What it is

Mugen Monkey is a web planner maintained by the Souls community since Dark Souls 1, extended to every FromSoftware game (DS1, DS2, DS3, Bloodborne, Sekiro, Elden Ring). The Elden Ring version lives at `mugenmonkey.com/eldenring/`. Free, no ads, no login.

The UI is minimalist by design: it inherits the style of classic Dark Souls planners. Tables, dropdowns, and numbers — no animations or heavy branding.

## What it solves

For Elden Ring PvP, the meta level is typically 125 or 150. Every stat point counts, and picking the wrong starting class can leave you stuck with 1-2 wasted points in stats you don't use. Mugen Monkey optimizes for this: enter the final stats you want, and it tells you exactly which starting class minimizes the total level required.

This is the site's killer feature — no other planner implements it with the same clarity.

## Differentiation

Against EIP, it wins on starting class optimization (unique feature) and UI speed (no heavy JS, instant load). It loses on rare item and SOTE coverage — its DLC database has gaps. Against tarnished.dev, it loses on aesthetics but wins on legacy trust: 14 years of Souls community use.

## What people use it for

**Starting class optimizer**: enter final vigor/mind/end/str/dex/int/fai/arc; returns the minimum class in total-level terms.

**Stat min-maxing for capped PvP**: find the optimal spread for meta 125/150.

**Twink builds**: for low-level invasions (level 30-60), Mugen calculates the most efficient spread.

**Cross-game theorycrafting**: if you come from DS3 and want to port your build, the familiar layout accelerates adaptation.

## Who shouldn't use it

If you want previewed AR with every item and AoW equipped, Mugen doesn't reach that level of detail. EIP or tarnished.dev are better for that.

If you play SOTE and need updated DLC data, Mugen is less reliable than EIP.

If austere 2010s-style UI bothers you, you'll suffer — Mugen didn't modernize visually.

## How it's used in practice

1. Open `mugenmonkey.com/eldenring/`.
2. In the left panel, enter the final stats you want.
3. Mugen automatically shows: optimal starting class, resulting total level, and soft caps you're crossing.
4. For gear, click a weapon slot → pick the weapon; AR appears on the right.
5. Iterate until you hit the spread/level you like.
6. Save the URL (state is encoded in query params).

## Honest limitations

**Incomplete SOTE data**: DLC weapons and talismans have notable gaps. For builds that use rare Realm of Shadow items, validate against EIP.

**No import/export**: the URL is the only save mechanism.

**Dated UI**: dropdowns without search, wide tables hard to read on mobile.

**Sporadic maintenance**: the dev accepts PRs but updates ship weekly-to-monthly, not daily.

**No DPS preview**: only static AR.

## How to start

1. Go to `mugenmonkey.com/eldenring/`.
2. Decide your target level (125 / 150 / NG cap).
3. Enter the stats you want to reach.
4. Note the starting class it suggests.
5. Start a new Tarnished with that class, or execute the necessary respecs.
