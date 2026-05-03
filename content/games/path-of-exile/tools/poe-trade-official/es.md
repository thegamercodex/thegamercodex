---
title: Path of Exile Trade
description: El sitio oficial de trading de Grinding Gear Games, donde sucede la mayor parte del comercio entre jugadores en Path of Exile, con búsquedas avanzadas, live search e intercambio masivo de currency.
quickTake: Esto no es opcional. Si juegas PoE más allá de la primera semana de una liga, vas a vivir en este sitio. La curva inicial es real, pero dominar los filtros de búsqueda y el live search es lo que separa a los jugadores que progresan rápido de los que se quedan farmeando lo mismo eternamente.
---

## Qué es

Path of Exile Trade es el sitio oficial de trading de Grinding Gear Games. Es un indexer que escanea el contenido de todas las premium stash tabs públicas del juego mediante el Public Stash Tab API, y te permite buscar items, currency y prácticamente cualquier cosa intercambiable usando filtros granulares de mods, stats, precio y rarity.

Existe desde hace años y es la pieza central del comercio en PoE. La mayoría de las tools de trading third-party que conoces (incluyendo Awakened PoE Trade y poe.ninja) usan este sitio como backend o lo complementan, no lo reemplazan.

## Qué problema resuelve

Path of Exile no tiene auction house in-game tradicional. El intercambio entre jugadores siempre ocurrió mediante mensajes directos, whispers y reuniones en hideouts. Sin un indexer centralizado, encontrar el item exacto que necesitas para tu build sería buscar agujas en miles de pajares.

PoE Trade resuelve esto indexando todo el inventario público del juego en tiempo casi real. Buscas un anillo con fire resistance entre 30-45%, life entre 70-90 y un open prefix; el sitio te muestra todos los items que matchean, ordenados por precio, con un botón que copia al portapapeles el whisper exacto para enviarle al vendedor in-game.

Desde el patch 3.27, GGG agregó **trading asíncrono** vía Faustus, un NPC que aparece en tu hideout (requiere convertir una premium tab a "merchant tab", sin costo). Esto significa que una porción creciente de trades ya no requiere coordinar horarios con el vendedor: compras, recibes el item, y listo.

## Para qué la usa la gente

Los casos de uso típicos:

Buscar upgrades específicos para tu build con filtros precisos de mods. Comprar uniques que necesitas para activar mecánicas de tu build. Vender items rare que dropearon y rolean bien. Hacer bulk exchange de currency (cambiar 1000 chaos por divines, por ejemplo). Setear live searches para items raros con criterios muy específicos, que te avisan apenas alguien lista uno que matchea. Investigar qué items están infravalorados o cuáles tienen oferta limitada para flippear.

## Diferenciación con poe.ninja y Awakened PoE Trade

Las tres herramientas tocan el ecosistema económico de PoE pero hacen cosas distintas:

**poe.ninja** es un agregador estadístico. Te dice cuánto vale cada cosa en promedio, qué builds están de moda, cómo evoluciona la economía. Es para análisis y price-check rápido, no para comprar.

**Awakened PoE Trade** es un overlay desktop que se integra con el juego. Hovereas un item, presionas un atajo, y te muestra precio sugerido o lanza una búsqueda. Usa la API de PoE Trade como backend.

**PoE Trade oficial** es el marketplace propiamente dicho. Es donde efectivamente compras y vendes. Las otras dos te ayudan a tomar decisiones, pero la transacción ocurre acá (o vía el NPC Faustus, que también está conectado a este sistema).

## Limitaciones honestas

**La interfaz tiene curva.** El sistema de filtros es poderoso pero no intuitivo. La diferencia entre stats explícitas, implícitas, pseudo-mods, y mod groups confunde a jugadores nuevos. La documentación oficial es escasa; la mayoría aprende leyendo guías de la comunidad o por prueba y error.

**Listings fantasma y precio-fijación.** Es problema crónico de PoE: jugadores que listan items a precios bajísimos para atraer mensajes y luego no responden, intentando manipular la percepción de precio. PoE Trade no resuelve esto; tienes que aprender a reconocer patrones y usar live search para items críticos.

**Trading sincrónico todavía dominante.** Aunque Faustus introdujo asincronía, gran parte del trading sigue requiriendo coordinar tiempos con el vendedor. Si juegas en horarios poco populares, la fricción aumenta.

**Search "exacto" no siempre es exacto.** Los pseudo-filters (como "total elemental resistance") agrupan stats individuales, lo que a veces oculta items que técnicamente cumplen lo que buscas. Hay que aprender cuándo usar pseudo y cuándo ir a stat-by-stat.

**Disponible en español pero traducción limitada.** La interfaz tiene español, pero los nombres de mods, items y mecánicas siguen en inglés. La comunidad y guías son mayoritariamente anglófonas.

## Cómo se usa en la práctica

El flujo típico de un jugador establecido:

1. Identifica qué upgrade necesita (más vida, más resistance, un mod específico para su build).
2. Abre PoE Trade y configura filtros: tipo de item, mods requeridos con rangos min/max, presupuesto en chaos o divines.
3. Ordena por precio ascendente y revisa los primeros resultados.
4. Para items críticos, activa Live Search y deja la pestaña abierta mientras juega.
5. Al encontrar candidato, copia el whisper, lo pega in-game, espera respuesta del vendedor.
6. Si el vendedor está conectado y responde, va a su hideout y completa el trade. Si el item está vendido a través de Faustus, lo recibe asincrónicamente.
7. Para bulk exchange de currency, usa la pestaña "Bulk Item Exchange" que tiene interfaz simplificada para intercambios estándar.

## Cómo empezar

Entra a `pathofexile.com/trade`, loguéate con tu cuenta de Path of Exile (o créala gratis), y selecciona la liga actual en el dropdown superior. Empieza buscando algo simple: un unique conocido por nombre, sin filtros adicionales. Eso te familiariza con la interfaz.

Después intenta una búsqueda de rare con un solo mod, por ejemplo un anillo con "+to maximum life" entre 70 y 90. Vas a ver cómo aparecen los filtros de stats y cómo se combinan.

Para vender, asegúrate de tener al menos una premium stash tab (de pago, son fundamentales para el endgame), márcala como pública con precio, y tus items aparecen automáticamente indexados. No requiere acción adicional, el API hace todo.