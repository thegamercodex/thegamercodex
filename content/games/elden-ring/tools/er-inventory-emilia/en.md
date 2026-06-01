---
title: "Emilia's Build & Inventory Tool"
description: "Build planner + inventory manager with frame data, datamined info, and offline mode for PCs without permanent internet."
quickTake: "For technical theorycrafters: if you care about exact frame data, hitboxes, or game-file values no other planner exposes, this is the tool — less polished UI, unfiltered data."
---

## What it is

Emilia's Build & Inventory Tool is an open-source web app maintained by Emilia, a member of Elden Ring's technical community. It lives at `er-inventory.nyasu.business` and combines build planner + inventory tracker + frame data explorer. Data comes from unpacked game files, which means more complete coverage than any editorial site.

It's available as a PWA (Progressive Web App): you can install it in the browser and use it offline after the first load.

## What it solves

Editorial planners (EIP, tarnished.dev) cover ~95% of items but filter out data useless to the average user (exact drop rates, hitboxes, animation frame data). Emilia's tool doesn't filter: if it's in the game files, it's here.

It also solves the offline problem: if you play on a PC without permanent internet (LAN parties, travel), you can keep consulting builds and items without connection.

## Differentiation

Against EIP/tarnished.dev, it wins on raw data and open source — all code lives on GitHub under Emilia's repo. It loses on visual polish: the UI is functional but doesn't aim to be pretty. Against Mugen Monkey, it wins massively on technical coverage.

## What people use it for

**Frame data lookup**: how many frames an attack startup lasts, recovery, hyperarmor windows.

**Drop rate verification**: what's the real probability of dropping that rare consumable.

**Inventory simulation**: plan your inventory for a specific run, see exact weight totals.

**Offline reference**: load the tool once with internet, then consult without connection.

**Modders and dataminers**: the extracted data is the same source modders and data extractors use.

## Who shouldn't use it

If you only want to build something quickly with a pretty UI, EIP or tarnished.dev are better.

If dense tables and unpolished UI make you dizzy, you won't enjoy the experience.

If you only play on console without a PC, the offline PWA doesn't apply.

## How it's used in practice

1. Open `er-inventory.nyasu.business` in a modern browser.
2. For PWA: in Chrome/Edge → "Install app" from the address bar menu.
3. For build planning: "Builder" panel → enter stats and pick items.
4. For frame data: "Frame Data" panel → select weapon → see animation table.
5. For inventory: "Inventory" panel → simulate item pickups and see weight.
6. Panels are independent but share the dataset.

## Honest limitations

**Technical UI**: dropdowns without search in some panels, dense tables, austere palette. Not designed for casual users.

**Learning curve**: many tabs and options; takes 10-15 minutes to understand what's where.

**Maintained by one person**: updates depend on Emilia's time; some requests take longer.

**Uncurated data**: you see everything in game files, including unused or internal-only items that don't appear in normal gameplay.

**Poor mobile**: the tool is desktop-first; mobile works but density makes it hard to read.

## How to start

1. Visit `er-inventory.nyasu.business`.
2. Decide which panel you need (Builder, Frame Data, Inventory).
3. If you want offline use, install as PWA.
4. Explore the tabs — takes time to understand the organization.
5. For technical questions, the GitHub repo has open issues where Emilia responds.
