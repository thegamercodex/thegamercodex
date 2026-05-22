---
title: "Porofessor"
description: "Overlay y web app especializado en champ select y live games de League of Legends, con scout instantáneo de teammates y oponentes en el momento exacto en que lo necesitas."
quickTake: "El mejor scout de champ select del ecosistema. Si usas una sola tool durante los 90 segundos antes de que arranque la partida, esta es. Más enfocada y menos invasiva que Blitz, sin el overhead de Overwolf que tiene Mobalytics."
---

## Qué es

Porofessor es una herramienta especializada en el momento exacto del champ select y los primeros minutos de partida en League of Legends. Operada desde 2014 por una empresa francesa (InternetServices), su producto se centra en una pregunta muy concreta: ¿quiénes son los 9 jugadores con los que vas a compartir los próximos 30 minutos, y qué tienes que saber de ellos antes de que la partida arranque?

Tiene dos formas de uso: el sitio web (porofessor.gg) que funciona como dashboard estilo OP.GG con pestaña "Live Game", y una desktop app nativa para Windows ("Activity Tracker") que se integra con el cliente de LoL y dispara info automáticamente cuando entras a champ select. La desktop app **no requiere Overwolf** — es un binario standalone, lo cual la diferencia de Mobalytics.

Tier paga ("Porofessor Plus") desbloquea features extra como histórico ampliado, threat assessment más detallado y remoción de ads. La tier free cubre todo el core — scout de teammates, info de matchups, win rate reciente, champion mastery, indicador de "tilt" basado en racha reciente.

## Qué problema resuelve

Champ select dura ~90 segundos. En ese tiempo tienes que decidir tu pick, banear al champion correcto, evaluar qué jugadores están en tilt, identificar quién está autofilleado, ver quién es one-trick pony y quién está spammeando algo nuevo. Hacer esto manualmente abriendo OP.GG en cada jugador es matemáticamente imposible — no llegas.

Porofessor resuelve exactamente esto: en cuanto se abre el champ select, te muestra una vista compacta con resumen de los 9 jugadores: rank actual, win rate de las últimas N partidas, champion mastery del pick actual, y un indicador de "tilt level" basado en racha reciente. Lo que antes tomaba 5 minutos de scout disperso, ahora cabe en una pantalla durante los 90 segundos disponibles.

## La diferencia con Blitz.gg

Porofessor y Blitz son los dos overlays más usados del ecosistema. La diferencia es de scope:

**Porofessor**: especialista. Hace una sola cosa muy bien — champ select assistance + scout de live game. No te ayuda con builds (eso lo dejas a U.GG), ni con coaching (eso a Mobalytics). Su desktop app es liviana, no instala runtime extra (ni Overwolf ni Electron pesado), y su footprint en el sistema es mínimo.

**Blitz.gg**: generalista. Cubre champ select + builds + runas + match history + automation completa (auto-import de runas, post-game review). Más features pero también más invasivo: paywall agresivo en features avanzadas, telemetría más amplia, app más pesada.

Si tu necesidad es "ayuda específica en champ select y nada más", Porofessor. Si quieres un asistente integral que automatice todo el flujo (con el costo asociado en complejidad y monetización), Blitz.

## Para qué la usa la gente

**Scout instantáneo en champ select**: caso de uso central. Apenas se abre el lobby, ves resumen de los 9 jugadores en una pantalla — rank, win rate reciente, champion mastery del pick actual, indicador de tilt.

**Identificar autofills y one-tricks**: si un teammate está jugando un champion que tiene 3 partidas de mastery, sabes que es autofill; si tiene 800 partidas, sabes que es one-trick. Eso cambia cómo planeas la composición y a quién priorizas de baneo.

**Decidir bans con threat assessment**: la app marca picks "peligrosos" del enemigo (champions con alto win rate del jugador, o picks con sinergia fuerte con la composición que están armando).

**Live game lookups públicos**: la pestaña Live Game funciona sin login — pegas un Riot ID, ves si está en partida ahora, y obtienes info en tiempo real de todos los jugadores de esa partida. Útil para spectear amigos o pros.

**Match history estilo OP.GG**: como funcionalidad complementaria, también tiene perfil de summoner con histórico, aunque con menos profundidad de UX que op.gg específicamente.

## Para quién NO es esta herramienta

Porofessor brilla en su nicho específico, pero no es la opción correcta si:

- **Quieres un asistente integral con builds, runas y automation** → Blitz.gg cubre más territorio, aunque con los trade-offs mencionados.
- **Quieres coaching estructurado y tracking de mejora** → Mobalytics tiene el GPI, Porofessor no entra en ese terreno.
- **Solo usas match history para consultar tu rank** → OP.GG es más cómodo para esa función específica.
- **No juegas en Windows** → la desktop app es Windows-only. La web app funciona en cualquier navegador, pero pierdes la integración con el cliente.

## Cómo se usa en la práctica

1. **Web app (sin instalación)**: vas a `porofessor.gg`, ingresas un Riot ID, y obtienes perfil de summoner. Pestaña Live Game muestra info en tiempo real si el jugador está en partida ahora.

2. **Desktop app (Activity Tracker)**: Descargas el instalador desde el sitio. Una vez instalado, corre en background y detecta automáticamente cuando abres champ select.

3. Apenas se abre el lobby, la app dispara una ventana con scout de los 9 jugadores: nombre, rank, win rate reciente, champion mastery del pick, tilt indicator (basado en racha de derrotas recientes).

4. Durante la partida, puedes invocar el overlay manualmente para ver info actualizada (champion stats, items recomendados según matchup).

5. Post-game: la app guarda histórico de las partidas analizadas, accesible vía dashboard web.

Para uso recurrente: mantén la desktop app corriendo en startup. Cero fricción, cero clicks adicionales — se activa sola cuando entras a champ select.

## Limitaciones honestas

**Anuncios en la versión gratuita**: la web app y la desktop app cargan ads en la tier free. Toleras o pagas Plus.

**Tilt indicator es heurístico, no ciencia**: el indicador de "tilt" se basa en racha reciente de derrotas y delta de win rate. Es señal direccional útil, pero no es predicción real — un jugador puede tener mala racha y estar perfectamente concentrado, o viceversa.

**Cobertura desigual de regiones más chicas**: igual que op.gg / U.GG, los datasets son más confiables en KR, NA, EUW. En LAS, LAN, OCE, BR, los stats agregados por jugador siguen siendo válidos pero algunos features (como threat assessment relativo a la región) son menos representativos.

**Plus tier es upsell visible**: el sitio empuja la tier paga con prompts y banners. Los features core están en free, pero el upsell es persistente.

**Desktop app es Windows-only**: no hay versión nativa de Mac o Linux. Usuarios fuera de Windows quedan limitados al uso web (que funciona pero pierde la integración automática con el cliente).

## Cómo empezar

1. Decidí si quieres la web app (uso casual / scout puntual) o la desktop app (uso recurrente / champ select assistance automático).

2. **Para web**: vas a `porofessor.gg`, sin login, ingresas un Riot ID. Listo.

3. **Para desktop**: Descargas el Activity Tracker desde el sitio, instalas, y permites que corra en background. La primera vez que entres a champ select, la app dispara automáticamente.

4. Configura la app para que arranque con Windows si vas a usarla en cada sesión — cero fricción operativa.

5. Usa el primer minuto de cada champ select para revisar el scout. Identifica quién es one-trick (priority de protección o ban según sea teammate/oponente), quién es autofill (no esperar carry suyo), y quién está en tilt (cuidado con flame, considerar dodge si es tu teammate y la composición no es viable).
