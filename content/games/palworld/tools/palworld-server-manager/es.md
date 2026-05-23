---
title: Palworld Server Manager (PSM)
description: Aplicación para Windows que administra servidor dedicado de Palworld con RCON, backups automáticos, restart programado y notificaciones a Discord.
quickTake: La opción gratis más usada para administrar un dedicated server. Si vas a hostear un server para tu grupo y no quieres pagar managed hosting, PSM cubre 90% de lo que necesitas.
---

## Qué es

Palworld Server Manager (PSM) es una app desktop para Windows publicada en Nexus Mods (entry 512) que actúa como wrapper administrativo para el dedicated server oficial de Palworld. Te da una GUI sobre lo que normalmente sería editar archivos .ini a mano y manejar el proceso del server por consola. Free.

## Qué problema resuelve

Hostear un servidor de Palworld implica:
- Bajar el dedicated server desde Steam (gratis).
- Editar `PalWorldSettings.ini` a mano (formato propio, fácil de romper).
- Lanzar el proceso del server con flags.
- Manejar crashes (reinicio manual cuando crashea).
- Backupear el save periódicamente (manual).
- Aplicar comandos al server vía RCON desde otro tool.

PSM consolida todo eso en una GUI: edición visual de settings, auto-restart, auto-backup configurable, RCON integrado y webhook a Discord para anunciar eventos (jugador conectado, server up/down, raid spawned).

## Diferenciación

En la categoría "gestión de dedicated server gratis para Windows", PSM es la opción más madura. Otros community tools (CrossPlay-Mod-Manager, AMP, Palworld Server Tool) existen pero son menos integrados o pagos. Para hosters DIY, PSM es default.

Frente a managed hosting (HostHavoc, BisectHosting): managed te quita el problema entero a cambio de pagar mensualmente. PSM es para quien tiene la máquina y quiere control completo.

## Para qué la usa la gente

- **Hostear server casero para grupo de amigos**: 4-8 jugadores en una máquina home.
- **Configuración visual de settings**: experience rate, capture rate, day length, etc.
- **Discord notifications**: avisar cuando alguien se conecta, cuando hay raid, cuando crashea.
- **Auto-backup**: snapshot del save cada X horas, retener N copias.
- **Restart programado**: cada 12-24h para que la memoria del server no se acumule.

## Para quién NO es esta herramienta

Si juegas solo en world singleplayer, no necesitas server dedicado ni PSM. Si vas a managed hosting (pagado), tampoco — el provider ya tiene su panel.

Si juegas en Linux, PSM no es para vos — es Windows-only. Para Linux existen scripts community (systemd units, Docker images del dedicated server) pero ya entras en territorio CLI.

## Cómo se usa en la práctica

1. Tener Palworld Dedicated Server bajado (gratis, separado del juego, en Steam library).
2. Bajar PSM desde nexusmods.com/palworld/mods/512.
3. Apuntar PSM al folder del Dedicated Server.
4. Configurar settings visualmente (rates, daylength, password).
5. Click "Start Server".
6. Configurar webhook de Discord en el panel correspondiente.
7. Set restart programado (recomendado cada 12h).
8. Definir backup interval (recomendado cada 1-2h con 24+ snapshots retenidos).

## Limitaciones honestas

- **Solo Windows**: como casi todo lo de Palworld modding.
- **No es open source**: el binario es freeware pero el código no está público — algunos sysadmins prefieren alternativas auditables.
- **Updates dependen del autor**: tras parches grandes de Palworld a veces hay lag de días antes de que PSM se actualice.
- **No tiene panel web**: solo desktop, sin acceso remoto. Para gestión remota necesitas RDP o algo equivalente.
- **Limitado a un server por instalación**: si quieres varios servers en la misma máquina, hay que duplicar instalaciones.

## Cómo empezar

Bajar Palworld Dedicated Server desde Steam (en library bajo Tools). Bajar PSM desde Nexus. Apuntar PSM al folder del server. Configurar settings, password y restart schedule. Lanzar. Para abrir el server a internet: forward del puerto 8211 UDP en tu router, compartir IP pública con el grupo.
