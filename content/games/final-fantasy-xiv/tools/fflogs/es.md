---
title: "Final Fantasy Logs"
description: "Servicio web de logs de combate para FFXIV: subes tu log, ves rankings, comparas tu parse contra otros y desglosas la performance acción por acción. Operado por Warcraft Logs LLC, la misma empresa detrás de WCL."
quickTake: "FFLogs es el parser dominante de FFXIV sin discusión. Si raideas Savage o Ultimate y quieres mejorar, vas a vivir acá: revisás tu log post-pull, ves dónde perdiste DPS, y comparás contra el rank top de tu job. Es gratis para uso básico; Premium ($4/mes) desbloquea filtros avanzados que cualquier raider serio termina pagando."
---

## Qué es

FFLogs (fflogs.com) es el servicio web de logs de combate de FFXIV operado por Kihra y Warcraft Logs LLC, la misma empresa detrás de Warcraft Logs. Lanzado en 2017, se volvió rápidamente el estándar de la escena de raid de FFXIV: si juegas Savage o Ultimate y quieres comparar performance, FFLogs es donde se publica el dato.

El flujo: corrés ACT con el plugin de FFLogs, terminás un encuentro y se sube automáticamente; o subís un .log manualmente. El sistema parsea el combate y te da un breakdown completo:

- **DPS / HPS / DTPS** del encuentro y por jugador.
- **Ranking percentil** vs todos los logs del mismo encuentro/job en el mundo.
- **Análisis de buffs**: ¿alineaste tus burst windows con los party buffs?
- **Análisis de mecánicas**: ¿quién murió, quién falló qué telegraph?
- **Cast bar timeline**: cada GCD y oGCD que usaste, con timestamp.

Free tier cubre lo básico. **Premium ($4/mes o $40/año)** desbloquea filtros avanzados, search por player name cross-region, replays de fight, y comparación lado a lado.

## Qué problema resuelve

Sin FFLogs, evaluar tu performance en Savage es subjetivo: "siento que jugué bien" no es feedback útil. Las preguntas que importan son:

- ¿Mi DPS está alineado con lo que se espera de mi job en este boss?
- ¿Perdí buff windows? ¿En qué pulls me adelanté o atrasé un GCD crítico?
- ¿Estoy muriendo en mecánicas evitables, o el problema es el resto de la party?

FFLogs te da datos duros para responder. Comparás tu pull contra el percentil 95 del mismo job y ves exactamente dónde perdiste DPS: tal vez te falta un oGCD por minuto, o tu opener pierde 2 GCDs vs el optimal.

Para raid leaders, FFLogs es la herramienta de scout: antes de invitar a alguien a static, revisás sus logs. Para world race, FFLogs es donde se publican los kills y se mide el progreso de los top teams.

## Diferenciación vs XIVAnalysis y ACT

- **FFLogs**: el repositorio público de logs, con rankings y comparativas cross-server. Es el archivo histórico y el medidor competitivo.
- **XIVAnalysis**: analizador automático que toma tu log de FFLogs y te dice qué hiciste mal con sugerencias accionables ("usaste 12 Hypercharges, podrías haber usado 13").
- **ACT**: el cliente desktop que captura el combate en tiempo real, muestra overlays y sube los logs a FFLogs.

Los tres se usan en conjunto: ACT captura, FFLogs almacena, XIVAnalysis interpreta. FFLogs es el hub.

## Para qué la usa la gente

**Auditar tu propio progreso**: post-pull, abres tu log y miras dónde se fue el DPS. ¿Buff alignment? ¿Mecánicas que te forzaron a perder GCDs? ¿Rotación rota?

**Stalking de competencia**: en world race de Savage, revisás los logs de los top teams para entender sus strats y rotaciones específicas para ese boss.

**Filtrar para apply a static**: raid leaders piden "FFLogs link" antes de invitar. Tus parses orange/purple en el job que vas a jugar son tu CV.

**Validar theorycraft**: el job lead de The Balance prueba una nueva rotación; los top parses en FFLogs confirman o niegan si funciona en práctica.

**Coaching y mentoría**: el mentor revisa tu log con vos y señala los GCDs perdidos, los oGCDs misaligned, las decisiones subóptimas. Es feedback objetivo.

## Para quién NO es esta herramienta

- **Jugadores de MSQ y casuales**: si no raideas Savage/Ultimate, FFLogs no te aporta. El parse del Wanderer's Palace HM no tiene rank ni te enseña nada.
- **PvP-only**: FFLogs es PvE exclusivamente.
- **Crafters / gatherers**: combat parser, no aplica.
- **Gente alérgica a la cultura parse**: FFLogs creó (o amplificó) una cultura de "parse o nada" que algunos sienten tóxica. Si te genera ansiedad medir cada pull, considerá si lo necesitas.

## Cómo se usa en la práctica

1. Instalá **ACT (Advanced Combat Tracker)** y el **plugin FFLogs Uploader** desde el ecosistema de ACT.

2. Configurá ACT para capturar el log de FFXIV (network parser).

3. Hacé login en fflogs.com y conectá tu Lodestone character.

4. Entrá al encuentro (Savage / Ultimate / Extreme).

5. Al terminar el pull, ACT sube el log automáticamente. Tarda 30-60 segundos en aparecer en tu perfil.

6. Abrí el log en fflogs.com. La vista default es "Damage Done". Tabs adicionales: Healing, Damage Taken, Buffs, Cast Sequence, Events.

7. Compará tu parse: clickeás tu job en el ranking del fight y ves dónde estás vs el percentil 50, 75, 95, 99.

## Limitaciones honestas

**Cultura tóxica de parse**: la métrica obsesiva puede convertir el raiding en una cárcel de números. Reportes de gatekeeping y elitismo basados en parse son comunes. Decisión personal qué tanto te dejas afectar.

**Free tier limitado**: filtros avanzados (cross-region search, replay, comparación detallada) requieren Premium. Para uso casual el free es suficiente; para raid serio termina pagándose.

**Requiere ACT en Windows**: en macOS / Linux no hay solución oficial. Hay workarounds via Whisker/Wine pero son frágiles. Square Enix no tolera ACT formalmente, aunque lo permite en la práctica.

**No analiza healers a fondo**: las métricas de healer (HPS, mitigation timing) son menos maduras que las de DPS. El meta de healer optimization se discute más en The Balance que en FFLogs.

**Calidad del rank depende del job pool**: jobs con poca representación (Astrologian competitivo, Black Mage pre-rework) tienen rankings con muestra chica y rankings volátiles.

## Cómo empezar

1. Instalá ACT (advancedcombattracker.com) y el plugin FFLogs Uploader.

2. Creá cuenta en fflogs.com. Linkeá tu personaje del Lodestone.

3. Corré tu primer Savage / Extreme con ACT activo. Verificá que el log se sube.

4. Abrí el log y explorá la UI. La curva de aprendizaje es real — al principio los breakdowns parecen abrumadores.

5. Compará tu parse contra el percentil 50 de tu job. Identificá las 2-3 cosas más obvias para mejorar (oGCDs sin usar, buff windows perdidos).

6. Para análisis automatizado de tus logs sin tener que interpretarlos manualmente, pasalos por XIVAnalysis.

7. Premium se justifica una vez que estés raideando consistentemente y querás filtros avanzados o búsqueda cross-region.
