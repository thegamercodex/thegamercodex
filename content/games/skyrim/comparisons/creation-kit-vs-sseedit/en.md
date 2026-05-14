---
title: Creation Kit vs SSEEdit — create mods or edit them
description: Short comparison between Bethesda's official editor and the community record editor. Which to open to create new content and which to patch what already exists.
---

For someone new to Skyrim modding, Creation Kit and SSEEdit look like competing tools: both edit plugins. In practice they solve different problems. **Creation Kit (CK)** is Bethesda's official editor — the same tool the studio used to build Skyrim. **SSEEdit** is the Skyrim branch of xEdit, community-maintained, optimized to inspect and modify records without the overhead of a full editor.

## What each is for

CK is designed for **creating content from scratch**:

- Quests with stages, conditions, dialogue trees, and aliases.
- NPCs with face sculpting, factions, AI packages, combat styles.
- Interior and exterior cells with navmesh, lighting, actor/object placement.
- Papyrus scripts with the integrated compiler.
- Locked containers, traps, triggers, sound markers.

It has a 3D viewport, drag and drop, asset browser, and all the visual tools you need to build a world. If you want to make a new dungeon, a new quest, or a companion mod, you open CK.

SSEEdit is designed to **inspect and edit records that already exist**:

- See which records a plugin modifies.
- Clean ITM (identical to master) and UDR (undeleted references) from official DLCs.
- Write compatibility patches between conflicting mods.
- Forward USSEP corrections onto NPCs that cosmetic mods also touch.
- Convert plugins between versions (LE → SE).
- Change specific values without opening a 600 MB editor.

It has no 3D viewport, doesn't compile Papyrus, doesn't edit meshes. It's a record-database editor.

## Cost and availability

CK weighs several GB, downloads from the Bethesda Launcher (free account) and runs only on Windows. The install includes problematic dependencies — you need the SKSE script extender and the correct CK version that matches your Skyrim SE/AE.

SSEEdit weighs about 30 MB, requires no account, runs on Windows natively and also on Linux/Mac via wine. It's the first thing any serious modder installs.

## Performance

CK is slow. Loading the full load order can take several minutes, especially with large masters like Skyrim.esm + Update.esm + the 3 DLCs + mods. A typical creation session involves constant waits.

SSEEdit loads the same load order in seconds. For a quick edit (changing a value, viewing a record, cleaning a plugin), the difference is decisive.

## Stability

CK is known to crash. The community maintains **CK Fixes**, an unofficial plugin that patches bugs in the original editor — installing CK without CK Fixes is discouraged. Even so, losing progress to crashes is part of the workflow.

SSEEdit is stable. There are reportable bugs but crashes in normal use are rare.

## Which to use

- **Creating quests, NPCs, dungeons, scripts** → CK. The only serious option.
- **Cleaning official plugins (ITM/UDR)** → SSEEdit. CK has no equivalent.
- **Compatibility patch between two mods** → SSEEdit. More direct.
- **Editing specific values quickly** → SSEEdit.
- **Investigating what a mod does** → SSEEdit.
- **Compiling Papyrus** → CK (the compiler lives there).

## In practice

Mod authors creating new content use CK as their main tool and SSEEdit as a complement for patching and cleaning. Modders who only configure modlists or write compatibility patches almost never open CK — SSEEdit covers everything they need. If you're a user who just downloads mods to play, you probably never need either one: a mod manager is enough.

If you'll only have one tool: **SSEEdit**. It covers more use cases for the bulk of the community. If you're going to create new content, add CK.
