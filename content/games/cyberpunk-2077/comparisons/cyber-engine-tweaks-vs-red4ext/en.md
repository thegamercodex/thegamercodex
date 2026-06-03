---
title: "Cyber Engine Tweaks vs RED4ext — the two base frameworks of Cyberpunk 2077 modding"
description: "CET is the Lua scripting layer with an in-game console; RED4ext is the native C++ layer that TweakXL, ArchiveXL, and Codeware load on. Most modern mods require both."
---

Anyone starting to mod Cyberpunk 2077 hits these two names fast in the "requirements" list of almost every mod. The confusion is natural: both are essential frameworks, open-source, Windows-only, community-maintained, and both stay installed as permanent infrastructure. But they solve different layers of the same problem —REDengine 4 doesn't expose a public modding API— so they aren't alternatives but complements. This comparison clarifies what each does and when one is enough.

## Layer they cover

The core difference is the language and the kind of mod each one enables.

- **CET** injects into the executable and translates the game's internal C++ functions into Lua calls accessible from mods. It's the base for Lua mods like Appearance Menu Mod or Native Settings UI.
- **RED4ext** hooks the game loader and loads plugins written in C++ from a dedicated folder, exposing typed wrappers to engine functions. It's the base for intermediate dependencies like TweakXL, ArchiveXL, and Codeware.

In practice, complex mods use both: the intermediate dependencies are C++ (RED4ext), but the final mod you see can be Lua (CET). That's why CET is a transitive dependency for hundreds of mods and RED4ext is one for the tools those mods rely on underneath.

## Interface and user experience

Here the two diverge sharply.

- **CET** ships a console overlay with a configurable hotkey: Console (live Lua), Logs, TweakDB Editor, RTTI inspector, and a game state object viewer. It's used to run commands (spawn items, teleport, set quest flags) and, above all, to diagnose broken mods: the Logs panel enumerates Lua errors and is the first place to look when something fails.
- **RED4ext** has zero UI. No menu, no panel. The only feedback is text logs in `red4ext\logs\`. For non-technical users that can be frustrating, though in the normal flow you don't even notice it: install once and it stays quiet.

Both assume some technical familiarity. CET at least gives visual feedback; RED4ext is all or nothing and doesn't degrade gracefully: if it crashes on load, the mods depending on it don't start either.

## License, maintenance, and limitations

- **CET**: MIT, maintained by yamashi (maximegmd) and contributors.
- **RED4ext**: GPL-3.0, maintained by WopsS and contributors.

Both share the same fragility: every game patch breaks the framework until a compatible version ships. It's wise to wait a 24-72h window post-patch before playing with mods, and to check releases on GitHub. Phantom Liberty, for example, required a major CET rebuild and old mods stopped working until updated. Neither applies to console (PS5, Xbox) due to the injection architecture, and since Cyberpunk is single-player, anti-cheat risk doesn't apply (though CET can disable Steam achievements when mods are loaded).

## Which one?

- **A mod asks only for CET** → CET. It's a pure Lua mod; you don't need the native layer.
- **A mod lists "REQUIRES RED4ext" or asks for TweakXL/ArchiveXL/Codeware** → RED4ext. Those dependencies are C++ and load on top of it.
- **You want an in-game console for debugging or commands** → CET. It's the only one with an interactive overlay and Logs panel.
- **You're going to write a native mod for performance or deep access** → RED4ext. It exposes typed wrappers for compiled C++ plugins.
- **You install AMM, Native Settings UI, or a large mod setup** → both. It's the most common case and what most guides assume.

They're complementary, not rivals: in a serious setup you end up with both installed upfront. The practical question isn't "which one" but "which one does the mod I want ask for" — and the answer is usually both.
