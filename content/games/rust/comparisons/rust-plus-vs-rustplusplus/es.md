---
title: Rust+ vs rustplusplus — companion app oficial vs extension del clan
description: Rust+ oficial es la app móvil de Facepunch. rustplusplus es el bot de Discord open-source que la extiende para clans. Cuándo conviene cada uno.
---

Rust+ es la app móvil oficial de Facepunch que permite control remoto de smart switches, alertas de eventos del server y team chat desde el celular. rustplusplus es un Discord bot open-source que usa el API de Rust+ para llevar esa misma funcionalidad a un Discord server compartido — perfecto para clans. No compiten — rustplusplus se monta arriba de Rust+. Pero la pregunta es cuándo vale la pena setupear lo segundo.

## Cómo se sienten

**Rust+** es app móvil thin y oficial: descarga del App Store, login con Steam, pair con el server desde el menú in-game, listo. Cada player tiene su propia app, sus propias alertas, su propia vista. Setup en 5 minutos.

**rustplusplus** es Discord bot self-hosted: clone el repo de GitHub, configurar Discord bot, correr en VPS o local, pair el bot con el server. Después de eso, alertas y comandos llegan al Discord del clan compartido. Setup de 30-60 minutos para alguien que nunca corrió un bot, más overhead operational continuo.

## Lo que cubren igual

Ambos exponen: alertas de eventos del server (CH47, Cargo, Bradley, Patrol Heli), control de smart switches, info del team, mapa.

## Lo que solo cubre uno

**Solo Rust+ oficial**:
- App móvil first-class con notification push nativa.
- Setup trivial sin dependencies técnicas.
- Mantenido por Facepunch — no se rompe con parches del API.

**Solo rustplusplus**:
- Alertas a canal de Discord compartido del clan.
- Comandos via Discord (/switch, /info, /team, /map) que cualquier miembro puede ejecutar.
- History de eventos persistente en canales de Discord.
- Storage monitoring con thresholds custom.
- Integration con Discord roles (solo officers pueden /switch).

## Cuándo gana cada una

| Caso de uso | Ganador |
|---|---|
| Solo player con app móvil | Rust+ |
| Clan con Discord activo | rustplusplus |
| Alertas push a móvil | Rust+ |
| Logs históricos de eventos | rustplusplus |
| Setup zero, plug-and-play | Rust+ |

## Recomendación combinada

Para solo o duo: Rust+ alcanza. La inversión de setup de rustplusplus no se justifica sin clan.

Para clan organizado (4+ players con Discord): rustplusplus es transformacional. Convierte el Discord server en dashboard real-time de Rust. Vale las 60 minutos de setup inicial — el ROI en QoL del clan es alto.

Importante: rustplusplus no reemplaza Rust+, lo extiende. Cada player sigue teniendo Rust+ pareado, y el bot se conecta encima usando el mismo API. Si tu server bloquea Rust+ pairing, ninguno de los dos funciona.
