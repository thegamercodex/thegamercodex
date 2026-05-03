---
title: "scope.gg"
description: "2D demo viewer for CS2 focused on utility analysis (smokes, flashes, molotovs) replayed visually over the map, with no need to open the client."
quickTake: "The most visual demo parser in the CS2 ecosystem. If your bottleneck is utility usage — you know you throw bad smokes but don't understand which ones or when — this is the specialist tool."
---

## What it is

scope.gg is a CS2 demo analysis platform with emphasis on 2D map visualization at replay time. You upload your demos (or it pulls them automatically via integrations) and it shows each round from a top-down view like an "expanded minimap," replaying every player's positions, kills, assists, and crucially: every smoke, flash, and molotov thrown, its trajectory, and where it landed.

Unlike Leetify (which prioritizes aggregate scores and AI scoring), scope.gg prioritizes **visualization**. The idea is that seeing your utility mistakes in context — "you threw that smoke 2 seconds late and it burned in the air" — is more educational than reading an abstract score.

It has a generous free tier and a paid tier (~$5-10 USD/month depending on promo) that unlocks extended history, utility comparisons against pros, and advanced filters.

## What problem it solves

Utility is one of the hardest dimensions to evaluate in CS2 without a dedicated demo viewer. You know you throw lots of grenades but you don't know how many were effective. You know some rounds go badly but you don't associate the smoke moment with the loss.

scope.gg gives you exactly that: each utility thrown, its timing, its measured effectiveness (how many enemies a flash blinded, how much area a smoke blocked, how much HP a molotov took). And it replays it visually, so it isn't an abstract number but a concrete event you can see and understand.

For the case "I feel my entry works but I don't know what to fix in my flashes," scope.gg shows you round-by-round what happened with every flash you threw — effective, fail, self-flash, off-time.

## What people use it for

**Post-match utility review**: see how many of your grenades had impact vs were wasted, separated by type (smoke, flash, molly, HE).

**Quick 2D demo viewing**: instead of opening the client and scrubbing manually, the top-down view lets you jump to any round and moment with a visible timeline.

**Learning utility from pros**: scope.gg has coverage of recent professional matches — you can load your favorite pro's demo and compare your smokes to theirs on the same map.

**Identifying utility timing**: the 2D replay makes it obvious when a flash was thrown 2 seconds before or after the peek. Almost invisible in the FPS client.

**Team analysis**: add teammates and see utility coordination — simultaneous flashes, overlapping smokes, redundant molotovs.

## Who this tool isn't for

scope.gg is excellent for utility and 2D visualization but it isn't:

- **General structured coaching** → Leetify covers positioning, aim, and aggregates better; scope.gg is more focused on utility/movement.
- **Simple stats coverage (KDA, win rate)** → CS Stats is lighter for that question.
- **Specific lineup database** → CSNADES is the one for "I want the exact lineup for this smoke on Inferno B"; scope.gg analyzes what you ALREADY threw, doesn't teach new ones.
- **Replacement for the client for deep aim-duel review** → for pixel-perfect duel review, open the demo in the client.

## How it's used in practice

1. Go to `scope.gg` and register (Steam OAuth).

2. Connect Faceit or upload demos manually. Like Leetify, Faceit is the smoothest integration; Premier/MM matches need upload.

3. After processing, the home shows your match list. Click on one to go to the 2D replay.

4. In the replay: timeline at the top with kill/utility marks, play/pause/speed controls, central map with animated positions. Sidebar with round stats and a filter to show only events from a player or type.

5. For specific utility analysis: **Utility breakdown** tab of the match — effectiveness graphs per type and benchmark comparison against the rank.

## Honest limitations

**Map coverage limited to active pool**: scope.gg tracks the current competitive map pool well. Maps outside the pool (legacy, workshop) may have imperfect visualization or not be supported.

**Reasonable but limited free tier**: you can use most features but history is capped and advanced comparisons require payment.

**It's not coaching, it's viewer + metrics**: scope.gg shows you what happened but doesn't tell you how to fix it. Interpretation is left to the user or a coach. For actionable verbal feedback, Leetify has more opinionated scoring.

**Privacy same as Leetify**: your demos are processed on their servers. If that bothers you, it's a blocker.

**UX can feel dense at first**: the dashboard has many numbers and filters. The tool's own learning curve is real, especially compared to more opinionated interfaces.

## How to get started

1. Create an account at `scope.gg` with Steam OAuth.

2. Connect Faceit if you have one. If not, manually upload demos from the `replays` folder.

3. Process 3-5 matches and open one in the 2D replay — the first "oh, there's the smoke that burned" tends to be revelatory.

4. If you want to go deeper into utility specifically, watch scope.gg's own tutorials on YouTube — the tool has a curve but video walkthroughs help.

5. Combine with CSNADES to close the loop: scope.gg shows you your bad smokes, CSNADES teaches you the good ones.
