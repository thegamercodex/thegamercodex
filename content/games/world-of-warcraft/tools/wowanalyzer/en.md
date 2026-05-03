---
title: "WoWAnalyzer"
description: "Automated spec-by-spec analysis of Warcraft Logs reports, with specific actionable suggestions about rotation, buff uptime, and cooldown usage. Open-source community project since 2017."
quickTake: "If Warcraft Logs tells you how far from the top you are, WoWAnalyzer tells you what to do about it. Per-spec coverage is uneven, but when there's an active module for your spec, it's the difference between 'my log says I lost 8% DPS' and 'you used this cooldown 12 seconds late three times'."
---

## What it is

WoWAnalyzer (wowanalyzer.com) is an open-source web service that takes Warcraft Logs reports and runs them through automated per-spec analysis modules. The output is a dashboard with prioritized issues: incorrect rotation, suboptimal talents for the encounter, dropped buffs, misaligned cooldowns.

The project started in 2017 as a community effort by players who wanted to turn logs into actionable feedback. The entire codebase lives on GitHub under AGPL-3.0 license and is maintained through individual contributions — each spec has one or more maintainers who update analysis rules with every balance change.

It doesn't require uploading anything new: WoWAnalyzer consumes logs already on Warcraft Logs via the public API. Paste the report link, pick the fight and player, and analysis appears in seconds.

## What problem it solves

Warcraft Logs gives you raw data and percentiles. But reading a log and knowing what to change is a skill: you need to understand your spec's optimal rotation, cooldown priorities, talent breakpoints, and compare them against your data. That's hours of work for a casual player.

WoWAnalyzer codifies that knowledge into rules. If your spec is well-supported, the analysis tells you things like "your Combustion was cast while Pyroblast Hot Streak was inactive: estimated ~28k DPS loss," or "you had 64% uptime on Slice and Dice, target is 95%." It reduces the gap between "I have a log" and "I know what to fix tomorrow."

For players who don't want to do deep theorycrafting but want to improve, it's the most direct tool in the ecosystem. For theorycrafters, it works as a sanity check on how a specific rotation actually performs in practice.

## The difference vs. Wipefest

Both read Warcraft Logs reports and produce automated analysis, but target different problems:

- **WoWAnalyzer**: focus on **individual DPS/healer/tank performance** — rotation, cooldowns, buffs, talents. Question it answers: "what did this player do wrong in their role?"
- **Wipefest**: focus on **mechanics and deaths** — who didn't dodge an AoE, which add wasn't interrupted, what mechanic frame was ignored. Question it answers: "why did the raid wipe?"

The two complement each other: WoWAnalyzer for individual post-raid review, Wipefest for raid-leadership review. A guild that runs both in parallel covers both dimensions.

## What people actually use it for

**Individual post-raid review**: paste your log, pick the boss, read suggestions ordered by impact. The top 3 usually explain 80% of the gap to the top of your spec.

**Identifying rotation errors**: the per-spec check suite catches out-of-order uses, missed cooldowns, dropped buffs. This is the tool's strongest case.

**Validating critical buff/debuff uptime**: each spec has buffs that need to stay at specific percentages. WoWAnalyzer lists them with target and actual, red if below.

**Comparing talents to better-performing builds**: the checklist module flags when a talent build doesn't fit the encounter (e.g., a single-target talent on an adds-heavy boss).

**Coaching for players new to a spec**: leveled your alt and don't know the rotation. A couple of logs in WoWAnalyzer give you the top gaps without requiring you to read a 5000-word guide.

## Who it's NOT for

- **Specs without a maintained module**: not all specs are equally covered. Some (Fire Mage, Holy Paladin, Blood DK) have deep analysis; others (Beast Mastery, or Augmentation Evoker on some patches) may be partially or out of date. If your spec doesn't have an active module, the tool gives generic feedback that adds little.
- **Mechanic or wipe analysis**: for "why did the raid die," Wipefest is the right pick.
- **Players who only want WCL numbers**: if all you want is percentiles and rankings, you don't need WoWAnalyzer — Warcraft Logs already covers it.

## How it's actually used

1. You have a log uploaded to Warcraft Logs (yours or your guild's).

2. Copy the report link (full warcraftlogs.com URL).

3. Paste it on wowanalyzer.com homepage.

4. The page loads the fight list. Pick the boss and the player to analyze.

5. WoWAnalyzer runs the modules tied to that spec. Wait 5-15 seconds.

6. The dashboard appears:
   - **Suggestions**: issues prioritized by impact.
   - **Statistics**: core metrics (buff uptime, casts, cooldown usage).
   - **Timeline**: visualization of critical events over time.
   - **Checklist**: bullet validations (correct rotation, appropriate talents, etc.).

7. Work the top suggestions. Re-log the next raid and compare progress.

## Honest limitations

**Uneven coverage by spec**: depends on community maintainers. Some specs have exhaustive modules updated with every hotfix; others go months without an update. Before relying 100% on the feedback, check when your spec's module was last updated on GitHub.

**Doesn't replace spec guides**: if you're brand new to a spec, WoWAnalyzer tells you "you're missing X uptime" but doesn't teach the rotation from scratch. Pair it with Icy Veins / Method / Archon guides.

**False positives on unique encounters**: certain bosses have mechanics that break the optimal rotational pattern (forced movement, transitions). The analysis sometimes flags as "error" what was actually correct execution given the context. Read with judgment.

**Only Retail with full coverage**: Classic and SoD are partially supported but the project's main focus stays on Retail.

**Doesn't analyze Mythic+ fights**: although you can upload an M+ log to WCL, WoWAnalyzer's analysis is optimized for raid boss fights, not keys.

**Improvable UI**: although functional, the interface is dense. Finding the right suggestion sometimes requires browsing several tabs.

## How to get started

1. Open [wowanalyzer.com](https://wowanalyzer.com).

2. Paste a link to your public Warcraft Logs report.

3. Pick the first boss of the raid where you played DPS/healer/tank and select your character from the list.

4. Read the top 3 suggestions. That's your task list for next raid.

5. If you want to contribute or report bugs, the GitHub repo ([WoWAnalyzer/WoWAnalyzer](https://github.com/WoWAnalyzer/WoWAnalyzer)) accepts PRs and issues. Specs without an active maintainer always look for volunteers with deep game knowledge.
