---
title: "D2 Foundry"
description: "Simulador open-source de daño, TTK y curvas de damage falloff para armas de Destiny 2."
quickTake: "Cuando light.gg te dice 'este roll es popular' pero quieres saber 'cuánto pega exactamente', D2 Foundry es la respuesta. Matemática expuesta, sin black box."
---

## Qué es

D2 Foundry es un simulador web open-source para Destiny 2 que calcula daño, TTK (time-to-kill), damage falloff y otras métricas de armas usando los datos del manifest de Bungie. Mantenido por Clark Perkins en GitHub bajo licencia MIT, sin afiliación oficial. Activo desde 2023.

Lo distintivo es la **transparencia matemática**: cada número viene de fórmulas documentadas, no de votos comunitarios. Puedes ver exactamente cómo se calcula el daño contra un enemigo específico, qué perks aplican, y cómo cambia el TTK con resilience del oponente.

## Qué problema resuelve

light.gg te dice qué perks votó la comunidad pero no cuánto daño hacen efectivamente. Cuando dos opciones de god roll se ven similares, ¿cuál pega más contra un Major? ¿Cuál tiene mejor TTK contra un Guardian con resilience 9? Esas preguntas necesitan cálculo, no votación.

D2 Foundry expone esos cálculos: pegas un arma, configuras perks, eliges el target (PvE Major, Champion, Guardian con resilience X), y ves el daño por bullet, daño por reload, TTK, y comparativa con otras armas del mismo arquetipo.

## Diferenciación

Frente a light.gg, D2 Foundry no compite — se complementa. light.gg cubre **qué buscar** (god rolls, vendor rolls, catálogo), D2 Foundry cubre **cuánto pega** (cálculos de daño y TTK contra targets específicos). El flujo común es appraise con light.gg → simular con D2 Foundry cuando quieres precisión.

Frente a Destiny Massive Breakdowns (la spreadsheet de TTK que usa la comunidad desde hace años), D2 Foundry gana en interactividad (no lees una tabla, configuras un escenario) y mantenibilidad (auto-actualiza con el manifest cuando Bungie cambia números). DMB sigue siendo el gold standard para análisis editorial profundo, pero D2 Foundry te da las respuestas concretas más rápido.

## Para qué la usa la gente

**Comparar dos armas similares**: pegas dos hand cannons aggressive frame en split screen, configuras los mismos perks, ves cuál pega más contra X target. Decisión informada en lugar de feeling.

**Validar un god roll antes de farmearlo**: el roll que light.gg vota como #1 no siempre es óptimo para tu uso. D2 Foundry te muestra el delta de daño real entre alternatives.

**Optimizar PvP loadout**: TTKs precisos contra resiliences variables del enemigo. Crítico para Trials donde el matchup importa.

**Theorycraft con perks específicos**: ¿Vorpal vs Frenzy contra Champions? D2 Foundry simula los dos escenarios y muestra el delta.

**Verificar nerfs/buffs post-patch**: cuando Bungie cambia números en un balance pass, D2 Foundry refleja el cambio en horas (vía manifest update) sin esperar a votos comunitarios.

## Para quién NO es esta herramienta

Si buscas "qué arma usar" sin querer pensar en cálculo, light.gg te da una respuesta más rápida. D2 Foundry pide que tú sepas qué configurar.

Si juegas Destiny 2 muy casual y rara vez optimizas, las herramientas matemáticas son overkill. Apuntar y disparar funciona perfectamente bien.

Si tu interés es lore, cosméticos o seguimiento de progresión, este sitio no cubre nada de eso.

## Cómo se usa en la práctica

1. Entras a `d2foundry.gg`. Sin login obligatorio.
2. Buscas el arma por nombre. La página muestra stats base y selector de perks.
3. Configuras perks de tu roll (o god roll target) en cada columna.
4. Eliges el target en el panel derecho: PvE (Major, Champion, Boss) o PvP (con resilience del enemigo).
5. Miras daño por bullet, daño por mag, TTK, damage falloff. Para comparar, abres segunda arma en split.

## Limitaciones honestas

**Curva de uso más alta que light.gg**. Si no entiendes conceptos como damage falloff o crit multiplier, los números pueden ser opacos. Hay help text pero requiere lectura.

**Cobertura sólo de armas**. Armaduras y mods no están modelados acá; para builds de armor stat budget, otras tools (DIM Loadout Optimizer) son mejores.

**Modelos simplificados**. Los cálculos asumen condiciones controladas (un target, sin movimiento, sin abilities activas). El daño real en raid puede variar por surges, debuffs y burns que no están modelados completamente.

**Inglés solamente**. Sin localización a español.

**Updates dependen del mantenedor**. Si Bungie cambia algo profundo (ej: rework de un perk), D2 Foundry puede tardar días en reflejarlo. Para meta-shifts mayores, espera la actualización antes de confiar 100%.

## Cómo empezar

Entra a `d2foundry.gg`, busca un arma que uses (idealmente con god roll que ya conozcas), y configurá los perks. Cambia el target entre Major y Boss para ver cómo escala. Prueba un perk alternative (ej: Frenzy vs Multikill Clip) y observa el delta. En 15 minutos la interfaz hace clic.
