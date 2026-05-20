---
title: "Final Fantasy Logs"
description: "Combat log web service for FFXIV: upload your log, see rankings, compare your parse against others, and break down performance action by action. Operated by Warcraft Logs LLC, the same company behind WCL."
quickTake: "FFLogs is the undisputed dominant FFXIV parser. If you raid Savage or Ultimate and want to improve, you'll live here: review your log post-pull, see where you lost DPS, and compare against the top rank of your job. Free for basic use; Premium ($4/month) unlocks advanced filters that any serious raider ends up paying for."
---

## What it is

FFLogs (fflogs.com) is the FFXIV combat log web service operated by Kihra and Warcraft Logs LLC, the same company behind Warcraft Logs. Launched in 2017, it quickly became the standard of FFXIV's raid scene: if you play Savage or Ultimate and want to compare performance, FFLogs is where the data lives.

The flow: you run ACT with the FFLogs plugin, finish an encounter, and it uploads automatically; or you upload a .log file manually. The system parses the combat and gives you a full breakdown:

- **DPS / HPS / DTPS** for the encounter and per player.
- **Percentile ranking** vs all logs of the same encounter/job worldwide.
- **Buff analysis**: did you align your burst windows with party buffs?
- **Mechanic analysis**: who died, who failed which telegraph?
- **Cast bar timeline**: every GCD and oGCD you used, with timestamp.

The free tier covers the basics. **Premium ($4/month or $40/year)** unlocks advanced filters, search by player name cross-region, fight replays, and side-by-side comparison.

## What problem it solves

Without FFLogs, evaluating your Savage performance is subjective: "I feel like I played well" is not useful feedback. The questions that matter:

- Is my DPS aligned with what's expected of my job on this boss?
- Did I miss buff windows? Which pulls had me a GCD ahead or behind on a critical cast?
- Am I dying to avoidable mechanics, or is the issue the rest of the party?

FFLogs gives you hard data to answer. You compare your pull against the 95th percentile of the same job and see exactly where you lost DPS: maybe you're a missing an oGCD per minute, or your opener loses 2 GCDs vs optimal.

For raid leaders, FFLogs is the scouting tool: before inviting someone to static, you review their logs. For world race, FFLogs is where the kills get published and top teams' progress is measured.

## How it differs from XIVAnalysis and ACT

- **FFLogs**: the public log repository with cross-server rankings and comparisons. It's the historical archive and the competitive measuring stick.
- **XIVAnalysis**: automated analyzer that takes your FFLogs upload and tells you what you did wrong with actionable suggestions ("you used 12 Hypercharges, you could have used 13").
- **ACT**: the desktop client that captures combat in real time, shows overlays, and uploads logs to FFLogs.

The three are used together: ACT captures, FFLogs stores, XIVAnalysis interprets. FFLogs is the hub.

## What people actually use it for

**Audit your own progress**: post-pull, open your log and look at where the DPS went. Buff alignment? Mechanics that forced you to lose GCDs? Broken rotation?

**Scouting competition**: in Savage world race, you check the top teams' logs to understand their strats and boss-specific rotations.

**Filter to apply to static**: raid leaders ask for "FFLogs link" before inviting. Your orange/purple parses on the job you'll be playing are your résumé.

**Validate theorycraft**: a job lead from The Balance proposes a new rotation; top parses on FFLogs confirm or deny if it works in practice.

**Coaching and mentorship**: a mentor reviews your log with you and points out lost GCDs, misaligned oGCDs, suboptimal decisions. It's objective feedback.

## Who it's NOT for

- **MSQ players and casuals**: if you don't raid Savage/Ultimate, FFLogs offers nothing. A Wanderer's Palace HM parse has no rank and teaches nothing.
- **PvP-only**: FFLogs is PvE exclusively.
- **Crafters / gatherers**: it's a combat parser, doesn't apply.
- **People allergic to parse culture**: FFLogs created (or amplified) a "parse or nothing" culture some find toxic. If measuring every pull stresses you out, consider whether you need it.

## How it's actually used

1. Install **ACT (Advanced Combat Tracker)** and the **FFLogs Uploader plugin** from the ACT ecosystem.

2. Configure ACT to capture the FFXIV log (network parser).

3. Log into fflogs.com and link your Lodestone character.

4. Enter the encounter (Savage / Ultimate / Extreme).

5. When the pull ends, ACT uploads automatically. Takes 30-60 seconds to appear in your profile.

6. Open the log on fflogs.com. The default view is "Damage Done". Additional tabs: Healing, Damage Taken, Buffs, Cast Sequence, Events.

7. Compare your parse: click your job in the fight's ranking and see where you stand vs the 50th, 75th, 95th, 99th percentile.

## Honest limitations

**Toxic parse culture**: the obsessive metric can turn raiding into a numbers prison. Reports of parse-based gatekeeping and elitism are common. Personal decision how much you let it affect you.

**Limited free tier**: advanced filters (cross-region search, replay, detailed comparison) require Premium. Casual use the free tier is enough; serious raid eventually pays for itself.

**Requires ACT on Windows**: no official solution on macOS / Linux. Workarounds via Whisker/Wine exist but are fragile. Square Enix doesn't formally tolerate ACT, though they allow it in practice.

**Doesn't analyze healers in depth**: healer metrics (HPS, mitigation timing) are less mature than DPS. The healer optimization meta is discussed more on The Balance than on FFLogs.

**Rank quality depends on job pool**: jobs with low representation (competitive Astrologian, pre-rework Black Mage) have small-sample rankings and volatile percentiles.

## How to get started

1. Install ACT (advancedcombattracker.com) and the FFLogs Uploader plugin.

2. Create an account on fflogs.com. Link your Lodestone character.

3. Run your first Savage / Extreme with ACT active. Verify the log uploads.

4. Open the log and explore the UI. The learning curve is real — at first the breakdowns feel overwhelming.

5. Compare your parse to the 50th percentile of your job. Identify the 2-3 most obvious things to improve (unused oGCDs, missed buff windows).

6. For automated analysis without interpreting manually, run your logs through XIVAnalysis.

7. Premium pays off once you're raiding consistently and want advanced filters or cross-region search.
