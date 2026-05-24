---
title: FORTIFY
description: Editor offline de bases de Rust con stability simulation, raid durability testing, upkeep calculator y soporte para Copy-Paste plugin.
quickTake: La única herramienta seria de base building offline. Si vas a invertir 50+ horas en una build, FORTIFY te ahorra el dolor de descubrir un peek hole o un stability fail dentro del juego.
---

## Qué es

FORTIFY es una app gratuita de Steam (lanzada en 2017, mantenida activamente) que replica el sistema de construcción de Rust en un sandbox standalone. Mismas placement rules, mismos stability mechanics, mismos costs y health pools. Te deja diseñar una base completa offline, testear cuánto cuesta raidearla, ver upkeep en M³ de stone/metal/HQM, e importar/exportar via el formato Copy-Paste plugin para servers que lo permitan.

## Qué problema resuelve

Construir una base seria en Rust dentro del juego es caro y lento: necesitas farmear los recursos, encontrar el spot, y si te equivocas en stability o dejas un peek hole, ya gastaste todo el wood y stone. FORTIFY te deja iterar el diseño sin costo de tiempo ni recursos. Pruebas el layout, testeas qué tan caro es raidearlo, ajustas honeycomb, y solo cuando estás conforme lo construyes en el server real.

## Diferenciación

No tiene competencia real en este nicho. La alternativa más cercana es construir en un build server (servers privados que dan recursos infinitos para practicar), pero eso requiere logueo, no permite raid testing automático, y no expone stability como visualizer. FORTIFY hace las tres cosas en una sola app standalone.

## Para qué la usa la gente

- **Diseñar la base del wipe**: planear el layout 1-2 días antes del force wipe para arrancar el wipe con build clara y costo conocido.
- **Testear raid resistance**: ver exactamente cuántos rockets / C4 / satchel cuesta romper cada wall hasta tu loot room.
- **Calcular upkeep**: ver el costo en stone/metal/HQM por hora para mantener la base, planear cuánto necesitas farmear regularmente.
- **Visualizar stability**: ver qué walls están sostenidos por qué pillars, encontrar weak points donde un raid puede bajar muchas walls colapsando un solo pillar.
- **Compartir builds**: exportar via Copy-Paste format para compartir con clan, o subir/descargar designs desde Steam Workshop.

## Para quién NO es esta herramienta

Si solo juegas casual y construyes 2x1 starter bases, FORTIFY es overkill. Si juegas en server que no soporta Copy-Paste plugin, no puedes importar diseños — pero igual sirve para planear visualmente. Si quieres testear electricidad, este no es el tool: para eso, Rustrician.

## Cómo se usa en la práctica

1. Instalas FORTIFY desde Steam (gratis).
2. Abres el editor, elige biome y tamaño de área.
3. Construyes con las mismas keybinds que Rust (click izquierdo placement, scroll wheel rotate).
4. Activas "Stability" view para ver el grid de soporte.
5. Para raid testing, "Raid Mode" deja simular impactos de explosivos y ver qué cae.
6. Exportas via "Copy" si el server lo soporta, o capturas screenshots para planear.

## Limitaciones honestas

- **Solo Windows**: no hay versión macOS ni Linux.
- **No replica el meta de raid 100%**: algunos mecánicos edge (ladder hatches, soft side abuse) requieren testing in-game.
- **UI es funcional pero datada**: viene de 2017 y se nota — no es bonita pero funciona.
- **Updates lentos**: cuando Facepunch agrega un wall type nuevo, FORTIFY puede tardar semanas en incorporarlo.
- **Server side**: no todos los servers permiten Copy-Paste, así que exportar a veces es solo referencia visual.

## Cómo empezar

Buscas FORTIFY en Steam, instalas (gratis). Para el primer uso, recomendamos seguir el tutorial in-app o ver un video de Blooprint o Frost sobre "How to use FORTIFY" — la curva inicial es ~30 minutos para entender el flow.
