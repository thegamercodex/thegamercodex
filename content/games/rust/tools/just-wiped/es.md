---
title: Just-Wiped
description: Server browser web enfocado en encontrar servers que recién wipearon, con filtros finos por tipo, slots y schedule.
quickTake: La forma más rápida de encontrar un server fresh para arrancar un wipe. Si saltas entre servers cada force wipe o quieres un weekly fresh, esto es tu home page los jueves a la mañana.
---

## Qué es

Just-Wiped es un server browser web gratuito para Rust con un foco específico: mostrar servers que recién wipearon. Lista todos los servers de Rust con su last wipe timestamp, current player count, max slots, tags (vanilla, modded, PvE, etc.) y filtros para combinarlos. Es free, sin login, mantenido por un dev independiente.

## Qué problema resuelve

Entrar a un wipe nuevo en Rust significa la diferencia entre encontrar barriles y nodos vs. encontrar bases ya construidas y blueprints repartidos. El browser in-game no muestra wipe time de forma útil — solo "Server age" en horas. Just-Wiped es la solución: filtros por wiped en última hora, últimas 24h, esta semana, este force wipe cycle, con detalles legibles de un vistazo.

## Diferenciación

Frente a BattleMetrics, Just-Wiped es más simple y focused en wipes. No tiene player tracking, alertas configurables ni RCON tool — solo el browser. Para encontrar el wipe fresco, esta simplicidad es ventaja: zero scroll, filtros directos, joineas. BattleMetrics te da más data depth si necesitas más allá.

## Para qué la usa la gente

- **Buscar wipe fresco**: filtrar por "Wiped in the last hour" + tag + región, ver lista, joinear.
- **Force wipe day (primer jueves del mes)**: la web se vuelve el dashboard standard de la comunidad — todos los servers wipean simultáneo, hay que pickear rápido.
- **Encontrar un server weekly que matchee tu schedule**: filtrar por wipe schedule (weekly Tuesdays, biweekly Thursdays, etc.) para tener consistency.
- **Browse modded servers**: filtros por tags (10x, 100x, KitPVP, Battlefield, Build) para encontrar el ritmo de juego que quieres.
- **Track favorite servers**: marcar servers como favorites para verlos rápido cuando wipean.

## Para quién NO es esta herramienta

Si quieres admin features (RCON, player tracking, alertas), BattleMetrics es el tool. Si solo juegas un server fijo siempre, no necesitas un browser — el in-game alcanza. Si juegas vanilla en oficiales de Facepunch, esos servers ya están listados pero tienen su propio system de rotation que el in-game browser muestra ok.

## Cómo se usa en la práctica

1. Entras a just-wiped.net, sin registro.
2. Top filters: "Wiped in" (1h, 24h, week, cycle), tag, región, group size, slots.
3. Click en un server muestra detalles: last wipe, next predicted wipe, history de wipes, conexión IP/port para join.
4. Click "Connect" abre el cliente de Rust y joinea directamente (necesita Rust instalado).
5. Para favoritar, click la estrella — sin login los favorites quedan en localStorage del browser.

## Limitaciones honestas

- **No tiene player tracking ni alertas**: para eso, BattleMetrics.
- **Solo inglés**: sin localización.
- **Sin RCON ni admin features**: es puramente browser.
- **Predicción de next wipe puede fallar**: para servers nuevos sin historia, "next wipe" es estimación basada en defaults.
- **Lista puede tener servers caídos**: a veces aparece un server "wiped recently" que ya está offline.

## Cómo empezar

Para uso casual: just-wiped.net y bookmark. Cada force wipe (primer jueves), abrir, filtrar por tu tag preferido y región, joinear. Para wipes weekly, setear filter por "wipe schedule weekly" y bookmarkear con esos filters en URL.
