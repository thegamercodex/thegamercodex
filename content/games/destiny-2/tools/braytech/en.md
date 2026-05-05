---
title: "Braytech"
description: "Open-source web app to track Destiny 2 bounties, triumphs, vendor inventories, and collections."
quickTake: "If your weekly session starts with 'what am I missing this week', Braytech tells you everything in one screen. Clean design, no ads, open source — a rare combo in Destiny 2's tool ecosystem."
---

## What it is

Braytech is an open-source web app for Destiny 2 maintained by Tom Chapman (justrealmilk on GitHub) under GPL-3.0 license. Free, no ads, optional login via Bungie OAuth. Active since 2018.

Its focus is **progression tracking**: vendor checklists, bounty tracker, triumph progress, collections, lost sectors rotation, and weekly trackers (Nightfall, Empire Hunts, etc.). What distinguishes Braytech from the rest is the combination of broad coverage + clean UI + open-source ethos with no commercial compromises.

## What problem it solves

Destiny 2 has so many parallel progression systems that staying current from inside the game is hard. Vendor checklists (each NPC has rotating items), triumphs (thousands of achievements), collections (everything you've ever obtained), active bounties, lost sector rotation. Each one lives in a different game tab, no unified overview.

Braytech consolidates all of that into a searchable screen. Open the site and see: which triumphs you're missing for X title, what Banshee has in stock this week, which bounties you've got active, which lost sector is on master today. "What to do this session" decision-making simplifies.

## How it differs

Versus D2 Checklist (the closest alternative), Braytech has **better UX and design**, but D2 Checklist has **more breadth on very granular weekly checklists**. Both serve the same flow with different emphasis: Braytech for nice general view, D2 Checklist for exhaustive audit.

Versus Destiny Recipes (specialized in titles), Braytech covers titles too but with less depth on how to unlock each. If your main goal is chasing a specific title, Recipes wins.

Versus Bungie's official Companion app, Braytech has better search and checklist customization. The official wins on clan integration and fireteam finder.

## What people use it for

**Vendor checklists**: see what each vendor has (Banshee, Spider, Saint-14) and which you already own. Saves the trip into the game.

**Triumph progress**: filter triumphs by seal/title (Conqueror, Flawless, Dredgen) and see % completion. Useful for title chases.

**Bounty tracker**: see active and completed bounties without entering the game. Useful for session planning.

**Lost sector rotation**: which LS is on master today and what exotic type drops (head, arms, chest, legs).

**Collections gap analysis**: filter by slot and see which weapons or armor you've never obtained. For completionists.

## Who it's not for

If you play Destiny 2 without completionist drive (only raids or PvP interest you), Braytech has limited utility. Its value is in chasing seals, triumphs, and collections.

If you want something super minimal with just "what do I do today", Where Is Xur + a summarized checklist can be enough. Braytech is opt-in for full audit.

If you don't have a public Bungie.net account, much of the personal functionality is locked (although global pages — vendor inventories, lost sector rotation — work without login).

## How to use it in practice

1. Go to `bray.tech`. Without login you can see vendor inventories and lost sector rotation.
2. For personal tracking: link with Bungie OAuth. The page fills with your specific progression.
3. "Vendors" tab shows each NPC with their rotating inventory. Filters for "don't have yet".
4. "Triumphs" tab filters by seal. Click a seal to see breakdown of required triumphs.
5. "Collections" tab for gap analysis. Useful for completionists chasing specific weapon rolls.

## Honest limitations

**Updates can lag post-patch**. Bungie changes manifest data and Braytech (like any unofficial tool) takes hours or days to reflect. For Day-1 after an expansion, info can be preliminary.

**Non-exhaustive coverage on each sub-feature**. Braytech attempts to do a lot — some very specific weekly checklists are better in D2 Checklist.

**English only**. No Spanish or other localizations.

**Maintenance depends on solo owner**. It's a single-dev project, no team. Future risk: if Tom stops maintaining, no continuity guarantee. As of 2026, still active.

**Minimalist design can feel cold**. The UI prioritizes function over warmth — no decoration, everything is grid and data. If you prefer friendlier UIs, other tools win on feel.

## How to get started

Go to `bray.tech`. Without login, browse the current week's vendor inventories. Then link Bungie with OAuth and review triumphs by seal — you'll find one or two you're close to completing and never noticed. That's the value proposition: visibility on things the game hides.
