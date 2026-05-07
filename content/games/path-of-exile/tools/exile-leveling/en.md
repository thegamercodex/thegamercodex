---
title: "Exile Leveling"
description: "Interactive web-based leveling guide for Path of Exile 1 with step-by-step progress tracking and Path of Building integration."
quickTake: "If you haven't memorized the PoE 1 campaign yet, Exile Leveling marks every step — which quest to run, which loot to prioritize, which passive nodes to take — without needing to pause and read external guides. No hype: it's functional, free, and open source."
---

## What it is

Exile Leveling is an open-source web tool by HeartofPhos that guides you through the Path of Exile 1 campaign with step-by-step instructions, progress tracking, and the ability to import your Path of Building build so the guide adapts its recommendations to your specific plan.

It lives at `heartofphos.github.io/exile-leveling/`, requires no install, and runs entirely in-browser. The code is open on GitHub under MIT, with active community contributions.

## What problem it solves

PoE 1 has 10 acts you want to push through as fast as possible to reach the endgame. Knowing which quests give permanent rewards (passive points, flask charges, skill books), which can be skipped without losing value, in what order to take passive nodes, and what gear to prioritize saves hours per character — especially when running multiple builds in a single league.

That information exists in long written guides (Maxroll, video walkthroughs), but reading them alongside the game breaks the flow. Exile Leveling collapses it into an interactive sidebar: tick each step as done, the next one appears, no more searching where you were in the text.

## Differentiation

Versus Maxroll's leveling guides (long-form written): Exile Leveling is interactive. Maxroll gives you depth and reasoning; Exile Leveling gives you the next step. Combined workflow: read Maxroll once to understand, use Exile Leveling during the run to execute.

Versus in-game overlays (some AHK macros like PoE-Leveling-Guide): Exile Leveling is web-only. It doesn't touch the game client. Trade-off: it doesn't sit on top of the game, so you need a secondary monitor or alt-tab.

## What people use it for

**Following a campaign step by step**: the guide lists per act which quests to run, in what order, what to pick. Tick done, advance.

**Loading PoB and viewing the progressive passive tree**: import your Path of Building build and the guide shows which node to pick at every level. No ambiguity around the leveling tree.

**Tracking skill points and permanent rewards**: explicit alerts for quests that grant skill points, flask charges, passive points. You don't miss any.

**Custom guides**: the tool supports community-written or user-written custom guides. They can be shared and loaded via import.

**Efficient re-runs**: for second or third characters in a league, Exile Leveling lets you skip the didactic content and go straight to the critical path.

## Who it's not for

If it's your first time playing PoE 1, consider playing the campaign without a guide so you discover the game organically. Exile Leveling is for optimization, not discovery.

If you play casually and leveling speed doesn't matter to you, you don't need a leveling tool. The campaign is fully playable without guides.

If you want a native overlay sitting on top of the game client, Exile Leveling isn't that. For full overlays there are other options (some AHK-based), though none as polished as Exile Leveling is as a web app.

If you play Path of Exile 2, this tool doesn't yet cover PoE 2 with the depth it has for PoE 1. For PoE 2, look at the dedicated tools in the PoE 2 catalog of this codex.

## How to use it in practice

1. Go to `heartofphos.github.io/exile-leveling/`. Pick the official PoE 1 guide or load a custom one.
2. (Optional) Import your PoB build via "Import" — paste the export code. The guide adapts passive tree recommendations.
3. Start Act 1 in-game. Keep the tab visible on a secondary monitor or alt-tab for checks.
4. As you complete steps (kill a boss, reach a town, talk to an NPC), tick them done. The guide shows the next.
5. Custom: tweak which optional content to cover (all side quests vs critical path only) depending on your target speed.

## Honest limitations

**English only**. No localized versions. The vocabulary is simpler than in tools like PoB, but still a barrier for non-English readers.

**No voice or video**. It's text + checkboxes. If you prefer audio guides or video walkthroughs for leveling, this doesn't deliver that.

**No native overlay**. As mentioned, living in a web tab requires a secondary monitor or alt-tab. For single-monitor players, that's friction.

**Updates depend on the author and contributors**. HeartofPhos keeps it active, but it's a single-dev + community project. After a major patch, updates may lag.

**PoE 2 coverage still limited**. If you hoped to use it for PoE 2, the maturity is concentrated on PoE 1. PoE 2 coverage is experimental for now.

## How to start

No registration required. Go to `heartofphos.github.io/exile-leveling/`. The first time, explore the official guide without importing anything — get a feel for the flow.

For productive use: import your PoB build before you start leveling. That way the tree and gear recommendations are coherent with your endgame plan rather than generic.

It's optional: many players memorize the campaign after several runs and stop using leveling tools. Exile Leveling is most useful for the first one or two characters in a league; after that it becomes marginal.
