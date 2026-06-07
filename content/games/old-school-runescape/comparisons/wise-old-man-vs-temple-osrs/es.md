---
title: Wise Old Man vs TEMPLE OSRS — el tracker moderno vs la data más profunda
description: Comparación a fondo de los dos trackers de XP de referencia en OSRS. WOM apunta a UI limpia e integraciones; TEMPLE a la data más densa con collection log y drop logs.
---

Si trackeas tu cuenta de OSRS o corres competiciones de clan, tarde o temprano comparas estos dos. **Wise Old Man** (WOM) es el tracker moderno por default: open source, UI limpia, y el mejor combo de plugin de RuneLite más bot de Discord del ecosistema. **TEMPLE OSRS** es el destino de los power users: la data más profunda del juego, con rates de EHP/EHB mantenidos activamente, drop logs y tracking de collection log que WOM no cubre. No compiten por "el mejor"; compiten por dos perfiles de jugador distintos.

## Profundidad de data

Acá es donde TEMPLE saca ventaja clara. Su propuesta es ser la base de datos más densa de OSRS:

- **EHP/EHB mantenidos activamente.** TEMPLE actualiza sus rates de Efficient Hours Played y Efficient Hours Bossed con un equipo que sigue de cerca los métodos meta. Cuando un método de training o un kill de boss cambia de eficiencia, los rates se ajustan.
- **Collection log tracking.** TEMPLE asumió buena parte de lo que hacía collectionlog.net: trackea tu collection log entry por entry, con porcentaje de completado y qué te falta. WOM directamente no tiene esta capa.
- **Drop logs.** Registra drops por boss, con totales acumulados y rates observados. Es la herramienta para alguien que quiere saber exactamente qué dropeó en sus 2.000 kills de un boss.
- **Group y clan tools.** TEMPLE tiene herramientas de grupo robustas y competiciones, con foco en data agregada del clan.

WOM también tiene EHP/EHB y los mantiene, pero TEMPLE es el proyecto que históricamente prioriza la profundidad de data por encima de todo. Si tu pregunta es "quiero ver el número exacto, el rate, el log completo", TEMPLE casi siempre tiene más.

## UI e integraciones

Acá WOM es el ganador claro, y para la mayoría de los jugadores esto es lo que más pesa en el día a día:

- **Plugin de RuneLite.** El plugin de WOM es el más pulido del ecosistema. Actualiza tu perfil automáticamente cuando logueas, sin que tengas que abrir la web ni pegar tu username. Para clanes, esto significa que los miembros se mantienen actualizados solos.
- **Bot de Discord.** El bot de WOM se integra a tu servidor y postea progreso de competiciones, resultados, y permite consultar stats con comandos. Es la pieza que convierte a WOM en el tracker default de los clanes que viven en Discord.
- **UI moderna.** El sitio de WOM es limpio, rápido y legible. La curva de aprendizaje es casi nula: alguien nuevo entiende dónde está todo en minutos.

La UI de TEMPLE es funcional pero más densa y orientada a data, no a onboarding. Un power user la aprecia; un jugador casual puede sentirla abrumadora al principio.

## Competiciones y grupos

Ambos tienen competiciones, pero el enfoque difiere. **WOM** tiene Skill of the Week y Boss of the Week nativas con leaderboard en vivo, y el bot de Discord automatiza el anuncio y el seguimiento — por eso es el estándar para clanes que corren eventos recurrentes. También tiene achievements y tracking de name changes, útil para mantener un roster limpio cuando los miembros cambian de nombre.

**TEMPLE** también ofrece competiciones y group tools, con la ventaja de que la data subyacente es más rica. Si tu clan compite y además quiere análisis profundo de la actividad agregada, TEMPLE tiene más para ofrecer. Pero la fricción de setup y la dependencia de Discord juegan a favor de WOM para el caso común.

## Limitaciones honestas

- **WOM no trackea collection log ni drop logs.** Si eso es lo que buscas, WOM no es la herramienta y no hay forma de que lo sea hoy.
- **TEMPLE tiene una curva más empinada.** La densidad de data que es su fortaleza también es su barrera de entrada. Un jugador casual o un clan que solo quiere "ver quién subió más XP esta semana" no necesita la mitad de lo que TEMPLE ofrece, y la UI lo refleja.
- **Ambos son gratis.** No hay un eje de precio que incline la balanza. WOM además es open source, lo que algunos valoran por transparencia y longevidad del proyecto.
- **Ninguno está localizado al español.** Como casi todo el ecosistema OSRS, son solo inglés. La jerga (EHP, EHB, collection log, drop log) es la misma en cualquier idioma, así que no es una barrera fuerte para datos, pero sí para textos largos.

## Cuándo gana cada uno

| Caso | Mejor opción |
|---|---|
| Competición Skill/Boss of the Week de clan | Wise Old Man |
| Auto-update desde RuneLite | Wise Old Man |
| Bot de Discord para el servidor del clan | Wise Old Man |
| Onboarding rápido de jugador nuevo | Wise Old Man |
| Tracking de collection log | TEMPLE OSRS |
| Drop logs por boss | TEMPLE OSRS |
| Rates de EHP/EHB con máximo detalle | TEMPLE OSRS |
| Análisis de data agregada del clan | TEMPLE OSRS |

## Workflow recomendado

La realidad es que muchos jugadores serios usan los dos en paralelo, y no es contradictorio. Un setup común:

1. **WOM como tracker principal y motor de competiciones.** Instalas el plugin de RuneLite una vez, conectas el bot de Discord al servidor del clan, y a partir de ahí las competiciones y el seguimiento diario corren solos. Es la capa de "actividad y eventos" del clan.
2. **TEMPLE para la data profunda.** Cuando quieres ver tu progreso de collection log, revisar los drop logs de un grind de boss, o consultar rates de EHP/EHB con el máximo detalle, abres TEMPLE. Es la capa de "análisis y completionism".

Si solo vas a usar uno: para la mayoría de jugadores y casi todos los clanes, **Wise Old Man** es el default correcto por sus integraciones y su UI. Si eres completionist, cazas drops, o vives en los números de eficiencia, **TEMPLE OSRS** es donde vas a pasar el tiempo. Y si te tomas el juego en serio, tener ambos es lo normal.
