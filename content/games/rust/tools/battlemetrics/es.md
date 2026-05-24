---
title: BattleMetrics
description: "Plataforma all-in-one para servers de Rust: browser con filters, tracking de players y grupos, alertas, RCON remoto desde el browser."
quickTake: Para jugadores, es la mejor forma de trackear cuándo entran tus enemigos al server. Para admins, es RCON desde cualquier dispositivo sin abrir el cliente del juego.
---

## Qué es

BattleMetrics es una plataforma web multiplataforma para servers de Rust (y otros 60+ juegos). Combina cuatro funciones: server browser global con filters, player y group tracking con history, sistema de alertas configurables, y RCON tool para administrar servers remotamente. Es freemium: features básicas son gratis, features pro (más alerts, history más largo, premium RCON) requieren suscripción.

## Qué problema resuelve

El server browser in-game de Rust es muy limitado: no puedes filtrar por wipe time fino, no puedes trackear "está mi rival en el server ahora", no puedes saber a qué horas entra el clan que te raideó la semana pasada. BattleMetrics resuelve todo eso fuera del juego. Para admins, el RCON in-game requiere estar logged in al server — BattleMetrics te da RCON desde browser en cualquier dispositivo.

## Diferenciación

Frente a Just-Wiped (server browser), BattleMetrics gana en data depth: tracking de jugadores específicos, alertas, historial. Just-Wiped gana en simplicidad y focus en wipes frescos. Frente al server browser in-game, BattleMetrics gana en todo excepto en "joinear con un click". Frente a RCON nativo (necesita cliente abierto), BattleMetrics permite admin remoto desde móvil.

## Para qué la usa la gente

- **Server browser avanzado**: filtros por wipe time (last 1h, 24h, este wipe cycle), tag (vanilla, modded, PvE, PvP), región, slots disponibles, BP wipe status.
- **Player tracking**: setear watch en jugadores específicos para ver cuándo conectan, cuánto tiempo juegan, qué servers frecuentan.
- **Group tracking**: trackear clans enteros con players relacionados, ver patterns de raid (entran en grupo a las 9pm los viernes).
- **Alertas configurables**: notificación push/email cuando un player target conecta, cuando tu server cae, cuando un slot abre.
- **RCON remoto**: admin tu server desde browser, kick/ban/teleport sin necesidad de loguearte al juego.

## Para quién NO es esta herramienta

Si solo quieres encontrar un server fresco para arrancar wipe, Just-Wiped es más directo. Si nunca admin un server y no trackeas players, BattleMetrics es overkill. Para uso casual de search, el browser in-game alcanza. Algunos features (tracking heavy, RCON premium) cuestan plata.

## Cómo se usa en la práctica

1. Entras a battlemetrics.com, registrar cuenta (gratis para tier básico).
2. Para browse: battlemetrics.com/servers/rust con filtros laterales.
3. Para track players: search del player por nombre o Steam ID, click "Watch".
4. Para alertas: configurar desde tu profile → Alerts, conectar email/Discord webhook.
5. Para RCON: enable RCON en server.cfg con BattleMetrics IP whitelisted, link el server a tu cuenta, ya puedes admin desde el dashboard.

## Limitaciones honestas

- **Tier free tiene límites**: trackeas hasta N players, alertas limitadas, RCON básico. Heavy use requiere paid.
- **No es 100% real-time**: data de player count y player presence puede tener delay de 1-5 minutos.
- **Player tracking levanta ethics debate**: hay comunidad que considera "stalking" trackear players específicos. Usar con criterio (no harassment).
- **RCON requiere setup en server config**: no es plug-and-play, hay que whitelistear IPs y configurar passwords.
- **Solo inglés**: sin localización.

## Cómo empezar

Para uso casual: registrar cuenta y browsear servers. Para tracking ligero: setear watch en 1-2 players. Para admin: link tu server (requiere ser owner/admin del server), configurar RCON whitelisting según los docs en battlemetrics.com/docs. Para alerts a Discord, configurar webhook del canal y testear con un alert dummy.
