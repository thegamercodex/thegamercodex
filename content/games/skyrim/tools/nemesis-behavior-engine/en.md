---
title: "Nemesis Unlimited Behavior Engine"
description: "Open-source patcher for Skyrim SE/AE behavior files: install custom animations and combat mods without FNIS' limitations."
quickTake: "If your modlist has combat overhauls, animation packs, or movement mods like TDM or MCO, Nemesis is the foundation that makes them load. It replaced FNIS and most modern mods assume it."
---

## What it is

Nemesis Unlimited Behavior Engine is an open-source patcher created by Shikyo Kira and released in 2019. It replaces FNIS (Fores New Idles in Skyrim) as the standard tool for integrating custom animations and behaviors in Skyrim Special/Anniversary Edition.

It works by modifying the behavior `.hkx` files — the ones controlling how Skyrim executes animations, transitions, and combos. When you install mods that add animations (combat moves, idle poses, magic animations), those mods need the behavior archive to know they exist. Nemesis generates the patch that performs that integration.

Distribution: Nexus (`nexusmods.com/skyrimspecialedition/mods/60033`) and GitHub. Open-source under a permissive custom license.

## What problem it solves

Skyrim has a behaviors system hard-coded into binary `.hkx` files. When a mod wants to add a new attack animation, it has to register in that behavior archive — but Bethesda never exposed an API for that. Without a patcher, animations don't trigger.

FNIS solved this historically, but has limits:
- Supports a finite number of animation slots.
- Doesn't support modern mods like MCO (Modern Combat Overhaul) or ABR (Attack Behavior Revamp) without workarounds.
- Development slowed down.

Nemesis fixed both: practically infinite animation slots, native support for modern combat frameworks, and a cleaner workflow.

## Differentiation

Versus **FNIS**: FNIS still works for old mods but is deprecated for the modern scene. Nemesis is backwards-compatible — it runs mods written for FNIS too. If your modlist is new, use Nemesis directly.

Versus **Pandora Behaviour Engine Plus**: Pandora is a recent fork that's more efficient (faster compilation, better handling of large mods). Some modern curated modlists use Pandora instead of Nemesis. Functionally equivalent for 95% of mods; Pandora is the choice if you're building a new modlist focused on performance.

Versus **DAR / OAR** (Dynamic/Open Animation Replacer): DAR/OAR don't replace Nemesis; they complement it. DAR/OAR enables conditional animations (different NPCs with different animations based on conditions); Nemesis is still the behavior patcher.

## What people use it for

**Enable combat overhauls**: MCO, Smilodon, Wildcat, ABR, Attack Animations and Power Attack Animations — all require Nemesis to integrate their animations.

**Cosmetic animation packs**: custom idle animations, walking styles, sit poses. Any Nexus pack with animations requires Nemesis.

**Advanced movement mods**: True Directional Movement, Movement Behavior Overhaul, sprint/dodge/sneak movement tweaks.

**Animated magic mods**: custom spell-casting animations, magic combat moves.

**Cinematic mods**: ragdoll improvements, hit reactions, death animations.

## Who this tool is NOT for

If your modlist includes no animation/combat/behavior mods, you don't need Nemesis. It's overhead to install "just in case".

If you play Skyrim VR, Nemesis has partial support. Some animation mods don't work well in VR — verify individually.

If you use Wabbajack with a curated modlist, Nemesis is already included in the setup — no separate install needed.

## How to use it in practice

1. Install Nemesis from Nexus like any other mod (using MO2 or Vortex).
2. Configure Nemesis as an executable in your mod manager (similar to SKSE: add `Nemesis Unlimited Behavior Engine.exe`).
3. When you install mods requiring Nemesis (combat overhauls, animation packs), activate them as usual.
4. Before playing, launch Nemesis from your mod manager.
5. In Nemesis' UI, check the detected mods (each appears as an option).
6. Click "Update Engine" → then "Launch Nemesis Behavior Engine".
7. Wait. The process takes 30s-2min depending on how many mods you have active.
8. When it finishes, behaviors are patched. Launch Skyrim normally.

Every time you change mods that touch animations, you'll have to run Nemesis again.

## Honest limitations

**Not plug-and-play**. The first time it confuses: you have to understand Nemesis generates a "patch" that is itself a mod, and that mod must be active in your mod manager.

**Conflicts with FNIS**. You can't have FNIS and Nemesis active simultaneously. If you're coming from an old setup with FNIS, you have to migrate cleanly.

**Output goes to Overwrite**. If you use MO2, the patch Nemesis generates writes to the Overwrite folder. You have to move that content into a named mod like "Nemesis Output" so it persists across profiles.

**Rare crashes**. Very large modlists with hundreds of animation mods can make Nemesis crash during patch. Fix: identify the conflicting mod and remove it, or try Pandora.

**Intermittent development**. Shikyo Kira isn't very active on updates lately; some new mods may require features only Pandora has.

## How to get started

1. Make sure SKSE64 is installed and working.
2. Download Nemesis from `nexusmods.com/skyrimspecialedition/mods/60033`.
3. Install with your mod manager.
4. Configure `Nemesis Unlimited Behavior Engine.exe` as an executable.
5. Install a first mod that uses it, e.g., Smooth Random Idle Animation (simple animation pack).
6. Launch Nemesis from the mod manager, check the mod in the list, "Update Engine" → "Launch".
7. Move the Overwrite output to a mod named "Nemesis Output", activate it.
8. Launch Skyrim and verify in-game that the new animations trigger.

For visual guides, GamerPoets has a specific video on Nemesis setup in MO2 that's the reference.
