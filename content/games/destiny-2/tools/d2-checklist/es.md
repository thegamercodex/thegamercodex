---
title: "D2 Checklist"
description: "Tracker exhaustivo de checklists semanales, milestones y progresión por personaje en Destiny 2."
quickTake: "El tracker para completionists obsesivos. Cubre cada checklist que Bungie expone vía API y unas cuantas más derivadas. Funcional pero feo — la priorida es coverage, no estética."
---

## Qué es

D2 Checklist es un tracker open-source de progresión semanal en Destiny 2. Mantenido por jgcoroneo en GitHub bajo licencia MIT, free, monetizado solo por donaciones opcionales. Activo desde 2018.

Su propuesta es ser **exhaustivo**: si Bungie expone un checklist en su API, D2 Checklist lo lista. Cubre milestones semanales (Nightfall, Empire Hunts, Crucible weekly), por-character progress, ritual ranks (Crucible Valor, Vanguard rank, Trials passages), seasonal challenges, weekly bounty status — todo en una página por personaje.

## Qué problema resuelve

Cuando juegas múltiples personajes (típico para los seasonal grindes y power leveling), saber qué hizo cada uno esta semana se vuelve complicado. ¿Hice el Nightfall en mi Hunter? ¿La Warlock tiene los milestones de Vanguard? Sin tracker, abres el juego y revisas character por character, perdiendo tiempo.

D2 Checklist te da los tres personajes lado-a-lado con cada checklist disponible y su estado. En 30 segundos sabes qué te falta en cada toon, planificas qué activity hacer y con qué character.

## Diferenciación

Frente a Braytech (su alternativa más directa), D2 Checklist gana en **exhaustividad y comparativa multi-character**. Braytech tiene mejor UI y más cobertura editorial (vendors, triumphs filtrados); D2 Checklist tiene mejor "audit completo de las 3 chars en una sola pantalla". Si juegas main solo, Braytech es más cómodo. Si trifecteas semanalmente, D2 Checklist gana.

Frente a la app Companion oficial, D2 Checklist gana en cobertura de checklists derivados que la oficial no expone. La oficial gana en integración con Companion features (Fireteam Finder, etc.).

## Para qué la usa la gente

**Audit semanal de los 3 personajes**: qué milestones, bounties y challenges hizo cada toon. Útil para no repetir y maximizar pinnacle drops.

**Tracking de seasonal challenges**: qué challenges ya completaste, cuáles están por completar, requirements de cada uno.

**Progress de ritual ranks**: Crucible Valor / Vanguard / Gambit / Trials passages — todos visibles por character con XP needed para next rank.

**Lost sectors y exotic farm tracking**: hoy qué LS está, qué exotic dropea, en qué character lo farmeaste.

**Vendor refresh weekly**: cuándo refresca Banshee, cuándo Xur llega, cuándo el reset semanal pinea cosas.

## Para quién NO es esta herramienta

Si juegas un solo character casual, Braytech rinde más por mejor UI con menor noise. D2 Checklist es overkill cuando no hay paralelismo.

Si te molestan las UIs densas/feas, te frustras. D2 Checklist no apuesta a estética; es funcional al máximo.

Si tu interés primario es lore, builds o weapon meta, este sitio no aporta — está enfocado en progression y completionism.

## Cómo se usa en la práctica

1. Entras a `d2checklist.com`. Login con Bungie OAuth (obligatorio para data personal).
2. La página principal lista tus 3 personajes lado-a-lado con grilla de checklists semanales.
3. Filtras por "incomplete" para ver solo lo que falta. Pinpoint qué activity hacer.
4. Para detalle por character: click en uno y ves su progreso completo (ranks, challenges, bounties).
5. Reset semanal (martes 10am PT): la página se actualiza con la nueva rotación.

## Limitaciones honestas

**Diseño funcional pero feo**. La UI no es Modrinth ni Mobalytics — es una grilla densa con poca jerarquía visual. Espera learning curve de "dónde está cada cosa".

**Mobile experience pobre**. La densidad de info no escala bien a pantalla chica. En desktop, navegable; en mobile, a duras penas.

**Algunos checklists pueden estar desactualizados**. Cuando Bungie agrega un nuevo seasonal challenge type, D2 Checklist puede tardar días en mapearlo. Verifica contra el juego cuando estés cerca de un milestone clave.

**Inglés solamente**. Sin localización a español.

**No hay app móvil**. Solo web responsive (mediocremente).

**Open-source pero comunidad chica**. Solo el dev primario aporta — riesgo de continuidad si abandona el proyecto.

## Cómo empezar

Entra a `d2checklist.com`, login con Bungie OAuth. Apenas carga, mira los 3 characters lado-a-lado y identificá qué milestone te falta en cada uno. Prueba el filtro "incomplete" para ver solo qué te falta. En 5 minutos ya tienes visibility sobre semanas que antes hacías a ciegas.
