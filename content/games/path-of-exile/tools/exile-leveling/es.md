---
title: "Exile Leveling"
description: "Guía web interactiva de leveleo para Path of Exile 1 con tracker de progreso paso a paso e integración con Path of Building."
quickTake: "Si todavía no memorizaste la campaña de PoE 1, Exile Leveling te marca cada paso — qué quest hacer, qué loot priorizar, qué nodos del árbol tomar — sin tener que pausar para mirar guías. Cero hype: es funcional, gratis y open source."
---

## Qué es

Exile Leveling es una herramienta web open source desarrollada por HeartofPhos que te guía a través de la campaña de Path of Exile 1 con instrucciones paso a paso, tracker de progreso, y posibilidad de cargar tu build de Path of Building para que la guía adapte recomendaciones a tu plan específico.

Vive en `heartofphos.github.io/exile-leveling/`, no requiere instalación, todo corre in-browser. Código abierto en GitHub bajo MIT, mantenido con contribuciones community.

## Qué problema resuelve

PoE 1 tiene 10 actos de campaña que quieres ejecutar lo más rápido posible para llegar al endgame. Saber qué quests dan recompensas permanentes (puntos de pasiva, charges de flask, libro de skills), cuáles puedes saltearte sin perder valor, en qué orden tomar passive nodes, y qué gear priorizar te ahorra horas por personaje — especialmente cuando haces varios builds en una league.

Esa información existe en guías largas escritas (Maxroll, video walkthroughs), pero leerlas en paralelo al juego rompe el flow. Exile Leveling colapsa eso a un sidebar interactivo: marcas cada step como done, el siguiente aparece, sin tener que buscar dónde estabas en el texto.

## Diferenciación

Frente a las leveling guides de Maxroll (formato escrito largo): Exile Leveling es interactivo. Maxroll te da el contexto profundo y razonamiento; Exile Leveling te da el next step. Workflow combinado: leer Maxroll una vez para entender, usar Exile Leveling durante el run para ejecutar.

Frente a overlays in-game (algunos AHK macros como PoE-Leveling-Guide): Exile Leveling es web-only. No interfiere con el cliente del juego. Trade-off: no aparece sobre el juego, tienes que tener la pestaña visible en monitor secundario o alt-tabbear.

## Para qué la usa la gente

**Seguir paso a paso una campaña**: la guía te lista por act qué quests hacer, en qué orden, qué premiar. Marcas done, avanzas.

**Cargar tu PoB y ver passive tree progresivo**: Importas tu build de Path of Building y la guía te muestra qué nodo tomar a cada level. Cero ambigüedad de "leveling tree".

**Tracking de skill points y permanent rewards**: alertas explícitas para quests que dan skill points, charges de flask, talent points. No te pierdes ninguna.

**Custom guides**: la herramienta soporta guías custom escritas por la community o por el propio usuario. Se pueden compartir y cargarlas con un import.

**Re-runs eficientes**: para el segundo o tercer personaje en una league, Exile Leveling permite skip-ear el contenido didáctico y ir directo a la lista de pasos críticos.

## Para quién NO es esta herramienta

Si es tu primera vez jugando PoE 1, conviene jugar la campaña sin guía la primera vez para descubrir el juego naturalmente. Exile Leveling es para optimization, no para discovery.

Si juegas casual y la velocidad de leveleo no te importa, no necesitas una herramienta de leveleo. La campaña es jugable sin guías.

Si quieres overlay nativo sobre el cliente del juego, Exile Leveling no lo es. Para overlay full hay otras opciones (algunas con AHK), aunque ninguna tan pulida como Exile Leveling lo es como web app.

Si juegas Path of Exile 2, esta tool todavía no cubre PoE 2 con la profundidad que tiene en PoE 1. Para PoE 2 conviene mirar otras opciones (ver el catálogo de PoE 2 en este codex).

## Cómo se usa en la práctica

1. Vas a `heartofphos.github.io/exile-leveling/`. Eliges la guía oficial de PoE 1 o cargas una guía custom.
2. (Opcional) Cargas tu build de PoB usando "Import" — pegas el código export. La guía adapta recomendaciones de passive tree.
3. Empiezas Act 1 in-game. Mantienes la pestaña visible en monitor secundario o alt-tab para checks.
4. A medida que completas steps (matar boss, llegar a town, hablar con NPC), marcas como done. La guía te muestra el siguiente.
5. Custom: puedes ajustar qué optional content cubrir (todos los side quests vs solo critical path) según tu velocidad objetivo.

## Limitaciones honestas

**Solo en inglés**. Sin localización al español. Vocabulario simple comparado con tools tipo PoB, pero igual barrera para non-English readers.

**No tiene voice ni video**. Es texto + checkboxes. Si prefieres audio guides o videos para leveling, esto no te da eso.

**Sin overlay nativo**. Como dijimos, vivir en pestaña web requiere monitor secundario o alt-tab. Para gente con un solo monitor, fricción.

**Updates dependen del autor y contribuyentes**. HeartofPhos lo mantiene activo, pero es proyecto de un dev + comunidad. Después de un patch grande, puede haber lag para updates.

**Cobertura de PoE 2 todavía limitada**. Si esperabas usarla para PoE 2, la madurez está concentrada en PoE 1. La cobertura para PoE 2 es experimental por ahora.

## Cómo empezar

No requiere registro. Vas a `heartofphos.github.io/exile-leveling/`. La primera vez exploras la guía oficial sin importar nada — te haces idea del flow.

Para uso productivo: importas tu PoB build antes de empezar a levelear. Eso permite que las recomendaciones de tree y gear sean coherentes con tu plan endgame, no genéricas.

Es opcional: muchos players prefieren memorizar la campaña tras varios runs y dejar de usar tools de leveleo. Exile Leveling es más útil en los primeros 1-2 personajes de una league; después se vuelve marginal.
