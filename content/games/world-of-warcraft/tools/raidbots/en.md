---
title: "Raidbots"
description: "Cloud interface and web service for running SimulationCraft simulations without local install. Lets any player with browser access compare gear, talents, stat weights, and rotations via Monte Carlo simulation."
quickTake: "Raidbots democratized SimC. Before, you had to compile it and learn the command line; now you paste your profile, click a button, and minutes later you have stat weights and a Top Gear sim for your char. It's the gear-optimization tool any serious raider uses at least once a season."
---

## What it is

Raidbots (raidbots.com) is a web service operated by seriallos (David), providing a friendly interface for SimulationCraft (SimC), the open-source combat simulation engine for WoW. SimC itself is a community project that's existed since 2008, maintained by dedicated theorycrafters who code each spec's rotation and mechanics with extreme detail.

Before Raidbots, using SimC required: download the binary or compile, write a profile (.simc) describing your character (gear, talents, stats), run it locally on your own CPU, and read the output as plain text. For casuals it was prohibitive. Raidbots changed that by offering:

- **Browsable web UI** to configure simulations.
- **Cloud compute** (Raidbots' servers run the sim, not yours).
- **Importer**: paste `/simc` from the SimC addon and load your full character.
- **Pre-packaged sims**: Top Gear, Droptimizer, Stat Weights, Talent Comparison.

It's free for basic sims, with a Premium tier ($20/month or $200/year) for queue priority, longer sims (more iterations = less variance), and additional features. Free tier is fully functional for casual use; Premium pays off when you run multiple sims a week.

## What problem it solves

Gear, talent, and stat priority decisions in WoW are not obvious. Two items at similar ilvl can yield very different DPS based on stats, set bonuses, and proc interactions. An optimal talent build for Mythic raid can be suboptimal for M+. Theoretical stat weight ("Crit > Mastery > Haste") is a simplification ignoring breakpoints, cooldown alignment, and a thousand other details.

SimC solves this by modeling the entire fight in simulation: uses your spec's optimal rotation, simulates 50,000+ boss pulls, and produces an estimated DPS with confidence interval. Compare two configs and you objectively know which is better.

Raidbots removes SimC's friction. In 5 minutes you can:

- Import your char.
- Run Top Gear: tries 100+ combinations from your bag and tells you which maximizes DPS.
- Run Stat Weights: simulates your char +1 of each stat and returns relative magnitudes.
- Run Droptimizer: simulates your char with each item from the current raid and shows which drops are upgrades.

This turns gear decisions from "I think this is better" to "objectively this is +3.2% DPS."

## What people actually use it for

**Weekly Top Gear**: post-raid, open Raidbots, import your char, and Top Gear tells you whether to reorganize gear with the new drops. Output is direct: "this item combo is +250 DPS over your current setup."

**Pre-gemming stat weights**: before spending gold on gems and enchants, sim your stat weights. If Crit is 2.4 and Haste is 1.8, prioritize Crit. Useful after major gear changes.

**Talent comparisons**: you're torn between talent A and B for a specific boss. Raidbots sims them side by side and returns estimated DPS difference.

**Pre-raid Droptimizer**: before raid, sim your char with every item from current raid. Know which loot tickets to prioritize and helps decide if you pass a drop to another raider.

**Mythic+ optimization**: although SimC is more accurate for single-target, it also models AoE and cleave. For M+ optimization, Bloodmallet is sometimes a better complement (see next).

**Rotation testing**: SimC lets you tweak the APL (scripted rotation). Useful for advanced theorycrafters who want to validate rotation tweaks before testing in-game.

## The difference vs. Bloodmallet

Both are SimC-based gear optimizers, but with different approaches:

- **Raidbots**: full character optimization, customizable. You give your char and it simulates. Output is DPS specific to *your* setup.
- **Bloodmallet**: pre-computed comparison charts. They pre-ran sims over every trinket, talent, tier set, and show charts. You consult "which trinket is best for Fire Mage" and see a ranking. Not customizable, but instant.

For "what is the optimal decision for *my* char with *my* current gear": Raidbots. For "which trinket do I farm from Vault this week": Bloodmallet, in 30 seconds.

The two complement each other and most serious raiders use both depending on the case.

## Who it's NOT for

- **Casual players without Mythic raid or high keys**: if you're in Heroic or keys ≤+10, gear differences are marginal and don't justify time invested. Icy Veins' stat priority is sufficient.
- **PvP-only**: SimC models PvE combat with scripted NPCs, not human PvP. There are other resources for PvP optimization.
- **Levelers**: Raidbots doesn't apply to leveling gameplay. Endgame only.
- **Players sensitive to cloud compute**: Raidbots runs your sims on its servers. If you prefer local compute, installing SimC directly remains an option.

## How it's actually used

1. In-game: install the **SimulationCraft** addon.

2. Type `/simc` in chat. A window opens with a long text describing your character.

3. Copy that entire text.

4. Go to [raidbots.com](https://www.raidbots.com), pick the sim type (Top Gear, Stat Weights, Droptimizer, etc.).

5. Paste your profile in the textarea. Configure options (fight type, duration, target count).

6. Click "Run Simulation." Wait 1-15 minutes depending on type and tier (free/premium).

7. Output: a navigable report with your char's stats, estimated DPS, and comparisons against alternatives.

8. Implement the changes in-game (re-gem, re-talent, swap gear).

## Honest limitations

**Models an idealized fight**: SimC assumes optimal rotation perfectly executed, no unexpected forced movement, no mechanic downtime. Real fights have interruptions and human error. Sim vs. real log can differ ±10-15%. Useful for relative comparisons (gear A vs. B), less so for predicting your absolute DPS.

**Spec coverage depends on SimC contributors**: if a spec doesn't have an active SimC maintainer, modeling can be outdated or buggy. Popular specs update fast; niche specs sometimes lag.

**Premium for long-sim queue**: free tier works but longer sims (50k+ iterations) can queue. Premium avoids that.

**APL editing requires expertise**: customizing SimC's scripted rotation requires understanding its DSL. Not necessary for casual use, but advanced theorycrafters will hit the curve.

**Single-target / basic AoE only**: M+ optimization is less reliable because real fights are contextual (priority targets, cleave dynamics, mob movement). SimC AoE sims are approximation.

**No PvP gear**: SimC models PvE.

**Result depends on correct input**: if your profile has outdated gear or wrong talents, the sim doesn't compensate. Re-importing `/simc` each time is good practice.

## How to get started

1. Install the **SimulationCraft** addon (or **Raidbots Importer**) via CurseForge / Wago.

2. In-game, type `/simc` and copy the output.

3. Go to [raidbots.com](https://www.raidbots.com) and try **Top Gear** or **Stat Weights** (the most useful to start).

4. Paste your profile, run sim, and read the output. First time can be overwhelming — reports have a lot of info, focus on the "Top Gear" or "Stat Weights" main result.

5. Compare results against your current setup. If Top Gear suggests changes, implement them.

6. Editorial note: SimulationCraft is **open source** and community-maintained ([github.com/simulationcraft/simc](https://github.com/simulationcraft/simc)). Raidbots is the commercial cloud interface on top of that engine — worth knowing and crediting the upstream project that makes it all possible.
