---
title: "Emilia's Build & Inventory Tool"
description: "Build planner + inventory manager con frame data, datos extraídos del juego y modo offline para PCs sin internet permanente."
quickTake: "Para technical theorycrafters: si te interesa el frame data exacto, las hitboxes o los datos del game files que ningún otro planner expone, este es el tool — UI menos pulida, datos sin filtrar."
---

## Qué es

Emilia's Build & Inventory Tool es una web app open-source mantenida por Emilia, miembro de la comunidad técnica de Elden Ring. Vive en `er-inventory.nyasu.business` y combina build planner + inventory tracker + frame data explorer. La data proviene de la unpacked game files, lo que significa cobertura más completa que cualquier sitio editorial.

Está disponible como PWA (Progressive Web App): podes instalarla en el browser y usarla offline después del primer load.

## Qué problema resuelve

Los planners editorials (EIP, tarnished.dev) cubren ~95% de items pero filtran data inútil para el promedio (drop rates exactos, hitboxes, frame data de animaciones). Emilia's tool no filtra: si está en el game files, está acá.

También resuelve el problema offline: si juegas en una PC sin internet permanente (LAN parties, viaje), podes seguir consultando builds e items sin conexión.

## Diferenciación

Contra EIP/tarnished.dev gana en raw data y open source — todo el código vive en GitHub bajo el repo de Emilia. Pierde en pulido visual: la UI es funcional pero no aspira a ser bonita. Contra Mugen Monkey gana en cobertura técnica masivamente.

## Para qué la usa la gente

**Frame data lookup**: cuántos frames dura el startup de un attack, recovery, hyperarmor windows.

**Drop rate verificación**: cuál es la probabilidad real de droppear ese consumable raro.

**Inventory simulation**: planear tu inventory para una run específica, ver weight totals exactos.

**Offline reference**: cargar el tool una vez con internet, después consultar sin conexión.

**Modders y datamine**: la data extraída es el mismo source que usan modders y data extractors.

## Para quién NO es esta herramienta

Si solo quieres armar una build rápida con UI bonita, EIP o tarnished.dev son mejores.

Si te marean las tablas densas y la UI sin polish, no vas a disfrutar la experiencia.

Si juegas solo en console sin PC, el offline PWA no aplica.

## Cómo se usa en la práctica

1. Abre `er-inventory.nyasu.business` en un browser moderno.
2. Para PWA: en Chrome/Edge → "Install app" en el menú de address bar.
3. Para build planning: panel "Builder" → ingresa stats y selecciona items.
4. Para frame data: panel "Frame Data" → seleccionar arma → ver tabla de animaciones.
5. Para inventory: panel "Inventory" → simular pickup de items y ver weight.
6. Los paneles son independientes pero comparten el dataset.

## Limitaciones honestas

**UI técnica**: dropdowns sin search en algunos paneles, tablas densas, paleta austera. No se diseñó para usuarios casuales.

**Curva de aprendizaje**: muchas pestañas y opciones; toma 10-15 minutos entender qué está dónde.

**Mantenido por una sola persona**: updates dependen del tiempo de Emilia; algunas requests tardan.

**Datos sin curaduría editorial**: ves todo lo que está en game files, incluyendo items unused o internal-only que no aparecen en gameplay normal.

**Mobile pobre**: el tool está pensado para desktop; mobile funciona pero la densidad de info hace difícil leer.

## Cómo empezar

1. Visita `er-inventory.nyasu.business`.
2. Decide qué panel necesitas (Builder, Frame Data, Inventory).
3. Si quieres uso offline, instala como PWA.
4. Explora las pestañas — toma tiempo entender la organización.
5. Para preguntas técnicas, el GitHub repo tiene issues abiertos donde Emilia responde.
