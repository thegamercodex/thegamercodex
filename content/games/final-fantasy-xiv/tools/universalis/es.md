---
title: "Universalis"
description: "Tracker crowdsourced del market board cross-world de FFXIV. Ves precios, historial de ventas y stock por servidor sin tener que viajar a cada datacenter, gracias a uploads desde plugins de la comunidad."
quickTake: "Universalis es la herramienta de market que cualquiera con un retainer usa. Crowdsourceado por XIVLauncher/Dalamud users, te muestra precios cross-server actualizados sin que tengas que andar World Visit-eando. Si crafteas o flipeas, lo abres 10 veces por día."
---

## Qué es

Universalis (universalis.app) es un tracker crowdsourced del market board de FFXIV. La data viene de plugins de Dalamud que automáticamente suben información de precios cuando los usuarios visitan los retainers. Open source en GitHub (`Universalis-FFXIV/Universalis`), licencia AGPL-3.0.

Funciones:

- **Lookup de item**: ves precios actuales en cada servidor del datacenter, con sales history.
- **Cross-world comparison**: cuál servidor tiene el precio más bajo para Allagan Tomestones X.
- **Sales velocity**: cuántas unidades se venden por día, info crucial para flipping.
- **Min/max/avg per period**: tendencias de precio en 24h / 7d / 30d.
- **API pública**: integraciones third-party (Teamcraft, etc.) consultan Universalis para datos automatizados.

Es free, sin login para queries. Login solo si quieres contribuir al uploader o tener favoritos.

## Qué problema resuelve

Square Enix no tiene API oficial de market board. Para saber el precio de un item en otro servidor, oficialmente tendrías que World Visit, gastando 15 minutos por servidor + travel. Eso es prohibitivo cuando comparás 6-8 servidores de tu datacenter.

Universalis resuelve esto agregando data de la comunidad:

- Jugadores con el plugin Dalamud Marketboard Uploader contribuyen automáticamente.
- Universalis agrega y sirve la data en una UI consultable.
- Cualquier item, cualquier server: precio actual, historial, tendencia — todo en segundos.

Para crafters serios y flippers, esto es transformacional. Sin Universalis, optimización de market es a ciegas.

## Diferenciación vs Mogboard

Universalis y Mogboard son ambos market trackers cross-world. Diferencias:

- **Universalis**: data más fresca (más users subiendo), API pública robusta, UI moderna.
- **Mogboard**: UI más clásica, integration con XIVAPI (XIVAPI mantiene el sitio), data en algunos casos menos updated.

Universalis es el dominante. Mogboard se mantiene activo y algunos lo prefieren por costumbre. La mayoría de tools third-party (Teamcraft incluido) integran con Universalis API por preferencia.

## Para qué la usa la gente

**Pre-sale lookup**: vas a vender 50 stacks de un mat. Universalis te dice el precio current y la velocity (¿se vende rápido o stuck en queue?).

**Flip-hunting**: buscas arbitrage entre servidores del DC. Universalis te muestra "Bahamut tiene 50 a 1000 gil, Diabolos a 1500". Compras low, viajás, vendés high.

**Crafting profit calc**: vas a craftear 20 items para market. Calculás cost of mats vs precio final via Universalis.

**Verificación pre-purchase**: vas a comprar gear/glamour de un retainer. Chequeás Universalis para no overpagar.

**Histórico de tendencias**: estás considerando craftear consumables para Savage tier. Universalis te dice cómo se movieron los precios en tiers anteriores.

## Para quién NO es esta herramienta

- **Casual sin market interest**: si solo juegas MSQ y no compras/vendés en marketboard, Universalis no aporta.
- **Servers pequeños sin uploaders**: data en JP small servers o algún DC nuevo puede ser pobre. Universalis depende de comunidad uploaders.
- **Quien no usa Dalamud / XIVLauncher**: puedes leer Universalis aunque no contribuyas, pero la data se mantiene fresca gracias a uploaders. Considerá contribuir si te beneficiás.
- **Anti-data sharing players**: si tienes concerns sobre que un plugin trackee tu retainer activity (aunque sea anonimizado), no usés el uploader.

## Cómo se usa en la práctica

1. Andá a [universalis.app](https://universalis.app).

2. Buscá un item por nombre. Auto-complete sugiere.

3. La página de item te muestra: precios current por server, sales history, charts de 7d/30d.

4. Filtros: Quality (NQ vs HQ), Server específico, etc.

5. Para flipping cross-DC: navegás entre servidores del DC, comparás precios.

6. Para contribuir data: instala Dalamud Marketboard Uploader plugin via XIVLauncher. Tu data se sube automáticamente cada vez que abres el market board.

7. API pública: documentada en docs.universalis.app si quieres consumir desde tu app/script.

## Limitaciones honestas

**Calidad depende de uploaders**: en servers/datacenters pequeños, la data puede ser stale (1-3 días viejo) cuando hay pocos contributors. Mejor en NA/EU; menor en JP small servers.

**No predice futuro**: te da tendencias históricas, no predicts. Para tier nuevo o evento limited, los precios pueden ser volátiles y la data histórica no sirve.

**Plugin TOS gray area**: el Dalamud Marketboard Uploader técnicamente es third-party software no aprobado por Square Enix. En la práctica nadie ha sido baneado por usarlo, pero existe.

**Data global solo de market board**: no trackea ventas player-to-player, gifting, ni quest rewards. Solo retainer market.

**No filtra "buyout" vs "asking price"**: te muestra lowest asking. A veces hay retainers con prices loco bajo (typo, undercut). Esos pueden tirar las medias hacia abajo.

**Server visit costs gil**: aunque Universalis te muestra precio en otro server, el viaje requiere World Visit. Hay tax involucrado.

## Cómo empezar

1. Andá a [universalis.app](https://universalis.app).

2. Tipeá un item conocido (ej: "Tomestone Materia X"). Mirá precios cross-DC.

3. Compará con lo que esperabas — si la diferencia es grande, hay margin de flip.

4. Para contribuir: instala Dalamud Marketboard Uploader via XIVLauncher (Settings → Plugins → buscar uploader). Una vez activo, cada vez que abrás el market board, contribuís data al pool.

5. Para integrations: si usas Teamcraft, su market data viene de Universalis API. No requiere setup extra.

6. Si servís un audience específico (Discord de FC, posting de flips), considerá set up alerts via API/bot. Hay tutoriales en universalis.app docs.

7. La integración con XIVLauncher + Dalamud + Teamcraft + Universalis es el "stack moderno" de FFXIV optimization. Si vas a optimizar economía, todos van juntos.
