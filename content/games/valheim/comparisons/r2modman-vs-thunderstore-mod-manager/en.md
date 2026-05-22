---
title: r2modman vs Thunderstore Mod Manager — standalone OSS or platform-backed
description: Short comparison between the two official Thunderstore-catalog managers. The veteran open-source one vs the Overwolf-backed official.
---

r2modman and Thunderstore Mod Manager (TMM) cover the same job — installing Valheim Thunderstore mods with automatic BepInEx. But the plumbing and philosophy are opposite. **r2modman** is the standalone open-source piece veteran community uses. **TMM** is the official Thunderstore-team-endorsed app, distributed via Overwolf and oriented toward a friendlier onboarding.

## Open-source vs platform-backed

r2modman is pure OSS (MIT). You download, open, mod. No account, no telemetry, no background services.

TMM is **closed-source** and lives **inside Overwolf**. To use it you need:

- Install Overwolf (~150MB) — an in-game overlay platform with its own background service.
- Create an Overwolf account (free, but registration required).
- Accept optional ads in the main panel (toggleable but on by default).

For someone coming from classic modding (Skyrim, Fallout), Overwolf feels like unnecessary overhead. For someone coming from Minecraft/CurseForge, Overwolf is familiar — CurseForge App also lives on Overwolf.

## Onboarding

TMM wins here. The flow is designed so someone who's never modded can do everything without touching files:

- Auto-detection of installs (Overwolf integrates this).
- BepInEx downloads without showing the user the filesystem.
- In-game notifications when updates ship.
- UI with more explanatory copy.

r2modman is simpler and more direct but assumes the user is comfortable with a standard installer and concepts like "profile".

## Cross-platform

r2modman supports **Windows, Linux, and macOS**. It's the only option for non-Windows modders.

TMM is **Windows-only** because Overwolf has no clients for other platforms. If you play Valheim on Linux (Steam Deck, Proton, dual-boot), TMM doesn't apply.

## In-game overlay

TMM has an **in-game overlay** with a configurable shortcut (default `Ctrl+Shift+M`). Hit it mid-Valheim and the manager opens over the game — you can toggle mods, see logs, do everything without alt-tab. When a mod update ships, a toast notification appears in-game.

r2modman has no overlay. For any tweak, alt-tab to the desktop.

For someone who tweaks modlists frequently, this overlay is real value. For someone who installs once and forgets, irrelevant.

## When each wins

| Scenario | Best pick |
|---|---|
| First mod ever, I want the most guided flow | TMM |
| Modding from Linux/macOS | r2modman |
| Avoid Overwolf and background services | r2modman |
| Update notifications without opening the manager | TMM |
| Frequent tweaks with in-game overlay | TMM |
| Standalone, OSS, auditable workflow | r2modman |
| I already have Overwolf for CurseForge | TMM |
| Modlist shared with the veteran community | r2modman (guides assume r2modman) |

## Verdict

**Use r2modman if**: you want something clean, standalone, OSS, with no platform overhead; you mod on Linux/macOS; you're part of the veteran community where r2modman is lingua franca.

**Use TMM if**: starting from scratch and you want the friendliest onboarding; you already use Overwolf for other games (CurseForge, Outplayed); you value the in-game overlay for quick tweaks; the Overwolf overhead doesn't bother you.

If unsure and your PC is Windows: try TMM for a week — if the overlay doesn't win you over, migrate to r2modman. The time invested in learning both managers is minimal, they aren't complex tools.
