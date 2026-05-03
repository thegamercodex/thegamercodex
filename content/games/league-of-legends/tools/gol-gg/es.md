---
title: "Gol.gg"
description: "Database analítica del esports profesional de League of Legends, activa desde 2014 desde Europa. Métricas profundas por partida, jugador, equipo y torneo: KDA, gold per minute, vision score, damage share, gold differential y más."
quickTake: "La referencia analítica del esports europeo. Si necesitás métricas profundas de un jugador o equipo en un torneo específico —no solo resultados, sino performance descompuesta— Gol.gg es la fuente. Más navegable que Oracle's Elixir, menos crudo en data."
---

## Qué es

Gol.gg es una base de datos analítica del esports profesional de League of Legends, operada desde Francia desde 2014. Su producto cubre lo que Leaguepedia no cubre: métricas estadísticas profundas por partida, jugador, equipo y torneo. Donde Leaguepedia te dice quién ganó y con qué picks/bans, Gol.gg te dice cuántas wards puso ese jugador por minuto, cuál fue su gold differential vs su lane opponent en min 15, qué porcentaje de damage del equipo concentró, y cómo se compara eso con el promedio histórico de su rol.

Cubre las cuatro ligas mayores (LCK, LPL, LEC, LCS) más eventos internacionales (MSI, Worlds), academias y ligas regionales europeas con énfasis particular. Las URLs son organizadas por torneo → partida → jugador, navegables sin búsqueda.

Es 100% free, sin tier paga, financiada con ads relativamente discretos. No requiere login para consulta.

## Qué problema resuelve

Para analistas, periodistas, content creators y fans serios del esports competitivo, los resultados (quién ganó, con qué picks) son solo el principio. La pregunta real es **cómo** ganaron — qué jugador rindió por encima de su promedio, qué decisiones macro hicieron diferencia, qué métricas explican el resultado.

Gol.gg responde esto con métricas avanzadas: gold per minute, gold differential, damage share, kill participation, vision score, ward placements, control wards, deaths per game, CS per minute. Cada métrica está normalizada por rol y comparada contra el promedio del torneo, lo cual permite identificar performers de élite vs. promedio rápidamente.

Esto cubre un gap real: ni Riot publica esta data agregada de forma navegable, ni Leaguepedia se mete en analytics, ni los sites de stats personales (op.gg, etc.) cubren la scene profesional con esa profundidad.

## La diferencia con Oracle's Elixir

Gol.gg y Oracle's Elixir son las dos referencias del esports analítico, con énfasis distinto en presentación y filosofía:

**Gol.gg**: foco en navegabilidad. Las stats están presentadas en tablas y dashboards que podés explorar haciendo click — torneo → partida → jugador → métricas individuales. La curva de aprendizaje es menor. Cobertura completa pero más fuerte en ligas europeas.

**Oracle's Elixir**: foco en raw data y datasets descargables. Tim "Magic" Sevenhuysen mantiene la base con datasets en CSV exportables y un blog con análisis editorial periódico. Más rigor estadístico, mejor para analistas que quieren correr sus propias queries. Cobertura más fuerte en ligas anglosajonas (LCS, LCO).

Si tu workflow es "explorar visualmente para encontrar insights", Gol.gg. Si tu workflow es "bajar datasets y hacer análisis propio", Oracle's Elixir. Para cobertura completa de un torneo internacional, conviene tener ambas — cada una tiene gaps que la otra cubre.

## Para qué la usa la gente

**Análisis de performance de jugador en torneo específico**: caso de uso central. Filtrás por torneo y jugador, y obtenés breakdown completo de sus métricas: KDA, GPM, damage share, vision score, kill participation, comparado contra promedio del rol en ese torneo.

**Estudio de tendencias macro entre ligas**: comparar gold differential promedio o vision score por rol entre LCK, LEC, LCS y LPL revela diferencias paradigmáticas (estilos más agresivos vs estructurados).

**Validar hot takes con data**: cuando un analista de cast dice "ese support está jugando muy passive", Gol.gg permite verificar con métricas (vision score por minuto, ward placements, kill participation) si la hipótesis tiene base.

**Tracking de evolución de jugador across temporadas**: ver cómo cambió la performance de un jugador desde Spring a Summer, o de una temporada a otra.

**Investigación periodística**: reporteros y content creators que escriben sobre esports usan Gol.gg para contextualizar narrativas con números verificables.

## Para quién NO es esta herramienta

Gol.gg es excelente para análisis pro, pero no es lo que necesitás si:

- **Querés histórico enciclopédico de teams/jugadores** → Leaguepedia tiene rosters, fechas exactas y achievements; Gol.gg es analytics, no historia.
- **Querés datasets descargables para análisis propio** → Oracle's Elixir es mejor opción — datasets CSV, metodología documentada.
- **Querés stats de soloqueue / personales** → OP.GG cubre eso. Gol.gg es exclusivamente pro scene.
- **Querés información del juego (champions, items, mecánicas)** → la wiki oficial de LoL es la fuente.

## Cómo se usa en la práctica

1. Vas a `gol.gg`. Sin login para lectura.

2. Home muestra navegación por: torneos en curso, ligas regionales, eventos internacionales recientes.

3. Click en un torneo abre vista con: standings, calendario, top performers, stats agregadas por equipo y jugador.

4. Click en un jugador abre perfil con: stats agregadas en el torneo, breakdown por partida, comparativa contra el promedio del rol.

5. Click en una partida abre vista detallada con: picks/bans, KDA por jugador, gold differential timeline, damage breakdown, vision score, builds finales.

6. Filtros disponibles: por liga, por temporada, por rol, por champion específico.

Para uso recurrente: bookmarkeá las URLs de torneos que seguís. Las páginas se actualizan en tiempo casi-real durante eventos.

## Limitaciones honestas

**UX denso, no apto para casual**: Gol.gg está pensado para analistas y fans serios. Si solo querés saber el resultado de una partida, es overkill — Leaguepedia es más directa.

**Cobertura desigual entre ligas**: las ligas europeas (LEC, LFL) tienen cobertura excelente. LCK, LPL, LCS son completas pero pueden tener algunos gaps en eventos secundarios. Ligas regionales menores pueden estar incompletas.

**No tiene blog editorial / análisis cualitativo**: te da los números pero no los interpreta. Para narrative + análisis, Oracle's Elixir tiene sección de blog que Gol.gg no.

**Anuncios visibles**: discretos pero presentes. La tool es free y se sostiene con ads.

**Curva de aprendizaje del vocabulario**: si no entendés conceptos como "gold differential at 15", "damage share" o "kill participation", la información puede sentirse opaca al inicio. Vale la pena leer un explainer básico de métricas avanzadas antes de usar la tool seriamente.

## Cómo empezar

1. Vas a `gol.gg`. Sin registro.

2. Si seguís un torneo en curso (MSI, Worlds, ligas regionales), buscá su página y explorá. Los standings + top performers son la entrada visual más cómoda.

3. Click en un jugador que te interese y revisá su breakdown — comparativas contra el promedio del rol son el insight más útil para identificar performers reales.

4. Si querés entender una métrica específica (ej: "qué significa exactamente kill participation"), busca un explainer externo (Reddit r/leagueoflegends o r/summonerschool tienen threads pedagógicos).

5. Para análisis propios serios o investigación periodística, complementá con Oracle's Elixir — los datasets descargables permiten queries que la web nativa no soporta.

6. Para histórico de equipos/jugadores no analítico (rosters, achievements, fechas), Leaguepedia es la fuente complementaria.
