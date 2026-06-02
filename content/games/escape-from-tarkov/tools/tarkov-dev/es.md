---
title: Tarkov.dev
description: Base de datos comunitaria open-source de Escape from Tarkov con items, traders, flea market, mapas, hideout y una API pública gratuita.
quickTake: Si solo vas a abrir un sitio mientras juegas Tarkov, que sea tarkov.dev. Es la fuente de la que beben las demás tools — incluyendo TarkovTracker y Tarkov Advisor — y la única que cubre todo el ecosistema sin ads ni paywall.
---

## Qué es

Tarkov.dev es una web app open-source mantenida por el colectivo The Hideout que centraliza toda la data jugable de Escape from Tarkov: catálogo de items con stats completos, recipes del hideout, tasks por trader, mapas interactivos con marcadores de spawn y extract, ammo chart y precios del flea market actualizados en tiempo real. El proyecto vive en GitHub bajo licencia GPL-3.0 y expone una API GraphQL pública gratuita que alimenta a la mayoría de las demás tools comunitarias.

## Qué problema resuelve

Tarkov esconde casi toda su información jugable en menús crípticos o directamente la oculta. Saber cuánto vende un item al trader óptimo, qué materiales pide un módulo de hideout o dónde spawnea una llave en Customs requiere o memorización extrema o salir del juego a buscar en wikis. Tarkov.dev concentra esa información en una sola web con search rápido y deeplinks entre datos relacionados.

## Diferenciación

Frente al wiki de Fandom (lento, plagado de ads, datos viejos) y el wiki migrado a wiki.gg (mejor pero centrado en lore), tarkov.dev se enfoca en datos jugables actualizables vía la API. Cuando sale un parche, los precios del flea se actualizan en horas — los wikis tardan semanas. Y a diferencia de TarkovTracker o Tarkov Advisor (especializados en quest tracking), tarkov.dev es read-only: no maneja tu progreso, solo te da los datos crudos para que decidas.

## Para qué la usa la gente

- **Buscar el precio de venta óptimo** de un item recién lootado para decidir si lo vendes al trader, al flea o lo guardas para barter.
- **Ver requisitos de tasks** específicas antes de empezar la quest, para no llegar al final y descubrir que falta un wrench FIR.
- **Planificar upgrades del hideout** con la lista exacta de materiales necesarios y el costo total en roubles.
- **Consultar el ammo chart** comparando penetración por armor class antes de elegir munición para una raid de tiro a media distancia.
- **Mirar mapas con filtros** de loot, extracts, llaves y spawn points para preparar una run sin gastar horas memorizando.

## Para quién NO es esta herramienta

Si necesitas tracking activo de tu progreso de tasks y hideout (qué te falta, qué ya hiciste), tarkov.dev no maneja state — usa TarkovTracker o Tarkov Advisor para eso. Y si quieres interfaces más opinadas con tier lists, builds curated o guides editoriales, KappaGuide y TarkovHead son alternativas más opinionated.

## Cómo se usa en la práctica

1. Abre tarkov.dev en una pestaña dedicada mientras juegas.
2. Usa el search global (top bar) para encontrar cualquier item, task, trader o módulo.
3. En la página de item ves precio actual de venta a cada trader, valor en el flea, recetas que lo usan y tasks que lo piden.
4. La sección Maps tiene mapas interactivos con filtros — marca el layer que necesitas (keys, extracts, loot).
5. La API GraphQL en api.tarkov.dev es gratuita y abierta si quieres construir tu propia tool encima.

## Limitaciones honestas

- **Solo en inglés**: no hay localización oficial. Los nombres de items aparecen tal como están en el juego.
- **No tracking personal**: el sitio es read-only. Cualquier progreso de quest o hideout lo manejas en otra tool.
- **Mapas menos pulidos que Map Genie**: tienen lo esencial pero la UX de filtros y marcadores es menos refinada que la del competidor premium.
- **Datos dependen de comunidad**: cuando un parche cambia mucho, hay un lag de horas a días mientras la comunidad actualiza los entries.

## Cómo empezar

Abre tarkov.dev en el browser — no requiere login ni instalación. Si quieres contribuir con datos o reportar bugs, el repo público en github.com/the-hideout/tarkov-dev acepta PRs y tiene un Discord activo para discusión de roadmap.
