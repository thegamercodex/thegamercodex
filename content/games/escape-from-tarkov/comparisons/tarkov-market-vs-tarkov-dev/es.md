---
title: Tarkov Market vs Tarkov.dev — qué fuente de precios usar
description: "Tarkov.dev tiene precios. Tarkov Market también. Pero las dos tools optimizan para usos económicos distintos: una para consulta rápida, otra para flipping serio."
---

Si solo te importa saber cuánto vale un item ahora, tarkov.dev te lo da con dos clicks junto con todos los demás datos del item. Si juegas el flea market como mecánica core — flippear, snipear gangas, configurar alerts cuando algo baja — Tarkov Market es la tool especializada. Compiten en parte (ambos muestran precios) pero su sweet spot es completamente distinto.

## Precio actual vs especialización económica

tarkov.dev expone precio de venta a cada trader y precio del flea en la página del item, junto con recetas que lo usan, tasks que lo piden y stats. Es perfecto para la consulta puntual: abres, buscas, lees, cerrás. Pero no tiene histórico visual, alerts ni comparativas profundas de barter.

Tarkov Market es economy-first. Su página del item muestra precio actual + gráficos de 7 y 30 días + alerts configurables + comparación de barters. Para alguien cuyo bottom line depende de timing económico, esos features valen oro.

## Alerts y push notifications

Acá Tarkov Market gana sin discusión. Configurás "alertar cuando GPU < 350k" y al cruzar ese threshold, recibes notificación push en la app mobile. Si flippeas seriamente, esa diferencia entre snipear y perder la oferta es la profit del wipe.

tarkov.dev no tiene alerts ni push. Para reproducir el equivalente tendrías que construir tu propia tool sobre la API GraphQL — posible pero requiere effort.

## Barter trade analysis

Tarkov tiene barter trades — items que se intercambian por otros items en lugar de comprarse con roubles. A veces el barter sale más barato que comprar el item directo en el flea, y otras veces sale más caro. Tarkov Market tiene sección dedicada que calcula automáticamente cuál es la opción más profitable.

tarkov.dev incluye barter trades en su data pero no especializa en la comparación visual. Para alguien que optimiza cada barter, Tarkov Market es la tool específica.

## API para downstream tools

tarkov.dev gana por la GraphQL pública gratuita. Tarkov Market expone una API pero más restringida — requiere token y tiene rate limits más bajos. Si tu proyecto requiere alimentar datos a tu propia tool, tarkov.dev es la opción.

## Cuándo gana cada uno

| Caso de uso | Ganador | Por qué |
|---|---|---|
| Precio actual + datos del item de una vez | tarkov.dev | Página única integrada |
| Alerts de precio con push mobile | Tarkov Market | Feature único |
| Histórico 7-30 días para timing | Tarkov Market | Gráficos visuales |
| Comparar barter vs flea | Tarkov Market | Sección dedicada |
| API para tu propia tool | tarkov.dev | GraphQL gratis |

## Recomendación

Si tu rolling economy es casual, tarkov.dev cubre el 80% de las necesidades. Si flippeas, snipeas o juegas el flea como mecánica core, Tarkov Market es indispensable — los alerts solos justifican el switch. Para la mayoría, tener ambos: tarkov.dev como tab permanente, Tarkov Market app en mobile para alerts.
