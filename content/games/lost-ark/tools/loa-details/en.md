---
title: "LOA Details"
description: "Real-time DPS meter and log parser for Lost Ark, built on Electron and open source (MIT). Reads packet data to display an overlay with party damage and DPS during encounters."
quickTake: "The original Lost Ark meter and LOA Logs' ancestor. Still works, though most raiders migrated to LOA Logs for being faster and lighter. Use it if you want the historical lineage; for day-to-day raiding, LOA Logs is the modern pick."
---

## What it is

LOA Details is the original DPS meter for Lost Ark: an Electron-based desktop app that reads the game's packet traffic to reconstruct, in real time, how much damage each party member is dealing. It shows a floating overlay with per-player DPS, skill-by-skill breakdowns, and the option to save encounter logs for later review.

It's open source under the MIT license, hosted on GitHub, built by the Lost Ark community. It matters historically because it's the project LOA Logs later grew out of: that modern parser is essentially a Rust rewrite of what LOA Details did in Electron. If you want to understand the genealogy of Lost Ark meters, LOA Details is the root.

## What problem it solves

Lost Ark ships no native DPS meter. Without an external tool you have no way to know whether your rotation performs the way it should, whether a teammate is falling well short, or why a pull missed the enrage timer. LOA Details fills that gap: it turns the encounter's invisible damage into concrete, comparable numbers.

For a group trying to improve, that reshapes the conversation. Instead of "I feel like we're going slow," you can see that one DPS is doing half their expected output, or that the support isn't applying buffs on time. It's the measurement layer the game client never provided.

## Differentiation

The obvious comparison is with **LOA Logs**, which descends directly from this project:

- **LOA Details is the original (Electron)**: heavier, the parent of the lineage. It still works and carries the parsing logic that popularized meters in Lost Ark.
- **LOA Logs is the modern fork (Rust)**: faster, lighter on resources, with a more polished UI. It's where most of the raiding community moved.

In practice both do the same thing conceptually — read packets and show live DPS — but LOA Logs does it with better performance. LOA Details is relevant today more for its history and for remaining a valid option than for being the default choice.

## What people use it for

- **Measuring your own DPS in real time**: seeing whether your rotation hits the expected damage for your class and gear during a pull.
- **Diagnosing wipes**: reviewing why an encounter missed the enrage timer and who came up short.
- **Comparing within the party**: instantly spotting whether a member is performing well below expectations.
- **Saving logs for later review**: persisting encounters and analyzing them outside the heat of the raid.
- **Studying your progression**: comparing your damage before and after a change in gear, engravings, or honing.

## Who this tool is NOT for

If you just want the fastest, most current meter, most of the community has already migrated to **LOA Logs** — it's the modern option and probably the one you're after. If you need persistent web analysis with leaderboards after the raid, this isn't it either — that's Lost Ark Logs (lostarklogs.com), which lives in the browser. LOA Details is a live overlay, not a post-run stats platform.

## How it's used in practice

1. Go to the LOA Details repository on GitHub and download the latest release (Windows only).
2. Install the app; being a packet parser, it may request network permissions or firewall rules.
3. Open LOA Details before entering the raid; the overlay docks over the game.
4. During the encounter, the overlay shows live per-player DPS and damage; when the pull ends you get the full breakdown.
5. Review the saved logs to analyze skills, uptime, and comparisons after the session.

## Honest limitations

- **ToS gray area**: in-game meters in Lost Ark read packet data. It's a tolerated but not officially endorsed practice by Amazon — neither sanctioned nor explicitly forbidden in most cases. Stated neutrally: whether to use one is your call, and it's worth knowing the nuance before installing.
- **Heavier than LOA Logs**: being on Electron, it consumes more resources than the Rust fork. On modest machines it's noticeable.
- **Windows only**: there's no macOS or Linux build.
- **Maintenance has shifted to the fork**: since the community moved to LOA Logs, much of the development energy now lives in that other project.
- **Requires initial setup**: network permissions and, sometimes, firewall or antivirus adjustments that can spook less technical users.

## How to get started

Go to the LOA Details repository on GitHub, download the latest Windows release, and install it. Open the app before your next raid and let the overlay dock. If you find it consumes too many resources or you want the smoothest experience, try **LOA Logs** — it's the direct successor and what most people use today. Remember that any meter in Lost Ark operates in a ToS gray area: inform yourself and decide for yourself before using it.
