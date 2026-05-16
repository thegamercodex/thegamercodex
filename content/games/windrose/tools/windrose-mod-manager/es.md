---
title: "Windrose Mod Manager (CertiFried)"
description: "Mod manager community-built para Windrose con soporte completo: client install, local server, Steam Windrose Dedicated Server standalone, y servidores remotos vía SFTP/FTP. Backup automático antes de cada cambio."
quickTake: "Si gestionas un dedicated server o cambias mods con frecuencia, este es el manager que va más allá del drag-and-drop. La integración con SFTP es la diferenciación clave frente a alternatives client-only."
---

## Qué es

Windrose Mod Manager (CertiFried's, entry #148 en Nexus) es una aplicación Windows community-built que automatiza la instalación, actualización y gestión de mods PAK para Windrose. Soporta cuatro destinos distintos: el cliente del juego, el archivo de servidor local (si juegas multi local), el Windrose Dedicated Server standalone de Steam, y servidores remotos vía SFTP/FTP — útil si hosteás con g-portal, low.ms u otro provider.

## Qué problema resuelve

La instalación manual de mods PAK requiere: descargar zip de Nexus, extraer, mover .pak al directorio correcto, repetir por cada mod, recordar cuáles instalaste. Cuando tienes 10+ mods y un servidor remoto, este proceso se vuelve caos. Windrose Mod Manager consolida todo: drag the .zip o .7z, el manager extrae, instala donde corresponda, mantiene un registry de qué está instalado y backuper de cada cambio. Si algo rompe el juego, rollback es one-click.

## Diferenciación

- **Manual install**: error-prone, sin tracking. Funciona pero no escala.
- **Vercadi's mod-manager** (GitHub, open source): cubre client + local server pero no SFTP. Más simple, foco en client install.
- **Windrose Mod Manager (CertiFried)**: cubre todos los targets, incluyendo remote SFTP. Más feature-rich pero también más complejo.
- La elección entre ambos depende de si gestionas un dedicated server remoto: si sí, CertiFried; si no, Vercadi alcanza.

## Para qué la usa la gente

- **Instalar 10+ mods sin volverse loco**: bulk install, registry visible, toggles per-mod.
- **Sincronizar mods entre cliente y dedicated server**: install once, push a ambos targets.
- **Editar `ServerDescription.json` y `WorldDescription.json` safe**: el manager te abre los configs con UI estructurada en vez de raw text editing.
- **Backup automático antes de cada cambio**: si un mod rompe el save, restore desde el backup.
- **Updates en bulk**: ver qué mods tienen nueva versión disponible y aplicar updates juntos.

## Para quién NO es esta herramienta

Si solo quieres instalar 1-2 mods de QoL en tu cliente single-player, este manager es overkill — drag-and-drop manual o Vercadi's manager te alcanza. Si juegas en Mac/Linux, el manager no soporta — no hay build cross-platform.

## Cómo se usa en la práctica

1. suscríbete a Nexus Mods, descarga [Windrose Mod Manager](https://www.nexusmods.com/windrose/mods/148) (.exe).
2. Instala y arranca la app. Auto-detecta tu install de Windrose si está en path estándar.
3. Para dedicated server remoto: agrega conexión SFTP/FTP en settings con host, port, credentials.
4. Para instalar un mod: arrastra el .zip o .7z al app — el manager extrae y prompte target (client/local server/dedicated server).
5. Para configurar server: tab "Server Config", ahí puedes editar `ServerDescription.json` y `WorldDescription.json` con UI guiada.
6. Para rollback: tab "History", clic en cualquier change pasado para reverteat.

## Limitaciones honestas

- **Solo Windows**: sin builds Mac/Linux.
- **Closed source**: hay que confiar en CertiFried — el manager tiene acceso filesystem y network, no es trivial.
- **Update cadence depende del author**: cuando Windrose patcha, el manager puede necesitar un update propio para compatibility.
- **Dedicated server vía SFTP requiere conocimiento técnico**: si no sabes qué es SFTP o cómo encontrar credentials del provider, hay learning curve.
- **Comunidad chica todavía**: bugs reportados puede tardar en ser fixed.

## Cómo empezar

Descarga Windrose Mod Manager desde Nexus, instálalo. Si juegas solo single-player o local co-op, configura solo el target "Client". Si tienes dedicated server, agrega conexión SFTP en settings. Para tu primer mod, prueba uno liviano (Faster Cooldowns) para verificar que la pipeline funciona antes de invertir en sets grandes.
