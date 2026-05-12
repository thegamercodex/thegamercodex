---
title: "Native Settings UI"
description: "UI framework letting other Cyberpunk 2077 mods add their settings to the game's native menu instead of text files."
quickTake: "If you'll have multiple mods with configurable options, Native Settings UI saves you from manually editing JSON. It's the second mod you install after CET — almost every modern mod assumes it."
---

## What it is

Native Settings UI is a lightweight open-source (MIT) framework built by justarandomguyintheinternet. Its job is to extend the game's Settings menu so other mods can add their own options — sliders, toggles, dropdowns — visually integrated.

Depends on Cyber Engine Tweaks (CET) to work, and is in turn a dependency for many mods that require user configuration (effect intensity, hotkey assignments, feature toggles).

## What problem it solves

Without Native Settings UI, configuring a mod means opening its `config.json` or `settings.lua` in a text editor, modifying values, saving, reloading the game. That flow has three problems:
1. For non-technical users, editing JSON is intimidating.
2. Without validation, syntax errors break the mod silently.
3. Changes require a game restart — no live tweak.

Native Settings UI solves this by exposing a simple API: mods register their settings, Native Settings UI renders them in the standard menu, users edit with sliders and toggles, changes apply (in many cases) without restart.

## Differentiation

Versus **CET overlay with per-mod panels**: each mod can create its own overlay UI via CET (AMM does this, for example). That gives more power to the mod author but requires the user to learn 10 different UIs if they have 10 mods. Native Settings UI standardizes: one settings UI for all.

Versus **JSON config files**: JSON gives absolute control but requires technical knowledge. Native Settings UI is the visual abstraction.

Versus **mods exposing no settings**: some mods are fixed-config (no user options). Native Settings UI doesn't add settings to those — it only makes it easier for mods that want to expose them.

## What people use it for

**Configuring mods without touching files**: when you install a mod (e.g., a balance tweak) with 5 configurable options (intensity, range, frequency, etc.), Native Settings UI presents them in the in-game menu. Edit with sliders, changes apply in real-time.

**Consistent settings across mods**: if you have 10 mods using Native Settings UI, all 10 settings sections live in the same menu, with uniform UX. You know where to look and how to change any setting.

**Centralized hotkey assignments**: many mods use hotkeys (toggle effect, open menu). Native Settings UI lets you assign hotkeys from the UI without editing files.

**In-place validation**: if a setting has a limited range (e.g., "intensity 0-100"), the slider respects it. Without that constraint, JSON edits can break the mod.

## Who this tool isn't for

If you only install mods without configuring them (vanilla feature toggles, nothing more), you don't strictly need Native Settings UI — the mod uses defaults.

If you mod by creating mods, Native Settings UI is optional: adding settings is nice-to-have, not a requirement.

If you want custom UI (a highly interactive mod with its own panels), Native Settings UI may not be enough — for that, a direct CET overlay panel is more flexible.

## How it works in practice

As a user:
1. **Prerequisite**: CET and RED4ext installed and working.
2. Download Native Settings UI from Nexus (`nexusmods.com/cyberpunk2077/mods/3518`) or GitHub.
3. Extract to `bin\x64\plugins\cyber_engine_tweaks\mods\`. Appears as a folder `nativeSettings`.
4. Launch the game. Native Settings UI initializes silently — it has no UI of its own.
5. Install other mods using Native Settings UI (most modern ones do). Their settings appear automatically under Settings → Mods.

As a mod author:
1. In your Lua/CET mod, import the Native Settings UI API.
2. Register your settings with types (slider, toggle, dropdown), defaults, ranges, callbacks.
3. Native Settings UI renders them when the user opens Settings → Mods → [Your mod].
4. When the user changes a value, your callback receives the new value and you apply the change.

## Honest limitations

**Only if CET works**. Since it depends on CET, if CET breaks post-patch, Native Settings UI does too. Wait for the post-patch update window.

**Doesn't expose highly interactive custom UI**. Components are basic (slider, toggle, dropdown, button). If your mod needs graphics, complex lists, drag-and-drop — Native Settings UI doesn't reach there.

**English only**. UI all in English. Each registered mod's strings are also in English (unless the mod localizes them).

**Minimal but real footprint**. Native Settings UI adds tiny load time at startup. Not noticeable on modern hardware, but exists.

**Occasional updates**. Last push was May 2025. Being a simple framework with few changes needed, updates are rare, but a post-major-patch one may be required.

## How to get started

1. Verify CET is installed (it's a prerequisite).
2. Download Native Settings UI from Nexus (mod ID 3518). Latest version compatible with your game.
3. Extract the ZIP. The `nativeSettings` folder (or however it's named) goes to `bin\x64\plugins\cyber_engine_tweaks\mods\`.
4. Launch the game. Load a save. Go to Settings → Mods. If Native Settings UI loaded OK, you'll see the "Mods" section present (it may be empty if you haven't installed mods that use it yet).
5. Install your first mod using Native Settings UI (e.g., AMM, or any mod listing "Requires Native Settings UI"). Its settings should appear under Settings → Mods.

Tip: Native Settings UI is one of the mods you **always install upfront** in a mod-heavy setup. CET → Native Settings UI → other mods. Basic infrastructure.
