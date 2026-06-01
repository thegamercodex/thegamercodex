---
title: "Mugen Monkey (Elden Ring)"
description: "El planner de Souls clásico portado a Elden Ring: minimalista, rapidísimo, especializado en starting class optimization para PvP capped builds."
quickTake: "Si juegas PvP a 125/150 y necesitas el starting class óptimo para tu stat spread exacto, Mugen Monkey lo calcula en segundos — la UI es austera pero la matemática es impecable."
---

## Qué es

Mugen Monkey es un planner web mantenido por la comunidad Souls desde Dark Souls 1, extendido a cada juego de FromSoftware (DS1, DS2, DS3, Bloodborne, Sekiro, Elden Ring). La versión Elden Ring vive en `mugenmonkey.com/eldenring/`. Es gratis, sin ads, sin login.

La UI es minimalista por diseño: hereda el estilo de planners de los Dark Souls clásicos. Tablas, dropdowns y números — nada de animaciones ni branding pesado.

## Qué problema resuelve

Para PvP en Elden Ring, el meta level es típicamente 125 o 150. Cada punto de stat cuenta, y elegir el starting class incorrecto te puede dejar atrapado con 1-2 puntos perdidos en stats que no usas. Mugen Monkey optimiza esto: ingresas los stats finales que quieres, y te dice exactamente qué starting class minimiza el total level requerido.

Esto es la feature killer del sitio — ningún otro planner la implementa con la misma claridad.

## Diferenciación

Contra EIP gana en starting class optimization (feature única) y en velocidad de UI (no hay JS pesado, carga instantánea). Pierde en cobertura de items raros y SOTE — su database de DLC tiene gaps. Contra tarnished.dev pierde en estética pero gana en confianza por el legado: tiene 14 años de uso por la community Souls.

## Para qué la usa la gente

**Starting class optimizer**: Ingresa vigor/mind/end/str/dex/int/fai/arc finales; te devuelve el class mínimo en términos de level total.

**Stat min-maxing para PvP capped**: encontrar el spread óptimo para meta 125/150.

**Twink builds**: para invasiones a niveles bajos (level 30-60), Mugen calcula el spread más eficiente.

**Cross-game theorycrafting**: si vienes de DS3 y quieres portar tu build, el layout familiar acelera la adaptación.

## Para quién NO es esta herramienta

Si quieres ver AR previewed con todos los items y AoWs equipados, Mugen no llega a ese nivel de detalle. Para eso, EIP o tarnished.dev son mejores.

Si juegas SOTE y necesitas data del DLC actualizada, Mugen es menos confiable que EIP.

Si te molesta UI austera estilo 2010s, vas a sufrir — Mugen no se modernizó visualmente.

## Cómo se usa en la práctica

1. Abre `mugenmonkey.com/eldenring/`.
2. En el panel izquierdo, ingresa los stats finales que quieres.
3. Mugen muestra automáticamente: starting class óptimo, level total resultante, y soft caps que estás cruzando.
4. Para equipo, click en weapon slot → selecciona arma; AR aparece a la derecha.
5. Iterá hasta llegar al spread/level que te gusta.
6. Guarda la URL (el state está encoded en query params).

## Limitaciones honestas

**Data de SOTE incompleta**: weapons y talismans del DLC tienen gaps notables. Para builds que usen items raros del Realm of Shadow, validá contra EIP.

**Sin import/export**: la URL es el único mecanismo de guardado.

**UI desactualizada**: dropdowns sin search, tablas anchas en mobile difíciles de leer.

**Mantenimiento esporádico**: el dev acepta PRs pero el ritmo de updates es semanal-mensual, no diario.

**Sin previsualización de DPS**: solo AR estático.

## Cómo empezar

1. Anda a `mugenmonkey.com/eldenring/`.
2. Decidí tu target level (125 / 150 / NG cap).
3. Ingresa los stats que quieres llegar.
4. Anotate el starting class que sugiere.
5. Empieza tu Tarnished nuevo con ese class, o ejecuta los respecs necesarios.
