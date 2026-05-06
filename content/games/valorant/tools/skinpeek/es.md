---
title: "SkinPeek"
description: "Tracker open-source de tienda de Valorant: daily store, accessory shop, night market, y catálogo completo de skins."
quickTake: "Si farmeás VP esperando tu skin, SkinPeek + el bot de Discord te avisan automáticamente cuando aparece. Free, open-source, y sin friction de login web."
---

## Qué es

SkinPeek es un proyecto open-source mantenido por giorgi-o en GitHub bajo licencia MIT. Originalmente un Discord bot que te notificaba sobre tu daily store, ahora también tiene website. Free completo, sin tier premium, sin ads. Activo desde 2022.

Cubre: tu daily store de 4 skins, accessory shop, night market cuando está activo, y catálogo completo de skins con stats (precio, edition, animations, fx).

## Qué problema resuelve

La tienda de Valorant rota cada 24h con 4 skins random. Si estás chasing una skin específica, abrir el cliente cada día para chequear es tedioso. Para night markets (events temporales con descuentos), olvidate de qué hay este weekend mientras estás afuera.

SkinPeek resuelve eso. El Discord bot manda notification cuando tu skin wishlisted aparece en daily store. La web te muestra tu store y night market sin entrar al juego.

## Diferenciación

Frente a Blitz.gg / Tracker.gg que también tienen daily store viewer, SkinPeek es **especializado solo en skins** y tiene el **Discord bot integrado** que las otras no tienen.

Frente al cliente de Valorant directo, SkinPeek tiene **wishlist + notification system** que el cliente no expone.

Frente a otras shop trackers que han venido y ido, SkinPeek tiene la ventaja de ser open-source y mantenido activamente — menos riesgo de cierre repentino.

## Para qué la usa la gente

**Notificación automática de wishlist**: configurás "quiero la Prime Vandal" y el bot te ping en Discord cuando aparece en tu daily store.

**Daily store check sin entrar al cliente**: web viewer rápido para chequear hoy.

**Night market preview**: cuando Riot anuncia night market, SkinPeek lo muestra en cuanto el bot se update con la API.

**Catálogo completo navegable**: explorar todas las skins históricas de Valorant con stats. Útil para wishlist editorial.

**Tracking de skins en accessory shop**: rotación de gun buddies, cards y sprays.

## Para quién NO es esta herramienta

Si no compras skins (gameplay-only player), SkinPeek es invisible para vos.

Si solo querés stats, no skins, las otras tools (Tracker.gg, etc.) cubren eso. SkinPeek es niche.

Si no usás Discord, perdés la mejor feature (bot notifications). La web sigue siendo útil pero menos compelling.

## Cómo se usa en la práctica

1. Entrás a `skinpeek.com` o agregás el bot a tu Discord (link en GitHub).
2. Auth con cuenta Riot via OAuth (necesario para ver TU store, no shared).
3. Configurás wishlist seleccionando skins que querés.
4. Bot manda notification cuando una wishlisted skin aparece en tu daily store.
5. Para night market: bot anuncia cuando empieza, mostrando lo que te tocó.

## Limitaciones honestas

**Auth con Riot tiene riesgo perceived**. SkinPeek pide credentials Riot (vía OAuth oficial), lo cual algunos players desconfían. La integración es legítima pero requiere comodidad con third-party auth.

**Open-source pero un solo dev**. giorgi-o mantiene activamente, pero proyecto solo. Si abandona, riesgo de continuidad.

**Discord bot puede ratearse**. Bots Discord pueden ser hit por rate limits o downtime ocasional.

**No localizado**. Solo en inglés.

**No tiene precio en moneda local**. Precios en VP siempre, sin conversión a USD/EUR/etc. Tu cliente convierte.

**No reemplaza el cliente para comprar**. La transacción tiene que pasar dentro de Valorant. SkinPeek es lookup + notification, no e-commerce.

## Cómo empezar

Si te interesan skins: agregá el bot a tu Discord server, configurá wishlist con 5-10 skins que querrías. En 1-2 semanas vas a ver el primer ping cuando una aparezca. Sin friction adicional. Si no usás Discord pero querés web viewer, la página `skinpeek.com` te lleva al mismo lookup.
