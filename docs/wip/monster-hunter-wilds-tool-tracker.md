# WIP — Monster Hunter Wilds (add-game playbook)

Game id: `monster-hunter-wilds` · Steam appId `2246340` · Capcom · 2025-02-28
Genres: `arpg`, `open-world`. News: auto-derive de Steam (no `newsFeeds[]`).

## Tools (target 15 + Discord + subreddit)

| # | id | name | category | type | essential | logo | status | notas |
|---|----|------|----------|------|-----------|------|--------|-------|
| 1 | wildsbuilder | WildsBuilder | build-planning | web-app | ✅ | ⏳ | ⏳ | flagship indep. set builder; recomendado en r/MonsterHunterMeta. NON-CANON dom |
| 2 | mhwilds-hub | MH Wilds Hub | build-planning | web-app | | ⏳ | ⏳ | builder + calculator combinados. NON-CANON |
| 3 | rayleon-mhwilds | Rayleon Builder | build-planning | web-app | | ⏳ | ⏳ | armour search/solver rápido. NON-CANON |
| 4 | mobalytics-mhw | Mobalytics MH Wilds | build-planning | web-app | | common mobalytics | ⏳ | multiGame; logo común |
| 5 | maxroll-mhw | Maxroll MH Wilds | build-planning | web-app | ✅ | ⏳ | ⏳ | multiGame (en codex); planner + guías |
| 6 | mhwilds-calculator | MH Wilds Calculator | damage-calculator | web-app | | ⏳ | ⏳ | open source (chanleyou). netlify |
| 7 | mathhunter | Math Hunter | damage-calculator | web-app | | ⏳ | ⏳ | damage formula + meta. NON-CANON |
| 8 | kiranico-mhwilds | Kiranico | database | reference | ✅ | ⏳ | ⏳ | DB clásica de MH (canónica community) |
| 9 | atlasforge | AtlasForge | database | web-app | ✅ | ⏳ | ⏳ | db + interactive map + planner. NON-CANON |
| 10 | game8-mhwilds | Game8 | database | reference | | ⏳ | ⏳ | builds + db + map + walkthrough |
| 11 | fextralife-mhwilds | Fextralife Wiki | database | reference | | ⏳ | ⏳ | wiki (en codex p/ D4) |
| 12 | hunterpie | HunterPie | overlays-mods | overlay | | ⏳ | ⏳ | open source (Haato3o). overlay+companion |
| 13 | reframework | REFramework | overlays-mods | software | | common github? no→repo | ⏳ | open source (praydog). modding framework |
| 14 | fluffy-mod-manager | Fluffy Mod Manager | overlays-mods | software | | ⏳ | ⏳ | mod manager (fluffyquack.com) |
| 15 | nexusmods-mhwilds | Nexus Mods | overlays-mods | web-app | | common nexus | ⏳ | mod hub; logo común svg |
| + | mhwilds-discord | Official Discord | community | discord | | common discord | ⏳ | discord.gg/mhwilds (Capcom oficial) |
| + | mhwilds-subreddit | r/MonsterHunterWilds | community | reference | | ⏳ | ⏳ | tags community/reddit |

## toolCategories (5)
build-planning 🧮 · damage-calculator ➗ · database 📚 · overlays-mods 🖥️ · community 💬

## resourceCategories (5)
beginner-guides 🎓 · weapon-guides ⚔️ · endgame-guides 🔥 · title-update-coverage 🗓️ · monster-guides 🐉

## Comparison pairs (target ≥7)
1. wildsbuilder vs mhwilds-hub (build-planning) — flagship
2. wildsbuilder vs rayleon-mhwilds (build-planning)
3. maxroll-mhw vs mobalytics-mhw (build-planning) — plataformas
4. mhwilds-calculator vs mathhunter (damage-calculator)
5. kiranico-mhwilds vs game8-mhwilds (database)
6. game8-mhwilds vs fextralife-mhwilds (database)
7. kiranico-mhwilds vs atlasforge (database)
8. atlasforge vs maxroll-mhw (all-in-one) — opcional

## Stack
mhwilds-hunter-toolkit: maxroll-mhw + wildsbuilder + mhwilds-calculator + kiranico-mhwilds + hunterpie (+ atlasforge)

## VirusTotal — dominios NON-CANON a chequear (reportar al usuario)
wildsbuilder.com · atlasforge.gg · mhwildshub.com · mhwilds.rayleon.net · mhwilds-calculator.netlify.app · mathhunter.ca · fluffyquack.com
(No pude abrir VT GUI desde CLI — reportar para revisión manual. Todos 200 OK y referenciados por comunidad.)
