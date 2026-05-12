---
title: "DynDOLOD"
description: "Tool that generates distant LODs (level of detail) for Skyrim's terrain, objects, and trees, eliminating pop-in and the flat-horizon effect."
quickTake: "What visually separates a 'screenshot porn' modlist from an amateur one. DynDOLOD generates detail 4 km out where vanilla Skyrim shows flat textures."
---

## What it is

DynDOLOD (Dynamic Distant Objects LOD) is a tool created and maintained by Sheson, distributed via Nexus (`nexusmods.com/skyrimspecialedition/mods/32382`) and its official site `dyndolod.info`. It supports Skyrim Special/Anniversary Edition, Skyrim VR, Skyrim LE, Fallout 4, and Enderal.

It works by generating `.nif` and `.dds` files that extend Skyrim's vanilla LOD system. Where base Skyrim shows only billboarded terrain past a certain distance, DynDOLOD adds:
- Persistent 3D objects (huts, towers, ruins, individual trees).
- Improved tree LOD with shadows and better meshes.
- Animated LOD: things like waterfalls animated at distance.

## What problem it solves

Vanilla Skyrim handles distance rendering very simplistically: past ~500 meters, everything becomes a flat billboard of the terrain. Houses, towers, individual trees — they vanish. This causes the famous "pop-in" as you walk closer.

DynDOLOD generates detailed LODs that persist much farther out. Result: landscapes with real depth, ruins visible from distant mountains, individual trees at 2 km, cities recognizable from the horizon.

## Differentiation

Versus **xLODGen** (also by Sheson): xLODGen generates terrain LOD (the ground). DynDOLOD generates object LOD (what stands on the ground). They complement each other — the correct setup uses both.

Versus **TES5LODGen** (LE legacy): TES5LODGen is the ancestor of xLODGen for Skyrim LE. For SE/AE, xLODGen + DynDOLOD is the modern stack.

Versus **"Skyrim Distant" pack mods**: these are pre-generated static packs. They work if your modlist is simple. If you have mods that add cells or change world objects, those packs don't know about them — DynDOLOD generates LODs dynamically based on your real modlist.

## What people use it for

**Eliminate visible pop-in**: the most obvious symptom. After DynDOLOD, walking through Skyrim you don't see objects materializing at 200 meters.

**Enable screenshot-grade graphics**: "photorealistic" modlists (Nordic Souls, The Phoenix Flavour, serious ELFX setups) use DynDOLOD as the final layer. Without it, the graphics setup is wasted past LOD draw distance.

**Improve open-world perception**: with DynDOLOD, Skyrim "feels" bigger because you can see distant objects before getting there.

**Support for world mods**: mods like "JK's Skyrim" or "ETaC" add content to cities. DynDOLOD generates LODs for that new content — without DynDOLOD, modified cities look flat at distance.

**Animated LOD**: waterfalls, windmills, fires visible at distance with animation.

## Who this tool is NOT for

If your modlist is gameplay/QoL only (no graphics mods), DynDOLOD's visual gain is smaller. Only worth it if you care about the visual panorama.

If your hardware is modest (low-end GPU), DynDOLOD on high settings can hit FPS — the extra LODs are extra draw calls. There are quality tiers (Low/Medium/High/Ultra) to adjust.

If you've just started modding Skyrim, DynDOLOD is advanced — wait until your modlist is mature.

## How to use it in practice

1. Download DynDOLOD from Nexus or `dyndolod.info`. The setup has two parts: the tool (offline) and the "DynDOLOD Resources" (assets the tool uses).
2. Install Resources as a regular mod in MO2/Vortex.
3. Extract the DynDOLOD tool to a separate folder (NOT Program Files).
4. Before DynDOLOD, run **xLODGen** first (terrain LOD).
5. Launch DynDOLOD (`DynDOLOD x64.exe`). Pick "Skyrim SSE", pick preset (Low/Medium/High/Ultra).
6. Wait. The process takes 20 minutes to 2+ hours depending on modlist and preset.
7. Output goes to `<DynDOLOD_install>/DynDOLOD_Output`. Move it into a mod named "DynDOLOD Output" in MO2.
8. Activate it. Launch Skyrim.

Every time you change mods that affect the world (new cells, modified cities, etc.), you have to rerun DynDOLOD.

## Honest limitations

**Complex setup**. The first time is a frustrating experience. There are configs, prerequisites (xLODGen), version matching between Resources and tool, paths that have to align. Official docs exist but are dense.

**Generation time**. Big modlist + Ultra preset = 2-4 hours of processing. Not a casual run.

**Huge output**. DynDOLOD generates many files. For a medium modlist, the output can be 2-5 GB.

**Performance cost**. More detail at distance = more draw calls. The difference between Low and Ultra is noticeable in FPS — you have to balance based on hardware.

**Version-specific DynDOLOD per Skyrim version**. Builds for SE 1.5.97 ≠ AE 1.6.x ≠ VR. Make sure to match.

**Not open-source**. DynDOLOD has a restrictive license. The binary is free, but you can't redistribute or fork it.

## How to get started

1. Verify your modlist is complete and stable before starting.
2. Run **xLODGen** first for terrain LOD. Standard guide at `dyndolod.info`.
3. Download DynDOLOD from Nexus + DynDOLOD Resources.
4. Follow the step-by-step guide at `dyndolod.info/Help.html` — single source of truth.
5. First run on Medium preset to validate the flow works, then scale to High/Ultra.
6. Move the output into a mod in MO2.
7. Launch Skyrim and look at the horizon. If you see castles, trees, and ruins at distance, it worked.

For a visual walkthrough of the complete setup, the "DynDOLOD 3.0 Tutorial" series on YouTube covers common gotchas.
