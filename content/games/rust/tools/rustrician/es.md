---
title: Rustrician
description: Simulador web del sistema eléctrico de Rust con switches, timers, branches, blockers, smart switches y todo el resto del catálogo.
quickTake: Si te trabaste con un circuito eléctrico en Rust, Rustrician te lo simula en 5 minutos sin gastar recursos. La curva de electricidad es donde la mayoría de jugadores se rinde — esta tool aplana esa curva.
---

## Qué es

Rustrician es un simulador web gratuito del sistema eléctrico de Rust. Tiene cada componente que existe in-game (small generator, large solar panel, batteries, branches, splitters, blockers, switches, timers, counters, RAND switch, smart switch, AND/OR/XOR/NOT gates) con power flow real. Diseñas el circuito en un canvas drag-and-drop, lo simulas, y cuando funciona lo construyes en el server con la confianza de que va a andar.

## Qué problema resuelve

La electricidad de Rust es uno de los sistemas más profundos del juego — y de los más opacos. Power flow es direccional, los componentes consumen power específico (no es plug-and-play), los branches dividen pero no suman, las baterías tienen input/output diferentes según charge state. Aprender esto in-game es caro: cada test te cuesta wood, metal y tiempo. Rustrician te deja iterar circuits sin costo, ver power consumption en cada wire, y debuggear visualmente.

## Diferenciación

No hay competencia real. FORTIFY cubre construcción de la base física pero no electricidad. La opción manual es construir en un build server, pero ahí no tienes visualización de power flow ni debug visual. Rustrician es el único tool que simula el sistema eléctrico con fidelidad 1:1.

## Para qué la usa la gente

- **Diseñar tu sistema de auto-turrets**: power budget total, distribución a cada turret, splitters y blockers para que el sistema aguante cuando una battery se descarga.
- **Trampas eléctricas**: timers + traps para door automation, peek hole flooders con shotgun traps temporizados.
- **Smart switches + Rust+**: armar el circuito que se controla desde el móvil con la companion app (smart switches expuestos al companion).
- **Iluminación coordinada**: ceiling lights y search lights en zonas con switches, dimmers via counters.
- **Counters lógicos**: usar counters como gates lógicos para automation compleja (puertas que se abren solo con código + presence sensor).

## Para quién NO es esta herramienta

Si solo usas un small generator con 2 ceiling lights, Rustrician es overkill. Si tu circuito es simple (battery + auto turret + switch), construirlo in-game es igual de rápido. Si quieres planear la base entera incluyendo walls, Rustrician no cubre construcción — para eso FORTIFY.

## Cómo se usa en la práctica

1. Entras a rustrician.io, sin registro.
2. Arrastras componentes desde el panel lateral al canvas.
3. Conectas wires con click + drag entre output y input pins.
4. Click "Run Simulation" para ver power flow en vivo, con números de power en cada wire.
5. Para iteración rápida, "Toggle Switch" / "Press Button" interactúan con el circuito vivo.
6. Cuando funciona, replicarlo en el server siguiendo el mismo layout.

## Limitaciones honestas

- **UI tiene 8 años**: cumple su función pero no es bonita. Mobile no soportado.
- **Sin tutorial in-app**: si nunca tocaste electricidad de Rust, la curva es alta — conviene leer la wiki de Rust sobre electricity o ver video tutorial antes.
- **Algunos componentes nuevos tardan en agregarse**: cuando Facepunch agrega un component, Rustrician puede tardar 2-4 semanas.
- **Solo simulación, no export al server**: no hay un Copy-Paste format equivalente para circuits, así que la replicación es manual.

## Cómo empezar

Entras a rustrician.io. Para arrancar, hay templates de circuits comunes (auto-turret setup, smart base, timed door) accesibles desde el menú. Cargás uno, lo entiendes, lo modificas. Para aprender de cero, el Discord oficial de Rustrician (linkeado desde el sitio) tiene canales de help donde la comunidad responde dudas.
