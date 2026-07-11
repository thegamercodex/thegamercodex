---
title: LOA Logs vs LOA Details — which Lost Ark DPS meter to use
description: Two open-source Lost Ark damage meters, one descended from the other. Here's why most raiders moved to LOA Logs and when LOA Details still fits.
---

Serious Lost Ark raiders run a damage meter to see their DPS, buff uptime, and back-attack rates in real time. The two open-source options are **LOA Logs** and **LOA Details**, and they share a bloodline: LOA Logs is the modern Rust rewrite that grew out of the original Electron-based LOA Details. Both are Windows-only and free on GitHub.

One honest note up front: in-game meters sit in a gray area with Lost Ark's terms of service. They read packet data, and Amazon has historically tolerated but never endorsed them. That applies to both tools equally — it's the player's call, and worth knowing before you install either.

## Modern rewrite vs the original

LOA Logs is the faster, lighter option. Written in Rust, it's the more actively maintained project and the one most of the community runs today. New installs gravitate to it because it keeps pace with patches and feels snappier in a raid.

LOA Details is the original — the Electron-based meter that LOA Logs forked from. It still works, and if you already have it configured there's no urgent reason to switch. But it's heavier than the Rust rewrite and isn't where the bulk of active development is anymore.

## When each one wins

| Situation | Winner |
|---|---|
| Run a light, fast meter during the raid | LOA Logs |
| Get active updates and support patch to patch | LOA Logs |
| Understand the meter's lineage and original project | LOA Details |
| Use a setup you already had configured | LOA Details |
| Start fresh with what the community uses | LOA Logs |

## The verdict

For a fresh install, **LOA Logs** is the answer — it's faster, more actively maintained, and what most raiders run in 2026. **LOA Details** is the ancestor it forked from; it still functions and is fine if you're already set up on it, but it's no longer where the development energy is. Either way, install with eyes open about the ToS gray area that applies to all in-game meters.
