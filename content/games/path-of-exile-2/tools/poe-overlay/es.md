---
title: "POE Overlay"
description: "Overlay in-game para Path of Exile y Path of Exile 2 que muestra precios estimados, historial de mercado y servicios de carry sin alt-tabbear."
quickTake: "Más de un millón de usuarios y cinco años de mantenimiento activo no son accidente: POE Overlay hace lo que necesitas en el momento exacto en que lo necesitas — pasas hover sobre un item, hotkey, y ya estás viendo precio. El trade-off es que es closed source y depende de Overwolf si quieres updates automáticos."
---

## Qué es

POE Overlay es un overlay in-game que se sobrepone al cliente de Path of Exile (versión clásica) y Path of Exile 2 (versión "POE Overlay II") para mostrar información de mercado, hotkeys de price check, y un browser integrado de servicios como carry de bosses, trials, y leveling.

Lleva más de cinco años mantenido activamente y declara más de un millón de usuarios. Funciona en Windows. La instalación tiene dos variantes: vía Overwolf (recibe updates automáticos) o standalone (sin Overwolf, gestionas updates a mano).

No está afiliado con Grinding Gear Games — eso aparece explícito en su sitio.

## Qué problema resuelve

Pricing a mano en PoE 2 es un workflow de 6 clicks: copiar item, abrir browser, abrir trade oficial, pegar mods, ajustar filtros, scrollear listings. POE Overlay lo reduce a hover + hotkey: ves un precio estimado en segundos sin alt-tabbear.

Adicionalmente, integra historial de 7 días para detectar si un item está subiendo o bajando, y permite browsear servicios de carry directo desde dentro del juego — útil para boss kills puntuales o trials de Ascendancy.

## Diferenciación

Frente a Awakened PoE Trade y exiled-exchange-2 (alternativas open source): POE Overlay tiene más features pulidas (servicios browser, historial 7d) pero es closed source y depende de su propio backend. Si te importa transparencia de código y poder forkear, las alternativas open source son mejores. Si te importa "que funcione bien y se actualice solo", POE Overlay gana en convenience.

Frente a Sidekick: Sidekick es minimalista, open source, y multi-OS. POE Overlay es más feature-rich pero solo Windows.

## Para qué la usa la gente

**Price check rápido durante mapping**: hover sobre rare/unique, hotkey, sigues jugando. Decisiones de loot en segundos en vez de minutos.

**Verificación antes de listar**: subes el item a tu stash tab listada y antes de poner precio comparas con la sugerencia del overlay. Evita underpricing.

**Browseo de servicios sin salir del juego**: cuando necesitas un boss carry o un trial run, lanzas el browser integrado y contactas un seller sin romper la sesión.

**Tracking de currency y volumen**: para builds que requieren currency específica, ver volumen de listings ayuda a decidir si comprar batches.

**Historial 7d para timing**: para items con precio fluctuante, el chart de 7d ayuda a decidir si vender ahora o esperar.

## Para quién NO es esta herramienta

Si estás en Linux o macOS, POE Overlay no es para ti — solo Windows. Las alternativas open source funcionan en Linux vía Wine o nativamente.

Si te incomoda software closed source en tu sistema, mejor las alternativas auditables.

Si juegas SSF, no hay trade que monitorear — el overlay no aporta.

Si solo abres el juego ocasionalmente, instalar Overwolf por unas horas a la semana es overkill. Para uso casual, las alternativas standalone son más livianas.

## Cómo se usa en la práctica

1. Descargas desde `poeoverlay.com`. Eliges Overwolf (recomendado para updates auto) o standalone.
2. Instalas siguiendo el wizard. Overwolf instala su runtime; standalone es directo.
3. Abres PoE 2. POE Overlay se inyecta como overlay sobre el cliente.
4. Configuras hotkeys (default: Ctrl+D para price check, otros configurables).
5. In-game, hover sobre un item + hotkey → aparece overlay con precio estimado.
6. Para servicios: hotkey específico para abrir el browser integrado.

## Limitaciones honestas

**Closed source**. No puedes auditar el código ni forkear. Para algunos usuarios eso es deal-breaker; para otros, irrelevante.

**Solo Windows**. Linux y macOS quedan fuera. Las alternativas open source cubren esos sistemas.

**Dependencia de Overwolf** (modo recomendado). Overwolf es runtime tercero con sus propios recursos y telemetry. Si instalas standalone, evitas Overwolf pero pierdes updates automáticos.

**Trabaja sobre el API público de GGG**. Si GGG cambia rate-limits o estructura del trade, hay lag hasta que el equipo updatea.

**Donation-funded, no commitment formal**. El proyecto se mantiene con donaciones (~938 donors mencionados). No hay contrato de servicio — si el equipo pausa el desarrollo, no hay alternativa contractual.

**El "free" tiene asterisco indirecto**. Es free de usar, pero el modelo Overwolf inyecta posibles ads dentro de su propia interfaz (no del overlay PoE en sí). Si eso te molesta, instala standalone.

## Cómo empezar

Vas a `poeoverlay.com`. Eliges PoE Overlay II (PoE 2) o PoE Overlay clásico según el juego. Recomendado vía Overwolf para no perderte updates. Después de instalar, abres PoE 2 y configuras hotkeys básicos.

La curva de aprendizaje es chata: si ya usaste Awakened PoE Trade o cualquier overlay similar, el flow es prácticamente idéntico. La primera sesión usas solo el price check con hotkey; las features avanzadas (services, market history) las descubres con el tiempo.
