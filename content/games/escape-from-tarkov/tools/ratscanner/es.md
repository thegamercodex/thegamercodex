---
title: RatScanner
description: Overlay open-source que escanea items en raid con OCR y te muestra precio del flea y stats sin salir del juego.
quickTake: "RatScanner es el overlay killer feature para Tarkov: apunta a un item, presiona la hotkey, y el precio aparece encima del juego sin Alt-Tab. Para flippers y looters de high-value, ahorra segundos críticos que te salvan extracts."
---

## Qué es

RatScanner es una aplicación Windows open-source mantenida en github.com/RatScanner/RatScanner. Corre como overlay externa (sin tocar archivos del juego) y usa OCR para identificar items cuando apuntas con el cursor o presionas hotkey. Muestra precio del flea actual, valor por slot y stats clave. Licencia GPL-3.0, releases regulares (la última versión 3.9.2 es de diciembre 2025), 611+ stars.

## Qué problema resuelve

En Tarkov no puedes saber el precio de un item sin Alt-Tab a tarkov.dev o tarkov-market. Cuando estás en raid bajo presión y descubrís un container con loot mixto, decidir qué meter en el rig requiere conocer valor por slot rápido. RatScanner resuelve eso mostrándote el precio directo arriba del item.

## Diferenciación

Frente a tarkov-market y tarkov.dev (sites externos que requieren Alt-Tab), RatScanner trae la info al juego. Frente a otros overlays que tocan archivos del juego (potential ban risk), RatScanner es externo y solo lee pixels — Battlestate no lo prohibió hasta el momento. Es la única tool de su categoría con presencia consolidada.

## Para qué la usa la gente

- **Identificar loot in-raid** sin pausar para Alt-Tab cuando los segundos importan.
- **Decidir qué meter al rig** comparando valor por slot de varios items contendientes.
- **Verificar precios meta en flea** mientras tradeas o vendes desde el menú.
- **Scan rápido de stash** para inventariar valor total sin click por item.

## Para quién NO es esta herramienta

Si juegas solo en PvE relajado y no te importa el time-to-loot, puedes vivir con tarkov-market en pestaña. Si tu setup es Mac o Linux (sin SPT), RatScanner no corre — es Windows-only. Y si te incomoda usar tools que leen el screen del juego (aunque no toquen archivos), absteneste.

## Cómo se usa en la práctica

1. Descarga el release más reciente de github.com/RatScanner/RatScanner/releases.
2. Extrae y ejecuta RatScanner.exe (puede pedir permisos de administrador).
3. Configura hotkey de scan (default suele ser Ctrl+Click sobre el item).
4. Apuntá al item in-raid y presioná la hotkey — el precio aparece como tooltip.
5. Ajustá fuentes de precio (tarkov-market / tarkov.dev) desde settings.

## Limitaciones honestas

- **Windows-only**: no hay versión Mac/Linux nativa.
- **OCR no es perfecto**: items con nombres parecidos pueden confundirse; verifica en casos críticos.
- **Battlestate no lo endorsed**: tolerado pero técnicamente uso de tools de terceros es contra ToS. Bajo riesgo histórico, pero existe.
- **Performance overhead**: como cualquier overlay, consume RAM/CPU. En máquinas low-spec puede impactar FPS.

## Cómo empezar

Visita github.com/RatScanner/RatScanner. Descarga el release Windows más reciente. Sigue el setup de hotkey en el README. La comunidad de issues en GitHub es activa para soporte.
