---
title: OSRS Wiki Real-time Prices
description: Los precios en tiempo real del Grand Exchange del OSRS Wiki, mantenidos por Weirdgloop. Los datos son crowd-sourced desde jugadores que usan RuneLite, dando precios de compra y venta casi en vivo con volúmenes.
quickTake: Es el feed de precios canónico de OSRS, gratuito y abierto, del que se alimentan casi todas las demás tools. No es una suite de flipping, es la fuente de la verdad sobre cuánto vale cada cosa.
---

## Qué es

OSRS Wiki Real-time Prices es el sistema de precios en tiempo real del Grand Exchange que mantiene el OSRS Wiki, operado por Weirdgloop. Los precios son crowd-sourced: jugadores que corren RuneLite envían los datos de sus transacciones, lo que da precios de compra y venta casi en vivo junto con volúmenes negociados. Expone una API pública y gratuita con endpoints `/latest`, `/5m`, `/1h` y `/timeseries`, además de páginas de navegación y gráficos simples por ítem.

No es una suite de flipping. Es la fuente de datos autoritativa sobre precios, la misma que alimenta a muchas otras herramientas —incluidas GE Tracker y los overlays de precio del propio RuneLite.

## Qué problema resuelve

Cualquier decisión económica en OSRS necesita un dato de partida confiable: cuánto vale un ítem ahora mismo y cuánto se está negociando. Este servicio resuelve eso entregando un feed de precios en tiempo real, gratuito y sin rate limit estricto, sobre el que se puede consultar o construir. Es el cimiento: las suites de flipping no inventan sus precios, los toman de datos de este tipo.

## Diferenciación

De las tres herramientas de economía que listamos, esta es la base. **OSRS Wiki Real-time Prices** es el feed crudo, autoritativo y abierto: te dice cuánto vale cada ítem, pero no te recomienda qué flipear. **OSRS Exchange** toma datos de este estilo y agrega un flip finder gratuito orientado a la acción. **GE Tracker** construye una suite completa encima —margen, alertas, app— pero esconde lo bueno tras una suscripción. Si quieres datos puros y confiables sin nadie interpretándolos por ti, este es el lugar. Las otras dos son capas de conveniencia sobre el mismo tipo de feed.

## Para qué la usa la gente

- **Consultar el precio real** de un ítem y su volumen, directo de la fuente.
- **Construir herramientas propias** usando la API gratuita y abierta.
- **Verificar precios** que muestran otras tools, para detectar datos desactualizados.
- **Mirar gráficos simples** de la evolución de precio de un ítem en el tiempo.

## Para quién NO es esta herramienta

No es para quien quiere que una herramienta le diga directamente qué flipear con márgenes calculados y alertas: para eso están OSRS Exchange o GE Tracker. Tampoco es para quien busca una interfaz pulida de merchanting con dashboards y registro de profit. Es deliberadamente simple: datos y poco más. Y no aplica a iron man puros, que no usan el Grand Exchange.

## Cómo se usa en la práctica

1. Entra a prices.runescape.wiki y busca el ítem que te interesa.
2. Mira su precio de compra (high) y venta (low) actuales, el timestamp y el volumen.
3. Revisa el gráfico para ver la tendencia reciente.
4. Si desarrollas, consulta los endpoints `/latest`, `/5m` o `/1h` de la API para traer los datos a tu propia herramienta.
5. Cruza el dato con otra fuente si el ítem tiene bajo volumen y el precio parece dudoso.

## Limitaciones honestas

- **No es una suite de flipping.** No calcula márgenes con tax, no da alertas ni recomienda flips. Solo entrega datos.
- **Los precios pueden no ser 100% exactos.** Al ser crowd-sourced desde RuneLite, en ítems de bajo volumen el dato puede estar desactualizado.
- **No es oficial de Jagex.** Lo mantiene Weirdgloop, la organización detrás del Wiki, no Jagex.
- **Es un proyecto comunitario.** Puede tener downtime ocasional y los maintainers advierten que los precios pueden no ser perfectos.

## Cómo empezar

Ve a [prices.runescape.wiki](https://prices.runescape.wiki) y busca cualquier ítem para ver su precio en vivo y su gráfico. Si quieres construir algo encima, la documentación de la API está enlazada desde el mismo sitio y los endpoints son gratuitos. Si lo que buscas es que una herramienta te recomiende flips, mira OSRS Exchange (gratis) o GE Tracker (freemium) en su lugar.
