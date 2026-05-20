---
title: "XIVAnalysis"
description: "Automated FFLogs analyzer that detects rotation issues, buff alignment problems, and missed oGCDs, with actionable per-job suggestions. Open source, free, no login required."
quickTake: "XIVAnalysis is the perfect complement to FFLogs for anyone who doesn't want to interpret logs manually: paste the link, it tells you exactly what you did wrong in plain English. Ideal for improving without becoming a theorycrafter, though its suggestions are less deep than The Balance's."
---

## What it is

XIVAnalysis (xivanalysis.com) is an automated FFXIV combat log analyzer maintained open source on GitHub (`xivanalysis/xivanalysis`). The project started in 2018 and is maintained by a community of devs who write job-specific modules — each job lead defines the rules of what counts as "well played" in their rotation.

The flow is trivial: paste a FFLogs link into xivanalysis.com, the site processes it, and returns a per-player report with:

- **Suggestions**: concrete things you did wrong or could optimize.
- **Errors**: flagrant rotation violations (cooldown drift, unused oGCDs, dropped buffs).
- **Timeline**: visualization of the fight with your actions, party buffs, and mechanics.

It's **free and login-free**. Open source on GitHub, AGPL-3.0 license.

## What problem it solves

FFLogs shows you **what happened** (DPS, percentile, casts). XIVAnalysis tells you **why** and **how to fix it**.

After a mediocre pull, FFLogs says "you're at p45". XIVAnalysis says "you lost 3 GCDs of buff window on Embolden, didn't use Manafication before the raid buff window, your Verflare/Verholy procs were misaligned". The first is a diagnosis; the second is a treatment.

For players who are just starting to optimize, this lowers the entry barrier massively. You don't have to read 40 pages of The Balance to understand what you did wrong — XIVAnalysis tells you directly.

## How it differs from FFLogs and ACT

- **FFLogs**: the public repository with rankings and raw data. It's the archive.
- **XIVAnalysis**: the automatic interpreter that takes that data and turns it into actionable feedback.
- **ACT**: the real-time capture during combat.

XIVAnalysis doesn't replace FFLogs — it depends on it. But for post-pull analysis aimed at improvement, it's more useful than raw FFLogs.

## What people actually use it for

**Self-review post-Savage**: finish a pull, upload to FFLogs via ACT, paste the link into XIVAnalysis, read the top 5 suggestions, internalize them for the next pull.

**Asynchronous coaching**: a mentor sends you the XIVAnalysis link of your log and says "check the suggestions at slots 2 and 4." More efficient than manual interpretation.

**Validate a new rotation**: you try a variant rotation for your job. XIVAnalysis tells you whether you broke basic rules or actually pulled it off.

**Audit party members**: in a static, the raid leader runs everyone's logs through XIVAnalysis and identifies patterns (e.g., the SMN consistently loses their 2-minute window).

## Who it's NOT for

- **Serious theorycrafters**: XIVAnalysis suggestions are useful but **not exhaustive**. For edge cases, alignments with unique party buffs, fine optimization — you need The Balance.
- **Players of poorly-maintained jobs**: some jobs have a better XIVAnalysis module than others. If your job lacks an active maintainer, suggestions might be behind the current patch.
- **Healers seeking deep mitigation analysis**: the healing module in XIVAnalysis is simpler than the DPS one. For detailed healer optimization, The Balance is better.
- **Anyone who wants to learn by manual analysis**: if you want to understand the fight yourself (vs a bot telling you), prefer raw FFLogs + The Balance docs.

## How it's actually used

1. Upload your log to FFLogs (with ACT, post-pull).

2. Copy the link to your specific fight (not the full report).

3. Paste it into xivanalysis.com. The site processes for a few seconds.

4. Result: list of players. Click your name.

5. Review the tabs: **Suggestions** (sorted by priority), **About** (job overview), **Timeline** (visualization), and job-specific modules (e.g., "Mages" for BLM, "Sword Oath" for PLD).

6. Each suggestion has a severity (info / warning / major). Prioritize majors and warnings first.

7. Re-read the suggestions and go into your next pull with those points in mind.

## Honest limitations

**Uneven job coverage**: popular jobs (BLM, SAM, DRG, MCH) have very detailed modules; less-played jobs (PLD, GNB, AST in healer comp) have less coverage. Your job's module may be 1-2 patches behind the meta.

**Generalist, not contextual suggestions**: XIVAnalysis doesn't understand fight context ("you lost DPS because the boss jumped to the other platform"). It flags "lost GCD" without knowing if it was forced or voluntary.

**Doesn't detect everything**: subtle errors (aligning your burst with the wrong party buff window, suboptimal positioning in AoE) don't show. XIVAnalysis covers ~70% of common errors, not 100%.

**Depends on FFLogs**: if your log isn't on FFLogs, you can't use XIVAnalysis. And that requires ACT, which is Windows-only.

**Updates depend on contributors**: when a major job rework drops, the XIVAnalysis module can take weeks to update. In the meantime, suggestions may be out of date.

## How to get started

1. Upload a recent fight log to FFLogs via ACT.

2. Copy the direct fight link (URL ends with something like `/reports/abc123#fight=5&type=damage-done`).

3. Paste it into xivanalysis.com and hit Enter.

4. Wait a few seconds. The site processes the log locally in your browser (no upload, fully client-side).

5. Click your name in the player list. Go to **Suggestions** first.

6. Implement the 2-3 highest suggestions in your next pull. Don't try to fix everything at once.

7. If you want to contribute or report a bug, the GitHub repo is active and accepts PRs (especially for job modules with thin coverage).
