---
title: "EIP Gaming Build Planner"
description: "Calculadora web de builds de Elden Ring con stats, AR previewed, defensas y resistencias, soportando todo el contenido del juego base + Shadow of the Erdtree."
quickTake: "El planner más completo del ecosistema: UI clara, datos actualizados al último patch y soporte explícito de SOTE — si solo vas a usar uno, este es el default sano."
---

## Qué es

EIP Gaming Build Planner es una calculadora web mantenida por EIP Gaming, un sitio dedicado a guías de Souls y action-RPGs. La herramienta vive en `eip.gg/elden-ring/build-planner/` y permite armar un personaje desde cero: starting class, stats, equipo, ashes of war, hechizos, talismans y consumibles. Calcula attack rating real, defensas, resistencias y status buildup.

Es gratis, no requiere login. La versión actual cubre todo el contenido del juego base más Shadow of the Erdtree, incluyendo Scadutree Fragments y Revered Spirit Ashes que modifican daño/defensa solo dentro del Realm of Shadow.

## Qué problema resuelve

Diseñar una build de Elden Ring sin un planner significa hacer el cálculo mental de scaling — saber que un Bloodhound's Fang +10 con C/D en str/dex va a darte X AR a Y nivel — y eso es propenso a error. EIP hace el cálculo en tiempo real: cambiás un punto de stat, el AR se recalcula al instante.

Resuelve también el problema de planning antes de Larval Tear: como respecs son limitados in-game, planificar en EIP antes de subir stats evita gastar Larval Tears innecesarios.

## Diferenciación

Contra Mugen Monkey (el clásico) EIP gana en UI moderna y soporte de DLC; Mugen es minimalista pero su data de SOTE está incompleta. Contra tarnished.dev gana en cobertura — tarnished tiene mejor UX para builds rápidas pero EIP es más completo en items raros y AoWs específicas.

## Para qué la usa la gente

**Theorycrafting pre-respec**: Planeas una build alternativa antes de gastar Larval Tears in-game.

**Cazar break points de stat**: ¿vale levear str de 50 a 55 para esta arma? El planner muestra exactamente cuánto AR sumás.

**Comparar dos armas**: Pones tu build base, swap el arma y comparas AR/movement directo.

**Compartir builds con amigos**: la URL final encapsula toda la build; pegar y abrir en otro browser preserva todo.

**Planear para SOTE**: con Scadutree level previewed, sabes cuánto Scadutree damage necesitas para tu próximo intento contra Promised Consort Radahn.

## Para quién NO es esta herramienta

Si quieres un planner minimalista (solo stats + starting class), Mugen Monkey es más rápido y limpio.

Si tu workflow gira alrededor de importar/exportar JSON o usar el planner desde un script, EIP no expone API.

Si juegas Nightreign, este planner no aplica — usa Mobalytics o Relics.pro.

## Cómo se usa en la práctica

1. Abre `eip.gg/elden-ring/build-planner/`.
2. Elige starting class (Wretch para máxima flexibilidad, Astrologer para puro INT, etc.).
3. Subí stats con los `+` botones o tipeando el valor directo.
4. Click en cada slot de equipo (head, chest, hands, legs, main hand 1-3, off hand 1-3, talismans, sorceries, incantations).
5. Filtra items por daño, peso, requirements; click para equipar.
6. Mira los paneles laterales: AR total, scaling, defenses, resistances.
7. Copiá la URL para guardar o compartir.

## Limitaciones honestas

**Algunos items raros desactualizados**: data de patches recientes tarda 1-2 semanas en aparecer; arma muy nueva del último patch puede faltar.

**No simula DPS por escenario**: el planner calcula AR estático pero no DPS contra un boss específico con sus resistances elementales.

**Ads**: el sitio es soportado por publicidad; pop-ups ocasionales pero no agresivos.

**No hay versión offline**: requiere conexión.

## Cómo empezar

1. Visita `eip.gg/elden-ring/build-planner/`.
2. Pickeá starting class.
3. Definí level target (NG cap es 713, pero la mayoría juegan PvP a 125 o 150).
4. Iterá stats hasta llegar al AR/defenses que quieres.
5. Copiá la URL final y guardala.
