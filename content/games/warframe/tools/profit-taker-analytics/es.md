---
title: "Profit-Taker Analytics"
description: "Herramienta de escritorio open source que parsea tus logs para cronometrar y desglosar runs de Profit-Taker (el boss de Orb Vallis) fase por fase."
quickTake: "Para optimizar tus runs de Profit-Taker al segundo. Nicho de endgame: si haces el boss de Orb Vallis en serie para farmear plata, esto te dice exactamente dónde pierdes tiempo."
---

## Qué es

Profit-Taker Analytics es una herramienta de escritorio con GUI, open source, que parsea tus logs del juego para cronometrar y desglosar runs de Profit-Taker —el Orb boss de Orb Vallis— fase por fase. La usan speedrunners y squad leaders para optimizar la pelea: ver cuánto tarda cada fase, dónde se pierde tiempo y cómo mejorar.

La desarrolla Basiiii en GitHub. Es gratuita. Es una herramienta de nicho con cadencia de desarrollo lenta (el commit más reciente es de mediados de 2025), pero no está abandonada — es la más especializada del catálogo.

## Qué problema resuelve

Profit-Taker es una pelea de farmeo recurrente para conseguir platinum, créditos y recursos. Quien la corre en serie quiere hacerla rápido, pero el juego no te da un desglose de cuánto tardaste en cada fase ni dónde se fue el tiempo. Sin métricas, optimizar es a ojo.

Profit-Taker Analytics resuelve eso parseando tus logs y mostrándote el tiempo de cada fase de la pelea. Con esos datos identificas el cuello de botella —tal fase de daño, tal transición— y ajustas tu loadout o tu ejecución para bajar el tiempo total.

## Diferenciación

Es la única herramienta del catálogo dedicada al análisis de runs de Profit-Taker. AlecaFrame y otros overlays cubren economía e inventario, pero no desglosan la pelea fase por fase como esta. Para el caso específico de optimizar Profit-Taker, no tiene un competidor directo — es especializada y standalone.

## Para qué la usa la gente

**Cronometrar runs fase por fase**: el desglose temporal de cada etapa de la pelea.

**Identificar cuellos de botella**: ver qué fase te frena para enfocar la optimización.

**Comparar loadouts**: medir el impacto de un cambio de build en el tiempo de run.

**Coordinar squads**: los squad leaders usan los datos para mejorar la ejecución colectiva.

## Para quién NO es esta herramienta

Si no farmeas Profit-Taker de forma recurrente ni te interesa optimizar tiempos, no le vas a dar uso — es ultra específica.

Si juegas en consola o mobile, no aplica: es software de Windows que lee logs del PC.

## Cómo se usa en la práctica

1. Descargas la app desde el repo de GitHub de Basiiii.
2. La instalas y la dejas leer tus logs del juego.
3. Haces una run de Profit-Taker.
4. La herramienta te muestra el desglose temporal por fase.
5. Identificas dónde perdiste tiempo y ajustas loadout o ejecución.

## Limitaciones honestas

**Cadencia de desarrollo lenta**: el commit más reciente es de mediados de 2025. No está abandonada, pero se mueve más despacio que el resto del catálogo — verifica que siga funcionando con el patch vigente antes de depender de ella.

**Ultra nicho**: solo sirve para Profit-Taker. Fuera de ese caso, no aporta.

**Solo Windows + lee logs**: requiere PC y acceso a tus logs del juego.

## Cómo empezar

Descarga la app desde el GitHub de Basiiii, déjala leer tus logs y haz una run de Profit-Taker para ver el desglose. Es una herramienta para quien ya hace el boss en serie y quiere exprimir cada segundo — no un primer recurso para quien recién llega al endgame.
