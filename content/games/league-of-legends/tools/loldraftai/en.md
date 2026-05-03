---
title: "LoLDraftAI"
description: "Machine-learning-based draft assistant for League of Legends. You simulate a draft pick by pick and the model predicts the win rate of blue/red side in real time, with ranked next-pick suggestions. Open source, model retrained each patch."
quickTake: "The most interesting tool in the draft analysis niche. If you're interested in understanding how competitive compositions are built or practicing drafting with predictive feedback, it's worth a try. Young tool (~1 year), bus-factor 1, use as experimental complement — not as ground truth."
---

## What it is

LoLDraftAI is a machine-learning-based draft assistant, launched around 2024 by an independent project (no visible personal attribution) and open-sourced in May 2025. The tool simulates the draft pick by pick — you choose picks and bans for both teams — and the model predicts the win rate of blue side versus red side in real time, with next-pick suggestions ranked by predicted win-rate delta.

The model is retrained each patch (typically Saturday after Thursday's patch), keeping predictions aligned with the current meta. The page usually shows a current-patch indicator (e.g.: "Patch 16.09 · Updated May 2") on the home, useful as activity signal.

It's free, no visible paid tier. Open source on GitHub under the project's organization. Public Discord for discussion and feedback. No login required.

## What problem it solves

Drafting in LoL is one of the least transparent aspects of competitive play. Pro coaches spend hours analyzing compositions, synergies, counters, and power spikes to prepare drafts — but that intuition is hard to transmit to mid-elo players who only have access to flat tier lists.

LoLDraftAI attacks this gap with a different approach to existing tools: instead of showing you aggregated stats (Lolalytics-style) or individual tier lists (U.GG-style), it simulates the complete draft and tells you the probability of victory for the side you're drafting for, based on aggregated data from past matches. That lets you test hypotheses ("what if I pick this champion instead of the meta one?") with immediate feedback.

For players who practice drafting (amateur team captains, coaches in training, esports fans who want to understand why a pick makes sense), it's a uniquely pedagogical tool.

## What people use it for

**Practicing drafting with immediate feedback**: central use case. Simulate a complete draft, make changes, and see how the model's prediction moves with each decision.

**Evaluating emerging or off-meta picks**: if you want to know whether an off-consensus champion has real viability in a specific draft, the model gives you a quantitative signal.

**Studying drafts from real competitive matches**: replicate a real draft from a tournament (LCS, MSI, Worlds) and see what the model predicts — useful for understanding the logic behind pro coaches' decisions.

**Experimenting with team compositions**: try whether your amateur team works better with engage frontline or poke composition, and look at the comparative prediction.

**Meta curiosity**: for fans interested in how draft complexity is modeled with ML, the open-source tool is an accessible educational example.

## Who this tool isn't for

LoLDraftAI is interesting but clearly experimental. It isn't what you need if:

- **You want ground truth for high-stake decisions** → young model, bus-factor 1, predictions are directional signal but not oracle. For serious competitive coaches, complement with human analysis.
- **You want aggregated stats on individual matchups** → Lolalytics is the source for per-matchup specific data, not for complete drafts.
- **You want tier lists or builds** → U.GG and Lolalytics cover that function better; LoLDraftAI doesn't recommend items or runes.
- **You're looking for established tools with long track record** → LoLDraftAI has ~1 year, other tools in the ecosystem have 5-10. If institutional stability is a priority, wait for it to mature.

## How it's used in practice

1. Go to `loldraftai.com`. No login.

2. Verify the patch indicator on the home (e.g.: "Patch 16.09 · Updated May 2") — confirms the model is current.

3. Start a new draft: begin with the bans phase, then alternate picks between blue and red team following the standard order (1 blue, 2 red, 2 blue, 2 red, 1 blue, etc.).

4. While you draft, the prediction panel shows the estimated win rate of blue side vs red side, updating with each pick.

5. Next-pick suggestions appear ranked by win-rate delta — the champion that raises your predicted win rate the most appears first.

6. When the complete draft ends, you can save the composition or share it via URL.

7. For deep analysis, read the blog posts (`/blog`) — they contain explainers of how the model works and comparisons with other drafting tools (DraftGap, iTero, LoLTheory).

## Honest limitations

**Young tool (~1 year)**: launched around 2024, open-sourced in May 2025. Limited track record vs tools with 5-10 years. For serious competitive bets, treat predictions as directional signal, not oracle.

**Bus-factor 1**: the project is branded as "LoLDraftAI" without visible personal attribution. If the sole maintainer stops maintaining it, there's no backup team. Open source partially mitigates (others could fork), but the risk exists.

**Model is partially a black box**: although open source, training details and exact weights are technical. To validate predictions, you would need to retrain the model locally or trust the published methodology.

**No editorial recommendation**: it tells you what to pick according to the model but doesn't explain the tactical "why". To understand the logic, you need to complement with human analysis (coach videos, Reddit posts, written guides).

**Coverage only of competitive draft format**: the model is trained on pro match data and high-elo soloqueue. For mid-elo soloqueue (Gold-Plat) where drafts break down and autofills are common, predictions are less representative.

## How to get started

1. Go to `loldraftai.com`. No registration.

2. Confirm that the patch indicator is current (visible on the home). If it's behind by more than a patch, predictions may not reflect the current meta.

3. Your first test draft: replicate a recent real draft (LCS, MSI, Worlds — find videos on YouTube). Compare the model's prediction with the actual match result. That calibrates how reliable the model is in known cases.

4. To practice drafting: simulate typical scenarios for your role or preferred composition. Note which picks raise the win rate most and which lower it.

5. If you have a technical profile (data science or ML), explore the GitHub repo — the open code is a good example of applying ML to domain-specific data.

6. Join the Discord if you want to discuss the tool with other users or report bugs/feedback to the maintainer. For young tools, community feedback accelerates development.
