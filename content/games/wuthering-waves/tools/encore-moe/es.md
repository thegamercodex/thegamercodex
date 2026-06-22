---
title: "Encore.moe"
description: "Database comunitaria de Wuthering Waves orientada a data cruda y assets: información de Resonators, voicelines y audio, más una API pública para devs que construyen otras tools."
quickTake: "La base de datos para data nerds y devs. Encore.moe junta assets, voicelines y datos de personajes, y expone una API abierta encima. No es donde vas a buscar una build; es donde vas si quieres los datos crudos o construir tu propia herramienta sobre ellos."
---

## Qué es

Encore.moe es una database comunitaria de Wuthering Waves enfocada en data cruda y assets del juego. Reúne información de Resonators, voicelines y audio, y otros recursos navegables del contenido ya existente. Su rasgo distintivo es que, además de la interfaz web, expone una API pública: una forma programática de consultar los datos para que otros desarrolladores construyan sus propias herramientas encima.

No es una wiki narrativa ni una calculadora de daño. Es un repositorio de datos y assets consolidados, pensado tanto para el usuario curioso que quiere explorar voicelines como para el dev que necesita una fuente de datos estructurada.

## Qué problema resuelve

El problema que resuelve es el acceso a los datos crudos y los assets del juego de forma estructurada. Un jugador puede querer escuchar las voicelines de un Resonator o revisar data específica de un personaje que no aparece bien organizada en otros lados. Y un desarrollador que quiere construir una tool —una calculadora, un tracker, un visualizador— necesita una fuente de datos confiable y consultable en lugar de minar los archivos por su cuenta.

Encore.moe cubre las dos puntas: ofrece navegación de assets y voicelines para el usuario, y una API para el dev. Eso convierte la base de datos en infraestructura: en lugar de cada proyecto reinventar la extracción de datos, pueden apoyarse en una fuente común.

## Diferenciación

Tanto Encore.moe como Hakush.in son databases comunitarias de WuWa, pero su foco es distinto. Encore.moe se orienta a **data cruda, assets y API**: voicelines, audio, datos de personajes del contenido existente, y una capa programática para devs. Su valor está en ser una fuente estructurada y consultable.

Hakush.in se especializa en **contenido de beta y leaks**: muestra Resonators, weapons y multiplicadores de lo que todavía no salió. Es para planear el futuro, no para servir datos a otras tools.

Y frente a una wiki como la de Fandom, la diferencia es clara: Fandom es narrativa y explicativa (lore, quests, walkthroughs escritos por la comunidad), mientras Encore.moe es técnica y orientada a datos. Si quieres leer sobre la historia, vas a la wiki; si quieres los datos crudos o una API, vas a Encore.moe.

## Para qué la usa la gente

**Consultar voicelines y audio.** Navegar las líneas de voz de un Resonator, útil para fans del worldbuilding y la caracterización.

**Acceder a data de personajes.** Revisar información estructurada de Resonators más allá de lo que muestra una wiki.

**Construir herramientas con la API.** Usar el endpoint público como fuente de datos para una calculadora, tracker o visualizador propio.

**Explorar assets del juego.** Buscar recursos consolidados sin tener que minar los archivos manualmente.

## Para quién NO es esta herramienta

No es para el jugador que busca guías, builds recomendadas o explicaciones de cómo jugar: Encore.moe sirve datos, no opinión editorial ni rotaciones. Tampoco es para quien quiere lore narrativo o walkthroughs de quests; para eso la wiki de Fandom es mucho más útil. Y no es para quien sigue leaks o quiere planear su economía con contenido de beta: ese es el terreno de Hakush.in. Si tu uso del juego no pasa por curiosear data cruda ni por construir nada técnico, esta herramienta probablemente no te aporte nada.

## Cómo se usa en la práctica

1. Entra a encore.moe y elige el idioma de la interfaz.
2. Navega las secciones de Resonators, voicelines o assets según lo que quieras consultar.
3. Abre un personaje para ver su data estructurada o reproducir sus voicelines.
4. Si eres dev, revisa la documentación o los endpoints de la API pública.
5. Integra esos datos en tu propia herramienta consultando la API en lugar de minar los archivos del juego.

## Limitaciones honestas

**Es nicho y técnico.** El foco en data cruda y API lo hace poco útil para el jugador promedio que solo quiere builds o guías.

**No es una calculadora ni una guía.** Te da datos, no te dice qué hacer con ellos ni cómo optimizar un personaje.

**No cubre lore narrativo.** Para historia, quests y walkthroughs, una wiki es la opción correcta, no esta.

**Está en inglés (con opciones de idioma).** Aunque la interfaz ofrece selección de idioma, el grueso del contenido y la documentación están pensados en inglés.

**La estabilidad de la API depende del proyecto comunitario.** Al ser mantenida por la comunidad, los endpoints pueden cambiar; un dev debe asumir esa dependencia.

## Cómo empezar

Si eres jugador, entra a encore.moe y explora las voicelines o la data de tu Resonator favorito para ver qué tipo de información ofrece. Si eres desarrollador, busca la documentación de la API y prueba un par de consultas para evaluar si encaja como fuente de datos de tu proyecto. En ambos casos, ten claro qué es esta herramienta: una base de datos cruda y una API, no una guía. Su utilidad depende de que tu necesidad sea acceder a datos o assets, no a consejos de cómo jugar.
