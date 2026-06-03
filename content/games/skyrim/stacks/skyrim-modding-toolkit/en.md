---
title: The Skyrim modding toolkit
description: The six tools that form the base of any Skyrim mod setup — manager, hub, frameworks, and conflict utilities. The stack to have before installing your first mod.
---

Skyrim is perhaps the most modded game in history, but also one where a badly built setup breaks easily. Before installing content mods, it pays to have the right base: a manager that isolates files, the frameworks the rest of the mods assume, and the utilities that keep your load order healthy. This six-tool stack is that base.

## The right order

It all starts with **Mod Organizer 2**: instead of dumping files into the game folder, it keeps them in isolated profiles with a visual load order. That's what lets you experiment without breaking your install. Mods almost always come from **Nexus Mods**, the main hub, where you find versions, requirements, and descriptions.

On top of that base go the frameworks. **SKSE64** (Script Extender) is the silent dependency of most advanced mods: without it, many won't even load. **SkyUI** rewrites the interface and, above all, provides the MCM menu countless mods use to expose their options.

The last two keep order. **LOOT** automatically sorts your load order using community rules, avoiding the most common conflicts. And when two mods truly clash, **SSEEdit** lets you clean plugins and resolve the conflict by hand.

## Why these six

Each covers a layer of infrastructure, not content:

- **Management** → Mod Organizer 2
- **Mod source** → Nexus Mods
- **Base frameworks** → SKSE64 + SkyUI
- **Order and conflicts** → LOOT + SSEEdit

These aren't mods you "see" in the game: they're the foundation everything else installs on without making your Skyrim unstable. Each tool has its full analysis in the codex.
