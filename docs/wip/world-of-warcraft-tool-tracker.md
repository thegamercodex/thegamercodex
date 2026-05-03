# World of Warcraft — Tool batch tracker

Estado del batch de 13 tools curadas para WoW (lista original en `.tmp/wow-tools.md`). Las dos primeras del codex (WoWHead, Warcraft Wiki) ya estaban hechas como base editorial referencial. Iniciado 2026-05-03.

## Status por tool

| # | Tool | URL | Categoría | Status | Notas |
|---|---|---|---|---|---|
| 1 | Warcraft Logs | https://www.warcraftlogs.com | raid-logs | ✅ done | essential: true. Premium tier explicado. Comparte propiedad corporativa con WoWHead (Fanbyte/Tencent). |
| 2 | WoWAnalyzer | https://wowanalyzer.com | raid-logs | ✅ done | openSource AGPL-3.0. Consume Warcraft Logs API. Diferenciación con Wipefest agregada. |
| 3 | Wipefest | https://www.wipefest.gg | raid-logs | ✅ done | Focus mecánicas y wipes vs DPS analysis (WoWAnalyzer). |
| 4 | Raider.IO | https://raider.io | mythic-plus-tracker | ✅ done | essential: true. Companion addon mencionado. Premium tier. |
| 5 | Icy Veins | https://www.icy-veins.com | guides | ✅ done | type: reference. Mainstream broad. |
| 6 | Method | https://www.method.gg | guides | ✅ done | type: reference. Controversia 2020 mencionada con tono honesto. |
| 7 | Archon.gg | https://www.archon.gg | guides | ✅ done | Data-driven moderno tipo U.GG/Lolalytics. |
| 8 | Raidbots | https://www.raidbots.com | gear-optimizer | ✅ done | essential: true. SimulationCraft creditado como motor open source. |
| 9 | Bloodmallet | https://bloodmallet.com | gear-optimizer | ✅ done | openSource (MIT). Charts pre-computed. |
| 10 | CurseForge | https://www.curseforge.com/wow | addons | ✅ done | essential: true. Adquisición Overwolf 2020 mencionada honestamente. |
| 11 | Wago.io | https://wago.io | addons | ✅ done | Alternativa moderna a CurseForge. WeakAuras-first heritage. |
| 12 | TradeSkillMaster | https://tradeskillmaster.com | auction-house-tracker | ✅ done | type: software (desktop-first). Dependencia obligatoria de TSM Desktop App desde TSM4. |
| 13 | WoW Esports | https://worldofwarcraft.blizzard.com/en-us/esports | esports-tracker | ✅ done | official: true, type: official-service. createdBy Blizzard. Coverage promocional mencionado. |

## Notas editoriales del batch

- Estructura de secciones según `docs/RULES.md → "Editorial conventions para tool .md"`.
- Longitud target ~80-100 líneas por archivo md.
- Pares con sección "Diferenciación" o "La diferencia con [otra]":
  - Warcraft Logs ↔ WoWAnalyzer ↔ Wipefest (cluster raid-logs).
  - Icy Veins ↔ Method ↔ Archon.gg (cluster guides).
  - Raidbots ↔ Bloodmallet (cluster gear-optimizer).
  - CurseForge ↔ Wago.io (cluster addons).
- Caveats editoriales transparentes:
  - CurseForge — adquisición Overwolf 2020 y deterioro de UX.
  - Method — controversia 2020 (Sco) sin demonizar a content creators actuales.
  - Warcraft Logs — Premium prácticamente requisito para análisis avanzado.
  - TradeSkillMaster — dependencia obligatoria de TSM Desktop App desde TSM4.
  - WoW Esports — coverage promocional, no análisis crítico.
  - Warcraft Logs / WoWHead — propiedad corporativa compartida (Fanbyte/Tencent).
- `essential: true` reservado para tools que cualquier WoW player serio toca al menos una vez por temporada (Warcraft Logs para raid review, Raider.IO para M+ planning, CurseForge para addons baseline, Raidbots para gear/talent decisions).

## Pendiente antes de commit

- `npx next build` (verificar SSG limpio).
- Validación visual post-deploy planeada por el usuario.

## Cuando se complete el batch

- Considerar agregar `multiGame` a TradeSkillMaster cuando WoW Classic entre como juego separado del codex (TSM cubre Retail + Classic).
