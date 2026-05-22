---
title: Nexus Mods (Valheim) vs Thunderstore (Valheim) — primary vs secondary hub
description: Comparison between Valheim's two mod repositories. Thunderstore has been the primary platform since 2021; Nexus plays a secondary role different from its position in other games.
---

For Valheim there are two mod repositories, but the question isn't "which to use" — it's **when to use which**. **Thunderstore** is the primary platform where 95% of modern modding lives. **Nexus** is the secondary option, useful for specific cases where Thunderstore doesn't have what you need.

## The current ecosystem state

In 2021, when Valheim launched, it wasn't clear which hub would be primary. Some early mods went to Nexus by classic modding community habit. Others to Thunderstore for r2modman integration.

In 2026, the ecosystem **decisively gravitated to Thunderstore** for two technical reasons:

1. **Stable API for managers**. Thunderstore was designed to be consumed by mod managers. r2modman/Gale/TMM talk to Thunderstore directly via a JSON API with automatic dependency resolution. Nexus is scraping-based or requires Vortex as a separate manager.
2. **Unlimited free tier**. Thunderstore has no rate limits or paywalls. Nexus free tier caps download speeds and forces wait timers — Premium ($4-5/mo) removes them but it's a subscription.

Result: ~10,000+ packages on Thunderstore Valheim vs ~2,000 on Nexus Valheim. And that ratio grows every month.

## When Thunderstore is the obvious answer

Almost always. Specifically:

- **Any QoL, gameplay, or building mod published in 2023+**.
- **Frameworks** (BepInEx, Jotunn) — live on Thunderstore as declared dependencies.
- **Mods with complex dependencies** (Therzie's stack, the EpicLoot ecosystem) — Thunderstore resolves deps for you.
- **Modlists you want to share with friends** — Thunderstore profile format is the lingua franca.

For 95% of Valheim modlists, Thunderstore covers everything you need without touching Nexus.

## When Nexus is still relevant

Specific cases where Nexus has coverage Thunderstore doesn't:

**HD texture packs and visual skins**: most armor, weapon, and terrain retextures — including pro packs like Willybach's HD — live on Nexus historically. By the nature of the mod type (big files, visual assets), they didn't migrate.

**3D models and armor packs**: same argument. Skin packs with runic swords, alternate armors, banner designs — Nexus has a larger catalog.

**Abandoned 2021-2022 mods**: when a mod was a Nexus-era release and the author didn't port it, Nexus is the only place it exists. For archeology or historical reference, worth it.

**Niche communities**: some RP servers or sub-cultural modders prefer Nexus by habit. Very specific mods may live only there.

## Onboarding friction

**Thunderstore** is optimized for no friction. No account needed to browse or download. Your mod manager (r2modman/Gale/TMM) handles everything automatically.

**Nexus** requires:
- Creating a free account to download (anonymous browsing works).
- Managing free-tier rate limits (waits between downloads).
- Often manual or Vortex-based install.
- Some mods require moving specific files following author instructions.

For someone starting to mod, Nexus feels more artisanal and slower.

## Mod managers: the key difference

**Thunderstore**: r2modman/Gale/TMM (all the main managers) consume it natively. Click → install.

**Nexus**: only Vortex (by Nexus Mods) fully integrates. r2modman/Gale/TMM don't pull from Nexus. To install a Nexus mod, manually download or run Vortex in parallel.

Running Vortex + r2modman side-by-side is overhead — manual tracking of what comes from where, potential conflicts, no profile sync between managers. That's why most people keep their primary modlist 100% on Thunderstore.

## When each wins

| Scenario | Best pick |
|---|---|
| New QoL, gameplay, building mods | Thunderstore |
| HD texture packs and visual skins | Nexus |
| Free tier without rate limits | Thunderstore |
| Abandoned 2021-2022 mods | Nexus |
| One-click mod manager integration | Thunderstore |
| Modlists shared with friends | Thunderstore |
| No account required to download | Thunderstore |
| Looking for a specific mod no longer on Thunderstore | Nexus |

## Verdict

It's not really a decision in 2026: **Thunderstore is the primary and Nexus is secondary**.

Your base workflow should be:
1. Search the mod on Thunderstore first.
2. If not there, check Nexus.
3. If not on Nexus either, GitHub raw or the author's Discord.

If you end up relying on multiple Nexus mods, run Vortex alongside r2modman/Gale, but ideally keep Thunderstore as the primary source and treat Nexus as an auxiliary hub.

For users coming from Skyrim or Fallout where Nexus is the primary, the mental flip costs something. But for Valheim in 2026, Thunderstore won that fight.
