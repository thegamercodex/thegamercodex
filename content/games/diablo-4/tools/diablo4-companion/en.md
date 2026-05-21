---
title: "Diablo 4 Companion"
description: "Open-source D4 loot filter: define desired affixes, the app highlights matching items on-screen — automates drop evaluation that otherwise requires per-item mouse-over."
quickTake: "The loot filter D4 never had. You define which affixes you want for your build, play normally, and items with those affixes get highlighted visually. Saves hours evaluating drops in Helltides and dungeons. Open source on GitHub."
---

## What it is

Diablo 4 Companion (github.com/josdemmers/Diablo4Companion) is an open-source desktop application by **josdemmers** that acts as a visual loot filter for D4. The app runs in the background while you play and, via OCR + image recognition, identifies items with affixes matching your defined criteria and highlights them visually.

Features:
- **Affix filter**: define lists of "wanted" affixes per class/build.
- **Visual highlighting**: items matching your filters get highlighted on-screen.
- **Build presets**: import community filters (top build presets).
- **Multi-build**: switch between filter presets based on current character.
- **Open source**: auditable code, community contributors.

## What problem it solves

D4 in-game has a basic loot filter (rarity-based) but not by affix. For players farming ancestrals/mythics with specific affixes for their builds, evaluating each drop manually (open inventory, hover, read 4 affixes, compare with current gear) takes 5-10 seconds per item. In an hour of Helltide farm 50+ items drop, easily 1+ hour lost on evaluation alone.

Diablo 4 Companion automates that. Only items matching your criteria stand out. The rest you ignore visually.

## How it differs from D4Builds Overlay / Mobalytics Overlay

- **D4Builds/Mobalytics Overlays**: desktop companions showing builds and guides in overlay. They do NOT do automatic filtering.
- **Diablo 4 Companion**: visual filter based on affix matching. Different functional category.

The overlays show info. Companion filters loot. Complementary, not competitors.

## What people actually use it for

**Helltide farming**: 50-100 drops per hour. Companion identifies the 5-10 that match.

**Targeted gear hunting**: looking for a specific affix for build optimization. Companion alerts when it drops.

**Multi-character economy**: with multiple active chars, switch filter preset per char.

**Sharing presets**: top builds share Companion configs on Discord.

**Passive quality of life**: once set up, runs in background without interaction.

## Who it's NOT for

- **Casuals without specific gear targeting**: if you play casually and any drop is OK, doesn't add anything.
- **Those who avoid third-party software**: technically unaffiliated with Blizzard. TOS gray-area risk (no one's been banned for normal use, but the plugin technically infringes TOS).
- **Mac / Linux users**: Windows native only.
- **Console players**: PC-exclusive.

## How it's actually used

1. Download the app from GitHub releases or source build.

2. Configure filters per character: wanted affixes, weights, threshold.

3. Launch D4 with Companion running in background.

4. Matching items get highlighted visually on-screen.

5. For community presets, browse the repo releases or community channels.

## Honest limitations

**TOS gray area**: Blizzard doesn't approve third-party. In practice no one's been banned but technical risk exists.

**Windows only**: macOS/Linux not supported.

**OCR fragility**: depends on UI scaling and in-game text rendering. Post-patches can break until community updates.

**Setup overhead**: configuring filters per build requires initial time investment.

**Doesn't replace manual inspection**: the filter highlights candidates. Final manual validation is still recommended for important drops.

**Community plugin sustainability**: depends on open-source maintainer activity.

## How to get started

1. Download from [github.com/josdemmers/Diablo4Companion releases](https://github.com/josdemmers/Diablo4Companion/releases).

2. Read setup guide in README — includes game UI scaling configuration.

3. For your first build: import a community preset from Discord or create a simple filter (e.g., "+max life", "+all stats", "+armor").

4. Run D4 + Companion. Verify wanted items highlight correctly.

5. Adjust threshold according to your standards.

6. Share presets with your group if useful to community.
