---
title: "Etro"
description: "Best-in-Slot builder for FFXIV with automatic optimal materia melding, per-job stat comparison, and shareable build links."
quickTake: "Etro is the BiS planner the entire raiding community adopted. When a new tier drops, The Balance job leads publish BiS sets as Etro links and everyone follows them. Simple, free, and maintained by its creator Eltharyon with fast patch-cadence updates."
---

## What it is

Etro (etro.gg) is a web-based BiS planner for FFXIV maintained by Eltharyon. Launched during Shadowbringers (2019), it became the de facto standard for building and sharing gear sets when it replaced older planners like Ariyala's.

The flow: pick your job and level, assign each gear slot (head, chest, hands, etc.), choose your food and potion grade, and Etro automatically calculates:

- **Final stats** of the build (Crit, DH, Det, SkS/SpS, etc.).
- **Optimal materia melding** to hit the next breakpoint without overcap.
- **Damage / sustain estimates** per job.
- **GCD speed tier** and reachable breakpoints.

Share the build with a permanent link. A party member opens the link and sees the exact same build — they can clone or modify it.

Free. No login required to view builds; login required to create and save your own.

## What problem it solves

FFXIV gear has multiple sub-stats and speed/Crit/Determination breakpoints are specific. Deciding which materia to meld, which food to use, and which pieces to prioritize requires calculation. Doing it manually in a spreadsheet is viable but tedious.

Etro automates all that:

- Calculates breakpoints without opening Akhmorning for formulas.
- Compares two builds side by side and tells you which is objectively better.
- Allows sharing builds between party members via link instead of screenshots.
- Auto-updates each new patch: gear, materia tiers, available food.

For Savage raid where optimizing BiS adds 1-3% DPS, this level of care is the difference between consistent clears vs wipes at the enrage.

## How it differs from Ariyala's FFXIV Toolkit

Ariyala's was the dominant planner until 2019. Etro replaced it because:

- Cleaner, more modern UI.
- Automatic melding (Ariyala's required manual melding).
- Reliable permalinks that don't break between patches.
- Faster updates each new patch.

Ariyala's still exists and some prefer it for familiarity. But all new content publishes on Etro. The Balance only publishes BiS sets as Etro links.

## What people actually use it for

**Building your pre-Savage BiS**: 2 weeks before a new tier, open Etro, copy the official BiS from The Balance, and plan your farm path (which Tomestone weapons, which Savage pieces, which crafted gear pre-raid).

**Comparing gear drops**: a Savage accessory drops. Is it an upgrade over your craft equivalent? Drop it into Etro and compare stats.

**Validating your melding before spending materia**: Etro tells you the optimal melding. You apply it in-game and avoid overcap.

**Planning food/potion for Ultimate**: Ultimate requires extreme optimization. Etro helps you choose food (Crit vs DH vs Det depending on the comp).

**Sharing builds with your static**: the raid leader posts BiS on Etro, everyone clones and adjusts to their current gear.

## Who it's NOT for

- **Casual players without raid**: if you play roulettes and MSQ, BiS optimization changes nothing for you. Any ilvl-relevant gear works.
- **PvP players**: Etro is PvE. PvP uses Wolf-mark sets that aren't planned the same way.
- **Crafters / gatherers**: Etro doesn't handle DoH/DoL BiS. For that you use Teamcraft.
- **Anyone who wants dynamic analysis (combat simulation)**: Etro calculates static stats. For actual combat sims (how much DPS does this build do?) you need xivgear.app or job-specific sims hosted on The Balance.

## How it's actually used

1. Go to etro.gg, optionally create an account.

2. **New Gearset** → pick job and level.

3. Assign each slot: weapon, head, body, hands, legs, feet, ear, neck, wrist, ring 1, ring 2.

4. For each piece, Etro shows options based on ilvl filter (e.g., current Savage gear only, or a mix with crafted).

5. Choose food and tincture. Etro recalculates stats.

6. In **Materia**, click **Solve Materia** — Etro calculates optimal melding automatically.

7. Save the set (requires login). Share the link. Anyone can open it and clone to adjust.

## Honest limitations

**Doesn't simulate combat**: Etro gives you stats; it doesn't tell you "this build does X DPS". For actual sims (which require simulating the job's rotation) there are complementary tools like xivgear.app or spreadsheets on The Balance.

**Melding solver can be conservative**: the optimal solver prioritizes not overcapping; sometimes modern theorycraft prefers slight overcap to hit a specific breakpoint. Adjust manually if your job lead recommends it.

**Doesn't predict drops**: it tells you "this BiS requires X pieces of Savage row 4", but doesn't calculate your progression through loot lotteries. For that you use a manual tracker.

**Materia tiers outdated at patch X.0**: when a new expansion drops, new materia tiers take days to appear correctly. Usually fixed within a week.

**No mobile app**: the UI works on mobile but is responsive web, not native. Editing on a phone is a bit clunky.

## How to get started

1. Go to [etro.gg](https://etro.gg). Create an account (without login you can view builds but not save).

2. **New Gearset**, pick your job (e.g., Black Mage 100).

3. In **Equipment**, fill each slot with pieces within reach. For official BiS, **import** an Etro link your job lead shares (The Balance BiS).

4. In **Food and Tincture**, pick the highest of your tier.

5. In **Materia**, let the solver auto-meld.

6. Verify stats vs your target (typically Crit > DH > Det > SpS for casters, varies by job).

7. Save the set. Share the link with your static or adjust based on your current drops.
