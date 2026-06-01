---
title: "Nightreign Map Router"
description: "Web app open-source que identifica el seed actual del mapa de Nightreign y sugiere rutas óptimas según Nightlord target y composición de team."
quickTake: "Si optimizas runs de Expedition, conocer el map seed antes de moverte cambia el meta — Map Router lo identifica y sugiere prioridades por landmark."
---

## Qué es

Nightreign Map Router es una web app open-source mantenida por NikVince. Repo en `github.com/NikVince/nightreign-map-router`. Gratis, sin login.

Cubre los 320 map patterns de Nightreign + adiciones del DLC. Identifica el seed actual de tu mapa (vía screenshot recognition o seed input manual) y sugiere rutas óptimas según target Nightlord y team comp.

## Qué problema resuelve

Nightreign tiene 320 map patterns distintos, cada uno con diferente layout de loot, landmarks y enemy spawns. Sin saber qué seed estas jugando, las decisiones de routing son ciegas. Map Router resuelve identificar seed rápido y sugiere prioridades.

Para serious players, conocer el seed multiplica el value por Expedition: vas directo a los landmarks que dropean los relics que necesitas vs explorar a ciegas.

## Para qué la usa la gente

**Identificación de seed**: ver qué pattern estas jugando antes de tomar decisiones.

**Routing óptimo por Nightlord**: dado tu target, qué landmarks priorizar.

**Team comp adaptation**: sugiere rutas distintas según qué Nightfarers están en party.

**Speedrun planning**: para attempts serios de speedrun, conocer seed es crítico.

**Datos de community**: agregaciones de qué seeds rinden mejor.

## Para quién NO es esta herramienta

Si juegas casual y no optimizas runs, es overkill.

Si solo te interesa enjoy el game blind, el seed knowledge "rompe" la experiencia.

Si esperas mobile app, no existe — solo web.

## Cómo se usa en la práctica

1. Visita `github.com/NikVince/nightreign-map-router` y abre el demo (o instala localmente).
2. Empieza una Expedition.
3. Identifica seed: subí un screenshot del mapa inicial o tipea seed code visible in-game.
4. Define tu Nightlord target y party comp.
5. La app sugiere routing prioritizado.
6. Sigue el routing durante los 3 días.

## Limitaciones honestas

**No oficial**: data extracted by community; algunos seeds pueden tener variations no documentadas.

**Setup técnico inicial**: la versión "live" puede no estar siempre disponible; setup local requiere npm install.

**No mobile**: web only.

**DLC coverage incremental**: Forsaken Hollows seeds tardaron en mapearse completamente.

**Curva inicial**: entender qué significa cada landmark requiere familiarity con Nightreign.

## Cómo empezar

1. Visita el repo en GitHub.
2. Si hay versión live, usala; si no, sigue el README para correr local.
3. Empieza con una Expedition simple para probar identification.
4. Una vez funcione, integralo a tu workflow regular.
5. Considera contribuir al repo si encuentras bugs o data missing.
