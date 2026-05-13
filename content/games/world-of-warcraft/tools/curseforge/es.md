---
title: "CurseForge"
description: "El repositorio histórico dominante de addons para WoW. Tiene la mayor catalogación, app desktop para auto-update y gestión, y mantiene la compatibilidad más amplia con WoW Retail, Classic, SoD y Hardcore. Propiedad de Overwolf desde 2020."
quickTake: "CurseForge es donde están los addons importantes — la mayoría de Discord posts y guías linkean acá. La adquisición por Overwolf en 2020 cambió la UX significativamente: ads, telemetría, y app requirement controvertida. Wago.io existe en parte como respuesta. Igual sigue siendo el primer stop por catálogo y compatibilidad."
---

## Qué es

CurseForge (curseforge.com/wow) es el repositorio histórico dominante de addons y mods para WoW. Su catálogo cubre essentially todo el ecosystem comunitario de addons: WeakAuras, DBM, Method Dungeon Tools, Plater, ElvUI, Recount/Skada, BigWigs, AdvancedInterfaceOptions, y miles de addons más nicho.

Originalmente parte de Curse Inc, fue adquirido por Twitch (que era propiedad de Amazon) en 2016 como parte de la integración del ecosistema gaming. En 2020, Twitch vendió el negocio de addons y mods a **Overwolf**, una empresa israelí especializada en software para gamers. Esa transición cambió drásticamente la experiencia del sitio y la app desktop.

El sitio web (browse + downloads) es free y funciona sin cuenta. La **app desktop** (Windows/macOS) es el mecanismo histórico de gestión de addons: instala, auto-update, configurar profiles. Es free de descargar pero requiere instalar la suite Overwolf, que viene con sus propias features de overlay y telemetría — y eso es la fricción principal que generó pushback comunitario.

## Qué problema resuelve

Los addons de WoW son archivos .lua que se descomprimen en una carpeta específica del cliente. Sin gestor, instalar uno requiere: descargar zip, extraer en `Interface/AddOns/`, recordar update manual cuando salga nueva versión, manejar dependencias entre addons. Para players con 30+ addons, eso es trabajo continuo.

Un addon manager soluciona todo lo anterior: descarga, instala, gestiona dependencias, auto-update, perfiles por personaje. Y un repositorio centralizado solucionaba además **discovery**: saber qué addons existen, leer reviews, ver downloads/popularidad.

CurseForge fue el primero en hacer ambas cosas bien y a escala. Por años, fue de facto la única opción seria. Eso cambió con el shift a Overwolf y la entrada de competidores como Wago. Hoy CurseForge sigue dominante por catálogo y momentum, pero ya no es la única opción.

## La diferencia con Wago.io

Ambas son repositorios de addons de WoW, con valores opuestos:

- **CurseForge**: catálogo más amplio (incluyendo addons históricos), tier-1 compatibility con todas las versiones de WoW, app desktop required para muchos addons via Overwolf. UX con ads y telemetría.
- **Wago.io**: alternativa moderna, focus original en WeakAuras, expandió a addons completos. UX más limpia, menos ads, sin requirement de instalar suite. Catálogo más chico pero curado.

Para player nuevo: CurseForge tiene cobertura más amplia, buscar cualquier addon casi seguro lo encuentra. Para player que prioriza UX limpia y privacy: Wago. Muchos players activos usan ambos según el addon — Wago para WeakAuras (su fuerte histórico), CurseForge para resto del catálogo.

## Para qué la usa la gente

**Buscar addons nuevos**: la home de CurseForge tiene categorías (Action Bars, Auction & Economy, Boss Encounters, etc.). Browse o search por nombre.

**Mantener addons updated**: la app desktop chequea updates automáticamente. Click en "Update All" cuando lo abres.

**Backup de configuración**: la app puede exportar profiles de addon configs para sync entre maquinas o re-install limpio.

