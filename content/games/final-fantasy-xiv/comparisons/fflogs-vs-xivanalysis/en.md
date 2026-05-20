---
title: "FFLogs vs XIVAnalysis — which parser to use and for what"
description: "FFLogs is the public archive with rankings; XIVAnalysis is the automated interpreter that tells you what to improve. Use-case comparison."
---

FFLogs and XIVAnalysis are the two most-used FFXIV combat analysis tools, but they solve different problems. Confusing them is common: both take combat logs, but practical utility diverges sharply. This comparison aims to clarify when to use which.

## Each one's role in the ecosystem

**FFLogs** is the public log repository. Your log gets uploaded here (via ACT + FFLogs Uploader), stored, and made visible in cross-server rankings. It's the historical archive of FFXIV's raid scene: any Savage or Ultimate kill has its log uploadable to FFLogs, and the site normalizes that into competitive percentiles. Operated by Warcraft Logs LLC.

**XIVAnalysis** is a layer on top of FFLogs. It takes a FFLogs fight link, processes it client-side, and returns an automated analysis with per-player suggestions: "you missed 3 GCDs of buff window", "your opener has X timing off", "you didn't align Embolden with your party comp". No login, free, open source.

The clearest metaphor: **FFLogs is the medical record; XIVAnalysis is the doctor reading it and telling you what to do**. Both are necessary.

## When FFLogs dominates

**Competitive ranking**. FFLogs has the only universal metric of "how well you played compared to everyone else". If you want to know if your BLM on M11S is at the world level, FFLogs gives you the percentile. XIVAnalysis doesn't do rankings — it only tells you if you followed the canonical rotation.

**Recruitment and scouting**. When a static lead evaluates an applicant, they ask for the FFLogs link, not the XIVAnalysis one. The public profile shows consistency, which bosses are cleared, which jobs they play, and at what level. XIVAnalysis doesn't store profiles or history — it's per-log.

**Party-level buff alignment analysis**. FFLogs shows the full timeline with all 8 players' buffs visible simultaneously. If you want to see whether your Embolden aligned with NIN's Trick Attack, FFLogs shows it side-by-side. XIVAnalysis focuses per player; cross-party alignment is less developed.

**Fight strat investigation**. You want to see how top groups in the world race killed M12S. You go to FFLogs, filter top 10 logs, see their full cast sequence and deduce strats. That function is FFLogs-exclusive.

## When XIVAnalysis dominates

**Actionable plain-language feedback**. FFLogs shows your DPS was p45 — XIVAnalysis tells you why. The difference between "I'm mediocre" and "I lost 4 GCDs of Manafication before Embolden" is huge for improving.

**Learning without being a theorycrafter**. For players just entering Savage, reading raw FFLogs is overwhelming. XIVAnalysis translates that to "do X, don't do Y", prioritized by severity. It dramatically speeds up the learning curve.

**Asynchronous coaching**. A mentor sends you the XIVAnalysis link, says "check suggestions 2 and 4". Faster than "open FFLogs, go to damage done tab, filter by X, compare it with Y", which would require an expert mentor.

**Fast validation of a new rotation**. You try an opener variant. XIVAnalysis tells you whether you broke the basic rules. FFLogs shows you the DPS result, but not whether it was due to the rotation or circumstance.

## The real combined flow

A serious raider uses both in sequence:

1. **Savage pull** → ACT captures the log → it uploads to FFLogs.
2. **FFLogs**: review the percentile to place yourself. p30? Lots to improve. p85? Mostly fine, fine-tuning left.
3. **XIVAnalysis**: paste the FFLogs link, see prioritized suggestions. Implement the 2-3 most impactful for the next pull.
4. **Back to the pull** → next log → repeat.

FFLogs is the gauge; XIVAnalysis is the coach. Confusing one for the other is losing half the benefit.

## Honest limitations of each

**FFLogs** has a Free tier sufficient for casual use, but advanced filters (cross-region search, replay, detailed comparison) require Premium ($4/month). For consistent raiders it's justified; for casuals it's not necessary. Also, FFLogs depends on ACT which is Windows-only, and parse culture can be toxic in some communities.

**XIVAnalysis** depends on FFLogs (can't be used standalone) and per-job coverage is uneven: popular jobs have detailed modules, niche jobs have less. After a major job rework, the relevant module can take weeks to update. And suggestions are generalist — they don't understand fight context (a GCD lost to forced movement is reported the same as one due to error).

## Editorial verdict

It's not a binary choice. If you raid Savage or Ultimate and want to improve, **you need both**. The right question isn't "which one", but "for what question do I go to each":

- "How am I compared to the world?" → FFLogs.
- "Why am I at that percentile?" → XIVAnalysis.
- "Who plays well enough to invite to the static?" → FFLogs.
- "How do I improve my next pull?" → XIVAnalysis.

The modern raider stack is: ACT (capture) → FFLogs (archive + ranking) → XIVAnalysis (feedback). The three are distinct pieces of the same workflow.
