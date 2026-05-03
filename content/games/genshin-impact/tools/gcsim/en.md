---
title: gcsim
description: Monte Carlo team combat simulator for Genshin Impact, used by theorycrafters to compare comps, rotations, and builds with rigorous statistical results.
quickTake: The most respected theorycrafting tool in the ecosystem. Not for everyone —the learning curve is steep— but if you want to know which team comp actually hits hardest with real data instead of opinions, gcsim is where the serious analysis happens.
---

## What it is

gcsim is an open-source Monte Carlo combat simulator for Genshin Impact. You give it a team of four characters with their weapons, artifacts and stats; you write a rotation (the sequence of skills, normals, charged attacks, bursts); and the simulator runs that rotation hundreds or thousands of times to give you a statistical distribution of expected DPS, not a single number.

The project lives at gcsim.app as a webapp and is also available as a CLI for advanced use. It's MIT licensed, maintained by volunteers since 2022, with continuous releases (current version is v2.41.x from April 2026) and a community of around 7,000 members on Discord.

## What problem it solves

The classic theorycrafting problem in Genshin: how much damage does this team comp actually do? Traditional calculators give you decontextualized "damage per hit" numbers —how hard a Hu Tao Vaporize hits with given stats— but ignore what actually happens in a real fight: 20-second rotations, buff uptimes, particle generation, reaction ICDs, skill windows, frame-level animation timing.

gcsim solves this by modeling combat as a full temporal simulation. It knows how many frames each animation takes, when buffs expire, when particles generate, how reactions interact with ICD. And running it in Monte Carlo mode shows you variance: not just "this team does 80k DPS" but "average DPS is 80k, standard deviation 6k, and in the worst 5% of runs it does 70k". That information is what separates a rigorous guide from an opinion.

## What people use it for

Genshin's theorycrafting community —especially the KQM (Keqing Mains) orbit— uses gcsim as the analysis engine behind its guides. When you see a serious tier list or team comp recommendation, the underlying support is often gcsim configs running thousands of iterations.

Typical use cases: comparing two Spiral Abyss team comps with the same character roster; deciding whether to pull a specific character to replace another in your rotation; testing whether leveling a talent from 8 to 10 improves DPS enough to justify the cost; validating whether an F2P weapon performs "almost as well" as a limited one within a specific team.

## Differentiation from Genshin Optimizer and Akasha

This is the most common confusion, so it's worth being explicit: the three tools solve different problems.

**Genshin Optimizer** tells you which artifacts *from your actual inventory* maximize a target stat (typically expected damage on a single hit). It's a combinatorial optimizer over your real pool.

**Akasha System** shows how your character compares against a global leaderboard using a standardized theoretical damage metric. It's comparative ranking.

**gcsim** runs a full combat rotation on a four-character team and measures sustained DPS with statistical analysis. It's combat simulation, not gear optimization or showcase comparison.

In practice they're used in sequence: you optimize artifacts in GO, export the team to gcsim, write the rotation, and simulate. gcsim even has direct import from Enka.Network and Genshin Optimizer.

## Honest limitations

**The learning curve is real.** gcsim uses a DSL (its own language) to describe rotations. Writing your first config from scratch takes hours, not minutes. The documentation is good but technical. If you're not willing to read docs and learn syntax, this tool isn't for you —and that's fine, not every player needs this level of analysis.

**The models are approximations.** The team itself says so: they're constantly refining the sim's accuracy. There are aspects of real combat (enemy movement, complex hitboxes, imperfect human timing) that the sim simplifies or assumes ideally. Results are useful for *comparing* options against each other, not as an exact prediction of your in-game DPS.

**It depends on quality configs.** A poorly written rotation produces misleading results. The community maintains a database of validated configs, but if you write your own from scratch, errors are easy and silent.

**English-only.** The app, docs, and community are all in English. For Spanish-speaking readers, this adds an extra layer of friction.

## How it's used in practice

The typical workflow of a serious user:

1. Optimize artifacts in Genshin Optimizer and export the team.
2. Import to gcsim via the GO or Enka.Network integration.
3. Find a validated rotation config for the team comp in the gcsim database (Discord/web).
4. Adapt the config to specific characters (constellations, refinements).
5. Run the simulation with 1000+ iterations.
6. Compare results against another variant (different character, different weapon, different rotation).
7. Make decisions based on statistical difference, not absolute number.

## How to get started

If you want to try without commitment: go to gcsim.app, load one of the sample simulations already in the database, and run it. You'll see the interface, the results, the frame-by-frame breakdown.

If you want to go serious: read the "Building a Sim from Scratch" guide at docs.gcsim.app, join the Discord to resolve questions, and start by replicating a documented rotation for a team comp you already play. Only then try writing one from scratch.