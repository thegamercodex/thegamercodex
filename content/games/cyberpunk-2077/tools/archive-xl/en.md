---
title: "ArchiveXL"
description: "Framework that loads custom archives in Cyberpunk 2077 without replacing the game's, avoiding conflicts between mods."
quickTake: "Before ArchiveXL, adding a new asset meant overwriting an existing one — mods clashed. ArchiveXL lets multiple mods add parallel assets without stepping on each other. It's the SKSE of archives."
---

## What it is

ArchiveXL is an open-source (MIT) framework maintained by psiberx, twin brother of TweakXL. While TweakXL modifies logical data (TweakDB stats), ArchiveXL handles physical assets: meshes, textures, animations, sounds. RED4ext plugin, depends on it.

What's unique is that ArchiveXL allows **extension** instead of **replacement**: modders can add new items to the game with their own archives without overwriting vanilla files. That eliminates the biggest source of inter-mod conflicts from the pre-XL years.

## What problem it solves

Before ArchiveXL, adding a new weapon to the game forced a bad trade-off — the mod could either:
1. Overwrite a vanilla archive (breaking other mods also modifying it).
2. Create a new `.archive` but with no clean way to register it (the game doesn't load arbitrary archives without the modder hacking the load order).

ArchiveXL solves this by exposing an API that registers custom archives in the game's load list. Each mod contributes its own archive, ArchiveXL orders and merges them, no vanilla overwrites.

Result: 50 weapon mods can coexist, each with its assets in separate archives, without clashing.

## Differentiation

Versus **TweakXL**: TweakXL modifies data (stats); ArchiveXL adds physical assets. For a complete mod adding "Excalibur Sword" to the game: ArchiveXL provides the 3D model + texture, TweakXL registers "Items.Excalibur" in TweakDB with stats. Complementary.

Versus **REDmod**: official REDmod has its own archive merge system, but more limited. ArchiveXL is community, much more flexible — supports dynamic appearance (binding outfit variants by gender/body type), equipment slot extension, and other advanced features REDmod doesn't.

Versus **WolvenKit**: WolvenKit creates archives (authoring); ArchiveXL loads them (runtime). Both are needed for new-asset mods.

## What people use it for

**As a dependency for item mods**: when you install a "Cyber Katana" or "Stealth Outfit Pack" mod, ArchiveXL is almost always in the requirements. Install once and keep it as infrastructure.

**To create custom item mods**: if your mod adds weapons, clothing, vehicles, or any visible asset, ArchiveXL handles loading. Combine with WolvenKit (to build the asset) and TweakXL (to register the item).

**To extend outfit variants**: a powerful ArchiveXL feature is adding variants of the same outfit by gender or body type without duplicating the item. Was awkward to achieve before.

**To prevent conflicts in mod-heavy installs**: if you have 30+ item mods installed, ArchiveXL keeps the game stable. Without it, any two mods touching the same vanilla slot would break.

## Who this tool isn't for

If you only play mods without creating them, ArchiveXL is invisible. Install when a mod asks for it.

If your mod only changes stats without adding assets, ArchiveXL contributes nothing — TweakXL alone is enough.

If your mod is a direct texture replacement of a vanilla asset (HD Reworked Project, for example), you don't need ArchiveXL — older texture mods keep working by overwriting archives directly. ArchiveXL is for **adding** assets, not **replacing** them.

## How it works in practice

As an end user:
1. Download ArchiveXL from Nexus or `github.com/psiberx/cp2077-archive-xl/releases`.
2. Extract into `red4ext\plugins\ArchiveXL\` inside the game folder.
3. Launch the game once. ArchiveXL initializes silently — check logs in `red4ext\logs\` to confirm it loaded OK.
4. After that, mods listing "Requires ArchiveXL" can be installed normally.

As a mod author:
1. Create your archive with WolvenKit containing the new assets.
2. Add an `.xl` file (ArchiveXL's own format) describing how to register the archive — which slots it fills, which appearance variants, etc.
3. Package your mod with the archive + the `.xl` and distribute.
4. The user installs into `archive\pc\mod\` and ArchiveXL handles the rest.

## Honest limitations

**Requires knowing internal schemas**. To write `.xl` files correctly, you need to understand how Cyberpunk handles slots, appearance graphs, and entity resolution. Not trivial.

**YAML syntax similar to TweakXL but different schema**. If you already know TweakXL, ArchiveXL is a smaller curve, but keys and values are archive-subsystem-specific.

**Updates required post-game-patch**. Since it depends on RED4ext, game patches can temporarily break things. Expect 24-72h post-patch for a compatible release.

**No dedicated GUI**. There's no visual editor for creating `.xl` files. You write them by hand following examples. For non-technical users that's a barrier.

**Scattered documentation**. The official wiki (`github.com/psiberx/cp2077-archive-xl/wiki`) covers basics, but advanced examples live in community mods. Learning requires reading existing mod code.

## How to get started

As a user: install when a mod requires it. No prior config needed.

As a creator:
1. Make sure you have WolvenKit fluency first — without ability to create archives, ArchiveXL contributes nothing.
2. Read the wiki: `github.com/psiberx/cp2077-archive-xl/wiki` covers `.xl` format and basic examples.
3. Study an existing mod: download one that adds items and open its `.xl` to see how it registers assets.
4. Start with a minimal mod — adding a single item with basic variants. Then extend.
5. The Modding Community Discord is where real problems get resolved — the wiki is a good starting point, but edge cases get worked out in chat.

Tip: if you're creating an item mod, you almost always need the three frameworks together — RED4ext, ArchiveXL, TweakXL. Verify your mod lists all of them as dependencies when you publish.
