---
title: HDOS
description: HDOS (High Detail Old School) is a Jagex-approved, third-party standalone client for OSRS that rewrites the render pipeline to emulate the 2008 RuneScape HD look. It's free and closed source.
quickTake: "If you want the game to simply look better without building a plugin stack, HDOS is the most direct option: the HD is native, not a plugin. But if you live by quality-of-life plugins, RuneLite is still your client."
---

## What it is

HDOS, short for "High Detail Old School", is a third-party client for Old School RuneScape built from the ground up to emulate the era of RuneScape HD that Jagex released in July 2008. Unlike clients that work by injecting code into the official Jagex binary, HDOS is a fully standalone client written independently, which lets it change the engine's render pipeline.

It matters to the community for one concrete reason: alongside RuneLite, it is one of only two third-party clients on Jagex's approved client list. That means you can use it without ban risk and launch it from the official Jagex Launcher.

## What problem it solves

The official OSRS client looks deliberately retro, with short view distance, near fog, and a framerate tied to the original engine. Many players want to keep OSRS gameplay intact but give the world a more polished, modern look.

HDOS solves that at the source. Because it rewrites the render instead of patching it, it delivers native HD, longer view distance, seamless region loading, and a more stable framerate since it can use multiple CPU cores and more up-to-date render technology than the original engine.

## Differentiation

The obvious comparison is with RuneLite and its 117HD plugin. Both can give you HD graphics, but by different paths.

In RuneLite, HD arrives via a plugin (117HD) layered on top of the client. It works very well, but it's an extra layer. In HDOS, the HD is baked into the client itself, natively. On modest hardware this often means better performance, because there's no plugin doing the work on top of the base client.

The trade-off is honest: RuneLite has a huge, mature plugin ecosystem. HDOS has a much smaller plugin and quality-of-life catalog. You choose based on what weighs more for you: native graphics or tooling.

## What people use it for

- **Better visuals with zero setup**: install and get the world in HD immediately, no plugin stack to configure.
- **HD performance on modest hardware**: machines that struggle with RuneLite + 117HD sometimes run better on HDOS thanks to native rendering.
- **Longer view distance**: seeing farther in open areas, useful for atmosphere and orientation.
- **RuneScape HD nostalgia**: recovering the feel of 2008-era HD inside modern OSRS.
- **Launching from the Jagex Launcher**: folding it into the official flow without parallel clients.

## Who this tool is NOT for

It's not for players who depend on a large set of quality-of-life plugins: counters, overlays, boss helpers, loot trackers, and the like. That territory belongs to RuneLite. It's also not for anyone on very limited hardware where even the official client struggles, since HD always asks more of the GPU. And if closed source bothers you, note that HDOS is not open source.

## How it's used in practice

1. Go to https://hdos.dev and download the installer for your system (Windows, macOS, or Linux).
2. Install HDOS and link your Jagex account; you can launch it standalone or from the Jagex Launcher.
3. Open the client settings and configure view distance, quality, and render options for your hardware.
4. If framerate drops, lower quality or view distance until you find a stable balance.
5. Play as usual: the gameplay is standard OSRS, only the visual and render layer changes.

## Honest limitations

- **Closed source**: HDOS is not open source; you can't audit or extend the client the way you can with RuneLite.
- **Small plugin ecosystem**: the quality-of-life catalog is considerably more limited than RuneLite's.
- **Demands more GPU**: native HD asks more than the official client; on very old machines it may not run well.
- **English only**: the client interface is in English.
- **Opinionated aesthetic**: not everyone likes the HD look; some prefer OSRS's original appearance.

## How to get started

Download HDOS from https://hdos.dev, install it, and link your Jagex account. As an approved client, you can use it without risk and launch it from the Jagex Launcher. If you're coming from RuneLite, try it for a few days to see whether native graphics make up for fewer plugins; many players end up with both clients installed and pick one per session.
