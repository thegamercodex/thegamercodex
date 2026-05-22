---
title: "Jotunn — The Valheim Library"
description: "Community library for Valheim mod devs. Provides stable APIs on top of BepInEx to add items, prefabs, recipes, RPCs, custom GUI, and more, without reflection or hand-written Harmony patches."
quickTake: "Jotunn isn't a mod you install 'just because' — it's a dependency many important mods require. If your modlist includes new gear, custom mechanics, or developer tools, you'll have it whether you notice or not."
---

## What it is

Jotunn (jötunn, the Norse giants) is an open-source modding library (GPL-3.0) maintained by the Valheim-Modding team on GitHub. Its role is to be **the abstraction layer** between BepInEx (the loader) and mods that add content to the game.

Instead of every mod learning C# reflection to inject custom items and prefabs — fragile, dangerous on game updates — Jotunn exposes clean APIs: `ItemManager`, `PrefabManager`, `LocalizationManager`, `RPCManager`, `GUIManager`. The mod registers its content with Jotunn and the library handles correct instantiation, surviving hot-reload, version management, and so on.

## What it solves

Without Jotunn, adding a new item to Valheim requires:
- Using `Harmony.Patch()` to intercept the game's ObjectDB.
- Reflection to clone and modify existing prefabs.
- Hand-rolling client-server sync (Valheim is client-authoritative).
- Reapplying everything on every game update because offsets change.

Jotunn abstracts all that:
```csharp
var customItem = new CustomItem("MyAxe", "BronzeAxe");
ItemManager.Instance.AddItem(customItem);
```
Three lines and your custom axe exists, syncs across multiplayer, shows up in recipes, and survives the next Iron Gate patch (provided Iron Gate doesn't break ObjectDB).

For devs that's the difference between maintaining a mod and abandoning it after an update.

## Differentiation

No direct competitor. **Jotunn is the standard** for content-adding Valheim mods. Almost any non-trivial mod (Therzie's monsters, Smoothbrain mods, Epic Loot, Better Trader, etc.) depends on Jotunn.

Before Jotunn (~2021), every mod implemented its own injection approach and they broke against each other. Jotunn unified that. It's one of the reasons the Valheim mod ecosystem scaled to thousands of compatible mods.

For the **end user**, Jotunn is invisible — it's a dependency that auto-installs when another mod requires it.

## What people use it for

**Mod developers**. To write a content-adding mod (items, monsters, prefabs, custom biomes), Jotunn is the SDK to use.

**Users with complex modlists**. With 30+ content mods, 10-15 of them almost certainly depend on Jotunn. Keeping it up-to-date and functional is critical.

**Localization authors**. `LocalizationManager` lets you ship translations for your mods via simple JSON files. Good base to make English-only mods multilingual.

**Custom GUI**. `GUIManager` gives clean hooks to add in-game UI (panels, buttons, modals) without fighting Unity's UI system directly.

**Custom RPCs**. Extra client-server communication (e.g., a mod that syncs state across players) uses Jotunn's `RPCManager` instead of hacking Valheim's system.

## Who this tool is not for

If you just want to **play Valheim with QoL mods**: don't install Jotunn manually. Your mod manager pulls it as a dependency when needed.

If you're NOT a developer and DON'T use mods that require it: you don't need it. Installing it standalone does nothing useful.

If you mod a non-Valheim game: Jotunn is Valheim-specific. For other Unity games, BepInEx is the universal base but the abstraction libraries differ (ItemLib for Risk of Rain 2, LethalLib for Lethal Company, etc.).

## How it works in practice

**As a user**:
1. Your mod manager (r2modman/Gale/TMM) adds it as an auto-dependency when you install mods that require it.
2. Do nothing. Verify in logs that `Jotunn v2.x.x` loads without errors.

**As a developer**:
1. Install Visual Studio or Rider.
2. Clone `github.com/Valheim-Modding/Jotunn`.
3. Follow the "Step-by-Step Guide" at `valheim-modding.github.io/Jotunn/guides/guide.html` to scaffold your first mod.
4. Use the managers (`ItemManager`, `PrefabManager`, etc.) instead of Harmony directly where possible.
5. Publish on Thunderstore with the Jotunn dependency declared in `manifest.json`.

## Honest limitations

**Strict versioning**. A mod compiled against Jotunn 2.18 may break if your manager installs Jotunn 2.20. Managers handle this reasonably well, but sometimes a manual rollback is needed.

**Update lag after major game patches**. When Iron Gate breaks an internal system (e.g., ItemDrop changes in Ashlands), Jotunn needs to update before the downstream mods. Usually 1-2 weeks.

**High learning curve for devs**. If you've never touched C# or Unity, reading the Jotunn docs takes patience. Not Jotunn-specific — it's the native-modding barrier for Unity games.

**English-only docs**. The official guide and samples are all in English. No Spanish version.

**No visual toolchain**. Unlike Creation Kit (Skyrim), there's no visual item editor. You define everything in code.

## Getting started

**As a user**: nothing manual. Your manager handles it.

**As a dev**:
1. Go to `valheim-modding.github.io/Jotunn/`.
2. Read the "Step-by-Step Guide" and the "Developer's Quickstart".
3. Clone the `JotunnModExample` template from their GitHub.
4. Configure VS/Rider, pointing it at `Valheim_Data/Managed/` to resolve the game DLLs.
5. Build, drop into `BepInEx/plugins/`, open the game, verify it loads error-free.
6. Iterate. For technical support, the Valheim Modding Discord (linked from their GitHub) is where the community helps.

For the **casual user**, the only required action is: confirm Jotunn is in your mod list when other mods require it. The manager handles everything else.
