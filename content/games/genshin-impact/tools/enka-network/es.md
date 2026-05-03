---
title: "Enka.Network"
description: "Plataforma de showcase de personajes basada en UID, con builds visibles públicamente y API pública que alimenta el ecosistema de tools de Genshin Impact."
quickTake: "Si quieres compartir tus builds públicamente o investigar las de otros jugadores, Enka es la plataforma estándar. También es infraestructura crítica que alimenta a Akasha y otras tools."
---

## Qué es

Enka.Network es una plataforma web que permite ver públicamente los personajes en showcase de cualquier jugador de Genshin Impact mediante su UID. Más allá de su uso directo, Enka funciona como infraestructura del ecosistema: su API pública es la fuente de datos que tools como Akasha System usan para sus rankings comunitarios.

Es un proyecto open source, gratuito, y disponible en 14 idiomas incluyendo español nativo. Cubre también Honkai Star Rail y Zenless Zone Zero, posicionándose como tool multi-juego del ecosistema HoYoverse.

A diferencia de Akasha que se enfoca en rankings comparativos, o Genshin Optimizer que es para optimization personal, Enka cumple rol más específico: exposer builds publicly para sharing, comparison, y consumption por otras herramientas.

## Qué problema resuelve

Genshin Impact tiene un sistema de showcase in-game donde puedes mostrar hasta 8 personajes a otros jugadores que visiten tu perfil. Pero ese showcase tiene limitaciones:

Solo se ve cuando alguien efectivamente visita tu perfil dentro del juego.

No es shareable como link directo.

No persiste cuando estás offline.

Otros jugadores necesitan saber tu UID y agregarte como amigo (en algunos casos) para verlo.

No tiene formato útil para comparación o análisis.

Para casos como "quiero compartir mi build con un amigo via Discord", "quiero ver cómo está builded ese jugador top que vi en stream", o "quiero analytics de mi propia cuenta sin estar in-game", el showcase del juego se queda corto.

Enka.Network resuelve esto exponiendo los showcases via web pública. Cualquier jugador puede:

Compartir un link permanente a su showcase.

Ver el showcase de cualquier UID público sin estar in-game.

Investigar builds detalladas con stats calculados.

Comparar configuraciones entre cuentas.

Y de paso, alimenta el ecosistema de tools que necesitan acceso programático a esta data.

## Para qué la usa la gente

**Compartir builds en redes sociales**: el caso de uso más directo. Tienes una build optimizada de Hu Tao y quieres mostrarla en Twitter, Discord, o Reddit. Generas link de Enka y compartes URL que cualquiera puede abrir para ver tu setup completo.

**Investigar builds de jugadores tops**: viste un creator de YouTube con build espectacular de cierto personaje. Si su UID es público, puedes verlo en Enka y estudiar exactamente qué artefactos, weapons, y stats tiene.

**Verificar builds de amigos**: tu amigo dice que su Raiden pega 1 millón de daño. Le pides UID, lo consultas en Enka, y verifies si efectivamente tiene la build que claims tener.

**Backup público de tu progreso**: si quieres documentar visualmente tu progresión a través del tiempo, Enka funciona como timestamp visual de cómo está tu cuenta en momento específico.

**Showcase para community engagement**: muchas comunidades de Discord o Reddit comparten Enka profiles regularmente. Tener uno actualizado facilita engagement con otros jugadores.

**Investigación de meta**: viendo builds de muchos jugadores tops, identificas patrones: qué weapons predominan, qué stats objetivo apuntan, qué team comps usan. Esto complementa lo que tools como Akasha hacen automáticamente.

**Como base para otras tools**: cuando subes tu cuenta a Akasha System, los datos vienen de Enka.Network. Cuando alguna nueva tool community-built necesita data de cuentas, también usa Enka. Es infraestructura.

## El rol único de Enka.Network en el ecosistema

Es importante entender que Enka tiene función dual:

**Para usuarios**: plataforma de showcase web pública para compartir y ver builds.

**Para desarrolladores**: API pública que sirve data estructurada de cuentas a otras herramientas.

Akasha System, por ejemplo, no tiene su propia infraestructura para extraer data de cuentas. Lo que hace es consultar la API de Enka.Network para los UIDs registrados, procesar esa data, y generar sus rankings. Sin Enka.Network, Akasha no existiría.

Esto significa que muchas tools del ecosistema dependen de Enka funcionando correctamente. Es similar al rol de PoEDB en el ecosistema de PoE: no solo es tool útil directamente, también es referencia técnica que otras tools consumen.

Este aspecto puede no ser visible para el usuario final, pero es contexto importante: Enka es más fundamental al ecosistema de lo que parece a primera vista.

