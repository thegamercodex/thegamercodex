---
title: "StarGuide"
description: "Personalized team builder for Honkai: Star Rail that imports your real roster from HoYoLAB and recommends endgame compositions using the characters you actually own."
quickTake: "Generic tier lists don't help if you're missing the meta unit. StarGuide tells you what to build with your real roster and what to pull next based on what you've already invested in."
---

## What it is

StarGuide is a free web app that connects to your HoYoLAB account to read your actual Honkai: Star Rail roster and generate team recommendations based on the characters you really have. Instead of showing you the ideal tier list of the current meta, it shows you which compositions you can build today with your collection.

It's a solo developer project, launched in 2025 and currently in active maintenance. The interface is direct: you import your account, pick the endgame mode you want to clear (Memory of Chaos, Pure Fiction, Apocalyptic Shadow), and the app returns teams ordered by viability for your specific inventory.

The point is that it doesn't assume you have access to the perfect roster. If you're missing a meta unit, it offers alternatives from your own characters and tells you what trade-offs that choice implies.

## What problem it solves

Almost all meta information for Star Rail assumes ideal conditions: "the best Acheron team includes Pela, Sparkle and Aventurine". But if you play F2P or low-spender, you probably don't have the four units of the optimal team. Generic guides don't adapt to that reality.

StarGuide flips the question. Instead of "what's the best team for X character", it answers "with what I have, what's the best team to clear X endgame mode". That's an operational difference: one question is theoretical, the other is actionable.

Also, once it knows your roster, it can suggest concrete pull priorities: "if you pull Robin, these four teams in your collection move up a tier" is more useful than "Robin is S+ in general".

## Differentiation (vs similar-cluster tools)

The natural comparison is with Prydwen. Prydwen maintains general tier lists and character guides for aggregated meta: it tells you which units are better in the abstract. It's excellent reference, but it knows nothing about your account.

StarGuide works the other way: it takes your roster as a constraint and derives recommendations from there. It doesn't replace Prydwen, it complements it. Prydwen answers "what to pull if you could have anything"; StarGuide answers "with what you've already pulled, how do you build competitive teams this week".

For players with broad rosters the value drops: if you have all the meta, StarGuide's recommendations become obvious. The sweet spot is F2P and low-spenders with incomplete collections who need to optimize what they've already invested in.

## What people use it for

**Building teams for Memory of Chaos without much study**: you import your account, choose the mode, and get three or four viable compositions ordered by synergy. Useful when a new MoC cycle drops and you don't want to lose an hour researching.

**Deciding pull priorities with account data**: the app can show you how much your team options would improve if you pulled a specific character from the current banner. That turns the "is it worth it" decision into something more quantitative.

**Identifying gaps in your roster**: if the app tells you "for this mode you have no viable sustain", that's a clear signal for what to pull next.

**Validating improvised teams before spending fuel**: you try a team you came up with and the app tells you if it has reasonable synergy or if you're leaving damage on the table.

**Learning which units cover similar roles**: by seeing the alternatives offered for meta teams, you discover secondary synergies that don't appear in mainstream guides.

## Who this tool isn't for

If you have a whale account with every meta unit, StarGuide will confirm the obvious: use the optimal team you already know. The differential value disappears when there's no roster constraint.

If you just started the game and only have the starters plus some random 5★, the suggested teams will inevitably be weak and that's expected. The app doesn't invent units, it only works with what's there.

If you want numeric damage comparisons between builds, this isn't a damage calculator. For that there's Fribbels or MD✦C. StarGuide operates at team composition level, not stat optimization.

## How it works in practice

1. Go to `starguide.gg` from your browser.

2. Connect your HoYoLAB account following the instructions (process similar to other tools that read your roster).

3. Wait for the app to sync your character list and their approximate levels.

4. Pick the endgame mode you want suggestions for (MoC, Pure Fiction, or Apocalyptic Shadow).

5. Review the suggested teams. Each one includes the characters, the role each one plays, and notes about which unit is missing from the meta team and what trade-off the substitution implies.

6. For pull priority, open the current banners section and see how your team options change with each potential pull.

7. Come back after each patch so the app updates recommendations with new enemies and units.

## Honest limitations

**You depend on HoYoLAB sync**: if HoYoverse changes the API or your account has privacy issues, the import can fail. Not StarGuide's fault but it affects you anyway.

**Recommendations assume decent builds**: the app can't know if your relics are trash or well rolled. It suggests teams assuming units are reasonably built. If you have Acheron at level 80 with first-week relics, the suggested team will underperform vs what's predicted.

**Pure Fiction and Apocalyptic Shadow have less coverage than MoC**: as newer modes, the database of tested teams is smaller. Suggestions improve with each patch but there's still less refinement than in MoC.

**It's a one-dev project**: the update pace depends on a single person. On big patches there can be a lag of a few days until new units are incorporated.

**Doesn't replace judgment**: the app suggests from synergy rules, it doesn't understand playstyle preferences or energy constraints. Take suggestions as a starting point, not closed truth.

## How to get started

No installation required. Go to `starguide.gg` from any browser, connect your HoYoLAB account through the guided flow, and wait a minute for it to sync your roster.

The first time you open the app, it's worth reviewing the three endgame categories (MoC, Pure Fiction, Apocalyptic Shadow) to understand what your roster covers well and where you have gaps. That quick read orients you much better for the next pull decision than any generic tier list.

Pair it with Prydwen for both views: Prydwen for general meta, StarGuide for "what can I do today". The two together cover the full decision cycle: what to pull long-term and what to build this week.
