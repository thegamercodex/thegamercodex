---
title: "OpenDota vs STRATZ — data abierta contra insights AI"
description: "Dos trackers de Dota 2 que cubren la misma base pero apuntan a usuarios distintos: OpenDota es open-source, queryable y orientado a developers; STRATZ es closed-source, interpretativo y con app mobile nativa."
---

OpenDota y STRATZ rastrean lo mismo a nivel base — perfiles, match history, stats por héroe, win rates — pero resuelven necesidades opuestas. OpenDota se lanzó en 2014 como alternativa 100% open-source: codebase, pipeline de datos y API son públicos bajo licencia MIT. STRATZ apareció alrededor de 2017, de la mano de ex-pros, apostando a visualizaciones modernas, predicciones AI y sugerencias de mejora. Quien las compara suele estar decidiendo entre data raw que puede auditar y construir encima, o un producto que interpreta esa data y le dice qué hacer.

## Filosofía y datos que ofrecen

OpenDota expone la data cruda y la hace queryable. Su replay parser (YASP, luego Manta) extrae granularidad poco común por partida: usos de habilidad, posicionamiento de wards, smoke timings, asignaciones de lane y data posicional completa cuando una partida se parsea en detalle. Además, al ser open-source, puedes auditar cómo se calcula cada stat.

STRATZ va por el lado contrario: en vez de solo mostrar qué pasó, intenta decirte qué hacer al respecto.

- **OpenDota**: data raw, transparente y verificable. SQL Explorer para queries arbitrarias sobre la base pública de partidas.
- **STRATZ**: data interpretada. Predicciones de win probability, sugerencias AI de héroes a aprender, alertas sobre patrones de juego recurrentes.

Una limitación honesta de OpenDota: el parsing detallado no es automático para todas las partidas por costo computacional. Una de STRATZ: las predicciones AI son estadísticas, no oráculos — útiles como un input más.

## Audiencia y experiencia de uso

OpenDota es la opción del usuario técnico y del builder. Su API es el estándar de-facto del ecosistema: decenas de overlays de Twitch, bots de Discord y tools usan su backend, con 50K llamadas gratis al mes. La contracara es una UI más densa y menos pulida en el onboarding, y un diseño mobile que va detrás de la competencia.

STRATZ apunta al jugador que quiere feedback con UX moderna. Su dashboard personalizado prioriza tus héroes recientes, tendencias de MMR y sugerencias específicas a tu cuenta, y es la única de las dos con app nativa robusta para iOS y Android.

## Plataformas y monetización

Ambas son gratis en su núcleo y ofrecen un tier Plus de ~$3-$3.50/mes.

- **OpenDota**: solo web. Plus financia infraestructura y garantiza parsing de tus partidas, pero no paywallea la data core. La API gratis cubre proyectos personales.
- **STRATZ**: web, iOS y Android. El tier Plus es más relevante que en otros trackers — filtros avanzados y breakdowns detallados quedan detrás del paywall, y la presión de upsell es más visible. También tiene API, pero menos popular entre developers.
- **Idiomas**: ambas en inglés.

## ¿Cuál usar?

- **Vas a construir una tool, bot u overlay** → OpenDota. Su API y replay parser open-source son el estándar del ecosistema.
- **Quieres saber qué mejorar tras cada partida** → STRATZ. Interpreta tu performance y sugiere áreas concretas.
- **Necesitas responder una pregunta puntual del meta** → OpenDota. El SQL Explorer corre cualquier query sobre la base pública.
- **Te importa la transparencia y auditabilidad de los stats** → OpenDota. Es open-source; STRATZ es caja cerrada.
- **Consumes mayormente desde el teléfono** → STRATZ. Es la única con app mobile nativa.
- **Quieres un dashboard moderno y visual de tu progreso** → STRATZ. Su UI prioriza tu data personalizada.

No son redundantes: muchos jugadores tienen OpenDota abierto para data cruda y fact-checking, y STRATZ para el dashboard diario y las sugerencias de mejora. Tener ambas cuesta cero en el tier gratis.
