---
title: "WFInfo"
description: "Overlay open source que reconoce por OCR la pantalla de recompensas de Void Relic en fissures y muestra el valor en platinum y ducats de cada opción."
quickTake: "La herramienta que resuelve el 'cuál recompensa agarro' en pleno fissure. Gratis, open source y sin ads — la usan tanto principiantes como veteranos."
---

## Qué es

WFInfo es un overlay de escritorio open source que lee por OCR la pantalla de recompensas de Void Relic durante misiones de fissure. En el momento en que aparecen las cuatro recompensas posibles del squad, WFInfo te muestra el valor de cada una en platinum (precio de mercado, jalado de Warframe Market) y en ducats, para que elijas la mejor en los segundos que tienes para decidir.

Lo mantiene WFCD (Warframe Community Developers), es gratuito, sin ads, bajo licencia Apache-2.0, y se actualiza activamente. Es una de las herramientas más universalmente usadas del ecosistema.

## Qué problema resuelve

Cuando abres un Void Relic en un fissure, ves cuatro recompensas (la tuya y la de tus tres compañeros) y tienes pocos segundos para elegir una. El juego no te dice cuál vale más. Sin información, agarras a ciegas y a veces dejas pasar la parte Prime cara por una común.

WFInfo elimina esa fricción: en cuanto aparece la pantalla, te superpone el valor de cada opción. De un vistazo sabes cuál es la recompensa más rentable —en plata para vender o en ducats para gastar con Baro— y eliges con criterio. En sesiones de relic farming, eso se traduce en mucho más platinum por hora.

## Diferenciación

Frente a AlecaFrame (el overlay todo-en-uno), WFInfo es de propósito único: solo hace lectura de relics, pero lo hace perfecto, gratis y sin pedir nada a cambio. AlecaFrame también lee relics pero es una suite pesada con inventario, foundry, rivens y analytics, y sus features más avanzadas están detrás de Patreon.

La regla práctica: si solo quieres el price-check de recompensas de relic, WFInfo alcanza y sobra. Si quieres un companion completo que además gestione inventario y trading, AlecaFrame. Muchos jugadores corren WFInfo solo, justamente por ser liviano y open source.

## Para qué la usa la gente

**Elegir la mejor recompensa de relic**: el caso de uso central. Ves el valor de las cuatro opciones y agarras la más rentable.

**Relic farming eficiente**: en runs repetidas de fissure (Survival, Defense), WFInfo maximiza el platinum por hora al evitar que dejes pasar drops valiosos.

**Aprender precios sin memorizar**: con el tiempo internalizas qué partes Prime valen, porque las ves tasadas run tras run.

**Consultar el panel de relics**: incluye una referencia de qué dropea cada relic, útil para planear qué relics abrir.

**Pegar precios al chat**: puede copiar la valuación para compartirla con el squad.

## Para quién NO es esta herramienta

Si juegas en consola o mobile, WFInfo no aplica: es un overlay de Windows que lee la pantalla del PC.

Si no farmeas relics ni te interesa el trading, no le vas a sacar provecho — su única función gira alrededor de las recompensas de Void Relic.

## Cómo se usa en la práctica

1. Descargas el instalador desde el sitio oficial o el GitHub de WFCD.
2. Lo instalas y lo dejas corriendo en segundo plano mientras juegas en Windows.
3. Configuras el hotkey de activación (por defecto detecta la pantalla de recompensas automáticamente).
4. En un fissure, cuando aparece la pantalla de recompensas, WFInfo superpone el valor de cada opción.
5. Eliges la recompensa más rentable según quieras platinum o ducats.

## Limitaciones honestas

**Solo Windows**: es un overlay que lee la pantalla del juego en PC. No hay versión consola ni mobile.

**Depende del OCR**: en resoluciones raras, idiomas de juego no soportados o con HUD modificado, el reconocimiento puede fallar. Es configurable, pero requiere ajuste en esos casos.

**Precios con lag**: los valores vienen de Warframe Market, así que heredan su lag y su sesgo de listados públicos.

**Requiere confianza en software de terceros**: corre en segundo plano leyendo la pantalla. Al ser open source bajo Apache-2.0, el código es auditable, lo que mitiga la preocupación.

## Cómo empezar

Descarga el instalador desde `wfinfo.warframestat.us` o el repo de GitHub, instálalo y déjalo abierto al jugar. La configuración por defecto funciona para la mayoría; si tu resolución o idioma de juego es atípico, ajusta el OCR en settings. A partir de ahí, cada fissure te muestra los valores sin que hagas nada.
