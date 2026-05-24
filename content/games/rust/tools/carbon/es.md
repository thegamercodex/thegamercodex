---
title: Carbon
description: Framework de modding moderno para Rust, alternativa a Oxide con boot 30-40% más rápido, compatibilidad 99% con plugins de uMod y soporte nativo para Codefling.
quickTake: Para servers nuevos en 2026, Carbon es la elección por performance. Para servers existentes en Oxide sin problemas, no hay urgencia de migrar pero la opción está si necesitas boost de performance.
---

## Qué es

Carbon es un framework de modding open-source para Rust, alternativa moderna a Oxide. Mantenido por Carbon Community desde 2022, se diseñó desde el inicio para ser Oxide-compatible (corre los mismos plugins .cs) pero con boot times 30-40% más rápidos, menor RAM consumption, y features nuevas que Oxide no expone. Soporta plugins tanto de uMod como de Codefling con soporte first-class.

## Qué problema resuelve

Oxide es el incumbent pero arrastra peso histórico: arquitectura desde 2014, boot times largos, dificultad para incorporar features de Rust modernos. Carbon nació para ser el "Oxide 2.0" — same API surface, mejor implementación. Para servers que tienen 50-100+ plugins corriendo, la diferencia en boot time y RAM se vuelve material.

## Diferenciación

Frente a Oxide, Carbon gana en performance (boot 30-40% más rápido, RAM más baja), features nuevas (hot reload mejor, telemetry built-in, mejores debug tools), y soporte de Codefling nativo. Oxide gana en historia (catálogo más probado), comunidad más grande, y default status en hosts y panels. Para 99% de plugins la diferencia es invisible — corre lo mismo. La pregunta es performance: ¿quieres ganar el 30-40% de boot speed?

## Para qué la usa la gente

- **Boot rápido**: en servers heavy-modded (50+ plugins), boot time pasa de minutos a 30-60 segundos.
- **RAM más baja**: free up de 1-2GB de RAM en servers grandes — material en hosts con RAM tier-limited.
- **Plugins Carbon-only**: muchos devs ya releasean features exclusivas (advanced hooks, performance-critical) "Carbon Only".
- **Codefling support nativo**: instalar plugins paid de Codefling sin extra setup.
- **Telemetry built-in**: ver qué plugin consume más CPU/RAM para identificar bottlenecks.

## Para quién NO es esta herramienta

Si tu server es chico (~5-10 plugins, ~50 slots), la diferencia de performance es invisible — quedate en Oxide si ya funciona. Si dependés de plugins muy específicos que se sabe rompen en Carbon (el ~1% incompatible), Oxide sigue siendo necesario. Si tu host no soporta Carbon nativamente (algunos providers solo dan Oxide templates), instalación manual es posible pero requiere más laburo.

## Cómo se usa en la práctica

1. Backup completo de tu server actual (especialmente data y plugin configs).
2. Si tienes Oxide instalado, removelo siguiendo la guía de Carbon (no puedes correr ambos).
3. Descargás Carbon desde carbonmod.gg o desde el GitHub release.
4. Extraes sobre la carpeta del server.
5. Restart — Carbon crea `carbon/plugins/` (compatible con `oxide/plugins/`) y carga.
6. Plugins existentes de Oxide funcionan dropeando .cs files en `carbon/plugins/`. Plugins Carbon-only desde el panel oficial o Codefling.
7. Para configurar, mismo flow que Oxide: archivos .json en `carbon/config/`.

## Limitaciones honestas

- **No 100% compatible con Oxide**: ~1% de plugins requieren update por el dev para correr en Carbon.
- **Comunidad más chica**: menos guides, menos answers en discords si tienes problema raro.
- **Algunos hosts no tienen template oficial**: Pterodactyl, Shockbyte, etc. tienen Oxide como default; Carbon puede requerir manual install.
- **Migrar de Oxide a Carbon es one-way práctico**: no es destructivo pero implica testear todos los plugins.
- **Releases pueden tener lag vs Facepunch parches**: cuando hay parche grande, Carbon a veces tarda 24-48h en compat update, similar a Oxide.

## Cómo empezar

Para server nuevo desde cero: leer la guía oficial en docs.carbonmod.gg, descargar release, instalar. Para migrar desde Oxide: backup todo, testear en staging primero con tus plugins críticos, después decisión informada. El Discord oficial de Carbon es activo y responde dudas de installation y migration.
