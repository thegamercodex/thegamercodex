---
title: "Wipefest"
description: "Web service that takes Warcraft Logs reports and rewrites them through a mechanics lens: who failed which event, how many players ate an AoE, which add was left uninterrupted, what caused each wipe."
quickTake: "If you're a raid leader and you want to know why the raid wiped instead of who did low DPS, Wipefest is the tab you open first. It turns the log into a navigable mechanic-failure report player by player."
---

## What it is

Wipefest (wipefest.gg) is a web service that consumes Warcraft Logs reports and produces an analysis focused on boss mechanics and wipe causes. Unlike WoWAnalyzer, which centers on individual rotational performance, Wipefest focuses on what happens in the encounter at the raid level: which player ate an avoidable mechanic, how many AoE charges landed, which add wasn't interrupted in time, and what chain of events ended in a wipe.

The site maintains a curated catalog of trackable events per current-tier boss (Midnight 12.0.x at the time of writing). Each encounter has a list of trackable mechanics — Wipefest extracts them from the log and shows them in a table format with timestamps, affected players, damage taken, and outcome.

It's free for public logs. Doesn't require uploading anything new: Wipefest consumes the Warcraft Logs API directly.

## What problem it solves

When a raid wipes, the immediate question is: why? Warcraft Logs has the data but requires browsing Damage Taken, Deaths, and Events tab by tab to reconstruct the sequence. For a raid leader under post-pull pressure, that's slow.

Wipefest reframes the problem: by default, it opens the encounter with the critical mechanics pre-identified. "Comatose Curse landed 4 times without dispel," "Player X took Detonating Slash at 0:42 and died 3 seconds later," "Tank had no cooldown active when Smolder hit." That turns an hour-long debrief into fifteen minutes.

For Mythic progression guilds, the separation between WoWAnalyzer (what you do wrong) and Wipefest (what the raid does wrong) is usually very clean: one looks at individual mirrors, the other at collective execution.

## The difference vs. WoWAnalyzer

Same input (Warcraft Logs), different lens:

- **WoWAnalyzer**: "what did this player do wrong in their role?" Rotation, cooldowns, talents, buffs.
- **Wipefest**: "why did the raid die in this pull?" Mechanics, deaths, AoE damage taken, dispel coverage.

A Mythic guild would be foolish to use only one. WoWAnalyzer fixes 95% of DPS lost to rotational mistakes; Wipefest fixes 95% of wipes from avoidable mechanics. The separation is clean and both live on top of the same Warcraft Logs data.

## What people actually use it for

**Immediate post-wipe debrief**: the raid leader opens Wipefest, sees the event list of the last pull, and identifies which mechanic failed and who failed it. This replaces the "I don't know what happened, can someone check the log" conversation with actionable data.

**Individual mechanic coaching**: when a player consistently eats avoidable AoE, their character page in Wipefest shows the pattern across pulls. Useful for approaching feedback specifically.

**Identifying roles that need reinforcement**: low dispel coverage, missed interrupts, late off-heals — Wipefest lists them per player. A raid leader can see whether the problem is raid coordination or a specific player.

**Validating strategy changes**: you try a new strat for a mechanic (e.g., changing who dispels Comatose Curse). Compare two pulls in Wipefest and objectively see if coverage improved.

**Pre-raid prep**: reading the boss page on Wipefest before the raid identifies critical mechanics and events the raid should track.

## Who it's NOT for

- **Individual DPS/HPS/threat performance**: WoWAnalyzer and Warcraft Logs cover that better. Wipefest doesn't analyze rotation.
- **Mythic+**: the event catalog is optimized for raid bosses. M+ has more limited coverage.
- **Old / pre-current-tier encounters**: the set of tracked mechanics is updated with the current patch. Older encounters may have partial or outdated coverage.
- **Players who aren't raid leaders or officers**: if you're not leading, Wipefest's data is sometimes more detail than you want. For your own individual review, WoWAnalyzer is more direct.

## How it's actually used

1. Your guild raids and uploads logs to Warcraft Logs.

2. Copy the report link.

3. Paste it on wipefest.gg's homepage (or browse directly: `wipefest.gg/report/{report-id}`).

4. Wipefest loads the boss list from that raid. Click the one you want to analyze.

5. The encounter page appears with tabs:
   - **Events**: chronological list of critical boss events.
   - **Players**: each player with their mechanic failures and damage taken per event.
   - **Comparisons**: if you have several pulls of the same boss, side-by-side comparison.

6. For quick post-wipe review: open Events, sort by damage taken or death, and reconstruct what mechanic failed near the wipe.

7. For individual coaching: open Players, pick a character, and see the list of events where they took avoidable damage.

## Honest limitations

**Uneven boss coverage**: the Wipefest team keeps current-tier bosses up to date (with good precision), but older-tier bosses have inconsistent coverage. If your guild farms older content, some mechanics may not be tracked.

**Doesn't replace strategy**: Wipefest tells you which mechanic failed, but doesn't explain the correct strat. That requires combining with written guides (Icy Veins, Method) or video.

**Reading curve**: event names come from the log, which uses internal spell names. First time you open a new boss, you need to learn which mechanic is which.

**Retail only**: Classic, SoD, and Hardcore are not covered.

**Event catalog can have gaps**: occasionally a brand new mechanic from the current patch isn't tracked until a contributor adds it. Updates are reasonable but not instant.

**Doesn't analyze damage-less events**: mechanics that don't cause direct damage (visual debuffs, movement mechanics without penalty) are harder to track. Wipefest leans heavily on damage events.

## How to get started

1. Open [wipefest.gg](https://www.wipefest.gg).

2. Paste a link to your public Warcraft Logs report.

3. Pick a boss where your raid wiped. Those are the most informative ones for learning the tool.

4. Go to the Events tab, sort by timestamp, and reconstruct the seconds before the wipe.

5. If you're a raid leader, make it part of the post-raid workflow: 10-15 minutes in Wipefest after each progression night.
