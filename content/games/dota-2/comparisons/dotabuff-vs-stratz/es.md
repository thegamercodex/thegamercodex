---
title: "Dotabuff vs STRATZ — el clásico contra el moderno"
description: "Dotabuff es el tracker de match history más usado de Dota 2; STRATZ es la plataforma moderna con insights AI y app mobile. Cuándo conviene cada una."
---

Dotabuff y STRATZ resuelven el mismo problema base: el cliente de Dota 2 solo muestra historial básico de partidas, así que para revisar stats por héroe, scoutear a un oponente o leer el meta necesitas una web externa. Las dos son web apps gratuitas que se nutren de la misma data de partidas públicas vía la Steam API. La diferencia está en el ángulo: Dotabuff es la institución de 2012 con la marca más reconocible y el dataset más amplio; STRATZ, lanzada alrededor de 2017 por ex-pros, apuesta por interpretar la data en lugar de solo mostrarla.

## Tipo de contenido

Dotabuff entrega un dashboard clásico y directo: pegas un Steam ID o buscas por nombre y obtienes stats acumulados, win rate por héroe, las últimas 20 partidas con desgloses completos, tier lists del meta por parche y bracket de MMR, y leaderboards regionales. Es lectura de datos sin fricción.

STRATZ parte de los mismos datos pero los empaqueta de otra forma:

- **Dashboard personalizado** que prioriza tus héroes recientes, sugerencias de héroes a aprender y tendencias de MMR.
- **Predicciones AI de win probability** al inicio o durante una partida, basadas en composiciones e historial de los jugadores.
- **MMR Estimator** que proyecta tu MMR potencial y sugiere áreas a trabajar (visión, last-hit, kill participation).

Dotabuff muestra qué pasó; STRATZ intenta decirte qué hacer al respecto.

## Madurez, freshness y profundidad

Ambas dependen de la Steam API, así que una partida recién terminada puede tardar 5-30 minutos en aparecer en cualquiera de las dos — no es un defecto de ninguna, sino de la cola de Valve.

Dotabuff lleva más de una década ingesteando partidas públicas, lo que le da el dataset histórico más amplio y la marca con mayor reconocimiento; por inercia, muchos jugadores van a Dotabuff por default y hay más tutoriales de terceros. STRATZ tiene comunidad más pequeña pero ship features más rápido y ha tenido varios redesigns mayores de UI, integrando elementos AI más visiblemente que la competencia.

## Plataformas y monetización

Dotabuff es solo web. STRATZ es la única de las dos con app nativa robusta para iOS y Android, útil para review rápida desde el teléfono con notificaciones de partidas terminadas.

En monetización las dos son freemium con un Plus de ~$3.50/mes:

- **Dotabuff Plus** desbloquea filtros profundos, retención de historial extendida y la plataforma TrueSight de análisis de replays. El tier gratis cubre el 95% de lo que la mayoría necesita.
- **STRATZ Plus** quita ads y desbloquea filtros avanzados y breakdowns detallados. El tier gratis es generoso, pero la presión de upsell es algo más visible que en Dotabuff.

Ambas son closed-source, así que no puedes auditar su metodología de cálculo (para eso está OpenDota). Las predicciones AI de STRATZ son estadísticas, no oráculos: útiles como un input más.

## ¿Cuál usar?

- **Lookup casual y scouting rápido en champ select** → Dotabuff. UI familiar y la opción más reconocible.
- **Browsing del meta por bracket de MMR** → cualquiera de las dos; ambas tienen tier lists por parche.
- **Sugerencias de qué mejorar y predicciones de partida** → STRATZ. Es el producto interpretativo, no solo de datos.
- **Review de stats desde el teléfono** → STRATZ, por su app nativa iOS/Android.
- **Análisis de replays profundo move-by-move** → Dotabuff con TrueSight (requiere Plus).
- **Máxima cobertura histórica y marca establecida** → Dotabuff.

No son excluyentes: comparten data base y se complementan. Muchos jugadores comprometidos bookmarkean ambas (más OpenDota), usando Dotabuff para lookup veloz y STRATZ cuando quieren que la data les diga algo.
