---
title: "Exile Leveling"
description: "Interactive web leveling guide for Path of Exile 1 and 2 with step-by-step progress tracking and Path of Building integration."
quickTake: "If you haven't memorized PoE 2's campaign yet, Exile Leveling marks every step — what quest to do, what loot to prioritize, which tree nodes to take — without pausing to look at guides. Zero hype: it's functional, free and open source."
---

## What it is

Exile Leveling is an open-source web tool developed by HeartofPhos that guides you through Path of Exile 1 and 2's campaign with step-by-step instructions, progress tracking, and the option to load your PoB build so the guide adapts recommendations to your specific plan.

It lives at `heartofphos.github.io/exile-leveling/`, requires no install, runs entirely in browser. Open source on GitHub under MIT, community-maintained with regular contributions.

## What problem it solves

PoE 2 has 4 acts + interludes. First time is pure exploration; subsequent runs you want efficiency. Knowing which quests give permanent rewards (skill points, life flask charges), which you can skip without losing value, which hidden caches exist, and what order to take passive nodes saves hours per character.

That information exists in long written guides (Maxroll, video walkthroughs), but reading them in parallel with the game breaks flow. Exile Leveling collapses it into an interactive sidebar: mark each step as done, the next one appears, no need to search where you were in the text.

## Differentiation

Compared to Maxroll's leveling guide (long written format): Exile Leveling is interactive. Maxroll gives you deep context and reasoning; Exile Leveling gives you the next step. Combined workflow: read Maxroll once to understand, use Exile Leveling during the run to execute.

Compared to in-game overlays (some AHK macros like PoE-Leveling-Guide): Exile Leveling is web-only. Doesn't interfere with the game client. Trade-off: it doesn't appear over the game, you need a secondary monitor or alt-tab.

## What people use it for

**Follow a campaign step by step**: the guide lists per act what quests to do, in what order, what to claim. Mark done, advance.

**Load your PoB and see progressive passive tree**: import your Path of Building build and the guide shows which node to take at each level. Zero "leveling tree" ambiguity.

**Track skill points and permanent rewards**: explicit alerts for quests granting skill points, flask charges, talent points. You don't miss any.

**Custom guides**: the tool supports custom guides written by the community or the user. Guides can be shared and imported.

**Efficient re-runs**: for second or third character in a league, Exile Leveling lets you skip didactic content and go straight to the list of critical steps.

## Who this isn't for

If it's your first time playing PoE 2, you should play the campaign without a guide first to discover the game naturally. Exile Leveling is for optimization, not discovery.

If you play casually and leveling speed doesn't matter, you don't need a leveling tool. GGG's campaign is playable without guides.

If you want a native overlay over the game client, Exile Leveling isn't it. For full overlay there are other tools (some with AHK), though none as polished in PoE 2 as Exile Leveling is as a web app.

## How it's used in practice

1. Go to `heartofphos.github.io/exile-leveling/`. Pick PoE 2 if available (or load custom guide).
2. (Optional) Load your PoB build using "Import" — paste the export code. The guide adapts passive tree recommendations.
3. Start Act 1 in-game. Keep the tab visible on a secondary monitor or alt-tab for checks.
4. As you complete steps (kill a boss, arrive in town, talk to NPC), mark as done. The guide shows the next.
5. Customization: you can tune which optional content to cover (all side quests vs only critical path) per your speed target.

## Honest limitations

**English only**. No Spanish localization. Vocabulary simpler than tools like PoB, but still a barrier for non-English readers.

**Lower PoE 2 coverage than PoE 1**. Since PoE 1 has years of leveling tools, Exile Leveling has many community-contributed guides. PoE 2 is more in construction — the official guide is solid but the community ecosystem is younger.

**Updates depend on the author and contributors**. HeartofPhos keeps it active, but it's a one-dev + community project. After a major PoE 2 patch, there can be update lag.

**No voice or video**. It's text + checkboxes. If you prefer audio guides or videos for leveling, this doesn't give you that.

**No native overlay**. As mentioned, living in a web tab requires secondary monitor or alt-tab. For single-monitor users, friction.

## How to start

No registration needed. Go to `heartofphos.github.io/exile-leveling/`. First time, explore the official guide without importing anything — get a sense of the flow.

For productive use: import your PoB build before you start leveling. That makes the tree and gear recommendations coherent with your endgame plan, not generic.

It's optional: many players prefer memorizing the campaign after 2-3 runs and dropping leveling tools. Exile Leveling is most useful in the first 1-2 characters; afterward it becomes marginal.
