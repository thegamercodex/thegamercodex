---
title: "MD✦C Calculator"
description: "Minimalist damage calculator for Honkai: Star Rail. Single screen with character, light cone, relics, buffs and enemy to get the direct damage number."
quickTake: "For quick delta validation (is 8% more crit damage worth what?), MD✦C is faster than opening all of Fribbels. A one-job tool, done well."
---

## What it is

MD✦C Calculator is a free web app that computes theoretical damage for specific skills in Honkai: Star Rail. You pick a character, light cone, relic set, active buffs and an enemy, and the app returns the damage that skill would deal under those conditions.

The interface is deliberately minimalist: everything fits on a single screen. No tabs, no multi-step flows, no account setup. The idea is that you can run a calculation in under a minute and compare two scenarios quickly.

It doesn't require login or importing your account. You configure inputs manually each time, which sounds tedious but in practice is the trade-off for speed and simplicity.

## What problem it solves

As you farm relics, constant questions appear like "this piece has 8% more crit damage but 12% less atk, is the swap worth it?". Answering by intuition is treacherous because multipliers aren't linear.

The rigorous way is to calculate. Fribbels does this, but opening Fribbels for a one-off question is overkill: you have to wait for sync, navigate to the character, adjust and compare. For a quick decision it's many clicks.

MD✦C solves that specific case. You open the page, configure the character with their current stats, simulate the change you're considering, see the damage delta. Ten seconds. Then close the tab and go back to the game.

## Differentiation (vs similar-cluster tools)

Fribbels' integrated damage calculator is more complete: it works with your real inventory, has a math optimizer, considers complex rotations. For deep analysis of a character, Fribbels wins.

MD✦C plays a different game: it's the one-job tool. Calculate the damage of a skill under certain conditions, without needing to have an account imported or configure a workflow. The single-screen UI is precisely because it doesn't want to be a suite, it wants to be a calculator.

Another way to see it: Fribbels is Excel with macros for your portfolio, MD✦C is the pocket calculator to add up the restaurant bill. Both add up but solve different problems.

## What people use it for

**Validating substat trade-offs before upgrading**: you have one piece with HP% and another with atk%. You configure both scenarios in MD✦C and see which hits harder for your current build.

**Comparing available light cones for a character**: you try two or three light cones quickly and see which generates more damage with your current setup.

**Estimating the impact of a specific buff or debuff**: you want to know how much Pela adds with her def shred. You calculate with and without Pela and see the difference.

**Verifying guides before following their recommendations**: a guide says "this set hits 15% more than the alternative". You confirm yourself with your real stats before spending weeks of farming.

**Learning how damage is composed**: seeing the inputs separated (base atk, skill mult, crit, dmg%, def, resist) helps internalize the formula. Useful especially if you're just starting with theorycrafting.

## Who this tool isn't for

If you've never asked stat optimization questions and just want to know which team to use, MD✦C isn't relevant. It's meant for those already deep in the details.

If you want to analyze full rotations with energy and skill points, MD✦C calculates point damage for one skill at a time. For full rotation analysis you need Fribbels or dedicated spreadsheets.

If manually entering stats annoys you, this tool will be frustrating. Manual configuration is central to its design. Whoever wants everything automatic should use Fribbels from the start.

## How it works in practice

1. Go to `hsr-mdc.vercel.app` from your browser.

2. Select the character and the skill you want to calculate.

3. Choose the equipped light cone and its superimposition.

4. Configure the relic set (4-pc and 2-pc) you have or are considering.

5. Manually enter the character's final stats (atk, crit rate, crit dmg, dmg%, etc.). You can read them from the game or from Enka.

6. Activate the buffs and debuffs that match your team comp.

7. Configure the enemy: level, defense, resistances, weakness.

8. Look at the damage number it returns and, if you want to compare, change an input and see the delta.

9. For "is it worth swapping X for Y" questions, calculate the current scenario and the alternative and subtract the results.

## Honest limitations

**Manual stat input**: you have to enter atk, crit rate, crit dmg and so on each time. No sync with your account. For repeated use this gets tedious.

**Skills separately, not full rotation**: it calculates one skill at a time. If you want total damage from a rotation (basic + skill + ultimate combined), you have to add each calculation manually.

**Doesn't consider every niche buff**: covers the main buffs but some very specific effects from high eidolons or rare synergies may be simplified or absent.

**Hosted on Vercel without SLA**: it's a free project hosted on the free plan. If the dev abandons it or the domain expires, it disappears without warning. As with any non-official tool.

**No login means no saving**: you can't save setups to reuse later. Each session starts from scratch.

**The formula may lag a patch or two**: when HoYoverse changes something in damage calculation (rare but it happens), the app can take days to adjust.

## How to get started

No installation or registration required. Go to `hsr-mdc.vercel.app`, pick a character and start configuring.

The most efficient way to use it is having a second tab with Enka.Network open. That way you copy your real character's stats from Enka and paste them into MD✦C without having to look at your inventory inside the game.

For recurring questions (like "what happens if I swap X stat for Y"), it helps to write down the base results in a separate file. The app doesn't save history and each session starts clean.
