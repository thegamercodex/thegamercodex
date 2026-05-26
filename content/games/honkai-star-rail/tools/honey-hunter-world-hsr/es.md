---
title: "Honey Hunter World (Star Rail)"
description: "Base de datos de referencia para Honkai: Star Rail con stats, scaling y data cruda extraída directamente de los archivos del juego."
quickTake: "Para data primaria del juego (stats, valores, scaling), Honey es la fuente más rápida y completa. UI densa pero la información cruda no la tiene nadie más así."
---

## Qué es

Honey Hunter World es una base de datos web que extrae información directa de los archivos del juego de varios títulos de HoYoverse, incluyendo Honkai: Star Rail (sección `starrail.honeyhunterworld.com`). El sitio nació como referencia para Genshin Impact (donde se conoce como "Honey Impact") y se expandió a HSR poco después de su lanzamiento global.

A diferencia de wikis comunitarias, Honey no edita ni interpreta la data: muestra los valores tal como están en los archivos del juego. Esto incluye stats por nivel de cada personaje, multiplicadores de skill, passives de light cones, set bonuses de relics, drop rates de enemigos, locations de items, datos de achievements y mucho más.

La interfaz es funcional pero densa: tablas, dropdowns, valores numéricos sin mucho adorno. No es bonito, pero es completo y rápido de actualizar cuando salen nuevos parches.

## Qué problema resuelve

Cuando necesitas saber el multiplicador exacto del skill ascendido de un personaje, el bonus de 4 piezas de un relic set específico, los stats base de un enemigo en MoC, o cuánto experience da una material específica, las wikis narrativas y los videos no te lo dicen. Te dan la idea general, pero no el número crudo.

Honey resuelve esto exponiendo la data raw del juego en formato consultable. Theorycrafters la usan para construir calculators y damage formulas. Jugadores de endgame la usan para verificar si una skill scaling justifica invertir traces. Content creators la usan como fuente cuando publican guías de personajes.

También resuelve el problema de la velocidad de actualización: cuando sale un parche nuevo, Honey suele tener los datos del beta server semanas antes del release público, y la data live se actualiza pocas horas después del patch deploy.

## Diferenciación

Honey Hunter no compite directamente con otras tools de HSR, sino que las complementa. Vale la pena entender cómo se posiciona vs los recursos más cercanos:

**vs Fandom Wiki**: Fandom es narrativa, editada por comunidad, mejor para lore, quests, achievements con contexto, y dialogue archives. Honey es referencia cruda: stats, multiplicadores, valores. Si necesitas saber "cuánto pega esta skill al nivel 12", Honey. Si necesitas "qué pasa en el capítulo 2 de la quest de Belobog", Fandom.

**vs Prydwen**: Prydwen es editorial, con tier lists, build recommendations y guías opinadas. Honey no opina, solo expone data. Prydwen te dice "usa estas relics"; Honey te dice "este set da X% de bonus bajo Y condición".

## Para qué la usa la gente

**Verificar stats y scaling exactos antes de invertir traces**: subir un trace cuesta credits, materials y books. Antes de comprometer recursos, mucha gente revisa en Honey si el bonus realmente vale la pena.

**Construir spreadsheets de damage calculation**: theorycrafters serios extraen multiplicadores de Honey para sus calculators personales. La data está en formato consultable y consistente, ideal para automatizar.

**Comparar set bonuses de relics entre opciones**: cuando dudas entre dos sets, Honey te da los textos exactos y los valores numéricos lado a lado, sin la interpretación que pondría un guía.

**Investigar enemigos y resistances en endgame**: para builds optimizadas contra MoC, Pure Fiction o Apocalyptic Shadow, conocer las resistances exactas del boss objetivo cambia la composición. Honey lista esos valores por enemigo.

**Reference para content creators**: quienes hacen videos o guías escritas usan Honey como source para no inventar números. Ahorra horas de testing in-game.

## Para quién NO es esta herramienta

Honey Hunter no es para jugadores casuales que solo quieren saber "qué personaje rolear" o "qué team armar". Para eso existen Prydwen y guías editoriales. Razones específicas:

