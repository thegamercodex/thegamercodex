---
title: Creation Kit vs SSEEdit — crear mods o editarlos
description: Comparación corta entre el editor oficial de Bethesda y el record editor de la comunidad. Cuál abrir para crear contenido nuevo y cuál para parchar lo que ya existe.
---

Para alguien nuevo en el modding de Skyrim, Creation Kit y SSEEdit parecen herramientas competidoras: ambas editan plugins. En la práctica resuelven problemas distintos. **Creation Kit (CK)** es el editor oficial de Bethesda — la misma herramienta con la que el estudio construyó Skyrim. **SSEEdit** es la rama Skyrim de xEdit, mantenida por la comunidad, optimizada para inspeccionar y modificar records sin la sobrecarga del editor completo.

## Para qué sirve cada uno

CK está diseñado para **crear contenido desde cero**:

- Quests con stages, condiciones, dialogue trees y aliases.
- NPCs con face sculpting, factions, AI packages, combat styles.
- Celdas interiores y exteriores con navmesh, lighting, place actors/objects.
- Scripts de Papyrus con su compiler integrado.
- Locked containers, traps, triggers, sound markers.

Tiene viewport 3D, drag and drop, asset browser y todas las herramientas visuales que necesitas para construir un mundo. Si quieres hacer un nuevo dungeon, una nueva quest o un companion mod, abres CK.

SSEEdit está diseñado para **inspeccionar y editar records que ya existen**:

- Ver qué records modifica un plugin.
- Limpiar ITM (identical to master) y UDR (undeleted references) de los DLCs oficiales.
- Escribir patches de compatibilidad entre mods que conflictan.
- Forwardear correcciones de USSEP a NPCs que mods cosméticos también tocan.
- Convertir plugins entre versiones (LE → SE).
- Cambiar valores específicos sin abrir un editor de 600 MB.

No tiene viewport 3D, no compila Papyrus, no edita meshes. Es un editor de la base de datos de records.

## Costos y disponibilidad

CK pesa varios GB, se baja desde Bethesda Launcher (cuenta gratis) y solo corre en Windows. La instalación incluye dependencias problemáticas — necesitas el script extender SKSE y la versión correcta del CK que matchea con tu Skyrim SE/AE.

SSEEdit pesa unos 30 MB, no requiere cuenta de nada, corre en Windows nativo y también en Linux/Mac vía wine. Es lo primero que instala cualquier modder serio.

## Performance

CK es lento. Cargar el load order completo puede tomar varios minutos, especialmente con masters grandes como Skyrim.esm + Update.esm + los 3 DLCs + mods. Una sesión típica de creación involucra esperas constantes.

SSEEdit carga el mismo load order en segundos. Para una edición rápida (cambiar un valor, ver un record, limpiar un plugin), la diferencia es decisiva.

## Estabilidad

CK es conocido por crashear. La comunidad mantiene **CK Fixes**, un plugin no oficial que parcha bugs del editor original — instalar CK sin CK Fixes es desaconsejable. Aún así, perder progreso por crashes es parte del workflow.

SSEEdit es estable. Hay bugs reportables pero crashes en uso normal son raros.

## Cuál usar

- **Crear quests, NPCs, dungeons, scripts** → CK. Es la única opción seria.
- **Limpiar plugins oficiales (ITM/UDR)** → SSEEdit. CK no tiene equivalente.
- **Parche de compatibilidad entre dos mods** → SSEEdit. Más directo.
- **Editar valores específicos rápidamente** → SSEEdit.
- **Investigar qué hace un mod** → SSEEdit.
- **Compilar Papyrus** → CK (el compiler vive ahí).

## En la práctica

Mod authors que crean contenido nuevo usan CK como herramienta principal y SSEEdit como complemento para parchear y limpiar. Modders que solo configuran modlists o escriben parches de compatibilidad casi nunca abren CK — SSEEdit cubre todo lo que necesitan. Si eres usuario que descarga mods para jugar, probablemente nunca necesites ninguno: con un mod manager basta.

Si solo vas a tener una herramienta: **SSEEdit**. Cubre más casos de uso para la mayoría de la comunidad. Si vas a crear contenido nuevo, agrega CK.
