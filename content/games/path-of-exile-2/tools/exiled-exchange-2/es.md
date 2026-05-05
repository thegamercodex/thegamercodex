---
title: "Exiled Exchange 2"
description: "Overlay de price-check para Path of Exile 2 que lee items copiados y consulta el trade site oficial sin alt-tab."
quickTake: "Si tradeás algo más que ocasional, Exiled Exchange 2 es la diferencia entre vender items en su precio real y dejar valor en la mesa porque no tenés tiempo de buscar manualmente cada uno."
---

## Qué es

Exiled Exchange 2 es una aplicación overlay para Path of Exile 2 desarrollada por Kvan7, basada en el trabajo del proyecto Awakened PoE Trade (que solo cubría PoE 1). Corre alongside del juego en Windows o Linux, escucha hotkeys (típicamente Ctrl+D), y al copiar un item te devuelve listings activos, precio mediano y estadísticas de mercado del trade oficial de GGG.

Es open source bajo MIT, con releases activos en GitHub y comunidad de issues abierta. Cero costo, cero registro, cero dependencia de servers de terceros más allá del trade de GGG.

## Qué problema resuelve

PoE 2 no tiene mecánica de auction house ni vendor in-game. Cada trade es manual: encontrás el item, copiás texto, abrís browser, buscás en el trade oficial, ajustás filters, leés precios, decidís. Para un item lleva 30 segundos. Para los 50 items de un map run lleva tanto tiempo como el map mismo, y la fricción mata la motivación.

Exiled Exchange 2 colapsa ese flujo a una hotkey. Hovereás el item, presionás Ctrl+D, te aparece un panel con los listings filtrados ya por mods relevantes. Decidís si vale la pena listarlo o dropearlo. El tiempo entre "vi el item" y "tengo el precio" baja a 2-3 segundos.

## Diferenciación

Frente a poe.ninja (que es panorámico — qué pasa con la economía en general), Exiled Exchange 2 es transaccional — dame el precio de este item específico ahora. Son complementos, no competidores: usás EE2 mientras farmeás, poe.ninja en sesiones de planning.

Frente al trade site oficial directo, EE2 es la versión sin fricción: no abrís browser, no copiás manualmente, no perdés focus del juego. La trade-off es que cubre menos features avanzados (los stat-by-stat queries complejos siguen siendo más cómodos en el sitio).

## Para qué la usa la gente

**Decidir qué items vale la pena listar**: cuando termina un map y tenés 30 rares en el inventory, EE2 te dice cuáles tienen mercado real. Los que pegan precios bajos los dropeas; los que pegan precios decentes los listás.

**Price-check antes de comprar**: cuando estás considerando comprar un item, hover + Ctrl+D te dice el rango de precios real. Evitás overpay cuando el seller listó a precio inflado.

**Bulk exchange de currency**: el panel de bulk EE2 muestra ratios actuales de exchange directo desde el trade oficial. Útil para flippear monedas o convertir grandes cantidades sin tener que armar trade-by-trade manual.

**Validar drops endgame**: cuando dropea un unique o un rare con stats raros, el price-check te dice si es 5 Exalted o 5 Divine. Esa diferencia decide si seguís mapeando o paras a tradear.

**Investigar valor de uniques específicos**: cualquier item base + mod combination, EE2 lo busca contra listings activos. Si no hay listings, sabés que es niche; si hay 200, sabés que es common.

## Para quién NO es esta herramienta

Si jugás SSF, EE2 no aporta nada — no podés trade. Para HC SSF la herramienta es decorativa.

Si recién empezás trade y no entendés cómo funcionan los mods en items rare, EE2 te puede generar confianza falsa. Los precios sugeridos asumen que sabés qué mods son relevantes; si filtrás mal, los números van a estar off. Aprender el sistema de mods primero, después usar EE2 para acelerar.

## Cómo se usa en la práctica

1. Bajás EE2 desde el sitio oficial (`kvan7.github.io/Exiled-Exchange-2/`) o de GitHub Releases. Lo extraés y corrés el .exe (Windows) o ejecutable Linux. Arranca como overlay.
2. Configurás el `windowTitle` a "Path of Exile 2" en settings (importante para que el overlay enganche con el cliente correcto).
3. En PoE 2, hover sobre cualquier item → Ctrl+D (o el hotkey que configures). El panel de EE2 abre con los listings activos del item filtrados por mods relevantes.
4. Para bulk exchange: Alt+Shift+D (configurable) abre el panel de bulk con ratios de currency actuales.
5. Workflow típico: durante mapeo, hovereás items mientras lootean, Ctrl+D los dudosos, dropeás los basura. En town, bulk-exchange para convertir currency surplus.

## Limitaciones honestas

**Solo en inglés y solo Windows/Linux**. No hay versión macOS, ni localización al español. Para usuarios mac es bloqueador.

**El cliente del juego debe estar en inglés**. El parser de items que usa EE2 lee texto, así que si tu PoE 2 está en otro idioma no va a reconocer correctamente los mods.

**Puede romperse temporalmente con patches grandes**. Cuando GGG cambia formato de items o agrega keywords nuevos, EE2 a veces tarda días en updatearse. La comunidad reporta rápido en GitHub Issues, pero en patch day puede haber un ventana donde no funciona perfecto.

**No hay version oficial firmada**: Windows lo va a marcar como app desconocida. Lo abrís igual aceptando el SmartScreen, pero al usuario novato puede asustarle. Es legítimo (open source, código verificable), simplemente no firmado por costo.

**El antivirus a veces lo flagea**. Por leer eventos de teclado y comunicarse con el trade site, algunos AVs lo marcan como sospechoso. Falso positivo conocido — agregar exception manual.

## Cómo empezar

Bajás el ejecutable de la Releases page del GitHub. Lo descomprimís en cualquier carpeta (no necesita install). Lo corrés mientras tenés PoE 2 abierto. Configurás el windowTitle si jugás en otro idioma o cliente custom. La primera vez probá un item conocido (ej: un unique común como Headhunter equivalent en PoE 2) para validar que el price-check responde.

Cuando funciona, el aprendizaje es mínimo: hover + hotkey. Lo demás (bulk, advanced filters) lo descubrís a medida que lo necesités.
