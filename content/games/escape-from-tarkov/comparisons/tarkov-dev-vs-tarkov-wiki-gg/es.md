---
title: Tarkov.dev vs Tarkov Wiki — qué referencia usar para qué cosa
description: Comparativa profunda entre la base de datos comunitaria y el wiki canónico. Cada uno gana en dominios distintos y la mayoría de jugadores serios usa los dos.
---

Tarkov.dev y el Tarkov Wiki en wiki.gg representan dos enfoques completamente distintos al problema de "dónde busco información sobre Escape from Tarkov". Uno es una base de datos estructurada, actualizable vía API y diseñada para consultas rápidas. El otro es un wiki tradicional construido sobre MediaWiki, con artículos largos editados por la comunidad. La trampa común es pensar que son sustitutos — no lo son. Son complementos, y entender cuál usar para qué cosa ahorra horas de búsqueda mal dirigida.

## Lo que hace cada uno

Tarkov.dev es la fuente de verdad estructurada de datos jugables: precios del flea market en tiempo real, recetas del hideout, listas de tasks por trader, mapas interactivos y la API GraphQL pública en api.tarkov.dev que alimenta a la mayoría de las demás tools del ecosistema (incluido TarkovTracker, Tarkov Advisor, RatScanner y varios overlays). Cuando un parche cambia precios o nerfea un ammo, tarkov.dev refleja eso en horas porque depende de scraping automatizado y community contributions estructuradas.

El Tarkov Wiki en wiki.gg, en cambio, es la enciclopedia narrativa del juego: artículos editoriales sobre mecánicas, lore de traders, historia de locations, mecánicas removidas que la community quiere documentar, trivia y context que no cabe en una database. Es mantenido por editores voluntarios bajo MediaWiki y conserva la cobertura histórica del juego desde sus primeros años de beta. La migración desde Fandom en 2023 mantuvo todo el contenido editorial pero abandonó el peso comercial de la plataforma anterior.

## Velocidad de actualización

Acá la diferencia es brutal. Tarkov.dev opera sobre datos en formato estructurado (JSON, tarkovdata GitHub repo) y se actualiza mediante PRs automáticos o community-submitted en horas. Cuando BSG anuncia un parche en TarkovTV el viernes, los precios del flea reflejados el sábado en tarkov.dev ya son los nuevos.

El wiki depende de editores manuales escribiendo prosa. Tras un parche grande, los artículos numéricos (penetración de ammo, stats de armor, modificadores de daño) suelen quedarse desactualizados durante semanas. No es por descuido — es por la naturaleza del formato. Un artículo sobre "el wiki de Customs" no se actualiza por bot; alguien tiene que reescribir párrafos.

Por eso, para cualquier dato numérico actual, tarkov.dev gana. El wiki es el lugar correcto cuando el dato que buscas es narrativo o contextual.

## Profundidad editorial vs datos puros

Tarkov.dev es deliberadamente minimalista en prosa. La página de un item te muestra valor en cada trader, precio del flea, recetas que lo usan, tasks que lo piden, links a items relacionados. Pero no te explica por qué un item es bueno, qué builds lo usan, o cuál es su contexto en el meta. Eso es decisión de diseño — tarkov.dev quiere ser una fuente de datos limpia que otras herramientas reutilizan.

El wiki te da prosa: artículos de 5,000 palabras sobre una location explicando spawns, rutas, history, eventos del juego que ocurrieron ahí, trivia. Si quieres entender el contexto de un trader (quién es Therapist, por qué vende meds, su rol en la story que se expande con 1.0), el wiki es donde lo encuentras. Tarkov.dev solo te diría qué vende.

## Soporte de API y ecosistema downstream

Esto es probablemente la diferencia más importante para tooling. Tarkov.dev expone una API GraphQL gratuita y abierta. Eso significa que cualquiera puede construir un dashboard, bot de Discord, overlay o site sobre los datos del juego. TarkovTracker, Tarkov Advisor, RatScanner, varios bots de Discord — todos sacan datos de tarkov.dev. Ese efecto network es enorme: cuando tarkov.dev se actualiza, el ecosistema entero se actualiza.

El wiki no tiene API programática equivalente. Sí, MediaWiki tiene su propia API que permite scraping de artículos, pero el contenido es prosa no estructurada — no se presta para integración programática útil. Si tu necesidad incluye "quiero datos en mi propia tool", tarkov.dev es la única opción.

## UX y accesibilidad

Tarkov.dev tiene una interfaz moderna optimizada para search rápido y navegación cross-linked. El search global encuentra cualquier item, task, trader o location en uno o dos teclazos. La página resultante carga rápido y los links a entidades relacionadas son inmediatos.

El wiki es MediaWiki estándar con el theme de wiki.gg. Search funciona, pero la navegación es la clásica de wikis: TOC en el lateral, hyperlinks dentro del texto, redirects históricos. Para gente acostumbrada al wiki workflow es familiar; para gente que viene de búsqueda Google directa puede sentirse cuesta arriba. La trade-off es que la lectura larga es más cómoda en wiki que en una base de datos compactada.

## Cuándo gana cada una

| Caso de uso | Ganador | Por qué |
|---|---|---|
| Precio actual del flea de un item | Tarkov.dev | Refresca en horas, no semanas |
| Walkthrough narrativo de una task | Tarkov Wiki | Editorial story + steps |
| Recetas exactas del hideout | Tarkov.dev | Datos estructurados con costos |
| Lore de traders y locations | Tarkov Wiki | Artículos editoriales largos |
| API para tu propia tool | Tarkov.dev | GraphQL gratis y abierta |
| Historia de cambios entre wipes | Tarkov Wiki | Documenta mecánicas removidas |
| Mapas interactivos con filters | Empate técnico | Tarkov.dev tiene básicos; el wiki linkea a externos |
| Verificación de stats numéricos | Tarkov.dev | Más rápido reflejando parches |

## Recomendación combinada

Si solo vas a usar una, usa tarkov.dev — la velocidad de actualización y la API hacen que sea la fuente de verdad para casi todo. El wiki es el complemento perfecto para context narrativo y deep dives editoriales. La mayoría de jugadores serios usa los dos: tarkov.dev abierto en una pestaña permanente como referencia operacional, el wiki como destino cuando algo necesita explicación más profunda. No competen — colaboran, y reconocerlos como complementos en lugar de sustitutos te ahorra tiempo de búsqueda mal dirigida.
