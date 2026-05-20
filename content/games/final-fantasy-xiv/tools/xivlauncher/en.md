---
title: "XIVLauncher"
description: "Open-source alternative launcher for FFXIV with auto-login, stability fixes, multi-account support, and access to the Dalamud plugin ecosystem — the de facto standard outside the official launcher."
quickTake: "XIVLauncher is the launcher every plugged-in player uses. Auto-login, fixes for connection issues, multi-character switching, and above all: the gateway to the Dalamud QoL plugin ecosystem. Square Enix tolerates it (not formally) and no one has been banned for using it. Essential if you play more than 5h/week."
---

## What it is

XIVLauncher (goatcorp.github.io) is an open-source alternative launcher for FFXIV maintained by **goatcorp**. Around since 2018 and became the dominant launcher of moderately engaged players. Open source on GitHub (`goatcorp/FFXIVQuickLauncher`), GPL-3.0 license.

Core features:

- **Auto-login**: save credentials once, login to the game in 1 click. The official Square Enix launcher requires 2FA every login.
- **Multi-account**: switch between accounts/characters easily.
- **Stability fixes**: detects and retries connection failures that the official launcher just fails silently.
- **Official Wine/Linux support**: the goatcorp team maintains XIVLauncher for Linux (the only viable way to play FFXIV on Linux with QoL).
- **Access to Dalamud**: the framework of plugins injected into the client. Hundreds of QoL plugins: minimap, customizable fly text, party finder filters, fast market board scanning, etc.

Free, open source.

## What problem it solves

Square Enix's official launcher is functional but austere: slow login, 2FA every time, no automatic fix for stability issues, and completely closed to third-party extensions.

For players who play regularly:

- **Login overhead**: 30 seconds each time in SE launcher → 2 seconds in XIVL.
- **Connection failures**: SE launcher fails and dumps you to the login screen. XIVL retries automatically.
- **Plugins**: SE doesn't allow mods/plugins officially. Dalamud (via XIVL) fills that gap with QoL plugins.
- **Multi-character**: SE launcher requires logout/login to switch chars on another account. XIVL handles it seamlessly.

For Linux users, there's no real alternative — XIVLauncher is THE way.

## How it differs from the official launcher

- **SE Official**: what comes with the game. Functional, austere, closed.
- **XIVLauncher**: same game, better UX + plugin ecosystem.

Both launch the same client. XIVL only wraps the login process and allows Dalamud injection. Gameplay is identical — only the pre/post game experience changes.

## What people actually use it for

**Quick daily login**: for daily roulettes, opening SE launcher wastes 30 seconds each time. XIVL is instant.

**Dalamud plugins**: the real killer feature. Key plugins:
- **Marketboard Uploader** (contribute to Universalis).
- **Cactbot** (auto callouts of Savage mechanics).
- **Visual range adjustments**.
- **Inventory tools**.
- **Improved party finder plugin**.

**Linux gaming**: the only civilized way to play FFXIV on Linux. goatcorp maintains the Wine config and wrapper.

**Multi-account switching**: for players with alts on separate accounts, or who share account with family.

**Automatic reconnection**: in client instability moments (high lag, long queue), XIVL retries vs SE just drops you.

## Who it's NOT for

- **Casuals who log in once a month**: the overhead of installing and configuring XIVL isn't justified if you play infrequently.
- **TOS-paranoid players**: XIVL is technically not approved by Square Enix. Almost no one has been banned, but theoretical risk exists. Especially for PvP, don't use visible plugins.
- **Console-only players**: XIVL is Windows/macOS/Linux. PS5/Xbox doesn't apply.
- **Those who prefer keeping the client pure**: if the idea of injected plugins bothers you, stick with SE launcher.

## How it's actually used

1. Download XIVLauncher from [goatcorp.github.io](https://goatcorp.github.io).

2. First setup: enter Square Enix credentials. XIVL stores them encrypted (not in cleartext).

3. For Windows: install .NET 7+, run XIVL like any app.

4. For macOS: download the official goatcorp app (not from the App Store).

5. For Linux: follow the specific guide (requires config of Wine + winetricks; tutorial in docs).

6. Once active: login in 1 click. Launches directly into the client.

7. For Dalamud: in XIVL Settings → enable Dalamud. Once in-game, open the menu with `/xlplugins` to install plugins.

## Honest limitations

**TOS gray area**: Square Enix doesn't formally approve XIVL. In 7+ years almost no one has been banned for using it alone, but the technical risk exists — especially if you combine with plugins that violate TOS (combat cheats, cosmetic animation mods invisible to other players).

**Vulnerable to patches**: when a game patch lands, XIVL typically needs updating. goatcorp is fast (usually ready in hours), but there's a window where XIVL doesn't work post-patch.

**Multi-account share workflow**: although XIVL handles multi-account, it's not perfect. For families sharing a PC, requires separate configuration.

**Linux setup can be fragile**: although officially supported, Wine + Linux + FFXIV has edge cases. The goatcorp Discord community is helpful but requires patience.

**Doesn't cooperate 1:1 with ACT**: ACT (desktop parser) still runs outside the client, so the ACT + XIVL flow requires some coordination but works.

**Community plugin quality varies**: some Dalamud plugins are hobbyist and may have bugs / not be maintained. Stick to plugins recommended in the official goatcorp list.

## How to get started

1. Download XIVLauncher from [goatcorp.github.io](https://goatcorp.github.io).

2. For Windows: install .NET 7 + Visual C++ Runtime if missing. Run XIVL.

3. Log in with your SE account + game ID. XIVL offers to securely save credentials.

4. Configure multi-character if you have multiple chars.

5. In Settings, **enable Dalamud**. Accept the terms (Dalamud warns about TOS gray area).

6. Launch the game from XIVL. Once in-game, type `/xlplugins` to access the plugin manager.

7. Recommended starter plugins: **Marketboard Uploader** (contributes to Universalis), **Cactbot** (raid callouts), and explore the catalog. Start conservative — don't enable 30 plugins simultaneously.

8. If you play Linux, follow the specific Wine setup guide. The goatcorp Discord is active for help.
