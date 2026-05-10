---
title: "NomNom"
description: "Save editor open-source de No Man's Sky desarrollado por Christian Engelhardt (zencq), compatible con Windows, macOS y Linux. Trabaja directo sobre los archivos de save de Steam, GoG, Microsoft Store y plataformas de consola exportadas, con backup automático antes de cada modificación."
quickTake: "El save editor moderno de NMS. Si vas a editar tu save, NomNom es la elección obvia: tiene UI clara, multi-save (manejá varias partidas de un mismo perfil), backup automático, y release cadence rápida tras patches. NMS Save Editor de goatfungus sigue funcionando pero su UI es más austera y le falta el manejo elegante de múltiples saves."
---

## Qué es

NomNom es un save editor open-source para No Man's Sky escrito en C# por Christian Engelhardt (handle "zencq" en GitHub). El proyecto vive en github.com/zencq/NomNom — antes en cengelha/NomNom, mismo mantenedor — y se publica bajo licencia GPL-3.0.

Es cross-platform real (Windows, macOS, Linux) y maneja los formatos de save de todas las plataformas PC: Steam, GoG, Microsoft Store/Game Pass, y saves importados de Switch o consolas vía herramientas externas. La cadencia de releases es alta — el changelog muestra updates pocas semanas después de cada patch grande de NMS.

Es completamente gratis, sin ads, sin freemium tier.

## Qué problema resuelve

NMS guarda mucho estado en cada partida: inventario, slots desbloqueados, créditos, nanites, quicksilver, units, ships en tu colección, multi-tools, freighter, fragatas, settlements, milestones, glyphs aprendidos. Hay escenarios donde tocás esos datos directamente:

- **Backup pre-experimento**: antes de probar un mod o algo riesgoso, hacés copia editable.
- **Recuperación tras corrupción**: NMS ocasionalmente corrompe saves; un editor te deja restaurar campos puntuales.
- **Tweaks legítimos**: mover bases, restaurar inventario perdido por bug, restaurar progreso si Hello Games te trolló con un patch.
- **Cheating directo**: agregar units/nanites/items. Esto rompe el spirit del juego pero técnicamente es lo que muchos quieren.

Sin save editor, todas estas operaciones requieren ingeniería manual de los archivos JSON o vivir con el estado actual.

## Diferenciación

Frente a **NMS Save Editor (goatfungus)**: el de goatfungus es el clásico (lleva años activo, simpler UI). NomNom es más moderno: maneja mejor múltiples saves de un mismo perfil, backup automático antes de cada save, UI más visual con tabs. La compatibility de cobertura de campos es similar; goatfungus a veces toma campos antes en releases tras patches, NomNom otras veces. Ambas son válidas — elegí según qué UI te resulte más cómoda. Si jugás cross-platform y manejás varias partidas, NomNom escala mejor.

## Para qué la usa la gente

**Backup pre-mod**: antes de instalar un mod o probar algo experimental, abrir NomNom, exportar el save, y restaurarlo si algo sale mal.

**Recuperación tras un bug**: NMS ha tenido bugs históricos (patches que borran items, freighters que pierden ítems en almacén). El editor permite restaurar.

**Mover bases o reorganizar**: NomNom expone las bases construidas para edición de coordenadas o regeneración.

**Importar saves entre versiones**: si tu save de Switch necesita migrar a PC, herramientas externas exportan los archivos y NomNom los abre/edita.

**Cheats / sandbox personal**: agregar items, units, ships. Es válido para experimentos creativos sin grindear desde cero.

## Para quién NO es esta herramienta

Si jugás Permadeath o Survival y querés mantener challenge, usar el editor anula el spirit. No es ilegal, es solo que tu save deja de ser "ganado".

Si nunca tocaste archivos de configuración de juegos o terminales: NomNom tiene UI gráfica accesible, pero el contexto (qué hace cada campo) requiere lectura previa de la wiki o foros. Riesgo de romper saves si tocás campos que no entendés.

Si jugás solo en consola sin acceso a una PC, NomNom no aplica — necesitás PC para correr la app. Saves de PS5/Xbox requieren extracción a PC primero.

Si confiás más en herramientas de larga data, goatfungus puede sentirse más estable. NomNom es bastante nueva por contraste.

## Cómo se usa en la práctica

1. Vas a github.com/zencq/NomNom/releases y bajás el binario para tu OS (Windows .exe, macOS .dmg, Linux AppImage).
2. Abrís NomNom; te pide que apuntes a la carpeta de saves de NMS:
   - Steam: `%APPDATA%\HelloGames\NMS\` (Windows)
   - GoG: distinto path; NomNom autodetecta varios.
   - Mac: `~/Library/Application Support/HelloGames/NMS/`
3. NomNom lista todos los saves encontrados con previews (nombre del save, modo, ship, créditos).
4. Cliqueás un save para entrar al editor. Las tabs te dan: Inventory (suit/ship/multi-tool/exocraft/freighter), Stats (units, nanites, quicksilver), Bases, Discoveries, Story Progress, Stats raw.
5. Modificás lo que querés y guardás. NomNom hace backup automático antes — si algo sale mal, el original está intacto.
6. Si NMS está abierto, cerralo antes de guardar para evitar conflictos.

## Limitaciones honestas

**Lag tras patches grandes**. Cuando Hello Games saca un patch que cambia el formato del save, NomNom necesita un release nuevo (típicamente días, a veces semanas). Si actualizás NMS antes de NomNom, podés tener que esperar.

**Guarda mejor que entiende**. NomNom expone el JSON parseado pero algunos campos no tienen documentation clara — sabés que existen pero no qué hace cada uno. La comunidad documenta estas cosas en el repo de NomNom y wikis adjuntas.

**Riesgo de corrupción**. Editar campos críticos sin entender puede dejar saves rotos. El backup automático ayuda pero no es invulnerable. Hacé tu propio backup manual antes de experimentos serios.

**Solo PC para edición**. Saves de consola requieren herramientas externas para extraer/inyectar. NomNom edita pero no maneja la transferencia plataforma.

**Single maintainer**. Christian es el dev principal; aunque hay contributors, una pausa de su parte ralentiza updates.

**Sin features anti-cheat**. Hello Games no detecta saves editados (no hay cheats online), pero si en el futuro NMS introduce leaderboards o multiplayer competitivo, eso podría cambiar.

## Cómo empezar

Vas a github.com/zencq/NomNom y leés el README — explica los formatos soportados y limitaciones actuales.

Bajás el release más reciente para tu OS desde la pestaña Releases. Verificá que la versión sea compatible con tu version de NMS — el README indica el rango.

Antes de cualquier edición real, hacé backup manual de tu carpeta de saves (copy/paste a otro lugar). El backup auto de NomNom es bueno pero el manual es la red de seguridad real.

Empezá tocando algo bajo riesgo: un save de modo creative que tenés solo para experimentar. Cuando entiendas la UI y las consecuencias, podés tocar tu main si querés.

Si vas a hacer algo no-trivial (mover bases, restaurar un freighter), buscá la conversación correspondiente en GitHub Issues — alguien probablemente la resolvió antes y dejó notas.
