---
title: "Mogboard"
description: "Frontend alternativo del market board cross-world de FFXIV basado en XIVAPI: precios, ventas e items con UI clásica y experiencia más liviana que Universalis."
quickTake: "Mogboard es el market tracker original de Vekien (XIVAPI). Funcional y bonito, pero Universalis lo desplazó en mindshare. Sigue valiendo la pena conocerlo: si Universalis cae o si prefieres su UI más simple, está acá esperando."
---

## Qué es

Mogboard (mogboard.com) es un tracker de market board cross-world para FFXIV mantenido por Vekien como parte del ecosistema XIVAPI. Open source en GitHub (`xivapi/mogboard`), licencia AGPL-3.0. Existe desde antes que Universalis y fue el primer market tracker de XIV con escala.

Funcionalidades:

- **Item lookup**: precios por server, sales history, charts de tendencia.
- **Cross-world view**: comparativa rápida entre servidores del datacenter.
- **Recent sales global**: log de últimas ventas grandes en marketplaces conocidos.
- **Soporte multi-idioma**: EN, FR, DE, JA.

Data viene del scraping y de uploaders Dalamud (similar a Universalis pero pool más chico). Free, sin login para queries.

## Qué problema resuelve

Antes de Universalis, Mogboard era la única forma seria de ver prices cross-server. Today, el problema es el mismo (Square Enix no tiene API oficial de market) pero Mogboard sirve como **alternativa o backup**:

- Cuando Universalis cae (rare pero pasa), Mogboard sigue funcionando.
- Para queries simples, Mogboard tiene UI más liviana.
- Para integrations con XIVAPI (the API ecosystem que también maneja Lodestone scraping), Mogboard es parte del stack.

## Diferenciación vs Universalis

- **Universalis**: pool de uploaders más grande (data más fresca), API muy robusta, UI moderna, integración con Teamcraft default.
- **Mogboard**: pool de uploaders más chico, data en ciertos servers menos fresca, UI más clásica.

Universalis ganó por agresividad del community uploading. Mogboard sigue activo y útil, pero hoy es la opción secundaria. Si tienes que elegir uno, Universalis. Si te gusta Mogboard por UI o lo conoces desde antes, no hay razón de cambiar para uso casual.

## Para qué la usa la gente

**Backup cuando Universalis cae**: Universalis tiene downtime ocasional. Mogboard suele estar up.

**Queries simples sin overload de info**: la UI de Mogboard es más limpia y minimalista. Para chequeo rápido de precio, algunos lo prefieren.

**Cross-reference con Universalis**: paranoid sellers chequean ambos para detectar discrepancias en data.

**Integration via XIVAPI**: si tu app/script ya usa XIVAPI para otros endpoints (NPCs, items, lore), Mogboard market integration es natural extension.

**Servers con poca Universalis coverage**: en algunos JP servers chicos, Mogboard puede tener data alternativa.

## Para quién NO es esta herramienta

- **Optimization seria**: si ganas gil por flipping al volumen, vete directamente a Universalis. La community uploader pool de Universalis es mejor.
- **Usuarios de Teamcraft**: Teamcraft consulta Universalis por default. Mogboard no integra. Para ese workflow no aporta nada.
- **Mobile-first users**: ninguno de los dos es excelente en mobile, pero Universalis tiene UI un poquito más responsive.
- **Quien quiere features avanzadas (alerts, watchlists)**: la mayoría está más mantenida en Universalis.

## Cómo se usa en la práctica

1. Anda a [mogboard.com](https://mogboard.com).

2. Buscas un item. Auto-complete sugiere.

3. La página de item: precios por server, sales recent, charts.

4. Filtros: HQ vs NQ, server, time range.

5. Para queries específicas de XIVAPI relacionada (NPC vending an item, recipes), navegas a XIVAPI.com directamente — Mogboard y XIVAPI son hermanos del mismo ecosistema.

## Limitaciones honestas

**Pool de uploaders más chico**: la data en muchos items/servers es menos fresca que Universalis. Para servers populares es similar; para servers chicos hay gap.

**Sin features avanzadas**: no hay alerts, watchlists, comparativas multi-server graphical avanzadas. Universalis cubre eso mejor.

**Mantenimiento menos activo**: Vekien mantiene XIVAPI + Mogboard como side project. Updates pueden tardar más vs Universalis (que tiene team más amplio).

**Marca menos reconocida**: muchos community guides (Teamcraft, Reddit FFXIV economy) refieren a Universalis directamente. Mogboard ya no aparece en los workflows recomendados.

**No tiene mobile app**: solo web responsive.

**TOS gray area same as Universalis**: ambos dependen de Dalamud uploaders, mismo issue technical.

## Cómo empezar

1. Anda a [mogboard.com](https://mogboard.com).

2. Busca un item de prueba. Compara la presentación con Universalis para el mismo item.

3. Si te gusta más la UI de Mogboard, usalo. Si no, vete a Universalis.

4. Para integrations: si construyes un bot/script que usa XIVAPI para lookups generales, Mogboard market endpoint encaja natural.

5. No es indispensable. Si solo necesitas un market tracker, Universalis cubre todo. Mogboard es opción si quieres alternative o si te metiste primero al ecosistema XIVAPI.

6. Si encuentras bugs, Vekien acepta reports en GitHub — el repo está active pero la cadencia es menor que en Universalis.