## Cómo se complementa con otras tools

Enka funciona bien en combinación con tools que ya tienes en el directorio:

**Con Akasha System**: registras tu UID en Enka, agregas Akasha al ecosystem, y Akasha automáticamente trackea tus builds para rankings.

**Con Genshin Optimizer**: aunque GO funciona con tu inventory privado, Enka sirve para "ver builds inspiradoras" de otros jugadores y replicarlas en tu propio GO.

**Con KQM**: cuando KQM publica builds recomendadas, ver implementaciones reales en Enka te permite ver cómo jugadores actuales aplican esas recomendaciones.

**Con Honey Hunter World**: Enka muestra los stats finales calculados, Honey muestra los datos primarios. Combinar ambas permite entender el "cómo se construye" cada stat.

## Limitaciones honestas

**Solo muestra personajes en showcase del juego**. Si tienes 50 personajes pero solo 8 están en showcase, Enka solo ve esos 8. Para cubrir más personajes, necesitas rotar quién pones en showcase.

**Requiere que tu profile sea público**. En settings del juego, debes habilitar visibilidad pública. Si tienes profile privado, no apareces en Enka.

**Latencia entre cambios in-game y Enka**. Cuando equipas nuevos artefactos o subes nivel, Enka puede tardar minutos a horas en reflejar los cambios. No es real-time.

**Solo data de showcase, no de inventory**. A diferencia de Genshin Optimizer que conoce tu inventory completo, Enka solo ve lo que está en showcase. Para análisis de inventory amplio, GO es necesaria.

**No tiene tools de optimization**. Enka solo expone data, no la analiza ni optimiza. Es plataforma de showcase y referencia, no calculator. Para análisis activo necesitas otras tools.

**Algunos personajes pueden tener data incompleta**. Personajes muy nuevos o con mecánicas específicas (como ciertas habilidades de constellations) pueden no estar perfectamente reflejados en Enka inicialmente.

**No incluye gameplay context**. Enka muestra que un jugador tiene cierta build pero no muestra cómo la juega, qué team uses, ni en qué contexto. Para entender ejecución necesitas video o stream.

**Profile linking puede ser confuso**. Crear tu propio profile en Enka requiere registrar UID y configurar settings. Algunos usuarios encuentran el setup inicial menos intuitivo de lo esperado.

## Cómo se usa en la práctica

Los flujos básicos:

**Para ver el profile de otro jugador**:

1. Vas a `enka.network` y ingresas el UID público.

2. Si el UID tiene showcase público, Enka muestra los personajes con builds completas.

3. Click en cada personaje muestra detalles: stats finales, artefactos exactos con substats, weapon, talents.

**Para crear tu propio profile**:

1. En el juego, configuras tu showcase con los personajes que quieres mostrar (8 slots).

2. En settings, habilitas visibilidad pública.

3. Vas a Enka.Network e ingresas tu UID.

4. Enka extrae tu showcase automáticamente.

5. La URL de tu profile (`enka.network/u/[uid]`) se vuelve link permanente compartible.

**Para uso recurrente**:

Bookmarkear tu propio profile y los profiles de jugadores que sigues.

Cada vez que actualizas builds in-game, Enka refleja cambios automáticamente (con latencia).

Compartir links de Enka es ideal para Discord, Reddit, Twitter — cualquier plataforma donde quieras mostrar builds.

## Cómo empezar

No requiere instalación, registro, ni cuenta. Vas a `enka.network` desde cualquier navegador.

Para tu primera vez, recomendación práctica: explora un par de UIDs antes de enfocarte en el tuyo. Algunos creators tienen UIDs públicos visibles en sus videos (ej: en streams). Investigar sus profiles te familiariza con el formato y te muestra qué información es visible.

Para crear tu propio profile:

1. En el juego, abre el menú de Paimon (ESC).

2. Ve a tu perfil de jugador.

3. Configura "Character Showcase" con los 8 personajes que quieres mostrar.

4. En "Edit Display" verifica que showcase esté visible públicamente.

5. Tu UID está en la esquina inferior derecha del menú de settings.

6. Ingresa el UID en Enka.

Para usuarios hispanos, Enka tiene interfaz traducida al español. Cambia idioma desde la esquina superior del sitio. La calidad de traducción es buena, no sentí "Google translate vibes" como en otras tools.

Para máximo provecho del ecosistema:

Enka como source público de tu cuenta.

Akasha System para ver tus rankings vs comunidad (usa data de Enka).

Genshin Optimizer para optimization personal de inventory.

KQM para entender qué objetivos perseguir.

Cada tool aporta perspectiva específica del ciclo completo de gestión de cuenta y optimization.