---
title: gcsim
description: Simulador Monte Carlo de combate de equipo para Genshin Impact, usado por teorycrafters para comparar comps, rotaciones y builds con resultados estadísticos rigurosos.
quickTake: La herramienta de teorycrafting más respetada del ecosistema. No es para todos —tiene curva pronunciada— pero si quieres saber qué team comp pega más fuerte con datos reales en lugar de opiniones, gcsim es donde se hace el análisis serio.
---

## Qué es

gcsim es un simulador de combate Monte Carlo open source para Genshin Impact. Le das un equipo de cuatro personajes con sus armas, artefactos y stats; le escribes una rotación (la secuencia de habilidades, ataques normales, cargados y burst); y el simulador ejecuta esa rotación cientos o miles de veces para darte una distribución estadística del DPS esperado, no un único número.

El proyecto vive en gcsim.app como webapp y también está disponible como CLI para uso avanzado. Está bajo licencia MIT, mantenido por voluntarios desde 2022, con releases continuos (la versión actual es v2.41.x de abril 2026) y una comunidad de unos 7,000 miembros en Discord.

## Qué problema resuelve

El problema clásico del teorycrafting en Genshin: ¿cuánto daño hace realmente este team comp? Las calculadoras tradicionales te dan números de "daño por hit" descontextualizados —cuánto pega un Vaporize de Hu Tao con tales stats— pero ignoran lo que pasa en una pelea real: rotaciones de 20 segundos, uptimes de buffs, generación de partículas, ICD de reacciones, ventanas de skill, tiempos de animación frame por frame.

gcsim resuelve esto modelando el combate como una simulación temporal completa. Sabe cuántos frames dura cada animación, cuándo expiran los buffs, cuándo se generan partículas, cómo interactúan las reacciones con el ICD. Y al correrlo en modo Monte Carlo, te muestra la varianza: no solo "este team hace 80k DPS" sino "el DPS promedio es 80k, con desviación estándar de 6k, y en el peor 5% de runs hace 70k". Esa información es lo que separa una guía rigurosa de una opinión.

## Para qué la usa la gente

La comunidad de teorycrafting de Genshin —especialmente la órbita de KQM (Keqing Mains)— usa gcsim como motor de análisis para sus guías. Cuando ves un "tier list" o una recomendación de team comp seria, muchas veces el sustento son configs de gcsim corriendo miles de iteraciones.

Los casos típicos: comparar dos team comps para Spiral Abyss con la misma cuenta de personajes; decidir si vale la pena pullear a un personaje específico para reemplazar a otro en tu rotación; testear si subir un talent de 8 a 10 mejora el DPS lo suficiente para justificar el costo; validar si un weapon F2P funciona "casi tan bien" como uno limitado dentro de un team específico.

## Diferenciación con Genshin Optimizer y Akasha

Esta es la confusión más común, así que vale la pena ser explícito: las tres herramientas resuelven problemas distintos.

**Genshin Optimizer** te dice qué artefactos *de los que tienes en tu inventario* maximizan una stat objetivo (típicamente daño esperado en una hit única). Es un optimizador combinatorio sobre tu pool real.

**Akasha System** te muestra cómo se compara tu personaje contra una leaderboard global usando una métrica de daño teórico estandarizada. Es ranking comparativo.

**gcsim** ejecuta una rotación completa de combate en un equipo de cuatro personajes y mide el DPS sostenido con análisis estadístico. Es simulación de combate, no optimización de gear ni comparación de showcase.

En la práctica se usan en cadena: optimizas artefactos en GO, exportas el equipo a gcsim, escribes la rotación, y simulas. gcsim incluso tiene importación directa desde Enka.Network y Genshin Optimizer.

## Limitaciones honestas

**La curva de aprendizaje es real.** gcsim usa una DSL (lenguaje propio) para describir rotaciones. Escribir tu primera config desde cero toma horas, no minutos. La documentación es buena pero técnica. Si no estás dispuesto a leer docs y aprender sintaxis, esta herramienta no es para ti —y está bien, no todos los jugadores necesitan este nivel de análisis.

**Los modelos son aproximaciones.** El propio equipo lo dice: están refinando constantemente la precisión del sim. Hay aspectos del combate real (movimiento del enemigo, hitboxes complejas, timing humano imperfecto) que el sim simplifica o asume idealmente. Los resultados son útiles para *comparar* opciones entre sí, no como predicción exacta de tu DPS in-game.

**Depende de configs de calidad.** Una rotación mal escrita produce resultados engañosos. La comunidad mantiene una database de configs validadas, pero si escribes la tuya desde cero, los errores son fáciles y silenciosos.

**Solo en inglés.** La app, docs y comunidad son anglófonas. Para lectores hispanohablantes, esto suma una capa adicional de fricción.

## Cómo se usa en la práctica

El flujo típico de un usuario serio:

1. Optimiza artefactos en Genshin Optimizer y exporta el equipo.
2. Importa a gcsim vía la integración con GO o Enka.Network.
3. Busca una config de rotación validada para su team comp en la database de gcsim (Discord/web).
4. Adapta la config a sus personajes específicos (constellations, refinements).
5. Corre la simulación con 1000+ iteraciones.
6. Compara resultados contra otra variante (otro personaje, otro weapon, otra rotación).
7. Toma decisiones basadas en la diferencia estadística, no en el número absoluto.

## Cómo empezar

Si quieres probar sin compromiso: entra a gcsim.app, carga una de las simulaciones de ejemplo (samples) que ya están en la database, y corré. Vas a ver la interfaz, los resultados, el frame-by-frame.

Si quieres ir en serio: lee la guía "Building a Sim from Scratch" en docs.gcsim.app, súmate al Discord para resolver dudas, y arranca replicando una rotación documentada de un team comp que ya juegues. Recién después intenta escribir una desde cero.