**La UI es intimidante si no sabes qué buscas**. Las tablas de stats por nivel, los multiplicadores en porcentaje, los códigos de skill type, todo asume que sabes leerlo. Sin contexto, los números son ruido.

**No hay recommendations ni opiniones**. Honey te muestra que el bonus de un set es "20% de daño extra si tienes X stack", pero no te dice si vale la pena vs otra opción. Esa decisión la tomas tú con la data.

**Mucha información que jugadores normales no necesitan**. Drop rates de subzonas, datos de NPCs secundarios, item internals, ID numbers. Útil para datamining, ruido para uso normal.

Si solo quieres jugar y disfrutar HSR, Honey es overkill. Si optimizas seriamente o creas contenido, es indispensable.

## Cómo se usa en la práctica

Honey funciona como base de datos navegable, sin login ni registro:

1. Abre `starrail.honeyhunterworld.com` en cualquier navegador.

2. Usa el menú lateral para elegir categoría: Characters, Light Cones, Relics, Enemies, Materials, Achievements, etc.

3. Click en un personaje te lleva a su página con todas las skills, traces, eidolons, stats por nivel y materials de ascensión.

4. Para comparar dos personajes o dos light cones, abre cada uno en pestañas separadas (el sitio no tiene comparador built-in).

5. Para data de patches futuros, busca el indicador "beta" o usa el toggle de version si está disponible.

Flujos típicos:

**Verificar un skill multiplier antes de subir traces**:

1. Buscas el personaje en Characters.
2. Vas a la sección de Traces o Skills.
3. Comparas el valor del skill al nivel actual vs nivel target.
4. Decides si la inversión justifica el resultado.

**Investigar un relic set nuevo**:

1. Vas a Relics y filtras por planar o cavern.
2. Abres el set que te interesa.
3. Lees los bonuses de 2pc y 4pc exactos.
4. Cruzas con la data del personaje en el que lo quieres usar.

## Limitaciones honestas

**La UI es del 2015**. Tablas densas, navegación poco intuitiva en mobile, búsqueda básica. Funcional pero no agradable.

**Solo está en inglés**. Los nombres de personajes, skills y items están en inglés. Para usuarios hispanos que juegan en español, hay que cruzar nombres mentalmente.

**Ads agresivos en algunas páginas**. El sitio se sostiene con publicidad y dependiendo del adblocker que uses puede haber pop-ups o banners intrusivos.

**No siempre tiene contexto editorial**. La data está, pero saber cómo interpretarla a veces requiere consultar otra fuente (Prydwen, KQM, Reddit). Honey por sí solo te da el qué, no el por qué.

**Updates de beta no siempre son perfectas**. La data del beta server cambia entre versiones beta y release final. Lo que ves en Honey antes de un parche puede ajustarse al deploy.

**Estructura del sitio cambia ocasionalmente**. URLs internas y nombres de secciones se reorganizan de vez en cuando, lo que rompe bookmarks viejos.

**No tiene calculator integrado**. A diferencia de tools como Prydwen o calculators dedicados, Honey solo expone datos; no hace cálculos por ti.

## Cómo empezar

No requiere instalación ni cuenta. Visita `starrail.honeyhunterworld.com` desde cualquier navegador, en desktop preferentemente porque la UI no está bien optimizada para mobile.

Para tu primera visita, sugerencia: abre la página de un personaje que conozcas bien (uno que ya tengas y hayas leveleado). Mira cómo se presenta la información: skills, traces, eidolons, stats por nivel. Una vez te familiarices con el formato, la navegación al resto del sitio es más fluida.

Combinación recomendada: usa Honey como fuente de data cruda y Prydwen o un guía editorial para la interpretación. Honey responde "cuánto", el guía responde "vale la pena".

Para uso recurrente, considera marcar bookmarks de las páginas que más consultas (tu main, sus relic sets favoritos, los enemigos del MoC actual). Ahorra navegación cada vez que vuelvas.
