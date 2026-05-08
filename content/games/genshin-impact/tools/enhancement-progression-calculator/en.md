---
title: "Enhancement Progression Calculator"
description: "Official HoYoverse calculator that computes exactly how many materials, mora, hero's wit, and resin you need to level characters, weapons, and talents from current to target level."
quickTake: "If you struggle planning weekly farms or don't know how much resin to spend before the next banner, this is the official math without community estimates. Account integration makes it more precise than third-party tools."
---

## What it is

Enhancement Progression Calculator is the official Genshin Impact calculator inside HoYoLAB. It lets you select one or several characters, their weapons and their talents, specify current level and target, and returns the exact list of materials needed to reach the goal.

The differentiating feature: if you have your account linked, it reads your in-game inventory and tells you not just "you need 60 Cor Lapis" but "you're 23 Cor Lapis short". It also calculates total resin, total mora, hero's wit, and mystic enhancement ore.

It's web-based, free, and supports HoYoLAB's 15 languages including English.

## What problem it solves

Genshin has a dense progression system: each character requires ascensions (every 20 levels starting at 20), each talent has 10 levels requiring specific materials from weekly boss and talent books, and each weapon has its own ascension path.

Multiplied by 60+ characters in a typical roster, planning "how much do I need to save to take Furina to 90" without a tool gets exhausting. Adding weapons and talents, you easily spend 30+ minutes doing math on a spreadsheet.

Enhancement Calculator does that in 30 seconds. You tell it where each thing is and where you want to get, and it tells you total resin, total mora, specific missing materials, and required boss runs.

## Differentiation vs community calculators

Genshin Center, Paimon.moe and other community calculators offer similar functions with more polished UX. The key difference of Enhancement Calculator: **it reads your real inventory**. Genshin Center asks you "how many Cor Lapis do you have?" and you have to enter it manually. Enhancement Calculator reads it directly from your account.

Recommendation: use Enhancement Calculator when you want absolute precision on what you're missing today, Genshin Center/Paimon.moe when you want to plan several characters in the future with friendlier UI.

## What people use it for

**Planning farms for upcoming banner**: you want Furina at 90 with all talents at 9 before her banner closes. The calc tells you how many boss runs (resin) and how much mora you need. You decide if time allows.

**Deciding whether to go to 80 or 90**: the 80→90 difference is huge in cost (mora, hero's wit, ascension materials). The calc shows you that delta to decide consciously.

**Comparing costs of multiple level 90 candidates**: you have 3 characters you want to level but can't afford all. The calc shows you each one's cost and you prioritize based on available resin/materials.

**Calculating total talent upgrades for a team**: your 4-character team with all talents at 9 costs X talent books and Y weekly boss materials. Vital to not run out of progress mid Spiral Abyss season.

**Planning talent domain runs**: each domain drops specific talent books based on day of the week. Knowing how many books you need tells you how many days to farm, and which days.

## Who this isn't for

If you only leveled 1-2 characters and intuitively understand how much you need, the overhead of logging in and configuring isn't worth it. If you prefer more visual UI with multi-character planning on a single screen, Genshin Center is more comfortable. If you play Genshin from multiple accounts (different servers), the official calc requires switching between accounts and gets complicated.

## How it's used in practice

1. Go to `act.hoyolab.com/ys/event/calculator-sea/index.html` with your account logged in.

2. Link your Genshin account if you haven't yet (it prompts automatically).

3. Choose the character. It shows the current level read from your account. Enter target level.

4. Repeat for weapon and the 3 talents (Normal Attack, Elemental Skill, Burst).

5. Click "Calculate". It shows the materials list with how much you need and how much you're short based on current inventory.

6. (Optional) Click each material for it to show where it farms (zone, boss, domain, day).

## Honest limitations

**Requires linked account for maximum utility**. Without login, you can calculate but it doesn't read your inventory, which loses the official tool's biggest advantage.

**Doesn't plan multi-character in one view**. You only calculate one character + weapon + talents at a time. To plan 5 characters simultaneously you have to open 5 tabs or do it sequentially. Genshin Center and Paimon.moe handle this better.

**Web-only, no dedicated mobile app**. The HoYoLAB app has the calculator but the UX on mobile is cramped. PC/tablet recommended for serious use.

**Doesn't consider artifacts in calculation**. It only calculates leveling/ascension/talents, not artifact farming. If you plan "complete build at 90 with farmed artifacts", the calc covers only the first part.

**Balance updates may not reflect instantly**. When HoYoverse changes talent costs (rare but happens), the calc can have hours/days of delay updating. Always cross-check with official patch notes.

**No "future planning" function**. The calc tells you what you need today to reach a target. It doesn't help you decide "if I farm X days for 3 weeks, will I make it?". For that you need another tool with temporal planning.

## How to get started

Go to `act.hoyolab.com/ys/event/calculator-sea/index.html` with your HoYoverse account linked to Genshin. If you've never linked your account, the calc takes you to setup first.

For your first use, I recommend: try it with a character you're currently leveling. Choose the character, current level appears automatically, set target 80 (or 90 if you have materials). Compare what the calc says with your intuition of "how much am I short?". After 1-2 characters, you know exactly how to read the outputs.

For recurring use: when an upcoming banner is announced, plan right there what you want to have when it drops. It gives you a concrete resin spending plan for the next 2-3 weeks.
