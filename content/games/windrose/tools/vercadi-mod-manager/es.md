---
title: "Vercadi Mod Manager"
description: "Mod manager open source para Windrose hosted en GitHub. Drag-and-drop de .zip y .7z, auto-detect del game path, backup pre-install, tracking de mods instalados para uninstall limpio. Foco en client y servidor local."
quickTake: "La alternativa transparente y FOSS al manager de CertiFried. Más simple y sin SFTP, pero auditable y libre. Si te molesta confiar en software closed-source para tu setup, esta es la opción."
---

## Qué es

Vercadi Mod Manager es un mod manager open source publicado en GitHub por Vercadi. Cubre el use case más común: instalar mods PAK en el cliente del juego y en archivos de servidor local (no remoto). Soporta drag-and-drop de .zip y .7z, auto-detecta paths del game install, backuper archivos antes de cada cambio, y trackea qué mods están instalados para permitir uninstall limpio.

## Qué problema resuelve

Mismo problema que Windrose Mod Manager de CertiFried: automatizar la instalación de PAK mods. La diferencia es el approach — Vercadi prioriza simplicidad y open source sobre features avanzadas. No incluye SFTP, no maneja dedicated server remoto, no edita configs JSON con UI guiada. Pero el código está abierto: si quieres auditar qué hace o forkearlo para tus necesidades, puedes.

## Diferenciación

- **CertiFried's manager**: closed source, features completas (incluye SFTP/server remoto).
- **Vercadi's manager**: open source en GitHub, scope reducido al common case (client + local server).
- **Manual install**: no manager, manual extract y move.
- La elección es: si confías en software closed source y quieres features completas, CertiFried; si prefieres transparency y solo necesitas client install, Vercadi.

## Para qué la usa la gente

- **Install mods en client sin tracking manual**: drop el .zip, manager hace el resto.
- **Edit `ServerDescription.json` y `WorldDescription.json`** safe via UI structured.
- **Backup pre-install**: rollback si un mod rompe el save.
- **Uninstall limpio**: el registry de instalaciones permite quitar mods sin dejar residual files.
- **Audit transparency**: leer el código en GitHub para entender exactamente qué hace.

## Para quién NO es esta herramienta

Si gestionas dedicated server remoto vía SFTP/FTP, Vercadi no soporta — necesitas CertiFried. Si juegas en Mac/Linux, no hay build cross-platform. Si quieres feature set avanzado (versiones de mods, dependency resolution), tampoco — el scope es deliberadamente reducido.

## Cómo se usa en la práctica

1. Entra al [repo de GitHub](https://github.com/Vercadi/windrose-mod-manager), descarga la última release del tab "Releases".
2. Instala la .exe, arranca la app. Auto-detecta el path de Windrose.
3. Arrastra el .zip/.7z del mod al app — extract y install automático en el target seleccionado (client o local server).
4. Para uninstall: tab "Installed Mods", clic en uninstall, el manager restora los archivos.
5. Para reportar bug o feature request: abre issue en el repo de GitHub.

## Limitaciones honestas

- **No SFTP**: para remote dedicated server, hay que usar CertiFried o manual deployment.
- **Sin auto-update de mods**: el manager no detecta nuevas versiones automáticamente.
- **Solo Windows**: como casi todo el ecosistema modding de Windrose.
- **Comunidad pequeña**: menos issues reported, menos contributors. Está activo pero solo-maintained.
- **Documentación en README solamente**: no hay wiki o docs separadas; todo vive en el repo.

## Cómo empezar

Clona o descarga la última release desde [el GitHub repo](https://github.com/Vercadi/windrose-mod-manager). Arranca la app, verifica que detectó tu install de Windrose, prueba con un mod liviano. Si necesitas features que no tiene (SFTP, dependency resolution), pásate a CertiFried's manager o abre un PR — el proyecto acepta contributions.
