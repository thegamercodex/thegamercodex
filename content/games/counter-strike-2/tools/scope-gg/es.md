---
title: "scope.gg"
description: "Demo viewer 2D para CS2 con foco en análisis de utility (smokes, flashes, molotovs) reproducido visualmente sobre el mapa, sin necesidad de abrir el cliente."
quickTake: "El parser de demos más visual del ecosistema CS2. Si tu cuello de botella es utility usage — sabes que tiras malos smokes pero no entiendes cuáles ni cuándo — esta es la tool específica."
---

## Qué es

scope.gg es una plataforma de análisis de demos para CS2 con énfasis en visualización 2D del map en tiempo de replay. Subes tus demos (o las trae automáticamente vía integraciones) y te muestra cada round desde una vista cenital tipo "minimapa expandido", reproduciendo posiciones de cada jugador, kills, asistencias, y crucialmente: cada smoke, flash y molotov lanzado, su trayectoria y dónde aterrizó.

A diferencia de Leetify (que prioriza scores agregados y AI scoring), scope.gg prioriza **visualización**. La idea es que ver tus errores de utility en context — "ahí tiraste un smoke 2 segundos tarde y se quemó en aire" — es más educativo que leer un score abstracto.

Tiene tier free generosa y tier paga (~5-10 USD/mes según promo) que desbloquea historial extendido, comparativas de utility con pros, y filtros avanzados.

## Qué problema resuelve

Utility es una de las dimensiones más difíciles de evaluar en CS2 sin demo viewer dedicado. Sabes que tiras muchas granadas pero no sabes cuántas fueron efectivas. Sabes que algunos rounds caen mal pero no asocias el momento del smoke con la pérdida.

scope.gg te da exactamente eso: cada utility lanzada, su timing, su efectividad medida (cuántos enemigos cegó una flash, cuánta área bloqueó un smoke, cuánta lifebar quitó un molotov). Y lo reproduce visualmente, así no es un número abstracto sino un evento concreto que puedes ver y entender.

Para el caso "siento que mi entry funciona pero no sé qué arreglar de mis flashes", scope.gg te muestra round por round qué pasó con cada flash que tiraste — efectiva, fail, autoflash, fuera de tiempo.

## Para qué la usa la gente

**Review de utility post-match**: ver cuántas de tus granadas dieron efecto vs se desperdiciaron, separadas por tipo (smoke, flash, molly, HE).

**Demo viewer 2D rápido**: en vez de abrir el cliente y rebobinar manualmente, la vista cenital te deja saltar a cualquier round y momento con timeline visible.

**Aprender utility de pros**: scope.gg tiene cobertura de matches profesionales recientes — puedes cargar el demo de tu pro favorito y comparar tus smokes con los suyos en el mismo mapa.

**Identificar timing de utility**: el replay 2D hace obvio cuando una flash se tiró 2 segundos antes o después del peek. Algo casi invisible en el cliente FPS.

**Análisis de equipo**: sumas teammates y ves coordinación de utility — flashes lanzadas en simultaneous, smokes superpuestas, molotovs redundantes.

## Para quién NO es esta herramienta

scope.gg es excelente para utility y visualización 2D pero no es:

- **Coaching general estructurado** → Leetify cubre mejor positioning, aim y agregados; scope.gg está más focalizado en utility/movement.
- **Cobertura de stats simples (KDA, win rate)** → CS Stats es más liviano para esa pregunta.
- **Database de lineups específicos** → CSNADES es la dedicada a "quiero el lineup exacto de este smoke en Inferno B"; scope.gg analiza lo que YA tiraste, no enseña nuevos.
- **Reemplazo del cliente para review profundo de aim duels** → para review pixel-perfect de un duelo, abre la demo en el cliente.

## Cómo se usa en la práctica

1. Vas a `scope.gg` y registras cuenta (Steam OAuth).

2. Conectas Faceit o subes demos manualmente. Como Leetify, Faceit es la integración más fluida; matches de Premier/MM requieren upload.

3. Después de procesar, la home muestra tu lista de matches. Click en uno te lleva al replay 2D.

4. En el replay: timeline arriba con marks de kills/utility, controles de play/pause/speed, mapa central con posiciones animadas. Sidebar con stats del round y filter para ver solo eventos de un jugador o tipo.

5. Para análisis específico de utility: pestaña **Utility breakdown** del match — gráficos de efectividad por tipo y comparativa contra benchmark del rank.

## Limitaciones honestas

**Cobertura de mapas limitada al pool activo**: scope.gg trackea bien los maps del competitive pool actual. Maps fuera del pool (legacy, workshop) pueden tener visualización imperfecta o no estar soportados.

**Tier free razonable pero limitada**: puedes usar la mayoría de features pero el historial está capeado y comparativas avanzadas requieren pago.

**No es coaching, es viewer + métricas**: scope.gg te muestra qué pasó pero no te dice cómo arreglarlo. La interpretación queda en el usuario o en un coach. Para feedback verbal accionable, Leetify tiene scoring más opinado.

**Privacy igual que Leetify**: tus demos se procesan en sus servers. Si te molesta, esto es bloqueante.

**UX puede ser denso al principio**: el dashboard tiene muchos números y filtros. La curva de aprendizaje del propio tool es real, especialmente comparado con interfaces más opinadas.

## Cómo empezar

1. Crear cuenta en `scope.gg` con Steam OAuth.

2. Conectar Faceit si tienes. Si no, upload manual de demos desde la carpeta `replays`.

3. Procesar 3-5 matches y abre uno en el replay 2D — el primer "ah, ahí está el smoke que se quemó" suele ser revelador.

4. Si te interesa profundizar en utility específicamente, ver tutoriales del propio scope.gg en YouTube — el tool tiene curva pero los video walkthroughs ayudan.

5. Combinar con CSNADES para cerrar el loop: scope.gg te muestra tus malos smokes, CSNADES te enseña los buenos.
