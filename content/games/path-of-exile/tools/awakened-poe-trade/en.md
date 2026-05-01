---
title: "Awakened PoE Trade"
description: "Path of Exile overlay for in-game item price checking and trade search generation without leaving the game."
quickTake: "The most-used trading overlay in the community. If you trade often, it saves hours and dramatically reduces the friction of buying and selling."
---

## What it is

Awakened PoE Trade (APT) is an overlay that runs in the background while you play Path of Exile. Its main function is real-time item price checking: hover over an item, press a keyboard shortcut, and APT instantly shows you how much that item is selling for in the current market.

Beyond price checking, it auto-generates official trade site searches, reads items pasted from clipboard, and integrates with poe.ninja's economy for real-time data.

It's a community-driven fork of the original PoE-TradeMacro project, maintained on GitHub under MIT license.

## What problem it solves

Trading in Path of Exile without an overlay is slow and tedious. You have to copy the item from the game, open your browser, go to official trade, paste the item, adjust filters, wait for results, and go back to the game. For each item. Doing this 50 times a day is exhausting.

APT collapses that whole flow into a couple of keystrokes. You hover over a game item, press Ctrl+D (or whatever shortcut you configure), and a floating window appears showing prices. If you want more details or want to buy similar items, another shortcut opens the full search in your browser with filters already configured.

What takes minutes without APT, takes seconds with APT.

## What people use it for

**Daily price checking**: the most common case. You pick up a rare item, don't know its worth, press the shortcut, see the price on screen. You decide whether it's worth selling, keeping, or vendoring.

**Buying items for builds**: you're building out a setup that needs a specific piece. With APT you open the search with the filters you want directly from the game, without having to manually configure each filter on the website.

**Selling drops**: when picking up quality items, APT helps you quickly identify which have sale value and which don't. Multiplies the efficiency of processing loot when you return to stash.

**Stash valuation**: some advanced features let you value your entire stash at a glance, identifying which items you should be selling.

**Mass trading**: for players who live off trading (currency flipping, bulk buying), APT is practically mandatory. Without an overlay you're not competitive.

## How it's used in practice

After installing APT and configuring it (especially the main price check shortcut, which I recommend leaving on Ctrl+D), the flow is:

You're playing, identify an item on the ground or in your inventory. Hover over it. Press Ctrl+D. A floating window appears with the item's market prices. You decide what to do with the information.

For more complex searches (for example, wanting to buy a similar version with specific stats), another shortcut opens official trade in your browser with the search preconfigured. You adjust the filters you need and buy.

The rest of the features (stash valuation, poe.ninja integration, filter settings) are discovered over time. Most players only use the basic price check and that already covers 90% of the value.

## Honest limitations

**Doesn't officially support macOS**. This is important: if you play PoE on Mac (via the macOS version or emulation), APT is not a reliable option. It only natively supports Windows and Linux.

Initial installation requires a bit more configuration than most tools. You have to download the executable, install it, open it, configure keyboard shortcuts, and sometimes adjust permissions for the overlay to work on top of the game. It's not plug-and-play.

When GGG updates the game (especially in big patches), APT can have bugs until the maintenance team publishes an update. This generally resolves in days, not weeks.

APT's maintenance history has had ups and downs. During times when main development slowed, the community created forks like exiled-exchange-2. It's worth verifying before installing that the version you're downloading is up to date for the current league.

Some antivirus software flags APT as suspicious because it injects overlay into other processes. It's a false positive (the code is open source and reviewable), but it can generate friction when installing.

## On language support

APT is localized to several languages including Spanish, Russian, French, German, Portuguese, Korean, and Traditional Chinese. This sets it apart from most PoE tools that are English-only. If you play with the game interface in Spanish, APT detects items in that language without issues.

## How to get started

Download the installer from the official site or from the releases page of the GitHub repo. It's a Windows program (also available for Linux as an AppImage).

Once installed, open it before launching PoE. APT stays running in the background (you'll see an icon in the system tray). When you enter the game, it's ready to function.

The first time it's worth reviewing the settings and choosing your preferred keyboard shortcuts. Default configuration works but you might want to adjust keybinds to your specific setup.

To learn beyond the basic price check, documentation on the official site covers advanced features. But honestly, starting with just price check already transforms your trading experience.