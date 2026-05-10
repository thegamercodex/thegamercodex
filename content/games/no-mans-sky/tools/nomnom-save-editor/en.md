---
title: "NomNom"
description: "Open-source No Man's Sky save editor by Christian Engelhardt (zencq), running on Windows, macOS and Linux. Works directly on Steam, GoG, Microsoft Store and exported console saves, with automatic backup before every modification."
quickTake: "The modern NMS save editor. If you're going to edit your save, NomNom is the obvious pick: clean UI, multi-save handling (manage several characters of the same profile), automatic backups, fast release cadence after patches. goatfungus' NMS Save Editor still works, but its UI is more austere and lacks the elegant multi-save handling."
---

## What it is

NomNom is an open-source save editor for No Man's Sky written in C# by Christian Engelhardt (handle "zencq" on GitHub). The project lives at github.com/zencq/NomNom — previously cengelha/NomNom, same maintainer — and ships under GPL-3.0.

Truly cross-platform (Windows, macOS, Linux) and it handles save formats from every PC platform: Steam, GoG, Microsoft Store/Game Pass, and saves imported from Switch or consoles via external tooling. Release cadence is high — the changelog shows updates within weeks of every major NMS patch.

Fully free, no ads, no freemium tier.

## What problem it solves

NMS stores a lot of state per save: inventory, unlocked slots, credits, nanites, quicksilver, units, ship collection, multi-tools, freighter, frigates, settlements, milestones, learned glyphs. There are scenarios where you want to touch that data directly:

- **Backup before risky experiments**: before trying a mod or anything risky, you make an editable copy.
- **Recovery after corruption**: NMS occasionally corrupts saves; an editor lets you restore specific fields.
- **Legitimate tweaks**: moving bases, restoring inventory lost to a bug, restoring progress when a patch stings you.
- **Direct cheating**: adding units/nanites/items. This breaks the spirit of the game but is what many players actually want.

Without a save editor, all of this requires manual JSON engineering or living with the current state.

## Differentiation

Versus **NMS Save Editor (goatfungus)**: goatfungus' is the classic (years of activity, simpler UI). NomNom is more modern: handles multiple saves of the same profile better, automatic backup before every save, more visual UI with tabs. Field coverage is similar; goatfungus sometimes ships post-patch updates first, NomNom other times. Both are valid — pick the UI you find more comfortable. If you play cross-platform and manage many saves, NomNom scales better.

## What people use it for

**Pre-mod backups**: before installing a mod or experimenting, open NomNom, export the save, and restore it if something goes wrong.

**Bug recovery**: NMS has had historical bugs (patches deleting items, freighters losing storage). The editor lets you restore.

**Moving bases or reorganizing**: NomNom exposes built bases for coordinate editing or regeneration.

**Importing saves across versions**: if your Switch save needs to migrate to PC, external tooling exports the files and NomNom opens/edits them.

**Cheats / personal sandbox**: adding items, units, ships. Valid for creative experiments without grinding from scratch.

## Who this isn't for

If you play Permadeath or Survival and want to keep the challenge, using the editor undercuts the spirit. It's not illegal, it's just that your save stops being "earned".

If you've never touched game config files or terminals: NomNom has an accessible GUI, but context (what each field does) needs prior reading of the wiki or forums. Risk of breaking saves if you touch fields you don't understand.

If you play only on console without access to a PC, NomNom doesn't apply — you need a PC to run the app. PS5/Xbox saves require extraction to PC first.

If you trust battle-tested tools more, goatfungus may feel more stable. NomNom is comparatively newer.

## How it's actually used

1. Go to github.com/zencq/NomNom/releases and download the binary for your OS (Windows .exe, macOS .dmg, Linux AppImage).
2. Open NomNom; it asks you to point to your NMS save folder:
   - Steam: `%APPDATA%\HelloGames\NMS\` (Windows)
   - GoG: different path; NomNom autodetects many.
   - Mac: `~/Library/Application Support/HelloGames/NMS/`
3. NomNom lists every save it finds with previews (save name, mode, ship, credits).
4. Click a save to enter the editor. Tabs cover Inventory (suit/ship/multi-tool/exocraft/freighter), Stats (units, nanites, quicksilver), Bases, Discoveries, Story Progress, raw stats.
5. Edit what you want and save. NomNom auto-backs up first — if something goes wrong, the original is intact.
6. If NMS is running, close it before saving to avoid conflicts.

## Honest limitations

**Lag after big patches**. When Hello Games ships a patch that changes the save format, NomNom needs a new release (typically days, sometimes weeks). If you update NMS before NomNom, you may have to wait.

**Saves better than it understands**. NomNom exposes parsed JSON but some fields lack clear documentation — you know they exist, not what each does. The community documents this in the NomNom repo and adjacent wikis.

**Corruption risk**. Editing critical fields without understanding can leave saves broken. Auto-backup helps but isn't bulletproof. Make your own manual backup before serious experiments.

**PC-only editing**. Console saves need external tooling to extract/inject. NomNom edits but doesn't handle platform transfer.

**Single maintainer**. Christian is the lead dev; even with contributors, a pause from him slows updates.

**No anti-cheat features**. Hello Games doesn't detect edited saves (no online cheating to prevent), but if NMS ever introduces competitive leaderboards or multiplayer, that could change.

## How to start

Go to github.com/zencq/NomNom and read the README — it explains supported formats and current limitations.

Download the most recent release for your OS from the Releases tab. Verify the version is compatible with your NMS version — the README states the range.

Before any real edit, manually back up your save folder (copy/paste somewhere else). NomNom's auto-backup is good but the manual one is your real safety net.

Start with something low-risk: a creative-mode save you keep just for experiments. Once you understand the UI and consequences, you can touch your main if you want.

If you'll do something non-trivial (moving bases, restoring a freighter), search GitHub Issues for the relevant conversation — someone has probably solved it and left notes.
