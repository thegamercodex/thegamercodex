---
title: "poe.ninja"
description: "Agregador en tiempo real de la economía y rankings de personajes de Path of Exile 2."
quickTake: "Si querés precios o builds top de PoE 2, empezás acá. Funciona como pulso diario del juego — qué cuesta cada moneda, qué arquetipos están dominando, qué uniques se están vendiendo."
---

## Qué es

poe.ninja es el sitio que la comunidad usa como termómetro económico y meta de Path of Exile, con sección dedicada a PoE 2 desde el merge de poe2.ninja en septiembre de 2025. Trackea precios de currency, divination cards, uniques, gemas, clusters y demás items en tiempo casi real, y publica un ladder de personajes con sus passive trees y gear visibles.

Es un proyecto de un solo dev (Tim, conocido como u4n en la comunidad) con un cobranding aceptado por GGG, que provee data structurada del juego. La página vive en `poe.ninja` y la sección de PoE 2 se accede desde el selector de versión arriba a la derecha.

## Qué problema resuelve

PoE 2 no muestra precios. La economía se descubre vía trade site, pero ese workflow es uno-a-uno: buscás un item específico, ves quién lo vende, y descubrís el precio. Para entender la economía como sistema — qué moneda subió esta semana, qué uniques son baratos vs caros relativos al farm que cuestan, cuál es el ratio Exalted/Divine este mes — el trade site no sirve.

poe.ninja agrega eso en una vista. Un click te da el precio mediano de cualquier currency, la curva histórica del último mes, qué uniques están subiendo de precio (señal de demanda) y cuáles están bajando (señal de saturación o nerf). Para players que se mueven en la economía — flippers, crafters, traders — es input diario.

## Diferenciación

Frente a Exiled Exchange 2 (overlay in-game para price-check rápido), poe.ninja es la versión panorámica. Exiled Exchange te dice "este item se vende en 12 Exalted ahora mismo". poe.ninja te dice "esa currency vale así porque la economía está moviéndose en X dirección, este unique se vende mucho porque tal arquetipo está hot".

La regla práctica: Exiled Exchange durante mapeo (price-check item por item), poe.ninja en sesión de planning (decidir qué farmear, qué crafter, en qué moneda guardar wealth).

## Para qué la usa la gente

**Verificar el ratio Exalted/Divine**: la conversión más usada en PoE 2 cambia diaria o semanalmente según patch state. poe.ninja la muestra de un vistazo, con histórico para entender la tendencia.

**Identificar builds meta de la liga**: la sección Builds extrae personajes top del ladder y muestra qué clase, ascendencia, skill principal y unique items están usando los mejores. Útil tanto para meta-cope como para inspirarse de cara al endgame.

**Descubrir uniques infravalorados**: ordenando uniques por precio o por cambio reciente, encontrás items que pueden estar bajos por sub-uso temporal pero que escalarían bien con tu build. Equivalente a buscar "buy low, sell high" en la economía del juego.

**Calcular profit de strategies de farm**: combinando precio de currency con qué tira cada mecánica, podés modelar qué loop de farm rinde más en Exalted/hora — sin tener que farmear cada uno para descubrirlo.

**Estudiar PoB exports populares**: cada build top tiene link directo a su PoB equivalent en algunos casos, dándote un punto de partida concreto en lugar de tener que reverse-engineer.

## Para quién NO es esta herramienta

Si recién terminaste la campaña y todavía no tocás trade, la sección de economía de poe.ninja no te aporta. La data tiene sentido cuando ya estás participando en la economía. Antes de eso es ruido.

Si solo jugás SSF (Solo Self-Found), la mayoría de poe.ninja es irrelevante — no podés trade, los precios no aplican. La sección Builds sí sigue siendo útil para inspirarte sin importar el modo de juego.

## Cómo se usa en la práctica

1. Entrás a `poe.ninja`, seleccionás "PoE 2" en el toggle de version arriba a la derecha y luego la liga vigente (ej: Last of the Druids).
2. La home te muestra Currency, Items, y Builds como secciones principales. Currency lista todos los orbes con su precio en chaos (o en exalted en PoE 2) y su cambio reciente.
3. Para tracking de un item específico: buscás por nombre y obtenés precio mediano, listings activos, y curva histórica.
4. Para meta de builds: vas a Builds y filtrás por clase, ascendencia o skill. Click en un personaje top te muestra su gear completo y árbol pasivo.
5. Workflow típico: revisión rápida en login (5 minutos viendo currency + uniques de tu build), después un deep-dive cuando vayas a craftear o flippar.

## Limitaciones honestas

**Solo está en inglés**. La interfaz, los nombres de items, todo. Para users hispanos hay barrera con vocabulario técnico.

**La data tiene lag**. poe.ninja samplea precios de listings públicos de trade — puede haber discrepancia con el precio real de transacción, sobre todo en items de baja liquidez. Ítems con menos de 10-20 listings activos pueden tener precios poco confiables.

**Sesgo hacia high-roll items**. Los rankings de builds tienden a mostrar personajes con gear extremadamente farmeado (mirror-tier en algunos casos). No son builds replicables para un player promedio — son referencias del techo, no del piso.

**No incluye SSF data**. Como la economía solo existe en trade leagues, todo lo que poe.ninja muestra asume que estás en una de ellas.

**Puede saturarse en patch day**. Cuando lanza una nueva league de PoE 2, los servers se cargan y a veces hay demoras o errores temporales. Vuelve a la normalidad en horas.

## Cómo empezar

No requiere registro. Vas a `poe.ninja`, seleccionás PoE 2, eligís la liga, y ya tenés acceso completo. Si querés tracking más fino podés usar la sección Profile (sin login todavía, basada en tu account name) que te muestra tu personaje en el ladder si calificás.

La forma más útil de incorporarlo a tu flujo es bookmarkear el currency tracker y la sección de builds de tu clase. Revisión de 3-5 minutos por sesión te mantiene calibrado con el estado de la liga.
