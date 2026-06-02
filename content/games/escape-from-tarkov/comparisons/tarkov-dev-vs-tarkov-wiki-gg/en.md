---
title: Tarkov.dev vs Tarkov Wiki — which reference to use for what
description: Deep comparison between the community database and the canonical wiki. Each wins in distinct domains and most serious players use both.
---

Tarkov.dev and the Tarkov Wiki on wiki.gg represent two fundamentally different approaches to "where do I look up information about Escape from Tarkov". One is a structured database, API-updatable and designed for fast queries. The other is a traditional wiki built on MediaWiki, with long articles edited by the community. The common trap is thinking they're substitutes — they aren't. They're complements, and understanding which to use for what saves hours of misdirected searching.

## What each one does

Tarkov.dev is the structured source of truth for jugable data: real-time flea market prices, hideout recipes, per-trader task lists, interactive maps, and the public GraphQL API at api.tarkov.dev that powers most other tools in the ecosystem (including TarkovTracker, Tarkov Advisor, RatScanner, and several overlays). When a patch changes prices or nerfs an ammo, tarkov.dev reflects that in hours because it relies on automated scraping and structured community contributions.

The Tarkov Wiki on wiki.gg, on the other hand, is the narrative encyclopedia: editorial articles on mechanics, trader lore, location history, removed mechanics the community wants to document, trivia, and context that doesn't fit in a database. It's maintained by volunteer editors under MediaWiki and preserves the game's historical coverage from its early beta years. The 2023 migration from Fandom kept all the editorial content but dropped the previous platform's commercial weight.

## Update speed

Here the difference is brutal. Tarkov.dev operates on structured-format data (JSON, the tarkovdata GitHub repo) and updates via automatic or community-submitted PRs in hours. When BSG announces a patch on TarkovTV on Friday, the flea prices reflected on tarkov.dev by Saturday are already the new ones.

The wiki depends on manual editors writing prose. After a big patch, numeric articles (ammo penetration, armor stats, damage modifiers) usually stay outdated for weeks. It's not negligence — it's the nature of the format. An article on "the Customs wiki" doesn't update via bot; someone has to rewrite paragraphs.

That's why for any current numeric data, tarkov.dev wins. The wiki is the right place when the data you want is narrative or contextual.

## Editorial depth vs raw data

Tarkov.dev is deliberately minimalist in prose. An item page shows value at each trader, flea price, recipes using it, tasks requiring it, links to related items. But it doesn't explain why an item is good, what builds use it, or its context in the meta. That's a design decision — tarkov.dev wants to be a clean data source other tools can reuse.

The wiki gives you prose: 5,000-word articles on a location explaining spawns, routes, history, in-game events that happened there, trivia. If you want to understand a trader's context (who Therapist is, why she sells meds, her role in the story that expands with 1.0), the wiki is where you find it. Tarkov.dev would only tell you what she sells.

## API support and downstream ecosystem

This is probably the most important difference for tooling. Tarkov.dev exposes a free open GraphQL API. That means anyone can build a dashboard, Discord bot, overlay, or site on top of the game's data. TarkovTracker, Tarkov Advisor, RatScanner, several Discord bots — all pull data from tarkov.dev. That network effect is enormous: when tarkov.dev updates, the entire ecosystem updates.

The wiki doesn't have an equivalent programmatic API. Yes, MediaWiki has its own API allowing article scraping, but the content is unstructured prose — not amenable to useful programmatic integration. If your need includes "I want data in my own tool", tarkov.dev is the only option.

## UX and accessibility

Tarkov.dev has a modern interface optimized for fast search and cross-linked navigation. Global search finds any item, task, trader, or location in one or two keystrokes. The resulting page loads fast and links to related entities are immediate.

The wiki is standard MediaWiki with the wiki.gg theme. Search works, but navigation is classic wiki: side TOC, in-text hyperlinks, historical redirects. For people used to the wiki workflow it's familiar; for people coming from direct Google searches it can feel uphill. The trade-off is that long reading is more comfortable in a wiki than in a compacted database.

## When each one wins

| Use case | Winner | Why |
|---|---|---|
| Current flea price of an item | Tarkov.dev | Refreshes in hours, not weeks |
| Narrative walkthrough of a task | Tarkov Wiki | Editorial story + steps |
| Exact hideout recipes | Tarkov.dev | Structured data with costs |
| Trader and location lore | Tarkov Wiki | Long editorial articles |
| API for your own tool | Tarkov.dev | Free open GraphQL |
| History of changes between wipes | Tarkov Wiki | Documents removed mechanics |
| Interactive maps with filters | Technical tie | Tarkov.dev has basics; wiki links to externals |
| Verification of numeric stats | Tarkov.dev | Faster reflecting patches |

## Combined recommendation

If you only use one, use tarkov.dev — the update speed and API make it the source of truth for almost everything. The wiki is the perfect complement for narrative context and editorial deep dives. Most serious players use both: tarkov.dev open in a permanent tab as operational reference, the wiki as the destination when something needs deeper explanation. They don't compete — they collaborate, and recognizing them as complements rather than substitutes saves you misdirected search time.
