---
title: PoE Regex
description: Generador interactivo de patrones de expresiones regulares para Path of Exile, usado para buscar items en stash, filtrar mods de mapas, gamblear uniques con Gwennen y optimizar inventarios de vendedores.
quickTake: Si rolas mapas, gambleas con Gwennen o filtras flasks en serio, dejar de generar regex manualmente y usar esta herramienta es de los upgrades de calidad de vida más grandes que vas a hacer. La curva es mínima, el ahorro de tiempo es enorme.
---

## Qué es

PoE Regex es un generador web de patrones de expresiones regulares diseñado específicamente para el sistema de búsqueda interno de Path of Exile. La interfaz te permite seleccionar criterios mediante checkboxes y dropdowns (qué mods quieres en un mapa, qué uniques buscas en Gwennen, qué características de flasks priorizas), y el sitio te genera un string de regex listo para copiar y pegar en el buscador del juego.

GGG habilitó búsqueda con regex en las stash tabs y otros campos de búsqueda en el patch 3.14 (mayo 2021). Desde entonces, una constelación de generadores comunitarios surgió para aprovechar esta capacidad. PoE Regex (poe.re) se consolidó como el más usado por su cobertura amplia y su mantenimiento activo. El mismo autor mantiene también poe2.re para Path of Exile 2.

## Qué problema resuelve

PoE genera ítems con docenas de mods posibles, varios tiers de cada mod, y combinaciones casi infinitas. Cuando rolas un mapa, abres Gwennen, o revisas el stock de un vendedor, necesitas distinguir rápidamente lo valioso de lo descartable. Hacerlo a ojo es lento y propenso a errores; escribir el regex correcto a mano requiere conocer la sintaxis y memorizar fragmentos de texto exactos del juego.

PoE Regex resuelve la fricción técnica de la sintaxis. Tú decides qué quieres encontrar usando lenguaje natural en checkboxes; la herramienta traduce eso a regex correcto. El resultado: búsquedas de stash que tardan segundos en lugar de minutos, decisiones de gambling más informadas, y mucha menos frustración al rolear contenido de alto valor.

## Para qué la usa la gente

Los casos típicos de uso, ordenados por frecuencia en la comunidad:

**Rolear mapas:** generar un regex que destaque mapas con combinaciones de mods buenos (incremento de rareza alto, pack size alto, sin mods peligrosos para tu build) mientras esconde el resto. Esto es probablemente el caso de uso #1, especialmente en endgame con mapping intensivo.

**Gambling con Gwennen:** la NPC de Expedition vende ítems base random, y ciertas combinaciones tienen probabilidad de convertirse en uniques valiosos. Un regex bien armado destaca solo las bases que pueden rolear los uniques que te interesan, ignorando el resto del stock.

**Filtrar flasks:** al rolear utility flasks (currency masivo en chance/alteration orbs), un regex destaca solo los rolls de mods T1 que buscas, permitiéndote descartar el resto sin leerlos uno a uno.

**Buscar en stash tabs masivas:** si tienes 1000 ítems en una tab de currency o uniques, el regex te aísla en segundos lo que necesitas.

**Inventario de vendedores:** algunos vendor recipes requieren bases específicas. El regex highlightea qué de lo que vende el NPC sirve para tu recipe.

## Diferenciación con FilterBlade y Awakened PoE Trade

Esta es una distinción importante porque las tres tools tocan "filtrar/buscar" pero hacen cosas distintas:

**FilterBlade** modifica tu loot filter del juego, que afecta qué items se muestran en el suelo cuando matas monstruos. Es prevención: define qué nunca ves para no perder tiempo. No tiene nada que ver con stash ni con búsqueda manual.

**Awakened PoE Trade** es un overlay desktop que se invoca con hotkeys mientras juegas. Sirve para price-check de items individuales, búsquedas rápidas en PoE Trade, y tiene una feature de guardar regex patterns para pegarlos con un click. No genera regex, los almacena.

**PoE Regex** genera los patrones desde cero según los criterios que elijas. El flujo natural es: usas PoE Regex para crear el pattern → lo guardas en Awakened PoE Trade → lo pegas con hotkey cuando lo necesitas. Las dos herramientas son complementarias.

## Limitaciones honestas

**Solo en inglés.** La interfaz, los nombres de mods y la lógica del sitio asumen el cliente del juego en inglés. Si juegas con interfaz traducida, los patterns no van a matchear porque buscan strings en inglés.

**Requiere actualizaciones tras cada liga.** Cuando GGG modifica mods, agrega uniques, o cambia mecánicas, los generadores tardan unos días en actualizarse. No es instantáneo. Para contenido recién agregado, a veces tienes que generar el regex manualmente.

**No reemplaza entender el juego.** El regex te muestra lo que pediste; si pediste mal (porque no sabes qué mods son realmente valiosos en mapping en la liga actual), el output va a ser inútil aunque técnicamente correcto. Es herramienta de eficiencia, no sustituto de game knowledge.

**Solo PoE 1.** Para Path of Exile 2 existe el sitio hermano poe2.re, pero como tu directorio considera PoE 1 y PoE 2 como juegos separados, esto te concierne solo para PoE 1 acá.

**Algunos generators del ecosistema están abandonados.** Hay sitios viejos que aparecen en búsquedas de Google y siguen funcionando técnicamente pero con datos desactualizados. poe.re es el más confiable, pero confirmar siempre que el regex generado funciona en la liga actual.

## Cómo se usa en la práctica

El flujo de un mapper típico:

1. Antes de empezar la sesión, abre poe.re y va a la sección "Map Mods".
2. Selecciona los mods que quiere ver destacados (incremento de rareza ≥30%, pack size ≥30%, sin mods que su build no soporta como reflect físico o no regen).
3. Copia el regex generado.
4. Lo pega en el buscador de su stash tab de mapas.
5. Los mapas que matchean quedan resaltados con borde blanco; los que no, atenuados.
6. Selecciona y rolea solo los buenos, vendiendo o reciclando el resto.

Para Gwennen el flujo es similar pero la sección del sitio cambia: seleccionas qué uniques valen la pena, generas el regex, lo pegas en el inventario de la NPC.

## Cómo empezar

Entra a poe.re y elige la sección que necesites (Maps, Gwennen, Flasks, Heist, etc.). La interfaz es directa: checkboxes y sliders. Selecciona criterios, mira el output al fondo de la página, copia y pega.

Para tu primera vez, te sugiero empezar con Map Mods porque es el caso de uso más universal. Genera un regex simple (solo "increased rarity ≥30%"), pruébalo en una stash tab con varios mapas, y observa qué se highlightea. Eso te da intuición de cómo funciona, y de ahí escalas a regex más complejos con múltiples condiciones.

Una vez familiarizado, integralo con Awakened PoE Trade: guardas tus patterns favoritos ahí y los invocas con un hotkey mientras juegas, sin tener que volver al navegador.