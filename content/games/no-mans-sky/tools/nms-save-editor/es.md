---
title: "NMS Save Editor (goatfungus)"
description: "Save editor clásico de NMS escrito en Java por Brendon Matthews ('goatfungus'), open source bajo MIT y activo desde 2018. UI sencilla con tabs para inventario, ships, multi-tools, freighter, exocraft y stats."
quickTake: "Es la opción veterana. Si NomNom te parece overkill o jugás simple en una sola partida, el editor de goatfungus es directo y confiable. Para perfiles con múltiples saves o si querés UX más pulida, NomNom escala mejor. Ambos son legítimos; depende de tu workflow."
---

## Qué es

NMS Save Editor (también conocido como "goatfungus' editor" para distinguirlo de otros) es la herramienta de edición de saves de No Man's Sky más veterana del ecosistema. Lo escribió Brendon Matthews ("goatfungus" en GitHub) en Java en 2018 y lo mantiene desde entonces. Vive en github.com/goatfungus/NMSSaveEditor con licencia MIT y libera releases versionadas en sync aproximado con cada patch grande de NMS.

Funciona en cualquier OS con Java 11+ (Windows, macOS, Linux), maneja saves de Steam y de plataformas que dejen el formato JSON en disco. Es completamente gratis sin ads ni paywall.

## Qué problema resuelve

Mismo problema que cualquier save editor: te deja modificar campos del save sin tener que parsear el JSON manualmente. La diferencia con NomNom es de UX y filosofía — goatfungus prioriza simplicidad sobre features extensas.

Para muchos players, eso es exactamente lo que quieren: abrir, hacer un cambio puntual (dar units a un personaje stuck, mover un item, restore inventory tras un bug), guardar, cerrar. Sin tabs decorativas, sin previews fancy, sin características que no van a usar.

## Diferenciación

Frente a **NomNom**: NomNom es más nuevo, tiene UI más visual, mejor manejo multi-save, backup automático, y release cadence ligeramente más rápida. goatfungus es más simple, lleva más años de battle-testing, y tiene una base de usuarios estable que lo conoce de memoria. Ambos cubren los mismos campos esenciales con calidad similar. La elección es de UX.

Si vas a editar un save una vez por mes para un fix, goatfungus es suficiente y rápido. Si manejás varios personajes o querés UI más dinámica, NomNom es mejor.

## Para qué la usa la gente

**Quick fixes**: bug ate tu inventario y querés restaurarlo en cinco minutos. Abrís goatfungus, agregás los items, guardás.

**Restauración tras crash o corrupción**: si NMS se rompió con un patch, podés restaurar campos críticos (unit count, ship status) sin re-rolear.

**Tweaks de inventory**: ajustar slots de exo-suit, ship o multi-tool, agregar tech específica, modificar stack sizes.

**Cheats simples**: agregar units, nanites, quicksilver. Para sandbox personal.

**Backup pre-mod**: workflow estándar — backup antes de instalar mods experimentales.

## Para quién NO es esta herramienta

Si querés UX moderna con previews y tabs ricas, NomNom es preferible. goatfungus es funcional pero austero.

Si tenés muchos perfiles y querés navegar entre ellos rápido, NomNom maneja mejor el flujo. goatfungus carga uno a la vez con ceremonia.

Si jugás Permadeath/Survival manteniendo challenge intacta, no es para vos (igual que cualquier save editor).

Si tu OS no soporta Java o no querés instalarlo, goatfungus te obliga a tener Java runtime. NomNom es C# nativo y no tiene esa dependencia.

## Cómo se usa en la práctica

1. Vas a github.com/goatfungus/NMSSaveEditor/releases y bajás el JAR de la última release (typical filename: `NMSSaveEditor.jar`).
2. Asegurate de tener Java 11+ instalado (`java -version` para verificar).
3. Doble click al JAR o ejecutá `java -jar NMSSaveEditor.jar` desde terminal.
4. Apuntás al archivo de save (Open → seleccionás el save_X.hg de la carpeta de NMS).
5. Tabs: Inventory, Multi-tools, Ships, Exocraft, Freighter, Frigates, Bases, Stats. Editás lo que querés.
6. File → Save. El editor sobrescribe el save.
7. Importante: hacé backup manual ANTES de la primera edición. goatfungus hace copia automática menos agresivamente que NomNom.

## Limitaciones honestas

**Java dependency**. Necesitás Java instalado, lo cual algunos usuarios prefieren evitar. NomNom no tiene este requisito.

**UI espartana**. Funcional pero datada. No hay previews visuales de items, los listados son text-heavy.

**Backup menos agresivo**. goatfungus hace copia, pero no con la robustez automática de NomNom. Hacé tu propio backup manual antes de cualquier cambio.

**Lag tras patches**. Mismo issue que NomNom — patches grandes pueden requerir release nuevo. goatfungus históricamente saca updates relativamente rápido pero no instantáneo.

**Single maintainer**. goatfungus es el dev principal; pausa = lag. Hay forks comunitarios pero no oficiales que cubran gaps.

**No maneja saves de consola directamente**. Saves de PS5/Xbox/Switch requieren extracción a PC primero.

**Sin tabs de bases avanzadas**. NomNom expone más detalle de bases construidas. Si tu use case es manipular bases, NomNom es mejor.

## Cómo empezar

Vas a github.com/goatfungus/NMSSaveEditor y leés el README — explica setup de Java y compatibility con la version actual de NMS.

Bajás el JAR más reciente. Si no tenés Java, instalás OpenJDK 17+ (gratis, oficial).

Hacés backup manual de tu carpeta de saves de NMS antes de tocar nada. Copiá todo `%APPDATA%\HelloGames\NMS\` (o equivalente) a otro lugar.

Abrís el JAR, cargás un save de prueba (modo creative o un perfil viejo), tocás algo trivial (agregar 100k units), guardás, cargás el save en NMS y verificás que el cambio se aplicó.

Una vez que confirmás que el flujo funciona, podés operar sobre saves productivos con confianza.
