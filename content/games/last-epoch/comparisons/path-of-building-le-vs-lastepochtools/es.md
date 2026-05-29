---
title: Path of Building for Last Epoch vs Last Epoch Tools planner — qué planner usar
description: Dos planners de Last Epoch con propuestas opuestas. PoB-LE prioriza profundidad de simulación; LE Tools prioriza visualización y community sharing. Theorycrafters serios usan los dos.
---

LE tiene dos planners principales y la pregunta "cuál uso" depende totalmente de qué estás haciendo. PoB for Last Epoch y el planner integrado de Last Epoch Tools resuelven problemas distintos — no compiten head-to-head.

## Simulation depth vs visualización

PoB-LE (lastepochplanner.com o desktop) hereda el motor de cálculo de Path of Building original — el planner referencia para theorycraft de ARPG. Para LE significa que simula con precision real:

- Shock stacks con todos sus multipliers.
- Ignite/bleed stacking con duration math correcto.
- Conditional damage (vs full life, while channeling, on crit).
- Defense layers calculados con el order de operations correcto.

LE Tools planner aproxima estos cálculos. Para 90% de builds la aproximación es suficiente — los números finales son close-enough. Para el 10% donde la diferencia importa (ailment-stacking builds, conditional damage, ward defense optimization), PoB es la única opción honesta.

## UI y curva de aprendizaje

LE Tools planner es desktop-first pero web-amigable, con UI clara y self-explanatory. Drag/drop gear, click skills para abrir tree, stats visible. Para newcomer, abre y empieza a iterar en 2 minutos.

PoB-LE hereda layout de PoB PoE — denso, con paneles que asumen que conocés el flow. Para player nunca expuesto a PoB, hay curva real de 30-60 minutos antes de feeling productive. Para player que ya usaba PoB en PoE, es familiar instantly.

## Share y collaboration

LE Tools genera URL única por build. Pegas en Discord/Reddit/forum y otro user abre instantly. Ideal para community discussion.

PoB usa "build codes" — strings largos (~500-1000 chars) que pegas en chat. Funciona pero menos amigable. URLs ganan en discoverability y mobile.

## Offline vs always-online

PoB-LE desktop corre 100% offline. Si tu internet cae, sigues iterando builds.

LE Tools es web-only. Sin internet, no puedes acceder ni a tus builds guardados. Para players con conexión spotty o que viajan, PoB desktop es ventaja real.

## Cuándo gana cada uno

| Caso de uso | Ganador | Por qué |
|---|---|---|
| DPS simulation exacto | PoB-LE | Engine hereda precision de PoB PoE |
| Compare 2 items con delta | PoB-LE | Swap instantly y ves delta per stat |
| Share via URL en chat | LE Tools | URL única vs build code largo |
| Iteración visual rápida | LE Tools | UI más amigable, drag/drop |
| Funciona offline | PoB-LE | Desktop binary self-contained |
| Newcomer a planners | LE Tools | Curva de aprendizaje suave |
| Validate claims de creators | PoB-LE | Recompute sus números desde build code |

## La recomendación combinada

Para player intermedio/avanzado: **LE Tools para draft + PoB para validar**. Iteras visual en LE Tools porque es rápido, después portás el build a PoB cuando necesitas validar números o decidir gastar gold en crafting.

Para newcomer: LE Tools suficiente. PoB es overkill mientras estés aprendiendo mecánicas. Cuando llegues a endgame y empieces a min-max items específicos, ahí PoB empieza a tener payoff.

Para theorycrafter pure: PoB primero. La UI es worth la curva de aprendizaje porque la precision es lo único que importa en theorycraft serio.
