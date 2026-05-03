# League of Legends — Tool batch tracker

Estado del batch de 15 tools curadas para LoL (lista original armada en chat externo). Actualizar este archivo a medida que se completan.

## Status por tool

| # | Tool | URL | Categoría | Status | Notas |
|---|---|---|---|---|---|
| 1 | OP.GG | https://www.op.gg | match-history | ✅ done | Anchor editorial. essential: true. Diferenciado vs Blitz.gg en su md. |
| 2 | U.GG | https://u.gg | champion-builds | ⏳ pending | Verificar status "Riot-approved" — afecta `official` field y editorial |
| 3 | Mobalytics | https://mobalytics.gg | coaching | ⏳ pending | Confirmar si sigue independiente o se movió a Overwolf platform |
| 4 | Porofessor | https://porofessor.gg | live-analysis | ⏳ pending | Overlay de champ select; type probable `overlay` |
| 5 | Blitz.gg | https://blitz.gg | match-history | ⏳ pending | Pareja con OP.GG. Editorial debe destacar paywall agresivo y telemetría |
| 6 | Lolalytics | https://lolalytics.com | meta-analysis | ⏳ pending | Pareja con League of Graphs |
| 7 | League of Graphs | https://www.leagueofgraphs.com | meta-analysis | ⏳ pending | Pareja con Lolalytics — diferenciar profundidad estadística vs current-patch focus |
| 8 | Probuilds.net | https://www.probuilds.net | probuilds | ⏳ pending | El clásico, pareja con Probuild.gg |
| 9 | Probuild.gg | https://www.probuild.gg | probuilds | ⏳ pending | UX moderno, pareja con Probuilds.net |
| 10 | LoL Wiki Oficial | https://wiki.leagueoflegends.com | wiki | ⏳ pending | Riot-hosted, oficial. Mismo patrón que warcraft-wiki.com vs Fandom legacy |
| 11 | Leaguepedia | https://lol.fandom.com/wiki/League_of_Legends_Esports_Wiki | esports-database | ⏳ pending | Aún en Fandom. Verificar si hubo migración a wiki.gg como WoW |
| 12 | Gol.gg | https://gol.gg | esports-stats | ⏳ pending | Database europea de pro stats, pareja con Oracle's Elixir |
| 13 | Oracle's Elixir | https://oracleselixir.com | esports-stats | ⏳ pending | Referencia anglosajona, datasets descargables |
| 14 | LoLDraftAI | https://loldraftai.com | draft-analysis | ⏳ pending | Niche; verificar actividad/release date — posible tool nueva sin tracción todavía |
| 15 | ChampionMastery.gg | https://championmastery.gg | progression-tracker | ⏳ pending | Verificar actividad reciente |

## Orden de procesamiento sugerido

1. **OP.GG** ✅ (anchor editorial — referencia para diferenciar el cluster personal-stats)
2. Cluster personal stats / coaching: U.GG, Blitz.gg, Mobalytics, Porofessor
3. Cluster meta-analysis: Lolalytics, League of Graphs
4. Cluster probuilds: Probuilds.net, Probuild.gg
5. Cluster wikis: LoL Wiki, Leaguepedia
6. Cluster esports stats: Gol.gg, Oracle's Elixir
7. Niche: LoLDraftAI, ChampionMastery.gg

## Dudas pendientes a verificar (antes de escribir editorial)

- **U.GG "Riot-approved"**: confirmar si tiene endorsement formal de Riot. Afecta el campo `official` (probablemente sigue siendo `false` aunque el editorial lo mencione) y el quickTake.
- **Mobalytics ↔ Overwolf**: verificar si la app actual corre dentro de Overwolf platform o sigue siendo standalone. Cambia el editorial sobre privacy/telemetría.
- **LoL Wiki dual versions**: el oficial (`wiki.leagueoflegends.com`, Riot-hosted) reemplazó al legacy de Fandom (`leagueoflegends.fandom.com`). El editorial debe mencionar ambos y explicar por qué el oficial es la fuente actual. Mismo patrón que WoW (Warcraft Wiki vs Wowpedia legacy) y PoE (poewiki.net vs Fandom).
- **Leaguepedia migración**: actualmente en `lol.fandom.com`, verificar si hubo movida a `wiki.gg` (como Warcraft Wiki). Si todavía está en Fandom, mencionar las prácticas de la plataforma honestamente.
- **LoLDraftAI y ChampionMastery.gg**: tools menos mainstream. Verificar release date, último commit (si tienen GitHub), actividad reciente. Si están abandonadas o son betas inestables, considerar quitarlas del batch.

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
