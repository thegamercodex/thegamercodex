---
title: "Thunderstore (Valheim)"
description: "Valheim's primary mod repository. Open-source platform with a stable API, automatic dependency resolution, and native support in the ecosystem's main managers (r2modman, Gale, TMM)."
quickTake: "Thunderstore is where 95% of Valheim modding lives. If you start modding today, Thunderstore + r2modman/Gale is your stack. Nexus exists but plays second fiddle."
---

## What it is

Thunderstore is an open-source mod-hosting platform aimed at modern moddable games, especially Unity-based with BepInEx (Risk of Rain 2, Lethal Company, REPO, Valheim, etc.). The Valheim instance — `thunderstore.io/c/valheim/` — hosts **10,000+ packages** organized by category, author, tags, and popularity.

Unlike Nexus Mods, Thunderstore is **designed for mod managers** from the start: every package has a `manifest.json` with declared dependencies, strict semantic versioning, and a public API endpoint managers consume for downloads/updates. That's why r2modman/Gale/TMM integrate so cleanly.

It's free, no rate limits, no account required to browse or download (account only if you want to publish).

## What it solves

Traditional modding (Nexus-era) had frictions for newer games with many coexisting mods:
- **No dependency resolution**. A mod might need "BepInEx + Jotunn + HookGen" and you had to know and install them manually.
- **Free-for-all versioning**. If a mod shipped v2.0 with breaking changes, downstream mods had no signal.
- **No structured API**. Every manager scraped Nexus HTML to automate.

Thunderstore solved that:
- **Manifest-declared dependencies**. Installing a mod brings its deps in automatically.
- **Semver enforcement**. Versions follow `major.minor.patch` and managers understand compatibility.
- **Public JSON API**. Anyone can consume the catalog without scraping.
- **Community verification**. Mods can be flagged "moderated" or "verified" by the mod team.

For Valheim, that means a 50-mod modlist installs in minutes without thinking about order, deps, or visible conflicts.

## Differentiation

Vs. **Nexus Mods (Valheim)**: Thunderstore is the primary platform for catalog and manager integration. Nexus has texture packs and historic mods that didn't migrate.

Vs. **GitHub raw downloads**: GitHub hosts code, not the user-facing experience. For devs, Thunderstore auto-publishes builds from GitHub Actions. For users, Thunderstore is the layer above GitHub.

Vs. **CurseForge**: CurseForge is Thunderstore's equivalent for Minecraft and some Bethesda games. Not present in Valheim.

## What people use it for

**Downloading and installing mods**. The primary source for any mod manager. r2modman/Gale/TMM consume Thunderstore directly.

**Browsing the catalog**. Search mods by category (QoL, Building, Gameplay, Cosmetic, Server-side, etc.), tags, author. Filters and rankings help discovery.

**Publishing your own mods**. If you build a mod, publishing on Thunderstore is free and straightforward. The `manifest.json` declares metadata, deps, description, and the system publishes versions after CI build.

**Tracking updates**. The mod page shows version history with changelogs. To know if a mod is still maintained, check last commit date.

**Verifying a mod's reputation**. Comments, ratings, and "verified" mod-team badges signal quality. Suspicious mods get reported and typically removed.

**Investigating dependencies**. The mod page lists which other packages it needs and which depend on it. Useful for understanding your modlist's graph.

## Who this tool is not for

If you **don't mod Valheim**: irrelevant.

If you only need **texture packs / skins**: Nexus probably has a better catalog in that specific vertical. Thunderstore has some but fewer.

If you want to mod **without a manager** by philosophy: you can download Thunderstore zips manually, but you lose all the ecosystem value. Thunderstore's real target is managers.

If you're **looking for mods from a non-Thunderstore game** (Skyrim, etc.): doesn't apply. Thunderstore doesn't host those.

## How it works in practice

**As a user via mod manager (recommended)**:
1. Your manager (r2modman/Gale/TMM) talks to Thunderstore directly.
2. In your manager's "Online" tab, browse, search, and install. Zero interaction with the website.

**As a user browsing the site**:
1. Go to `thunderstore.io/c/valheim/`.
2. Browse by category or use search.
3. Click a mod → see description, screenshots, dependencies, version history.
4. "Download" gives the direct .zip, or "Install with Mod Manager" opens your manager if configured.

**As a dev publishing**:
1. Account on Thunderstore.
2. In your GitHub repo, configure the Thunderstore Action (`GreenTF/upload-thunderstore-package`) in CI.
3. On each GitHub release, the Action uploads the package to Thunderstore automatically.
4. The package needs `manifest.json` with name, version, deps, etc.

## Honest limitations

**Ecosystem-bound**. If you mod a game not on Thunderstore (Skyrim, etc.), doesn't apply.

**Catalog can be noisy**. With 10,000+ packages, search returns noise. Filters help but community-driven curation has inherent noise.

**Abandoned mods**. Like any hub, many packages are mods authors stopped updating. Filtering "active in last 90 days" requires manual version-history checking.

**Verification is voluntary**. Not every mod is "verified" by the team. Quality varies.

**No fine-grained rating system**. Stars and download counts exist, but there's no robust review system like Steam.

## Getting started

**As a user**:
1. Install r2modman, Gale, or TMM (any of the three).
2. Your manager talks to Thunderstore automatically. You don't need to open the site.
3. To browse manually without a manager, go to `thunderstore.io/c/valheim/`.

**As a dev**:
1. Create a Thunderstore account.
2. Read the "Publishing a package" guide at `thunderstore.io/wiki/`.
3. Structure your mod with a correct `manifest.json`.
4. Upload manually or automate via CI.

For support, the Thunderstore Discord (`discord.gg/thunderstore`) is the community's main hub.
