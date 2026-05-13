---
title: "CSNADES.gg"
description: "Database de lineups de utility para CS2 — smokes, flashes, molotovs y HE grenades — organizada por mapa, lado (CT/T), posición de origen, posición de destino y dificultad."
quickTake: "Si necesitas aprender el smoke exacto que tira el pro X desde Y posición hacia Z chokepoint, esta es la database. Curva de uso baja, video tutorials cortos, y cobertura amplia del active map pool."
---

## Qué es

CSNADES.gg es una database dedicada a lineups de utility para Counter-Strike 2. Organiza miles de smokes, flashes, molotovs y HE grenades por mapa, lado (CT o T), posición de origen, posición de destino, dificultad y tipo de utility. Cada lineup tiene un video tutorial corto (~30-60 segundos) que muestra exactamente dónde pararse, hacia dónde apuntar, y qué movement hacer (jumpthrow, runthrow, standthrow).

La idea es resolver el problema clásico de "vi un smoke pro pero no recuerdo bien la lineup". En vez de rebuscar en YouTube por compilations o memorizar de demos, abres CSNADES, filtras por mapa y posición, y tienes el video listo.

Cubre el active map pool de CS2 (Mirage, Inferno, Dust2, Nuke, Ancient, Anubis, Vertigo, Train) con buena profundidad. Maps fuera del pool tienen cobertura más fragmentada o están ausentes.

## Qué problema resuelve

Aprender utility para CS es uno de los meta-skills más valiosos del juego. Una buena smoke puede definir un round, una flash bien tirada gana un duelo. Pero el conocimiento está disperso: pros tirando lineups en streams, YouTubers haciendo videos largos, posts en reddit con descripciones vagas.

CSNADES centraliza todo eso en formato consultable. La unidad de información no es "video de 20 minutos sobre Mirage" sino "smoke específica para CT mid de Mirage hacia A site, ejecutada desde T spawn". Granularidad útil para práctica deliberada.

## Para qué la usa la gente

**Aprender un nuevo mapa rápido**: cuando agregan un mapa al pool o quieres expandir tu pool jugado, CSNADES te da las 10-15 lineups esenciales sin tener que ver 4 horas de YouTube.

**Refresh post-update**: cuando Valve patchea un mapa (cambian sightlines, ajustan modelos), algunas lineups dejan de funcionar. CSNADES marca lineups verified post-patch como prioridad.

**Practice deliberada**: filtras "smokes T side Mirage de dificultad beginner" y te armas un set de 10 lineups para practicar en una sesión de 30 min en mapa offline.

**Quick reference durante warmup**: antes de un match, refrescas 2-3 lineups de tu posición habitual. La UX está optimizada para consultas rápidas.

**Aprender lineups específicas que viste en pro play**: filtras por "smoke CT mid de Inferno hacia A apartment" y encuentras múltiples opciones, incluyendo las que usan los pros.

## Para quién NO es esta herramienta

CSNADES es excelente para utility lineups pero no es:

- **Para análisis de tu propia performance** → eso es scope.gg o Leetify.
- **Para aprender estrategia macro** → CSNADES enseña ejecuciones individuales, no rotations o macro game.
- **Para practicar contra bots o simular partidas** → es solo reference; la práctica la haces en el cliente del juego.
- **Para mapas de workshop o legacy** → cobertura está enfocada en active pool. Cobble, Cache, Train versiones viejas tienen menos info.

## Cómo se usa en la práctica

1. Vas a `csnades.gg`. Home muestra mapas del pool con thumbnail.

2. Click en un mapa → vista del mapa con overlay de lineups categorizadas. Filtros: tipo (smoke/flash/molly/HE), lado (CT/T), dificultad (beginner/intermediate/advanced), origen, destino.

3. Click en una lineup → modal con video corto, descripción de movement (ej: "jumpthrow + lookat point X"), y comments comunitarios.

4. Para práctica: configurar tu CS2 en mapa offline (`mp_warmuptime 9999; sv_cheats 1; sv_grenade_trajectory_prac_pipreview 1`) y replicar la lineup viendo el video al lado.

5. Si algo no funciona después de un patch, los comments suelen avisar — la base es activa para reportar lineups rotas.

## Limitaciones honestas

**Calidad de videos varía**: la mayoría son cortos y bien hechos pero algunos tienen audio bajo o framing apresurado. Comments suelen flagearlo.

**Cobertura desigual de tipos de utility por mapa**: smokes están exhaustivamente cubiertos; flashes tienen buena cobertura; molotovs son OK; HE grenades están más subdocumentados (porque se usan menos).

**Updates lag post-patch**: cuando Valve patchea un mapa, hay 1-2 semanas de lag hasta que los lineups se reverifican. Comments son la primera señal de "esto ya no funciona".

**No es exhaustivo de pro lineups**: equipos pro tienen lineups custom que no están en bases públicas. CSNADES cubre el universo "público y verificado" — para deep pro stuff necesitas demos.

**UX algo cargada en mapas con muchos lineups**: Mirage tiene 200+ lineups. Los filtros ayudan pero la primera carga puede sentirse abrumadora.

**No tiene tier paga / no tiene tracking personal**: es 100% public reference. No puedes marcar lineups "ya las practiqué" ni guardar favoritos persistentes (sin login propio).

## Cómo empezar

1. Vas a `csnades.gg` y elige un mapa que juegas regularmente.

2. Filtrá por dificultad **beginner** y tipo **smoke**. Anda del menos al más complejo.

3. Para tu primera sesión de práctica: elige 5 smokes (tres CT, dos T) y replicá en mapa offline. 30 minutos suelen ser suficientes para internalizar 5 lineups.

4. Configurá comandos prácticos en CS2 para training:
   ```
   mp_warmuptime 9999; sv_cheats 1; sv_grenade_trajectory 1; sv_grenade_trajectory_prac_pipreview 1
   ```

5. Para session-long practice: rotá 1 mapa por semana. Repetir lineups viejas + agregar 5 nuevas mantiene memorización fresca.

6. Combinar con scope.gg post-match: scope te muestra qué smokes tiraste mal en partida real, CSNADES te enseña la versión correcta.
