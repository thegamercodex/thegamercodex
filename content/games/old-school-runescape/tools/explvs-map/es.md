---
title: Explv's Map
description: Explv's Map es un mapa del mundo de OSRS interactivo, basado en Leaflet, disponible desde 2016 en explv.github.io. Muestra el mapa completo con coordenadas y region IDs, y permite definir áreas, paths y posiciones.
quickTake: Es la herramienta cuando necesitas coordenadas exactas, region IDs o trazar un path concreto, algo que el mapa de la wiki no hace. Para navegar y leer el mundo, la wiki sigue siendo más cómoda; Explv's Map brilla en el trabajo de precisión.
---

## Qué es

Explv's Map es un mapa del mundo de Old School RuneScape totalmente interactivo, construido sobre Leaflet y disponible desde 2016 en explv.github.io. Te permite recorrer el mapa completo del juego viendo coordenadas en vivo y los region IDs, buscar ubicaciones y dungeons por nombre, y crear o definir áreas, poly-areas, paths y posiciones individuales.

Nació principalmente para la comunidad de scripting y desarrollo de bots, donde definir áreas por coordenadas es parte del flujo diario. Pero esa misma precisión lo hace útil para cualquier jugador que quiera navegar, ubicar lugares oscuros o planear rutas. Es de código abierto y su fuente está en GitHub.

## Qué problema resuelve

El mapa de la OSRS Wiki es excelente para leer el mundo, pero no está pensado para trabajar con coordenadas crudas ni para exportar áreas definidas. Cuando necesitas el (x, y) exacto de un tile, el region ID de una zona o trazar un recorrido punto por punto, te quedas corto.

Explv's Map cubre justo ese hueco. Hace visibles las coordenadas y los region IDs, y te deja construir áreas y paths de forma interactiva sobre el mapa, lista para copiar a un script o para planear una ruta con precisión.

## Diferenciación

El competidor obvio es el mapa de la OSRS Wiki. Son complementarios, no equivalentes.

El mapa de la wiki está orientado al jugador que lee: marca POIs, enlaza a artículos, integra búsqueda de la wiki y es cómodo para "dónde queda esto". Explv's Map está orientado a las coordenadas: su valor es exponer (x, y) y region IDs y darte herramientas para definir áreas, poly-areas y paths. Donde la wiki te dice "esto está acá", Explv's Map te dice "esto es el tile exacto y así defines el área".

Por eso muchos los usan juntos: la wiki para entender el mundo, Explv's Map para trabajar con su geometría.

## Para qué la usa la gente

- **Obtener coordenadas exactas**: leer el (x, y) de cualquier tile, útil para scripts, plugins y guías.
- **Encontrar region IDs**: identificar la region de una zona para debugging o desarrollo.
- **Definir áreas y poly-areas**: dibujar regiones sobre el mapa y exportarlas a código.
- **Trazar paths**: planear recorridos punto por punto para movimiento o navegación.
- **Ubicar lugares oscuros**: buscar dungeons y ubicaciones por nombre cuando no recuerdas dónde están.

## Para quién NO es esta herramienta

No es para quien solo quiere un mapa cómodo para leer mientras juega; para eso el mapa de la wiki es más amigable y más integrado al contenido. Tampoco es la herramienta si buscas POIs anotados, drops o info contextual de cada zona: Explv's Map es geometría y coordenadas, no una enciclopedia. Su valor sube cuando trabajas con datos del mapa, no solo con el mapa.

## Cómo se usa en la práctica

1. Abre https://explv.github.io en el navegador; no necesitas instalar nada.
2. Navega el mapa con el mouse; al moverte verás las coordenadas en vivo y el region ID actual.
3. Usa la búsqueda para saltar a una ubicación o dungeon por nombre.
4. Activa el modo de área o path para empezar a definir; haz clic en los tiles para construir el área, poly-area o recorrido.
5. Copia las coordenadas o la definición generada para usarla en tu script, plugin o guía.

## Limitaciones honestas

- **Orientada a coordenadas**: si solo quieres leer el mundo, la curva es menos amigable que la del mapa de la wiki.
- **Sin info contextual**: no trae drops, POIs anotados ni enlaces a artículos como la wiki.
- **Solo en inglés**: la interfaz está en inglés.
- **Render del mapa**: es una herramienta comunitaria; la actualización de tiles depende del mantenimiento del proyecto y puede ir detrás de cambios muy recientes del juego.
- **Pensada para devs**: muchas funciones (region IDs, poly-areas) tienen sentido pleno solo si trabajas con coordenadas.

## Cómo empezar

Entra a https://explv.github.io y empieza a moverte por el mapa: con solo navegar ya verás coordenadas y region IDs. Si tu objetivo es definir un área o un path, activa el modo correspondiente y haz clic en los tiles para construirlo. Para navegación casual, tenla junto al mapa de la wiki y usa cada una para lo que hace mejor. El código está en GitHub si quieres revisarlo o autohospedarlo.
