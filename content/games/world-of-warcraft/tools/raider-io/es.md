---
title: "Raider.IO"
description: "El servicio dominante de tracking de Mythic+ y progresión de raid en WoW. Existe desde 2017 e incluye web app con leaderboards, addon companion para lookups in-game, y un score (RIO) que la comunidad usa como métrica de referencia para invitar a keys."
quickTake: "Si pugeas Mythic+ alguna vez, vives en Raider.IO. El RIO score es el filtro de invitación de prácticamente todo el LFG, y el addon companion es uno de los más universalmente instalados de WoW. Independiente, fundado por Aspyric, sin afiliación corporativa con WCL/WoWHead."
---

## Qué es

Raider.IO (raider.io) es el servicio canónico para trackear progresión de Mythic+ y raid en WoW. Combina tres cosas: una web app pública con perfiles de personaje, leaderboards por dungeon y por temporada; un addon companion (Raider.IO Mythic Plus) que muestra el score de los players in-game al pasar el mouse sobre su nombre; y una API que addons y tools de terceros consumen.

Lanzado en 2017 por Aspyric, el proyecto se volvió referencia obligada cuando Blizzard introdujo Mythic+ como sistema de end-game competitivo. El **RIO Score** — un número agregado de las mejores keys cronometradas por dungeon de cada temporada — pasó de métrica útil a estándar social: la mayoría de grupos PUG en LFG filtran candidatos por score mínimo.

A diferencia de Warcraft Logs, Raider.IO es independiente — no es parte del ecosistema Fanbyte/Tencent. Eso le da identidad propia y políticas distintas.

## Qué problema resuelve

Cuando Blizzard introdujo Mythic+, no incluyó leaderboards ni un sistema visible de progresión. Cada cuenta tenía sus propias keys completadas pero no había forma estándar de saber qué tan bueno era alguien al hacer M+ sin invitarlo y verlo. Para PUG players, esto creaba un problema: ¿cómo evalúas a un desconocido antes de meterlo en una key de 30 minutos?

Raider.IO resolvió tres cosas:

1. **Score visible y comparable**: el RIO Score consolida tu performance del current season en un número que tiene contexto (top 0.1%, top 5%, etc.).
2. **Lookups in-game**: el addon companion lee el score de cualquier player y lo muestra en tooltip, en LFG, y en raid frames. Eso convirtió "¿quién es este desconocido?" en "score 3247, top 1%, OK invito".
3. **Leaderboards y tracking**: la web app te muestra runs históricos, dungeons donde flaqueas, mejor tiempo por dungeon, comp más frecuente.

Para PUG players, esto se volvió infraestructura. Para guilds, es referencia para reclutar candidatos M+.

## Para qué la usa la gente

**Filtrar invites en LFG**: el caso más común. Estás armando key, tu addon te muestra el RIO score de cada applicant, invitas según threshold de la dificultad de tu key.

**Ver tu progreso de temporada**: tu perfil tiene score por dungeon, mejor key cronometrada, y delta vs. semana pasada. Útil para identificar qué dungeons necesitas trabajar.

**Investigar un player nuevo**: pegas su nombre + servidor en raider.io y ves carrera completa: scores históricos, raid progression, equipos pasados.

**Tracking de raid progression**: además de M+, Raider.IO trackea progress de raid (qué bosses mató una guild en qué difficulty, ranking world/region/server). Es la forma más fácil de ver dónde está parada una guild en un tier.

**Planificación de keys con tu grupo**: usando la web app, ves qué dungeons todos tienen débiles y qué afixes de la semana favorecen cuál comp.

**Recruiting**: las guilds revisan logs en WCL + perfil RIO antes de aceptar a un applicant. Es CV implícito.

## Para quién NO es esta herramienta

- **Players que no hacen M+ ni raid**: si solo te dedicas a leveling, professions, o RP, RIO no aplica.
- **PvP**: no cubre rated arena ni rated BG. Hay servicios distintos para eso.
- **Análisis profundo de un pull o boss**: para "por qué fallé esta key", Warcraft Logs + WoWAnalyzer son las correctas. RIO te da el resultado, no el porqué.
- **Players sensibles a "score-based gatekeeping"**: el sistema RIO es honestamente parte del problema social del M+ PUG (filtrar por score puede excluir a players competentes con menos tiempo). Si la cultura te molesta, puedes ignorarlo, pero la mayoría del PUG meta la usa.

## Cómo se usa en la práctica

**En la web**:

1. Vas a [raider.io](https://raider.io).

2. Buscas tu personaje por nombre + reino.

3. Ves tu perfil: RIO score actual de la temporada, breakdown por dungeon, mejores runs, raid progression, mounts/achievements relevantes.

4. Para investigar a otro player, lo mismo — search box arriba.

5. Para leaderboards por dungeon: menú **Mythic Plus → Leaderboards**, eliges región, dungeon y week.

**Con el addon (Raider.IO Mythic Plus)**:

1. Lo instalas vía CurseForge, Wago, o el WoWUp manager.

2. Activas in-game (suele estar on por default tras instalación).

3. En LFG, applicants muestran su score y mejor run de cada dungeon en tooltip.

4. En raid/party, hover sobre player name muestra su score actual.

5. El addon sincroniza con la API de raider.io para mantener data updated.

## Limitaciones honestas

**Score-based gatekeeping**: el sistema RIO incentiva un meta donde players con score alto excluyen a players con score bajo. Para newcomers a M+, romper ese ciclo es difícil — si nadie te invita por bajo score, no puedes subir score. Hay vueltas (key own runs, guild groups), pero la fricción es real.

**No mide ejecución, mide resultado**: el score solo refleja que cronometraste una key. No refleja si jugaste bien la rotación, si tu posicionamiento era correcto, si tomaste decisions inteligentes. Para esa lectura, necesitas logs.

**Premium tier empuja moderado**: tier free es completamente funcional. El Premium ($5/mes) agrega cosas como filtros de búsqueda más finos, sin ads, y stats extra. No es agresivo pero el upsell aparece.

**Addon ocasionalmente desfasado de la web**: el sync entre cliente in-game y raider.io.com puede tener retraso de horas. Si una key recién la cronometraste, puede no aparecer en el addon hasta el próximo sync.

**No detecta boost runs / carries**: si alguien compró un carry para subir su score, RIO solo ve el score final. Hay players con score alto sin la habilidad real para keys de ese nivel — el filtro RIO no es perfecto, hay que combinarlo con criterio.

**Cobertura solo de Retail**: Classic y SoD no tienen tracking de M+ porque no existe el sistema. Para raid progression de Classic, otras tools (WoWProgress) tienen más data histórica.

## Cómo empezar

1. Abre [raider.io](https://raider.io). Busca tu personaje (Region → Realm → Name) y revisa tu perfil.

2. Instala el addon **Raider.IO Mythic Plus** via [CurseForge](https://www.curseforge.com/wow/addons/raiderio) o Wago.

3. Verifica que tu personaje aparece in-game con score visible al hacer hover sobre tu propio nombre en raid frames.

4. Para una key, abre LFG y revisa los scores de applicants antes de invitar — el filtro standard suele ser "score igual o mayor al nivel de la key que estás haciendo".

5. Si quieres trackear progreso, bookmarkeá tu perfil de raider.io: revisalo semanal para ver cómo subió tu score por dungeon.
