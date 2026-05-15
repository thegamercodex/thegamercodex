---
title: "SSEEdit (xEdit for Skyrim SE)"
description: "xEdit variant configured for Skyrim Special Edition: plugin editor, conflict detector, and compatibility-patch authoring tool."
quickTake: "When two mods clash on the same record and one has to win, SSEEdit is where you author the patch. It's also the swiss-army knife for cleaning dirty edits and understanding what each mod actually does."
---

## What it is

SSEEdit is the variant of xEdit (originally TES5Edit/FO4Edit) configured for Skyrim Special/Anniversary Edition. Open-source, maintained by ElminsterAU and the xEdit community, distributed from Nexus (`nexusmods.com/skyrimspecialedition/mods/164`) and GitHub.

It's an application that reads and modifies Bethesda plugins (.esp/.esm/.esl). It shows you every record (NPC, item, quest, leveled list, perk, etc.) in a hierarchical view where you can inspect exactly which values each field holds, and compare across plugins. It's the tool that separates "install mods and pray" from "understanding what's happening in your modlist".

## What problem it solves

Skyrim stores absolutely everything in records. When a mod modifies the NPC "Lydia" to give her different armor, that's an edited NPC record. If another mod also modifies Lydia to change her level, you have two plugins editing the same record — and only the last one loaded wins.

SSEEdit solves this on four fronts:
- **Conflict detection**: it shows you which records are being modified by multiple plugins and where.
- **Patch creation**: it lets you make a new plugin combining the desired values from both (the first one's armor + the second one's level).
- **Cleaning dirty edits**: many mods accidentally include records they didn't intend to modify; SSEEdit identifies and cleans them.
- **Deep analysis**: if you want to know exactly what a mod does beyond its README, you open the plugin and read its records.

## Differentiation

Versus **Creation Kit (official)**: CK is Bethesda's editor, more powerful for creating new content (quests, cells, NPCs from scratch). SSEEdit is radically more efficient for editing existing records, authoring patches, and working with conflicts. Most modders use SSEEdit for 90% of the work and only fire up CK when they need to create new assets.

Versus **Synthesis (auto-patcher)**: Synthesis is a framework for automated patches based on code. SSEEdit is the manual editor where you build patches by hand. Synthesis automates repetitive patterns; SSEEdit is for specific cases.

## What people use it for

**Author compatibility patches**: when two mods clash, you open both in SSEEdit, compare the conflicting records, and assemble a third plugin taking the values you want. Save as .esp.

**Clean dirty edits**: run "Apply Filter for Cleaning" → "Quick Clean" on the dirty master. SSEEdit removes ITM (identical to master) and ITPO (deleted records) entries.

**Inspect an unknown mod**: you want to know what that mysterious mod the author describes vaguely actually does. Open the .esp in SSEEdit and read its records directly.

**Verify leveled lists**: when you add mods that inject items into loot, the mods modify leveled lists. SSEEdit shows whether the items are coming in as expected.

**Generate reports**: for serious debugging, you can export plugin contents as text and share when asking for help.

## Who this tool is NOT for

If your modlist is small and "just works" after LOOT, you don't need SSEEdit. It comes in when there's a specific conflict you want to resolve.

If you're creating new content from scratch (a new NPC with their quest, cell, items, voicelines), Creation Kit is the choice. SSEEdit can author new records but the UI isn't optimized for that.

If Bethesda's record model overwhelms you (FormIDs, masters, override priority, etc.), SSEEdit will feel frustrating. It's a technical tool that assumes data-model knowledge.

## How to use it in practice

1. Download SSEEdit from Nexus (`nexusmods.com/skyrimspecialedition/mods/164`).
2. Extract the ZIP. Do NOT install in Program Files.
3. Launch `SSEEdit.exe`. It asks which plugins to load — check all the ones you want to analyze (or "Select All").
4. Wait. SSEEdit loads all plugins into memory; with big modlists this takes 2-5 minutes.
5. Once loaded, navigate the left pane tree. Each plugin groups its records by type (NPC_, ARMO, WEAP, QUST, etc.).
6. Records in **red** are conflicts; right click → "Apply Filter for Conflicts" → show only conflict records.
7. To author a patch: select the conflicting records, right click → "Copy as override into..." → choose "<new file>" → name your patch.esp.
8. In the new patch, edit the values of each record to what you want (e.g., take the name from Mod A but stats from Mod B).
9. Save. SSEEdit asks for confirmation before writing changes.

## Honest limitations

**Steep learning curve**. The UI is functional but dense. Dozens of record types, hex FormIDs, masters, override chains. Wikis and video tutorials are required to get started.

**Doesn't prevent gameplay errors**. You can save a syntactically valid patch that ruins game balance. SSEEdit only edits structure — gameplay logic is on you to understand.

**Reading the whole modlist is slow**. For a 500-plugin modlist, the initial load is minutes. It's not for quick open-close.

**Some mods hide complexity**. Script-heavy mods (logic in Papyrus) aren't fully visible from SSEEdit — you'd also need to decompile scripts or read source.

**Versions**. SSEEdit (SE/AE) is distinct from TES5Edit (LE) and FO4Edit. Make sure to use the correct build for your version.

## How to get started

1. Download SSEEdit from Nexus.
2. Extract to a dedicated folder (NOT Program Files).
3. Launch and load your modlist (or a small subset to start).
4. Do a tutorial: GamerPoets' "Skyrim Modding Tutorial: xEdit" on YouTube is the standard.
5. Start with simple tasks: cleaning Update.esm and the DLCs with Quick Clean — that's SSEEdit's "hello world".
6. When you hit a conflict, try authoring your first manual patch.

For deep dives, the official documentation lives at `tes5edit.github.io` — it covers the complete model with examples.
