---
title: "Bloodmallet"
description: "Sitio open-source que pre-computa charts comparativos por spec usando SimulationCraft. Cubre trinkets, talents, tier sets, embellishments, y otros ítems con scripts que se corren regularmente y publican rankings ordenados por DPS estimado."
quickTake: "Bloodmallet es la respuesta de 30 segundos cuando solo necesitás saber 'cuál trinket de la Vault elijo esta semana'. No reemplaza Raidbots para tu char específico, pero el approach pre-computed te ahorra el setup. Open source, MIT license."
---

## Qué es

Bloodmallet (bloodmallet.com) es un proyecto open source que toma SimulationCraft y lo aplica de forma sistemática: en lugar de que cada usuario corra sims propias, Bloodmallet corre baterías pre-computadas para cada spec del juego sobre los items y opciones del current tier, y publica los resultados como charts comparativos rankeados.

Para cada spec, vas a encontrar charts de:

- **Trinkets**: rankeados por DPS estimado en single-target y AoE (cleave / Mythic+ scenarios).
- **Talents**: builds comparadas con DPS estimado.
- **Tier sets**: si las dos piezas, cuatro piezas, dos+dos hybrid son mejores en cada contexto.
- **Embellishments**: para profesiones embellishments (Dragonflight onwards), qué combinación maximiza DPS.
- **Stat priorities**: visualizadas en charts.
- **Race**: si optimizás por raza ganadora (decisión one-time), Bloodmallet la cubre.

El proyecto está hosted en GitHub bajo licencia MIT, mantenido por contributors comunitarios. La data se actualiza periódicamente — usualmente días después de un patch que cambia balance.

## Qué problema resuelve

Raidbots es excelente para tu char con tu gear, pero hay dos cosas para las que es overkill:

1. **Decisiones generales**: "¿cuál trinket es bueno para mi spec?" no requiere sim de tu char específico — un ranking general suele ser suficiente para el 90% de los casos.

2. **Velocidad**: Raidbots cuesta 5-15 minutos por sim. Si querés 5 decisiones rápidas (qué trinket, qué embellishment, qué meta-gem, qué talent build, qué race), pre-computed charts te dan respuesta en segundos.

Bloodmallet llena ambos. Open la página de tu spec, scroll, ves rankings ordenados. Decisión tomada en 30 segundos. Cero setup.

Para players que no quieren learning curve de SimC pero quieren decisiones data-driven, es la entrada de menor friction posible.

## La diferencia con Raidbots

Mismo motor (SimC), filosofía opuesta:

- **Raidbots**: simulación on-demand para tu char específico. Customizable, preciso a tu setup, pero requiere setup (instalar addon, copiar profile, configurar sim) y tiempo (5-15 min por run).
- **Bloodmallet**: charts pre-computed para una spec genérica con gear "promedio del top 1%". No customizable, no captura nuances de tu setup, pero instantáneo y zero-setup.

Para "decisiones generales que no varían mucho con mi gear específico" (qué trinket farmeo, qué talent build comparo, qué race re-roll considerar): Bloodmallet.

Para "optimización fina de mi setup actual" (Top Gear sobre mi bag, stat weights con mis stats actuales, droptimizer pre-raid): Raidbots.

Las dos se complementan. Un raider serio probablemente abre Bloodmallet semanal para decisions generales, y Raidbots cuando hay cambios grandes de gear o decisiones críticas.

## Para qué la usa la gente

**Trinket selection rápido**: ¿qué trinket de Vault elijo? ¿Qué trinket farmeable del raid prioritizo? Bloodmallet tiene rankings claros.

**Talent build evaluation**: si dudás entre dos builds top, Bloodmallet te muestra DPS estimado en single-target y AoE para cada una.

**Tier set decisions**: cuándo es worth swap a 4-piece, cuándo 2+2 hybrid es mejor, cuándo el set bonus no compensa el ilvl loss.

**Race re-roll consideration**: si pensás re-rollear race para mín-max, Bloodmallet cuantifica la diferencia. Suele ser pequeña (≤1-2% DPS) — útil para decidir si vale la pena el cambio cosmético.

**Embellishment crafting choices**: cuando profesiones agregan embellishments con efectos, Bloodmallet rankea cuáles dan más DPS por slot.

**Pre-patch quick scan**: post-patch, Bloodmallet actualiza charts en pocos días. Permite ver rápido qué cambió en el meta para tu spec.

## Para quién NO es esta herramienta

- **Players que necesitan precisión absoluta**: los charts asumen "char promedio top 1%" — no captura tu gear específico, tus stats actuales, ni interactions con items que tenés. Para esa precisión, Raidbots.
- **Casual players sin gear de tier alto**: las decisiones que Bloodmallet rankea (trinkets de Mythic, embellishments raros) presuponen que tenés acceso a esos items. Si estás haciendo Heroic con gear normal, las diferencias suelen ser irrelevantes.
- **Specs nicho con cobertura desigual**: como SimC mismo, depende de mantenedores. Specs populares tienen charts updated; specs nicho a veces tardan o tienen gaps.
- **PvP**: no cubre. SimC modela PvE.

## Cómo se usa en la práctica

1. Abrís [bloodmallet.com](https://bloodmallet.com).

2. Elegís tu clase y spec del menú.

3. Pestañas con cada tipo de chart: Trinkets, Talents, Tier Sets, Embellishments, etc.

4. Cada chart está rankeado de mejor a peor con DPS estimado en barras.

5. Filtros por context (single-target, two-target, three-target, five-target) — críticos porque single-target meta puede diferir mucho de AoE/Mythic+ meta.

6. Implementás la decisión: bidás por ese trinket en raid, picás esa talent build, craftás ese embellishment.

## Limitaciones honestas

**Charts asumen char baseline genérico**: si tu gear es muy distinto del baseline (mucho más alto, mucho más bajo, con mix raro de stats), los rankings pueden no aplicar exacto. Para edge cases, Raidbots con tu profile.

**Update lag**: Bloodmallet no es realtime. Después de un patch, hay ventana de días donde los charts reflejan meta viejo. Verificar fecha de última actualización del chart.

**No es gear-specific**: si tenés un trinket excelente de tier viejo que el baseline asume que no usarías, Bloodmallet no lo va a destacar.

**No simula encuentros específicos**: Raidbots tiene profiles para algunos bosses con mecánicas modeladas. Bloodmallet usa baseline simple.

**SimC dependencies**: cuando SimC tiene bugs de modelado de una spec, Bloodmallet refleja ese bug hasta que upstream lo fixe.

**UI funcional pero austera**: charts puro, sin guides ni explanation de why. Para entender por qué el meta es así, otras tools (Method, Discord de la spec).

**Solo Retail current-tier**: no cubre Classic ni tiers viejos.

## Cómo empezar

1. Abrí [bloodmallet.com](https://bloodmallet.com) y elegí tu spec.

2. Bookmarkea la página de tu spec — vas a re-revisarla muchas veces.

3. La primera vez, scrollá los charts disponibles para entender qué cubre Bloodmallet (trinkets, talents, tier, embellishments, etc.).

4. Cuando tengas decisiones específicas (qué trinket bidear, qué talent build), buscá el chart relevante y leé el ranking.

5. Si encontrás bugs o gaps, el repo en GitHub ([Bloodmallet/bloodmallet.github.io](https://github.com/Bloodmallet/bloodmallet.github.io)) acepta PRs y reports.

6. Combiná con Raidbots cuando necesites precisión específica a tu char y con Icy Veins / Method para entender el reasoning detrás de los números.
