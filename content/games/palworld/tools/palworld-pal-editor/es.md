---
title: Palworld Pal Editor
description: Editor de saves open-source con WebUI, Docker y CLI que te deja agregar, borrar y modificar Pals individuales — además desbloquea Viewing Cage en multiplayer.
quickTake: El editor de saves más completo del ecosistema. Soporta Docker para correr en server dedicado y editar en remoto. Si juegas multiplayer y quieres el Viewing Cage, esta es la única manera de habilitarlo.
---

## Qué es

Palworld Pal Editor es un editor de saves open-source mantenido por KrisCris, disponible como CLI, GUI desktop, WebUI y Docker container. Te deja modificar Pals individuales dentro del save file: cambiar especie, stats, level, IVs, passives, nickname, gender, owner. Su feature distintiva es que **desbloquea el Viewing Cage en multiplayer** — Pocketpair lo restringió a singleplayer y Palworld Pal Editor permite override eso flippeando una flag en el save. Free, GPL-3.0.

## Qué problema resuelve

Hay dos casos comunes:
1. **Pals corruptos**: bugs ocasionales del juego dejan Pals en estado inválido (stats imposibles, missing references). El editor te deja arreglarlos o borrarlos limpiamente.
2. **Experimentación libre**: probar builds con passives específicas sin pasar 20 horas breedeando, o testear cómo escala un Pal en endgame.
3. **Viewing Cage en multi**: específico del editor, único feature que no se consigue de otra forma.

## Diferenciación

Frente a Palworld Save Pal (la otra opción seria), Pal Editor gana en:
- **Soporte Docker/WebUI**: ideal si juegas en servidor dedicado y quieres editar saves remotos.
- **CLI scriptable**: podes automatizar workflows.
- **Viewing Cage unlock**: feature exclusiva.

Save Pal gana en:
- **GUI más cómoda para usuarios desktop solo**: si solo quieres editar tu save local de Steam, Save Pal es más rápido.
- **Soporte Game Pass más maduro**.
- **Mejor para single-player rápido**.

## Para qué la usa la gente

- **Arreglar Pals corruptos por bugs del juego**.
- **Habilitar Viewing Cage en server dedicado multiplayer**.
- **Setear Pals a passives target sin breeding** (controversial: rompe la curva, pero la gente lo hace).
- **Recovery post-update**: cuando un parche grande rompe saves, el editor a veces puede salvar lo que se pueda.
- **Backup y restore granular**: exportar Pals específicos para migrar entre saves.

## Para quién NO es esta herramienta

Si tu único objetivo es editar tu save local de Steam casual, Save Pal tiene UX más amigable. Pal Editor brilla en setups remotos (server dedicado, Docker) o cuando necesitas features avanzadas como el Viewing Cage unlock.

Para usuarios non-técnicos, la versión Docker/CLI puede ser intimidante — usar la GUI desktop o WebUI local.

## Cómo se usa en la práctica

**WebUI local**:
1. Bajas el zip desde GitHub Releases.
2. Ejecutás `palworld-pal-editor-webui.exe` (Windows) o equivalente.
3. Abres `http://localhost:8080` en el browser.
4. Apuntás al folder de tu save.
5. Editas Pals visualmente.

**Docker (server remoto)**:
1. `docker run -p 8080:8080 -v /path/to/save:/save kriscris/palworld-pal-editor`.
2. Accedés a `http://server-ip:8080`.
3. Editas saves remotos vía browser.

**CLI**:
1. `pip install palworld-pal-editor`.
2. Comandos para listar, exportar, editar Pals.

## Limitaciones honestas

- **Riesgo de corrupción**: editar saves siempre tiene riesgo. **Backup obligatorio antes de cada sesión**.
- **Solo Steam version** (oficialmente; Game Pass Save tiene soporte parcial, mejor verificar issue tracker).
- **No funciona con saves muy viejos**: cada parche grande puede cambiar formato; el editor necesita actualizarse. Hay lag de 1-2 semanas tras parches grandes.
- **Curva de aprendizaje WebUI**: la UI es funcional pero no pulida — orientada a power users.
- **Bypass de single-player restriction es controversial**: editar saves de multiplayer puede afectar otros jugadores en el server. Usar con consentimiento del host.

## Cómo empezar

Si juegas solo en Steam: bajar release desde GitHub, abrir GUI desktop, apuntar al save folder. Si juegas en server dedicado: setear el Docker container apuntando al volumen del save, abrir WebUI remoto. **Siempre backup primero**: copia entera del folder `Saved/SaveGames/<world>/` antes de cualquier edición.
