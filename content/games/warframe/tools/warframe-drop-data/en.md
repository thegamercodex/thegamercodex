---
title: "WFCD Drop Data"
description: "A searchable web UI and API over Warframe's official drop tables, maintained by WFCD, to look up what each source drops and where each item falls."
quickTake: "The official drop tables, but usable. It parses DE's same numbers and lets you search 'what drops X' or 'where does Y drop' instantly."
---

## What it is

WFCD Drop Data is a web UI (plus an API) built over Digital Extremes' official drop tables. Maintained by WFCD, it parses the official numbers —not data-mined— and presents them with quick search: what a source drops, where an item falls, with what probability. It's free, open source under MIT and kept in sync with the official tables.

It's the friendly front-end to the official drop tables: same data, usable presentation.

## What problem it solves

The official drop tables are the ground truth, but they're a huge page with no convenient search: finding a specific figure there is tedious. Drop Data solves that by indexing the same numbers and giving you two-way search: "what does this source drop" and "where does this item fall".

That turns a query which takes minutes of scrolling and Ctrl+F on the official source into a seconds-long search, while keeping accuracy because the data comes straight from DE.

## Differentiation

Versus the official drop tables, Drop Data is the usability layer: same numbers, but searchable. Official for the raw ground truth, Drop Data to query it fast. Since it parses (not mines) the official source, there's no accuracy discrepancy — only convenience.

Versus the wiki, Drop Data is drop-specific with probabilities, without the context and mechanic explanations the wiki gives.

## What people use it for

**Searching where an item drops**: the most common query — finding the best farming source for a part.

**Seeing what a source drops**: what a relic, boss or bounty yields, with probabilities.

**Planning farming runs**: comparing sources of the same item to pick the most efficient.

**Consuming the API**: other tools use its API for drops.

## Who this tool isn't for

If you need the raw official source with no intermediaries (e.g. to verify just-patched content), the official drop tables are the final arbiter.

If you want mechanic explanations, the wiki is better.

## How it's used in practice

1. Go to `drops.warframestat.us`.
2. Search an item (to see where it falls) or a source (to see what it drops).
3. Read the probabilities.
4. Compare sources to pick the most efficient one to farm.

## Honest limitations

**English only**: the interface isn't translated.

**Inherits source lag**: if the official drop tables take time to reflect a patch, Drop Data does too, until it syncs.

**Drops only**: it doesn't cover mechanics, builds or economy — it's specific to drop rates.

## How to get started

Go to `drops.warframestat.us` and search the item you want to farm to see where it falls with the best probability. Bookmark it alongside the wiki — between the two you cover most "where do I get this" queries.
