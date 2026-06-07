---
title: RuneLite
description: Open-source third-party client for Old School RuneScape, written in Java and approved by Jagex. Adds hundreds of quality-of-life plugins on top of the official client without changing gameplay or granting mechanical advantages.
quickTake: "If you play OSRS, you play with RuneLite. It's not an optional upgrade, it's the floor of the modern experience: the vast majority of the community wouldn't consider opening the official client. Free, open source, and constantly updated."
---

## What it is

RuneLite is a free, open-source third-party client for Old School RuneScape, written in Java. It replaces Jagex's official client and adds a quality-of-life layer through a plugin system. It's one of only two non-official clients on Jagex's approved client list, which means using it doesn't break the game's rules or put your account at risk.

The project started in 2016 and became so dominant that today it is, for all practical purposes, the community's default client. Its code lives on GitHub under a BSD-2-Clause license, with hundreds of contributors. It ships with a set of integrated official plugins plus a **Plugin Hub** of more than a thousand community-made plugins, each reviewed by RuneLite's developers to comply with Jagex's third-party client rules.

## What problem it solves

The official OSRS client is deliberately faithful to 2007: functional but bare, without the comforts a modern player expects. It doesn't clearly show how much XP you need for the next level, doesn't mark the tiles of a boss mechanic, doesn't track your kills, doesn't alert you when to collect a skill's output. Every one of those absences is friction.

RuneLite removes that friction without crossing the line into cheating. Its plugins surface information the game already has but hides —timers, counters, XP overlays, tile markers— without automating anything or playing for you. That distinction is key and is what keeps it approved: RuneLite **shows**, it doesn't **act**. The result is a game that respects your time and lowers the mental load of repetitive tasks.

## Differentiation

The other approved client is **HDOS**, and the difference is one of philosophy. HDOS bets on graphics: it emulates the 2008 RuneScape HD with native rendering, greater view distance, and better FPS. RuneLite bets on **functionality**: it's the toolbox, with a plugin ecosystem HDOS doesn't come close to matching.

In practice, many people run RuneLite with the 117HD plugin (which also delivers HD graphics) and get the best of both worlds, at some performance cost versus HDOS's native HD. Those who prioritize FPS and aesthetics choose HDOS; those who prioritize quality-of-life and plugins —the large majority— choose RuneLite. They aren't mutually exclusive: plenty of players keep both installed and switch depending on what they're doing.

## What people use it for

- **Information overlays**: XP-per-hour counters, time remaining on a skill, drop tracking, boss KC, all layered on-screen in real time.
- **PvM plugins**: tile markers for boss mechanics, prayer indicators, special-attack timers — the difference between wiping and learning a boss.
- **Quest Helper**: a plugin that walks you step by step through any quest, marking where to go and what to do, removing the need to keep the wiki open on the side.
- **Skilling quality-of-life**: resource highlighting, full-inventory alerts, made-item counts, optimal routes.
- **External integrations**: it auto-syncs with trackers like Wise Old Man and TempleOSRS, and feeds the real-time Grand Exchange prices that half the ecosystem relies on.

## Who this tool is NOT for

If you want a purely nostalgic experience, identical to 2007 with no additions, the official client is more faithful. If your absolute priority is FPS and HD graphics above everything else, HDOS performs better on that specific axis. And if your computer is very old, RuneLite with many active plugins uses more resources than the base client — though you can lighten it by disabling what you don't use.

## How it's used in practice

1. Download the installer from `runelite.net` for your system (Windows, macOS, or Linux).
2. Install and open RuneLite; log in with your Jagex account just as in the official client.
3. Open the configuration panel (the wrench icon) to browse the built-in plugins and enable them to match your playstyle.
4. Enter the Plugin Hub to install community plugins like Quest Helper; each is enabled and configured individually.
5. Tune the overlays: position, color, and what information to show. Less is more at first — add plugins as you learn what you need.
6. Link your account with Wise Old Man or TempleOSRS from their plugins for automatic tracking.

## Honest limitations

- **Configuration curve**: the power comes with a thousand options. A new player can get overwhelmed; better to start with a few plugins and build up.
- **Resource usage**: with many plugins active, RuneLite is heavier on CPU/RAM than the official client. It shows on modest machines.
- **English only**: the interface and plugins are in English, with no localization.
- **Dependence on Jagex approval**: RuneLite exists thanks to a tacit agreement with Jagex about what's allowed. Plugins that cross the line (real automation) get removed from the Hub; the client will never offer advantages that amount to cheating.
- **Variable Plugin Hub quality**: the official plugins are solid, but Hub ones depend on individual maintainers and some may go stale after a game update.

## How to get started

Go to `runelite.net`, download the installer for your operating system, and install it. Open it and log in with your Jagex account. By default it already ships with several useful plugins enabled. Browse the configuration panel calmly, enable what makes sense for you (XP overlay, Quest Helper if you're questing, tile markers for the content you do), and leave the rest for later. The community keeps "best plugins" guides updated every year if you want a recommended baseline.
