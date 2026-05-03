---
title: "CurseForge"
description: "The historically dominant addon repository for WoW. Has the largest catalog, a desktop app for auto-update and management, and the broadest compatibility with WoW Retail, Classic, SoD, and Hardcore. Owned by Overwolf since 2020."
quickTake: "CurseForge is where the important addons live — most Discord posts and guides link here. Overwolf's 2020 acquisition changed the UX significantly: ads, telemetry, and a controversial app requirement. Wago.io exists in part as a response. Still the first stop because of catalog and compatibility."
---

## What it is

CurseForge (curseforge.com/wow) is the historically dominant repository for WoW addons and mods. Its catalog covers essentially the entire community addon ecosystem: WeakAuras, DBM, Method Dungeon Tools, Plater, ElvUI, Recount/Skada, BigWigs, AdvancedInterfaceOptions, and thousands of more niche addons.

Originally part of Curse Inc., it was acquired by Twitch (then owned by Amazon) in 2016 as part of gaming ecosystem integration. In 2020, Twitch sold the addons-and-mods business to **Overwolf**, an Israeli company specialized in gamer software. That transition drastically changed the site experience and the desktop app.

The website (browse + downloads) is free and works without an account. The **desktop app** (Windows/macOS) is the historical addon-management mechanism: install, auto-update, configure profiles. Free to download but requires installing the Overwolf suite, which comes with its own overlay and telemetry features — and that's the main friction that drove community pushback.

## What problem it solves

WoW addons are .lua files unpacked into a specific client folder. Without a manager, installing one requires: download zip, extract to `Interface/AddOns/`, remember manual updates when a new version drops, manage dependencies between addons. For players with 30+ addons, that's continuous work.

An addon manager solves all that: download, install, manage dependencies, auto-update, per-character profiles. And a centralized repository also solves **discovery**: knowing what addons exist, reading reviews, checking downloads/popularity.

CurseForge was the first to do both well at scale. For years, it was de facto the only serious option. That changed with the Overwolf shift and competitors like Wago entering. Today CurseForge stays dominant on catalog and momentum, but it's no longer the only option.

## The difference vs. Wago.io

Both are WoW addon repositories, with opposite values:

- **CurseForge**: broader catalog (including legacy addons), tier-1 compatibility with all WoW versions, desktop app required for many addons via Overwolf. UX with ads and telemetry.
- **Wago.io**: modern alternative, originally focused on WeakAuras, expanded to full addons. Cleaner UX, fewer ads, no requirement to install a suite. Smaller but curated catalog.

For new players: CurseForge has broader coverage; searching for any addon almost certainly finds it. For players prioritizing clean UX and privacy: Wago. Many active players use both depending on the addon — Wago for WeakAuras (its historical strength), CurseForge for the rest of the catalog.

## What people actually use it for

**Discovering new addons**: CurseForge home has categories (Action Bars, Auction & Economy, Boss Encounters, etc.). Browse or search by name.

**Keeping addons updated**: the desktop app checks updates automatically. Click "Update All" when you open it.

**Configuration backup**: the app can export addon config profiles for sync between machines or clean re-install.

**Beta versions**: many addons publish beta releases on CurseForge before stable. Useful for early access to post-patch fixes.

**Discovering alternatives**: each popular addon usually has alternatives or forks listed on the page.

## Who it's NOT for

- **Players sensitive to ads/telemetry**: the Overwolf desktop app is notoriously intrusive on some systems. If it bothers you, manual install from the web or Wago are alternatives.
- **WeakAura specialists**: for WeakAuras, Wago has better browsing UX and import tracking.
- **Players competitive in bandwidth-limited environments**: Overwolf's app consumes additional CPU/memory some players prefer not to pay.
- **Hardcore minimalists**: some players prefer to manage addons manually to avoid any suite. CurseForge web download allows it, but the experience is slower than with the app.

## How it's actually used

**For discovery and manual install**:

1. Open [curseforge.com/wow/addons](https://www.curseforge.com/wow/addons).

2. Browse by category or search by name.

3. On the addon's page: download the zip, extract to `World of Warcraft/_retail_/Interface/AddOns/` (or `_classic_/`, etc. depending on version).

4. Restart WoW. The addon shows up in `/addons` in game.

**For recurring use with the app**:

1. Download the **CurseForge / Overwolf** desktop app.

2. The app detects your WoW install. You tell it which addons to install.

3. Background auto-updates; click "Update All" when there are pending updates.

4. To remove an addon: uninstall from the app, it disappears from the folder.

## Honest limitations

**Overwolf acquisition and UX change**: post-2020, the site added significantly more ads, banners, redirects, and trackers. The free tier is functional but the experience feels commercialized — something the pre-Overwolf site wasn't. For many WoW players, this drove the migration to Wago.

**Desktop app partially mandatory**: certain popular addons only distribute via the CurseForge/Overwolf app, not via direct web download. That was another friction point: forcing suite installation to access addons.

**Privacy / telemetry**: the Overwolf app collects usage data for analytics. The privacy policy is standard but more invasive than a simple manual download.

**Overwolf app performance overhead**: several users report the app consuming RAM and CPU comparable to a heavy modern app, not a lightweight addon manager. Offends minimalists.

**Curse Premium upsell**: the site pushes Curse Premium ($3-5/month) that removes ads. Not necessary for casual use, but the upsell is persistent.

**Occasionally removes addons without warning**: there have been cases of addons removed from the catalog over license disputes or developer request. If your workflow depends on a specific addon, consider manual download from upstream GitHub when available.

**Post-patch compatibility issues**: when a major patch ships, broken addons can stay listed on CurseForge without clear incompatibility warning. Verify the last-update date before installing.

## How to get started

1. Visit [curseforge.com/wow](https://www.curseforge.com/wow) and browse popular addons: WeakAuras, DBM, Plater, Method Dungeon Tools, Details!.

2. Decide: desktop app or manual download. If you'll have 10+ addons, the app is worth the friction. If you'll have 2-3, manual download is cleaner.

3. If you choose the app: download from [overwolf.com/curseforge](https://overwolf.com/app/curseforge), install, and let it detect your WoW client.

4. For WeakAuras specifically, consider supplementing with [wago.io](https://wago.io) — better import-code experience and community sharing.

5. Honest editorial note: if you don't want the Overwolf suite, **Wago.io** + manual install from GitHub directly are a valid combination to avoid CurseForge entirely. But at the cost of a smaller catalog.
