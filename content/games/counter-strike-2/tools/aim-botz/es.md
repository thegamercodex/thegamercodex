---
title: "Aim Botz"
description: "Workshop map clásico de Counter-Strike (CS:GO y ahora CS2) creado por uLetsPlay para entrenar aim. Arena con bots configurables, infinite ammo y métricas básicas. La herramienta de warmup más usada del ecosistema."
quickTake: "El warmup map más universal de CS. Si juegas CS2 en serio y no usas Aim Botz al menos 5-10 minutos antes de matchmaking, estás dejando rendimiento en la mesa por ninguna razón. Es free, instala en 30 segundos."
---

## Qué es

Aim Botz es un mapa de Steam Workshop para Counter-Strike 2 (originalmente para CS:GO) creado por **uLetsPlay** alrededor de 2014. Su función es simple y específica: una arena rectangular grande con bots que aparecen como targets configurables, infinite ammo de la armas que elijas, y métricas básicas como kill counter y timer.

Es technically un map del cliente (no una web app, no un servicio), por eso clasifica como `software` en este codex. Se subscribe via Steam Workshop y se carga como cualquier otro mapa offline.

Su popularidad es enorme: más de 100M de subscriptores históricos en Workshop, mencionado en routines de prácticamente cualquier pro player como warmup tool. Migró de CS:GO a CS2 manteniendo prácticamente la misma funcionalidad.

## Qué problema resuelve

Aim en FPS competitivo requiere mantenimiento muscular constante. Si juegas directo de iniciar el juego, los primeros 1-2 rounds son típicamente subóptimos — tu reaction time, spray control y flick precision necesitan calentar.

Las soluciones tradicionales son:
1. **Jugar Deathmatch oficial**: efectivo pero con friction (queue, spawns aleatorios, mapas largos).
2. **Bot match**: muy lento, muchos downtime.
3. **Aim trainers externos** (Aim Lab, Kovaak's): tienen valor pero sienten "diferentes" porque usan otro engine y otra física.

Aim Botz resuelve eso siendo: misma engine que CS2 (= mismo feel exacto), customizable (configuras distancia, número de bots, movement), zero downtime (target dies → otro spawnea inmediatamente), y free.

Para 5-10 minutos de warmup pre-match, no hay opción más eficiente.

## Para qué la usa la gente

**Warmup pre-match**: caso de uso central. 5-10 minutos antes de matchmaking calientas click responsivo, spray AK/M4, flicks con AWP.

**Practice de spray patterns**: con bots estáticos a distancia media, puedes practicar AK/M4 spray sin presión de duelo real.

**Reaction time training**: configurar bots que aparecen aleatoriamente y responder con first-shot accuracy.

**Sensitivity tuning**: cuando ajustas DPI/sens, Aim Botz es donde verificas si el cambio se siente bien antes de testearlo en partida real.

**Routine consistency**: muchos players hacen el mismo set de drills cada día (ej: 100 kills con AK estática + 50 con USP + 50 con AWP) — Aim Botz facilita esa structure.

## Para quién NO es esta herramienta

Aim Botz es excelente para warmup y aim drills pero no es:

- **Sustituto de aim training profesional dedicado** → Kovaak's o Aim Lab tienen scenarios más sofisticados, métricas avanzadas y comparativas vs base masiva. Aim Botz es minimalista.
- **Entrenamiento de movement, utility o positioning** → solo aim. Para movement, hay maps específicos (Yprac series); para utility, maps de practice; para positioning, demos.
- **Para players que prefieren aim trainers fuera del juego** → algunos prefieren separar aim training del cliente CS por razones de variedad o tracking. Aim Botz vive dentro del cliente CS2.
- **Para análisis profundo de tu progress en aim** → métricas son básicas. Para tracking serio, complementar con scenarios de Kovaak's o stats de Leetify.

## Cómo se usa en la práctica

1. Tener CS2 instalado.

2. Vas al link de Workshop (`steamcommunity.com/sharedfiles/filedetails/?id=243702660`), click **Subscribe**.

3. En CS2, **Play → Workshop maps → Aim Botz** (puede demorar unos segundos en aparecer).

4. Loadeás el mapa. Apareces en una zona con menú de configuración: número de bots (1-50), distancia, movement (estáticos / strafe), armor, weapons enabled.

5. Configuras según routine (ej: 16 bots estáticos a 25m con AK only) y clickeas **Start**.

6. Matar bots con métricas en pantalla: kill count, time elapsed, kill/sec.

7. Para reset rápido: comando `mp_warmup_end` o el bind del mapa.

## Limitaciones honestas

**Métricas son básicas**: kill count y timer, nada más. Sin tracking de progreso, sin comparativas con avg, sin scenarios. Para deep analytics → otros aim trainers.

**Bots no replican comportamiento humano**: pueden moverse pero su pattern es predecible. No simulan decision-making real ni economic awareness. Para situational practice, deathmatch o Faceit DM son superiores.

**Solo aim, nada más**: no entrena utility, no entrena positioning macro, no entrena game sense. Es uno de varios tools en una routine completa, no la routine completa.

**Setup inicial requiere ser navegado**: la interfaz del mapa tiene menos polish que aim trainers dedicados. Primera sesión hay que jugar con configs hasta encontrar lo cómodo.

**Workshop maps pueden tardar en cargar la primera vez**: subscribe → load puede tomar 1-2 minutos la primera vez. Después es instantáneo.

**No hay native macOS support**: CS2 oficialmente removió macOS support en 2023. Aim Botz funciona donde funciona CS2, lo cual hoy es Windows y Linux.

## Cómo empezar

1. Ir a `steamcommunity.com/sharedfiles/filedetails/?id=243702660` y **Subscribe**.

2. Abrir CS2 → **Play → Workshop maps → Aim Botz**. Loadear.

3. Para warmup mínimo viable: 16 bots estáticos a 30m, AK-47 only, 100 kills. Toma ~3-5 minutos.

4. Construir routine progresiva:
   - Días 1-7: solo aim básico (16 bots estáticos AK, 100 kills).
   - Después: agregar variantes (bots con movement, distancia variable, mix de armas).
   - A semana 4: rutina diaria de 10-15 minutos pre-match.

5. Para máxima eficacia, combinar con:
   - Deathmatch oficial post-Aim Botz para context real.
   - Tracking de stats vía Leetify para verificar si la mejora se traduce a partidas reales.

6. No obsesionarse con Aim Botz como única tool. Aim es importante pero plateau real en CS viene de utility, comms y game sense — no solo aim.
