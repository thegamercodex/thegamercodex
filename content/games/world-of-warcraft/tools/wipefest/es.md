---
title: "Wipefest"
description: "Servicio web que toma logs de Warcraft Logs y los reescribe desde la perspectiva de mecánicas: quién falló qué evento, cuántos players tomaron un AoE, qué add quedó sin interrumpir, qué causó cada wipe."
quickTake: "Si eres raid leader y quieres saber por qué wipeó la raid en lugar de quién hizo poco DPS, Wipefest es la pestaña que abres primero. Convierte el log en un boletín de errores de mecánica navegable jugador por jugador."
---

## Qué es

Wipefest (wipefest.gg) es un servicio web que consume logs subidos a Warcraft Logs y produce un análisis enfocado en mecánicas de boss y causas de wipe. A diferencia de WoWAnalyzer, que se centra en performance individual rotacional, Wipefest se centra en lo que pasa en el encuentro a nivel de raid: qué jugador comió un mecánico evitable, cuántos charges de un AoE landearon, qué add no fue interrumpido a tiempo, y qué cadena de eventos terminó en wipe.

El sitio mantiene un catálogo curado de eventos por boss del current tier (Midnight 12.0.x al momento de redacción). Cada encounter tiene una lista de mecánicas trackeables — Wipefest las extrae del log y las muestra en formato tabla con timestamps, jugadores afectados, daño tomado, y resultado.

Es free para uso público sobre logs públicos. No requiere subir nada nuevo: Wipefest consume directamente la API de Warcraft Logs.

## Qué problema resuelve

Cuando una raid wipea, la pregunta inmediata es: ¿por qué? Warcraft Logs tiene la data pero requiere navegar Damage Taken, Deaths y Events tab por tab para reconstruir la secuencia. Para un raid leader bajo presión post-pull, eso es lento.

Wipefest reformula el problema: por defecto, abre el encounter ya con las mecánicas críticas pre-identificadas. "Comatose Curse landeó 4 veces sin dispel", "Player X recibió Detonating Slash el segundo 0:42 y murió 3 segundos después", "Tank no tenía cooldown activo cuando entró Smolder". Eso convierte el debrief de una hora en quince minutos.

Para guilds en progresión Mythic, la separación entre WoWAnalyzer (qué haces mal tú) y Wipefest (qué hace mal la raid) suele ser muy clara: una mira espejos individuales, la otra mira la ejecución colectiva.

## La diferencia con WoWAnalyzer

Mismo input (Warcraft Logs), diferente lente:

- **WoWAnalyzer**: "¿qué hizo mal este jugador en su rol?" Rotación, cooldowns, talents, buffs.
- **Wipefest**: "¿por qué murió la raid en este pull?" Mecánicas, deaths, AoE damage taken, dispel coverage.

Una guild Mythic sería tonta de usar solo una. WoWAnalyzer corrige el 95% del DPS perdido por errores rotacionales; Wipefest corrige el 95% de los wipes por mecánicas evitables. La separación es limpia y las dos viven sobre la misma data de Warcraft Logs.

## Para qué la usa la gente

**Debrief post-wipe inmediato**: el raid leader abre Wipefest, ve la lista de eventos del último pull y identifica qué mecánica falló y quién la falló. Esto reemplaza la conversación tipo "no sé qué pasó, que alguien revise el log" con datos accionables.

**Coaching individual de mecánicas**: cuando un jugador come AoE evitables consistentemente, la página de su personaje en Wipefest muestra el patrón a través de pulls. Útil para acercarse con feedback específico.

**Identificar roles que necesitan refuerzo**: dispel coverage baja, interrumpts perdidos, off-heals tarde — Wipefest los lista por jugador. Un raid leader puede ver si el problema es coordinación de raid o de un jugador específico.

**Validar strategy changes**: pruebas una nueva strat para una mecánica (ej: cambiar quién dispel a Comatose Curse). Comparas dos pulls en Wipefest y ves objetivamente si la coverage mejoró.

**Pre-raid prep**: leer la página del boss en Wipefest antes del raid identifica mecánicas críticas y eventos que la raid debería trackear.

## Para quién NO es esta herramienta

- **Performance individual de DPS/HPS/threat**: WoWAnalyzer y Warcraft Logs cubren eso mejor. Wipefest no analiza rotación.
- **Mythic+**: el catálogo de eventos está optimizado para raid bosses. M+ tiene cobertura más limitada.
- **Encounters viejos / pre-current tier**: el set de mecánicas trackeadas se actualiza con el patch actual. Encounters de tiers pasados pueden tener cobertura parcial o desactualizada.
- **Players que no son raid leaders ni officers**: si no estás liderando, los datos de Wipefest a veces son más detalle del que quieres. Para review propio individual, WoWAnalyzer es más directo.

## Cómo se usa en la práctica

1. Tu guild raidea y suben log a Warcraft Logs.

2. Copias el link al reporte.

3. Lo pegas en wipefest.gg en la home page (o navegas directamente: `wipefest.gg/report/{report-id}`).

4. Wipefest carga la lista de bosses de ese raid. Click en el que quieres analizar.

5. Aparece la página del encounter con tabs:
   - **Events**: lista cronológica de eventos críticos del boss.
   - **Players**: cada jugador con sus failures de mecánica y damage taken por evento.
   - **Comparisons**: si tienes varios pulls del mismo boss, comparación lado a lado.

6. Para review post-wipe rápido: abres Events, ordenas por damage taken o death, y reconstruyes qué mecánica falló cerca del wipe.

7. Para coaching individual: abres Players, eliges un personaje, y ves la lista de eventos donde tomó damage evitable.

## Limitaciones honestas

**Cobertura desigual de bosses**: el equipo de Wipefest mantiene activos los bosses del current tier (con buena precisión), pero bosses de tiers viejos tienen cobertura inconsistente. Si tu guild está farmeando contenido viejo, algunas mecánicas pueden no estar trackeadas.

**No reemplaza estrategia**: Wipefest te dice qué mecánica falló, pero no te explica la strat correcta. Eso requiere combinar con guías escritas (Icy Veins, Method) o video.

**Curva de lectura**: los nombres de eventos vienen del log, que usa los nombres internos de las habilidades. La primera vez que abres un boss nuevo, hay que aprender qué mecánica es cuál.

**Solo Retail**: Classic, SoD y Hardcore no tienen cobertura.

**Catálogo de eventos puede tener gaps**: ocasionalmente una mecánica nueva del current patch no está trackeada hasta que algún contributor la agrega. La actualización es razonable pero no instantánea.

**No analiza eventos sin damage**: mecánicas que no causan daño directo (debuffs visuales, mecánicas de movimiento sin penalty) son más difíciles de trackear. Wipefest se apoya fuerte en damage events.

## Cómo empezar

1. Abre [wipefest.gg](https://www.wipefest.gg).

2. Pega el link a tu reporte público de Warcraft Logs.

3. Elige un boss donde tu raid haya wipeado. Esos son los más informativos para empezar a entender la herramienta.

4. Anda a tab Events, ordena por timestamp, y reconstruí los segundos previos al wipe.

5. Si eres raid leader, hacelo parte del flujo post-raid: 10-15 minutos en Wipefest después de cada noche de progresión.
