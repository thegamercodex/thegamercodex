---
title: "TradeSkillMaster"
description: "Suite completa de auction house management y goldmaking para WoW. Combina addon in-game, desktop app obligatoria (TSM4+) y sitio web. Existe desde 2010 y es la herramienta de referencia para players que tratan al AH como negocio."
quickTake: "Si goldmakeas en serio, TSM es la única opción que escala. La curva es empinada y la dependencia de la desktop app desde TSM4 fue controversial. Pero el ROI de la setup inicial es enorme: pasar de 'vender items random a precio random' a 'operar un negocio en el AH' es el cambio que TSM habilita."
---

## Qué es

TradeSkillMaster (tradeskillmaster.com) es el ecosystem más completo para auction house management y goldmaking en WoW. Existe desde 2010 y evolucionó de un addon simple a una suite con tres componentes interdependientes:

1. **TSM Addon (in-game)**: vive en el cliente de WoW, integra con la auction house UI, y agrega features de operations bulk (post múltiples items a la vez, cancelar/reposting automático, sniper/dealfinder, accounting).

2. **TSM Desktop App (Windows/macOS, obligatoria desde TSM4)**: corre fuera del juego, escanea precios via API de Blizzard, y sube data al addon in-game. Sin la app, los precios in-game no se actualizan.

3. **Sitio web (tradeskillmaster.com)**: dashboard online, accounting históricamente, gestión de cuenta, descarga del addon y app.

La setup completa requiere los tres. La desktop app es el punto de fricción: en TSM3 era opcional, en TSM4+ es obligatoria. Esa decisión generó pushback significant en la comunidad — algunos players abandonaron TSM en protesta — pero el equipo lo justificó como tradeoff necesario para mantener data accurate y reducir overhead in-game.

## Qué problema resuelve

Para un player casual que vende sus drops de raid en el AH, la auction interface de WoW es suficiente. Listas un item, eliges precio, listo.

Pero para goldmaking serio (vender hundreds de items per week, craft profitable, sniper deals, market manipulation), la auction interface por defecto es prohibitively limited. Sin tools, haces:

- Re-list manual cada 2 horas porque los items expiran.
- Calcular precio razonable mirando otros listings uno por uno.
- Manejar accounting (cuánto te costó craftear vs cuánto vendiste) en spreadsheet aparte.
- Decidir qué craftear sin data agregada de mercado.

TSM resuelve cada uno: post groups con strings de precio dynamic ("market value × 1.1"), cancel/repost automático, accounting integrado, alerts de deals (sniper), y comparison cross-realm si juegas en multiple servers.

Para players que tratan al AH como negocio (gold ≥1M/semana es threshold típico), TSM es la diferencia entre "vendo cosas" y "opero un negocio".

## Para qué la usa la gente

**Posting bulk de crafted goods**: si craftáis 50 items por semana para vender, TSM grupea por categoría y postea con strings de precio dynamic.

**Cancel/repost automático**: cuando alguien postea más barato que tú, TSM detecta y cancela tus listings (para que no se vendan a precio sub-óptimo). Después repostea con precio competitive. Tú no haces nada manual.

**Sniper / Dealfinder**: TSM escanea AH constantemente (via desktop app data) y alerta cuando aparece deal: items posteados muy debajo de market value. Permite arbitrage profitable.

**Crafting decisions**: TSM compara cost de materials vs sell price para tu spec de profession. Si profit es positivo, crafteas. Si es negativo, no. Critical para crafters serios.

**Accounting histórico**: tracking de gold earned/spent por categoría, item, periodo. Útil para optimizar estrategia y detect items que ya no son rentables.

**Cross-realm goldmaking**: si tienes chars en multiple servers, TSM puede aggregar accounting y compare markets entre realms.

**Sourcing de mats**: para crafters, TSM puede shopping-list automáticamente los materials needed para crafts profitable.

## Para quién NO es esta herramienta

