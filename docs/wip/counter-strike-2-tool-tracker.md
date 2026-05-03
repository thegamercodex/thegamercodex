# Counter-Strike 2 — Tool batch tracker

Estado del batch de 15 tools curadas para CS2 (lista original en `.tmp/cs2-tools.md`). Actualizado al cierre del batch (2026-05-03).

## Status por tool

| # | Tool | URL | Categoría | Status | Notas |
|---|---|---|---|---|---|
| 1 | HLTV | https://www.hltv.org | esports-stats | ✅ done | Anchor de esports — institución desde 2002. essential: true. Sección "La diferencia con Liquipedia" agregada. |
| 2 | Liquipedia CS | https://liquipedia.net/counterstrike | esports-stats | ✅ done | type: reference. Sección "La diferencia con HLTV" agregada (filosofía opuesta dentro del cluster). |
| 3 | Leetify | https://leetify.com | match-history | ✅ done | AI coaching, freemium. Mencionado funding 2021-2022. |
| 4 | scope.gg | https://scope.gg | demo-analysis | ✅ done | Demo viewer 2D + utility breakdown. Diferenciación implícita vs Leetify (focus visualization). |
| 5 | CS Stats | https://csstats.gg | match-history | ✅ done | Tracker liviano, foco histórico ESEA. |
| 6 | Tracker.gg CS2 | https://tracker.gg/cs2 | match-history | ✅ done | Multi-game generalist. Editorial honesto sobre cobertura menor que specialists. |
| 7 | Faceit | https://www.faceit.com/en/cs2 | competitive-platform | ✅ done | Anchor competitive. essential: true. Mencionado ESL FACEIT Group y Savvy. |
| 8 | ESEA | https://play.esea.net | competitive-platform | ✅ done | Legacy, propiedad de FACEIT desde 2019. Editorial honesto sobre decline post-CS2. |
| 9 | CS.MONEY | https://cs.money | skin-marketplace | ✅ done | Mencionado hack 2022 ($6M). |
| 10 | Steam Community Market | https://steamcommunity.com/market | skin-marketplace | ✅ done | official: true, type: official-service. essential: true. Único oficial de la lista. |
| 11 | csgostash | https://csgostash.com | skin-marketplace | ✅ done | type: reference. No es marketplace activo, es database. |
| 12 | CSNADES.gg | https://csnades.gg | lineups-database | ✅ done | Lineups por mapa. Tutorial videos cortos. |
| 13 | Simple Radar | https://readtldr.gg/simpleradar | training-tools | ✅ done | type: software (asset replacement mod). Distribuido por readtldr.gg. |
| 14 | Aim Botz | https://steamcommunity.com/sharedfiles/filedetails/?id=243702660 | training-tools | ✅ done | type: software (Workshop map). platforms: ["windows", "linux"]. essential: true. createdBy: uLetsPlay. |
| 15 | HLTV Live Matches | https://www.hltv.org/matches | live-tracking | ✅ done | Mismo dominio que #1 pero categoría distinta (live schedules/brackets). Editorial diferencia claramente vs HLTV principal. |

## Estado final del batch (2026-05-03)

15/15 tools done. Distribución:

- **essential: true** (4): hltv (anchor esports), faceit (anchor competitive serious), steam-community-market (canal oficial economía), aim-botz (warmup universal del ecosistema).
- **official: true** (1): steam-community-market.
- **openSource: true** (0): ninguna del batch es open source.
- **type web-app** (10): hltv, leetify, scope-gg, csstats-gg, tracker-gg-cs2, faceit, esea, cs-money, csnades-gg, hltv-live-matches.
- **type reference** (2): liquipedia-cs, csgostash.
- **type official-service** (1): steam-community-market.
- **type software** (2): simple-radar, aim-botz.

## Notas editoriales aplicadas

- Estructura de secciones según `docs/RULES.md → "Editorial conventions para tool .md"`.
- Longitud target ~80-100 líneas por archivo md (anchor HLTV ~85, otros similares).
- Pares con sección "Diferenciación" o "La diferencia con [otra]":
  - HLTV ↔ Liquipedia (cluster esports-stats)
  - HLTV ↔ HLTV Live Matches (mismo dominio, categorías distintas; diferenciación dentro de cada md)
  - Faceit ↔ ESEA (cluster competitive-platform; corporate consolidation explicada)
  - CS.MONEY ↔ Steam Market ↔ csgostash (cluster skin-marketplace; trinity diferenciada)
  - Leetify ↔ scope.gg ↔ CS Stats ↔ Tracker.gg (cluster match-history/demo-analysis; cada uno con su nicho explícito)
- Caveats editoriales transparentes:
  - CS.MONEY hack 2022.
  - FACEIT AC privacy concerns.
  - ESEA decline post-CS2.
  - HLTV foros tóxicos.
  - Tracker.gg cobertura menor que specialists.
- `essential: true` reservado para tools que cualquier player serio de CS2 toca al menos una vez (HLTV para news, Faceit para serious MM, Steam Market para skins, Aim Botz para warmup).

## Pendiente antes de commit

- `npx next build` (verificar SSG limpio).
- Validación visual post-deploy planeada por el usuario.

## Cuando se complete el batch

- Marcar tools en `essential: true` para reflejarse en listings de "essential tools" del juego.
- Considerar si conviene agregar `multiGame` a Tracker.gg CS2 cuando otros juegos del catalog (Apex, Valorant) entren al codex.
- HLTV y HLTV Live Matches son técnicamente del mismo dominio — verificar si el sitemap.ts genera entradas distintas (deberían sí, son tool ids distintos con paths distintos).
