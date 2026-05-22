---
title: "Lolalytics"
description: "Plataforma de análisis estadístico granular para League of Legends, con breakdowns por matchup, patch, rango, duración de partida y composición de equipo. Foco en transparencia metodológica."
quickTake: "La tool con la data más granular y la metodología más transparente del ecosistema. Si quieres saber el porqué estadístico detrás de una build —no solo qué construir— Lolalytics es la indicada. Densa, no apta para uso casual."
---

## Qué es

Lolalytics es una plataforma de análisis estadístico para League of Legends que arrancó alrededor de 2017 con un enfoque claro: ser la tool con la data más profunda y la metodología más documentada del ecosistema. Mientras U.GG y Blitz priorizan UX limpio sobre data densa, Lolalytics hace exactamente lo opuesto — interfaz cargada de filtros, tablas extensas, y disposición de información que asume que el usuario sabe lo que está leyendo.

El usuario típico es un jugador que quiere entender **por qué** un champion tiene cierto win rate en un matchup, no solo el número agregado. Lolalytics responde esa pregunta con cortes por skill cap, por duración de partida (early vs mid vs late), por composición enemiga, por rune choice, por item path. La data se actualiza diariamente y cubre múltiples patches en histórico.

Es free con una tier opcional ("Lolalytics Premium") que desbloquea filtros adicionales y remoción de ads. La tier free incluye la mayoría del valor — todos los breakdowns estadísticos core están abiertos.

## Qué problema resuelve

OP.GG te dice que un champion tiene 52% win rate. U.GG te recomienda una build con buena tasa de éxito. Pero ninguna te dice: "este champion tiene 58% win rate cuando la partida dura más de 30 minutos pero solo 47% cuando termina antes de los 25", o "este matchup se invierte después del segundo item core", o "esta runa funciona mejor contra champions con dash que sin él".

Lolalytics resuelve exactamente ese gap analítico. Para players de elo medio-alto que están haciendo theorycrafting serio (testing builds nuevas, evaluando rune choices fuera del meta, decidiendo en qué etapa pelear), tener acceso a esos breakdowns estadísticos cambia decisiones reales en juego.

## La diferencia con League of Graphs

Lolalytics y League of Graphs son las dos tools "stats nerd" del ecosistema. Cubren territorio similar pero con énfasis distinto:

**Lolalytics**: foco en **patch actual y breakdowns granulares**. Su angle es ayudarte a entender qué está pasando en este patch específico — qué cambió respecto al anterior, qué builds emergentes funcionan, cómo se mueve el meta semana a semana. Methodology pública, filtros densos.

**League of Graphs**: foco en **profundidad histórica y agregados de larga duración**. Tiene gráficos de evolución multi-patch, leaderboards de records (matches más largos, más kills, etc.), y stats curiosas/pedagógicas (por ejemplo: probabilidad de conseguir Pentakill por champion). Más amigable visualmente, pero menos enfocado en theorycrafting de patch actual.

Si quieres decisiones tácticas para el patch que se está jugando ahora, Lolalytics. Si quieres entender tendencias largas, comparativas históricas y curiosidades estadísticas, League of Graphs. Para theorycrafting completo, conviene tener ambas abiertas.

## Para qué la usa la gente

**Análisis de matchup profundo**: caso de uso central para jugadores serios de un main. Comparas tu pick vs un oponente específico y obtienes breakdown por timing, composición, runa y build elegida — no solo el win rate plano.

**Evaluar cambios de patch**: cuando sale un patch nuevo, Lolalytics es la primera tool que muestra los deltas reales — qué champion subió o bajó win rate respecto al patch anterior, qué item cambió de presence rate, qué runas se reconfiguraron.

**Theorycrafting de runas no-meta**: si quieres probar una runa secundaria fuera del consenso, Lolalytics te muestra el sample size y win rate asociado. Te permite distinguir entre "nadie la usa porque es mala" y "nadie la usa pero rinde".

**Validar builds situacionales**: para champions con builds altamente situacionales (ej: tanks con item path variable según comp enemiga), Lolalytics descompone el win rate por opción tomada, no solo por la "build core" agregada.

**Comparativas entre rangos**: ver cómo cambia el win rate de un champion entre Platinum, Diamond y Master+ es señal útil para identificar si el champion escala con skill del player o no.

## Para quién NO es esta herramienta

Lolalytics es excelente para análisis profundo, pero no es lo que necesitas si:

- **Quieres una guía de build rápida sin friccionar con stats** → U.GG es más limpio y directo, te dice qué construir sin hacerte digerir la justificación estadística.
- **Quieres match history personal y scouting** → OP.GG es más cómodo, Lolalytics no se centra en perfiles de summoner.
- **Quieres coaching o framework de mejora** → Mobalytics tiene el GPI, Lolalytics no entra en ese terreno.
- **Eres beginner** → la densidad de información puede abrumar. Empieza con U.GG/OP.GG y migra a Lolalytics cuando ya tengas vocabulario para leer los breakdowns.

## Cómo se usa en la práctica

1. Vas a `lolalytics.com` y buscas un champion (o navegas por la tier list general).

2. Selección de rol y filtros iniciales: rango (Platinum+, Diamond+, Master+), patch específico (default = patch actual).

3. Vista del champion muestra: win rate global, builds más comunes con sus tasas asociadas, runas top con sample size, matchups con breakdown.

4. Click en cualquier matchup abre vista detallada con: win rate por skill cap, por duración de partida, por composición de equipo, por elección de runa.

5. Sección "Patch Notes Analysis" (cuando sale patch nuevo) muestra deltas champion por champion respecto al patch anterior.

6. Filtros densos a la derecha permiten cortar la data por casi cualquier dimensión.

Para uso recurrente: bookmarkea las URLs de tu main y de los matchups más frecuentes — los filtros se preservan en la URL.

## Limitaciones honestas

**Curva de aprendizaje pronunciada**: la interfaz no perdona — si no sabes qué estás mirando, te pierdes. Toma 1-2 sesiones de uso para internalizar la disposición.

**UX denso, no optimizado para mobile**: Lolalytics está claramente diseñado para desktop. En mobile la experiencia es pobre, con tablas que requieren scroll horizontal y filtros incómodos.

**Anuncios visibles**: igual que casi todas las tools free de gaming stats. Tolerables en desktop con ad-blocker, molestos en mobile.

**Cobertura desigual de regiones más chicas**: como op.gg / U.GG, los datasets de KR/NA/EUW son enormes y confiables; en LAS/LAN/OCE/BR los stats por matchup pueden tener baja confianza estadística (sample size chico).

**Sin perfil personal denso**: si quieres ver tu propio histórico estilo OP.GG, Lolalytics no es la opción. Su valor está en el análisis agregado, no en el perfil individual.

## Cómo empezar

1. Vas a `lolalytics.com`. Sin login, sin instalación.

2. Busca tu champion main y el rol que juegas. Configura el filtro de rango (prueba con tu rango real para data más representativa).

3. Pasa 5 minutos explorando las pestañas: Build, Matchups, Runes, Skills, Stats. Cada una tiene su propio nivel de profundidad.

4. Para cada uno de tus 3 matchups más frecuentes (los oponentes que ves más seguido), abre la vista detallada y nota el breakdown por timing — eso te da intuición sobre cuándo pelear y cuándo evitar.

5. Cuando salga un patch nuevo, vuelve a la sección Patch Notes Analysis para ver qué cambió en tu pick y en sus matchups principales antes de jugar la primera ranked del patch.

6. Si la densidad te abruma, empieza con U.GG y vuelve a Lolalytics cuando quieras profundizar en un matchup específico.
