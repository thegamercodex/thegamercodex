---
title: "WoWAnalyzer"
description: "Análisis automatizado de logs de Warcraft Logs spec por spec, con sugerencias específicas y accionables sobre rotación, uptime de buffs y uso de cooldowns. Open source comunitario desde 2017."
quickTake: "Si Warcraft Logs te dice qué tan lejos del top estás, WoWAnalyzer te dice qué hacer al respecto. La cobertura por spec es desigual, pero cuando hay un módulo activo para tu spec es la diferencia entre 'mi log dice que perdí 8% DPS' y 'usaste este cooldown 12 segundos tarde tres veces'."
---

## Qué es

WoWAnalyzer (wowanalyzer.com) es un servicio web open source que toma reportes de Warcraft Logs y los pasa por módulos automatizados de análisis específicos por spec. La salida es un dashboard con issues priorizados: rotación incorrecta, talents subóptimos para el encounter, buffs caídos, cooldowns mal alineados.

El proyecto nació en 2017 como esfuerzo comunitario de jugadores que querían convertir logs en feedback accionable. La codebase entera vive en GitHub bajo licencia AGPL-3.0 y se mantiene gracias a contribuciones individuales — cada spec tiene uno o varios maintainers que actualizan reglas de análisis con cada cambio de balance.

No requiere subir nada nuevo: WoWAnalyzer consume directamente los logs ya subidos a Warcraft Logs vía la API pública. Pegás el link al reporte, elegís la pelea y el jugador, y el análisis aparece en segundos.

## Qué problema resuelve

Warcraft Logs te da datos crudos y percentiles. Pero leer un log y saber qué cambiar es una habilidad: tenés que entender la rotación óptima de tu spec, las prioridades de cooldowns, los breakpoints de talents, y compararlos contra tu data. Eso es trabajo de horas para un jugador casual.

WoWAnalyzer codifica ese conocimiento en reglas. Si tu spec lo soporta bien, el análisis te dice frases como "tu Combustion fue cast mientras Pyroblast Hot Streak estaba inactivo: pierde ~28k DPS estimado", o "tuviste 64% uptime en Slice and Dice, target es 95%". Reduce la barrera entre "tengo un log" y "sé qué hacer mañana".

Para players que no quieren hacer theorycrafting profundo pero quieren mejorar, es la herramienta más directa del ecosistema. Para theorycrafters, sirve como sanity check de cómo está performando una rotación específica en práctica.

## La diferencia con Wipefest

Ambas leen logs de Warcraft Logs y producen análisis automatizado, pero apuntan a problemas distintos:

- **WoWAnalyzer**: foco en **performance individual de DPS/healer/tank** — rotación, cooldowns, buffs, talents. Pregunta que responde: "¿qué hizo mal este jugador en su rol?"
- **Wipefest**: foco en **mecánicas y muertes** — quién no salió de un AoE, qué add no fue interrumpido, qué frame de mecánica fue ignorado. Pregunta que responde: "¿por qué wipeó la raid?"

Las dos se complementan: WoWAnalyzer para review individual post-raid, Wipefest para review de raid leadership. Una guild que usa ambas en paralelo cubre las dos dimensiones del análisis.

## Para qué la usa la gente

**Review individual post-raid**: pegás tu log, elegís el boss, y leés las suggestions ordenadas por impacto. Las top 3 suelen explicar el 80% del gap contra el top de tu spec.

**Identificar errores de rotación**: la suite de checks por spec detecta uses fuera de orden, cooldowns olvidados, buffs caídos. Es el caso más fuerte de la tool.

**Validar uptime de buffs/debuffs críticos**: cada spec tiene buffs que tienen que mantenerse en porcentajes específicos. WoWAnalyzer los lista con target y actual, en color rojo si están por debajo.

**Comparar talents con mejor performance**: el módulo de checklist marca cuando una build de talent no encaja con el encounter (ej: talent de single-target en boss con adds).

**Coaching para players nuevos en una spec**: levantó tu segundo char y no conocés la rotación. Un par de logs en WoWAnalyzer te dan los gaps top sin requerir que leas un guide de 5000 palabras.

## Para quién NO es esta herramienta

- **Specs sin módulo mantenido**: no todas las specs están igual de cubiertas. Algunas (Fire Mage, Holy Paladin, Blood DK) tienen análisis profundos; otras (Beast Mastery o Augmentation Evoker en algunas patches) pueden estar parcialmente actualizadas o desactualizadas. Si tu spec no tiene módulo activo, la herramienta da feedback genérico que suma poco.
- **Análisis de mecánicas o wipes**: para "por qué murió la raid", Wipefest es la opción correcta.
- **Players que quieren números de WCL**: si lo único que buscás es percentiles y rankings, no necesitás WoWAnalyzer — ya está todo en Warcraft Logs.

## Cómo se usa en la práctica

1. Tenés un log subido a Warcraft Logs (tuyo o de tu guild).

2. Copiás el link del reporte (URL completo de warcraftlogs.com).

3. Lo pegás en wowanalyzer.com en la home page.

4. La página carga la lista de peleas. Elegís el boss y el jugador a analizar.

5. WoWAnalyzer corre los módulos asociados a esa spec. Esperás 5-15 segundos.

6. Aparece el dashboard:
   - **Suggestions**: issues priorizados por impacto.
   - **Statistics**: métricas core (uptime de buffs, casts, cooldown usage).
   - **Timeline**: visualización de eventos críticos en el tiempo.
   - **Checklist**: validaciones por bullet (rotación correcta, talents apropiados, etc.).

7. Trabajás las top suggestions. Re-loggeás la próxima raid y comparás progreso.

## Limitaciones honestas

**Cobertura desigual por spec**: depende de los maintainers comunitarios. Algunas specs tienen módulos exhaustivos actualizados con cada hotfix; otras llevan meses sin update. Antes de basarte 100% en el feedback, vale la pena chequear cuándo se actualizó el módulo de tu spec en GitHub.

**No reemplaza guías de spec**: si recién empezás con una spec, WoWAnalyzer te dice "te falta uptime en X" pero no te enseña la rotación desde cero. Combiná con guías de Icy Veins / Method / Archon.

**Falsos positivos en encounters únicos**: ciertos bosses tienen mecánicas que rompen el patrón rotacional óptimo (movement obligatorio, transitions). El análisis a veces marca como "error" lo que era ejecución correcta dado el contexto. Hay que leer con criterio.

**Solo Retail con cobertura completa**: Classic y SoD están parcialmente soportados pero la mayoría del foco del proyecto está en Retail.

**No analiza fights de Mythic+**: aunque se puede subir un log de M+ a WCL, el análisis de WoWAnalyzer está optimizado para boss fights de raid, no para keys.

**UI mejorable**: aunque funcional, la interfaz es densa. Encontrar la sugerencia correcta a veces requiere navegar varios tabs.

## Cómo empezar

1. Abrí [wowanalyzer.com](https://wowanalyzer.com).

2. Pegá el link a tu reporte público de Warcraft Logs.

3. Elegí el primer boss del raid donde fuiste DPS/healer/tank y tu personaje en la lista.

4. Leé las top 3 suggestions. Esa es tu lista de tareas para la próxima raid.

5. Si querés contribuir o reportar bugs, el repo en GitHub ([WoWAnalyzer/WoWAnalyzer](https://github.com/WoWAnalyzer/WoWAnalyzer)) acepta PRs y issues. Las specs sin maintainer activo siempre buscan voluntarios con conocimiento del juego.
