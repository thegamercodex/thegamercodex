# OSRS — Tool tracker (DONE 2026-06-05)

> Status: COMPLETE. 15 tools, 5 creators, 25 resources, 8 comparisons, 1 stack. Build passes, neutro clean, inventory regenerated. Pending: user uploads game hero/logo images; not committed.


Game id: `old-school-runescape` · Jagex · 2013 · Steam appId 1343370 (news auto-derives) · genre `mmo`.

Status legend: ✅ done · 🔧 in-progress · ⏳ pending

## Tools (13 core + 2 community = 15)

| # | id | name | category | type | essential | status | notes |
|---|---|---|---|---|---|---|---|
| 1 | runelite | RuneLite | clients | software | ✅ | ⏳ | Open source, Jagex-approved, 1000+ plugin hub. github runelite/runelite |
| 2 | hdos | HDOS | clients | software | | ⏳ | Closed-source HD client, the other Jagex-approved client. hdos.dev |
| 3 | osrs-wiki | OSRS Wiki | reference | reference | ✅ | ⏳ | oldschool.runescape.wiki (Weirdgloop). Canonical reference |
| 4 | explvs-map | Explv's Map | reference | web-app | | ⏳ | explv.github.io — interactive world map w/ coords/regions |
| 5 | wise-old-man | Wise Old Man | xp-tracking | web-app | ✅ | ⏳ | Open source, RuneLite-integrated, competitions/groups. github |
| 6 | temple-osrs | TempleOSRS | xp-tracking | web-app | | ⏳ | EHP/EHB, drop logs, collection log tracking, competitions |
| 7 | crystal-math-labs | Crystal Math Labs | xp-tracking | web-app | | ⏳ | The OG XP tracker (CML). Most complete historical data |
| 8 | osrs-wiki-dps-calc | OSRS Wiki DPS Calculator | combat-gear | web-app | | ⏳ | dps.osrs.wiki — Weirdgloop, open source (weirdgloop/osrs-dps-calc) |
| 9 | gearscape | GearScape | combat-gear | web-app | | ⏳ | gearscape.net — DPS + "best gear for NPC by budget/prefs" |
| 10 | osrs-best-in-slot | OSRS Best in Slot | combat-gear | web-app | | ⏳ | osrsbestinslot.com — load RSN, auto-equip BiS, TTK |
| 11 | ge-tracker | GE Tracker | economy | web-app | | ⏳ | ge-tracker.com — freemium flipping suite, margins, app |
| 12 | osrs-exchange | OSRS Exchange | economy | web-app | | ⏳ | osrs.exchange — free live GE prices + flip finder |
| 13 | osrs-wiki-prices | OSRS Wiki Prices | economy | web-app | | ⏳ | prices.runescape.wiki — official real-time GE prices (powers RuneLite) |
| C1 | osrs-discord | Old School RuneScape Discord | community | discord | | ⏳ | discord.com/invite/osrs — official, ~263k members. logo common |
| C2 | osrs-subreddit | r/2007scape | community | reference | | ⏳ | reddit.com/r/2007scape — main subreddit. logo common reddit |

Dropped during research:
- `collectionlog.net` — curl 000 (unreachable) + superseded by TempleOSRS collection log. Skip.
- `osrs-genie`, oldschool.tools, osrstoolkit, 07.gg, therealge — SEO-grade DPS/GE clones; avoid padding.

VT note: gearscape.net / osrsbestinslot.com / osrs.exchange are web-app utilities (not downloadable executables); VT API needs a key (401 via WebFetch). Lower phishing risk than typosquat installers. Flag for user glance.

## toolCategories (6)
clients 🖥️ · reference 📚 · xp-tracking 📈 · combat-gear ⚔️ · economy 💰 · community 💬

## resourceCategories (5)
beginner-guides 🎓 · money-making 💰 · skilling-guides ⛏️ · bossing-guides 🐉 · quest-guides 📜

## Comparisons plan (target 7, have 8 candidates)
1. runelite vs hdos (clients) — FLAGSHIP
2. wise-old-man vs temple-osrs (xp-tracking) — FLAGSHIP
3. crystal-math-labs vs wise-old-man (xp-tracking) — short
4. temple-osrs vs crystal-math-labs (xp-tracking) — short
5. osrs-wiki-dps-calc vs gearscape (combat-gear) — short
6. osrs-wiki-dps-calc vs osrs-best-in-slot (combat-gear) — short
7. ge-tracker vs osrs-wiki-prices (economy) — short
8. ge-tracker vs osrs-exchange (economy) — short

## Stack plan (min 1)
`osrs-account-toolkit` (improvement): runelite + osrs-wiki + wise-old-man + osrs-wiki-dps-calc + ge-tracker (+ temple-osrs). Layers: client → reference → tracking → combat optimization → economy.

## Creators (Phase 2) — pending research
OSRS hispano is marginal → mostly EN. Candidates to verify: Settled, Theoatrix OSRS, J1mmy, FailsafeGuides? B0aty(stream), Framed (PvM), SkillSpecs, Slayermusiq1 (quests). Pick 5 diverse (guides/PvM/quests/efficiency/entertainment).
