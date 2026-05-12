---
title: "Appearance Menu Mod (AMM)"
description: "Cyberpunk 2077 mod letting you spawn NPCs, vehicles, poses, change outfits, and decorate the apartment — the reference tool for photo mode."
quickTake: "If you want cosplay shots, narrative scenes, or capturing moments in the game with full control, AMM is the standard. Started as a way to swap NPC outfits in 2021 and grew into a full photo-mode suite."
---

## What it is

Appearance Menu Mod (AMM) is an open-source (MIT) mod for Cyberpunk 2077 maintained by MaximiliumM on GitHub. It started in 2021 as a way to change NPC outfits and save appearances; today it's a full suite of control over photo mode, narrative scenes, and customization.

It's one of the most-downloaded Cyberpunk 2077 mods — per Nexus stats, consistently in the game's top mods. Depends on Cyber Engine Tweaks (CET) and RED4ext.

## What problem it solves

Vanilla Cyberpunk 2077's photo mode is limited: few poses, NPCs don't move, you can't spawn vehicles, V stays static. For players wanting to capture Night City with creative control (cosplayers, in-game photographers, machinima creators), the limitations are frustrating.

AMM lifts those limitations:
- Spawning NPCs (companions, enemies, story-unique NPCs) in any location.
- Spawning vehicles (every one in the game, including ones you can't normally get).
- Extended pose system for NPCs and V.
- Changing outfits on NPCs and player.
- Decorating V's apartment with custom furniture.
- Modifying companion attitude (making them appear fighting, laughing, etc.).

## Differentiation

Versus **Photo Mode Unlocker** (Nexus 4319): Photo Mode Unlocker removes vanilla photo-mode restrictions (more camera range, more poses) — complementary to AMM, not an alternative. Many cosplayers use both together.

Versus **AMM Collabs** (AMM extensions): AMM has a community ecosystem of extensions — pose libraries, additional animations, decoration objects. AMM core is the base; extensions add content.

Versus **CET console scripting**: technically anything AMM does could be done with CET scripts, but AMM offers a friendly UI and presets. Doing it in scripts requires knowing internal APIs.

## What people use it for

**Professional photo mode**: cosplayers and in-game photographers capture elaborate scenes — V with custom outfit, companions posing, vehicle in the background, NPCs spawned by mood.

**Machinima / video content**: YouTube/TikTok creators make short films using AMM to spawn characters, poses, scenes. The ability to move camera + pose NPCs + change outfits is what makes that content possible.

**Cosplay outfit testing**: if your V has a look you want to match in a real cosplay, AMM lets you swap outfits quickly to iterate.

**V's apartment decoration**: AMM lets you add furniture, decorative objects, transform the apartment into a personalized space. Players who invest in story-living use it extensively.

**Exploration**: spawning vehicles that normally require significant progression to acquire. Useful for players who completed the campaign and want to joyride.

## Who this tool isn't for

If you play vanilla for the story without touching mods, AMM is overkill — it adds no gameplay, only creativity tools.

If your hardware is marginal, AMM adds overhead. Spawning 5+ NPCs simultaneously can cause noticeable FPS drops on midrange GPUs.

If you want a more conservative photo mode (fixed poses, no spawning), Photo Mode Unlocker alone is lighter than full AMM.

## How it works in practice

1. **Prerequisites**: install Cyber Engine Tweaks (CET) and RED4ext first. AMM won't work without those.
2. Download AMM from Nexus (`nexusmods.com/cyberpunk2077/mods/790`) or GitHub.
3. Extract the content into `bin\x64\plugins\cyber_engine_tweaks\mods\`. AMM should appear as a sub-folder there.
4. Launch the game. Load a save (doesn't work from the main menu).
5. Open the CET overlay (configurable hotkey). In the mod list, AMM appears — click to open it.
6. AMM's UI has tabs: Spawn (NPCs and vehicles), Appearance (change outfits), Poses, Decor, etc.
7. Experiment: spawn an NPC, dress them in an outfit, pose them, capture via vanilla photo mode.

## Honest limitations

**Learning curve**. Even though the UI is functional, AMM has many features and discovering each takes hours. YouTube tutorials help.

**Updates required post-patch**. Since it depends on CET and RED4ext, after a game patch AMM can fail until it's updated. Wait 1-2 weeks post-major-patch before using AMM heavily.

**Not every NPC is spawnable or controllable**. Story-critical NPCs can have restrictions (Johnny in some contexts, certain bosses). AMM does its best but engine limits exist.

**FPS impact**. Spawning many entities simultaneously impacts performance. On midrange GPUs (RTX 3060-3070), 3-5 spawned NPCs + ray tracing can drop to 30-40fps.

**Occasional stability issues**. Complex mod with many interactions; rare bugs exist (NPCs with broken animations, decor glitches). Save scumming is common practice.

**No Spanish localization**. UI all in English. AMM community extensions may have some localized, not consistent.

## How to get started

1. Verify CET and RED4ext are installed and working. If not, install those first (see their respective guides).
2. Download AMM from Nexus (mod ID 790). The most recent version compatible with your game patch (Nexus shows compatibility).
3. Extract the ZIP. AMM comes as a folder `AppearanceMenuMod` — copy that folder to `bin\x64\plugins\cyber_engine_tweaks\mods\`.
4. Launch the game. Load your save.
5. Open the CET overlay. If AMM loaded OK, you'll see "Appearance Menu Mod" in the mods list. Click → AMM's UI opens.
6. As a first experiment, go to the Spawn tab → pick an NPC → spawn near V. If they appear, AMM works.

Tip: AMM has an active sub-community with specialized guides (cosplay tutorials, scene composition tips). The modding community Discord and the r/cyberpunkmodders subreddit have useful content.
