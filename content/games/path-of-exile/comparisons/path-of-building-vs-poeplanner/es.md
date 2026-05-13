---
title: Path of Building vs PoEPlanner — qué planner usar en PoE
description: Comparación entre los dos planners más usados de PoE. Profundidad matemática, planificación del atlas, sharing, instalación y los escenarios donde gana cada uno.
---

A primera vista parecen competidores directos: ambos te permiten armar un build y ver el passive tree. Pero apenas usás uno en serio, queda claro que cubren necesidades distintas. **Path of Building (PoB)** es un calculador de daño y planificador de builds desktop con profundidad de simulación que el resto de la comunidad usa como referencia. **PoEPlanner** es una web app rápida y shareable cuya fortaleza principal es la planificación del atlas tree, donde es la opción dominante. Esta comparación te ayuda a saber cuál usar cuando.

## Profundidad de cálculo y simulación

PoB es, por una distancia enorme, la herramienta más completa para calcular daño en PoE. Toma en cuenta:

- Skill gems, support gems, links y quality
- Gear individual con todos sus modifiers explícitos e implícitos
- Jewels y pasivos especiales (anointed nodes, cluster jewels, etc.)
- Auras, buffs, debuffs, charges, flasks, debuff stacks
- Resistencias del enemigo, armor del enemigo, niveles, area types
- Crit, accuracy, dot effects, ailment scaling, conversion chains

El motor de PoB es modelo del motor de daño real de PoE, mantenido por la comunidad con cada parche. Cuando un build dice "X millones de DPS sobre boss con flasks activas", el número viene de PoB. Cuando hay debate sobre si tal pasivo es mejor que cual otro para tal skill, la respuesta se valida abriendo PoB.

PoEPlanner no apunta a este nivel. Su passive tree es funcional para mockups, pero no calcula daño con la profundidad que PoB ofrece. Si estás minimizando entre dos clusters de pasivos para subir tu DPS un 4%, PoB es la única opción seria.

## Atlas tree planning

Acá la situación se invierte. **PoEPlanner es el estándar de facto para planificar el atlas tree** desde que GGG introdujo el sistema del Atlas Passive Tree en la liga 3.17. Su interfaz es limpia, las connection chains se ven a simple vista, y ofrece estrategias preconfiguradas (essence farming, harvest, breach, expedition, etc.) que podés cargar como punto de partida.

PoB tiene soporte de atlas tree, pero claramente no es su foco principal. La UI es menos clara, el discovery de strategies es más manual, y la comunidad cuando comparte un atlas tree casi siempre usa un link de PoEPlanner.

Si pasaste a la fase de endgame y estás puliendo tu atlas para una estrategia de farmeo específica, abrir PoEPlanner es el camino corto.

## Sharing y colaboración

PoEPlanner gana cómodo en este eje. Hacés tu build o tu atlas, le das al botón de share, y obtenés un URL público que cualquiera puede abrir en su browser. Sin instalar nada, sin importar nada. Es por eso que cuando ves builds compartidos en Discord casuales o en Reddit posts cortos, suelen venir como link de PoEPlanner.

PoB tiene un sistema de export/import basado en un código encodeado en base64 (típicamente alojado en pastebin). Es funcional, pero requiere que el otro:
1. Tenga PoB instalado
2. Sepa cómo importar (Import → paste código)
3. Esté en una máquina donde pueda instalar PoB

Para comunicación entre jugadores serios la fricción extra de PoB se acepta. Para mockups rápidos o discusiones casuales, el link de PoEPlanner gana siempre.

## Curva de aprendizaje e instalación

PoB requiere instalación. En Windows es un installer estándar; en Mac y Linux hay community forks oficiales que funcionan bien pero requieren más setup. El primer launch puede ser intimidante: la UI tiene docenas de paneles, opciones y configs. Es una herramienta poderosa que asume que sabés (o estás dispuesto a aprender) cómo funciona el motor de daño de PoE.

PoEPlanner es solo abrir el browser. La UI es más limpia, con menos opciones expuestas de entrada. Para un jugador casual que quiere "ver más o menos cómo se ve mi build", la barrera de entrada es nula.

Esto importa especialmente para nuevos jugadores. Decirle a alguien que recién empieza "abrí PoB" suele ser overwhelming. Decirle "andá a PoEPlanner.com" es accesible. Una vez que el jugador madura y empieza a pensar en optimizar daño en serio, naturalmente migra a PoB.

## Importar personaje real

PoB tiene una feature crítica que PoEPlanner no replica: **import directo desde tu cuenta de PoE**. Le das tu account name, elegís el character, y PoB chupa tu equipment, jewels, skill setup y pasives reales. En 30 segundos tenés tu personaje exacto cargado y podés empezar a simular cambios sobre lo que realmente tenés.

PoEPlanner no tiene este flujo. Si querés representar tu personaje en PoEPlanner, lo hacés a mano: click por click en el tree, gear pegado uno por uno, jewels manualmente. Para mockups está bien, pero para trabajar sobre tu build real es impracticable.

Para jugadores que quieren responder "¿qué pasa si cambio este anillo por aquel otro que vi en trade?" — el flujo es: import en PoB, swap del item, ver el delta de DPS. Esto es el corazón de la optimization loop en PoE y PoB es la única forma seria de hacerlo.

## En resumen

| Escenario | Mejor opción |
|---|---|
| Calcular DPS exacto | PoB |
| Planificar atlas tree | PoEPlanner |
| Compartir build rápido en Discord | PoEPlanner |
| Importar y ajustar tu personaje real | PoB |
| Acceso desde browser sin instalación | PoEPlanner |
| Simular bench crafts y gear potencial | PoB |
| Mockup casual de un tree | PoEPlanner |
| Optimización seria de un build endgame | PoB |

## Veredicto final

No son competidores directos: son complementarios. La mayoría de jugadores serios de PoE usan **ambas**. PoB es la calculadora pesada que vive corriendo cuando estás puliendo un build; PoEPlanner es la web rápida que abrís cuando querés compartir, cuando estás afuera de tu PC, o cuando estás planificando el atlas.

Si tuvieras que elegir solo una y recién empezás: **PoEPlanner**. Es accesible, web, y cubre el 80% de lo que querés ver visualmente en una build. Cuando empieces a obsesionarte con DPS exacto y optimización por puntos de pasivo, instalá PoB y va a convertirse en tu herramienta principal sin desplazar a PoEPlanner — son dos roles distintos en tu workflow.
