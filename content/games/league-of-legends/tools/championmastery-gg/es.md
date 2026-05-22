---
title: "ChampionMastery.gg"
description: "Tool comunitaria que mantiene leaderboards globales de Champion Mastery por región y por champion. Open source, mantenida desde ~2016 por Derpthemeus, con commits recientes reaccionando a deprecaciones de la API de Riot."
quickTake: "La única tool del ecosistema dedicada exclusivamente a leaderboards de mastery. Si te interesa saber quién es el jugador con más puntos en tu champion main, o eres one-trick que quiere ver dónde estás globalmente, esta es la fuente. Niche y específica — no replacement para op.gg/U.GG."
---

## Qué es

ChampionMastery.gg es una tool comunitaria que mantiene leaderboards públicos del sistema de Champion Mastery de League of Legends, agregados por champion y por región. Existe desde alrededor de 2016, mantenida por Derpthemeus (single-maintainer identificado), y es open source en GitHub bajo licencia MIT.

El producto es directo: por cada champion del juego, lista los jugadores con más mastery points en cada región (NA, EUW, KR, LAS, LAN, etc.). Puedes ver leaderboards globales por champion, leaderboards regionales, o el perfil de un summoner específico con todos sus champions ordenados por mastery points y nivel alcanzado.

Es 100% free, sin tier paga. Sin login obligatorio. La data se actualiza periódicamente vía la API de Riot.

## Qué problema resuelve

Champion Mastery es un sistema de progresión que Riot agregó para reconocer dedicación a champions específicos — más partidas jugadas con un champion + mejor performance = más mastery points y niveles más altos. Pero el cliente de LoL solo te muestra tu propio mastery; no hay forma nativa de ver leaderboards de quién tiene más puntos en un champion específico.

Esa función específica la cubre ChampionMastery.gg. Es nicho — no relevante para todos los players — pero para una sub-comunidad concreta (one-tricks, fanáticos de un champion específico, content creators que cubren mains de algún champion), responde una pregunta que ningún otro recurso responde.

También sirve como signal informal de "expertise por champion": si un jugador tiene top-10 mastery global de un champion, eso es señal de que probablemente sabe jugarlo a nivel profundo, independiente de su rank actual.

## Para qué la usa la gente

**Ver leaderboard de un champion específico**: caso de uso central. ¿Quién tiene más mastery points en Yasuo a nivel global? ¿Y en EUW? ChampionMastery.gg te lo dice.

**Encontrar one-tricks famosos para aprender de ellos**: si quieres ver streams o videos de los mejores jugadores de tu champion main, la lista de top mastery es buen punto de partida.

**Verificar tu propio ranking**: ingresas tu Riot ID y ves dónde estás global y regionalmente para cada champion que juegas.

**Tracking de competición informal entre amigos**: comparar quién tiene más mastery en un champion específico es competencia divertida dentro de una comunidad chica.

**Investigación pedagógica para coaches**: identificar one-tricks de champions raros (los que tienen top mastery sin ser meta) revela jugadores que han especializado mucho — útil para estudiar gameplay de nicho.

## Para quién NO es esta herramienta

ChampionMastery.gg cubre una función muy específica. No es lo que necesitas si:

- **Quieres stats generales de tu cuenta** → OP.GG es más completo en perfil de summoner (rank, win rate, recent matches).
- **Quieres builds, runas o tier lists** → U.GG y Lolalytics cubren esa función.
- **Te interesa el ranking general (no por champion)** → los leaderboards de Riot in-client cubren ranking por elo. ChampionMastery.gg es exclusivamente sobre mastery.
- **Eres casual player que no se preocupa por mastery** → la tool no te aporta valor si no estás invertido en el sistema de mastery.

## Cómo se usa en la práctica

1. Vas a `championmastery.gg`. Sin login.

2. Home muestra navegación por: champions (para ver leaderboards), summoners (para buscar perfiles individuales), regions.

3. Click en un champion abre leaderboard global con top jugadores ordenados por mastery points; puedes filtrar por región específica.

4. Click en un summoner abre su perfil con todos sus champions ordenados por mastery points, mastery level alcanzado y porcentaje de progreso al siguiente nivel.

5. Búsqueda de summoner: ingresas Riot ID y región; la tool importa data desde la API de Riot.

Para uso recurrente: bookmarkea tu propio perfil para tracking, y los leaderboards de tus champions main para chequear evolución cada cierto tiempo.

## Limitaciones honestas

**Single-maintainer**: el proyecto depende de Derpthemeus. Bus-factor 1 mitigado por: (a) track record largo de mantenimiento (proyecto activo desde ~2016, commits recientes en jun-jul 2025 reaccionando a cambios de la API de Riot), (b) código open source — si el maintainer parara, otros podrían forkear y continuar.

**Función muy nicho**: la tool hace una sola cosa específica. Si no te interesa champion mastery como progression system, la tool no te aporta valor.

**Dependencia de la API de Riot**: si Riot cambia la API (como el cambio reciente de summoner IDs en 2025), la tool requiere actualización del maintainer. Generalmente las migraciones son rápidas, pero pueden tener gaps temporales.

**UX simple, no moderno**: la tool prioriza función sobre forma. Layout funcional pero no pulido visualmente.

**Data update no es real-time**: los leaderboards se actualizan periódicamente, no instantáneamente. Si jugaste 5 partidas hace 10 minutos, tus mastery points actualizados pueden tardar en reflejarse.

**No incluye Mastery Chest tracking ni Hextech progression**: la tool se enfoca exclusivamente en mastery points/levels, no en otros sistemas de progresión que Riot agregó después (chests, eternals, milestones).

## Cómo empezar

1. Vas a `championmastery.gg`. Sin registro.

2. Busca tu propio perfil ingresando tu Riot ID y región. Mira tu lista de champions ordenada por mastery points — probablemente identificas patrones (champions que juegas intensamente vs. ocasionalmente).

3. Si tienes un champion main claro, abre su leaderboard global y mira dónde estás. Para players de elo alto + dedicación a un main, puedes estar más cerca del top de lo que esperas.

4. Si quieres aprender más de tu champion, los top mastery globales suelen ser one-tricks famosos — busca su contenido en YouTube/Twitch para gameplay específico.

5. Para tracking de competencia con amigos en un champion específico, compartan los URLs de sus perfiles — es una competencia chiquita pero divertida dentro de un círculo cerrado.

6. La tool es complementaria, no reemplaza nada. Combinala con OP.GG (perfil general) y U.GG (builds) para cobertura completa.
