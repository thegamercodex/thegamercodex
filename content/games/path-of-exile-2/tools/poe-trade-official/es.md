---
title: "Path of Exile 2 Trade"
description: "Sitio web oficial de trading de Grinding Gear Games para Path of Exile 2."
quickTake: "El backend que hace funcionar al juego como economía. Toda tool externa de trading (poe.ninja, Exiled Exchange) consulta este endpoint. Si trade es parte de tu loop, lo vas a usar — directo o por proxy."
---

## Qué es

Path of Exile 2 Trade (`pathofexile.com/trade2`) es el sitio web oficial donde Grinding Gear Games hospeda el sistema de trading del juego. Permite buscar items publicados por otros jugadores con filtros por mods, base type, level requirements y currency price, y luego contactar directamente al seller via in-game whisper.

A diferencia del trade de PoE 1 (que está en `/trade`), PoE 2 vive en su propio endpoint con UI similar pero adaptada a las nuevas mecánicas (Spirit, gem combinations, runes). Acceso requiere login con cuenta del foro de PoE.

## Qué problema resuelve

El trading en PoE 2 funciona player-to-player, sin auction house. Sin un sistema central que muestre listings, sería imposible conectar buyer con seller. El trade site oficial es ese índice: cualquier item que un seller liste a través de premium stash tabs aparece searchable en el sitio para todos los players.

Es el único endpoint canónico. poe.ninja, Exiled Exchange 2 y cualquier otra herramienta de trading consume data de este sitio (vía polling autorizado o scraping respetando rate limits). Sin trade2, el ecosistema económico no existe.

## Diferenciación

Frente a Exiled Exchange 2 (overlay para queries rápidas), el sitio oficial gana en precision para queries complejas — buscas un item con 5 mods específicos, ranges custom, sockets exactos, y el sitio te lo permite. EE2 es más rápido pero cubre cases más simples.

Frente a poe.ninja (panorámica de economía), el sitio oficial es transaccional puro: no te da históricos ni tendencias, te da listings activos ahora. Combinas los tres: poe.ninja para entender el mercado, sitio oficial para hacer la transacción, EE2 para acelerar el flow durante mapeo.

## Para qué la usa la gente

**Buscar gear específico para tu build**: búsquedas con stats objetivo (ej: rare boots con +30% movement speed + life + tres resistencias > 30%). El sitio devuelve listings ordenados por price.

**Bulk currency exchange**: el endpoint `/exchange` permite intercambiar grandes cantidades de monedas (Exalted ↔ Divine, Chaos ↔ Exalted, etc.) de forma estructurada con ratios actuales.

**Listar tus propios items**: el sitio refleja tus premium stash tabs habilitados como "public". Cualquier item allí queda automáticamente listado a su precio definido.

**Investigar mercados nicho**: para uniques específicos o crafted con mod combinations exóticas, ver listings activos te dice si hay liquidity o si vas a estar listing por semanas.

**Verificar precios antes de craftear**: si vas a invertir 50 Exalted en crafting, quieres saber qué se está vendiendo el resultado. El sitio te muestra real listings, no estimaciones.

## Para quién NO es esta herramienta

Si juegas SSF, el trade site es irrelevante — no puedes trade. La hard lockout aplica.

Si solo quieres "el precio aproximado" de algo y no estás transaccionando, poe.ninja es más rápido y muestra histórico. El trade oficial es para hacer la operación, no para observar el mercado.

Si recién empiezas y no entiendes qué mods son relevantes para tu build, el trade te va a frustrar — vas a poder buscar pero no sabrás qué filtros poner. Conviene primero seguir una guía que te diga qué mods importan, después usar trade.

## Cómo se usa en la práctica

1. Vas a `pathofexile.com/trade2` y logueas con tu cuenta del forum.
2. Seleccionas liga (Standard, current league, SSF si corresponde) en el dropdown superior.
3. Para search: ingresas item base (ej: "Vaal Regalia") y agregas filtros (item level, mods, sockets). El sitio devuelve matches en vivo.
4. Click en un listing → "Whisper" copia un mensaje al clipboard. Pegas in-game (chat) y mandas el whisper al seller.
5. El seller te invita a su hideout, haces el trade in-game, confirmas.
6. Para bulk: tab `/exchange`. Seleccionas currency tienes / currency quieres, ratio mínimo, monto. El sitio te lista bulk listings.

## Limitaciones honestas

**Búsqueda strict por defecto**. PoE 2 Trade defaults a fuzzy más estricto que PoE 1. Si tu query no devuelve nada, agregar un tilde (~) al inicio del nombre fuerza fuzzy mode. Tip que los newcomers desconocen.

**Whisper no garantiza venta**. El seller puede ignorarte, estar afk, o haber vendido el item ya. Sin auction house instantáneo, frustrar a buyers es free para sellers. Prueba múltiples listings cuando lo necesites urgent.

**Rate limits agresivos**. Si abres muchos listings rápido, el sitio te tira temporary lock. Es el mecanismo de GGG para evitar bots — afecta a humanos legítimos también ocasionalmente.

**No hay reputation de sellers en el sitio**. No sabes si el seller es serio o re-sells fakes. Las protecciones del juego (verificación in-game) reducen el riesgo, pero no lo eliminan.

**UI funcional, no moderna**. Dense, mucha información, navegación que premia familiaridad. La curva inicial es áspera.

**El cliente in-game tiene shortcut limitado**. Puedes invocar `/trade` in-game pero abre browser externo — no es overlay nativo. Para overlay nativo, Exiled Exchange 2.

## Cómo empezar

No requiere registro adicional al de PoE — usas tu cuenta del forum. La primera vez que intentes trade, el flow es: encontrar el item en el sitio, click whisper, pegar in-game, esperar invitación, confirmar trade.

Tip de productividad: configura tus stash tabs como premium (paid) para listar. El sitio espera que uses premium tabs — es la fricción intencional de GGG para monetizar trade. Sin premium tabs, no puedes vender (solo comprar).

Para integrarlo: lo abres cuando vas a comprar gear específico o cuando termina una sesión y quieres listar drops. Para queries rapidísimas en mapeo, Exiled Exchange 2 es más eficiente. El sitio oficial es para operaciones más planificadas.
