---
title: "Advanced Combat Tracker"
description: "Parser desktop para Windows que captura el log de combate de FFXIV en tiempo real, muestra overlays de DPS/HPS y triggers customizables, y sube logs a FFLogs."
quickTake: "ACT es la piedra angular del ecosistema de parsing de FFXIV: sin él no hay logs en FFLogs ni overlays in-game. Su setup es notoriamente intimidante para nuevos usuarios, pero una vez configurado vive en background y no toca más. Windows only y no oficialmente tolerado por Square Enix."
---

## Qué es

ACT (Advanced Combat Tracker) es un parser desktop para Windows desarrollado por EQAditu, originalmente para EverQuest y luego adaptado a múltiples MMOs vía plugins. Para FFXIV usa el plugin **FFXIV_ACT_Plugin** (de Ravahn), que parsea el tráfico de red del cliente para extraer eventos de combate.

ACT en sí es un framework. La funcionalidad útil viene de plugins:

- **FFXIV_ACT_Plugin**: el parser de red — sin esto no captura nada.
- **FFLogs Uploader**: sube los logs automáticamente.
- **OverlayPlugin**: motor para overlays in-game (DPS meter en pantalla durante el combate).
- **Hojoring / Hojoring.RaidcoachPlugin**: triggers de sonido y texto para mecánicas.
- **TriggernometryPlugin**: motor avanzado de triggers customizables.

Es free, closed-source para ACT base. El FFXIV plugin tampoco es open source. La mayoría de overlays sí lo son.

## Qué problema resuelve

Square Enix no provee un parser oficial, métricas de combate ni log files exportables. Para análisis post-combate o feedback durante el pull, ACT es la única opción real.

Los problemas concretos que ataca:

- **Overlays en pantalla**: ver tu DPS en vivo, el HPS del healer, daño tomado, sin alt-tab.
- **Capture para FFLogs**: sin ACT no hay log subible a FFLogs.
- **Triggers de mecánicas**: alertas de sonido cuando aparece tu name en un cast (ej: "te toca soakear")
- **Métricas de party**: comparar tu DPS vs el resto in-real-time.

Sin ACT, optimizar performance es a ciegas. Con ACT, tienes data inmediata.

## Diferenciación vs XIVLauncher / Dalamud

- **ACT**: parser que vive afuera del cliente, escuchando el tráfico de red. Funciona aún si juegas con el launcher oficial.
- **XIVLauncher + Dalamud**: launcher alternativo con plugins que se inyectan en el cliente. Algunos plugins replican funciones de ACT (DPS meter, triggers) pero corren in-process.

En la práctica muchos raiders usan ambos: XIVLauncher para QoL y plugins generales, ACT para logs y FFLogs upload. Las funciones se solapan en parts, pero el ecosistema de ACT alrededor de FFLogs sigue siendo el estándar.

## Para qué la usa la gente

**Subir logs a FFLogs**: el flujo principal. Sin ACT no hay upload, sin upload no hay parse rankings.

**DPS overlay durante raid**: el M+1, healer y DPS revisando el daño en tiempo real para identificar si alguien está bajo de tempo.

**Triggers personalizados**: el tank usa Triggernometry para que le suene una alarma específica cuando aparece su name en cierto cast de raidwide AoE.

**Mecánicas de Savage / Ultimate**: callouts auto-generados ("te toca tower nordeste") via plugins como Cactbot.

**Análisis post-pull sin abrir FFLogs**: el log queda en disco; puedes re-analizarlo en ACT sin subirlo si quieres.

## Para quién NO es esta herramienta

- **Mac / Linux users**: ACT es Windows native. Funciona en Wine pero es frágil. La mayoría usa una VM Windows o un segundo PC.
- **Casual players sin raid**: si solo haces MSQ o roulettes, ACT es overkill. Solo agrega complejidad sin beneficio claro.
- **Quienes temen el ban**: Square Enix oficialmente no tolera ACT — está prohibido en el TOS. En la práctica nunca banean por usarlo (millones de usuarios) pero técnicamente sí violás el TOS. Hay zonas (PvP, alguna que otra alianza) donde no se debe usar overlays visibles.
- **Setup-averse**: la configuración inicial requiere tocar firewall, allowlist de antivirus (algunos AV flaggean ACT), permisos de red. Si te pone nervioso, considerá si vale el esfuerzo.

## Cómo se usa en la práctica

1. Descargá ACT desde advancedcombattracker.com.

2. Corré como administrador (necesario para el parser de red).

3. En el menú **Options → Plugins**, instala el **FFXIV ACT Plugin** (link en la doc oficial). Configurá la región (NA/EU/JP) y procesa los archivos del cliente.

4. Instalá el **FFLogs Uploader** y conectá tu cuenta.

5. Opcional: instala **OverlayPlugin** para overlays en pantalla.

6. Abrí FFXIV, entrá a un encuentro y ACT debería empezar a capturar (vas a ver eventos en el log de ACT).

7. Post-pull: el FFLogs Uploader te avisa que se subió y te da el link.

## Limitaciones honestas

**Solo Windows nativo**: macOS y Linux requieren Wine/CrossOver con setup específico. Frágil ante updates del juego.

**TOS violation técnica**: SE no permite ACT formalmente. Nadie ha sido baneado solamente por usarlo en uso normal, pero técnicamente exponés tu cuenta. No usar en PvP nunca.

**Setup intimidante**: el primer setup puede llevar 30-60 minutos. Errores comunes: firewall block, AV false positive, plugin desactualizado post-patch del juego.

**Vulnerable a patches**: cuando sale un parche de FFXIV, el FFXIV plugin típicamente requiere update. A veces lleva 1-3 días estar listo.

**Plugins desincronizados**: con tantos plugins (DPS overlay, triggers, raidcoach, etc.) es fácil tener uno desactualizado que crashea ACT. Mantener el ecosistema requiere disciplina.

**UI clásica de Windows**: ACT se ve como una app de Windows XP. Funciona, no es bonito.

## Cómo empezar

1. Descargá ACT (advancedcombattracker.com) — versión .NET 4.7+ requerida.

2. Seguí la guía oficial de setup del FFXIV plugin paso a paso. No saltees pasos del firewall y AV.

3. Configurá FFLogs Uploader con tu API key (la generás en fflogs.com).

4. Probá en un encuentro test (ej: trial roulette). Verificá que el log se captura y se sube.

5. Una vez funcionando, agregás overlays y triggers según tu rol. Empezá simple: solo DPS overlay primero.

6. Para mecánicas avanzadas (Savage / Ultimate triggers), considerá **Cactbot** (plugin separado) que viene con triggers pre-armados de la comunidad.

7. Tras updates del juego, primero updateá el FFXIV plugin antes de jugar Savage — si el parser está roto, no se generan logs.
