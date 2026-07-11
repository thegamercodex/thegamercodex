---
title: LOA Logs vs LOA Details — qué DPS meter de Lost Ark usar
description: Dos damage meters open-source de Lost Ark, uno descendiente del otro. Acá por qué la mayoría de los raiders migró a LOA Logs y cuándo LOA Details todavía encaja.
---

Los raiders serios de Lost Ark corren un damage meter para ver su DPS, el uptime de buffs y las tasas de back-attack en tiempo real. Las dos opciones open-source son **LOA Logs** y **LOA Details**, y comparten linaje: LOA Logs es la reescritura moderna en Rust que nació del LOA Details original basado en Electron. Los dos son solo para Windows y gratis en GitHub.

Una nota honesta de entrada: los meters dentro del juego están en una zona gris con los términos de servicio de Lost Ark. Leen datos de paquetes, y Amazon históricamente los toleró pero nunca los endosó. Eso aplica por igual a las dos herramientas — es decisión del jugador, y vale la pena saberlo antes de instalar cualquiera.

## Reescritura moderna vs el original

LOA Logs es la opción más rápida y liviana. Escrito en Rust, es el proyecto con desarrollo más activo y el que corre hoy la mayoría de la comunidad. Las instalaciones nuevas gravitan hacia él porque sigue el ritmo de los parches y se siente más ágil en un raid.

LOA Details es el original — el meter basado en Electron del que LOA Logs hizo el fork. Todavía funciona, y si ya lo tienes configurado no hay una razón urgente para cambiar. Pero es más pesado que la reescritura en Rust y ya no es donde está el grueso del desarrollo activo.

## Cuándo gana cada uno

| Situación | Gana |
|---|---|
| Correr un meter ligero y rápido durante el raid | LOA Logs |
| Recibir actualizaciones y soporte activo parche a parche | LOA Logs |
| Entender el linaje y el proyecto original del meter | LOA Details |
| Usar una build que ya tenías configurada | LOA Details |
| Empezar de cero con lo que usa la comunidad | LOA Logs |

## El veredicto

Para una instalación nueva, **LOA Logs** es la respuesta — es más rápido, está más mantenido y es lo que corre la mayoría de los raiders en 2026. **LOA Details** es el ancestro del que hizo el fork; todavía funciona y está bien si ya estás configurado en él, pero ya no es donde está la energía de desarrollo. En cualquier caso, instala con los ojos abiertos sobre la zona gris de ToS que aplica a todos los meters dentro del juego.
