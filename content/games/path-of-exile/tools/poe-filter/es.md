---
title: PoE Filter
description: Generador web de loot filters para Path of Exile con filosofía minimalista, sistema propio de Drop Tiers basado en valor de mercado, e integración con poe.ninja para precios actualizados. Alternativa estilística a FilterBlade que respeta la estética original del juego.
quickTake: Si FilterBlade te abruma con su nivel de personalización y prefieres una herramienta que respete los colores y estilos originales de PoE pero con tu loot ordenado por valor real, PoE Filter es exactamente eso. Endosado públicamente por NeverSink mismo, lo cual dice mucho.
---

## Qué es

PoE Filter (poe1filter.com) es un generador web de loot filters para Path of Exile creado por un developer independiente. A diferencia de FilterBlade que es un customizador del filter de NeverSink, PoE Filter genera filters propios desde cero siguiendo una filosofía estética distinta: minimalismo que respeta los colores y estilos originales del juego.

El sitio se basa en cuatro principios explícitos: estilo minimalista (no agrega colores fuera del theme original), eliminación de clutter (esconde lo no útil agresivamente), eficiencia mediante highlights tiered (más prominentes cuanto más valioso), y zero learning curve (los Drop Tiers son self-explanatory por valor de chaos).

Tiene un proyecto hermano para Path of Exile 2 en poe2filter.com, mantenido por el mismo autor. El proyecto es free, sostenido por donaciones (Buy Me a Coffee), y usa la API oficial de GGG con OAuth2 para sincronización directa con tu cuenta de pathofexile.com.

## Qué problema resuelve

Los loot filters son una de las quality-of-life más importantes de Path of Exile. Sin filter, el suelo de cada map se llena de items que no vale la pena recoger, y filtrarlos visualmente consume atención que debería ir al combate. Con filter, el juego se vuelve jugable en endgame.

El problema más sutil es que **los filters comunitarios mainstream tienen estética muy específica**. NeverSink Filter, el estándar de facto, usa colores saturados, fondos opacos, sonidos prominentes y beams llamativos para items valiosos. Esto es funcional pero choca con el design language original del juego (paleta sobria, herencia visual de Diablo 2). Hay un grupo no menor de jugadores que quieren la utilidad del filter sin sacrificar la estética del juego.

PoE Filter resuelve esto generando filters que mantienen los label styles default del juego para items normales, agregando solo highlights minimales (beams y minimap icons) para items valiosos, organizados en tiers por valor de chaos del mercado. Es filter funcional sin invasión visual.

## Para qué la usa la gente

Los casos típicos:

**Jugadores que prefieren estética sobre máxima información.** Si te molesta visualmente el filter de NeverSink pero entiendes que necesitas filter, PoE Filter es exactamente para ti.

**Setup rápido sin curva.** Los presets cubren la mayoría de casos. Eliges un preset, sincronizas a tu cuenta, ya tienes filter funcional. No necesitas leer documentación ni entender qué significan colores específicos.

**Jugadores que valoran market value sobre clasificación rígida.** El sistema de Drop Tiers se actualiza automáticamente desde poe.ninja, así que items que sube de precio en la liga aparecen con highlight más prominente sin que tú hagas nada.

**Quienes prefieren un solo autor responsable vs. proyecto comunitario grande.** Algunos jugadores prefieren la consistencia de visión de un solo dev sobre los compromisos editoriales de un proyecto con múltiples mantenedores. PoE Filter cumple esto.

**Crear filters propios con import/export.** Puedes importar filters generados por otros jugadores con la herramienta, ajustarlos a tu gusto, y compartirlos. Sirve como base de colaboración en grupos de farming.

## Diferenciación con FilterBlade

Esta es la distinción crítica porque ambas son herramientas de filter, pero filosóficamente opuestas:

**FilterBlade** customiza el NeverSink Filter, que es maximalista por diseño: usa toda la paleta de colores de Path of Exile, sonidos diferenciados por tier, beams visibles desde lejos, fondos opacos para items críticos. La filosofía es "haz que la información valiosa sea imposible de pasar por alto, incluso si rompe la estética del juego". FilterBlade tiene cientos de opciones de personalización, lo que también significa cientos de decisiones que el usuario potencialmente debe tomar.

