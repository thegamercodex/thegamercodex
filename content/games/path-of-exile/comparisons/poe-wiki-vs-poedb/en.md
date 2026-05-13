---
title: PoE Wiki vs PoEDB — which reference to use for PoE
description: Comparison between PoE's two main references. When you want editorial articles and when you need raw data dump.
---

Anyone who plays PoE for more than a couple of hours eventually ends up opening one of these two. **PoE Wiki** is the community encyclopedia, written as readable articles with context and examples. **PoEDB** is a datamined database pulled straight from the game client, full of tables, raw numbers, and technical precision the wiki doesn't aim for. Knowing which to use saves time, and very often the right answer is "both".

## Content type: editorial articles vs data dump

The wiki is written for humans. Each mechanic article (say, "Shock") starts by explaining what it is, how it applies, relevant formulas, edge cases, and is complemented by tables and internal links. Item articles include history (when the league was added, how it used to be), build usage, and trivia. NPC articles include quotes, narrative context, and art. It's the tool you want when *learning* something from scratch.

PoEDB assumes you already know what you're looking for. If you land on PoEDB's "Shock" page, you don't find an article: you find tables of mods that apply shock, their tier, numeric range, what bases they appear on, and at what item levels. It's dense, technical, and oriented toward referencing data quickly, not teaching.

This defines the usage: **wiki when you ask "how does X work", PoEDB when you ask "what are the exact ranges of Y"**.

## Depth and updates

PoEDB is **datamined directly from the client** after each patch. This means:

- It has exact stats for every monster (life, resistances, action speed, AI behavior).
- It has every mod with tiers, weights, and level requirements — even ones the game doesn't expose easily.
- When GGG adds a new item or changes a drop table, PoEDB reflects it the next day (or the same day).
- It covers data the wiki has no manual capacity to maintain: relative mod weights, every base with its implicits, full drop tables.

The wiki is **manually maintained by the community**. Coverage is excellent but the lag relative to patches can be days or weeks, especially for technical data. Its superpower is the curated articles — someone took the time to explain the full system, not just list the data.

For raw data hunting, PoEDB is the source. For the context around that data, the wiki provides it.

## When you need each one

**Wiki:**
- Learning a mechanic from scratch (ascendancies, ailments, charges, conversion, fortify).
- Reading lore, quotes, narrative history.
- Resolving questions phrased in natural language ("how is my skill's AoE calculated?").
- General build research — what each skill does, known synergies, use cases.
- Historical patch notes and changelogs.

**PoEDB:**
- Crafting: what "+life" tiers exist on helmets and what's their pool?
- Targeted farming: what does boss Y drop? Where does monster X spawn?
- Exact monster data: T17 boss HP, AI flags, resistance values.
- Item base stats: exact implicits, requirements, dropable areas.
- Currency outcomes: alteration orb tier probabilities.

## Languages and community

The wiki is in English with limited translations to other languages. It has heavy editorial activity, talk page discussions, and accepts community edits. It's open source and lives at `poewiki.net` (successor to the Fandom wiki, migrated years ago after drama with Fandom). It's hosted with GGG's support, which gives it long-term stability.

PoEDB is also in English with additional Traditional Chinese (zh-tw) support — reflecting its roots in the Asian PoE community. It's not open source and is maintained by a smaller team, but its data quality is exceptional thanks to the automatic datamining pipeline.

For Spanish speakers neither offers full localization, but both are visually clear enough that language isn't a barrier for technical data. For lore and long wiki articles, English matters more.

## SEO and discovery

For natural queries like "poe how does shock work" or "poe what is the lab", **the wiki usually ranks first on Google**. This makes it the default entry point for conceptual questions.

PoEDB ranks strongly when the query includes a specific item name, mod, or datamined mechanic — "poe Hyrri's Truth" or "poe T17 boss life". Technical users usually go directly to the site.

Practical tip: if Google gives you the wiki first and the answer is vague, adding `site:poedb.tw` to the query usually gets you what you need when you're looking for an exact number.

## At a glance

| Case | Best pick |
|---|---|
| Learning a new mechanic | Wiki |
| Mod tiers on a base | PoEDB |
| Lore and narrative | Wiki |
| Exact boss stats | PoEDB |
| Historical patch notes | Wiki |
| Drop tables and bestiary | PoEDB |
| General build research | Wiki |
| Crafting with exact numbers | PoEDB |
| Quick reference while playing | Wiki (better SEO) |
| Deep client-data analysis | PoEDB |

## Final verdict

Like many PoE comparisons: **not competitors, complements**. Any serious player ends up using both routinely. The difference is when to open each one:

- If your question starts with "how does" or "what does it mean" → **wiki**.
- If your question starts with "what's the exact value of" or "what drops" → **PoEDB**.

If you're just starting, bookmark the wiki. It's the best onboarding tool. You'll discover PoEDB naturally when you start crafting or target farming in endgame, and from there you'll alternate between the two without thinking about it.
