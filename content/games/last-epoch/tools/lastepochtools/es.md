---
title: "Last Epoch Tools"
description: "Hub comunitario all-in-one para Last Epoch: planner interactivo de builds, database completa de items y affixes, herramienta de creación y sharing de loot filters, build collection auto-crawleada desde YouTube, profiles de characters identificables y ladders por season."
quickTake: "Si solo abres un sitio third-party para LE, este. Cubre tantos casos de uso que termina siendo el bookmark default de la mayoría de jugadores serios. El planner no es tan profundo como Path of Building for LE, pero la integración con DB + filters + builds + profiles en un solo dominio no la matchea nadie."
---

## Qué es

Last Epoch Tools (lastepochtools.com) es el sitio third-party más usado de la comunidad de LE. Lo mantiene un equipo independiente desde Early Access del juego (2020+) y se posiciona como hub generalista: nunca pretende ser el mejor en una sola cosa, sino el más completo en cobertura.

Lo que ofrece, secciones principales:
- **Build Planner**: planner web con clase, mastery, skills, pasivas, idols, gear y stats. No requiere instalación.
- **Item Database**: catálogo completo de uniques, sets, prefixes, suffixes con filtros por tier, clase y tipo.
- **Loot Filters**: herramienta para crear, sharear y editar filters online, con community gallery.
- **Builds**: colección auto-crawleada de builds desde YouTube y community submissions, sortable por patch version y class.
- **Character Profiles**: ingresas tu nombre de cuenta y ve tus characters publicados — útil para mostrar tu setup a amigos sin tomar capturas.
- **Ladders**: leaderboards de competitive ladder con filtros por cycle, hardcore, solo self-found.
- **News**: agregador de patch notes y dev updates.

Free, sin registro para read. Login para guardar builds y filters bajo tu cuenta.

## Qué problema resuelve

LE tiene mucha info crítica fuera del juego: tier list de affixes, qué uniques importan, qué blessings rolean en qué timeline, cuáles son los builds del meta. El cliente in-game no expone nada de esto cómodamente — el tooltip de un unique no te dice si es bueno, ni te muestra qué affixes podrías rollear.

Last Epoch Tools resuelve esto centralizando todo en un solo dominio. En vez de saltar entre Maxroll para el build, ArreatSummit para el precio, una wiki para el lore del unique y un Pastebin para el filter, abres lastepochtools.com y haces todo desde ahí.

## Diferenciación vs Maxroll

Ambos son hubs grandes con planner + builds + guides + ladders, pero su tono es distinto:

- **Last Epoch Tools**: bias hacia community-driven. Builds auto-crawleadas, filters compartidos por cualquier jugador, planner sin curaduría editorial. Más amplitud, menos opinión.
- **Maxroll**: bias hacia editorial-driven. Builds publicados por staff con leveling + endgame curado, tier lists con justificación editorial, guides extensos. Más depth, más opinión.

La mayoría de jugadores usa los dos en flujos distintos: Maxroll para elegir el build y entender el por qué; Last Epoch Tools para sharear el planner final, importar filter de un creator específico y revisar ladders.

## Para qué la usa la gente

**Theorycraft propio**: abres el planner sin partir de un build publicado, eliges clase y mastery, y empiezas a mover skills/pasivas/idols viendo cómo cambian los stats en tiempo real.

**Importar un build ajeno**: Copias la URL de share del planner desde un creator (Maxroll, YouTube description) y la abres en LE Tools para verla, modificar o clonar.

**Crear loot filter custom**: el editor visual te deja definir reglas (color, sonido, hide) por affix tier, clase de item, level requirement. Más cómodo que editar XML a mano.

**Importar filter de otro player**: Copias un filter ID/URL desde Reddit o Discord y lo abres en lastepochtools para inspeccionarlo, exportarlo en formato in-game y editarlo.

**Buscar info de un unique específico**: vas a la DB, escribes el nombre y ves todos los affixes que rolea, LP value y qué builds lo usan.

**Mostrar tu char**: linkear tu character profile en tu Discord/forum signature para que la gente vea tu gear sin screenshots.

## Para quién NO es esta herramienta

- **Theorycrafters que quieren simulación de DPS profunda**: el planner es bueno para visualizar, pero no calcula DPS con la profundidad de Path of Building for LE. Para min-max absoluto, complementar con PoB.
- **Jugadores que quieren curaduría editorial fuerte**: las builds auto-crawleadas tienen quality variable. Si quieres garantía de que el build es bueno, Maxroll o ArreatSummit.
- **Mobile-first**: la UI funciona en mobile pero está pensada para desktop. El planner es difícil de manejar en touch.

## Cómo se usa en la práctica

1. Anda a [lastepochtools.com](https://www.lastepochtools.com/).

2. **Para planificar build**: click en **Build Planner** → eliges clase y mastery → asignas skills y pasivas usando el árbol visual → agregas gear con affixes de la DB. Los stats se actualizan en tiempo real.

3. **Para inspeccionar item**: click en **Database** → **Items / Uniques / Prefixes / Suffixes** según lo que busques. Filtros laterales por tier, clase, tipo de equipo.

4. **Para crear loot filter**: click en **Loot Filters** → **Create new** → defines reglas en el editor visual → export como archivo `.xml` que vas a copiar a tu carpeta de LE save data.

5. **Para sharear**: cualquier build, filter o character profile tiene URL única que puedes pegar en Reddit, Discord, etc. El planner soporta versionado para que builds viejos sigan accesibles.

## Limitaciones honestas

**Build collection sin curaduría**: la mayoría son auto-crawleados de YouTube; algunos están outdated o son meme builds disfrazados de meta. Hay que filtrar por cycle/patch antes de confiar.

**Planner ligero en cálculos avanzados**: para DPS shock, ailment scaling crítico o min-maxing de affixes específicos, el planner se queda corto. Path of Building for LE lo cubre mejor.

**Cloudflare ocasional**: el site usa Cloudflare strict mode; durante picos de tráfico post-season-launch a veces aparece challenge page que demora 2-3 segundos.

**Inglés solamente**: no tiene localización a español, alemán u otros idiomas.

**Sin app mobile dedicada**: usar desde celular es funcional pero feo. El planner es desktop-first.

**Ads moderados**: hay banner ads y newsletter prompt. Manejable con adblock; no llega al nivel intrusivo de algunos competidores.

## Cómo empezar

1. [lastepochtools.com](https://www.lastepochtools.com/). Sin registro para read.

2. **Si recién empiezas LE**: ve a **Builds** → filtra por current cycle (Season 4) → ordena por views/likes para ver builds populares. Click en uno → abre planner para entender estructura.

3. **Si vas a crear tu propio build**: ve a **Build Planner** → New build → eliges clase. La UI es self-explanatory: click en skill para abrir su tree, drag/drop gear desde DB lateral.

4. **Para loot filters**: ve a **Loot Filters** → busca uno popular de tu mastery → export → copia el archivo al folder `LastEpoch/Saved/Filters/` → activas in-game con Shift+F.

5. **Cuenta opcional**: registrarte permite guardar builds, filters y characters en tu profile permanente, sin eso solo tendrás URLs share-able.

6. **Bookmark recomendado**: la home (lastepochtools.com) por defecto te lleva al builder más reciente. Útil cuando estás iterando builds activamente.
