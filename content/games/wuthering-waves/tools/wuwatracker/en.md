---
title: "WuWaTracker"
description: "Free and open source all-in-one companion for Wuthering Waves: Convene pity tracker, waveplate tracker, build and material planner, event timeline and banner history with predictions."
quickTake: "The companion that replaces half a dozen spreadsheets —pity, waveplate, planner and timeline in one place, free and open source. Nearly every WuWa player ends up opening it daily."
---

## What it is

WuWaTracker is an all-in-one companion for Wuthering Waves, free and open source. Its core function is Convene tracking: you import your pull history (via the URL the game exposes) and the tool computes your pity per banner. But it doesn't stop there: it includes a waveplate tracker, a build and material planner that calculates ascension costs, an event timeline, banner history with rerun predictions, an achievement tracker and global community statistics.

It requires no login —it stores your data locally— and the code is published on GitHub. In practice, it's the Swiss army knife of the Wuthering Waves player.

## What problem it solves

Wuthering Waves generates scattered information the game doesn't centralize well: how many pulls you are from the 5★ pity, how much Waveplate you've banked and when it's being wasted, which materials you're missing to ascend the Resonator you're leveling, which events are about to end, when a banner might return. Without a tool, many people end up carrying all of this in homemade spreadsheets or, worse, in their heads.

WuWaTracker solves that by bringing all those tallies into one place. The imported Convene history tells you exactly how many pulls you are from pity and whether the next 5★ is guaranteed after a lost 50/50. The planner tells you how many materials and Astrite your goal costs. The waveplate tracker warns you before your energy overflows. It's the difference between managing the account by eye and doing it with data.

## Differentiation

WuWaTracker doesn't compete with the damage calculators (WutheringTools, Tethys): it solves a different category of problem. Where those tools answer "how hard do I hit?", WuWaTracker answers "how is my account doing?" —pulls, energy, materials, progress.

Against generic gacha companions, its edge is integration: many trackers cover only pity, or only materials, forcing you to combine two or three apps. WuWaTracker brings pity, waveplate, material planner, timeline and banner history into a single tool, specific to Wuthering Waves, free and with open code so anyone can audit how it handles your data. That combination —broad scope, game specificity and open source— is what sets it apart.

## What people use it for

**Knowing their exact pity.** How many pulls remain to the 5★ and whether the next is guaranteed after losing a 50/50.

**Not wasting Waveplate.** Watching energy to spend it before it overflows.

**Planning ascensions.** Calculating how many materials and Astrite leveling a Resonator or weapon costs before committing.

**Not missing events or reruns.** Checking the timeline of active events and the banner history with predictions.

**Tracking achievements and comparing stats.** Keeping the achievement tracker and seeing how their account compares against global statistics.

## Who this tool is NOT for

It isn't for someone looking to optimize a specific Resonator's damage: that's the job of WutheringTools or Tethys, not an account companion. It provides no combat analysis or DPS breakdowns. It's also not essential for a very casual player who doesn't Convene, doesn't touch the endgame (Tower of Adversity, Whimpering Wastes) and doesn't care about optimizing Waveplate or materials —for that profile, most features sit idle, though the pity tracker remains useful even there.

## How it's used in practice

1. Open the site and follow the instructions to get the Convene history URL from the game.
2. Paste that URL to import your pull history; the tracker computes pity per banner.
3. Check the waveplate tracker so you don't waste energy.
4. Use the planner to set your goal (a Resonator or weapon) and see the cost in materials and Astrite.
5. Consult the timeline and banner history to plan your pulls and your farming.
6. Re-import the history periodically to keep pity up to date.

## Honest limitations

**The Convene import depends on the game's URL.** If Kuro Games changes the method or endpoint, the import can break until the project updates.

**Rerun predictions are estimates.** They're based on historical patterns, not official announcements; they're for planning, not guarantees.

**Data lives locally by default.** Good for privacy, but if you switch browsers or clear data without a backup, you lose the history.

**It covers account management, not theorycraft.** For damage decisions you'll need another tool.

**Like any community project, its support pace depends on volunteers.** New features and fixes arrive according to repository activity.

## How to get started

Go to wuwatracker.com and, even if you don't want to import anything yet, explore the planner and the timeline —they work without your data and show you what it's capable of. When you want your real pity, follow the site's guide to pull the Convene history URL from the game and import it: in under a minute you'll see exactly where you stand on each banner. Since it's open source, if you're interested you can also review the code at github.com/wuwatracker/wuwatracker before trusting it with your data.
