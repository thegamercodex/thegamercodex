---
title: "Wago.io"
description: "Plataforma de sharing y gestión de WeakAuras y addons para WoW. Originalmente focalizada exclusivamente en WeakAuras (su fuerte histórico), expandió a addons completos. UX moderna sin requirement de suite externa, considered alternativa cleaner a CurseForge."
quickTake: "Wago se ganó su lugar como respuesta directa al deterioro UX de CurseForge post-Overwolf. Para WeakAuras es la opción default — mejor browsing, sharing más limpio, import codes con tracking de versions. Para addons general el catálogo es más chico que CurseForge pero crece. Privacy y UX-friendly."
---

## Qué es

Wago.io (wago.io) es una plataforma comunitaria de sharing y management de addons para WoW, lanzada inicialmente como repositorio dedicated a WeakAuras (de ahí el subdomain wago.io = "WeakAura GO"). Con el tiempo, expandió cobertura a addons completos via la **Wago App**, su gestor desktop de addons.

WeakAuras es uno de los addons más críticos del meta de WoW: permite a players crear displays custom para trackear cooldowns, debuffs, mecánicas, procs, y prácticamente cualquier cosa visible del game state. Pero los WeakAuras se shared via import codes (texto encoded), y mantener track de versions, updates, y community improvements requiere infrastructure dedicada.

Wago hizo eso desde 2019: cada WeakAura tiene una página propia con import code, version history, comentarios, screenshots, y links a creators. Si un author actualiza su aura, los users con el companion app reciben notificación automática.

Post-2020 (cuando CurseForge fue adquirido por Overwolf y la UX deterioró), Wago lanzó Wago App para gestión de addons general, posicionándose como alternativa privacy-friendly y UX-friendly. La adopción crece — especialmente entre power users — pero CurseForge sigue dominante por catálogo amplio.

Wago es independent (no parte de Overwolf, Tencent, ni grupo corporativo grande) y tiene su propio modelo de monetización via subscriptions opcionales y donaciones.

## Qué problema resuelve

Para **WeakAuras**, el problema que Wago resolvió desde el principio era: cómo compartir auras complejos entre players, mantener versions, y notify users de updates. Antes de Wago, los WAs se shared en pastebins, posts de Reddit, y mensajes de Discord — sin tracking, sin versioning, sin updates automáticos. Wago centralizó eso en interface dedicada.

Para **addons general** (post-2020), el problema es el deterioro UX de CurseForge: ads, telemetría de Overwolf, requirement de instalar suite. Wago App responde con experiencia más limpia: solo un addon manager, sin overlay, sin telemetría agresiva, sin upsell continuo. Para players sensitive a esa fricción, Wago es alternativa práctica.

Adicionalmente Wago provee **Companion**, un addon que vive in-game y trackea WeakAuras de Wago. Cuando un creator publica update, el companion notifica y permite update con un click — sin tener que copiar import code nuevamente.

## La diferencia con CurseForge

Mismo objetivo (repository de addons), valores opuestos:

- **CurseForge**: catálogo más amplio (incluyendo addons históricos rare), tier-1 cobertura de todas las versiones de WoW, app via Overwolf con suite ecosystem. Más addons, peor UX, más telemetry.
- **Wago.io**: catálogo más chico pero curado, app standalone sin suite, UX más limpia. Mejor para WeakAuras específicamente. Crecimiento de cobertura general progressivo.

Para player nuevo o casual: empezar con CurseForge por catálogo. Para player que prioriza privacy / clean UX: empezar con Wago. Many active players use both — Wago para WeakAuras (su strength) y CurseForge para addons not-yet-on-Wago.

## Para qué la usa la gente

**Browse y descargar WeakAuras**: el caso más fuerte. Tu spec, tu encounter, tu need específico — Wago tiene biblioteca extensiva de WAs creadas por community con browse por tags y popularity.

**Gestión de auras updated**: el companion in-game notifica updates y permite re-import con un click. Mejora dramáticamente vs. recopiar manual cada vez.

**Sharing de tus propias creaciones**: si creas un WA para tu spec, puedes publicarlo en Wago, otros lo encuentran y usan. Tracking de stats (downloads, stars).

