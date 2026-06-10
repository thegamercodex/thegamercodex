---
title: "MH Wilds Calculator"
description: "Calculadora de daño open-source para Monster Hunter Wilds que modela la fórmula completa para comparar armas, sets y skills con precisión."
quickTake: "La calculadora para theorycrafters. Es open-source y modela la fórmula real; si quieres saber con números si un set pega más que otro, esta es la herramienta honesta."
---

## Qué es

MH Wilds Calculator es una calculadora de daño web, gratuita y open-source (licencia MIT, código en GitHub de chanleyou). Modela la fórmula de daño de Monster Hunter Wilds —motion values, raw, elemento, affinity, sharpness y las skills relevantes— para que puedas comparar armas, sets y combos con números en vez de intuición. Al ser open-source, la comunidad puede verificar y corregir la matemática.

## Qué problema resuelve

"¿Este set pega más que el otro?" es una pregunta que el juego no responde. Cambias una skill y no sabes si el daño subió o bajó, ni cuánto. La calculadora hace explícita la fórmula: introduces tu setup y obtienes un número que puedes comparar contra otro setup, eliminando la adivinanza del theorycrafting.

## Diferenciación

Frente a Math Hunter, que es muy fuerte en explicar la teoría y dar resúmenes meta, MH Wilds Calculator es la herramienta interactiva pura: introduces valores y comparas. La gran ventaja sobre cualquier alternativa cerrada es que es open-source — puedes auditar exactamente cómo calcula, abrir un issue si algo no cuadra, o correrla localmente.

## Para qué la usa la gente

- **Comparar dos sets**: ver con números cuál rinde más antes de farmear las piezas.
- **Evaluar skills**: medir el aporte real de subir Attack Boost vs Weakness Exploit.
- **Comparar armas**: estimar el daño relativo de dos armas con setups equivalentes.
- **Verificar claims**: comprobar si un "build óptimo" de un video realmente lo es.

## Para quién NO es esta herramienta

Si recién empiezas, la cantidad de inputs (motion values, hitzones) puede ser intimidante — primero conviene entender la teoría con Math Hunter o una guía. Si quieres que te armen el set, esto no es un builder. Y si prefieres una herramienta con soporte oficial y mantenimiento garantizado, recuerda que es un proyecto community.

## Cómo se usa en la práctica

1. Abre mhwilds-calculator.netlify.app.
2. Elige arma e introduce tu raw, affinity, elemento y sharpness.
3. Activa las skills de tu set.
4. Selecciona el motion value del combo que quieres medir.
5. Compara el resultado contra otro setup cambiando una variable a la vez.

## Limitaciones honestas

- **Curva de entrada alta**: requiere entender qué es un motion value y un hitzone para usarla bien.
- **Mantenimiento community**: tras un patch grande, la fórmula puede tardar en actualizarse hasta que alguien la corrija.
- **Sin guías**: da números, no contexto editorial.
- **Solo inglés**: interfaz sin localizar.

## Cómo empezar

Entra a mhwilds-calculator.netlify.app, elige tu arma e introduce los stats básicos. Empieza comparando dos sets con una sola diferencia para ver cómo se mueve el daño. El código está en GitHub si quieres revisar la fórmula.
