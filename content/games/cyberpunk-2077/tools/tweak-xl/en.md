---
title: "TweakXL"
description: "Modding framework that modifies TweakDB, Cyberpunk 2077's internal database of item stats, perks, and game entities."
quickTake: "Mods that rebalance economy, perks, weapon damage, or item stats almost always use TweakXL under the hood. Invisible to end users, essential for balance mod creators."
---

## What it is

TweakXL is a Cyberpunk 2077 mod maintained by psiberx (GitHub) that lets you modify TweakDB — the proprietary REDengine 4 database containing essential information about items, weapons, perks, cyberware, NPCs, and enemies. Open-source (MIT), depends on RED4ext.

TweakDB traditionally could only be edited by building a full mod with scripts. TweakXL exposes a declarative interface allowing you to add, modify, or remove TweakDB entries using simple YAML files — the mod creator specifies what changes and how, TweakXL applies the changes at runtime without touching the game's archives.

## What problem it solves

Cyberpunk 2077 centralizes critical data in TweakDB: weapon DPS, perk effects, item stats, vendor inventories, etc. Changing any of those requires understanding TweakDB's schema and, before TweakXL, touching binary archives — invasive, unshareable between mods.

TweakXL does two things:
1. Lets you define tweaks in readable YAML files (instead of binaries).
2. Resolves conflicts between multiple mods modifying the same entry (last-write-wins with merge semantics).

That enables a healthy ecosystem of balance mods: the creator writes YAML, TweakXL handles runtime patching, conflicts are managed declaratively.

## Differentiation

Versus **ArchiveXL**: TweakXL modifies logical data (stats, DB entries); ArchiveXL adds physical assets (meshes, textures, sound files). They're typically used together: to add a new weapon, ArchiveXL provides the 3D model and TweakXL registers the item with its stats in TweakDB. Complementary, not alternative.

Versus **CET**: CET can modify TweakDB at runtime via Lua but requires custom scripts. TweakXL is declarative (YAML, no scripting), much simpler for changes that don't need logic.

## What people use it for

**As a dependency for balance mods**: when you install a mod that rebalances perks (e.g., "New Game+ Balance Mod"), TweakXL is almost always a prerequisite. End users don't interact, they just install it.

**To write your own balance mods**: if you want to change a specific weapon's damage, a cyberware's stats, or a vendor's prices, you write YAML for TweakXL and you're done — no script compilation, no binary edits.

**To add new items to the game**: combining TweakXL (registers the item in TweakDB) with ArchiveXL (loads assets) and WolvenKit (creates assets), you can add completely new items.

**To experiment with stats without commitment**: because TweakXL applies changes at runtime without touching archives, you can test variants, undo a tweak, or adjust values without reinstalling anything.

## Who this tool isn't for

If you only play mods without creating them, TweakXL is an invisible dependency. You install it when a mod requires it and never touch it again.

If your mod only adds visual assets (textures, meshes) without touching stats, you don't need TweakXL — ArchiveXL is enough.

If your mod requires conditional logic (e.g., "this perk only applies if you have this weapon equipped"), TweakXL doesn't expose that level — you'd need Codeware or redscript directly.

## How it works in practice

As an end user:
1. Download TweakXL from Nexus or `github.com/psiberx/cp2077-tweak-xl/releases`.
2. Extract into the game folder — TweakXL is a RED4ext plugin, so it goes in `red4ext\plugins\TweakXL\`.
3. Launch the game once to verify it loads. TweakXL log goes to `red4ext\logs\` — check there that it initialized OK.
4. From then on, any mod listing "Requires TweakXL" can be installed.

As a mod author:
1. Create a YAML file following the documented syntax (`github.com/psiberx/cp2077-tweak-xl/wiki`).
2. Specify which TweakDB entries you modify: e.g., `Items.Preset_Lexington_Default.damage: 250` (real names are long and specific).
3. Package the YAML in your mod and distribute — the user places it in the TweakXL folder and tweaks apply on next launch.

## Honest limitations

**Requires knowing the TweakDB schema**. Entry names (`Items.Preset_Lexington_Default`) aren't officially documented. Modders discover keys via WolvenKit (TweakDB browser) or by inspecting existing mods.

**No conditional logic**. If your balance change depends on game state (player level, quest progress), TweakXL alone isn't enough — you have to combine it with CET/redscript.

**Mod conflicts**. If two mods modify the same TweakDB entry, the last one loaded wins. No intelligent merging for numerical values — it's pure overwrite. Resolving conflicts requires manually editing the YAMLs.

**Updates required post-patch**. Since it depends on RED4ext, when RED4ext updates after a game patch, TweakXL may need its own update. Expect a 24-72h window.

**Scattered documentation**. YAML syntax covered in the GitHub wiki, but practical examples live in third-party mods. Learning requires reading existing mod code.

## How to get started

As an end user: install when another mod requires it. No prior config needed.

As a creator:
1. Read `github.com/psiberx/cp2077-tweak-xl/wiki` — YAML syntax, basic examples.
2. Look at a simple existing mod on Nexus (e.g., a small balance tweak) and open its YAML to see the structure.
3. Start with a trivial tweak (changing a single damage value) and verify in-game that it applied.
4. Iterate: add more entries, test conflicts, keep a version-control system for your YAML.
5. When you're ready to distribute, read the wiki's packaging section — it's important for the mod to load OK across different installs.
