---
title: "Trials Report"
description: "Stats especializados de Trials of Osiris en Destiny 2: pasajes flawless, matchup analysis y trends de armas PvP."
quickTake: "Si jugás Trials con ambición flawless, no podés competir sin esto. Saber qué fireteam te toca enfrente antes del round 1 es información asimétrica que cambia el matchup."
---

## Qué es

Trials Report es un sitio web especializado en Trials of Osiris, el modo PvP de fin de semana de Destiny 2. Free, web-only, monetizado por ads. Sin login obligatorio para queries básicas; opcional para tracking personal extendido. Activo desde el regreso de Trials a D2 en 2020.

Cubre stats de Trials específicamente: pasajes flawless por temporada, fireteam composition analysis, weapon usage trends en Trials, leaderboards globales, y la feature distintiva — **matchup tool** que te muestra el historial reciente del fireteam enemigo apenas el match empieza.

## Qué problema resuelve

Trials of Osiris es un modo de alto stakes (un loss a 3 ya rompe la flawless run). La asimetría de información cambia matches: si sabés que tu rival es un flawless veteran con 200+ pasajes, ajustás la estrategia (más pasivo, evitás trades 50/50). Si sabés que es rookie, presionás. Sin info, jugás ciego.

Trials Report resuelve eso pegando un toggle de "matchmaking history" que carga apenas Trials trackea el match. En 30 segundos sabés con quién estás jugando, qué armas usan, cuál es su K/D en Trials, y cuántas flawless tienen.

## Diferenciación

Frente a Destiny Tracker (que también tiene stats PvP), Trials Report es **especializado y profundo en Trials**: matchup tool en tiempo real, weapon usage filtrado por modo Trials específicamente, fireteam analysis. Destiny Tracker es más general; Trials Report es donde van los Trials sweats.

Frente a Raid Report (su sister tool), no compite — Raid Report cubre raids/dungeons, Trials Report cubre Trials. Mismo equipo o filosofía similar de "tool especializada que hace una cosa muy bien".

## Para qué la usa la gente

**Matchup analysis pre-game**: pegás Bungie IDs del fireteam enemigo (o usás la integración automática) y ves stats Trials del trío rival.

**Tracking de tu flawless run**: en una temporada, cuántas flawless cards llevás, win rate, mejores rounds.

**Weapon meta del weekend**: qué armas se están usando más en Trials esta temporada, cómo cambió desde el último patch.

**Fireteam composition leaderboards**: top fireteams del weekend, útil para identificar squads conocidos en LFG.

**Stalk de tu propio histórico**: cuántos pasajes flawless en tu carrera, qué armas usás más, qué mapas se te dan mejor.

## Para quién NO es esta herramienta

Si no jugás Trials of Osiris, este sitio es 100% irrelevante. Cubre solo ese modo.

Si jugás Trials casual (un par de matches por weekend, sin ambición flawless), el matchup tool tiene utility marginal — solo importa cuando los matches están parejos y quieres edge.

Si te molesta el "stalking" de oponentes, podés ocultar tu Bungie profile (Trials Report respeta esos opt-outs) — pero perdés la simetría: el rival puede ocultarse, vos también.

## Cómo se usa en la práctica

1. Antes del weekend, entrás a `trials.report` para revisar el meta de la última temporada y armas trending.
2. Empezás Trials. Apenas el match comienza, el sitio detecta tu fireteam (vía API) y carga matchup automáticamente si tenés tu profile vinculado.
3. Para lookup manual: pegás Bungie IDs del enemigo en la página `/team`. Ves K/D, flawless count, weapon usage de los tres.
4. Post-match, revisás detalle del round si querés analizar trades específicos.
5. Para tracking personal de la temporada: pestaña dedicada con cards flawless, pasajes lighthouse, etc.

## Limitaciones honestas

**API de Bungie no expone fireteam composition en tiempo real consistentemente**. Hay un delay (segundos a minutos) entre matchup y data disponible. En matches rápidos, podés acabar antes de tener el lookup.

**Profiles privados no aparecen**. Si los rivales hidearon su career, no podés stalkear nada. Justa privacy, pero asimétrica.

**Solo Trials**. No cubre Crucible regular, Iron Banner u otros PvP. Para esos, Destiny Tracker es la opción.

**Ads y sponsored CTAs**. La experiencia free es funcional pero el sitio empuja PRO Tier para "matchup faster" y stats extra.

**Información no es coaching**. Saber el K/D del rival no te enseña a posicionarte mejor. Para mejorar, tu propio gameplay y videos de creators (Mactics, etc.) rinden más.

## Cómo empezar

Entrá a `trials.report`, vinculá tu Bungie ID. El primer fin de semana de Trials después, el sitio te muestra automáticamente cada matchup. Probá lookup manual del fireteam enemigo después de un round duro y observá si la info hace sense con cómo jugaron. En 2-3 weekends ya integrás el flujo a tu rutina de Trials.
