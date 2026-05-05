---
title: "Exile Leveling"
description: "Guía web interactiva de leveling para Path of Exile 1 y 2 con tracker de progreso paso a paso e integración con Path of Building."
quickTake: "Si todavía no memorizaste la campaña de PoE 2, Exile Leveling te marca cada paso — qué quest hacer, qué loot priorizar, qué nodos del árbol tomar — sin tener que pausar para mirar guías. Cero hype: es funcional, gratis y open source."
---

## Qué es

Exile Leveling es una herramienta web open source desarrollada por HeartofPhos que te guía a través de la campaña de Path of Exile 1 y 2 con instrucciones paso a paso, tracker de progreso, y posibilidad de cargar tu build de PoB para que la guía adapte recomendaciones a tu plan específico.

Vive en `heartofphos.github.io/exile-leveling/`, no requiere instalación, todo runs in-browser. Código abierto en GitHub bajo MIT, mantenido por la comunidad con contribuciones regulares.

## Qué problema resuelve

PoE 2 tiene 4 actos + interludes. La primera vez es exploración pura; los siguientes runs querés eficiencia. Saber qué quests dan permanent rewards (skill points, life flask charges), cuáles podés saltearte sin perder valor, qué hidden caches existen, y en qué orden tomar pasive nodes te ahorra horas por personaje.

Esa información existe en guías escritas largas (Maxroll, video walkthroughs), pero leerlas en paralelo al juego rompe el flow. Exile Leveling colapsa eso a un sidebar interactivo: marcás cada step como done, el siguiente aparece, sin tener que buscar dónde estabas en el texto.

## Diferenciación

Frente a Maxroll's leveling guide (formato escrito largo): Exile Leveling es interactivo. Maxroll te da el contexto profundo y razonamiento; Exile Leveling te da el next step. Workflow combinado: leer Maxroll una vez para entender, usar Exile Leveling durante el run para ejecutar.

Frente a overlays in-game (algunos AHK macros como PoE-Leveling-Guide): Exile Leveling es web-only. No interfiere con el cliente del juego. Trade-off: no aparece sobre el juego, tenés que tener la pestaña visible en monitor secundario o alt-tabbear.

## Para qué la usa la gente

**Seguir paso a paso una campaña**: la guía te lista por act qué quests hacer, en qué orden, qué premiar. Marcás done, avanzás.

**Cargar tu PoB y ver passive tree progresivo**: importás tu build de Path of Building y la guía te muestra qué nodo tomar a cada level. Cero ambigüedad de "leveling tree".

**Tracking de skill points y permanent rewards**: alertas explícitas para quests que dan skill points, charges de flask, talent points. No te perdés ninguna.

**Custom guides**: la herramienta soporta guides custom escritas por la community o por el propio usuario. Se pueden compartir guías y cargarlas con un import.

**Re-runs eficientes**: para el segundo o tercer personaje en una league, Exile Leveling permite skip-ear el contenido didáctico y ir directo a la lista de pasos críticos.

## Para quién NO es esta herramienta

Si es tu primera vez jugando PoE 2, conviene jugar la campaña sin guía la primera vez para descubrir el juego naturalmente. Exile Leveling es para optimization, no para descubrimiento.

Si jugás casual y la velocidad de leveling no te importa, no necesités una herramienta de leveling. La campaña diseñada por GGG es jugable sin guides.

Si querés overlay nativo sobre el cliente del juego, Exile Leveling no lo es. Para overlay full hay otras tools (algunas con AHK), aunque ninguna tan pulida en PoE 2 como Exile Leveling lo es como web app.

## Cómo se usa en la práctica

1. Vas a `heartofphos.github.io/exile-leveling/`. Eligís PoE 2 si la opción está disponible (o cargás guía custom).
2. (Opcional) Cargás tu build de PoB usando "Import" — pegás el código export. La guía adapta recomendaciones de passive tree.
3. Empezás Act 1 in-game. Mantenés la pestaña visible en monitor secundario o alt-tab para checks.
4. A medida que completás steps (matar boss, llegar a town, hablar con NPC), marcás como done. La guía te muestra el siguiente.
5. Custom: podés ajustar qué optional content cubrir (todos los side quests vs solo critical path) según tu velocidad objetivo.

## Limitaciones honestas

**Solo en inglés**. Sin localización al español. Vocabulario simple comparado con tools tipo PoB, pero igual barrera para non-English readers.

**Cobertura PoE 2 menor que PoE 1**. Como PoE 1 lleva años con leveling tools, Exile Leveling tiene muchas guides community-contributed. PoE 2 está más en construcción — la guide oficial es buena pero el ecosistema community es más nuevo.

**Updates dependen del autor y contribuyentes**. HeartofPhos lo mantiene activo, pero es proyecto de un dev + comunidad. Después de un patch grande de PoE 2, puede haber lag para updates.

**No tiene voice ni video**. Es texto + checkboxes. Si preferís audio guides o videos para leveling, esto no te da eso.

**Sin overlay nativo**. Como dijimos, vivir en pestaña web requiere monitor secundario o alt-tab. Para gente con un solo monitor, fricción.

## Cómo empezar

No requiere registro. Vas a `heartofphos.github.io/exile-leveling/`. La primera vez explorás la guía oficial sin importar nada — te hacés idea del flow.

Para uso productivo: importás tu PoB build antes de empezar a levelear. Eso permite que las recomendaciones de tree y gear sean coherentes con tu plan endgame, no genéricas.

Es opcional: muchos players prefieren memorizar la campaña tras 2-3 runs y dejar de usar tools de leveling. Exile Leveling es más útil en los primeros 1-2 personajes; después se vuelve marginal.
