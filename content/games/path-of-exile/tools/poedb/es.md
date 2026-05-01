---
title: "PoEDB"
description: "Base de datos completa y técnica de Path of Exile, con información datamined de items, monstruos, modificadores y mecánicas."
quickTake: "Cuando necesitas datos exactos del juego — el modificador exacto de un item, las resistencias de un boss, qué dropea un monstruo — PoEDB los tiene todos. Es la enciclopedia técnica de PoE."
---

## Qué es

PoEDB es una base de datos web completa de Path of Exile que extrae información directamente del cliente del juego mediante datamining automático. Contiene prácticamente todo lo que existe en PoE: items, monstruos, modificadores, gemas, pasivas, mecánicas de league, áreas, NPCs, quests, y mucho más.

Es mantenida por la comunidad taiwanesa de PoE y existe en versiones en chino tradicional e inglés. A pesar del dominio `.tw`, es uno de los recursos más confiables y respetados del ecosistema, usado por theorycrafters, creadores de guías, y desarrolladores de otras herramientas como referencia primaria.

## Qué problema resuelve

Path of Exile no documenta oficialmente la mayoría de su sistema. GGG publica patch notes con los cambios principales, pero los detalles exactos — los pesos de cada modificador, las stats precisas de cada monstruo, los drops específicos de cada zona, los modificadores que pueden aparecer en cada base de item — quedan opacos para el jugador.

PoEDB resuelve esto exponiendo prácticamente toda la información interna del juego de forma navegable. Cuando necesitas saber:

¿Qué modificadores puede tener este item específico y a qué tiers?

¿Qué resistencias y vida exacta tiene este boss en este nivel?

¿Qué monstruos pueden dropear este item único?

¿En qué áreas spawnean estos monstruos específicos?

¿Cómo cambió este modificador entre el parche pasado y el actual?

PoEDB tiene esa información disponible en segundos.

## Para qué la usa la gente

**Theorycrafting de builds**: cuando diseñas una build avanzada y necesitas datos exactos sobre stats de gemas, modificadores de items, o efectos de pasivas, PoEDB te da los números precisos. Path of Building tiene los cálculos pero PoEDB tiene la fuente original.

**Investigación de items**: estás considerando comprar un item único raro y quieres saber qué modificadores puede tener exactamente, en qué slots aparecen, y cómo se comparan los rolls posibles. PoEDB te muestra el item completo con sus rangos de roll.

**Preparación para bosses**: antes de pelear un boss específico (especialmente endgame bosses como Shaper, Sirus, Maven, Uber bosses), consultar PoEDB te muestra sus stats exactas, ataques, debilidades, y mecánicas. Saber que un boss tiene 80% de resistencia a fuego cambia cómo te preparas.

**Identificar fuentes de drop**: ¿quieres farmear un item específico? PoEDB te dice qué monstruos lo dropean, en qué áreas spawnean esos monstruos, y a veces incluso las probabilidades de drop si están datamined.

**Verificar cambios entre parches**: cuando GGG balancea cosas (sube/baja números, agrega/quita modificadores), PoEDB refleja esos cambios al instante. Comparar la versión actual con histórica te muestra qué cambió exactamente.

**Entender mecánicas de league nuevas**: cuando sale una league con sistemas nuevos (Sanctum, Affliction, Settlers, etc.), PoEDB suele tener los datos completos en horas. Mientras la comunidad descubre la liga jugando, PoEDB ya tiene los modificadores, items y mecánicas indexadas.

## Cómo se usa en la práctica

PoEDB tiene una barra de búsqueda en la parte superior. Buscas lo que quieras saber: "Mageblood", "Maven", "Frenzy Charge", "Cluster Jewel". Te lleva a la página específica con toda la información.

Cada tipo de entidad tiene su propio formato de página:

**Items**: nombre, ícono, nivel base, modificadores posibles con sus tiers y rangos, fuentes de adquisición, historial de cambios entre parches.

**Monstruos**: stats completas (vida, resistencias, daño), spawn locations, drops conocidos, ataques específicos.

**Modificadores**: items en los que pueden aparecer, weights por método de crafteo, tiers, ilvl requerido.

**Áreas**: monstruos que spawnean ahí, tilesets, layout info, league mechanics asociadas.

**Gemas y habilidades**: stats por nivel, requisitos, modificadores de quality, gemas relacionadas.

La navegación entre páginas relacionadas es fluida — cada referencia es un link, así que pasar de un item a un monstruo que lo dropea, a la zona donde spawnea ese monstruo, es directo.

## Limitaciones honestas

**No es para principiantes**. La información es técnica y asume vocabulario específico de PoE. Si no sabes qué es un mod, una weight, o una tier, las páginas se sienten como información dispersa sin contexto.

**No tiene guías ni explicaciones narrativas**. PoEDB te da los datos, no te dice cómo usarlos. Es la diferencia con la PoE Wiki que sí tiene contenido editorial. Para entender "qué hacer con esta información", necesitas conocimiento previo o consultar otras fuentes.

**La interfaz es funcional pero no bonita**. Tablas densas, mucha información en pantalla, diseño visual mínimo. Es claramente una herramienta hecha para utilidad, no para experiencia visual.

**Algunos datos requieren interpretación técnica**. Modificadores con tags, weights numéricos, formulas de daño — la información está completa pero entender cómo aplicarla requiere conocimiento del sistema. PoEDB es un manual técnico, no un tutorial.

**Solo idiomas inglés y chino tradicional**. No hay localización a otros idiomas, lo cual es barrera para jugadores hispanohablantes que no manejen términos técnicos en inglés.

**El dominio `.tw` puede generar dudas**. Es un proyecto legítimo y reconocido, pero algunos usuarios desconfían inicialmente del TLD. Vale la pena saber que es seguro y confiable.

## Cómo empezar

No requiere instalación ni cuenta. Vas a `poedb.tw/us/` desde cualquier navegador.

Para tu primera vez, lo más útil es buscar algo concreto que estés intentando entender. ¿Estás considerando un item único? Búscalo. ¿Vas a pelear contra Sirus? Busca su página. ¿Quieres entender un modificador específico? Búscalo. La tool es mucho más útil con un objetivo concreto que explorando casualmente.

Si llegas porque alguien te recomendó "consulta PoEDB" para algo específico, sigue esa recomendación con foco. La cantidad de información puede abrumar si solo navegas sin propósito.

A medida que vas usando PoEDB para resolver dudas concretas, gradualmente aprendes a navegar el formato, identificar qué pestañas tienen qué información, y construyes un mapa mental de qué puedes encontrar dónde. Es de las tools donde la familiaridad se construye con uso repetido a lo largo de leagues.