---
title: "Trials Report"
description: "Stats especializados de Trials of Osiris en Destiny 2: pasajes flawless, matchup analysis y trends de armas PvP."
quickTake: "Si juegas Trials con ambición flawless, no puedes competir sin esto. Saber qué fireteam te toca enfrente antes del round 1 es información asimétrica que cambia el matchup."
---

## Qué es

Trials Report es un sitio web especializado en Trials of Osiris, el modo PvP de fin de semana de Destiny 2. Free, web-only, monetizado por ads. Sin login obligatorio para queries básicas; opcional para tracking personal extendido. Activo desde el regreso de Trials a D2 en 2020.

Cubre stats de Trials específicamente: pasajes flawless por temporada, fireteam composition analysis, weapon usage trends en Trials, leaderboards globales, y la feature distintiva — **matchup tool** que te muestra el historial reciente del fireteam enemigo apenas el match empieza.

## Qué problema resuelve

Trials of Osiris es un modo de alto stakes (un loss a 3 ya rompe la flawless run). La asimetría de información cambia matches: si sabes que tu rival es un flawless veteran con 200+ pasajes, ajustas la estrategia (más pasivo, evitas trades 50/50). Si sabes que es rookie, presionas. Sin info, juegas ciego.

Trials Report resuelve eso pegando un toggle de "matchmaking history" que carga apenas Trials trackea el match. En 30 segundos sabes con quién estás jugando, qué armas usan, cuál es su K/D en Trials, y cuántas flawless tienen.

## Diferenciación

Frente a Destiny Tracker (que también tiene stats PvP), Trials Report es **especializado y profundo en Trials**: matchup tool en tiempo real, weapon usage filtrado por modo Trials específicamente, fireteam analysis. Destiny Tracker es más general; Trials Report es donde van los Trials sweats.

Frente a Raid Report (su sister tool), no compite — Raid Report cubre raids/dungeons, Trials Report cubre Trials. Mismo equipo o filosofía similar de "tool especializada que hace una cosa muy bien".

## Para qué la usa la gente

**Matchup analysis pre-game**: pegas Bungie IDs del fireteam enemigo (o usas la integración automática) y ves stats Trials del trío rival.

**Tracking de tu flawless run**: en una temporada, cuántas flawless cards llevas, win rate, mejores rounds.

**Weapon meta del weekend**: qué armas se están usando más en Trials esta temporada, cómo cambió desde el último patch.

**Fireteam composition leaderboards**: top fireteams del weekend, útil para identificar squads conocidos en LFG.

**Stalk de tu propio histórico**: cuántos pasajes flawless en tu carrera, qué armas usas más, qué mapas se te dan mejor.

## Para quién NO es esta herramienta

Si no juegas Trials of Osiris, este sitio es 100% irrelevante. Cubre solo ese modo.

Si juegas Trials casual (un par de matches por weekend, sin ambición flawless), el matchup tool tiene utility marginal — solo importa cuando los matches están parejos y quieres edge.

Si te molesta el "stalking" de oponentes, puedes ocultar tu Bungie profile (Trials Report respeta esos opt-outs) — pero pierdes la simetría: el rival puede ocultarse, tú también.

## Cómo se usa en la práctica

1. Antes del weekend, entras a `trials.report` para revisar el meta de la última temporada y armas trending.
2. Empiezas Trials. Apenas el match comienza, el sitio detecta tu fireteam (vía API) y carga matchup automáticamente si tienes tu profile vinculado.
3. Para lookup manual: pegas Bungie IDs del enemigo en la página `/team`. Ves K/D, flawless count, weapon usage de los tres.
4. Post-match, revisas detalle del round si quieres analizar trades específicos.
5. Para tracking personal de la temporada: pestaña dedicada con cards flawless, pasajes lighthouse, etc.

## Limitaciones honestas

**API de Bungie no expone fireteam composition en tiempo real consistentemente**. Hay un delay (segundos a minutos) entre matchup y data disponible. En matches rápidos, puedes acabar antes de tener el lookup.

**Profiles privados no aparecen**. Si los rivales hidearon su career, no puedes stalkear nada. Justa privacy, pero asimétrica.

**Solo Trials**. No cubre Crucible regular, Iron Banner u otros PvP. Para esos, Destiny Tracker es la opción.

**Ads y sponsored CTAs**. La experiencia free es funcional pero el sitio empuja PRO Tier para "matchup faster" y stats extra.

**Información no es coaching**. Saber el K/D del rival no te enseña a posicionarte mejor. Para mejorar, tu propio gameplay y videos de creators (Mactics, etc.) rinden más.

## Cómo empezar

Entra a `trials.report`, vincula tu Bungie ID. El primer fin de semana de Trials después, el sitio te muestra automáticamente cada matchup. Prueba lookup manual del fireteam enemigo después de un round duro y observa si la info hace sense con cómo jugaron. En 2-3 weekends ya integras el flujo a tu rutina de Trials.
