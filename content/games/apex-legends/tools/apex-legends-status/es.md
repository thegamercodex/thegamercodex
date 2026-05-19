---
title: "Apex Legends Status"
description: "Dashboard sin instalación mantenido por Hugo Derave que consolida meta de Apex (pick rates, win rates por legend), mapa interactivo de POIs, server status en tiempo real y stats personales — todo gratis sin login obligatorio."
quickTake: "Si no quieres instalar nada y solo quieres entender el meta o ver el mapa, ALS es la herramienta. El interactive map de loot tiers y POIs es la feature killer — ningún otro lo cubre tan bien gratis."
---

## Qué es

Apex Legends Status (ALS) es una web app mantenida desde 2019 por Hugo Derave, developer independiente francés. Cubre territorio que ningún tracker single-player hace: meta-level data del juego entero. Pick rates por legend al top tier, win rates por legend y composición, server status en tiempo real (latencias por región), y un interactive map con tier de loot por POI para cada mapa de current rotation. Gratis, sin login obligatorio (login solo para personalización opcional).

## Qué problema resuelve

Si la pregunta es "¿cómo voy yo?", tracker.gg responde. Si la pregunta es "¿qué está pickeando el resto del mundo?", ALS responde. Antes de un patch o rebalanceo, ALS te muestra exactamente cómo cambió el meta — qué legend subió en pick rate, cuál cayó, qué composición está dominando ranked. Para players competitivos que quieren entender por qué cierto pick está overrepresented esta semana, ALS es la fuente.

## Diferenciación

- **vs apex-tracker-gg**: tracker te muestra a tú, ALS te muestra al juego. ALS no procesa tu performance individual con la misma profundidad — su valor está en agregados.
- **vs Liquipedia**: Liquipedia es referencia estática (history, tournaments, teams). ALS es live data, refresh frecuente.
- **El interactive map** es una feature que no tiene equivalente directo gratis. Otros sites tienen maps pero menos comprehensive.

## Para qué la usa la gente

- **Identificar el legend meta de la semana**: scroll a "Legends" y ordenar por pick rate o win rate. Filtros por mapa, plataforma, rank.
- **Planear el drop spot**: abrir el mapa interactivo del current rotation, ver tier de loot por POI, evitar contested zones de baja recompensa.
- **Diagnosticar lag**: si el game se siente raro, ALS Server Status te dice si los servers de tu región están con high latency.
- **Pre-match research del meta**: antes de jugar ranked, chequear si el meta cambió post-hotfix.
- **Tracking individual basic**: aunque no es su foco, ALS también tiene player profiles con stats core.

## Para quién NO es esta herramienta

Si quieres overlay in-game con teammate stats, ALS no lo provee — usa tracker.gg Overwolf app. Si quieres data programmatic con API key, ALS tiene API pero requiere registro y rate-limits.

## Cómo se usa en la práctica

1. Entra a [apexlegendsstatus.com](https://apexlegendsstatus.com) — no requiere login para uso básico.
2. Tab "Game Stats" → "Legends pick rates" para ver el meta actual. Filtros: platform (PC/console), rank tier, map.
3. Tab "Meta" para ver win rates por legend y combinaciones.
4. Tab "Interactive Map" → seleccionar map activo, ver POIs con tier de loot color-coded (gold = high tier, blue = mid, white = low).
5. Tab "Server Status" → región y latency live.
6. Para player profile: search en la home con IGN + plataforma.

## Limitaciones honestas

- **No tiene overlay in-game**: solo web, requiere Alt-Tab para consulta durante match.
- **API es paywalled más allá del free tier**: developers que necesitan queries volumen tienen que pagar.
- **UI denso para newcomers**: ALS tiene mucha info en una sola pantalla, abrumador la primera vez.
- **Solo inglés**: sin localización.
- **Single maintainer**: Hugo Derave lo mantiene solo. Si por algún motivo decide pausar updates, no hay equipo backup.

## Cómo empezar

Abre [apexlegendsstatus.com](https://apexlegendsstatus.com), bookmark la home. Para uso diario, la combinación más útil es: chequear "Legends pick rates" antes de ranked sessions + tener el "Interactive Map" abierto en una pestaña durante warmup para revisar drops. Player profile para tu IGN es nice-to-have pero tracker.gg lo hace mejor — usa ALS por su valor único en meta + map.
