---
title: Carbon
description: Modern Rust modding framework, an Oxide alternative with 30-40% faster boot, 99% compatibility with uMod plugins, and native Codefling support.
quickTake: For new servers in 2026, Carbon is the choice for performance. For existing Oxide servers without problems, there's no urgency to migrate but the option exists if you need a performance boost.
---

## What it is

Carbon is an open-source modding framework for Rust, a modern alternative to Oxide. Maintained by Carbon Community since 2022, it was designed from the start to be Oxide-compatible (runs the same .cs plugins) but with 30-40% faster boot times, lower RAM consumption, and new features Oxide doesn't expose. It supports plugins from both uMod and Codefling with first-class support.

## What problem it solves

Oxide is the incumbent but carries historical weight: architecture from 2014, long boot times, difficulty incorporating modern Rust features. Carbon was born to be "Oxide 2.0" — same API surface, better implementation. For servers running 50-100+ plugins, the difference in boot time and RAM becomes material.

## Differentiation

Against Oxide, Carbon wins on performance (30-40% faster boot, lower RAM), new features (better hot reload, built-in telemetry, better debug tools), and native Codefling support. Oxide wins on history (more battle-tested catalog), larger community, and default status on hosts and panels. For 99% of plugins the difference is invisible — same code runs. The question is performance: do you want to gain the 30-40% boot speed?

## What people use it for

- **Fast boot**: on heavy-modded servers (50+ plugins), boot time drops from minutes to 30-60 seconds.
- **Lower RAM**: free up 1-2GB of RAM on big servers — material on RAM-tier-limited hosts.
- **Carbon-only plugins**: many devs now release exclusive features (advanced hooks, performance-critical) as "Carbon Only."
- **Native Codefling support**: install Codefling paid plugins with no extra setup.
- **Built-in telemetry**: see which plugin consumes most CPU/RAM to identify bottlenecks.

## Who this isn't for

If your server is small (~5-10 plugins, ~50 slots), the performance difference is invisible — stay on Oxide if it works. If you depend on very specific plugins known to break on Carbon (the ~1% incompatible), Oxide is still needed. If your host doesn't support Carbon natively (some providers only give Oxide templates), manual install is possible but requires more work.

## How to use it

1. Full backup of your current server (especially data and plugin configs).
2. If you have Oxide installed, remove it following the Carbon guide (you can't run both).
3. Download Carbon from carbonmod.gg or the GitHub releases.
4. Extract over the server folder.
5. Restart — Carbon creates `carbon/plugins/` (compatible with `oxide/plugins/`) and loads.
6. Existing Oxide plugins work by dropping .cs files in `carbon/plugins/`. Carbon-only plugins from the official panel or Codefling.
7. To configure, same flow as Oxide: .json files in `carbon/config/`.

## Honest limitations

- **Not 100% Oxide-compatible**: ~1% of plugins require update by the dev to run on Carbon.
- **Smaller community**: fewer guides, fewer answers in Discords if you hit a rare problem.
- **Some hosts have no official template**: Pterodactyl, Shockbyte, etc. have Oxide as default; Carbon may require manual install.
- **Migrating from Oxide to Carbon is practically one-way**: not destructive but implies testing every plugin.
- **Releases can lag vs Facepunch patches**: when there's a big patch, Carbon sometimes takes 24-48h for compat update, similar to Oxide.

## Getting started

For a new server from scratch: read the official guide at docs.carbonmod.gg, download release, install. To migrate from Oxide: back everything up, test in staging first with your critical plugins, then make an informed decision. The official Carbon Discord is active and answers installation and migration questions.
