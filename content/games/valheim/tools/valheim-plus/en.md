---
title: "Valheim Plus (Grantapher fork)"
description: "Quality-of-life mega-mod bundling hundreds of configurable toggles into a single config file. Originally abandoned, today maintained by the community under Grantapher's fork."
quickTake: "V+ is the classic 'all in one' option: one mod, one config file, dozens of QoL behaviors gated by toggles. Worth it if you want a coherent QoL experience; in 2026, many players prefer atomic, focused mods."
---

## What it is

Valheim Plus was originally a project by **nx 0.30** (its developer), released in 2021, that bundled hundreds of quality-of-life and balance changes into a single configurable mod. It covered inventory weight, build snapping, multiplayer slot count, durability, crafting times, and dozens more.

The project was **abandoned in late 2022**. To avoid losing years of work, **Grantapher** forked it and kept it alive under the `ValheimPlus_Grantapher_Temporary` name. The "Temporary" in the name became ironic — the fork has been active longer than the original. Today it's **the V+ in use** and the only one receiving updates for new Iron Gate patches.

## What it solves

When Valheim was new (2021), many design choices felt restrictive: stamina too tight, inventory too small, build snapping too rigid, server cap at 10, etc. The community asked for changes and V+ delivered them **all together**: one `valheim_plus.cfg` with dozens of sections.

For someone wanting to start modding without philosophy, V+ was the answer: install, flip 5-10 toggles, game improved. For servers, even simpler — the mod shipped to clients/server with the same config.

In 2026, many of V+'s changes are now in vanilla (food slots, food balance, smelter levels, etc.) or are better served by focused atomic mods. V+ is still useful but its role changed: it's no longer the universal answer, it's one option among many.

## Differentiation

Vs. **modern atomic mods** (Smoothbrain mods, Azumatt suite, etc.):
- V+ is one mod with many features; atomics are one mod per feature.
- V+ takes fewer clicks to install 50 changes; with atomics you pick exactly what you want.
- If a V+ toggle clashes with another mod, debugging is harder because V+ is monolithic; atomics are isolatable.
- The veteran community in 2026 prefers atomics for flexibility. New players ramp up faster with V+.

Vs. **vanilla**: vanilla in 2026 already incorporates many QoLs V+ pioneered. But V+ still adds non-vanilla things: advanced build snapping, server slot expansion, XP modifiers, etc.

## What people use it for

**Single-player with coherent changes** — someone who wants a preset of toggleable QoLs without picking 15 atomic mods.

**Friend group server admin** — one .cfg to share, one mod per client. Easier to maintain than 20 synced atomic mods.

**Group-specific configs** — V+'s .cfg lets you push player cap past 10 (with caveats), tune damage scaling with player count, modify stamina drain, etc. For co-op groups with specific preferences, V+ is fast to configure.

**Players joining existing V+ servers** — entire Valheim communities ran on V+ for years. Joining one means installing V+.

**Backup for mechanics vanilla changed**. Iron Gate rebalances every patch. If you liked behavior vanilla dropped (e.g., 0.215.x stamina drain), V+ can emulate it.

## Who this tool is not for

If you want **fine control over each change**: V+ is monolithic. Despite hundreds of toggles, many are bundled — disabling one may not be possible without disabling related features. Atomic mods give granularity.

If your modlist already has **many atomic mods**: V+ can clash. Every atomic-community player will tell you "drop V+ and pick the mods you actually want".

If the **"Temporary" in the name** bothers you: the fork's been active for years and Grantapher is transparent about the maintenance commitment. But some people aren't comfortable with a "temporary" fork as a core dependency.

If you play **public vanilla multiplayer**: V+ is a mandatory client-server mod. You can't connect to a vanilla server with V+ enabled, and vice versa.

## How it works in practice

1. Install via r2modman/Gale/TMM. Search for "ValheimPlus Grantapher" in the catalog.
2. The mod manager auto-installs BepInEx + V+.
3. Launch Valheim once to generate `valheim_plus.cfg` in `BepInEx/config/`.
4. Close the game. Open the .cfg with any text editor.
5. Each section has `[Section]` headers plus toggles and configurable numbers. `#` comments explain what each does.
6. Tune what you want (e.g., `inventory.maximumSlots = 10` per row, `multiplayer.maxPlayers = 16`).
7. Save. Launch the game.
8. For shared servers: the config must **match** between clients and server. If not, V+ refuses to connect with a clear error.

## Honest limitations

**Partial applicability**. Some V+ toggles are **outdated** by vanilla changes. The fork's docs try to stay current but some .cfg entries no longer do anything or behave differently than expected.

**Community fork**. Grantapher is solo. If he loses interest or time, the fork can pause. It's active today but there's no guarantee of continuity.

**Conflicts with modern mods**. Popular atomic mods (Therzie's, Smoothbrain, etc.) assume V+ isn't there. When both modify the same mechanic, results are unpredictable.

**Not an 'install and forget' mod**. The .cfg has hundreds of lines. While defaults are reasonable, if you don't read what each toggle does, you'll have subtle changes you don't understand.

**Requires client-server matching**. In multiplayer, if your server runs V+ with one config and a client has another, they don't connect. Not a problem for small groups; overhead for public servers.

## Getting started

1. Install r2modman, Gale, or TMM.
2. Search "ValheimPlus_Grantapher_Temporary" in the catalog and download.
3. Launch Valheim once with V+ enabled to generate the config.
4. Close. Open `BepInEx/config/valheim_plus.cfg`.
5. Start with small changes: increase inventory rows to 6, enable better build snapping, tune stamina drain to taste. Each toggle is commented with its effect.
6. Launch again and test.
7. For servers: the server's .cfg must match what clients load.

For guides on what to toggle first, the fork's GitHub (`github.com/Grantapher/ValheimPlus`) and the original project's wiki cover the classic cases.
