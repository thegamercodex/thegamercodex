---
title: "Akasha System"
description: "Sistema de leaderboards y rankings de daño basados en data real de jugadores top en Spiral Abyss de Genshin Impact."
quickTake: "Si quieres saber cómo se compara tu build con la de jugadores top, Akasha es la única fuente con data real de la comunidad. Para jugadores avanzados que ya optimizaron lo básico."
---

## Qué es

Akasha System es una plataforma web que extrae y agrega data de personajes de jugadores reales de Genshin Impact, generando leaderboards de daño y rankings comparativos. A diferencia de tools como Genshin Optimizer que calculan daño teórico, Akasha muestra el daño que jugadores reales están consiguiendo con sus builds, basándose en runs verificados de Spiral Abyss.

Es un proyecto open source mantenido por Daniel y contribuyentes comunitarios. Disponible solo en inglés actualmente. La interfaz refleja su naturaleza técnica: tablas densas de números, filtros avanzados, y comparaciones detalladas entre builds.

A pesar del dominio `.cv` (Cabo Verde) que puede generar dudas, es un proyecto legítimo y reconocido por theorycrafters y la comunidad endgame de Genshin. El código abierto permite verificar exactamente cómo se calcula y agrega la data.

## Qué problema resuelve

Genshin Impact es un juego single-player sin sistema de PvP ni rankings oficiales. Pero los jugadores quieren saber cómo se comparan: ¿mi Hu Tao está bien optimizada o estoy lejos del techo? ¿Qué tan difícil es realmente alcanzar 1 millón de daño en burst? ¿Mi Raiden está performing como debería para su build?

Sin data comunitaria, estas preguntas se responden con guess work. Las guías te dicen qué stats apuntar, los calculadores te dicen el daño teórico óptimo, pero ninguno te dice "este es el daño que efectivamente está consiguiendo gente con builds similares a la tuya".

Akasha resuelve esto agregando data real. Cuando subes tu personaje a Akasha (vía tu UID público), tu build se compara contra miles de otras builds del mismo personaje. Te dice exactamente en qué percentil estás, qué jugadores están más arriba, y qué hacen diferente.

## Para qué la usa la gente

**Verificar si tu build está cerca del techo**: el caso de uso más directo. Subes tu personaje a Akasha y ves si tu daño está al nivel del top 10%, top 25%, o lejos. Si estás lejos, identificas qué mejorar.

**Estudiar builds top para inspiración**: cuando los rankings muestran builds que están consiguiendo daño excepcional, puedes ver exactamente qué artefactos, qué weapon, qué constellation, qué stats objetivo tienen. Útil para refinar tu propia build.

**Identificar patrones en builds optimal**: los stats agregados muestran tendencias. Por ejemplo: "el 80% de los top Hu Tao usa Crimson Witch + Wanderer's Troupe", o "el crit ratio promedio en top builds es 1:2". Esa información estadística complementa las recomendaciones cualitativas de KQM.

**Comparar tu performance con metas realistas**: en lugar de comparar con el cálculo teórico óptimo (que requiere artefactos perfectos imposibles), puedes comparar con "lo que efectivamente se consigue jugando", que es más realista y motivador.

**Investigar viabilidad de personajes nicho**: para personajes menos populares, ver cuántos jugadores los están usando en endgame y con qué success te dice si vale la pena invertir en él. Si nadie en Akasha tiene un Yanfei viable, hay razones para pensarlo.

**Validar combinaciones de team comp experimentales**: si quieres probar un team comp poco convencional, Akasha te muestra si alguien ya lo está haciendo funcionar y con qué builds.

## La diferencia con Genshin Optimizer

Es importante entender que Akasha y Genshin Optimizer son complementarios, no competitivos:

**Genshin Optimizer**: te muestra el daño teórico óptimo de TU inventory. Trabaja con tus artefactos reales y calcula matemáticamente qué combinación maximiza el resultado. Es "qué puedo conseguir con lo que tengo".

**Akasha System**: te muestra el daño real que están consiguiendo jugadores reales. Trabaja con data agregada de la comunidad. Es "qué se está consiguiendo allá afuera".

Las dos juntas dan el panorama completo: GO te muestra tu techo personal, Akasha te muestra el techo realista de la comunidad. Si tu GO dice que tu Hu Tao puede pegar 800k de burst y Akasha muestra que tops están haciendo 1.2M, sabes que necesitas mejor inventory antes que mejor optimization.

## Para quién NO es esta herramienta

Akasha System es claramente para audiencia avanzada. Si estás empezando con Genshin o no has terminado de optimizar tus personajes principales, Akasha probablemente te va a frustrar más que ayudar. Razones:

