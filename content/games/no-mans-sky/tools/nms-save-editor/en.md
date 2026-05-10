---
title: "NMS Save Editor (goatfungus)"
description: "Classic NMS save editor written in Java by Brendon Matthews ('goatfungus'), open-source under MIT and active since 2018. Simple UI with tabs for inventory, ships, multi-tools, freighter, exocraft and stats."
quickTake: "The veteran option. If NomNom feels overkill or you play simply on one save, goatfungus' editor is direct and reliable. For profiles with multiple saves or if you want a more polished UX, NomNom scales better. Both are legitimate; it comes down to workflow."
---

## What it is

NMS Save Editor (also called "goatfungus' editor" to distinguish from others) is the most veteran save-editing tool in the NMS ecosystem. Brendon Matthews ("goatfungus" on GitHub) wrote it in Java in 2018 and has maintained it ever since. It lives at github.com/goatfungus/NMSSaveEditor under MIT license and ships versioned releases roughly in sync with every major NMS patch.

Runs on any OS with Java 11+ (Windows, macOS, Linux), handles Steam saves and any platform that lands the JSON format on disk. Fully free, no ads, no paywall.

## What problem it solves

Same problem any save editor solves: it lets you modify save fields without manually parsing JSON. The difference with NomNom is UX and philosophy — goatfungus prioritizes simplicity over feature breadth.

For many players, that's exactly what they want: open, make a focused change (give a stuck character units, move an item, restore inventory after a bug), save, close. No decorative tabs, no fancy previews, no features they won't use.

## Differentiation

Versus **NomNom**: NomNom is newer, has a more visual UI, better multi-save handling, automatic backup, and slightly faster release cadence. goatfungus is simpler, has more years of battle-testing, and a stable user base that knows it cold. Both cover the same essential fields with similar quality. The choice is UX-based.

If you'll edit a save once a month for a fix, goatfungus is enough and fast. If you juggle multiple characters or want a more dynamic UI, NomNom is better.

## What people use it for

**Quick fixes**: a bug ate your inventory and you want to restore it in five minutes. Open goatfungus, add the items, save.

**Recovery after crash or corruption**: if NMS broke after a patch, you can restore critical fields (unit count, ship status) without re-rolling.

**Inventory tweaks**: adjusting exo-suit, ship or multi-tool slots, adding specific tech, modifying stack sizes.

**Simple cheats**: adding units, nanites, quicksilver. For personal sandbox use.

**Pre-mod backups**: standard workflow — back up before installing experimental mods.

## Who this isn't for

If you want modern UX with previews and rich tabs, NomNom is preferable. goatfungus is functional but austere.

If you have many profiles and want to navigate between them quickly, NomNom handles the flow better. goatfungus loads one at a time with ceremony.

If you play Permadeath/Survival keeping the challenge intact, it's not for you (same as any save editor).

If your OS doesn't support Java or you don't want to install it, goatfungus forces you to have a Java runtime. NomNom is native C# without that dependency.

## How it's actually used

1. Go to github.com/goatfungus/NMSSaveEditor/releases and download the JAR from the latest release (typical filename: `NMSSaveEditor.jar`).
2. Ensure Java 11+ is installed (`java -version` to check).
3. Double-click the JAR or run `java -jar NMSSaveEditor.jar` from terminal.
4. Point to the save file (Open → select save_X.hg from the NMS folder).
5. Tabs: Inventory, Multi-tools, Ships, Exocraft, Freighter, Frigates, Bases, Stats. Edit what you want.
6. File → Save. The editor overwrites the save.
7. Important: back up manually BEFORE the first edit. goatfungus auto-copies less aggressively than NomNom.

## Honest limitations

**Java dependency**. You need Java installed, which some users prefer to avoid. NomNom doesn't have this requirement.

**Spartan UI**. Functional but dated. No visual previews of items, listings are text-heavy.

**Less aggressive backup**. goatfungus does copy, but without NomNom's automatic robustness. Make your own manual backup before any change.

**Lag after patches**. Same issue as NomNom — large patches may require a new release. goatfungus historically ships updates relatively quickly but not instantly.

**Single maintainer**. goatfungus is the lead dev; pause = lag. Community forks exist but aren't official replacements.

**Doesn't handle console saves directly**. PS5/Xbox/Switch saves need PC extraction first.

**No advanced base tabs**. NomNom exposes more detail on built bases. If your use case is base manipulation, NomNom is better.

## How to start

Go to github.com/goatfungus/NMSSaveEditor and read the README — it explains Java setup and compatibility with the current NMS version.

Download the most recent JAR. If you don't have Java, install OpenJDK 17+ (free, official).

Manually back up your NMS save folder before touching anything. Copy all of `%APPDATA%\HelloGames\NMS\` (or platform equivalent) somewhere else.

Open the JAR, load a test save (creative mode or an old profile), make a trivial change (add 100k units), save, load the save in NMS and verify the change applied.

Once you confirm the flow works, you can operate on production saves with confidence.
