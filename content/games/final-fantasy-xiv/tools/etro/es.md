---
title: "Etro"
description: "Builder de Best-in-Slot para FFXIV con cálculo automático de melding óptimo de materia, comparación de stats por job y compartir builds vía link permanente."
quickTake: "Etro es el BiS planner que adoptó toda la comunidad de raid. Cuando sale un tier nuevo, los job leads de The Balance publican BiS sets como links de Etro y todos los siguen. Simple, gratis y mantenido por su creador Eltharyon con updates rápidos cada patch."
---

## Qué es

Etro (etro.gg) es un BiS planner web para FFXIV mantenido por Eltharyon. Lanzado durante Shadowbringers (2019), se volvió el estándar de facto para construir y compartir builds de gear cuando reemplazó a planners más viejos como Ariyala's.

El flujo: eliges tu job y nivel, asignas cada slot de gear (head, chest, hands, etc.), eliges el grade de food y potion, y Etro calcula automáticamente:

- **Stats finales** del build (Crit, DH, Det, SkS/SpS, etc.).
- **Melding óptimo de materia** para hitear el next breakpoint sin overcap.
- **Damage / sustain estimates** según el job.
- **GCD speed tier** y los breakpoints alcanzables.

Compartís el build con un permalink fijo. El party member abre el link y ve exactamente el mismo build, lo puede copiar o modificar.

Es gratis. No requiere login para ver builds, sí para crear y guardar los tuyos.

## Qué problema resuelve

En FFXIV el gear tiene múltiples sub-stats y los breakpoints de speed/Crit/Determination son específicos. Decidir qué materia meldear, qué food usar y qué gear pieces priorizar requiere cálculo. Hacerlo manualmente en una spreadsheet es viable pero tedioso.

Etro automatiza todo eso:

- Calcula breakpoints sin que tengas que abrir Akhmorning para fórmulas.
- Compara dos builds lado a lado y te dice cuál es objetivamente mejor.
- Permite compartir builds entre party members vía link sin screenshots.
- Se actualiza automáticamente cada patch nuevo: gear, materia tiers, food disponible.

Para raid Savage donde optimizar BiS suma 1-3% DPS, este nivel de cuidado es la diferencia entre clear consistente vs wipes en el enrage.

## Diferenciación vs Ariyala's Final Fantasy XIV Toolkit

Ariyala's fue el planner dominante hasta 2019. Etro lo reemplazó porque:

- UI más limpia y moderna.
- Melding automático (Ariyala's requería melding manual).
- Permalinks confiables que no se rompen entre patches.
- Updates más rápidos cada patch nuevo.

Ariyala's sigue existiendo y algunos lo prefieren por familiaridad. Pero todo lo que es contenido nuevo se publica en Etro. The Balance solo publica BiS sets como Etro links.

## Para qué la usa la gente

**Construir tu BiS pre-Savage**: 2 semanas antes de un tier nuevo, abres Etro, copias el BiS oficial del The Balance, y planificás tu farm path (qué Tomestone weapons, qué piezas Savage, qué crafted gear pre-raid).

**Comparar gear drops**: caés un accesorio Savage. ¿Es upgrade vs tu craft equivalente? Lo metés en Etro y compará stats.

**Validar tu melding antes de gastar materia**: Etro te dice el melding óptimo. Lo aplicás en game y evitás overcap.

**Planificar food/potion para Ultimate**: Ultimate requiere optimización extrema. Etro te ayuda a elegir food (Crit vs DH vs Det depending on the comp).

**Compartir build con tu static**: el raid leader publica BiS en Etro, todos clonan y ajustan a su gear actual.

## Para quién NO es esta herramienta

- **Casual players sin raid**: si juegas roulettes y MSQ, BiS optimization no te cambia nada. Cualquier gear ilvl-relevant funciona.
- **PvP players**: Etro es PvE. PvP usa séries Wolf-marks que no se planifican igual.
- **Crafters / gatherers**: Etro no maneja BiS de DoH/DoL. Para eso usas Teamcraft.
- **Quien quiere análisis dinámico (simulación de combat)**: Etro calcula stats estáticos. Para sims de combat reales (¿cuánto DPS hace este build?) necesitas xivgear.app o sims específicos por job que viven en The Balance.

## Cómo se usa en la práctica

1. Andá a etro.gg, opcionalmente creá cuenta.

2. **New Gearset** → elige job y nivel.

3. Asignás cada slot: weapon, head, body, hands, legs, feet, ear, neck, wrist, ring 1, ring 2.

4. Para cada pieza, Etro te muestra opciones según ilvl filter (ej: solo gear Savage actual, o mezcla con crafted).

5. Elegí food y tincture. Etro recalcula stats.

6. En **Materia**, clickeás **Solve Materia** — Etro calcula el melding óptimo automáticamente.

7. Guardás el set (requiere login). Compartís el link. Cualquiera lo puede abrir y clonar para ajustar.

## Limitaciones honestas

**No simula combat**: Etro te da stats; no te dice "este build hace X DPS". Para sims actual (que requieren simular la rotación del job) hay tools complementarias como xivgear.app o spreadsheets en The Balance.

**Melding solver puede ser conservador**: el optimal solver prioriza no overcappear; a veces el theorycraft moderno prefiere overcappear ligeramente para hitear cierto breakpoint. Ajustar manualmente si el job lead lo recomienda.

**No predice drops**: te dice "este BiS requiere X piezas Savage de fila 4", pero no calcula tu progresión por loot lotteries. Para eso usas un tracker manual.

**Materia tiers desactualizados al patch X.0**: cuando sale expansion nueva, los nuevos tiers de materia tardan días en aparecer correctamente. Suele estar fixed a la semana.

**No tiene mobile app**: la UI funciona en mobile pero es Web responsive, no nativa. Para edits en el celular es algo torpe.

## Cómo empezar

1. Andá a [etro.gg](https://etro.gg). Creá cuenta (sin login puedes ver builds pero no guardar).

2. **New Gearset**, elige tu job (ej: Black Mage 100).

3. En **Equipment**, llenás cada slot con piezas a tu alcance. Para BiS oficial, **import** un link de Etro que te pase tu job lead (el BiS de The Balance).

4. En **Food and Tincture**, elige lo más alto de tu tier.

5. En **Materia**, deja que el solver auto-melde.

6. Verificá los stats vs tu target (típicamente Crit > DH > Det > SpS para casters, varía por job).

7. Guardá el set. Compartí el link con tu static o ajusta según tus drops actuales.