**Los rankings asumen builds ya pulidas**. Las builds top tienen artefactos pristine con stats casi perfectos. Comparar tu personaje en construcción contra esos rankings es frustrante e improductivo.

**No te explica el "por qué" detrás de las builds top**. Akasha muestra qué tienen los tops, pero no te dice cómo llegaron ahí ni si esa build es replicable para ti. Para entender el "por qué" necesitas guías de KQM.

**La perspectiva puede crear FOMO improductivo**. Ver builds que pegan 1.5M cuando la tuya pega 600k puede generar frustración cuando la diferencia se debe principalmente a artefactos perfeccionados con cientos de horas de farming, no a optimization que tú puedas hacer.

La recomendación honesta: úsala cuando ya hayas hecho lo básico (KQM + Genshin Optimizer + farming consistente). Akasha es la cereza, no el pan.

## Cómo se usa en la práctica

Para subir tu propia data a Akasha, necesitas:

1. Habilitar tu showcase de personajes en el juego (configuración pública).

2. Ingresar tu UID en Akasha System.

3. Akasha extrae los personajes que tienes en showcase y los procesa.

4. En unos minutos puedes ver tus rankings y comparaciones.

Una vez tu data está procesada, el flujo típico es:

**Para verificar tu build**:

1. Buscas tu personaje en Akasha.

2. Ves dónde se sitúa tu build en el leaderboard general.

3. Comparas con builds en percentiles específicos (top 10%, top 25%) para ver gaps.

4. Identificas qué stats están más bajos en tu build vs builds top.

5. Vuelves a Genshin Optimizer para ver si puedes mejorar con tu inventory actual.

**Para investigar builds inspiradoras**:

1. Buscas el personaje que quieres mejorar.

2. Ordenas por daño descendente.

3. Click en builds top te muestra el setup completo (artefactos exactos, weapon, talent levels, constellations).

4. Identificas patrones: ¿qué set predominan? ¿qué weapons? ¿qué stats objetivo?

5. Ajustas tus objetivos en KQM y Genshin Optimizer accordingly.

## Limitaciones honestas

**Solo está en inglés**. La interfaz y los nombres de personajes están en inglés. Para usuarios hispanos puede haber barrera, especialmente porque términos técnicos abundan.

**Sesgo hacia builds whale**. Como muchos jugadores top tienen acceso a artefactos y weapons que F2P no tienen, los rankings reflejan eso. Builds verdaderamente F2P pueden no aparecer en top 10% por razones de inversión, no de optimization.

**Solo muestra personajes en showcase**. Akasha solo puede ver los personajes que tengas en tu showcase público del juego (8 slots máximo). Si quieres trackear más, tienes que rotar.

**Data de Spiral Abyss específico puede ser limitada**. Mientras los rankings de daño son extensos, datos sobre clears específicos de Abyss (qué teams clearearon, en qué tiempo) pueden tener cobertura más limitada.

**No incluye personajes muy nuevos completamente**. Cuando sale un personaje nuevo, toman semanas en aparecer rankings significativos en Akasha porque la comunidad necesita tiempo para tener builds optimizadas.

**El sistema de UID puede dar problemas ocasionalmente**. Cambios de privacy de HoYoverse o issues con el showcase del juego pueden hacer que tu data no se actualice por períodos.

**Comparaciones pueden ser injustas sin contexto**. Un Hu Tao C0 con weapon F2P contra un Hu Tao C2 con weapon signature van a tener daño completamente distinto. Los filters ayudan pero no eliminan completamente este factor.

## Cómo empezar

No requiere instalación. Vas a `akasha.cv` desde cualquier navegador.

Para tu primera vez, recomendación: explora primero los leaderboards de un personaje que conozcas bien antes de subir tu propia data. Esto te familiariza con el formato y te da contexto antes de ver tus propios rankings.

Cuando estés listo para subir tu data:

1. En el juego, configura tu showcase con los personajes que quieres rankear (8 slots).

2. Asegúrate de que tu perfil sea público en settings.

3. Encuentra tu UID en el juego (esquina inferior derecha del menú de settings).

4. Ingresa el UID en Akasha y espera procesamiento.

5. Una vez procesado, recibes tus rankings y puedes explorar.

Para sacar máximo provecho, complementa Akasha con el resto del ecosistema:

KQM te dice qué objetivos perseguir.

Honey Impact te da los datos primarios del juego.

Genshin Optimizer optimiza tu inventory específico.

Akasha te muestra dónde estás vs la comunidad.

Cada tool aporta una perspectiva única, juntas cubren todo el ciclo de optimization.