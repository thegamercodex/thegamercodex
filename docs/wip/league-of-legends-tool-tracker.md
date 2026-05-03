# League of Legends — Tool batch tracker

Estado del batch de 15 tools curadas para LoL (lista original armada en chat externo). Actualizar este archivo a medida que se completan.

## Status por tool

| # | Tool | URL | Categoría | Status | Notas |
|---|---|---|---|---|---|
| 1 | OP.GG | https://www.op.gg | match-history | ✅ done | Anchor editorial. essential: true. Diferenciado vs Blitz.gg en su md. |
| 2 | U.GG | https://u.gg | champion-builds | ✅ done | `official: false` (myth busted: no Riot Partner program para sites). Sección "La diferencia con OP.GG" agregada. essential: false. |
| 3 | Mobalytics | https://mobalytics.gg | coaching | ✅ done | Desktop app en Overwolf desde nov-2022 (mencionado honestamente en limitaciones). Web app sin Overwolf runtime. essential: false. Sin sección "Diferenciación" — cluster único en coaching. |
| 4 | Porofessor | https://porofessor.gg | live-analysis | ✅ done | type `overlay`, desktop app standalone (NO Overwolf — diferencial vs Mobalytics). Sección "La diferencia con Blitz.gg" agregada (specialist vs generalist). essential: false. |
| 5 | Blitz.gg | https://blitz.gg | match-history | ✅ done | type `overlay` (overlay-first). Sin sección "Diferenciación" propia (ya referenciado desde OP.GG y Porofessor). Editorial destaca paywall + telemetría + footprint, recomienda alternativas especializadas. essential: false. |
| 6 | Lolalytics | https://lolalytics.com | meta-analysis | ✅ done | Sección "La diferencia con League of Graphs" agregada (current-patch focus vs historical depth). difficulty: intermediate. essential: false. |
| 7 | League of Graphs | https://www.leagueofgraphs.com | meta-analysis | ✅ done | Sin sección "Diferenciación" propia (referenciado desde Lolalytics). Editorial enfoca historical depth + records + curiosity stats. essential: false. |
| 8 | Probuilds.net | https://www.probuilds.net | probuilds | ✅ done | Sección "La diferencia con Probuild.gg" agregada (legacy UX vs modern). Caveat editorial: builds de pros no escalan a rango medio. essential: false. |
| 9 | Probuild.gg | https://www.probuild.gg | probuilds | ✅ done | Sin sección "Diferenciación" propia (referenciado desde Probuilds.net). Editorial enfoca mobile UX + presentación moderna. essential: false. |
| 10 | LoL Wiki Oficial | https://wiki.leagueoflegends.com | wiki | ✅ done | id: `lol-wiki`. official: true (Weird Gloop partnership con Riot). essential: true (referencia canónica de números). Sección sobre Fandom legacy explícita. Cobertura solo game content (no esports). |
| 11 | Leaguepedia | https://lol.fandom.com/wiki/League_of_Legends_Esports_Wiki | esports-database | ✅ done | Sigue en Fandom (no migró a wiki.gg, asimetría vs game wiki). official: false. essential: false. Sección "La situación con Fandom" explícita sobre UX issues. Cobertura solo esports (no game content). |
| 12 | Gol.gg | https://gol.gg | esports-stats | ✅ done | Sección "La diferencia con Oracle's Elixir" agregada (navegabilidad vs raw data + EU vs anglo emphasis). difficulty: intermediate. essential: false. |
| 13 | Oracle's Elixir | https://oracleselixir.com | esports-stats | ✅ done | id: `oracles-elixir`. Sin sección "Diferenciación" propia (referenciado desde Gol.gg). Editorial enfoca CSV datasets + blog editorial + single-maintainer (Tim Sevenhuysen). essential: false. |
| 14 | LoLDraftAI | https://loldraftai.com | draft-analysis | ✅ done | Activa, modelo retrainado cada patch. Open source. Caveats editoriales: tool joven ~1 año, bus-factor 1, signal directional. essential: false. difficulty: intermediate. |
| 15 | ChampionMastery.gg | https://championmastery.gg | progression-tracker | ✅ done | id: `championmastery-gg`. Open source (Derpthemeus), MIT, GitHub activo (último commit 2025-07-04 reaccionando a deprecación de summoner IDs). Niche puro: leaderboards de mastery. essential: false. |

## Orden de procesamiento sugerido

