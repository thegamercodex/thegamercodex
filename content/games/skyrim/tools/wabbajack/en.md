---
title: "Wabbajack"
description: "Installer for pre-configured modlists that automates downloading, installing, and configuring hundreds of mods following a recipe exported by an author."
quickTake: "To get into Skyrim with a serious modlist without spending 40 hours building it yourself, Wabbajack is the legitimate shortcut. You use community-curated lists and end up with the author's exact result."
---

## What it is

Wabbajack is an open-source tool (GPL-3.0) that automates the installation of complex modlists. Maintained by the Wabbajack Team and distributed from `wabbajack.org`, it supports Skyrim Special/Anniversary Edition, Skyrim VR, Fallout 4, Fallout New Vegas, Oblivion, and Starfield.

How it works technically: a modlist author builds their complete setup in MO2, "compiles" it with Wabbajack, and produces a `.wabbajack` file containing the recipe — what mods to pull, where from, what patches to apply, what configs to use. Other players grab that file, open it with Wabbajack, and the app downloads each mod from Nexus (using your account) and rebuilds an identical setup.

## What problem it solves

Building a serious Skyrim modlist takes weeks: research mods, install, test conflicts, patch, retest, repeat. For players who just want to play Skyrim "with everything fixed" without becoming full-time modders, that's prohibitive.

Wabbajack flips the equation: instead of each player rebuilding a modlist from scratch, expert authors publish their complete setups. You download them and install. The resulting modlist includes:
- 200-1,500 mods compatible with each other.
- Custom patches authored by the curator.
- INI tweaks and tuned configurations.
- Resolved plugin order and conflict resolution.

## Differentiation

Versus **installing mods one by one with MO2/Vortex**: you save 20-80 hours of work. The trade-off is losing fine control — if you don't like a specific mod in the list, removing it can break dependencies.

Versus **NolvusAscension installer or STEP Guide manual**: Nolvus has its own proprietary installer; STEP is a step-by-step guide you execute. Wabbajack is the standard open format for distributing modlists — most prominent modlists (Lorerim, Living Skyrim, Nordic Souls, Mod Pack X) ship as `.wabbajack`.

## What people use it for

**Starting with a mature modlist without building it**: the main use case. You download Lorerim or Living Skyrim, Wabbajack installs, you play.

**Trying different setups without losing the current one**: each modlist installs in its own folder. You can have 3-4 different modlists on disk and pick which to play.

**Sharing your setup**: if you built a modlist and want friends to play the same thing, you "compile" your MO2 and share the `.wabbajack`. They install it and get an exact clone.

**Backing up your own modlist**: the `.wabbajack` file is portable. If you reinstall Windows, you can recompile the modlist without manually re-downloading each mod.

## Who this tool is NOT for

If you like building your own modlist from scratch and knowing every mod you have active, Wabbajack limits you — you'll want pure MO2.

If Skyrim barely runs on modest hardware, big modlists (500+ mods, 200+ GB) will crush your system. Check requirements before downloading a massive modlist.

If you don't have Nexus Premium, downloads via Wabbajack are SLOW — Nexus throttles non-premium bandwidth to ~1.5 MB/s. A 200 GB modlist can take 30+ hours without Premium. Premium (~$6/month) unlocks full speed.

## How to use it in practice

1. Download Wabbajack from `wabbajack.org` (direct download, not Nexus).
2. Open the app. There's an internal browser of officially curated modlists: Lorerim, Living Skyrim, The Phoenix Flavour, Wildlander, etc.
3. Pick a modlist. Verify the requirements: disk GB, hardware tier, exact Skyrim version needed (some require downgrade to 1.5.97 or 1.6.640).
4. Configure the install folder (NOT in Program Files) and the download source.
5. Log in with Nexus (API token) — Wabbajack uses your account to download mods.
6. Click "Install" and let it run. Takes 1 to 30+ hours depending on modlist and connection.
7. When it finishes, Wabbajack has installed a portable MO2 with all mods. Launch MO2 from the created shortcut and play.

## Honest limitations

**Slow downloads without Nexus Premium**. The throttle comes from Nexus, not Wabbajack — the author can't work around it. Plan B: temporary Premium for one month.

**Skyrim version is critical**. Many modlists require a specific version (1.5.97 "SSE" or 1.6.640 "AE pre-2023"). If Steam updated you to a newer version, you'll have to downgrade with the Best of Both Worlds patch or similar.

**It's not an interactive mod manager**. Wabbajack installs a modlist and "forgets". Once installed, you manage the modlist with MO2 (bundled). Adding extra mods requires MO2 knowledge.

**Modlists can break on Bethesda updates**. If Bethesda ships a new patch, existing modlists can be incompatible until the author publishes an updated version.

**Initial curve to understand the role split**. Wabbajack installs; MO2 manages. New players sometimes get confused and modify things that break the modlist.

## How to get started

1. Decide which modlist to try. Starter recommendations: Living Skyrim 4 (gameplay-focused), Lorerim (lore-friendly), The Phoenix Flavour (graphics-heavy, vanilla-plus).
2. Download Wabbajack from `wabbajack.org`.
3. Verify the chosen modlist's hardware and disk requirements.
4. Configure folders and log in with Nexus.
5. Click install and go do something else for a few hours.
6. When it finishes, launch MO2 from the shortcut and start playing.

To find modlists, beyond Wabbajack's built-in browser: `wabbajack.org/modlists` and `r/wabbajack` on Reddit host the most active lists.
