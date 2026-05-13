---
title: "Path of Crafting"
description: "Simulador web de crafteo para Path of Exile 2 enfocado en mod pools en tiempo real y probabilidades exactas, actualizado al parche actual de la liga."
quickTake: "Para verificar exactamente qué mods pueden caer y con qué probabilidad antes de gastar currency en un craft, este sitio es directo: pegas el item, ves la pool completa con porcentajes. Más simple que Craft of Exile, más enfocado en PoE 2, sin curva de aprendizaje."
---

## Qué es

Path of Crafting es un simulador web de crafteo enfocado específicamente en Path of Exile 2. Vive en `pathofcrafting.net`, no requiere registro, y se actualiza con el patch activo de la liga (al momento de verificar, "Last of the Druids" 0.4).

La propuesta principal es mostrar mod pools en tiempo real con probabilidades exactas — antes de gastar una Exalted o un Regal Orb, ves qué mods pueden rollear y con qué porcentaje. Eso convierte la decisión de craftear de intuición a cálculo.

El equipo detrás del sitio mantiene también una aplicación móvil con el mismo nombre que cubre principalmente Path of Exile 1, pero la versión web está dedicada a PoE 2.

## Qué problema resuelve

PoE 2 hereda el sistema de crafteo profundo de PoE 1: cada base item tiene un pool de mods posibles, los orbs los modifican según reglas específicas, y los números importan. La diferencia entre un craft exitoso y uno mediocre puede ser una mod específica con baja probabilidad.

Sin un simulador, el workflow es: leer wiki para entender mod pool de un base, calcular mentalmente probabilidades, gastar orbs y rezar. Path of Crafting reemplaza el "rezar" con "ver el número antes de actuar". Para players que crafteán endgame gear, eso ahorra currency real.

## Diferenciación

Frente a Craft of Exile (`craftofexile.com`): Craft of Exile es la herramienta histórica de crafteo desde PoE 1, masivamente más completa, con simulaciones de fossiles, essences, harvest, beast crafting, y más. Path of Crafting es más simple, más enfocado en mod pools y probabilidades base, y específicamente PoE 2.

Para crafteos avanzados con mecánicas multi-orb (multimod, beast craft, fossil combinations) Craft of Exile es superior. Para "qué puedo rollear con un Exalted en este base item" Path of Crafting es más rápido y directo.

## Para qué la usa la gente

**Pre-craft pool check**: antes de comprar o usar un base, verificas qué mods son posibles. Evita comprar bases que no pueden rollear lo que necesitas.

**Probabilidad exacta de hit**: si necesitas "T1 Increased Physical Damage" rolleado con un Exalted, el sitio te dice el porcentaje. Decides si vale la pena.

**Ajuste de presupuesto de craft**: con la probabilidad sabes cuántos intentos esperas. Si es 1/200, calculas currency necesaria realista.

**Aprendizaje de mod pools por slot**: jugadores nuevos al crafteo usan el sitio para entender qué mods existen en cada tipo de gear, sin tener que memorizar wiki.

**Verificación de items rare antes de comprar**: si alguien lista un item con cierta combo de mods, verificas si los mods existen en ese base (a veces hay scams con mods imposibles renombrados).

## Para quién NO es esta herramienta

Si necesitas simular fossil crafting, harvest crafting, beast crafting o cualquier mecánica avanzada, Craft of Exile es la herramienta correcta — Path of Crafting no cubre esa profundidad.

Si juegas casual y no crafteas (solo equipas drops y compras gear listo), un simulador de crafteo no aporta nada.

Si juegas Path of Exile 1, esta herramienta cubre PoE 2 — para PoE 1 hay otras opciones (Craft of Exile, awakened-poe-craft, etc.).

Si esperas interfaz pulida tipo PoE Trade oficial, sabé que Path of Crafting es funcional pero más austero visualmente.

## Cómo se usa en la práctica

1. Vas a `pathofcrafting.net`. La página principal te lleva al simulador.
2. Eliges el tipo de base item (weapon, armour, jewel, etc.) y la categoría específica (one-handed sword, body armour heavy, etc.).
3. Seleccionas el item level del base (afecta qué mods son accesibles).
4. Eliges el orb que quieres simular (Transmute, Augmentation, Regal, Exalted, Chaos, etc.).
5. El sitio muestra el mod pool completo con probabilidad de cada mod.
6. (Opcional) Filtras mods por keyword o tier para enfocar la lectura.
7. Si el resultado te conviene, gastas los orbs reales en el juego con expectativas calibradas.

## Limitaciones honestas

**No simula crafteos avanzados**. Fossiles, essences, harvest, beast crafting — todo eso vive en Craft of Exile, no acá.

**Solo en inglés**. Sin localización al español. Términos técnicos del juego (mod names, suffixes/prefixes) son en inglés.

**Closed source aparente**. La versión web no tiene repo público de GitHub asociado (la app móvil legacy lo tiene, pero es PoE 1 y desactualizada desde 2021). Si quieres auditar el código o forkear, no es opción.

**Lag tras patches**. Cuando GGG ajusta mod pools o probabilidades en un patch, el sitio se actualiza pero puede haber días de delay. Verifica `lastVerified` del codex contra el patch actual del juego antes de crafteos importantes.

**Datos vienen de extracción community**. Las probabilidades exactas vienen de leak/datamining/playtest community. Generalmente correctas pero no oficiales — GGG no confirma números.

**No simula resultados acumulados de orbs múltiples**. Si quieres simular "tiré 100 Chaos Orbs en este item, qué resultados esperar estadísticamente", el sitio muestra probabilidad por orb pero no acumulado. Para Monte Carlo necesitas otra herramienta o cálculo manual.

## Cómo empezar

Vas a `pathofcrafting.net` y empiezas eligiendo un base item simple para familiarizarte. La primera vez vale la pena explorar 2-3 bases distintos viendo cómo cambia la pool por categoría.

Para uso productivo: cuando estés por gastar currency real (Exalted, Divine, Annul) en un craft, abre el sitio antes y verifica la pool. Si el mod que necesitas tiene 1% de probabilidad, decidí si tienes el budget; si tiene 30%, anda tranquilo.

Para crafteos simples (1-2 orbs sobre un base), el flow es de 30 segundos. Para crafteos complejos (chains de Exalted slamming sobre prefijos lockeados), el sitio te ayuda a planear pero igual necesitas conocimiento de mecánicas que vive en guías escritas (Maxroll, wiki).