**Wago App para addon manager**: si quieres alternativa a CurseForge App, descargas Wago App. Detecta WoW install, instalas addons, auto-updates background. Más liviano que Overwolf suite.

**Sub addons como Plater profiles**: muchos addons que tienen "profiles" o "configuraciones" comparables a WAs (Plater nameplates, Method Dungeon Tools notes) están adopting Wago para sharing. La filosofía de "import code + companion" se generalizó.

**Browse trending por current tier**: lo nuevo y popular de la temporada actual está front-and-center en home. Útil para descubrir setups nuevos cuando salen patches.

## Para quién NO es esta herramienta

- **Players que necesitan addon raro o legacy**: si buscas un addon histórico que no está en Wago, CurseForge probablemente lo tenga.
- **Players sin necesidad de WeakAuras**: si tu setup no usa WAs (ej: SoD casual, leveling), Wago aporta menos valor.
- **Players que ya están bien con CurseForge App**: si la fricción de Overwolf no te molesta, no hay urgencia de migrar. Las dos pueden coexistir sin problema.
- **Hardcore minimalists que evitan toda app**: ambas (CurseForge App, Wago App) instalan algo. Para approach 100% manual, descargar de github upstream + extract es la opción.

## Cómo se usa en la práctica

**Para WeakAuras**:

1. Abres [wago.io](https://wago.io).

2. Browse por **WeakAuras → [tu clase] → [tu spec]** o search por nombre / encounter.

3. En la página del WA: copias el import code.

4. In-game: `/wa` → New → Import → pegas code. El WA aparece configurado.

5. (Opcional) Instalas **Companion** addon. Te notifica cuando el WA se actualiza, y permite re-import sin recopiar.

**Para addons via Wago App**:

1. Descargas [Wago App](https://addons.wago.io/) (Windows/macOS).

2. La app detecta tu install. Browseas addons en interfaz limpia.

3. Click "Install". Auto-updates background.

**Para publicar tus propios WAs**:

1. Creas cuenta en wago.io.

2. In-game, exportas tu WA como string.

3. En Wago: New Import → pegas → escribes description, tags, screenshots.

4. Publicas. Otros pueden encontrarlo y darle stars / comments.

## Limitaciones honestas

**Catálogo más limitado que CurseForge**: aunque la cobertura crece, hay addons que solo están en CurseForge. Para necesidades exotic, tienes que cruzar.

**Algunos addons en Wago son re-uploads / mirrors**: la línea entre original developer y community uploader no siempre es clara. Para tracking del autor canónico, github links del addon son fuente más confiable.

**WeakAura quality varía**: la community publica todo tipo de auras — algunos son obras maestras, otros son setups personales que no escalan. Filtrar por stars/downloads ayuda.

**Companion addon recommended pero opcional**: si no instalas companion, el flujo de updates no se streamlinea. Re-import manual cada vez no es horrible pero el UX deteriora.

**Premium / Patreon push moderado**: el sitio tiene tier Premium para creators (analytics, monetization tools) y Patreon. Para users casuales no afecta, pero el push is present.

**Wago App más nueva**: comparada con CurseForge App con años de maturity, Wago App tiene menos features y compatibility ocasional con casos edge.

**No reemplaza CurseForge para todo**: para users con necesidades complejas (legacy addons, beta channels específicos), CurseForge App tiene más opciones avanzadas.

## Cómo empezar

1. Visitá [wago.io](https://wago.io) y browse WeakAuras de tu spec actual. Importa una o dos para ver el flujo.

2. Si tienes WAs popular instalados, instala **Companion** addon via [addons.wago.io/addons/wago-app](https://addons.wago.io/addons/wago-app) o desde CurseForge — agrega notification de updates.

3. Para addon manager: descarga Wago App si quieres alternativa a CurseForge / Overwolf.

4. Combiná con CurseForge cuando tu addon de necesidad no esté en Wago — no es exclusividad, son herramientas complementarias.

5. Si tú creas WAs, publicalos en Wago — community sharing es parte fundamental del ecosystem WoW addon.
