---
title: rustplusplus
description: "Bot de Discord en Node.js que usa el API de Rust+ para extender features: alertas a canales, comandos remotos, team chat integrado al Discord del clan."
quickTake: Si tu clan ya vive en Discord, rustplusplus convierte el server en un dashboard de Rust en tiempo real. Setup es no-trivial pero el payoff para clans organizados es grande.
---

## Qué es

rustplusplus es un Discord bot open-source en Node.js mantenido por alexemanuelol. Usa el API no-oficial pero estable de Rust+ (rustplus.js library) para extender la app móvil hacia Discord. Setup: self-hosted (vos corres el bot en tu PC, VPS o Raspberry Pi), conectás con tu Discord server, pareas con tu Rust server, y el bot publica info y acepta comandos desde Discord.

## Qué problema resuelve

Rust+ oficial es app-centric y per-player: cada uno tiene su propia app, alertas individuales, vista propia. Para un clan, eso es fragmentado — quieres que las alertas del CH47 lleguen a todos al mismo tiempo en un canal compartido, quieres que cualquiera del clan pueda controlar smart switches del compound, quieres un log compartido de eventos. rustplusplus convierte el flow individual de Rust+ en flow de team via Discord.

## Diferenciación

No tiene competencia real. Rust+ oficial cubre uso individual; rustplusplus es la única extension community popular. Hay algunos plugins de uMod que exponen info del server a Discord webhooks pero son server-side (admin debe instalar) — rustplusplus corre client-side por cualquier player con Rust+ paired, sin requerir admin del server.

## Para qué la usa la gente

- **Alertas compartidas a canales del Discord del clan**: CH47, Cargo, Helicopter, Bradley pop en #server-events para todo el team al mismo tiempo.
- **Comandos remotos**: /switch [name] on/off, /info, /team, /map ejecutados desde Discord controlan tu base remota.
- **Storage monitoring**: bot puede notificar cuando un storage container baja de threshold ("Quincho TC bajó de 100 wood").
- **Team Discord integration**: roles, channels y permissions del Discord se mapean a actions del bot (solo officers pueden /switch).
- **Logs**: histórico de eventos del server queda registrado en el canal, recuperable días después.

## Para quién NO es esta herramienta

Si juegas solo o en duo, Rust+ oficial alcanza. Si no admin tu propio Discord server, setup no aplica. Si nunca corriste un Node.js script o un Docker container, la curva de setup es alta (hay tutorials buenos pero requieren paciencia). Si tu server bloquea Rust+, rustplusplus tampoco funciona porque depende del mismo pairing.

## Cómo se usa en la práctica

1. Crear un Discord application + bot en discord.com/developers, copiar el token.
2. Clone el repo desde GitHub (alexemanuelol/rustplusplus), instalar dependencies con `npm install`.
3. Configurar `config/config.json` con Discord bot token, server URL, etc.
4. Run el bot: `node index.js` o via Docker.
5. Invitar el bot a tu Discord server con los permissions correctos.
6. Desde Discord, usar `/credentials` para asignar tu Rust+ pairing al bot.
7. Una vez paired, el bot empieza a publicar alertas y acepta comandos.

## Limitaciones honestas

- **Setup no-trivial**: Necesitas node.js o Docker, conocer cómo crear un Discord app, paciencia para debug.
- **Self-hosted**: corre en tu equipo. Si lo apagás, el bot deja de andar. VPS chico ($5/mes) lo resuelve.
- **Depende del API no-oficial de Rust+**: si Facepunch cambia el API, el bot puede romperse hasta update.
- **Mantenido por un solo dev**: alexemanuelol mantiene esto en su tiempo libre — releases son consistentes pero pueden tener gaps.
- **No tiene UI gráfica**: configuración via JSON files, sin admin panel.

## Cómo empezar

Si nunca corriste un bot de Discord: empezar con la guía de setup en el README del GitHub, leer todo antes de instalar. Si ya corres bots: el docker-compose en el repo simplifica deployment. La community en el Discord linkeado desde el README es activa y ayuda con troubleshooting. Para clans serios, vale la pena el setup inicial — es ROI alto en QoL del clan.
