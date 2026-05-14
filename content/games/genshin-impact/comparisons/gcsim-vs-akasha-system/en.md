---
title: gcsim vs Akasha System — theoretical simulation vs empirical ranking
description: Short comparison between the Monte Carlo combat simulator and the real-build leaderboard. Theorycrafting vs observed data and when to use each one.
---

gcsim and Akasha System are two damage-analysis tools for Genshin Impact but they tackle the problem from opposite sides. **gcsim** simulates combat under controlled conditions: define a rotation, run thousands of Monte Carlo trials, and average the DPS. **Akasha System** observes real builds: pulls data from Spiral Abyss via Enka.Network and publishes leaderboards of who hits hardest with each character.

## Theory vs observation

gcsim answers "how much damage does this rotation do if everything goes to plan?". It's a **theorycrafting** tool: you define team, weapons, artifacts (target stats, not necessarily real ones), buffs, and the rotation you want to test. The sim runs the rotation frame by frame, models reactions, ICDs, buff uptime, and produces an average DPS. You change a variable (another weapon, another stat target) and compare deltas.

It's the tool KQM theorycrafters use to produce the recommendations you see in Keqing Mains guides.

Akasha answers "how good is my build compared to the rest of the community?". It's an **empirical observation** tool: pulls real builds from Spiral Abyss (the character slots people expose publicly via showcase), calculates their theoretical damage under standardized conditions, and ranks them.

If your Ayaka sits at the 78th percentile, you know your build beats 78% of showcased Ayakas. It doesn't tell you why — just where you stand.

## Type of question you answer

- **"Which team comp hits harder, Hyperbloom or Mono-Hydro?"** → gcsim. Simulate both and compare.
- **"Is my Raiden build good?"** → Akasha. Shows your percentile.
- **"Is it worth switching to this weapon for my Yelan?"** → gcsim, with current and proposed values.
- **"What weapons do top 10% Hu Taos use?"** → Akasha. Observed distribution.
- **"Does this 18-second rotation work without an energy gap?"** → gcsim. Models energy management.
- **"Is my Nahida overbuilt or underbuilt?"** → Akasha. Compares stats vs community.

## Depth and friction

gcsim is powerful but requires learning. To run a sim you need to:
- Define the team in specific syntax.
- List weapons, sets, stats.
- Write the rotation in gcsim language.
- Configure trials, target HP, enemy conditions.

The payoff is huge — publishable sims, comparable, reproducible. The curve is real.

Akasha is transparent. You search for a character, navigate the leaderboard. Zero setup. If you want to see your own build, you enter your UID and it appears.

## Limitations

gcsim assumes perfect rotations. In practice a human player doesn't nail the rotation to the exact frame. gcsim numbers are **theoretical upper bounds**, not what you'd do playing.

Akasha only covers characters people expose in showcase. If a character isn't popular or doesn't see use in high Spiral Abyss, their leaderboard is thin. And because it depends on Enka.Network, it only sees players who made their profile public — it's biased toward serious players.

## Complementary

A typical question like "should I switch to this artifact set?" gets answered best by combining the two:

1. **gcsim**: simulate theoretical damage with set A vs set B.
2. **Akasha**: which set are top players choosing? That data validates or challenges the theoretical conclusion.

If gcsim says "set A is 8% better" but Akasha shows 85% of the top tier uses set B, something the sim isn't capturing well (maybe set B is more reachable in practice, more consistent, or the tested rotation doesn't represent real use well).

## At a glance

- **gcsim** = what's optimal in theory?
- **Akasha** = what are good players actually doing?

They're different tools for partially overlapping audiences. Theorycrafters use both; casual players rarely touch gcsim but can use Akasha as a progress benchmark.
