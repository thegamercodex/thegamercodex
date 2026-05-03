---
title: "Bloodmallet"
description: "Open-source site that pre-computes per-spec comparison charts using SimulationCraft. Covers trinkets, talents, tier sets, embellishments, and other items via scripts that run regularly and publish DPS-ranked rankings."
quickTake: "Bloodmallet is the 30-second answer when all you need is 'which trinket from Vault do I pick this week.' Doesn't replace Raidbots for your specific char, but the pre-computed approach saves the setup. Open source, MIT license."
---

## What it is

Bloodmallet (bloodmallet.com) is an open-source project that takes SimulationCraft and applies it systematically: instead of every user running their own sims, Bloodmallet runs pre-computed batteries for each game spec across current-tier items and options, and publishes the results as ranked comparison charts.

For each spec, you'll find charts of:

- **Trinkets**: ranked by estimated DPS in single-target and AoE (cleave / Mythic+ scenarios).
- **Talents**: builds compared with estimated DPS.
- **Tier sets**: whether two-piece, four-piece, two+two hybrid is better in each context.
- **Embellishments**: for profession embellishments (Dragonflight onwards), which combination maximizes DPS.
- **Stat priorities**: visualized in charts.
- **Race**: if you optimize by winning race (one-time decision), Bloodmallet covers it.

The project is hosted on GitHub under MIT license, maintained by community contributors. Data updates periodically — usually days after a patch that changes balance.

## What problem it solves

Raidbots is excellent for your char with your gear, but there are two things it's overkill for:

1. **General decisions**: "which trinket is good for my spec?" doesn't require sim of your specific char — a general ranking is sufficient for 90% of cases.

2. **Speed**: Raidbots costs 5-15 minutes per sim. If you want 5 quick decisions (which trinket, which embellishment, which meta-gem, which talent build, which race), pre-computed charts give you answers in seconds.

Bloodmallet fills both. Open your spec page, scroll, see ordered rankings. Decision made in 30 seconds. Zero setup.

For players who don't want SimC's learning curve but want data-driven decisions, it's the lowest-friction entry possible.

## The difference vs. Raidbots

Same engine (SimC), opposite philosophy:

- **Raidbots**: on-demand simulation for your specific char. Customizable, accurate to your setup, but requires setup (install addon, copy profile, configure sim) and time (5-15 min per run).
- **Bloodmallet**: pre-computed charts for a generic spec with "average top 1%" gear. Not customizable, doesn't capture your setup nuances, but instant and zero-setup.

For "general decisions that don't vary much with my specific gear" (which trinket I farm, which talent build I compare, which race re-roll to consider): Bloodmallet.

For "fine optimization of my current setup" (Top Gear over my bag, stat weights with my actual stats, pre-raid Droptimizer): Raidbots.

The two complement each other. A serious raider probably opens Bloodmallet weekly for general decisions, and Raidbots when there are big gear changes or critical decisions.

## What people actually use it for

**Quick trinket selection**: which Vault trinket do I pick? Which farmable raid trinket do I prioritize? Bloodmallet has clear rankings.

**Talent build evaluation**: if you're torn between two top builds, Bloodmallet shows estimated DPS in single-target and AoE for each.

**Tier set decisions**: when is it worth swapping to 4-piece, when is 2+2 hybrid better, when does the set bonus not compensate the ilvl loss.

**Race re-roll consideration**: if you're thinking of re-rolling race to min-max, Bloodmallet quantifies the difference. Usually small (≤1-2% DPS) — useful to decide if the cosmetic change is worth it.

**Embellishment crafting choices**: when professions add embellishments with effects, Bloodmallet ranks which give more DPS per slot.

**Pre-patch quick scan**: post-patch, Bloodmallet refreshes charts within days. Lets you see fast what changed in the meta for your spec.

## Who it's NOT for

- **Players who need absolute precision**: charts assume "average top 1% char" — they don't capture your specific gear, current stats, or interactions with items you have. For that precision, Raidbots.
- **Casual players without high-tier gear**: the decisions Bloodmallet ranks (Mythic trinkets, rare embellishments) presume you have access to those items. If you're doing Heroic with normal gear, differences are usually irrelevant.
- **Niche specs with uneven coverage**: like SimC itself, depends on maintainers. Popular specs have updated charts; niche specs sometimes lag or have gaps.
- **PvP**: not covered. SimC models PvE.

## How it's actually used

1. Open [bloodmallet.com](https://bloodmallet.com).

2. Pick your class and spec from the menu.

3. Tabs with each chart type: Trinkets, Talents, Tier Sets, Embellishments, etc.

4. Each chart is ranked best to worst with estimated DPS in bars.

5. Filters by context (single-target, two-target, three-target, five-target) — critical because single-target meta can differ a lot from AoE/Mythic+ meta.

6. Implement the decision: bid for that trinket in raid, pick that talent build, craft that embellishment.

## Honest limitations

**Charts assume generic baseline char**: if your gear is very different from baseline (much higher, much lower, with weird stat mix), rankings may not apply exactly. For edge cases, Raidbots with your profile.

**Update lag**: Bloodmallet isn't realtime. After a patch, there's a window of days where charts reflect old meta. Check the chart's last update date.

**Not gear-specific**: if you have an excellent old-tier trinket that the baseline assumes you wouldn't use, Bloodmallet won't highlight it.

**Doesn't simulate specific encounters**: Raidbots has profiles for some bosses with modeled mechanics. Bloodmallet uses simple baseline.

**SimC dependencies**: when SimC has spec modeling bugs, Bloodmallet reflects that bug until upstream fixes it.

**Functional but austere UI**: pure charts, no guides or why-explanations. To understand why the meta is the way it is, other tools (Method, spec Discord).

**Retail current-tier only**: doesn't cover Classic or older tiers.

## How to get started

1. Open [bloodmallet.com](https://bloodmallet.com) and pick your spec.

2. Bookmark your spec page — you'll re-check it many times.

3. First time, scroll through available charts to understand what Bloodmallet covers (trinkets, talents, tier, embellishments, etc.).

4. When you have specific decisions (which trinket to bid, which talent build), find the relevant chart and read the ranking.

5. If you find bugs or gaps, the GitHub repo ([Bloodmallet/bloodmallet.github.io](https://github.com/Bloodmallet/bloodmallet.github.io)) accepts PRs and reports.

6. Combine with Raidbots when you need precision specific to your char, and with Icy Veins / Method to understand the reasoning behind the numbers.
