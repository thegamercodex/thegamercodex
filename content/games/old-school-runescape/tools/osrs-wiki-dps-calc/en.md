---
title: OSRS Wiki DPS Calculator
description: The canonical OSRS DPS calculator, built and maintained by Weirdgloop, the team behind the OSRS Wiki. Build a loadout and get max hit, accuracy, DPS and time-to-kill against any monster in the game.
quickTake: If you only use one combat tool in OSRS, make it this one. It's the community standard, it's open source, and its math stays current with every game update.
---

## What it is

OSRS Wiki DPS Calculator is the canonical damage-per-second calculator for Old School RuneScape, built and maintained by Weirdgloop, the same team that runs the OSRS Wiki. You build a complete loadout —equipment in each slot, active prayers, potions and other buffs, and combat style— and the tool computes your max hit, your accuracy (hit chance), your DPS, and the estimated time-to-kill against any monster in the game.

The big advantage is that its math uses the same combat data as the wiki, so it stays current as Jagex adds items, changes mechanics, or introduces new monsters. Its lineage descends from Bitterkoekje's original DPS spreadsheet, now cross-checked and verified against the wiki's data.

## What problem it solves

In OSRS the difference between a mediocre setup and an optimal one can mean double the DPS, and that translates into faster kills, fewer supplies burned, and bosses that suddenly become viable. The problem is that this difference isn't obvious: it depends on monster defences, equipment bonuses, prayers, special effects, and attack style.

This calculator removes the guesswork. Instead of swapping gear live and "feeling" whether you hit harder, you get exact numbers before spending anything.

## Differentiation

It's the **canonical, open-source** option of the OSRS combat-calculator trio. Its math is the most trustworthy because it derives directly from the wiki's data and anyone can audit the code.

Unlike [GearScape](/en/old-school-runescape/tools/gearscape), it doesn't search for gear for you: you build the loadout manually, slot by slot, with full control and precision. And unlike [OSRS Best in Slot](/en/old-school-runescape/tools/osrs-best-in-slot), it doesn't auto-fill your stats from your RSN or auto-equip BiS; it asks for a bit more manual work in exchange for being the community's source of truth.

## What people use it for

- **Comparing two loadouts before buying:** checking whether a multi-million-GP upgrade is worth it by measuring real DPS side by side.
- **Optimizing boss setups:** tuning prayers, potions, and switches to squeeze maximum DPS against a specific boss.
- **Verifying exact max hit and accuracy:** confirming whether a setup reaches a certain max hit or beats a monster's defence roll.
- **Validating guides and community claims:** reproducing a recommended setup and seeing with your own numbers whether it delivers what's promised.

## Who this tool is NOT for

It's not for someone who wants the program to decide for them. If you expect to type a boss name and have it tell you "wear this," this tool doesn't do that —you build the loadout. For that automatic flow, GearScape or OSRS Best in Slot fit better.

It's also not for absolute beginners who don't even know what items they own; it helps to have some sense of your gear and stats before you can get value out of it.

## How it's used in practice

1. Open dps.osrs.wiki in your browser.
2. Build your loadout: select equipment in each slot, toggle prayers, mark potions and buffs, and pick the combat style.
3. Set your combat stats (Attack, Strength, Defence, Ranged, Magic, etc.).
4. Pick the target monster from the built-in search to load its defences.
5. Read the results: max hit, hit chance, DPS, and time-to-kill.
6. Duplicate the loadout, swap one item or prayer, and compare the numbers to decide the upgrade.

## Honest limitations

- **Requires manual building:** assembling and comparing several loadouts takes time; there's no "auto-BiS" button.
- **Doesn't load your account:** you must enter your stats by hand, it doesn't pull them from your RSN automatically.
- **Models a theoretical scenario:** it assumes standard mechanics and doesn't capture every rare interaction or RNG of the real encounter.
- **Learning curve:** the sheer number of options can overwhelm someone new to combat theory.

## How to get started

Head to [dps.osrs.wiki](https://dps.osrs.wiki) —no account needed and nothing to install. Start with a setup you already use, enter your combat stats, pick a monster you farm often, and look at your DPS. Then change a single item to understand how each piece moves the numbers. The code is open source under GPL-3.0 on GitHub if you want to review the math.
