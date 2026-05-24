---
title: Rust+
description: App móvil oficial de Facepunch para Rust con control de smart switches, alertas de eventos del server, mapa en vivo y chat de team.
quickTake: La unica forma legítima de saber si tu base está siendo raideada cuando no estás logueado. Si pasás tiempo lejos del PC, vale 5 minutos de setup.
---

## Qué es

Rust+ es la app móvil oficial de Facepunch para Rust, disponible gratis en iOS y Android. Te pareás con un server desde el menú in-game (ESC → Rust+ → Pair With Server) y desde el móvil controlás smart switches, recibes alertas de eventos del server (CH47, Cargo Ship, Patrol Helicopter spawning), ves el mapa en vivo de tu progreso y chateás con tu team.

## Qué problema resuelve

Rust es un juego que premia presencia constante: bases son raideadas cuando estás offline, eventos importantes (Cargo, CH47, Helicopter) suceden sin warning, smart switches en tu base no se ajustan sin loguear. Rust+ extiende el juego al móvil para que puedas reaccionar a algunas de esas situaciones sin estar frente al PC. No es game-changing, pero para grupos serios o solos paranoicos es QoL grande.

## Diferenciación

Es la única opción oficial. La alternativa para extender features es rustplusplus, un Discord bot open-source que extiende el API de Rust+ con más functionality (alertas a Discord channels, comandos remotos, integration con team Discord). Rust+ es el cliente "thin" oficial; rustplusplus es la extensión community que la mayoría de clans serios suma encima.

## Para qué la usa la gente

- **Smart switches remotos**: prender/apagar lights de tu base, abrir doors automatizadas, activar trampas desde el móvil.
- **Alertas de eventos**: notification push cuando spawn Cargo Ship, CH47 (Chinook), Patrol Helicopter, Bradley APC.
- **Smart alarms**: configurar custom alarms con messages (ej: "Alguien rompió la puerta del compound").
- **Live map**: ver tu progreso de monumento + base location en mapa del móvil sin loguear.
- **Team chat**: chatear con tu team desde el móvil cuando estás fuera, ellos te leen in-game.

## Para quién NO es esta herramienta

Si solo juegas 2-3 sesiones a la semana de 1 hora cada una, Rust+ no agrega mucho — el juego termina cuando cerrás. Si tu server bloquea el pairing (algunos vanilla y modded lo bloquean para evitar "advantage"), no puedes usarlo. Si quieres extras de Rust+ (Discord bot integration, comandos avanzados), necesitas rustplusplus encima.

## Cómo se usa en la práctica

1. Descarga Rust+ del App Store (iOS) o Play Store (Android).
2. Loguear con tu Steam account.
3. En el juego, ESC → Rust+ → Pair With Server (server debe permitir Rust+).
4. En el móvil, accept pairing request.
5. Ya estás conectado al server desde el móvil — ves mapa, alertas, smart switches asignados.
6. Para smart switches: asignarles nombre in-game (right-click → Pair) y aparecen en la app para control.

## Limitaciones honestas

- **Algunos servers bloquean Rust+**: especialmente high-risk vanilla servers para evitar "advantage" de external comms.
- **Pairing se pierde con relogin del server a veces**: hay que re-pair ocasionalmente.
- **No tiene voice chat**: solo text chat con team.
- **Alertas pueden no ser real-time**: hay latency de 5-30 segundos típica, no es alarm system instant.
- **Solo inglés**: sin localización en la app.
- **No funciona en console Rust**: solo en versión PC pareada con apps móviles.

## Cómo empezar

Descargar la app desde tu app store, login con Steam. Para el primer pairing: estar en el server, abrir ESC → Rust+ → Pair con QR code o tap "Pair" en el móvil. Smart switches se asignan in-game ya construidos: right-click → "Pair" en el switch y elegir nombre. Para QoL más, considerar setupear rustplusplus arriba de Rust+ con tu Discord.
