---
title: BattleMetrics vs Just-Wiped — qué tool de servers usar
description: BattleMetrics y Just-Wiped resuelven cosas distintas en el mundo de servers de Rust. Una para tracking y admin, la otra para wipe discovery.
---

Las dos tools mainstream para servers de Rust son BattleMetrics y Just-Wiped. Pero no compiten directo — cubren necesidades distintas. Just-Wiped es server browser focused en wipes frescos. BattleMetrics es plataforma de tracking, alertas y RCON. Esta comparativa es para clarificar cuándo usar cuál.

## Cómo se sienten

**Just-Wiped** es minimalista: home page con filters arriba (Wiped in last 1h/24h/week, tag, región), lista de servers debajo. Click en server, ver detalles, joinear. Para alguien que quiere wipe fresco en force wipe day, fluye en 30 segundos.

**BattleMetrics** es plataforma más densa: dashboard con server list, sección de player tracking, alertas, RCON, history. Más features pero más overhead — requires registrar cuenta y aprender el flow.

## Lo que solo cubre uno

**Solo Just-Wiped**:
- Filter por wipe schedule (weekly Tuesdays, biweekly, etc.) como first-class option.
- Browser ultra-rápido sin login para uso casual.
- Vista por defecto enfocada en wipes recientes.

**Solo BattleMetrics**:
- Watch lists de players específicos con alertas push/email cuando conectan.
- Group tracking — trackear clans enteros con players relacionados.
- RCON remoto desde browser/mobile.
- History de sessions y patterns de juego.
- Alertas configurables vía Discord webhooks.

## Cuándo gana cada una

| Caso de uso | Ganador |
|---|---|
| Force wipe day, server fresco rápido | Just-Wiped |
| Trackear player específico | BattleMetrics |
| Admin remoto via RCON | BattleMetrics |
| Weekly wipe schedule discovery | Just-Wiped |
| Alertas cuando server cae | BattleMetrics |

## Recomendación combinada

Bookmarkear los dos. Just-Wiped es el home page de force wipe day y de browse casual de wipes. BattleMetrics es el daily driver si admin un server, trackeas players o quieres alertas. No son competidores — son complementarios.

Si solo juegas casual sin admin: Just-Wiped alcanza. Si admin server o trackeas players: BattleMetrics es necesario, Just-Wiped es nice-to-have.