**Beta versions**: muchos addons publican beta releases en CurseForge antes de estable. Útil para early access a fixes post-patch.

**Descubrir alternatives**: por cada addon popular suele haber alternatives o forks listados en la página.

## Para quién NO es esta herramienta

- **Players sensibles a ads/telemetría**: la app desktop de Overwolf es notoriamente intrusive en algunos sistemas. Si te molesta, manual install desde web o Wago son alternativas.
- **WeakAura specialists**: para WeakAuras, Wago tiene mejor UX de browsing y tracking de imports.
- **Players competitivos en ambientes con bandwidth limitado**: la app de Overwolf consume CPU/memory adicional que algunos players prefieren no pagar.
- **Hardcore minimalists**: algunos players prefieren manage addons manualmente para evitar cualquier suite. CurseForge web download permite eso, pero la experiencia es más lenta que con app.

## Cómo se usa en la práctica

**Para descubrir e instalar manualmente**:

1. Abres [curseforge.com/wow/addons](https://www.curseforge.com/wow/addons).

2. Browse por categoría o search por nombre.

3. En la página del addon: descargas el zip, extraes en `World of Warcraft/_retail_/Interface/AddOns/` (o `_classic_/`, etc. según versión).

4. Reiniciás WoW. El addon aparece en `/addons` en game.

**Para uso recurrente con app**:

1. Descargas la **CurseForge / Overwolf** app desktop.

2. La app detecta tu install de WoW. Le dices qué addons instalar.

3. Updates automáticos en background; click "Update All" cuando hay updates pendientes.

4. Para quitar un addon: uninstall desde la app, desaparece de la carpeta.

## Limitaciones honestas

**Adquisición Overwolf y cambio de UX**: post-2020, el sitio agregó significantly más ads, banners, redirects, y trackers. El tier free es funcional pero la experiencia se siente comercializada — cosa que pre-Overwolf el sitio no era. Para muchos players de WoW, esto fue motivo de migración a Wago.

**App desktop en partes obligatoria**: ciertos addons populares solo se distribuyen via la app de CurseForge/Overwolf, no via direct download web. Esto fue otro punto de fricción: forzar instalación de suite para acceder a addons.

**Privacy / telemetría**: la app de Overwolf recolecta datos de uso para analytics. La política de privacy es estándar pero más invasiva que un download manual simple.

**Performance overhead de Overwolf app**: varios users han reportado que la app consume RAM y CPU comparable a una app moderna heavy, no a un addon manager liviano. Ofende a players minimalists.

**Curse Premium upsell**: el sitio empuja Curse Premium ($3-5/mes) que remueve ads. Para uso casual no es necesario, pero el upsell es persistent.

**Ocasionalmente quita addons sin warning**: ha habido casos de addons removidos del catálogo por disputes de licencia o request de developer. Si tu workflow depende de un addon específico, considera download manual del github upstream cuando exista.

**Problemas de compatibilidad post-patch**: cuando sale un patch grande, addons rotos pueden seguir listados en CurseForge sin warning claro de incompatibilidad. Hay que verificar la fecha de última actualización antes de instalar.

## Cómo empezar

1. Visitá [curseforge.com/wow](https://www.curseforge.com/wow) y browseá addons populares: WeakAuras, DBM, Plater, Method Dungeon Tools, Details!.

2. Decidí: app desktop o manual download. Si vas a tener 10+ addons, la app vale la pena pesar de la fricción. Si vas a tener 2-3, manual download es más limpio.

3. Si eliges app: descarga [overwolf.com/curseforge](https://overwolf.com/app/curseforge), instala, y deja que detecte tu cliente de WoW.

4. Para WeakAuras específicamente, considera complementar con [wago.io](https://wago.io) — mejor experiencia de import codes y community sharing.

5. Como referencia editorial honesta: si no quieres la suite Overwolf, **Wago.io** + manual install desde GitHub directo son combinación válida para evitar CurseForge entirely. Pero a costa de catálogo limitado.
