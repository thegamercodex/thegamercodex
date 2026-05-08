---
title: "Enhancement Progression Calculator"
description: "Calculadora oficial de HoYoverse que computa exactamente cuántos materials, mora, hero's wit y resin necesitás para subir personajes, armas y talents desde su nivel actual hasta el target deseado."
quickTake: "Si te cuesta planificar farms semanales o no sabés cuánto resin gastar antes del próximo banner, este es el cálculo oficial sin estimaciones de comunidad. La integración con tu cuenta lo hace más preciso que tools third-party."
---

## Qué es

Enhancement Progression Calculator es la calculadora oficial de Genshin Impact dentro de HoYoLAB. Te permite seleccionar uno o varios personajes, sus armas y sus talents, especificar el nivel actual y el target, y te devuelve la lista exacta de materials necesarios para llegar al objetivo.

El feature diferenciador: si tenés tu cuenta linkeada, lee tu inventario in-game y te dice no solo "necesitás 60 Cor Lapis" sino "te faltan 23 Cor Lapis". También calcula resin total, mora total, hero's wit, y mystic enhancement ore.

Es web-based, gratis, y soporta los 15 idiomas de HoYoLAB incluyendo español.

## Qué problema resuelve

Genshin tiene un sistema de progresión denso: cada personaje requiere ascensiones (cada 20 niveles a partir del 20), cada talent tiene 10 niveles que requieren materials específicos del jefe semanal y libros de talent, y cada arma tiene su propio camino de ascensión.

Multiplicado por 60+ personajes en un roster típico, planificar "cuánto necesito ahorrar para subir a Furina al 90" sin tool se vuelve agotador. Sumando armas y talents, fácilmente pasás 30+ minutos haciendo cálculos en una hoja de Excel.

Enhancement Calculator hace eso en 30 segundos. Le decís dónde está cada cosa y a dónde querés llegar, y te dice resin total, mora total, materials específicos faltantes, y boss runs requeridos.

## Diferenciación con calculadoras community

Genshin Center, Paimon.moe y otros calculators community ofrecen funciones similares con UX más pulido. La diferencia clave de Enhancement Calculator: **lee tu inventario real**. Genshin Center te pregunta "¿cuántos Cor Lapis tenés?" y vos tenés que ingresar manualmente. Enhancement Calculator lo lee directo de tu cuenta.

Recomendación: usá Enhancement Calculator cuando querés precisión absoluta sobre lo que te falta hoy, Genshin Center/Paimon.moe cuando querés planificar varios personajes a futuro con UI más amigable.

## Para qué la usa la gente

**Planificar farms para banner próximo**: querés a Furina al 90 con todos los talents al 9 antes de que cierre su banner. La calc te dice cuántos boss runs (resin) y cuánto mora necesitás. Decidís si te alcanza el tiempo.

**Decidir si subir a 80 o 90**: la diferencia 80→90 es enorme en costo (mora, hero's wit, ascension materials). La calc te muestra ese delta para decidir conscientemente.

**Comparar costos de varios candidates a 90**: tenés 3 personajes que querés subir pero no llegás a todos. La calc te muestra el costo de cada uno y priorizás según resin/materials disponibles.

**Calcular total de talent upgrades para un team**: tu team de 4 personajes con todos los talents al 9 cuesta X libros de talent y Y materials de boss semanal. Vital para no quedarse sin progreso a mitad de Spiral Abyss season.

**Planificar runs de domain de talents**: cada domain dropea libros de talent específicos según día de la semana. Saber cuántos libros necesitás te dice cuántos días hay que farmear, y cuáles días.

## Para quién NO es esta herramienta

Si solo subiste 1-2 personajes y entendés intuitivamente cuánto necesitás, no tiene sentido el overhead de loguearte y configurar. Si preferís UI más visual con planning multi-personaje en una sola pantalla, Genshin Center es más cómodo. Si jugás Genshin desde múltiples cuentas (servidores distintos), la calc oficial requiere switchear entre cuentas y se complica.

## Cómo se usa en la práctica

1. Vas a `act.hoyolab.com/ys/event/calculator-sea/index.html` con tu cuenta logueada.

2. Linkás tu cuenta de Genshin si todavía no lo hiciste (te avisa automáticamente).

3. Eligís el personaje. Te muestra su nivel actual leído de tu cuenta. Ingresás el nivel target.

4. Repetís para arma y para los 3 talents (Normal Attack, Elemental Skill, Burst).

5. Click en "Calculate". Te muestra la lista de materials con cuánto necesitás y cuánto te falta basándose en tu inventario actual.

6. (Opcional) Click en cada material para que te muestre dónde se farmea (zone, boss, domain, day).

## Limitaciones honestas

**Requiere cuenta linkeada para máxima utilidad**. Sin login, podés calcular pero no lee tu inventario, lo que pierde la mayor ventaja de la tool oficial.

**No planifica multi-personaje en una vista**. Solo calculás un personaje + arma + talents a la vez. Para planificar 5 personajes simultáneamente tenés que abrir 5 tabs o hacerlo secuencialmente. Genshin Center y Paimon.moe lo manejan mejor.

**Es web-only, no hay app móvil dedicada**. La app de HoYoLAB tiene la calculadora pero la UX en mobile es apretada. PC/tablet recomendado para uso serio.

**No considera artefactos en el cálculo**. Solo calcula leveling/ascension/talents, no farming de artefactos. Si planificás "build completo a 90 con artifacts farmeados", la calc cubre solo el primero.

**Updates de balance pueden no reflejarse instantáneamente**. Cuando HoYoverse cambia talent costs (raro pero pasa), la calc puede tener delays de horas/días en actualizar. Siempre cross-check con patch notes oficiales.

**Sin función de "planning futuro"**. La calc te dice qué necesitás hoy para llegar a un target. No te ayuda a decidir "si en 3 semanas farmeo X días, ¿llego?". Para eso necesitás otra tool con planificación temporal.

## Cómo empezar

Andá a `act.hoyolab.com/ys/event/calculator-sea/index.html` con tu cuenta HoYoverse linkeada a Genshin. Si nunca linkaste tu cuenta, la calc te lleva al setup primero.

Para tu primer uso, recomiendo: probala con un personaje que estés actualmente subiendo. Eligís el personaje, su nivel actual sale automáticamente, ponés target 80 (o 90 si tenés materials). Comparás lo que dice la calc con tu intuición de "¿cuánto me falta?". Después de 1-2 personajes, sabés exactamente cómo leer los outputs.

Para uso recurrente: cuando se anuncia un banner próximo, planificá ahí mismo qué quierés llegar a tener cuando salga. Te da un plan de gasto de resin para las próximas 2-3 semanas concreto.