1. **OP.GG** ✅ (anchor editorial — referencia para diferenciar el cluster personal-stats)
2. Cluster personal stats / coaching: U.GG, Blitz.gg, Mobalytics, Porofessor
3. Cluster meta-analysis: Lolalytics, League of Graphs
4. Cluster probuilds: Probuilds.net, Probuild.gg
5. Cluster wikis: LoL Wiki, Leaguepedia
6. Cluster esports stats: Gol.gg, Oracle's Elixir
7. Niche: LoLDraftAI, ChampionMastery.gg

## Dudas verificadas (research 2026-05-03)

- **U.GG "Riot-approved"** → ❌ No existe programa formal "Riot-approved/Partner" para tools/sites. Riot Partner Program es para *content creators*, no apps. U.GG fue sponsor de un segmento del LCS en 2019 (one-off), y su propio sitio incluye disclaimer "isn't endorsed by Riot Games". **Decisión**: `official: false`. Editorial puede mencionar las relaciones comerciales puntuales sin elevarlas a endorsement.
- **Mobalytics ↔ Overwolf** → ✅ Migrado. Desktop app **corre dentro de Overwolf desde nov-2022** (anuncio dev blog 15-nov-2022). La app vieja (Electron standalone) está congelada, todo feature nuevo va al build de Overwolf. **Decisión editorial**: mencionar honestamente que la versión desktop requiere instalar el cliente Overwolf (runtime separado, ads de la plataforma, telemetría propia). El web app en navegador NO tiene esta limitación.
- **LoL Wiki situación** → 🟡 Split asimétrico:
  - Game wiki (champions/items/lore) → migrado a `wiki.leagueoflegends.com`, operado por **Weird Gloop** en partnership con Riot, oficial. **Decisión**: este tool va con `official: true`.
  - Esports wiki (Leaguepedia) → **sigue en Fandom** (`lol.fandom.com`), no migró. Editorial: mencionar honestamente las limitaciones de Fandom (ads, mobile UX) sin demonizar.
  - Mismo patrón split que WoW (Warcraft Wiki oficial vs Wowpedia legacy) — pero en LoL el esports todavía no encontró su "wiki.gg moment".
- **LoLDraftAI** → ✅ Activo y reciente. Sitio live, indicador "Patch 16.09 · Updated May 2", blog activo, Discord público. Open-sourced ~mayo 2025. **Caveat editorial**: muy joven (~1 año), branded sin attribution personal visible — bus-factor 1, mencionar en "Limitaciones honestas".
- **ChampionMastery.gg** → ✅ Activo. Repo GitHub con commits jun-jul 2025 (último 2025-07-04 reaccionando a deprecación de summoner IDs por Riot). Single-maintainer ("Derpthemeus") con track record largo. **Caveat editorial**: tool de nicho (solo mastery scores), no replacement para op.gg/U.GG.

## Convenciones editoriales aplicadas (heredadas del anchor OP.GG)

- Estructura de secciones según `docs/RULES.md → "Editorial conventions para tool .md"`.
- Longitud target ~80-100 líneas por archivo md (anchor OP.GG quedó en ~85).
- Pares competidores tienen sección "Diferenciación" o "La diferencia con [otra]" cuando aplica. Cada par solo necesita una sección comparativa — la primera tool del par la incluye, la segunda referencia inversa sin re-analizar.
- `essential: true` reservado para tools que cualquier player del juego usa al menos una vez (OP.GG es essential; Probuild.gg probablemente no).
- `multiGame` se omite mientras los demás juegos del ecosistema no estén en el codex (OP.GG cubre Valorant/TFT pero esos no están en `content/games/` todavía).

## Cuando se complete el batch

- Validar todo con: `node` script de validación (ver `docs/RULES.md`).
- Correr `npx next build` para confirmar SSG limpio.
- Commit en bloque con mensaje descriptivo (no individual por tool).
- Actualizar este tracker borrando la fila o marcándola completed cuando todo esté en main.

## Estado final del batch (2026-05-03)

15/15 tools done. Distribución:
- **essential: true** (2): op-gg (anchor match-history), lol-wiki (referencia canónica de números).
- **official: true** (1): lol-wiki (Weird Gloop / Riot partnership).
- **openSource: true** (2): loldraftai (proyecto branded sin attribution personal), championmastery-gg (Derpthemeus, MIT).
- **type overlay** (2): porofessor, blitz-gg.
- **type reference** (2): lol-wiki, leaguepedia.
- **type web-app** (11): el resto.

Pendiente antes de commit: `npx next build` (requiere Node ≥20.9, no se pudo correr en esta sesión por Node 18/20.0 viejos disponibles localmente). Validación visual post-deploy planeada por el usuario.
