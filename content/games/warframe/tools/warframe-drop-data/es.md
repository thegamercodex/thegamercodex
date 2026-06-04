---
title: "WFCD Drop Data"
description: "Interfaz web y API buscable sobre las drop tables oficiales de Warframe, mantenida por WFCD, para consultar qué dropea cada fuente y dónde cae cada item."
quickTake: "Las drop tables oficiales, pero usables. Parsea los mismos números de DE y te deja buscar 'qué dropea X' o 'dónde cae Y' al instante."
---

## Qué es

WFCD Drop Data es una interfaz web (más una API) construida sobre las drop tables oficiales de Digital Extremes. Mantenida por WFCD, parsea los números oficiales —no data minada— y los presenta con búsqueda rápida: qué dropea una fuente, dónde cae un item, con qué probabilidad. Es gratuita, open source bajo MIT y se mantiene sincronizada con las tablas oficiales.

Es el front-end amigable de los drop tables oficiales: misma data, presentación usable.

## Qué problema resuelve

Los drop tables oficiales son la verdad de tierra, pero son una página enorme sin buscador cómodo: encontrar un dato específico ahí es tedioso. Drop Data resuelve eso indexando los mismos números y dándote búsqueda en dos direcciones: "qué dropea esta fuente" y "dónde cae este item".

Eso convierte una consulta que en la fuente oficial toma minutos de scroll y Ctrl+F en una búsqueda de segundos, manteniendo la exactitud porque la data sale directo de DE.

## Diferenciación

Frente a los drop tables oficiales, Drop Data es la capa de usabilidad: mismos números, pero buscables. Oficiales para la verdad de tierra cruda, Drop Data para consultarla rápido. Como parsea (no minea) la fuente oficial, no hay discrepancia de exactitud — solo de comodidad.

Frente a la wiki, Drop Data es específico de drops con probabilidades, sin el contexto y la explicación de mecánicas que da la wiki.

## Para qué la usa la gente

**Buscar dónde dropea un item**: la consulta más común — encontrar la mejor fuente de farmeo de una parte.

**Ver qué dropea una fuente**: qué tira un relic, un boss o un bounty, con probabilidades.

**Planear runs de farmeo**: comparar fuentes de un mismo item para elegir la más eficiente.

**Consumir la API**: otras herramientas usan su API para drops.

## Para quién NO es esta herramienta

Si necesitas la fuente oficial cruda sin intermediarios (por ejemplo para verificar contenido recién parchado), los drop tables oficiales son el árbitro final.

Si buscas explicación de mecánicas, la wiki es mejor.

## Cómo se usa en la práctica

1. Entras a `drops.warframestat.us`.
2. Buscas un item (para ver dónde cae) o una fuente (para ver qué tira).
3. Lees las probabilidades.
4. Comparas fuentes para elegir la más eficiente para farmear.

## Limitaciones honestas

**Solo en inglés**: la interfaz no está traducida.

**Hereda lag de la fuente**: si los drop tables oficiales tardan en reflejar un patch, Drop Data también, hasta sincronizar.

**Solo drops**: no cubre mecánicas, builds ni economía — es específico de drop rates.

## Cómo empezar

Entra a `drops.warframestat.us` y busca el item que quieres farmear para ver dónde cae con mejor probabilidad. Bookmarkéalo junto con la wiki — entre los dos cubres la mayoría de las consultas de "dónde consigo esto".
