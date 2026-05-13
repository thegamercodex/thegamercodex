---
title: PoE Wiki vs PoEDB — qué usar para consultar información de PoE
description: Comparación entre las dos referencias principales de Path of Exile. Cuándo quieres artículos editoriales y cuándo necesitas data dump cruda.
---

Cualquiera que juegue PoE más de un par de horas eventualmente termina abriendo una de estas dos. **PoE Wiki** es la enciclopedia comunitaria, redactada como artículos legibles con contexto y ejemplos. **PoEDB** es una base de datos datamineada del cliente del juego, llena de tablas, números crudos y exactitud técnica que la wiki no apunta a tener. Saber cuál usar te ahorra tiempo, y muy seguido la respuesta correcta es "ambas".

## Tipo de contenido: artículos editoriales vs data dump

La wiki está escrita para humanos. Cada artículo de mecánica (digamos, "Shock") empieza explicando qué es, cómo se aplica, fórmulas relevantes, edge cases, y se complementa con tablas y enlaces internos. Los artículos de ítems incluyen historia (cuándo se agregó la liga, cómo era antes), uso en builds, y trivia. Los de NPCs incluyen quotes, contexto narrativo y arte. Es la herramienta que quieres cuando estás *aprendiendo* algo de cero.

PoEDB asume que ya sabes qué buscas. Si entras a la página de "Shock" en PoEDB, no encuentras un artículo: encuentras tablas de mods que aplican shock, su tier, su rango numérico, en qué bases aparecen y a qué item levels. Es denso, técnico y orientado a referenciar datos rápido, no a enseñar.

Esto define el uso: **wiki cuando preguntas "cómo funciona X", PoEDB cuando preguntas "cuáles son los rangos exactos de Y"**.

## Profundidad y actualización

PoEDB es **datamined directamente del cliente** después de cada parche. Esto significa:

- Tiene los stats exactos de cada monstruo (life, resistances, action speed, AI behavior).
- Tiene todos los mods con sus tiers, weights y level requirements, incluso los que el juego no expone fácilmente.
- Cuando GGG agrega un ítem nuevo o cambia un drop table, PoEDB lo refleja al día siguiente (o el mismo día).
- Cubre datos que la wiki no tiene capacidad de mantener manualmente: pesos relativos de mods, todas las bases con sus implícitos, drop tables completos.

La wiki es **mantenida manualmente por la comunidad**. Tiene cobertura excelente pero el lag respecto a parches puede ser de días o semanas, especialmente para datos técnicos. Su superpower son los artículos curados — alguien tomó el tiempo de explicar el sistema completo, no solo listar datos.

Para data hunting puro, PoEDB es la fuente. Para entender el contexto de esa data, la wiki lo da.

## Cuándo necesitas cada una

**Wiki:**
- Aprender una mecánica desde cero (ascendancies, ailments, charges, conversion, fortify).
- Leer lore, quotes, historia narrativa.
- Resolver dudas que se expresan en lenguaje natural ("¿cómo se calcula el aoe de mi skill?").
- Build research general — qué hace cada skill, sinergias conocidas, casos de uso.
- Patch notes y changelogs históricos.

**PoEDB:**
- Crafting: ¿qué tiers de "+life" existen en helmets y cuál es su pool?
- Targeted farming: ¿qué dropea el boss Y? ¿En qué área aparece la monstruo X?
- Datos exactos de monstruos: HP de un T17 boss, AI flags, resistance values.
- Item base stats: implícitos exactos, requirements, dropable areas.
- Currency outcomes: probabilidades de orb de alteración por tier.

## Idiomas y comunidad

La wiki está en inglés con traducciones limitadas a otros idiomas. Tiene mucha actividad editorial, discusiones de talk pages, y aceptación de edits comunitarios. Es open source y vive bajo el dominio `poewiki.net` (sucesora de la wiki de Fandom, migrada hace años después de drama con Fandom). Está hosteada con apoyo de GGG, lo que le da estabilidad de largo plazo.

PoEDB también está en inglés con soporte adicional para chino tradicional (zh-tw) — refleja sus orígenes en la comunidad asiática de PoE. No es open source y la sostiene un equipo más pequeño, pero su data quality es excepcional gracias al pipeline de datamining automático.

Para hispanohablantes ninguna de las dos ofrece localización completa, pero ambas son lo suficientemente claras visualmente que el idioma no es una barrera para datos técnicos. Para lore y artículos largos de wiki, el inglés sí pesa más.

## SEO y descubrimiento

Para queries naturales del estilo "poe how does shock work" o "poe what is the lab", **la wiki suele rankear primero en Google**. Esto la convierte en el punto de entrada default para preguntas conceptuales.

PoEDB rankea fuerte cuando la query incluye un nombre específico de ítem, mod, o mecánica datamineada — "poe Hyrri's Truth" o "poe T17 boss life". Los usuarios técnicos suelen ir directo al sitio.

Tip práctico: si Google te tira primero la wiki y la respuesta es vaga, agregar `site:poedb.tw` a la query suele dar lo que necesitas cuando lo que buscas es un número exacto.

## En resumen

| Caso | Mejor opción |
|---|---|
| Aprender una mecánica nueva | Wiki |
| Tiers de mods en una base | PoEDB |
| Lore y narrative | Wiki |
| Stats exactos de un boss | PoEDB |
| Patch notes históricos | Wiki |
| Drop tables y bestiary | PoEDB |
| Build research general | Wiki |
| Crafting con números exactos | PoEDB |
| Quick reference durante el juego | Wiki (por SEO) |
| Análisis profundo de datos del cliente | PoEDB |

## Veredicto final

Como con muchas comparaciones en PoE: **no son competidores, son complementos**. Cualquier jugador serio termina usando las dos rutinariamente. La diferencia es cuándo abrir cada una:

- Si tu pregunta empieza con "cómo funciona" o "qué significa" → **wiki**.
- Si tu pregunta empieza con "cuál es el valor exacto de" o "qué dropea" → **PoEDB**.

Si recién empiezas, haz bookmark de la wiki. Es la mejor herramienta de onboarding. PoEDB la vas a descubrir naturalmente cuando empieces a crafting o a target farming en endgame, y a partir de ahí te vas a alternar entre las dos sin pensarlo.
