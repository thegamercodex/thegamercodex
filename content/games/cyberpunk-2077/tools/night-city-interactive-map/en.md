---
title: "Night City Interactive Map"
description: "Web-based interactive Cyberpunk 2077 map with filters for collectibles, side jobs, gigs, NCPD scanner hustles, fast travel, and vendors."
quickTake: "When you're chasing 100% completion or you lost track of an iconic weapon, this map shows exactly where it is. Clean UI, good filters, not the prettiest but it gets the job done."
---

## What it is

Night City Interactive Map (`nightcity.io`) is a web map of Cyberpunk 2077's open world, maintained by the community. It's one of several similar maps (Cyberpunk2077-map.com, AtlasForge, GameMappers) — picking between them is usually a UX preference.

Covers all of Night City (Watson, Westbrook, Heywood, Pacifica, Santo Domingo, Badlands) and Dogtown if you have Phantom Liberty. Filters for content types: side jobs, gigs, NCPD scanner hustles, cyberpsycho sightings, tarot cards, iconic weapons, vehicles, vendors, fast travel.

## What problem it solves

Cyberpunk 2077 has hundreds of POIs (points of interest) scattered across Night City. The in-game map shows some but not all:
- Iconic weapons don't appear until you discover their area.
- Tarot cards only get marked after talking to Misty post-prologue.
- NCPD scanner hustles appear but without filters.

For players going for 100% completion, finding all of those without a guide is weeks of random exploration. Night City Interactive Map aggregates every POI with filters and lets you mark items as "completed" for personal progress tracking.

## Differentiation

Versus **Cyberpunk2077-map.com**: similar content, different layout. Cyberpunk2077-map has more dense info per click; Night City is more visual with cleaner assets. It's a preference call.

Versus **AtlasForge**: AtlasForge attempts a 3D view (more experimental). Night City is classic 2D top-down, faster to load.

Versus the **in-game map**: the in-game map is authoritative but strict about what it shows (revealed-on-discovery). Night City Interactive shows everything upfront — that's a spoiler for players who prefer to discover, an advantage for completionists.

Versus **Fextralife wiki**: Fextralife lists locations in text; Night City shows them geographically. Complementary — one for reading, the other for navigation.

## What people use it for

**100% completion runs**: filter by type (e.g., "iconic weapons" or "tarot cards"), see which you've completed, see which are missing, plan an efficient path.

**Finding iconic weapons earlier**: unique weapons the game doesn't specifically highlight. The map tells you the exact street, so you can grab it on first playthrough.

**NCPD scanner hustles**: minor activities granting XP and cred. The map shows all of them, you can decide "I'm on route" vs "I'd detour 2km for this".

**Vendor locations**: ripperdoc-finder, weapon vendor, clothes shop. Useful when crafting or farming components.

**Planning specific runs**: e.g., "this session only cyberpsycho sightings". The map lists 17 locations, you can do them in sequence without menu round-trips.

## Who this tool isn't for

If you're on a first playthrough and want to discover Night City organically, avoid interactive maps. They'll tempt you to strip away the sense of exploration. Better to finish the story once, then use the map for completion.

If you play casually without completion obsession, the in-game map is enough. Interactive maps are for "I'm going for 100%".

If your internet is flaky, the web map requires connection — no offline mode. The in-game map works offline.

## How it works in practice

1. Open `nightcity.io` in any browser.
2. Default view is the full Night City. Zoom with scroll, pan with drag.
3. Sidebar has category filters: check/uncheck what types of POIs you want to see.
4. Each POI has a tooltip with name and description on hover.
5. Right-click on a POI lets you mark it as "completed" — useful for tracking. That data is saved in browser localStorage (not cloud).
6. If you enable Phantom Liberty from a toggle, Dogtown appears as an overlay on the base map.

For concurrent play sessions: keep the map open on a second monitor or phone while playing, marking POIs as you complete them.

## Honest limitations

**No cross-device tracking**. "Completed" data lives in browser localStorage. Change PC and you lose that progress. No cloud sync.

**English only**. UI and descriptions all in English. No Spanish localization.

**Manual post-patch updates**. When CDPR adds content via update (they sometimes do — Phantom Liberty was a massive add, but also micro-patches with new side jobs), the map can take weeks to sync.

**Spoilers for story content**. Some side jobs whose triggers are story-related show without warning. To preserve narrative freshness, avoid reading quest descriptions with "?" before playing them.

**No "near me" filter**. Doesn't tell you "what POIs are within 500m of where you are" — you have to orient visually. Other maps (some GameMappers) have a player-position overlay; this one doesn't.

## How to get started

1. Open `nightcity.io` in any browser.
2. If you have Phantom Liberty, toggle Dogtown on — without it, the base map is enough.
3. Decide what you're looking for: to hunt iconic weapons, filter only that category. For a 100% completion run, enable everything.
4. While playing, keep the map open on another device or monitor. When you're near a POI, navigate to the area and complete. Mark as done after.
5. Iterate: progress the main story in normal sessions, periodically open the map to "what's near?" when you arrive in a new district.

Tip: to avoid spoilers, **don't enable the "main jobs" filter** until you've finished the story. Side jobs and NCPD hustles are safe; main jobs will show spoilery locations.
