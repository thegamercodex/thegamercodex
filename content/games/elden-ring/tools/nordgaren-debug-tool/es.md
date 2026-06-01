---
title: "Elden Ring Debug Tool"
description: "Tool de Nordgaren para Elden Ring offline: inspect runtime values, spawn items, teleport, modificar atributos y testing de mods sin restricciones."
quickTake: "Si modeas Elden Ring o necesitas testear builds extremas en NG+++, este tool acelera todo. Para uso normal del juego, sobra — está pensado para testing y debugging."
---

## Qué es

Elden Ring Debug Tool es una aplicación standalone desarrollada por Nordgaren (modder reconocido de la comunidad Souls). Vive en `github.com/Nordgaren/Elden-Ring-Debug-Tool` bajo licencia open-source. Es un cheat-engine/debug tool especializado en Elden Ring, exclusivamente para uso offline.

Lanza el juego en offline mode (sin EAC), se conecta al proceso y expone una UI con tabs para inspeccionar y modificar el game state en runtime.

## Qué problema resuelve

Crear mods o testear builds extremas requiere iteración rápida: cambiar stats, teleport entre áreas, spawn de items para testing, ver values internos. Hacerlo "legítimamente" implicaría grinding horas de juego para conseguir runes/Larval Tears.

Nordgaren Debug Tool resuelve esto exponiendo el game state directamente: clicks para teletransportar, sliders para HP/runes/levels, dropdowns para spawn de items.

También resuelve el problema de testing de mods: si estas desarrollando un mod, podes verificar que el item nuevo aparezca correctamente sin tener que jugar hasta donde dropea.

## Para qué la usa la gente

**Testing de mods en desarrollo**: spawn de items del mod para verificar que cargan correctamente.

**Verificación de runtime values**: leer atributos internos del personaje y enemies para entender mechanics.

**Speedrun routing**: testing de routes alternativos en NG sin invertir tiempo en setup.

**Cheat para fun runs**: para jugar offline con builds outlandish que no son legítimas (HP infinito, todos los items, etc.).

**Validar fixes**: cuando reportas un bug, podes recrear las condiciones rápidamente.

## Para quién NO es esta herramienta

Si quieres mantener tu personaje compatible con online vanilla, no lo uses — usar el tool te "taintea" el save.

Si juegas solo legitimately y no modeas, no aporta nada — está pensado para casos técnicos.

Si te incomoda eticamente usar cheat tools (incluso solo offline), no lo uses.

Si juegas en console, no aplica — PC only.

## Cómo se usa en la práctica

1. Baja la última release de `github.com/Nordgaren/Elden-Ring-Debug-Tool/releases`.
2. Lanza el juego en offline mode primero (puede ser vía Mod Engine 2 o EAC bypass).
3. Lanza el Debug Tool.
4. El tool detecta el proceso y se attachea automáticamente.
5. Usa tabs (Player, Items, Bosses, Map, Network) para inspeccionar/modificar.
6. Cierra el tool antes de salir del juego para evitar crashes.

## Limitaciones honestas

**Online incompatible**: usar el tool con EAC activo es violación de TOS y banneable. El tool se diseñó solo para offline.

**Save tainted**: una vez usado, tu save queda marcado y no es compatible con vanilla online sin riesgo.

**Bugs ocasionales con patches nuevos**: cuando Bandai patchea ER, el tool puede fallar hasta que Nordgaren actualice (usualmente 1-2 semanas).

**No es mod manager**: el tool no carga mods; solo modifica runtime. Para mods reales necesitas Mod Engine 2.

**UI técnica**: dropdowns con IDs hex, tablas con field names internos. No es user-friendly.

## Cómo empezar

1. Asegúrate que el juego está en offline mode (Mod Engine 2 fuerza esto, o configura EAC bypass).
2. Baja el tool desde `github.com/Nordgaren/Elden-Ring-Debug-Tool/releases`.
3. Extrae y lanza el ejecutable.
4. Empieza con el juego ya cargado en un save offline-only.
5. Explora tabs de forma read-only primero para entender qué expone.
