---
title: "SkyUI"
description: "Overhaul de la interfaz de Skyrim Special Edition con menús ordenables, filtrables y la Mod Configuration Menu (MCM) usada por cientos de mods."
quickTake: "Es el mod más instalado en Skyrim, y por buena razón. La interfaz vanilla es atroz; SkyUI la convierte en algo usable. Además, MCM es donde otros mods exponen sus opciones — sin SkyUI no puedes configurarlos."
---

## Qué es

SkyUI es un overhaul de interfaz creado originalmente por el SkyUI Team (schlangster, snakster, kratosaurion y otros) en 2012 para Skyrim LE, portado a Special Edition en 2017. Distribuido vía Nexus (`nexusmods.com/skyrimspecialedition/mods/12604`).

Reemplaza la interfaz de inventory, magic, barter, container y favorites con versiones que funcionan con teclado y mouse de manera nativa (la UI vanilla está diseñada para gamepad y es torpe en M&K). Agrega columnas ordenables, filtros, búsqueda y categorías.

Crucialmente, SkyUI incluye **MCM (Mod Configuration Menu)**, un framework que permite a otros mods exponer sus opciones in-game. Cientos de mods modernos lo usan.

## Qué problema resuelve

**Interfaz vanilla horrible para M&K**: el inventory de Skyrim base lista ítems en columna scrollable, sin sorting, sin filtros, sin búsqueda. Con 200 ítems en inventory, es ingobernable. SkyUI agrega columns (weight, value, type), sorting clickeable, filtros por categoría.

**Falta de UI para configurar mods**: muchos mods tienen settings (hotkeys, balance tweaks, feature toggles). Sin MCM, los mods tendrían que hardcode todo o pedirte editar archivos INI a mano. Con MCM, abres el menú pause → Mod Configuration → tu mod → configuras visualmente.

**Sin SkyUI, no hay MCM**. Esa es la dependency invisible. Decenas de mods anuncian "configurable via MCM" sin aclarar que necesitas SkyUI primero.

## Diferenciación

Frente a **interfaz vanilla**: SkyUI es estrictamente superior para M&K. Para gamepad puro, vanilla puede sentirse más natural, pero hay variantes de SkyUI con preset gamepad.

Frente a **DUI / Untarnished UI / otros UI overhauls modernos**: hay alternativas, pero SkyUI es el estándar de facto. La mayoría de mods asume SkyUI presente. Cambiarlo significa perder MCM compatibility.

Frente a **SkyUI VR**: SkyUI VR es la versión para Skyrim VR. Mismo concepto pero optimizado para controllers VR.

## Para qué la usa la gente

**Inventory usable**: el use case fundacional. Inventory ordenable, búsqueda, filtros, columns. Esto solo justifica el mod.

**MCM como plataforma**: para mods con muchas opciones (ej: Frostfall, iNeed, Wildcat), MCM es donde el usuario configura el comportamiento.

**Sort por columna**: ordenar por value/weight para identificar qué vender, qué tirar, qué guardar.

**Búsqueda fuzzy**: typear parte del nombre para encontrar un ítem específico entre 300 en tu stash.

**Barter mejorado**: cuando comercias con NPCs, el barter screen tiene la misma estructura — sorting, filtros, ratios.

## Para quién NO es esta herramienta

Si juegas Skyrim solo con gamepad y la vanilla UI te resulta cómoda, SkyUI no es indispensable — pero sigues necesitándolo para MCM si tienes otros mods.

Si juegas Skyrim en consola (PlayStation/Xbox/Switch), SkyUI no está disponible. Los Bethesda.net Creations tienen alternativas más simples pero limitadas.

Si tu modlist es vanilla puro sin otros mods que dependen de MCM, técnicamente podrías saltearlo — pero esa modlist es rara.

## Cómo se usa en la práctica

1. Asegúrate que tienes SKSE64 instalado (SkyUI lo requiere).
2. Baja SkyUI desde Nexus (`nexusmods.com/skyrimspecialedition/mods/12604`).
3. Instala vía MO2/Vortex con "Mod Manager Download".
4. Actívala.
5. Lanza Skyrim. Abre el inventory (Tab). Debería verse completamente distinto — columns, filters, sort options.
6. En el menú pause vas a ver una opción "Mod Configuration" — esa es MCM. Vacía si no tienes otros mods con MCM.

Una vez SkyUI está activo, cuando instalas un mod con MCM, sus opciones aparecen automáticamente en ese menú.

## Limitaciones honestas

**No es open-source**. SkyUI no publicó su source. Esto limitó las posibilidades de fork/iteration por la comunidad — algunos UI mods modernos buscan reemplazarlo pero ninguno tiene la misma adopción.

**Mantenimiento esporádico**. El equipo original es menos activo. Las versions recientes son bugfixes; no hay roadmap de nuevas features.

**Conflicts con otros UI mods**. SkyUI sobrescribe muchos componentes. Mods como "TrueHUD" o "Dear Diary" pueden requerir patches específicos para coexistir.

**MCM puede ser lento con muchos mods**. Si tienes 30 mods con MCM, abrir el menú puede tomar varios segundos.

**Diseño visual de 2012**. Funcional pero no estéticamente moderno. Hay "skin packs" para SkyUI que mejoran el visual sin tocar la funcionalidad.

## Cómo empezar

1. Instala SKSE64 y Address Library primero.
2. Baja SkyUI desde Nexus.
3. Instala vía mod manager.
4. Actívala.
5. Lanza Skyrim (con `skse64_loader.exe`).
6. Verifica: abrir inventory → debería verse con columns. Pause → debería existir "Mod Configuration".
7. Cuando instales mods con MCM (la mayoría modernos), sus settings aparecerán automáticamente.

Es uno de los mods que recomendamos instalar inmediatamente después de SKSE y Address Library. Sin SkyUI, modear Skyrim en serio es impráctico.
