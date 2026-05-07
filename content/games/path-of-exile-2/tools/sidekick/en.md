---
title: "Sidekick"
description: "Open-source MIT overlay for Path of Exile 1 and 2 with price check, dangerous map modifier detection, and multi-OS support."
quickTake: "If you want an overlay that respects your system (open source, no Overwolf, no hidden telemetry, native Linux build) Sidekick is the choice. It has fewer features than POE Overlay, but what it has is well executed and the code is auditable and forkable."
---

## What it is

Sidekick is an open-source overlay under MIT, written in C#, that sits on top of the Path of Exile 1 and 2 client to provide hotkey item price checking and dangerous map modifier detection before you enter a map.

It's maintained by the Sidekick-Poe organization on GitHub, has ~475 stars, an active Discord community, and ships as binary releases for Windows and Linux (AppImage). Donations go through Buy Me A Coffee.

## What problem it solves

PoE has plenty of overlays, but the most popular ones (POE Overlay, modified Awakened PoE Trade) are either closed source or depend on third-party runtimes like Overwolf. Sidekick attacks the same niche from a different angle: a simple, auditable, cross-OS overlay that does the essentials well.

The "dangerous map modifiers" feature is particularly useful — Sidekick analyzes a map's mods before you enter and warns you if combinations can one-shot your build (reflect, no regen, ele weakness with specific mobs). That reduces unexpected deaths and XP loss in hardcore.

## Differentiation

Versus POE Overlay: Sidekick is open source and cross-OS (native Linux); POE Overlay has more features but is Windows-only and closed source.

Versus exiled-exchange-2: both open source, both cross-OS, but exiled-exchange-2 is built specifically for PoE 2 (descending from Awakened PoE Trade). Sidekick covers PoE 1 and PoE 2 from a single codebase, with pros (continuity) and cons (PoE 2 can lag exiled-exchange-2 on PoE 2-specific updates).

## What people use it for

**Price check without alt-tab**: hover an item + hotkey, an overlay shows the estimated price. The essential workflow.

**Map modifier check before entering**: hover a map in your stash or map device, hotkey, see analyzed mods flagged for what's dangerous to your build.

**Cross-checking with other tools**: many players use Sidekick + an external tracker (poe.ninja or PoE 2 Scout) for double confirmation on prices.

**Linux setups**: for Linux players running PoE via Proton/Wine, Sidekick is one of the few overlays with a native AppImage that works without hacks.

**Forking and customization**: the code is open, so if you want to add a specific feature (e.g., custom alerts for modifiers your build can't handle) you can fork.

## Who it's not for

If you want feature parity with POE Overlay (services browser, visual market history), Sidekick doesn't get there. It's deliberately more minimal.

If you play SSF, there's no trade to check — the overlay adds less value.

If installing binaries from GitHub releases makes you nervous and you prefer Overwolf's wizard, POE Overlay is friendlier.

If you only play casually a few hours a week, installing and configuring an overlay can be overkill.

## How to use it in practice

1. Go to the GitHub repo: `github.com/Sidekick-Poe/Sidekick`. Releases tab, download the binary for your OS.
2. On Windows: run the installer or the portable. On Linux: mark the AppImage as executable and run it.
3. Configure Sidekick to detect your active league (Standard, Hardcore, current temp league).
4. Configure hotkeys (sensible defaults; you can change them).
5. In-game: hover an item or map + hotkey → overlay with info.
6. Updates: download the new release manually (no auto-update). Subscribe to GitHub repo notifications to know about releases.

## Honest limitations

**No auto-update**. You have to monitor GitHub releases yourself. For some users that's a no-go; for others it's preferable to third-party runtimes.

**English only**. No localizations. The UI is small so it's not a major blocker.

**Linux AppImage requires dependencies** (xsel, webkit2gtk, dotnet runtime). On modern Arch or Ubuntu it usually resolves via package manager, but exotic distros may need tweaks.

**No official macOS build**. PoE on macOS is already complicated (Wine/CrossOver), and Sidekick doesn't have a native build.

**Lower adoption** than POE Overlay (~475 stars vs 1M+ users). Issue triage on GitHub can be slower when specific bugs come up.

**Community-driven documentation**. There aren't polished official docs — you rely on README, closed issues, and the Discord for troubleshooting.

## How to start

Go to `github.com/Sidekick-Poe/Sidekick/releases/latest` and download the binary for your OS. On Windows run it directly; on Linux mark the AppImage as executable and run it.

If you hit install or config issues, the Discord linked in the README is the first place to look — the community is responsive and maintainers are present.

To understand each hotkey, check the configuration section on first launch. The learning curve is similar to other overlays: first session you only use price check; the rest reveals itself organically.
