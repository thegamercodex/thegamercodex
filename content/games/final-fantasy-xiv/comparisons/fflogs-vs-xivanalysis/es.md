---
title: "FFLogs vs XIVAnalysis — cuál parser usar y para qué"
description: "FFLogs es el archivo público con rankings; XIVAnalysis es el intérprete automático que te dice qué mejorar. Comparativa por casos de uso reales."
---

FFLogs y XIVAnalysis son las dos herramientas de análisis de combate más usadas en FFXIV, pero resuelven problemas distintos. Confundirlas es común: ambos toman logs de combat, pero la utilidad práctica diverge drásticamente. Esta comparativa apunta a clarificar cuándo usar cada una.

## El rol de cada una en el ecosistema

**FFLogs** es el repositorio público de logs. Tu log se sube acá (vía ACT + FFLogs Uploader), se almacena, y se hace visible en rankings cross-server. Es el archivo histórico de la escena de raid de FFXIV: cualquier kill de Savage o Ultimate tiene su log subible a FFLogs, y el sitio normaliza eso en percentiles competitivos. Operado por Warcraft Logs LLC.

**XIVAnalysis** es un layer encima de FFLogs. Toma el link de un fight en FFLogs, lo procesa client-side, y devuelve un análisis automático con sugerencias por player: "perdiste 3 GCDs de buff window", "tu opener tiene timing X off", "no usaste Embolden alineado con tu party comp". Sin login, gratis, open source.

La metáfora más clara: **FFLogs es el archivo médico; XIVAnalysis es el doctor que lee el archivo y te dice qué hacer**. Ambos son necesarios.

## Cuándo dominate FFLogs

**Ranking competitivo**. FFLogs tiene la única métrica universal de "qué tan bien jugaste comparado al resto". Si quieres saber si tu BLM en M11S está al nivel del mundo, FFLogs te da el percentil. XIVAnalysis no hace rankings — solo te dice si seguiste la rotación canónica.

**Recruitment y scout**. Cuando un static lead evalúa a un applicante, pide su FFLogs link, no su XIVAnalysis. El perfil público muestra consistency, qué bosses tiene cleared, qué jobs juega y a qué nivel. XIVAnalysis no almacena perfiles ni historial — es per-log.

**Análisis de buff alignment a nivel party**. FFLogs muestra la timeline completa con buffs de los 8 players visibles simultáneamente. Si quieres ver si tu Embolden estuvo alineado con el Trick Attack del NIN, FFLogs te lo muestra side-by-side. XIVAnalysis se enfoca por player; el alignment cross-party está menos desarrollado.

**Investigación de fight strats**. Quieres ver cómo killearon M12S los top groups del world race. Vas a FFLogs, filtras top 10 logs, ves su cast sequence completa y deduces strats. Esa función es FFLogs-exclusiva.

## Cuándo domina XIVAnalysis

**Feedback accionable en lenguaje plano**. FFLogs te muestra que tu DPS fue p45 — XIVAnalysis te dice por qué. La diferencia entre "soy mediocre" y "perdí 4 GCDs de Manafication antes de Embolden" es enorme para improving.

**Aprendizaje sin ser theorycrafter**. Para players que recién entran a Savage, leer un FFLogs raw es overwhelming. XIVAnalysis traduce eso a "haz X, no hagas Y", priorizado por severity. Acelera el learning curve dramáticamente.

**Coaching asíncrono**. Mentor te manda link de XIVAnalysis, te dice "mira suggestions 2 y 4". Más rápido que "abre FFLogs, ve a damage done tab, filtra por X, compáralo con Y" que requeriría un mentor experto.

**Validación rápida de nueva rotación**. Pruebas una variante del opener. XIVAnalysis te dice si rompiste las reglas básicas. FFLogs te muestra el resultado en DPS, pero no si fue por la rotación o por circunstancia.

## El flujo combinado real

Un raider serio usa ambos en secuencia:

1. **Pull en Savage** → ACT captura el log → se sube a FFLogs.
2. **FFLogs**: Revisas el percentil para ubicarte. ¿p30? Hay mucho que mejorar. ¿p85? Mostly fine, hay tweaks finos.
3. **XIVAnalysis**: pegas el link de FFLogs, ves las suggestions priorizadas. Implementás las 2-3 más impactantes para el próximo pull.
4. **Vuelta al pull** → next log → repetir.

FFLogs es el medidor; XIVAnalysis es el coach. Confundir uno por el otro es perderse la mitad del beneficio.

## Limitaciones honestas de cada uno

**FFLogs** tiene un Free tier suficiente para uso casual pero los filtros avanzados (cross-region search, replay, comparación detallada) requieren Premium ($4/mes). Para raiders consistentes se justifica; para casual no es necesario. Además, FFLogs depende de ACT que es Windows-only, y la cultura de parse puede ser tóxica en algunas comunidades.

**XIVAnalysis** depende de FFLogs (no se puede usar standalone) y la cobertura per job es desigual: jobs populares tienen módulos detallados, jobs nicho tienen menos. Tras un job rework grande, el módulo correspondiente puede tardar semanas en actualizarse. Y las sugerencias son generalistas — no entienden contexto de fight (un GCD perdido por movimiento forzado se reporta igual que uno por error).

## El veredicto editorial

No es una elección binaria. Si raideas Savage o Ultimate y quieres mejorar, **necesitas ambos**. La pregunta correcta no es "cuál uso", sino "para qué pregunta voy a cada uno":

- "¿Cómo estoy comparado al mundo?" → FFLogs.
- "¿Por qué estoy en ese percentil?" → XIVAnalysis.
- "¿Quién juega a buen nivel para invitar al static?" → FFLogs.
- "¿Cómo mejoro mi próximo pull?" → XIVAnalysis.

El stack moderno del raider es: ACT (captura) → FFLogs (archivo + ranking) → XIVAnalysis (feedback). Las tres son piezas distintas del mismo workflow.
