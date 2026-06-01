---
title: "tarnished.dev Build Planner"
description: "Modern Elden Ring planner with fuzzy item search, shareable URLs per build, and full Shadow of the Erdtree support."
quickTake: "The planner with the best UX in the catalog — searching for a weapon or talisman is typing the first few letters and the item appears. If you spend 30 minutes planning, the reduced friction shows."
---

## What it is

tarnished.dev is a modern build planner maintained by an independent dev. It lives at `tarnished.dev/build-planner` and covers the base game + Shadow of the Erdtree. Free, no ads, no login. Data is updated with each major balance patch (typically within 1-2 weeks of release).

The UI is built with UX in mind: item cards, optional drag-and-drop for swaps, collapsible panels. Each build generates a shareable URL that preserves all state.

## What it solves

Classic planners (Mugen Monkey, EIP) are functional but item-lookup friction is high — long dropdowns, infinite scrolls. tarnished.dev solves this with fuzzy search: type "blood" and Bloodhound's Fang, Mohgwyn's Sacred Spear, Bloody Helice, etc. appear.

It also solves build-sharing: the URL is stable, copy-paste to Discord or Reddit works, and anyone opens it without installing anything.

## Differentiation

Against EIP it wins on UX (fuzzy search, smooth animations) and iteration speed. It loses on rare-item coverage — some DLC items took time to appear post-launch, though as of 2026 it's complete. Against Mugen Monkey, it wins on everything visual but loses on starting class optimizer (Mugen's unique feature).

## What people use it for

**Fast iteration**: try 5 variants of a build in 10 minutes without wrestling with dropdowns.

**Builds shared on Discord**: the URL is the standard way to pass a build to a friend.

**Visual validation**: see your Tarnished with full gear, talismans visible, on a single screen.

**DLC planning**: with Scadutree Fragments integrated, you plan your effective Realm of Shadow level.

**Mobile-friendly**: responsive works, you can edit builds from your phone.

## Who shouldn't use it

If your priority is minimum-total-level optimization (capped PvP), Mugen Monkey does it better with its class optimizer.

If you want 100% complete data on obscure items, EIP usually has better longtail coverage.

If JS-heavy sites bother you, the cold start of tarnished.dev is slow — ~2 seconds to render initial UI.

## How it's used in practice

1. Open `tarnished.dev/build-planner`.
2. Pick starting class from the top dropdown.
3. Raise stats with sliders or type the value.
4. To equip items, click an empty slot → search bar → type the first letters of the name.
5. Repeat for all slots (weapons, armor, talismans, sorceries, incantations).
6. Check AR/defenses in the side panel.
7. Copy the URL — the full build is encoded in the path.

## Honest limitations

**Slow cold start**: the JS bundle is heavy, first load is slower than Mugen.

**No starting class optimizer**: you must test manually or consult Mugen.

**No frame data**: for frame-perfect counter-play or i-frames on rolls/dodges, consult Emilia's Frame Data Explorer.

**Maintained by one person**: update cadence is good but may pause if the dev is busy.

**No JSON export**: the URL is the only export format.

## How to start

1. Visit `tarnished.dev/build-planner`.
2. Pick starting class.
3. Define target level (NG cap or PvP 125/150).
4. Iterate stats and gear until you hit the desired spread.
5. Copy the final URL and save it.
