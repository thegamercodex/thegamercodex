---
title: Path of Building vs PoEPlanner — qué planner usar en PoE 2
description: Comparación entre los dos planners de PoE 2 más usados. Profundidad matemática, planificación del atlas, sharing, madurez del soporte y los casos donde gana cada uno.
---

PoE 2 todavía está consolidando su ecosistema de tools, pero el espacio de build planning ya tiene dos opciones claras: **Path of Building Community para PoE 2** (PoB 2), un planificador desktop community-driven con foco en cálculo de daño exacto, y **PoEPlanner**, una web app con soporte dedicado para PoE 2 que prioriza accesibilidad y sharing. Cubren necesidades parcialmente distintas, y entender cuándo abrir cada una vale los 5 minutos de esta lectura.

## Profundidad de cálculo y simulación

PoB 2 hereda la filosofía del proyecto original: modelar el motor de daño del juego con la mayor fidelidad posible. Eso significa simular skill gems uncut con sus support gems swappables, calcular interacciones de stats sobre gear individual, considerar auras, charges, ailments, conversion chains y todas las mecánicas que el motor del juego implementa. Cuando un build de PoE 2 publica "X millones de DPS contra un boss T4", el número casi siempre viene de PoB 2.

PoEPlanner no apunta a este nivel. Su passive tree es funcional y útil para mockup visual, pero no calcula daño con la profundidad que la comunidad espera para optimizar builds. Si estás minimizando puntos de pasivo o evaluando dos clusters competidores para subir un 5% tu damage, PoB 2 es la única opción seria.

Hay una caveat importante: **PoB 2 todavía está madurando**. La fork community se mantiene activamente pero algunas mecánicas de PoE 2 se modelan con menos precisión que otras, especialmente las introducidas en parches recientes. En los primeros parches grandes la comunidad suele esperar un día o dos a que PoB 2 incorpore los cambios. Esto va a mejorar con el tiempo a medida que el proyecto madura.

## Atlas tree planning en PoE 2

El atlas tree de PoE 2 tiene una estructura más simple que la de ARPGs comparables, con pocos nodos especializados al lanzamiento, y todavía está en evolución según las decisiones de GGG. **PoEPlanner** es la herramienta dominante para planear el atlas en PoE 2: la UI es clara, las conexiones se ven a simple vista y agrega strategies prefabricadas a medida que la comunidad las descubre.

PoB 2 soporta atlas pero claramente no es su foco. La comunidad cuando comparte una atlas strategy para PoE 2 lo hace con un link de PoEPlanner, no con un export de PoB.

Si entraste a endgame y estás puliendo qué nodos farmear, abrir PoEPlanner es el camino corto.

## Sharing y colaboración

PoEPlanner gana este eje cómodamente. Build o atlas listo, click en share, URL público que cualquiera abre en su browser. Es la herramienta default cuando ves builds en Discord casuales o threads cortos en Reddit.

PoB 2 funciona con un sistema de export a código (típicamente pegado en pastebin) que el receptor importa en su instalación. Funcional pero con fricción adicional: el otro necesita tener PoB 2 instalado, saber importar, y estar en una máquina donde pueda correr el cliente. Para discusiones entre jugadores serios la fricción se acepta; para mockups rápidos PoEPlanner gana siempre.

## Importar personaje real

PoB 2 tiene la feature que PoEPlanner no replica: **import directo desde tu cuenta de PoE 2**. Le das account name + character, PoB 2 chupa tu equipment, gems, jewels y pasivos. En 30 segundos tienes tu personaje real cargado para empezar a simular cambios sobre lo que efectivamente tienes equipado.

Esto es central para el optimization loop de PoE 2: ver un upgrade en el sitio oficial de trade, copiar el item code a PoB 2, swapearlo en tu setup y ver el delta de DPS antes de gastar la currency. PoEPlanner no soporta este flujo; tu personaje queda como mockup.

## Curva de aprendizaje e instalación

PoB 2 requiere instalación. En Windows es un installer directo; en Mac y Linux la fork community funciona pero requiere más setup. La UI es densa — paneles, configs, tabs específicas por tipo de simulación — y asume que el usuario está dispuesto a aprender el motor de daño en detalle. La curva de aprendizaje inicial es real.

PoEPlanner solo abre el browser. UI más limpia, menos opciones expuestas. Es la herramienta natural para alguien que empieza con PoE 2 sin background previo en planners de ARPG.

## Madurez del proyecto

Vale la pena tener presente que **el ecosistema de tools de PoE 2 todavía está consolidándose**. PoB 2 es una fork que evolucionará durante los próximos parches. PoEPlanner es una herramienta consolidada con soporte específico de PoE 2 y mantiene estabilidad de release a release. En 6-12 meses ambas van a estar más maduras; hoy hay tradeoffs por la novedad del juego.

## En resumen

| Escenario | Mejor opción |
|---|---|
| Calcular DPS exacto en PoE 2 | PoB 2 |
| Planificar atlas tree | PoEPlanner |
| Compartir build rápido en Discord | PoEPlanner |
| Importar y ajustar tu personaje real | PoB 2 |
| Acceso desde browser sin instalación | PoEPlanner |
| Optimization profunda con bench crafts | PoB 2 |
| Mockup casual de un tree | PoEPlanner |
| Soporte adelantado en parches de PoE 2 | PoB 2 |

## Veredicto final

**No son competidores directos, son complementos**. Los players serios de PoE 2 usan ambos. PoB 2 es la calculadora pesada cuando estás puliendo un build con tu gear real; PoEPlanner es la web rápida para compartir, planificar atlas, y mockear ideas cuando estás afuera de tu PC.

Si recién empiezas con PoE 2: **PoEPlanner**. Es accesible, web, y cubre el 80% de lo que quieres visualizar. Cuando empieces a obsesionarte con DPS exacto, instala PoB 2 — se vuelve la herramienta primaria sin desplazar a PoEPlanner. Dos roles distintos en tu workflow.
