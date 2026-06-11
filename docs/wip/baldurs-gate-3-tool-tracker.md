# BG3 — tool tracker (WIP)

Game id: `baldurs-gate-3`. Template editorial más cercano: `skyrim` (single-player moddable RPG).

Género canónico asignado: `arpg` (mejor encaje dentro de los 9 slugs para un RPG con build-crafting profundo; el sistema no tiene slug CRPG/turn-based). Single genre.

Steam appId: `1086940` → news page auto-deriva, sin `newsFeeds[]`.

Monetización: `buy-to-play`, sin microtransacciones (payToWin false, hasInGamePurchases false). Diferenciador editorial.

## Tools (16 = 14 + 2 community)

| id | category | type | essential | logo | status |
|---|---|---|---|---|---|
| eip-build-planner | build-planning | web-app | ✅ | download | ⏳ |
| gamefractal-planner | build-planning | web-app | | download | ⏳ |
| bg3-compendium | build-planning | web-app | | download | ⏳ |
| bg3-mod-manager | mod-managers | software | ✅ | common/github | ⏳ |
| vortex-mod-manager-bg3 | mod-managers | software | | download (multiGame: skyrim) | ⏳ |
| bg3-official-mod-support | mod-managers | official-service | | download (mod.io) | ⏳ |
| bg3-script-extender | modding-frameworks | software | | common/github | ⏳ |
| impui | modding-frameworks | software | | common/nexus | ⏳ |
| mod-configuration-menu | modding-frameworks | software | | common/nexus | ⏳ |
| bg3-wiki | reference | reference | ✅ | download | ⏳ |
| fextralife-bg3 | reference | reference | | common/fextralife | ⏳ |
| bg3-modding-wiki | reference | reference | | download | ⏳ |
| nexus-mods-bg3 | reference | web-app | ✅ | common/nexus | ⏳ |
| map-genie-bg3 | maps | web-app | | download | ⏳ |
| larian-discord | community | discord | official | common/discord | ⏳ |
| bg3-subreddit | community | reference | | common/reddit | ⏳ |

## Notas de research

- Official mod support: Patch 7 introdujo gestor de mods in-game + toolkit, integrado con mod.io, soporta consolas. BG3MM y el oficial escriben al mismo `modsettings.lsx`. Cross-platform vía mod.io curation.
- BG3 Mod Manager: GitHub LaughingLeader (única fuente oficial), .NET 8, soporta Patch 7/8.
- Script Extender (Norbyte/bg3se): runtime hook, requerido por mods avanzados; versión atada al build del patch.
- ImpUI: framework de UI, cargar primero, requisito de muchos mods de razas/clases.
- MCM (mods/9162): menú de config in-game, library mod del que dependen otros.
- bg3.wiki: wiki community (13k+ páginas). Fextralife: wiki con interactive map + walkthroughs.
- wiki.bg3.community: BG3 Modding Community Wiki (load order guide, tutoriales para modders).
- Map Genie BG3: 3000+ locations, Act 1/2/3, progress sync.
- Discord oficial = Larian Studios server (discord.com/invite/larianstudios); no hay server BG3-exclusivo oficial.
- Save editor (GrindArbiterFury GitHub) → 404, repo removido. Descartado.

## VirusTotal

API necesita key (401), GUI es SPA (no extrae vía fetch). Dominios no canónicos (eip.gg, gamefractal.com, bg3compendium.com): HTTP 200 limpio + reputación community sólida. Resto canónico (github, nexus, reddit, discord, fextralife, mapgenie ya en codex, bg3.wiki/wiki.bg3.community linkeados desde subreddit/Discord oficial).

## Comparisons (7)

1. eip-build-planner vs gamefractal-planner (build-planning) — flagship
2. eip-build-planner vs bg3-compendium (build-planning) — short
3. gamefractal-planner vs bg3-compendium (build-planning) — short
4. bg3-mod-manager vs vortex-mod-manager-bg3 (mod-managers) — short
5. bg3-mod-manager vs bg3-official-mod-support (mod-managers) — short
6. vortex-mod-manager-bg3 vs bg3-official-mod-support (mod-managers) — short
7. bg3-wiki vs fextralife-bg3 (reference) — flagship

## Stack (1)

`bg3-modding-toolkit`: bg3-mod-manager + nexus-mods-bg3 + bg3-script-extender + impui + mod-configuration-menu + bg3-modding-wiki
