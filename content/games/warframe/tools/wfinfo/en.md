---
title: "WFInfo"
description: "Open-source overlay that OCRs the Void Relic reward screen during fissures and shows each option's value in platinum and ducats."
quickTake: "The tool that solves 'which reward do I take' mid-fissure. Free, open source and ad-free — used by beginners and veterans alike."
---

## What it is

WFInfo is an open-source desktop overlay that OCRs the Void Relic reward screen during fissure missions. The moment the squad's four possible rewards appear, WFInfo shows each one's value in platinum (market price, pulled from Warframe Market) and in ducats, so you pick the best in the seconds you have to decide.

It's maintained by WFCD (Warframe Community Developers), free, ad-free, Apache-2.0 licensed, and actively updated. It's one of the most universally used tools in the ecosystem.

## What problem it solves

When you crack a Void Relic in a fissure, you see four rewards (yours and your three squadmates') and have a few seconds to choose one. The game doesn't tell you which is worth more. Without info, you grab blindly and sometimes pass up the expensive Prime part for a common one.

WFInfo removes that friction: as soon as the screen appears, it overlays each option's value. At a glance you know the most profitable reward —in plat to sell or ducats to spend with Baro— and choose deliberately. Across relic-farming sessions, that translates into far more platinum per hour.

## Differentiation

Versus AlecaFrame (the all-in-one overlay), WFInfo is single-purpose: it only does relic reading, but it does it perfectly, for free, with no strings attached. AlecaFrame also reads relics but is a heavy suite with inventory, foundry, rivens and analytics, and its more advanced features sit behind Patreon.

Rule of thumb: if you only want relic-reward price-checking, WFInfo is more than enough. If you want a full companion that also manages inventory and trading, AlecaFrame. Many players run WFInfo alone precisely because it's lightweight and open source.

## What people use it for

**Picking the best relic reward**: the core use case. You see the value of all four options and grab the most profitable.

**Efficient relic farming**: in repeated fissure runs (Survival, Defense), WFInfo maximizes platinum per hour by stopping you from passing up valuable drops.

**Learning prices without memorizing**: over time you internalize what Prime parts are worth, because you see them priced run after run.

**Checking the relics panel**: it includes a reference of what each relic drops, useful for planning which relics to crack.

**Pasting prices to chat**: it can copy the valuation to share with the squad.

## Who this tool isn't for

If you play on console or mobile, WFInfo doesn't apply: it's a Windows overlay that reads the PC screen.

If you don't farm relics or care about trading, you won't get value from it — its only function revolves around Void Relic rewards.

## How it's used in practice

1. Download the installer from the official site or WFCD's GitHub.
2. Install it and leave it running in the background while you play on Windows.
3. Configure the activation hotkey (by default it detects the reward screen automatically).
4. In a fissure, when the reward screen appears, WFInfo overlays each option's value.
5. Pick the most profitable reward depending on whether you want platinum or ducats.

## Honest limitations

**Windows only**: it's an overlay that reads the game screen on PC. No console or mobile version.

**OCR-dependent**: at unusual resolutions, unsupported game languages or with a modified HUD, recognition can fail. It's configurable, but needs tuning in those cases.

**Lagging prices**: values come from Warframe Market, so they inherit its lag and public-listing bias.

**Requires trusting third-party software**: it runs in the background reading the screen. Being open source under Apache-2.0, the code is auditable, which mitigates the concern.

## How to get started

Download the installer from `wfinfo.warframestat.us` or the GitHub repo, install it and keep it open while playing. The default config works for most; if your resolution or game language is atypical, adjust the OCR in settings. From there, every fissure shows you the values without you doing anything.
