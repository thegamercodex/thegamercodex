# Warframe — tracker de producción (add-game playbook)

Estado: en progreso. Research verificado 2026-06-04 (3 subagentes). Fuente de verdad final: `content/games/warframe/`.

## Tools (15 + Discord + subreddit = 17)

| id | categoría | type | essential | logo | estado |
|---|---|---|---|---|---|
| warframe-market | trading-economy | web-app | ✅ | dl | ✅ |
| overframe | build-planning | web-app | ✅ | dl (403 cf) | ✅ |
| reframed | build-planning | web-app | | dl | ✅ |
| warframe-damage-calc | build-planning | web-app | | dl | ✅ |
| alecaframe | overlay-companion | overlay | ✅ | dl | ✅ |
| wfinfo | overlay-companion | overlay | ✅ | github common | ✅ |
| warframe-wiki | reference | reference | ✅ | dl | ✅ |
| warframe-drop-tables | reference | official-service | | dl | ✅ |
| warframe-drop-data | reference | web-app | | github common | ✅ |
| browse-wf | reference | web-app | | github common | ✅ |
| warframe-hub | worldstate-timers | web-app | ✅ | dl | ✅ |
| tenno-tools | worldstate-timers | web-app | | dl | ✅ |
| cephalon-navis | worldstate-timers | mobile-app | | github common | ✅ |
| semlar | trading-economy | web-app | | dl | ✅ |
| profit-taker-analytics | endgame-tooling | software | | github common | ✅ |
| warframe-discord | community | discord | | common discord | ✅ |
| warframe-subreddit | community | reference | | — | ✅ |

Muertos descartados: warframe-builder.com, warframeschool.com, warframehub.com, wf.xuerian.net (down).

## Creators (5: 3 EN + 2 ES) — channelIds + avatares verificados

| id | lang | channelId | avatar |
|---|---|---|---|
| brozime | en | UCJ6-So7ndDeeYdudPIbhCiA | ✅ |
| the-kengineer | en | UCiED7CqmvQSsSHUiQ42EWbw | ✅ |
| knightmare-frame | en | UC9BVPiqY_Dc3hbcmDKatazA | ✅ |
| eduiy16 | es | UC-BIEXRTfgLty4jIWtuIPbw | ✅ |
| gerrerossj4 | es | UCzIVYdCwbR_Xsl_r4OTnGpg | ✅ |

## Resources (25) — todos verificados con verify_video
- beginner-guides (5): Tipsy, iFlynn, KnightmareFrame[creator], SoyFefee[es], ExpertDrah[es]
- news-and-updates (5): Brozime[creator], Gaz TTV, kyaii, Grind Hard Squad, Swagbraham
- build-guides (5): Saryn/XH, WispPrime/Hunkpain, Dante/MHBlacky, Revenant/O Dawg, Octavia/Hunkpain
- farming-guides (5): TheKengineer[creator], Grind Hard Squad, WarframeFlo, Pupsker, Tipsy
- endgame-guides (5): WarframeFlo, ForsakenIdol, Gaz TTV, Aloo pc (Deep Archimedea), Weazel (Archon Shards)

## Comparisons (8 pares) — mín 7 ✅
1. overframe-vs-reframed (build-planning) — flagship
2. overframe-vs-warframe-damage-calc (build-planning) — short
3. alecaframe-vs-wfinfo (overlay-companion) — flagship
4. warframe-market-vs-semlar (trading-economy) — short
5. warframe-hub-vs-tenno-tools (worldstate-timers) — short
6. warframe-hub-vs-cephalon-navis (worldstate-timers) — short
7. warframe-drop-tables-vs-warframe-drop-data (reference) — short
8. warframe-wiki-vs-browse-wf (reference) — short

## Stack (1): ultimate-warframe-toolkit
warframe-wiki, overframe, warframe-hub, wfinfo, warframe-market, alecaframe

## Pendiente
- Game hero/logo (sube el usuario manualmente; existsSync hace fallback)
- Build + inventory + lint español neutro
