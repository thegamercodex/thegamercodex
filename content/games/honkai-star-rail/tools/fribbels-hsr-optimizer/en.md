---
title: "Fribbels Honkai Star Rail Optimizer"
description: "Open source relic optimizer and complete planner for Honkai: Star Rail. Imports your roster via OCR or HoYoLAB and solves the ideal relic combination per character."
quickTake: "If you want to optimize relics, this is the tool. No other tool in the HSR scene covers as many vectors with Fribbels' depth."
---

## What it is

Fribbels HSR Optimizer is a web app (also available as a download) that solves the combinatorial problem of choosing optimal relics for each Honkai: Star Rail character. It imports your full roster via an OCR scanner (you feed it screenshots and it detects them) or via the public HoYoLAB API.

Once your data is in the system, the optimizer evaluates every possible 6-piece relic combination to maximize damage or whatever criterion you set, and returns the ranking of best setups with concrete metrics (EHP, expected damage, breakpoints).

It's an open source project under MIT license, maintained by fribbels and community contributors. It's the standard tool of the HSR scene for relic optimization: most creators, theorycrafters and guides reference its metrics directly.

## What problem it solves

Honkai: Star Rail has a relic system with six slots, two active sets simultaneously, variable main stats, four substats per piece, and rolls that improve with upgrades. The real combination count in a mature inventory runs into the millions. Choosing "by eye" what piece goes on what character systematically leaves damage on the table.

Before Fribbels, the only alternatives were manual spreadsheet calculations or accepting a guide's generic recommendation without checking if your specific pieces justified that choice. Both are insufficient: manual calculation doesn't scale, and the generic guide doesn't know what's actually in your inventory.

Fribbels solves this by processing every real combination your inventory allows, sorting by the metric that matters (expected damage, EHP for tanks, energy for supports), and showing you not only the best option but how much better it is vs the second.

## Differentiation (vs similar-cluster tools)

The competitive cluster includes relic scorers built into other sites (Prydwen has a basic one, several independent scanners exist) and point damage calculators. What sets Fribbels apart is that it covers the full cycle inside the same tool:

**Native OCR relic scanner** that extracts your full inventory from screenshots, without depending on external services.

**Optimizer that evaluates real combinations**, not template recommendations. It tells you what to do with the pieces you actually own.

**Integrated damage calculator** to validate optimizer output against specific rotations.

**0-100 relic scorer** that evaluates each piece individually to decide what to farm vs what to discard.

**Warp planner and character planner** for jades and resource budgeting.

Other tools cover one or two of these vectors. Fribbels covers them all from the same data, which eliminates the cost of moving information manually between apps.

## What people use it for

**Optimize a specific character's relics**: the most common flow. You just pulled or leveled a character, import your inventory, run the optimizer, and get the best relic combination from your current pieces.

**Decide which relics to discard**: the 0-100 scorer helps clean inventory. Pieces with low scores across all your characters are safe candidates to drop without losing value.

**Compare builds before farming**: if you're torn between two sets for a character, the optimizer shows how much extra damage you'd gain by farming the second set instead of keeping what you have.

**Plan warps and resources**: the warp planner estimates how many jades you need for guaranteed pity on a specific banner. The character planner projects ascension and trace materials to reach a goal.

**Compare your build with leaderboards**: the leaderboards section lets you see how your character compares to others of the same archetype, useful for validating that your setup aligns with the realistic ceiling.

## Who this tool isn't for

Fribbels assumes you understand the game's basics: what main stats are, what each relic set does, what a speed breakpoint means, what rotation your character runs. If you're new to HSR and still learning what each piece does, the dense interface can be overwhelming.

It's also not the right tool if you only want a quick recommendation like "what relics for Acheron". For that, Prydwen or Game8 are more useful: they give tier-list-style recommendations without requiring you to import your inventory.

And if you play casually and don't care about squeezing out the last 10-15% of damage, the time investment in scanning relics and configuring the optimizer doesn't pay off. Fribbels shines once you've done the basic progression and want to convert your inventory into real performance.

## How it works in practice

The initial flow takes 10-20 minutes the first time:

1. Open the web app or download the standalone version.

2. Import your inventory via OCR (take screenshots of your relics in-game and upload them) or connect via HoYoLAB API if your profile is public.

3. Verify the imported roster looks correct (review main stats and substats on a few pieces to confirm OCR accuracy).

4. Select the character you want to optimize.

5. Adjust filters and target metrics (allowed sets, minimum speed breakpoints, expected damage or EHP mode depending on the role).

6. Run the optimizer and review the top results.

7. Equip the recommended combination in-game.

Once your inventory is imported, re-optimizing any character takes seconds. The cost is in keeping inventory updated: when you farm new relics, plan to re-scan or re-import periodically.

## Honest limitations

**OCR isn't perfect**. Substats with similar values occasionally get confused, and critical pieces need manual review. HoYoLAB integration is more reliable when it works, but requires a public profile.

**Real learning curve**. The interface has many parameters and the first time can be intimidating. Defaults are reasonable but understanding what to change (and why) requires reading documentation or following a tutorial.

**The "optimum" depends on what you optimize**. Maximizing theoretical damage doesn't always maximize real gameplay damage. For characters with complex rotations or team-dependent damage, the optimizer's results are guidance, not absolute truth.

**Meta changes aren't automatic**. When a new set or character drops, community recommendations may take time to propagate. The optimizer respects the filters you set; it doesn't decide for you which sets to consider.

**Requires inventory maintenance**. If you stop updating your relics, recommendations become stale. There's no real-time sync with the game (HoYoverse doesn't expose that API).

**Web app can lag with very large inventories**. With 500+ relics imported, certain searches and optimizations take longer. The downloadable standalone version is faster in these cases.

## How to get started

You don't need to create an account or pay anything. Go to `fribbels.github.io/hsr-optimizer/` directly from the browser.

For your first session, recommendation:

1. Start by importing inventory via OCR screenshots (fastest way to try it) and verify the result looks correct.

2. Optimize your main DPS first, where the exercise pays off the most.

3. Before blindly trusting the optimizer, cross-check the results against the character's guide in Prydwen or KQM to confirm the setup makes sense in the current meta context.

4. Once you feel comfortable, extend the optimization to the rest of the roster.

If at some point the tool feels overwhelming, fall back to a simpler setup (Prydwen for general recommendations) and return to Fribbels when you need inventory-specific precision.