- **Players casuales que solo venden drops de raid ocasionalmente**: la setup overhead no compensa el volume. Auction House default es suficiente.
- **Players sensitive a "obligatory" desktop apps**: la dependence de TSM Desktop App desde TSM4 es controvertida. Si te molesta filosóficamente, no hay alternativa real para TSM.
- **Players de Classic / SoD que prefieren legacy approach**: TSM cubre ambos pero algunos goldmakers de Classic prefieren tools más sencillas o approach manual.
- **Players sin tiempo para learn the curve**: TSM es advanced. Aprenderlo bien requiere horas de leyendo guides + experimentation. No vale para uso casual.

## Cómo se usa en la práctica

**Setup inicial (requerido pre-uso)**:

1. Creas cuenta en [tradeskillmaster.com](https://tradeskillmaster.com).

2. Descargas **TSM Desktop App** (Windows/macOS).

3. Descargas **TSM Addon** via CurseForge o Wago.

4. Logueas en la app desktop con tu cuenta. Configuras qué realms scanear.

5. La app baja data y la sube al addon in-game.

6. In-game, abres AH y ves data de TSM (market value por item, profit estimado).

**Uso recurrente**:

1. Antes de session de goldmaking, abres TSM Desktop App. Haces un manual scan o esperas scan automático.

2. In-game, abres AH con TSM addon active.

3. Para postear: TSM groups con strings de precio (e.g., `100% market`). Click "Post" — postea bulk.

4. Para cancel/repost: TSM detecta undercutting automatic. Click "Cancel" then "Post" si quieres mantener competitive.

5. Para sniper: dejas TSM scanning en background. Cuando aparece deal alerts.

6. Post-session: revisas accounting in-game o web para ver profit del día.

## Limitaciones honestas

**Curve empinada**: TSM tiene UI compleja, conceptos custom (groups, operations, custom price strings), y workflow específico. Aprender lo basico toma 5-10 horas; advanced uses requieren weeks de practice. No es plug-and-play.

**Dependencia obligatoria de Desktop App**: post-TSM4, sin la app, los precios no se actualizan. Para players que prefieren in-game-only solutions, no hay workaround. Eso fue (y sigue siendo) controversial.

**Premium upsell**: tier free es funcional pero el Premium ($5/mes o $50/año) agrega features importantes: backup automático de configurations, scan más frecuente, restore history. Para serious goldmakers, Premium tiende a ser worth it.

**Performance overhead**: TSM addon es addon "heavy" — consume RAM y CPU notable. Si tu PC es marginal, puede causar frame drops in-game. La Desktop App también tiene footprint.

**Lock-in**: una vez que tienes todo configurado en TSM (groups, operations, accounting), migrar a otra tool sería volver a empezar desde cero. No hay export universal.

**Cobertura de Classic / SoD desigual**: aunque cubren ambos, algunos features están menos pulidos en versiones legacy.

**Accounting depende de scan frequency**: si la Desktop App no escanea regularmente, prices se desactualizan. Esto puede llevar a decisions on stale data.

**Subido de aprendizaje**: la documentación oficial es densa. La community (Reddit, Discord) tiene guías más accesibles, pero verdaderamente entender TSM requiere invertir time intencional.

## Cómo empezar

1. Si goldmakeas casualmente y no necesitas escala, considera si realmente necesitas TSM. Para vender 5 items por sesión, default UI alcanza.

2. Si decides adoptar TSM:
   - Crea cuenta en [tradeskillmaster.com](https://tradeskillmaster.com).
   - Descarga Desktop App + Addon.
   - Logueá, configurá realms, deja que escane primer scan.

3. Para learning curve: lee guías oficiales en el site, mira videos de YouTube sobre TSM4 setup (Studen Albatroz, JMTC, ProtCowSham son creators conocidos en goldmaking).

4. Empieza simple: 1-2 groups con basic operations (post + cancel/repost). Cuando dominas eso, expandí a sniper, accounting tracking, crafting decisions.

5. Si después de 2-3 sesiones encuentras que TSM no compensa el overhead (lo cual es razonable para muchos casos), no es failure — es señal de que tu workflow no requiere TSM en este momento. Hay tiempo para retomar después.
