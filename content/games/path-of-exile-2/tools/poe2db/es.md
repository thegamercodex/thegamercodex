---
title: "PoE2DB"
description: "Base de datos primaria de Path of Exile 2 con items, skills, monstruos, y mods extraídos directo de los archivos del juego."
quickTake: "Cuando una guía dice 'este mod tier puede salir hasta 90% increased damage', PoE2DB es donde verificas el dato. La fuente para todo lo que requiere precisión numérica."
---

## Qué es

PoE2DB es la versión PoE 2 del datamining tradicional de poedb.tw — un sitio que extrae directamente de los archivos del juego items, skills, gemas, monstruos, mods, ascendancies, y prácticamente cualquier dato estructurado. Mantiene tablas con tier ranges, weights, y interrelaciones entre componentes que el juego no expone in-game.

A diferencia de wikis editadas (que pueden estar desactualizadas o tener interpretaciones), PoE2DB refleja literalmente lo que dicen los game files. Si el juego cambió un mod en el último patch, PoE2DB lo refleja a las pocas horas — la latencia depende de cuándo el dataminer del proyecto procesa los nuevos archivos.

## Qué problema resuelve

PoE 2 no documenta el detalle granular de sus sistemas. Un mod en un item dice "increased damage" pero no muestra el tier ni el rango posible. Una skill dice "deals fire damage" pero no expone el coefficient exacto que escala con stats. Para players que quieren entender por qué algo funciona, esa opacidad es bloqueante.

PoE2DB resuelve esto exponiendo data primaria. Buscas cualquier mod y ves todos los tiers existentes, el level requirement de cada uno, y el weight (probabilidad relativa) en crafting. Buscas cualquier skill y ves los exact coefficients, las gemas que la pueden modificar, y los unique items que interactúan con ella.

## Diferenciación

Frente a poe2-wiki, PoE2DB es la versión raw — tablas extraídas, sin narrativa. La wiki agrega contexto, ejemplos y commentary; PoE2DB solo da el número. Workflow normal: poe2-wiki para entender qué es algo, PoE2DB para verificar el dato exacto.

Frente a Craft of Exile, PoE2DB no simula crafting — solo te da los inputs (mod weights, tier ranges) que CoE usa para sus simulaciones. Son herramientas de niveles distintos: PoE2DB la fuente, CoE el procesador.

## Para qué la usa la gente

**Verificar tier ranges de mods**: cuando una build guide dice "busca un item con T1 fire damage", PoE2DB te dice exactamente qué rango numérico cubre T1 y qué level requirement tiene.

**Estudiar skill mechanics**: para una skill dada, PoE2DB lista coefficients de daño, support gems compatibles, y modifiers que interactúan. Útil para theory-craft profundo.

**Investigar monsters específicos**: si vas a farmear un boss particular, PoE2DB tiene su HP, resistances, y mecánicas listadas (cuando el datamining las expone).

**Buscar uniques por mod**: ¿qué uniques existen con "increased life" o con tal mod específico? PoE2DB tiene búsqueda inversa por mod.

**Ver todas las variantes de un item**: para cada base type, PoE2DB lista qué mods pueden rollar, en qué tiers, y a qué levels. Útil para crafting planning.

## Para quién NO es esta herramienta

Si recién empiezas PoE 2, PoE2DB te abruma. Es data densa sin pulido didáctico — espera tablas con columnas crípticas y vocabulario asumido. La curva de utilidad sube cuando ya entiendes las mecánicas core; antes de eso, las wikis ofrecen mejor onboarding.

Si solo quieres "buenas builds para léveler", PoE2DB no te sirve. No tiene guides, no tiene rankings, no tiene opinión. Es un diccionario, no un curador.

## Cómo se usa en la práctica

1. Vas a `poe2db.tw/us/`. La home tiene navegación por categoría: Items, Skill Gems, Support Gems, Monsters, Maps, Ascendancies.
2. Para buscar mod específico: usas el search bar global. Resultados te llevan a páginas dedicadas con tier table, weight, level req.
3. Para investigar una skill: navegas Skill Gems → seleccionas → ves la página completa con damage coefficients, scaling stats, support compatibility.
4. Workflow típico: durante crafting o build planning, abres PoE2DB en pestaña paralela y vas verificando data específica que mencionan las guides.

## Limitaciones honestas

**Interfaz minimalista, casi cruda**. No hay diseño moderno ni UX optimizado. Es funcional pero estética old-school: tablas anchas, tipografía pequeña, navegación por categorías sin filters fancy.

**Solo en inglés y chino tradicional**. El idioma original del proyecto. Hay versiones por locale pero el chino tradicional es el más completo en algunos rincones.

**Cobertura post-patch puede tardar**. Cuando GGG lanza un patch, PoE2DB necesita procesar los nuevos archivos. Generalmente actualizan en horas, pero puede haber lag, especialmente para mecánicas nuevas que requieran contexto adicional.

**No interpreta**. PoE2DB te da el dato; tú tienes que entender qué significa en el contexto del juego. Si un mod tiene 5 tiers, el sitio no te dice cuál es "good enough" — solo lista los 5.

**Sin opinión editorial sobre balance**. No hay tier lists, no hay "este item es mejor que ese". Si quieres evaluación, vas a Maxroll o Mobalytics.

## Cómo empezar

No requiere registro ni descarga. Vas a `poe2db.tw/us/`. La primera vez exploras un item que conozcas para familiarizarte con cómo se presenta data — por ejemplo, buscas un unique conocido y lees cómo PoE2DB descompone sus mods.

Para integrarlo a tu workflow: lo abres cuando una guía menciona un dato y quieres verificarlo, cuando vas a craftear y necesitas saber qué mods pueden salir, o cuando theory-crafteas interacciones complejas. No es lectura diaria — es referencia consultiva.
