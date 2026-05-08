---
title: "Lineup Simulator"
description: "Official HoYoverse simulator to build and share Genshin team comps: 4 characters with their weapons, artifacts, and constellations, without needing to own them in-game."
quickTake: "Useful for theorizing comps before pulling or showing someone a composition without installing third-parties. It also has a database of community-published comps for inspiration."
---

## What it is

Lineup Simulator is HoYoverse's official tool inside HoYoLAB for creating Genshin Impact team compositions. It lets you select 4 characters, assign them weapons, artifact sets, levels, talents, and specific constellations, and save/share the result as a "lineup".

It works without requiring you to own the characters in-game — you can simulate comps with characters you don't have yet. It's web-based, free, and integrates with HoYoLAB to publish lineups other users can view and comment on. You can also browse community-published lineups organized by context (Spiral Abyss, Co-op, Boss runs).

## What problem it solves

Genshin has complex team mechanics: elemental reactions (Vaporize, Melt, Hyperbloom, etc.), buffs/debuffs between characters, energy regen requirements for Bursts, specific synergies. Deciding if a comp will work requires either having all characters equipped (expensive), or theorizing abstractly without visualization.

Lineup Simulator solves this by letting you build the full comp visually before committing. You see on screen the 4 characters with their weapons and artifacts, you can iterate variants, and share for others to opine. It's planning without the cost of pulls or farming.

## Differentiation vs Genshin Lab

Genshin Lab covers the same use case with cleaner UX and better data layer (estimated damage calculations, comparison between comps). Lineup Simulator is simpler but has the official advantage of **publication inside HoYoLAB**: your lineup is accessible alongside comments and reactions from the official community, not on a third-party site.

Recommendation: use Genshin Lab when you want analytical depth, Lineup Simulator when you want to share a comp inside the official forum or browse popular Spiral Abyss comps.

## What people use it for

**Deciding whether to pull a new character**: you want to know if Furina really shines in your current comps before spending primogems. You build the comp with Furina + your existing characters and compare with alternatives you already have. Informed decision.

**Optimizing comp for current Spiral Abyss cycle**: each cycle has specific buffs (e.g., Hydro damage +75%). You test several comps that leverage the buff and pick the most viable with your roster.

**Sharing comp for feedback**: you post your lineup in HoYoLAB asking "is this team viable?". Other users comment, suggest changes. Useful for beginners with doubts.

**Getting inspired by popular comps**: you browse lineups with most likes on HoYoLAB. You see what comps top players use for certain Abyss floors. You replicate or adapt.

**Planning artifact farming**: if you decide on a target comp, you know what artifact sets each character needs. That tells you which domains to farm priority.

## Who this isn't for

If you only use 1-2 fixed comps and aren't theorizing new ones, you don't need this. If you want numeric damage calculation (estimated DPS, quantitative comp comparison), Akasha System or gcsim are better. If you publish content on other forums (Reddit, Discord), official lineups don't render there — they're HoYoLAB-only.

## How it's used in practice

1. Go to `act.hoyolab.com/ys/event/bbs-lineup-ys-sea/index.html` with your account logged in.

2. Click "Create Lineup". Interface appears to choose 4 characters (drag & drop or click).

3. For each character: choose level, talents, constellation, weapon and weapon level, artifact set and main stats.

4. Choose the context: Spiral Abyss / Co-op / Boss / General. This categorizes your lineup so it appears in correct navigation.

5. (Optional) Add description explaining skill rotation, synergies, and when to use the comp.

6. Click "Publish" for public or "Save Draft" if still iterating.

7. To browse others' comps: filter by main character or context and read.

## Honest limitations

**Doesn't calculate real damage**. Shows you the comp visually but doesn't tell you "this team does X DPS". For numeric calculations you go to tools like Akasha or gcsim.

**Basic search and filtering**. Finding specific lineups (e.g., "Furina comps without Neuvillette") can be tedious due to filter UI. Community has asked for improvements but HoYoverse didn't implement them.

**Languages mix together**. Published lineups can be in any language. If you search only in English, you have somewhat limited results in some languages — active community publishes more in English and Chinese.

**Constellation and weapon refinement don't cross-validate with your account**. You can simulate C6R5 regardless of whether you have it. Useful for theorizing but confusing if you expect the sim to reflect your real account.

**Updates with new characters can be slow**. When a new character launches, they're usually available in the sim by day-1 of banner, but occasionally there are delays. Always cross-check with live patch.

**Doesn't integrate with your real inventory**. Unlike Enhancement Calculator, this doesn't read what you have or tell you what you're missing. It's pure simulation.

## How to get started

Go to HoYoLAB.com → Tools → Lineup Simulator. For your first lineup, I recommend replicating your current Spiral Abyss comp to understand the interface: pick your 4 characters with their real gear, save as draft. In 5 minutes you have feel for how it works.

After that, you can test variants: what if I replace Bennett with Furina? What if I change Hu Tao's weapon? Iteration is where the real value is.

For inspiration: navigate to "Hot Lineups" and sort by context = Spiral Abyss. You'll see top comps of current cycle with their rotations. Replicate one with characters you have and adjust as needed.
