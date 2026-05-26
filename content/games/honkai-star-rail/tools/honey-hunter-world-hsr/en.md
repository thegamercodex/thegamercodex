---
title: "Honey Hunter World (Star Rail)"
description: "Reference database for Honkai: Star Rail with stats, scaling and raw data extracted directly from game files."
quickTake: "For primary game data (stats, values, scaling), Honey is the fastest and most complete source. Dense UI, but nobody else has raw information like this."
---

## What it is

Honey Hunter World is a web database that extracts information directly from game files of several HoYoverse titles, including Honkai: Star Rail (section `starrail.honeyhunterworld.com`). The site started as reference for Genshin Impact (where it's known as "Honey Impact") and expanded to HSR shortly after its global launch.

Unlike community wikis, Honey doesn't edit or interpret data: it shows values as they exist in game files. This includes per-level stats for every character, skill multipliers, light cone passives, relic set bonuses, enemy drop rates, item locations, achievement data, and much more.

The interface is functional but dense: tables, dropdowns, numeric values without much decoration. It's not pretty, but it's complete and fast to update when new patches drop.

## What problem it solves

When you need to know the exact multiplier of a character's ascended skill, the 4-piece bonus of a specific relic set, base stats of an enemy in MoC, or how much experience a specific material grants, narrative wikis and videos won't tell you. They give you the general idea, not the raw number.

Honey solves this by exposing the game's raw data in a queryable format. Theorycrafters use it to build calculators and damage formulas. Endgame players use it to verify if a skill scaling justifies investing traces. Content creators use it as source when publishing character guides.

It also solves the speed-of-update problem: when a new patch drops, Honey usually has beta server data weeks before public release, and live data updates within hours of patch deploy.

## Differentiation

Honey Hunter doesn't compete directly with other HSR tools; it complements them. Worth understanding how it positions vs the closest resources:

**vs Fandom Wiki**: Fandom is narrative, community-edited, better for lore, quests, achievements with context, and dialogue archives. Honey is raw reference: stats, multipliers, values. If you need to know "how much does this skill hit at level 12", Honey. If you need "what happens in chapter 2 of the Belobog quest", Fandom.

**vs Prydwen**: Prydwen is editorial, with tier lists, build recommendations and opinionated guides. Honey doesn't opine, just exposes data. Prydwen tells you "use these relics"; Honey tells you "this set grants X% bonus under Y condition".

## What people use it for

**Verifying exact stats and scaling before investing traces**: leveling a trace costs credits, materials and books. Before committing resources, many people check on Honey if the bonus is really worth it.

**Building damage calculation spreadsheets**: serious theorycrafters extract multipliers from Honey for their personal calculators. Data is in queryable, consistent format, ideal for automation.

**Comparing relic set bonuses across options**: when undecided between two sets, Honey gives you exact texts and numeric values side by side, without the interpretation a guide would add.

**Investigating enemies and resistances in endgame**: for builds optimized against MoC, Pure Fiction or Apocalyptic Shadow, knowing the exact resistances of the target boss changes composition. Honey lists those values per enemy.

**Reference for content creators**: those making videos or written guides use Honey as source so they don't make up numbers. Saves hours of in-game testing.

## Who this tool is NOT for

Honey Hunter isn't for casual players who just want to know "what character to roll" or "what team to build". For that Prydwen and editorial guides exist. Specific reasons:

**The UI is intimidating if you don't know what you're looking for**. Tables of stats per level, multipliers in percentages, skill type codes, all assume you know how to read it. Without context, numbers are noise.

**No recommendations or opinions**. Honey shows you that a set's bonus is "20% extra damage if you have X stack", but doesn't tell you if it's worth it vs another option. That decision you make with the data.

**A lot of information normal players don't need**. Subzone drop rates, secondary NPC data, item internals, ID numbers. Useful for datamining, noise for normal use.

If you just want to play and enjoy HSR, Honey is overkill. If you optimize seriously or create content, it's indispensable.

## How it works in practice

Honey works as a navigable database, no login or signup required:

1. Open `starrail.honeyhunterworld.com` in any browser.

2. Use the side menu to choose category: Characters, Light Cones, Relics, Enemies, Materials, Achievements, etc.

3. Clicking a character takes you to their page with all skills, traces, eidolons, per-level stats and ascension materials.

4. To compare two characters or two light cones, open each in separate tabs (the site has no built-in comparator).

5. For future patch data, look for the "beta" indicator or use the version toggle if available.

Typical flows:

**Verify a skill multiplier before leveling traces**:

1. Search the character in Characters.
2. Go to the Traces or Skills section.
3. Compare skill value at current level vs target level.
4. Decide if investment justifies the result.

**Investigate a new relic set**:

1. Go to Relics and filter by planar or cavern.
2. Open the set you're interested in.
3. Read the exact 2pc and 4pc bonuses.
4. Cross-reference with character data where you want to use it.

## Honest limitations

**The UI is from 2015**. Dense tables, unintuitive mobile navigation, basic search. Functional but not pleasant.

**Only available in English**. Character, skill and item names are in English. For Spanish-speaking users playing in Spanish, you have to cross-reference names mentally.

**Aggressive ads on some pages**. The site sustains itself with advertising, and depending on the adblocker you use there may be intrusive pop-ups or banners.

**Not always editorial context**. The data is there, but knowing how to interpret it sometimes requires another source (Prydwen, KQM, Reddit). Honey alone gives you the what, not the why.

**Beta updates not always perfect**. Beta server data changes between beta versions and final release. What you see on Honey before a patch may adjust on deploy.

**Site structure changes occasionally**. Internal URLs and section names get reorganized from time to time, breaking old bookmarks.

**No integrated calculator**. Unlike tools like Prydwen or dedicated calculators, Honey only exposes data; it doesn't do calculations for you.

## How to get started

No installation or account required. Visit `starrail.honeyhunterworld.com` from any browser, preferably desktop because the UI isn't well optimized for mobile.

For your first visit, suggestion: open the page of a character you know well (one you already have and have leveled). Look at how information is presented: skills, traces, eidolons, stats per level. Once familiar with the format, navigating the rest of the site is smoother.

Recommended combination: use Honey as raw data source and Prydwen or an editorial guide for interpretation. Honey answers "how much", the guide answers "worth it".

For recurring use, consider bookmarking the pages you consult most (your main, their favorite relic sets, current MoC enemies). Saves navigation each time you return.
