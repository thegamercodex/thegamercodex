---
title: "DotaPicker"
description: "Web tool for Dota 2 draft assistance: combines counters and synergies to suggest the best heroes for your team based on enemy pick/ban in All Pick or Captain's Mode."
quickTake: "Useful when you have to pick last and don't have a flex hero for the situation. Don't take the suggestions as oracle — combine with your own gameplay."
---

## What it is

DotaPicker is a free web tool that helps with Dota 2 drafting. The mechanic is simple: enter the heroes the enemy already picked, and the tool returns a list of recommended heroes based on combination of counter relationships (which heroes beat the enemy ones) and team synergies (which combine well with your already-selected heroes).

The data behind comes from public match aggregates with weighting that prioritizes counters over synergies (the developer states counters are weighted approximately 2x synergies). The tool covers both All Pick (default mode) and Captain's Mode (competitive mode with sequential bans/picks).

The interface is direct: a hero grid where you click to mark "enemy" or "my team," and at the right the tool shows suggestions ordered by composite score. There's no registration, no install — just web. Free without aggressive ads.

## What problem it solves

Dota 2 drafting is complex: 124 heroes, role considerations, multiple counter relationships and synergies. For unfamiliar players or specific situations (you're picking last and want to optimize), having external suggestion has real value.

DotaPicker fills that gap with a quick interface: you don't need to know all 124 hero matchups by heart, the tool aggregates that knowledge for you. Especially useful for players in 1K-4K MMR who are still building hero pool and matchup knowledge.

## What people use it for

**Quick consult during draft**: while in the All Pick draft phase, open DotaPicker in another browser tab, mark enemy heroes, and consult suggestions. Adds 30 seconds of context but can prevent obvious bad pick.

**Learning hero relationships**: by using the tool repeatedly, you internalize which heroes counter which others. After a few weeks of use, many users find they don't need it anymore for their main heroes.

**Solo queue with limited hero pool**: if you only know how to play a few heroes well, DotaPicker can help you decide which of your 5-7 heroes is best in this specific draft.

**Studying meta drafts**: simulating draft scenarios from pro tournaments helps understand why certain heroes are picked together and which compositions are vulnerable.

## Who this tool isn't for

DotaPicker is useful for many situations but not for all:

- **Mid to high MMR players (4K+)** → at that level, hero relationships are internalized and the tool becomes redundant. Better to use D2PT for current builds.
- **Captain's Mode pro analysis** → for that level of analysis, datdota provides more depth.
- **Direct in-game integration** → DotaPicker is a separate web tool, not an overlay. If you want suggestions inside Dota 2, DotaPlus by Overwolf includes draft helper integrated.
- **Hero learning beyond drafting** → for actually playing the hero, DOTAFire and D2PT are better.
- **Personal stats analysis** → Dotabuff or STRATZ.

## How it's used in practice

1. Go to `dotapicker.com`. Choose mode: All Pick (most common) or Captain's Mode.

2. In the hero grid, click each enemy hero to mark "enemy." If you already have your team picks, mark them as "my team."

3. The right panel shows suggestions ordered by composite score: counter strength + synergy + win rate.

4. Each suggestion has small icons indicating role (carry, support, etc.). Choose one that fits your team's role needs.

5. For Captain's Mode, the tool tracks bans separately. There's an alternative panel for explicitly marking bans.

6. Use the suggestion as one input, not absolute decision. Your hero pool, MMR, and personal preferences also matter.

## Honest limitations

**Statistical model is general**: the suggestions don't fit MMR brackets specifically. A counter that works at 7K may not be as effective at 2K because skills and players differ.

**Doesn't update automatically per patch**: counter and synergy relationships are partly statistical, partly heuristic. After a big patch, the data may reflect a previous meta.

**No personal profile**: doesn't have account features. Can't favorite your most-played heroes or save typical drafts.

**Spartan UI**: the interface is functional but has some old-design feel. Visual polish is limited.

**Doesn't cover Single Draft, Random Draft, Turbo specifically**: although the recommendations work for general All Pick, the most exotic modes may have different dynamics not reflected.

## How to get started

No registration needed.

1. Go to `dotapicker.com`.

2. Choose mode (All Pick by default).

3. Practice with a quick simulation: pretend you're in solo queue and the enemy picked Anti-Mage and Pudge. What does the tool recommend?

4. Cross-check with your own knowledge — does the suggestion make sense to you? If yes, validates the tool. If not, that's a learning opportunity.

5. During real drafts, use the tool as quick consult, not absolute decision. Your hero pool and personal preferences also matter.

6. After 1-2 months of use, evaluate if you still need it or if you internalized the recommendations. Many advanced users move away from DotaPicker after time of consistent use.
