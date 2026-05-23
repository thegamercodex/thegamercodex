---
title: Palworld Base Planner
description: Planificador web que te deja simular la dotación de Pals en cada una de tus bases y validar que cubres todas las work suitabilities necesarias.
quickTake: La única tool decente para planear "qué Pals van en qué base". Te dice si tu mix actual deja gaps en mining, lumbering o transporting antes de perder horas descubriéndolo en el juego.
---

## Qué es

Palworld Base Planner (palworld-base.eldritchtools.com) es una web app open source mantenida por Mysidian del proyecto Eldritch Tools. Te deja agregar tus bases, asignar Pals a cada una, y la tool calcula automáticamente la cobertura de work suitability: cuáles niveles tenes en mining, lumbering, transporting, kindling, watering, gathering, medicine production, cooling, planting, etc. Free, open source, sin login (estado se guarda en localStorage).

## Qué problema resuelve

Palworld te deja tener hasta 3 bases simultáneas, cada una con 15 Pals máximo. La pregunta no obvia es: cuál combo de Pals optimiza la cobertura sin desperdiciar slots? Si pones 4 Pals con Mining Lv 3, solo uno trabaja a la vez — los otros 3 están parados en stations vacías mientras tu base de mining produce 1/4 de lo que podría. El planner te muestra estos overlaps antes de armarlos.

## Diferenciación

No hay competencia real en este nicho. Otros calculators cubren breeding o ubicación de Pals, pero "planificar qué Pals van en qué base con qué stations" solo lo resuelve esta tool. La diferenciación es: existe vs no existe.

## Para qué la usa la gente

- **Planificar dotación de cada base**: una de mining, otra de lumber y cooking, etc.
- **Validar cobertura antes de breeding**: confirma qué work suitabilities te faltan y prioriza qué Pals criar.
- **Optimizar overlap**: detectar Pals duplicados en habilidades y rotar a otra base.
- **Sharing de setups**: el estado se exporta a JSON para compartir con tu grupo de coop.

## Para quién NO es esta herramienta

Si solo tienes una base con 10 Pals random y no te importa la eficiencia, es overkill. Esta tool brilla cuando estás optimizando seriamente o cuando coordinas múltiples bases en multiplayer.

## Cómo se usa en la práctica

1. Entras a palworld-base.eldritchtools.com.
2. Click en "Add Base" para crear una base.
3. Arrastras Pals desde el sidebar al slot de la base.
4. La tool muestra la cobertura por work suitability con barras visuales — verde = cubierto, rojo = gap.
5. Iteras: cambias Pals, ves el impacto en tiempo real.
6. Para guardar/compartir, exportás el estado como JSON.

## Limitaciones honestas

- **Solo work suitability**: no calcula stats de combate, breeding ni passive skills — eso lo hacen otras tools.
- **No considera positioning físico**: te dice "tenes lo necesario para mining", no "este Pal va a llegar caminando hasta el mining station". Algunas bases con stations spread out tienen problemas que el planner no detecta.
- **localStorage**: si cambias de browser o limpias storage, perdes el plan.
- **Sin layer de tier S/A/B/C de Pals nuevos**: el planner se actualizó pero algunas decisiones requieren consultarlo cruzado con Palworld.gg.

## Cómo empezar

Abrir palworld-base.eldritchtools.com. Crear primera base, arrastrar Pals que tengas, ver la matriz de coverage. En 5 minutos ya descubris qué work suitabilities tienes cubiertas en exceso y cuáles te faltan. Plan obligatorio antes de cada sesión seria de breeding o de armar una base nueva.
