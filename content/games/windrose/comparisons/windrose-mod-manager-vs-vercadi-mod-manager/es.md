---
title: Windrose Mod Manager (CertiFried) vs Vercadi Mod Manager — qué manager elegir
description: Comparación corta entre los dos mod managers community-built para Windrose. Closed source feature-completo vs open source con scope reducido, soporte de dedicated server remoto vs cliente local únicamente.
---

A poco menos de un mes del lanzamiento de Early Access, la comunidad de Windrose ya tiene dos mod managers distintos. **Windrose Mod Manager (CertiFried)** está hosted en Nexus, closed source, con soporte para client, local server y remote dedicated server via SFTP/FTP. **Vercadi Mod Manager** está open source en GitHub, con scope deliberadamente reducido al client y local server.

## Filosofía de scope

CertiFried apunta a cubrir todos los targets posibles. Si tu setup es complejo — cliente + dedicated server hosted en g-portal + local testing — un solo manager los gestiona todos. La trade-off es complejidad inherente: más features, más UI, más onboarding.

Vercadi declara su scope claro: client install + local server. Si necesitas algo fuera de eso (remote SFTP, dependency resolution), conscientemente no lo tiene. Trade-off: simplicidad y código auditable, pero feature limitado.

## Open source vs closed source

Vercadi vive en `github.com/Vercadi/windrose-mod-manager`. Cualquier persona puede leer el código antes de ejecutarlo, fork si quieres customizar features, abrir issues o PRs. Para players que dan importance a auditability — especialmente porque el manager tiene filesystem y network access — esto es relevante.

CertiFried distribuye binarios desde Nexus. No hay codebase pública. Hay que confiar en el author basándose en su track record y reviews community. El track record es bueno (entry #148 en Nexus con descargas significativas) pero formalmente no hay verification.

## Manejo de dedicated servers remotos

Este es el caso donde CertiFried tiene ventaja clara. Su SFTP integration permite deploy de mods directamente al server remoto sin tocar FileZilla manualmente. Para admins de community servers, esto convierte una tarea de 20 minutos en una de 30 segundos.

Vercadi no soporta remote — los mods se instalan local. Si tu server es local también, fine. Si está remoto, vas a hacer upload manual de cada .pak vía SFTP client externo, lo cual nullifies el value de tener un manager.

## Manejo de configs

CertiFried abre `ServerDescription.json` y `WorldDescription.json` con UI estructurada — campos identificables, validation, defaults sane. Vercadi también edita configs pero con UI más bare-bones.

Para admins que tocan configs frecuentemente, CertiFried reduce risk de typos que rompen el server.

## Decision matrix

| Setup | Manager recomendado |
|---|---|
| Cliente single-player puro | Vercadi |
| Cliente + local server co-op | Vercadi |
| Cliente + dedicated server remoto | CertiFried |
| Quieres auditar el código antes de instalar | Vercadi |
| Necesitas features completas con UI guiada | CertiFried |
| Aceptas cerrar source code | CertiFried |
| Quieres contribuir al proyecto | Vercadi |

## Recomendación combinada

No tiene sentido tener ambos instalados simultáneamente — son intercambiables. La elección depende de tu setup. Si arrancas y no estás seguro, **Vercadi es el default safe**: open source, scope justo para el caso común. Si después tus necesidades crecen (dedicated server remoto), migrar a CertiFried es un cambio claro de un día.
