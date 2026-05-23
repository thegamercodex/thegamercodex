---
title: Palworld Save Pal
description: Editor de saves desktop open-source con UI amigable, soporte completo para Steam y Game Pass, y editing de Player inventory además de Pals.
quickTake: La opción casual del editor de saves. UI más pulida que Pal Editor, soporte Game Pass más maduro y permite editar el inventario del player además de Pals. Si solo juegas solo y quieres modificar saves locales, esta gana.
---

## Qué es

Palworld Save Pal es un editor de saves open-source para Windows mantenido por oMaN-Rod. Es una app desktop pura (no Docker, no WebUI separada) con foco en UX amigable. Soporta tanto Steam como Xbox Game Pass save formats, y además de Pals te deja editar el inventario del player, stats personales y unlocks de tecnología. Free, MIT license.

## Qué problema resuelve

Mismo dominio que Palworld Pal Editor: arreglar Pals corruptos, experimentar con builds, recovery post-update. La diferencia es enfoque: Save Pal está pensado para el usuario que quiere abrir el app, editar algo, cerrar y volver al juego, sin configurar Docker ni aprender CLI.

## Diferenciación

Frente a Palworld Pal Editor:
- **UX desktop más pulida**: workflow más rápido para edits casuales.
- **Soporte Game Pass maduro** (Pal Editor lo soporta pero con caveats; Save Pal funciona out of the box).
- **Editing de inventario del player**: items, recursos, weapons en hotbar.
- **Steam y Gamepass support**: detecta y carga ambos formatos.

Pal Editor gana en:
- **Setups remotos/Docker**: si tienes server dedicado, Save Pal no aplica.
- **Viewing Cage unlock**: feature exclusiva.
- **Scriptabilidad CLI**.

## Para qué la usa la gente

- **Edits rápidos casuales**: cambiar passive de un Pal, agregar level, fix de stats raros.
- **Recovery de bugs**: arreglar Pals que el juego dejó en estado inválido.
- **Modificar inventario**: agregar materiales raros, items consumibles.
- **Probar builds endgame sin grinding**.
- **Migración entre saves**: exportar Pals específicos.

## Para quién NO es esta herramienta

Si juegas multiplayer en server dedicado y quieres editar saves remotos: usa Pal Editor con Docker. Save Pal requiere acceso local al archivo.

Si quieres el Viewing Cage en multi: solo Pal Editor lo permite.

## Cómo se usa en la práctica

1. Bajas la última release desde GitHub.
2. Ejecutás `palworld-save-pal.exe` (Windows).
3. La app auto-detecta saves de Steam (`%LOCALAPPDATA%/Pal/Saved/SaveGames/`) y Game Pass.
4. Seleccionas el world a editar.
5. UI con tabs: Players, Pals, Inventory, Unlocks.
6. Editas visualmente y guardas. **Backup automático del save original** antes del primer guardar.

## Limitaciones honestas

- **Solo Windows**: sin builds para Mac/Linux.
- **Sin Docker/WebUI**: si quieres remoto, usa Pal Editor.
- **No tiene CLI**: workflow completo es GUI.
- **Patches grandes pueden romper compatibility**: como cualquier save editor, hay lag tras updates. Mirar issues abiertos antes de usar tras un patch grande.
- **Sin Viewing Cage unlock**.

## Cómo empezar

Bajar desde GitHub releases. Ejecutar. Auto-detecta tu save (Steam y/o Game Pass). Hacer backup manual del save folder antes de tocar nada (la app hace uno automático pero un segundo backup no duele). Empezar con un edit chico (cambiar nickname de un Pal por ejemplo) para confirmar que el flow funciona antes de hacer cambios grandes.
