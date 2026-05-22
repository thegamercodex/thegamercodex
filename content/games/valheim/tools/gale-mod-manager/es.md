---
title: "Gale Mod Manager"
description: "Mod manager open-source para Thunderstore construido con Svelte y Tauri. Apunta a velocidad de apertura y un UI más limpio que las alternativas existentes."
quickTake: "Gale es el upstart que reta a r2modman: arranca más rápido, ocupa menos RAM y tiene una UI mejor diseñada. Si tu PC es modesta o te molesta el lag de Electron, vale la pena probarlo."
---

## Qué es

Gale es un mod manager open-source (GPL-3.0) creado por Kesomannen. Habla el mismo protocolo que r2modman (Thunderstore) y soporta los mismos 150+ juegos, pero está construido sobre Tauri en lugar de Electron — el resultado es un instalador que pesa ~15MB en vez de ~150MB y un cliente que arranca en menos de un segundo.

Es relativamente joven (primeras releases públicas en 2024) pero la comunidad lo adopta cada vez más, sobre todo entre quienes tenían fricción con r2modman por performance o UI cluttering.

## Qué problema resuelve

r2modman es funcional pero pesado: Electron + Vue, ~200MB de RAM en idle, ~10s para abrir un profile grande. Para alguien con una PC de gama media o que abre el manager seguido, eso se nota.

Gale ataca específicamente esos puntos:
- **Bundle chico** (Tauri compila a binario nativo) — instalador ~15MB.
- **RAM baja** — ~50MB con un profile cargado, vs ~200MB de r2modman.
- **UI más rápida** — animaciones suaves, búsqueda instantánea, scroll fluido en catálogos de 500+ mods.
- **Importa profiles de r2modman directamente** — la migración es un click.

## Diferenciación

Frente a **r2modman**: Gale es más rápido y más nuevo. r2modman tiene más años de uso real, resuelve casos extremos de dependencias mejor (cuando un mod tiene metadata rota o conflictos versionales viejos), y tiene una comunidad de usuarios más grande para troubleshoot. Para arrancar, ambos hacen lo mismo; para casos raros, r2modman tiene más mileage.

Frente a **Thunderstore Mod Manager (Overwolf)**: Gale es OSS, sin tracking, sin requerir Overwolf account ni overlay. Su perfil de usuario es el opuesto a TMM.

Frente a **instalación manual**: lo mismo que r2modman — no compite, lo reemplaza con creces.

## Para qué la usa la gente

**PC modesta** — laptops con 8GB RAM o procesadores viejos donde r2modman lagguea: Gale arranca rápido y no calienta el CPU.

**Múltiples juegos de Thunderstore** — quien modea Valheim + Lethal Company + REPO + Risk of Rain 2 abre Gale como hub central. La pestaña de juegos es más limpia que en r2modman.

**Workflows de exportar/importar** — el formato de profile de Gale es interoperable con r2modman (lo lee y lo escribe), lo que facilita compartir modlists entre amigos que usan managers distintos.

**Tema oscuro decente** — la UI de Gale tiene un dark mode pulido, mientras r2modman se ve mismatched.

**Beta testing de mods** — Gale soporta versiones beta de Thunderstore con un toggle, útil cuando un mod publica preview de breaking changes y quieres probar antes que el resto.

## Para quién NO es esta herramienta

Si ya usas r2modman y no tienes problemas: no hay urgencia de cambiar. Ambos resuelven el mismo problema; Gale es marginalmente mejor en performance pero no transforma el flujo.

Si modeas juegos fuera de Thunderstore (Skyrim, etc.): igual que r2modman, no aplica.

Si dependes de plugins de manager o features avanzadas que r2modman acumuló en años: Gale es más joven, su ecosistema de tools alrededor es más chico (menos guías, menos troubleshooting compartido en Reddit).

## Cómo se usa en la práctica

1. Descarga Gale desde su página de Thunderstore o desde GitHub releases (`github.com/Kesomannen/gale/releases`).
2. Instala — el installer es chico y rápido en cualquier OS.
3. Al primer lanzamiento, selecciona "Valheim" de la lista de juegos.
4. Si ya tienes profiles de r2modman, "Import from r2modman" los trae directo. Si arrancas de cero, "Create new profile".
5. En "Browse" busca mods por nombre, categoría o tag. Click para instalar.
6. "Launch modded" inyecta BepInEx + mods y abre el juego.
7. Para gestionar profiles, "Profiles" tab — duplicar, exportar, importar, todo desde el sidebar.

## Limitaciones honestas

**Más joven que r2modman**. Si rompe con un mod específico o un edge case de dependencias, la documentación es más fina. r2modman tiene 5+ años de issues resueltos en GitHub; Gale tiene 2.

**Ecosistema de extensiones más chico**. r2modman tiene plugins community para cosas como nightmare-mode profile management. Gale no.

**Updates más frecuentes** — al ser activo en desarrollo, recibe releases seguido. Bueno para fixes; molesto si quieres un manager que no toques en meses.

**Documentación oficial corta**. El wiki es básico; mucho del soporte vive en el Discord de Thunderstore.

## Cómo empezar

1. Anda a `thunderstore.io/c/valheim/p/Kesomannen/GaleModManager/` o GitHub releases.
2. Descarga el installer (Windows .exe, Linux .AppImage, macOS .dmg).
3. Abre Gale, selecciona "Valheim".
4. Si vienes de r2modman, click "Import profiles" en settings.
5. Si arrancas de cero, "New profile" → nombra "Survival QoL" → instala BepInExPack + Jotunn + 2-3 mods de QoL.
6. Click "Launch modded".

Si necesitas soporte, el Discord de Thunderstore (`discord.gg/thunderstore`) tiene canal dedicado para Gale.
