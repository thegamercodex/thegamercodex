---
title: "Path of Building Community (PoE 2)"
description: "Calculadora offline de DPS y planificador de builds para Path of Exile 2, mantenida por la comunidad como fork dedicado del PoB original."
quickTake: "Si vas a invertir más de unas horas por semana en PoE 2, deja de jugar a ciegas. PoB 2 todavía está en construcción y le faltan piezas, pero ya hoy es la única forma de ver matemáticamente qué hace tu personaje."
---

## Qué es

Path of Building Community para PoE 2 (PoB 2) es un fork del Path of Exile Build planner adaptado a las mecánicas de Path of Exile 2. Corre offline en Windows, macOS y Linux, importa tu personaje desde el sitio oficial y te muestra el DPS efectivo, supervivencia, escalado de habilidades y resultado de cada decisión de gear o passive tree.

Es un proyecto separado del PoB original (que sigue cubriendo PoE 1) y vive en su propio repositorio: `PathOfBuildingCommunity/PathOfBuilding-PoE2`. Lo mantiene la misma organización community que sostiene PoB para PoE 1, con un equipo de contribuidores que ajusta cálculos cada vez que GGG cambia algo del balance — y en Early Access cambia mucho.

## Qué problema resuelve

PoE 2 muestra incluso menos información in-game que PoE 1. El tooltip de daño es una primera aproximación: ignora flasks, ignora interacciones entre soportes, no factoriza correctamente las nuevas mecánicas de comba (Spirit, gem combinations) y no te dice si vas a sobrevivir contra el Arbiter.

PoB 2 expone esos cálculos. Te muestra el DPS real contra distintos arquetipos de enemigo, valida si estás capeado de resistencias incluyendo penalty del endgame, y te deja simular cualquier item antes de gastar Exalted Orbs en él. Esa visibilidad es lo que separa "mi build se siente fuerte" de "mi build pega 1.2M y aguanta hits físicos hasta 18k".

## Diferenciación

Frente a alternativas web (Mobalytics, PoEPlanner), PoB 2 ofrece dos cosas que ninguna iguala todavía: **profundidad de simulación** (cualquier estadística derivada está visible, no solo las "destacadas") y **trabajo offline** (no depende de servers, no se cae cuando hay 200k personas en patch day).

A cambio, los planners web ganan en accesibilidad: no requieren instalación, comparten builds con un link, y la curva de UX es más suave. La regla práctica es planner web para explorar, PoB 2 para validar matemáticamente la build antes de invertir.

## Para qué la usa la gente

**Importar tu personaje y diagnosticar gaps**: pegas el link de tu perfil de PoE 2 y PoB 2 trae items, gemas, passive tree y atlas. En 30 segundos ves dónde estás bajo en resistencias, accuracy o crit, y qué nodos del árbol están desperdiciados.

**Comparar items antes de comprarlos**: Editas un slot con el item potencial y ves al instante el delta de DPS, vida, ES. Decides si esos 80 Exalted del trade valen la pena antes de hacer la oferta.

**Diseñar builds desde cero**: empiezas con personaje vacío, eliges clase y ascendencia, planificas passive tree y atlas. PoB 2 te dice exactamente qué resultado vas a tener antes de levelear.

**Validar guides de creators**: los buildmakers serios publican links de PoB 2 con sus builds. Importarla te muestra exactamente cómo está armada — no hay traducción intermedia ni "yo entendí esto".

**Theory-craft de combos nuevos**: PoE 2 introduce skill-gem combinations y Spirit como nuevos ejes. PoB 2 es donde se prueba si una idea funciona antes de pasar 30 horas levelando para descubrir que no escala.

## Para quién NO es esta herramienta

Si recién empiezas PoE 2 y todavía no terminaste la campaña, PoB 2 te va a abrumar. La interfaz es densa — pestañas, paneles, calcs — y mucha de la información solo cobra sentido cuando ya entiendes las mecánicas core del juego. Para esa fase, las guías escritas y videos de creators rinden más.

Si juegas casual (un par de horas a la semana, sin ambición de pinnacle bossing), tampoco lo necesitas. PoB 2 paga su curva de aprendizaje cuando estás optimizando endgame; para campaña + primer atlas tier, el juego te alcanza solo.

## Cómo se usa en la práctica

1. Descargas el instalador desde `pathofbuilding.community` (sección PoE 2) o GitHub Releases del fork. Se instala como app de escritorio.
2. Abres PoB 2, click en "Import/Export Build", pegas el link de tu personaje del sitio oficial de PoE.
3. Activas los flask uptimes, buffs y conditions correctas en el panel "Configuration" (ej: enemy at low life, on full life). Esto cambia tu DPS estimado dramáticamente — sin esto las cifras son fantasiosas.
4. Miras los stats del panel izquierdo: Hit Rate / Skill DPS / Combined DPS, Life / ES / Mana, y resistencias. Lo que esté en rojo es donde tienes problemas.
5. Para iterar: editas items o nodos del árbol, comparas versiones con la opción "Compare" entre dos calcs, y guardas builds candidatas.

## Limitaciones honestas

**El fork de PoE 2 está atrás del de PoE 1 en madurez**. Mecánicas nuevas tardan días o semanas en modelarse correctamente cuando GGG las introduce. En patch day frecuentemente hay items o gemas con cálculos provisorios o incompletos. Verifica las release notes del fork antes de confiar 100% en un número de DPS.

**Solo disponible en inglés**. No hay localización a español. Si no manejas términos técnicos de PoE en inglés (More vs Increased, ailment threshold, etc.) hay barrera. Los videos en español de creators ayudan a salvarla.

**La interfaz es funcional pero fea**. No es Modrinth ni un dashboard moderno: es una herramienta hecha por jugadores para jugadores. Espera tablas densas y abreviaturas. Una vez te acostumbras es eficiente; el primer uso es chocante.

**Algunas mecánicas exóticas (Sekhema buffs específicos, ciertos efectos legacy) pueden no estar perfectamente modeladas**. Para builds nicho, cruza el cálculo con tests in-game.

## Cómo empezar

Bajas el instalador de la web oficial o de GitHub. Lo instalas. Abres el programa. La forma más rápida de aprender no es leer docs: importa la build de algún creador de PoE 2 que sigas y anda clickeando todo. Ver una build real armada te enseña qué hace cada panel mejor que cualquier tutorial. Cuando tengas dudas, los videos en YouTube cubren el flujo paso a paso desde instalación hasta uso avanzado.
