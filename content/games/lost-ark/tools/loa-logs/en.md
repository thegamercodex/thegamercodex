---
title: "LOA Logs"
description: "LOA Logs is a fast, open-source (Rust, GPL-3) Lost Ark DPS meter and combat logger for Windows that shows a real-time overlay of each party member's damage, DPS, crit and back-attack rates, and buff uptime, with saved per-encounter logs."
quickTake: "The fast, modern open-source DPS meter most raiders run — with the usual meter caveats. If you analyze your raids, this is the current standard, ToS gray area and all."
---

## What it is

LOA Logs is an open-source Lost Ark DPS meter and combat logger written in Rust, distributed for free on GitHub. It shows a real-time overlay during combat with each party member's damage, DPS, crit and back-attack rates, and buff uptime, plus a per-encounter breakdown you can save and review afterward.

It's the most popular modern meter, actively maintained by snoww, and licensed under GPL-3. It runs on Windows only.

## What problem it solves

Lost Ark gives you almost no in-game feedback on combat performance — no damage breakdown, no uptime tracking, no clear sense of where a pull went wrong. Without external data, "play better" is guesswork.

LOA Logs surfaces the numbers that matter: how much each party member dealt, their DPS, how reliably they hit crits and back attacks, and whether buffs were kept up. That turns vague impressions into concrete feedback you can act on, both live during a pull and afterward in saved logs.

## Differentiation

The comparison is **LOA Details**, the original Electron-based meter LOA Logs descends from. LOA Logs is the fast Rust rewrite/fork: its big advantage is performance — it's lighter and snappier than the Electron original — while keeping the real-time overlay and logging that players expect.

LOA Details established the format; LOA Logs modernized it. For most raiders today, LOA Logs is the default because of its speed and active maintenance. If you specifically prefer the older Electron meter, LOA Details still exists, but the momentum is with LOA Logs.

## What people use it for

- **Live performance feedback:** Watching the overlay during a pull to see damage and DPS in real time.
- **Post-run analysis:** Saving and reviewing per-encounter logs to find where time or damage was lost.
- **Uptime checks:** Verifying buff uptime and back-attack rates to tighten rotations.
- **Comparing parties:** Seeing how each member contributed across a raid.
- **Improvement over time:** Tracking logs across pulls to measure whether changes actually helped.

## Who this tool is NOT for

This is not the tool for someone uncomfortable with the ToS gray area that in-game damage meters occupy (see limitations below). It's also not for someone who just wants post-run web statistics without running anything locally — for that, a site like lostarklogs.com is the better fit. And since it's Windows-only, it's not an option on other platforms.

## How it's used in practice

1. Download the latest release from the LOA Logs GitHub page.
2. Install and launch it on Windows alongside the game.
3. Position the overlay where it won't block important UI.
4. Run your raid; watch live damage, DPS, crit and back-attack rates, and buff uptime.
5. After the encounter, open the saved log to review the per-member breakdown.
6. Compare logs across pulls to confirm rotation or gear changes improved your output.

## Honest limitations

The honest framing: in-game damage meters sit in a ToS gray area in Lost Ark. They work by reading packet data, and Amazon has historically tolerated them without endorsing them. That's the factual situation — using one is the player's call, and you should make it knowing the gray area exists. Beyond that, LOA Logs is Windows-only, requires a local install and setup rather than a website, and depends on the maintainer keeping it current as the game patches. It surfaces raw combat data, not coaching, so interpreting the numbers is on you.

## How to get started

Go to the LOA Logs GitHub page and download the latest release, then install and run it on Windows alongside Lost Ark. Position the overlay so it doesn't cover important UI, and you'll see live combat data once you enter a fight. After each encounter, check the saved log to review the breakdown. Before you commit, understand the ToS gray area noted above and decide whether it's right for you.
