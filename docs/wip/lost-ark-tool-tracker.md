# Lost Ark — WIP tracker

Estado de la adición de Lost Ark (game-id: `lost-ark`). Western version (Amazon Games / Smilegate RPG), Steam appId `1599340`, free-to-play, Windows-only, géneros `["mmo","arpg"]`.

## Tools (13 + Discord + subreddit)

| id | category | type | essential | status | nota |
|---|---|---|---|---|---|
| maxroll-lost-ark | build-guides | web-app | ✅ | ⏳ | multiGame (d4, poe, poe2, last-epoch). Flagship guide hub |
| lost-ark-nexus | build-guides | web-app | | ⏳ | guías más livianas, competidor de Maxroll |
| maxroll-upgrade-calculator | calculators | web-app | ✅ | ⏳ | honing/upgrade calc |
| lost-ark-codex | database | reference | ✅ | ⏳ | DB + skill builder; multi-region URLs |
| lost-ark-database | database | reference | | ⏳ | DB + guías + mapa |
| ~~papunika~~ | ~~interactive-map~~ | | | ❌ | ELIMINADA 2026-07-10: la web ya no existe |
| lost-ark-map | interactive-map | web-app | ✅ | ⏳ | 12 idiomas, multi-datacenter. Único mapa tras baja de papunika |
| lostark-bible | character-lookup | web-app | ✅ | ⏳ | ex uwuowo (Mathi). VirusTotal pendiente |
| meta-game-armory | character-lookup | web-app | | ⏳ | armory + honing calc |
| loa-logs | combat-analysis | overlay | | ⏳ | DPS meter Rust, OSS (snoww) |
| loa-details | combat-analysis | overlay | | ⏳ | DPS meter Electron, OSS (lost-ark-dev) |
| lost-ark-logs | combat-analysis | web-app | | ⏳ | web log leaderboards |
| lost-ark-helper | roster-tools | web-app | | ⏳ | checklist roster/Una's tasks |
| lost-ark-discord | community | discord | ✅ | ⏳ | oficial (Amazon) |
| lostarkgame-subreddit | community | reference | ✅ | ⏳ | r/lostarkgame |

## Creators (5, todos EN — ES marginal, no forzado)

| id | channelId | avatar | status |
|---|---|---|---|
| memorizer92 | UCR3vcsjfFI7RH1q7vn05UoA | OK | ⏳ |
| wineblue | UCiHTga8wgUE7qf4nW73Nmpg | OK | ⏳ |
| johnpal | UCAnzQQBReaKnQS1DtE_T0FA | OK | ⏳ |
| imdefild | UCczXmz2M7klQ-C3hTZjeeKA | OK | ⏳ |
| saintone | UCtXxFskDMeSQBAC3HLShUjQ | OK | ⏳ |

## Resources (5 cats × 5 = 25) — todos verificados contra YouTube

beginner-guides ✅5, raid-guides ✅5, class-guides ✅5, gold-making 🔧(3, faltan 2), progression-guides ✅5

## Comparisons (8 pares, 1 flagship + 7 short)

1. maxroll-lost-ark vs lost-ark-nexus (build-guides) — FLAGSHIP
2. lost-ark-codex vs lost-ark-database (database)
3. ~~papunika vs lost-ark-map~~ — ELIMINADA 2026-07-10 (papunika ya no existe)
4. lostark-bible vs meta-game-armory (character-lookup)
5. loa-logs vs loa-details (combat-analysis)
6. loa-logs vs lost-ark-logs (combat-analysis)
7. maxroll-upgrade-calculator vs meta-game-armory (calculators) — honing calcs
8. (buffer) lost-ark-logs vs loa-details

## Stack (1): complete-lost-ark-toolkit

maxroll-lost-ark → maxroll-upgrade-calculator → lost-ark-codex → lost-ark-map → lostark-bible → lost-ark-helper

## Pendientes / flags

- VirusTotal: lostark.bible (rebrand de uwuowo), meta-game.gg — chequear y reportar al usuario.
- DPS meters (loa-logs/loa-details): framing editorial neutro (gray area de ToS).
- News page: auto-deriva del Steam appId 1599340, no requiere newsFeeds[].
- NO build / NO commit (los corre el usuario).
