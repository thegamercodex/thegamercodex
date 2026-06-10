---
title: "MH Wilds Calculator"
description: "Open-source damage calculator for Monster Hunter Wilds that models the full formula to compare weapons, sets, and skills with precision."
quickTake: "The calculator for theorycrafters. It's open-source and models the real formula; if you want to know with numbers whether one set hits harder than another, this is the honest tool."
---

## What it is

MH Wilds Calculator is a web damage calculator, free and open-source (MIT license, code on chanleyou's GitHub). It models Monster Hunter Wilds' damage formula—motion values, raw, element, affinity, sharpness, and the relevant skills—so you can compare weapons, sets, and combos with numbers instead of intuition. Being open-source, the community can verify and correct the math.

## The problem it solves

"Does this set hit harder than the other?" is a question the game won't answer. You swap a skill and don't know if damage went up or down, or by how much. The calculator makes the formula explicit: you input your setup and get a number you can compare against another setup, removing the guesswork from theorycrafting.

## Differentiation

Against Math Hunter, which is very strong at explaining the theory and giving meta summaries, MH Wilds Calculator is the pure interactive tool: you input values and compare. Its big edge over any closed alternative is that it's open-source—you can audit exactly how it computes, open an issue if something doesn't add up, or run it locally.

## What people use it for

- **Comparing two sets**: seeing with numbers which performs better before farming the pieces.
- **Evaluating skills**: measuring the real contribution of leveling Attack Boost vs Weakness Exploit.
- **Comparing weapons**: estimating the relative damage of two weapons with equivalent setups.
- **Verifying claims**: checking whether a video's "optimal build" actually is.

## Who it isn't for

If you're new, the number of inputs (motion values, hitzones) can be intimidating—better to first understand the theory with Math Hunter or a guide. If you want the set built for you, this isn't a builder. And if you prefer a tool with official support and guaranteed maintenance, remember it's a community project.

## How it's used in practice

1. Open mhwilds-calculator.netlify.app.
2. Pick a weapon and input your raw, affinity, element, and sharpness.
3. Enable your set's skills.
4. Select the motion value of the combo you want to measure.
5. Compare the result against another setup by changing one variable at a time.

## Honest limitations

- **High entry curve**: requires understanding what a motion value and hitzone are to use it well.
- **Community maintenance**: after a big patch, the formula may lag until someone corrects it.
- **No guides**: it gives numbers, not editorial context.
- **English only**: unlocalized interface.

## How to get started

Go to mhwilds-calculator.netlify.app, pick your weapon, and input the basic stats. Start by comparing two sets with a single difference to see how damage moves. The code is on GitHub if you want to review the formula.