**PoE Filter** genera filters propios con filosofía minimalista: respeta los label styles originales del juego, agrega solo highlights mínimos para items valiosos, y organiza todo por Drop Tiers basados en valor de chaos. La filosofía es "hazme funcional sin alterar la atmósfera del juego". El número de decisiones que el usuario debe tomar es mucho menor.

No son competidores en el sentido tradicional. Cubren preferencias estéticas distintas. Un jugador puede usar uno o el otro según prefiera información maximalista o estética minimalista, ambas son decisiones válidas.

Un detalle interesante: NeverSink mismo elogió públicamente PoE Filter en Reddit, comentando sobre la calidad del diseño UI y el trabajo en divination cards. Es endorsement de la persona que lidera el proyecto "competidor", lo cual es señal de que ambos enfoques son respetados en la comunidad.

## Limitaciones honestas

**Proyecto de un solo autor.** A diferencia de FilterBlade que tiene equipo de cuatro personas (NeverSink, Zoey, Eleni, Haggis) con roles específicos, PoE Filter lo mantiene un developer solo en su tiempo libre. Esto significa que si esa persona se aleja del proyecto, no hay continuidad garantizada. Es riesgo a considerar para un tool que afecta cómo juegas todas las sesiones.

**Sin repositorio público open source.** El código no está en GitHub. Si el autor abandona el proyecto, la comunidad no puede forkear y continuar como pasó con Exilence Next. Esto contrasta con FilterBlade y NeverSink Filter, que sí son open source.

**Solo en inglés.** La interfaz, documentación y soporte son únicamente en inglés. El Discord del proyecto opera en inglés.

**Menos opciones que FilterBlade.** Esto es feature, no bug, según la filosofía del proyecto. Pero si necesitas customización extrema (sonidos diferenciados por tier de essence, por ejemplo), FilterBlade te da más palancas.

**Tier system depende de poe.ninja.** Si poe.ninja cambia su API o cae temporalmente, el sistema de Drop Tiers de PoE Filter pierde precisión hasta que se restaure. La dependencia es estable pero existe.

**Highlights minimales pueden ser problema en mapping caótico.** Algunos jugadores que mappean con muchos efectos visuales en pantalla (Heralds, ground effects, league mechanics activas) reportan que los highlights minimalistas de PoE Filter pueden ser difíciles de notar comparado con los más agresivos de NeverSink. Es trade-off de la filosofía minimalista.

## Cómo se usa en la práctica

El flujo típico de un usuario nuevo:

1. Va a poe1filter.com y elige un preset (Beginner, Regular, Strict según su nivel).
2. Opcionalmente ajusta Quick Filters para preferencias específicas (ocultar maps below cierto tier, mostrar bases de crafting específicas).
3. Loguea con cuenta de Path of Exile y sincroniza el filter directamente al juego via API oficial.
4. In-game, selecciona el filter llamado "poe1filter" en el menú de Game Settings.
5. Juega normalmente. Cuando salen items nuevos en una liga o cambian precios, vuelve al sitio, ajusta lo necesario y vuelve a sincronizar.

Para usuarios avanzados:

1. Customiza el Tier List arrastrando uniques o currency entre tiers manualmente.
2. Usa Custom Import para tomar el styling de otro filter pero mantener su propio Tier List.
3. Crea filters distintos por personaje o por liga, cada uno con tweaks específicos.
4. Usa el debug feature: copia los detalles de un item in-game (Ctrl+Alt+C), pégalos en el sitio (Ctrl+V), y te dice qué reglas afectan ese item. Útil para entender por qué algo se está mostrando o escondiendo.

## Cómo empezar

Visita poe1filter.com, elige un preset (recomiendo "Regular" para primera vez), sincroniza con tu cuenta de PoE, y úsalo en el juego. Eso te da un filter funcional en menos de 5 minutos sin configuración compleja.

Si después quieres ajustar algo, las pestañas Quick Filters y Tier List son las que más impacto tienen. La pestaña Quick Filters tiene tutorial integrado que te guía las primeras veces.

Para reportar bugs o pedir features, el thread oficial está en el foro de pathofexile.com (link en el sitio) y hay Discord propio. La comunidad es chica pero activa.

Si te gusta el tool y quieres apoyar al desarrollo, el autor acepta donaciones via Buy Me a Coffee. Es proyecto sostenido por hobby, no por monetización agresiva.