---
title: "PoE 2 Scout"
description: "Sitio web open source que recopila precios e información de mercado en tiempo real para Path of Exile 2, con API pública y filtros por liga."
quickTake: "Para PoE 2 lo que poe.ninja fue para PoE 1: el lugar al que vas cuando necesitas saber cuánto vale una currency, un base, o un unique sin lanzar el juego ni abrir el trade. Funciona, es gratis, y tiene API si quieres construir algo encima."
---

## Qué es

PoE 2 Scout es un sitio web mantenido por un equipo community que rastrea precios y datos de mercado de Path of Exile 2 en tiempo real. Vive en `poe2scout.com`, no requiere registro, y todo el código es open source bajo MIT.

La arquitectura está pensada para ser consumida por terceros: backend en Python, frontend React, y una API documentada que cualquier herramienta externa puede integrar para mostrar precios actualizados.

## Qué problema resuelve

PoE 2 está en early access y la economía cambia rápido entre patches. Saber cuánto cuesta un Divine Orb hoy, qué bases están baratas, o cómo ha evolucionado el precio de un unique durante la semana es información que tradicionalmente los players obtenían pasando por el trade oficial item por item.

PoE 2 Scout colapsa eso a una sola pantalla con búsquedas filtrables por liga, categoría, y rango de precio. La granularidad temporal permite ver tendencias de 24h, 7d, y más largas — útil para decidir si hold-ear un item esperando subida o vender ya.

## Diferenciación

Frente a poe.ninja: poe.ninja tradicionalmente cubre PoE 1 con muchos años de pulido. Su soporte para PoE 2 es funcional pero comparativamente más liviano. PoE 2 Scout está construido desde cero pensando en PoE 2.

Frente al trade oficial de GGG: el trade oficial es la fuente de verdad para listings activos pero no agrega ni grafica históricamente. Para "cuánto vale esto en promedio" PoE 2 Scout es mejor; para "comprar este item específico ahora" el trade oficial sigue siendo el destino.

## Para qué la usa la gente

**Pricing rápido al craftear o lootear**: vendiste un base, sacaste una rare, encontraste un unique — abres Scout, ves rango de precios, decides si vender o usar.

**Currency conversion**: tabla de tipos de cambio entre Divine, Exalted, Chaos y currency más obscura. Útil cuando alguien te ofrece trade en moneda no estándar.

**Tracking de items específicos durante una league**: marcar items y ver evolución histórica para detectar oportunidades de inversión o flipping.

**Integración con tools propias**: la API pública permite construir overlays, bots de Discord, o dashboards personales que consumen los precios sin scrapear.

**Verificación de scams**: si alguien te ofrece "trato del siglo", chequear precio normal en Scout te evita pagar de más en transacciones sociales.

## Para quién NO es esta herramienta

Si recién empiezas y todavía no sabes lo que es un Divine Orb, Scout no te enseña — asume que conoces los items y currency básicos.

Si juegas SSF (Solo Self-Found) la información de precios es entretenida pero no aplicable a tu juego — no vas a tradear.

Si necesitas listings activos para comprar un item específico ahora mismo, el trade oficial de GGG es la herramienta correcta. Scout es para rangos y tendencias, no para encontrar el listing concreto.

## Cómo se usa en la práctica

1. Vas a `poe2scout.com`. Eliges la liga activa en el header (Standard, Hardcore, temp league del momento).
2. Para currency: abres la tab de Currency, ves la tabla de tipos de cambio.
3. Para items: usas la search bar con nombre del unique o filtras por categoría (weapons, armour, jewels, maps).
4. Click en un item te lleva a página detallada con histórico de precio.
5. Para integración: revisas la documentación de la API en el repo de GitHub.

## Limitaciones honestas

**Solo en inglés**. Sin localización a otros idiomas. La interfaz es simple así que no es bloqueador, pero notable.

**Cobertura depende de actividad de mercado**. Items extremadamente raros con pocos listings tienen precios menos confiables (ruido estadístico).

**Los precios mostrados son indicativos, no garantía de venta**. Listar un item al "precio Scout" no garantiza que se venda — el mercado real depende de listings concurrentes y demanda activa.

**Lag respecto al trade oficial**. Los precios se agregan periódicamente; durante anuncios o cambios de meta puede haber unos minutos de delay vs el live.

**Dependencia del API de GGG**. Cuando GGG hace mantenimiento del trade oficial o cambia rate-limits, Scout puede mostrar datos desactualizados temporalmente.

## Cómo empezar

No requiere registro. Vas a `poe2scout.com` y empiezas a navegar. La primera vez vale la pena explorar las tabs de Currency e Items para hacerte idea de la organización.

Si construyes algo encima vía API, el repositorio de GitHub tiene documentación de endpoints y rate limits — sigue las reglas para no quemar el servicio para otros.
