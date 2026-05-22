---
title: "XIVLauncher"
description: "Launcher alternativo open-source para FFXIV con login auto, fix de instabilidades, multi-account y acceso al ecosistema de plugins Dalamud — el estándar de facto fuera del launcher oficial."
quickTake: "XIVLauncher es el launcher que toda la comunidad enchufada usa. Auto-login, fix de connection issues, multi-character switching, y sobre todo: el portal al ecosistema Dalamud de plugins QoL. Square Enix lo tolera (no formalmente) y nadie ha sido baneado por usarlo. Imprescindible si juegas más de 5h/semana."
---

## Qué es

XIVLauncher (goatcorp.github.io) es un launcher alternativo open-source para FFXIV mantenido por **goatcorp**. Existe desde 2018 y se volvió el launcher dominante de jugadores moderadamente engaged. Open source en GitHub (`goatcorp/FFXIVQuickLauncher`), licencia GPL-3.0.

Funciones core:

- **Auto-login**: Guardas credentials una vez, login al juego en 1 click. Square Enix's official launcher requiere 2FA cada login.
- **Multi-account**: Cambias entre accounts/characters fácilmente.
- **Fixes de stability**: detecta y reintenta connection failures que el launcher oficial just falla silently.
- **Wine/Linux soporte oficial**: el goatcorp team mantiene XIVLauncher para Linux (the only viable way to play FFXIV on Linux con QoL).
- **Acceso a Dalamud**: el framework de plugins inyectados en el client. Cientos de plugins QoL: minimap, fly text customizable, party finder filters, market board fast scanning, etc.

Free, open source.

## Qué problema resuelve

El launcher oficial de Square Enix es funcional pero austero: login lento, 2FA cada vez, sin fix automático de stability issues, y completamente cerrado a third-party extensions.

Para players que juegan regular:

- **Login overhead**: 30 segundos cada vez en SE launcher → 2 segundos en XIVL.
- **Connection failures**: SE launcher falla y te tira al login screen. XIVL retries automáticamente.
- **Plugins**: SE no permite mods/plugins oficialmente. Dalamud (via XIVL) llena ese gap con plugins QoL.
- **Multi-character**: SE launcher requiere logout/login para switchar chars en otra cuenta. XIVL maneja esto seamlessly.

Para Linux users, no hay alternativa real — XIVLauncher es THE way.

## Diferenciación vs el launcher oficial

- **SE Official**: lo que viene con el juego. Funcional, austero, cerrado.
- **XIVLauncher**: same game, mejor UX + plugin ecosystem.

Ambos lanzan el mismo cliente. XIVL solo wrapper el process de login y permite injection de Dalamud. El gameplay es idéntico — solo cambia la experiencia de pre/post game.

## Para qué la usa la gente

**Login rápido daily**: para roulettes diarios, abrir SE launcher es 30 segundos perdidos cada vez. XIVL es instant.

**Dalamud plugins**: el verdadero killer feature. Plugins clave:
- **Marketboard Uploader** (contribuir a Universalis).
- **Cactbot** (callouts auto de mecánicas en Savage).
- **Visual range adjustments**.
- **Inventory tools**.
- **Plugin de party finder mejorado**.

**Linux gaming**: la única vía civil de jugar FFXIV en Linux. goatcorp mantiene Wine config y wrapper.

**Multi-account switching**: para players con alts en accounts separadas, o que comparten cuenta con familia.

**Reconnection automática**: en momentos de inestabilidad del client (mucho lag, queue muy larga), XIVL retries vs SE solo te tira.

## Para quién NO es esta herramienta

- **Casuales que login 1x por mes**: el overhead de instalar y configurar XIVL no se justifica si juegas poco.
- **Players paranoicos sobre TOS**: XIVL técnicamente no está aprobado por Square Enix. Casi nadie ha sido baneado, pero existe el riesgo teórico. Para PvP especialmente, no uses plugins visibles.
- **Console-only players**: XIVL es Windows/macOS/Linux. PS5/Xbox no aplica.
- **Quien prefiere mantener el client puro**: si te molesta la idea de plugins inyectados, quedate con SE launcher.

## Cómo se usa en la práctica

1. Descarga XIVLauncher desde [goatcorp.github.io](https://goatcorp.github.io).

2. Primer setup: introduces Square Enix credentials. XIVL guarda encrypted (no en cleartext).

3. Para Windows: instala .NET 7+, corre XIVL como cualquier app.

4. Para macOS: descarga la app oficial de goatcorp (no la del App Store).

5. Para Linux: sigue la guía especifica (require config of Wine + winetricks; tutorial in docs).

6. Una vez activo: login en 1 click. Te lanza directo al client.

7. Para Dalamud: en XIVL Settings → enable Dalamud. Una vez in-game, abres el menú con `/xlplugins` para instalar plugins.

## Limitaciones honestas

**TOS gray area**: Square Enix no aprueba XIVL formalmente. En 7+ años casi nadie ha sido baneado por usarlo solo, pero el riesgo técnico existe — especialmente si combinas con plugins que violan TOS (cheats de combat, mods de animation cosméticos invisibles a otros players).

**Vulnerable a patches**: cuando sale un parche del juego, XIVL típicamente necesita actualizarse. goatcorp es rápido (suele estar listo en horas), pero hay window donde XIVL no funciona post-patch.

**Multi-account share workflow**: aunque XIVL maneja multi-account, no es perfecto. Para families compartiendo PC, hay que configurar separately.

**Setup en Linux puede ser frágil**: aunque oficialmente soportado, Wine + Linux + FFXIV tiene edge cases. La community en goatcorp Discord es helpful pero requiere paciencia.

**No coopera con ACT 1:1**: ACT (parser desktop) sigue corriendo afuera del client, así que el flow ACT + XIVL requiere algo de coordinación pero funciona.

**Plugins de comunidad varían en calidad**: algunos plugins de Dalamud son de hobbyist y pueden tener bugs / no estar mantenidos. Stickea a plugins recomendados en el goatcorp official list.

## Cómo empezar

1. Descarga XIVLauncher desde [goatcorp.github.io](https://goatcorp.github.io).

2. Para Windows: install .NET 7 + Visual C++ Runtime si missing. Corré XIVL.

3. Login con tu SE account + game ID. XIVL te ofrece guardar credentials seguramente.

4. Configura multi-character si tienes varios chars.

5. En Settings, **enable Dalamud**. Acepta los términos (Dalamud advierte sobre TOS gray area).

6. Lanza el juego desde XIVL. Una vez in-game, type `/xlplugins` para acceder al manager de plugins.

7. Plugins recomendados para empezar: **Marketboard Uploader** (contribuye a Universalis), **Cactbot** (raid callouts), y explora el catalog. Empieza conservador — no actives 30 plugins simultáneos.

8. Si juegas Linux, sigue la guía específica de Wine setup. El goatcorp Discord es active para help.
