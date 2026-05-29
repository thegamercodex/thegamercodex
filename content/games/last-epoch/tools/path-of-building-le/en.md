---
title: "Path of Building for Last Epoch"
description: "Open-source Path of Building fork adapted for Last Epoch by Musholic. Provides DPS simulation deeper than web planners, full offline support, and a no-install web version at lastepochplanner.com. The canonical option for serious LE theorycrafting."
quickTake: "If you need to know your build's exact DPS, this is the only honest option in LE. Web planners are visual and fast for inspection, but PoB computes with real simulation: shock stacks, ailments, multipliers, everything. For theorycrafters; overkill for casuals."
---

## What it is

Path of Building for Last Epoch (PoB-LE) is an open-source fork of the original Path of Building from PoE 1, adapted by the community to Last Epoch mechanics. It's maintained by **Musholic** on GitHub with regular commits (last Apr 2026). Two usage modes:

- **Desktop**: download the binary from GitHub, run it offline on Windows/Mac/Linux.
- **Web**: [lastepochplanner.com](https://lastepochplanner.com/) runs the same logic in browser without install.

Both versions read the same mechanics and produce the same numbers. The difference is only workflow: desktop is more responsive for rapid iteration; web is more convenient for sharing builds via URL.

It's **free** and **MIT-licensed**. Accepts contributions via PR on GitHub.

## What problem it solves

Web planners (Last Epoch Tools, Maxroll, ArreatSummit) are good for **visualizing** your build and showing final stats, but they approximate complex calculations:
- Ailment stacking (ignite, shock, bleed)
- DOT multipliers
- Conditional damage (vs full life, while channeling, on crit)
- Defense layers computed with the correct order of mitigations

PoB-LE simulates these with PoE PoB's precision. If your build depends on mechanics like "stacking shock for DPS amplification," the web planner gives you an approximate number; PoB-LE gives you the real one.

For crafters and theorycrafters, this difference matters — the gap between tier 6 and tier 7 on a critical affix can be 30% DPS, and only PoB calculates it right.

## How it differs from Last Epoch Tools' planner

- **PoB-LE**: simulation depth. Exact DPS computations, side-by-side item comparison, support for obscure mechanics. Steep learning curve (UI inherited from PoE PoB).
- **Last Epoch Tools planner**: quick visualization and community sharing. Final stats accurate enough for 90% of cases. Friendlier UI.

Serious theorycrafters use both: LE Tools to iterate visually, PoB-LE to validate numbers before deciding to spend gold on crafting.

## What people use it for

**Compare 2 items side by side**: in PoB-LE you can equip item A, see DPS, swap for item B and see the exact delta. Critical for picking between unique alternatives or between affix tiers.

**Optimize crafting target**: before spending runes/glyphs on a base item, simulate the result in PoB with target affixes and check if it hits the breakpoint you need.

**Theorycraft outside the game**: build entire characters without being in-game, export the result to use later.

**Verify creator claims**: when a YouTuber says "this build does 50M DPS," import it into PoB and verify locally that the numbers check out.

**Plan blessings with depth**: the planner lets you simulate which blessings to prioritize seeing exact impact on final stats — more useful than the "max-tier always" heuristic.

## Who it's NOT for

- **Newcomers to LE**: the UI inherits PoB PoE complexity. If you never used the original, there's a real learning curve. Start with LE Tools.
- **Players who only want to copy a build**: if you just need to read Maxroll and replicate, PoB is overkill. For implementing published builds, web planners are enough.
- **Mobile-first**: desktop doesn't run on mobile and web is hard to use on touch.
- **Spanish speakers who need translated UI**: PoB is English only, no localization.

## How it's used in practice

1. **Web version (no install)**: go to [lastepochplanner.com](https://lastepochplanner.com/) → start building directly in browser.

2. **Desktop version**: download the ZIP from [github.com/Musholic/PathOfBuildingForLastEpoch/releases](https://github.com/Musholic/PathOfBuildingForLastEpoch/releases) → extract → run the `.exe` (Windows) or equivalent binary.

3. **New build**: pick class and mastery → assign passives on the tree → define active skills with their passives → equip items with specific affixes.

4. **To compare builds**: import two builds in separate tabs; PoB shows stat delta when switching between them.

5. **To share**: on web, copy the build URL; on desktop, export a "build code" you paste into Discord/Reddit and another user imports.

6. **To verify someone else's build**: copy a creator's build code → import → run the simulation → compare with the DPS the creator claims.

## Honest limitations

**Steep learning curve**: the UI isn't optimized for LE from scratch — it inherits PoB PoE layout that assumes familiarity. Newcomers need a tutorial.

**Doesn't simulate all endgame**: some very LE-specific mechanics (exact corruption stacking, dynamic blessing rolls) are approximated. Precision is high but not perfect.

**Updates depend on the community fork**: when a balance change drops, Musholic and contributors update the fork. There's a 1-2 week lag vs patch day 1.

**No integrated DB like LE Tools**: to look up item info, complement with Last Epoch Tools or lastepoch.tunklab.com.

**No official cloud save system**: on desktop, your builds live on disk. Manual backup recommended.

**Web version occasionally slow**: simulation runs in browser JS, very complex builds can take 2-3 seconds per recalc.

## How to start

1. **Web vs desktop decision**: if you want easy URL-based build sharing, web. If you want maximum performance and offline, desktop.

2. **Web**: [lastepochplanner.com](https://lastepochplanner.com/) → click **New build** → pick class → you're in the planner.

3. **Desktop**: clone the repo or download a release zip from [github.com/Musholic/PathOfBuildingForLastEpoch](https://github.com/Musholic/PathOfBuildingForLastEpoch) → README explains install.

4. **Recommended tutorial**: the repo has a basic tutorial in its README. For advanced usage, search YouTube for "Path of Building Last Epoch tutorial".

5. **Start with a known build**: import a creator's build code from Maxroll → study how it's structured → modify from there. You learn faster than starting from scratch.

6. **To report bugs**: the GitHub repo accepts issues. Musholic responds frequently.

7. **To contribute**: PRs welcome. The project is Lua + minor scripting; familiarity with original PoB helps a lot.
