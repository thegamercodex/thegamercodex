---
title: "Native Settings UI"
description: "Framework de UI que permite a otros mods de Cyberpunk 2077 agregar sus settings al menú nativo del juego en lugar de archivos de texto."
quickTake: "Si vas a tener varios mods con opciones configurables, Native Settings UI te evita editar JSON manualmente. Es el segundo mod que instalas después de CET — casi todos los mods modernos lo asumen."
---

## Qué es

Native Settings UI es un framework liviano open-source (MIT) creado por justarandomguyintheinternet. Su función es expandir el menú de Settings del juego para que otros mods puedan agregar sus propias opciones — sliders, toggles, dropdowns — visualmente integrados.

Depende de Cyber Engine Tweaks (CET) para funcionar, pero a su vez es dependency de muchos mods que requieren configuración por user (intensity de un effect, hotkey assignments, feature toggles).

## Qué problema resuelve

Sin Native Settings UI, configurar un mod requiere abrir su archivo `config.json` o `settings.lua` en un text editor, modificar valores, guardar, recargar el juego. Ese flow tiene tres problemas:
1. Para users no técnicos, editar JSON es intimidante.
2. Sin validación, errores de sintaxis rompen el mod silenciosamente.
3. Cambios requieren restart del juego — sin live tweak.

Native Settings UI resuelve esto exponiendo una API simple: mods registran sus settings, Native Settings UI los rendea en el menú estándar, los users editan con sliders y toggles, los cambios aplican (en muchos casos) sin restart.

## Diferenciación

Frente a **CET overlay con paneles per-mod**: cada mod puede crear su propio overlay UI via CET (AMM hace esto, por ejemplo). Eso da más poder al mod author pero requiere que el user aprenda 10 UIs distintas si tiene 10 mods. Native Settings UI estandariza: una settings UI para todos.

Frente a **archivos JSON config**: JSON da control absoluto pero requiere conocimiento técnico. Native Settings UI es la abstracción visual.

Frente a **mods que no exponen settings**: algunos mods son fixed-config (sin opciones para user). Native Settings UI no agrega settings a esos — solo facilita a mods que quieren exponerlas.

## Para qué la usa la gente

**Configurar mods sin tocar archivos**: cuando instalas un mod (ej: un balance tweak) que tiene 5 opciones configurables (intensity, range, frequency, etc.), Native Settings UI los presenta en el menú in-game. Editas con sliders, cambia in real-time.

**Settings consistentes entre mods**: si tienes 10 mods que usan Native Settings UI, las 10 secciones de settings viven en el mismo menú, con UX uniforme. Sabes dónde buscar y cómo cambiar cualquier setting.

**Hotkey assignments centralizados**: muchos mods usan hotkeys (toggle effect, open menu). Native Settings UI permite asignar hotkeys desde la UI, sin editar files.

**Validation in-place**: si un setting tiene rango limitado (ej: "intensity 0-100"), el slider lo respeta. Sin ese límite, JSON edits pueden romper el mod.

## Para quién NO es esta herramienta

Si solo instalas mods sin configurarlos (vanilla feature toggle, nada más), no necesitas Native Settings UI estrictamente — el mod usa defaults.

Si modeas creando mods, Native Settings UI es opcional para vos: agregar settings es nice-to-have, no requirement.

Si quieres UI custom (mod muy interactivo con paneles propios), Native Settings UI puede no ser suficiente — para eso, CET overlay panel directo es más flexible.

## Cómo se usa en la práctica

Como user:
1. **Pre-requisito**: CET y RED4ext instalados y working.
2. Bajar Native Settings UI desde Nexus (`nexusmods.com/cyberpunk2077/mods/3518`) o GitHub.
3. Extraer en `bin\x64\plugins\cyber_engine_tweaks\mods\`. Aparece como una carpeta `nativeSettings`.
4. Levantar el juego. Native Settings UI se inicializa silently — no tiene UI propia.
5. Instala otros mods que usen Native Settings UI (la mayoría modernos lo hacen). Sus settings aparecerán automáticamente en el menú de Settings → Mods.

Como mod author:
1. En tu mod Lua/CET, importas Native Settings UI API.
2. Registras tus settings con tipos (slider, toggle, dropdown), defaults, rangos, callbacks.
3. Native Settings UI los rendea cuando el user abre Settings → Mods → [Tu mod].
4. Cuando el user cambia un value, tu callback recibe el nuevo valor y aplicás el cambio.

## Limitaciones honestas

**Solo si CET funciona**. Como depende de CET, si CET falla post-patch, Native Settings UI también. Espera ventana de update post-patch.

**No expone UI custom altamente interactiva**. Los componentes son básicos (slider, toggle, dropdown, button). Si tu mod requiere graphics, lists complex, drag-and-drop — Native Settings UI no llega.

**Inglés solo**. Toda la UI en inglés. Los strings de cada mod registered también en inglés (a menos que el mod los localice).

**Footprint mínimo pero existe**. Native Settings UI agrega un loading time minúsculo al startup. No es perceptible en hardware moderno, pero existe.

**Updates ocasionales**. El último push fue mayo 2025. Como es un framework simple sin muchos changes necesarios, los updates son raros, pero post-major-patch puede necesitar uno.

## Cómo empezar

1. Verifica que CET está instalado (es pre-requisito).
2. Baja Native Settings UI desde Nexus (mod ID 3518). Versión más reciente compatible con tu juego.
3. Extrae el ZIP. La carpeta `nativeSettings` (o como esté nombrada) va a `bin\x64\plugins\cyber_engine_tweaks\mods\`.
4. Levantá el juego. Carga save. Ve a Settings → Mods. Si Native Settings UI cargó OK, verás la sección "Mods" presente (puede estar vacía si no instalaste mods que la usen aún).
5. Instala tu primer mod que use Native Settings UI (ej: AMM o cualquier mod que liste "Requires Native Settings UI"). Sus settings deberían aparecer en Settings → Mods.

Tip: Native Settings UI es uno de los mods que **siempre instalas de entrada** en un mod-heavy setup. CET → Native Settings UI → demás mods. Es infraestructura básica.
