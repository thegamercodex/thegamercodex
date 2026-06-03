---
title: The Cyberpunk 2077 modding toolkit
description: The six tools that form the base of Cyberpunk 2077 modding — manager, scripting frameworks, and asset loading. The infrastructure nearly every modern mod requires.
---

REDengine 4 exposes no public modding API, so the community built a stack of frameworks the rest of the mods assume as given. Before installing any content mod, it pays to understand —and have installed— that base. This six-tool stack is exactly that infrastructure: the setup that shows up in the "requirements" of nearly any Cyberpunk mod.

## The layers of modding

Everything is managed from **Vortex**: it installs, organizes, and resolves dependencies without you copying files into the game folder by hand. It's the comfortable entry point.

Beneath it live the two base frameworks, solving different layers. **Cyber Engine Tweaks (CET)** translates internal functions to Lua and brings an in-game console; it's the base of Lua-written mods. **RED4ext** does the same for C++: it loads native plugins and is the base of intermediate dependencies like TweakXL and ArchiveXL.

Those intermediate dependencies complete the stack. **ArchiveXL** lets you load new assets —clothing, items, NPCs— without replacing base files, which avoids conflicts. **TweakXL** edits the TweakDB to change stats, prices, and balance in a mod-compatible way. And **Native Settings UI** provides the in-game menu where those mods expose their options, without you editing config files.

## Why these six

These aren't content mods; they're the foundation:

- **Management** → Vortex
- **Lua scripting** → Cyber Engine Tweaks
- **Native plugins** → RED4ext
- **Asset loading** → ArchiveXL
- **Balance editing** → TweakXL
- **In-game settings** → Native Settings UI

With this base installed, installing content mods becomes a one-click affair. Each tool has its full analysis in the codex.
