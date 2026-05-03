---
title: PoE Regex
description: Interactive regex pattern generator for Path of Exile, used to search items in stash, filter map mods, gamble uniques with Gwennen, and optimize vendor inventories.
quickTake: If you roll maps, gamble with Gwennen, or filter flasks seriously, switching from generating regex manually to using this tool is one of the biggest quality-of-life upgrades you'll make. Minimal learning curve, massive time savings.
---

## What it is

PoE Regex is a web-based regex pattern generator designed specifically for Path of Exile's internal search system. The interface lets you select criteria via checkboxes and dropdowns (which mods you want on a map, which uniques you're looking for from Gwennen, which flask traits you prioritize), and the site outputs a regex string ready to copy and paste into the in-game search.

GGG enabled regex search in stash tabs and other search fields in patch 3.14 (May 2021). Since then, a constellation of community generators emerged to leverage this capability. PoE Regex (poe.re) consolidated as the most-used due to its broad coverage and active maintenance. The same author also maintains poe2.re for Path of Exile 2.

## What problem it solves

PoE generates items with dozens of possible mods, multiple tiers of each mod, and near-infinite combinations. When you roll a map, open Gwennen, or scan a vendor's stock, you need to quickly distinguish what's valuable from what's trash. Doing it by eye is slow and error-prone; writing the correct regex by hand requires knowing the syntax and memorizing exact text fragments from the game.

PoE Regex solves the technical friction of syntax. You decide what to find using natural language via checkboxes; the tool translates that to correct regex. The result: stash searches that take seconds instead of minutes, more informed gambling decisions, and far less frustration when rolling high-value content.

## What people use it for

Typical use cases, ordered by community frequency:

**Map rolling:** generate a regex that highlights maps with good mod combinations (high increased rarity, high pack size, no mods dangerous for your build) while hiding the rest. This is probably use case #1, especially in endgame with intensive mapping.

**Gwennen gambling:** the Expedition NPC sells random base items, and certain combinations have a chance to convert into valuable uniques. A well-built regex highlights only bases that can roll the uniques you want, ignoring the rest of the stock.

**Flask filtering:** when rolling utility flasks (massive currency in chance/alteration orbs), a regex highlights only the T1 mod rolls you're looking for, letting you discard the rest without reading them one by one.

**Searching massive stash tabs:** if you have 1000 items in a currency or uniques tab, regex isolates what you need in seconds.

**Vendor inventory:** some vendor recipes require specific bases. Regex highlights what the NPC sells that fits your recipe.

## Differentiation from FilterBlade and Awakened PoE Trade

This is an important distinction because the three tools touch "filter/search" but do different things:

**FilterBlade** modifies your in-game loot filter, which affects which items show on the ground when you kill monsters. It's prevention: it defines what you never see, to avoid wasted attention. Nothing to do with stash or manual search.

**Awakened PoE Trade** is a desktop overlay invoked with hotkeys while playing. It's for price-checking individual items, quick PoE Trade searches, and has a feature to save regex patterns for one-click pasting. It doesn't generate regex, it stores it.

**PoE Regex** generates the patterns from scratch based on the criteria you select. The natural flow is: use PoE Regex to create the pattern → save it in Awakened PoE Trade → paste it with a hotkey when you need it. The two tools are complementary.

## Honest limitations

**English only.** The interface, mod names, and site logic assume an English game client. If you play with translated UI, the patterns won't match because they search English strings.

**Requires updates after each league.** When GGG modifies mods, adds uniques, or changes mechanics, generators take a few days to update. Not instant. For freshly added content, sometimes you have to write regex manually.

**Doesn't replace game knowledge.** The regex shows what you asked for; if you asked badly (because you don't know what mods are really valuable in current-league mapping), the output is useless even if technically correct. It's an efficiency tool, not a substitute for game knowledge.

**PoE 1 only.** For Path of Exile 2 there's the sister site poe2.re, but since your directory treats PoE 1 and PoE 2 as separate games, this only concerns you for PoE 1 here.

**Some ecosystem generators are abandoned.** There are old sites that show up in Google searches and still function technically but with outdated data. poe.re is the most reliable, but always confirm the generated regex works in the current league.

## How it's used in practice

A typical mapper's flow:

1. Before starting the session, opens poe.re and goes to the "Map Mods" section.
2. Selects mods to highlight (increased rarity ≥30%, pack size ≥30%, no mods their build can't handle like physical reflect or no regen).
3. Copies the generated regex.
4. Pastes it in the search bar of their map stash tab.
5. Maps that match are highlighted with a white border; those that don't, are dimmed.
6. Selects and rolls only the good ones, vendoring or recycling the rest.

For Gwennen the flow is similar but the site section changes: select which uniques are worth it, generate the regex, paste it into the NPC's inventory.

## How to get started

Go to poe.re and pick the section you need (Maps, Gwennen, Flasks, Heist, etc.). The interface is direct: checkboxes and sliders. Select criteria, look at the output at the bottom of the page, copy and paste.

For your first time, I suggest starting with Map Mods because it's the most universal use case. Generate a simple regex (just "increased rarity ≥30%"), test it on a stash tab with several maps, and observe what gets highlighted. That gives you intuition about how it works, and from there you scale to more complex regex with multiple conditions.

Once familiar, integrate it with Awakened PoE Trade: save your favorite patterns there and invoke them with a hotkey while playing, without having to go back to the browser.