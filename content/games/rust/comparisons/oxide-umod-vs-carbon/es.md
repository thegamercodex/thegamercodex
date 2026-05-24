---
title: Oxide vs Carbon — qué framework de modding usar en Rust
description: "La decisión más importante para un admin de Rust modded en 2026: Oxide (el incumbent estable) o Carbon (la alternativa moderna 30% más rápida). Análisis a fondo."
---

Si vas a hostear un server modded de Rust, primero tienes que elegir framework: Oxide/uMod (el incumbent desde 2014) o Carbon (la alternativa moderna desde 2022). La decisión define tu boot time, tu RAM consumption, qué plugins tienes disponibles y dónde buscas help cuando algo se rompe. Esta comparativa va a fondo porque la elección amortigua 6-12 meses de uso del server.

## Lo básico de cada uno

**Oxide/uMod** existe desde 2014, es open-source, free, y mantenido por el uMod team. Hookea eventos del juego (player connect, entity spawn, damage) y permite a plugins en C# modificar comportamiento. El repositorio en umod.org tiene 1400+ plugins gratis, todos open-source. Para 2026, ~90% de servers modded de Rust corren Oxide. Es el default en hosts (Pterodactyl, Shockbyte, RocketNode tienen templates Oxide one-click).

**Carbon** existe desde 2022, también open-source, free, mantenido por Carbon Community. Diseñado desde el inicio para ser Oxide-compatible (corre los mismos plugins .cs) pero con boot times 30-40% más rápidos, menor RAM consumption y features nuevas que Oxide no expone. Soporta plugins de uMod y de Codefling con soporte first-class. Para 2026, es la elección de muchos servers nuevos, especialmente heavy-modded.

## Performance: la razón principal por la que mover

Los benchmarks 2026 muestran:

- **Boot time**: Carbon arranca 30-40% más rápido que Oxide. En servers chicos (5-10 plugins), la diferencia es 5-10 segundos — invisible. En servers heavy-modded (50+ plugins), la diferencia es 3-5 minutos vs 30-60 segundos — material.
- **RAM consumption**: Carbon usa 1-2GB menos de RAM en servers grandes. En hosts con tier-limited RAM ($20-40/mes para 8GB), 1-2GB de margin pueden ser la diferencia entre crash y estabilidad.
- **Hot reload**: Carbon soporta hot reload de plugins más confiable. Oxide a veces requiere full restart cuando un plugin se update.

Si tu server es chico, la performance difference es invisible y la elección se cae por otros factores. Si tu server es grande, Carbon es la elección obvia.

## Plugin compatibility: el 99% rule

Carbon corre 99% de los plugins escritos para Oxide sin modificación. El ~1% incompatible son:

- Plugins que dependen de Oxide internals (rare).
- Plugins muy viejos (2017-2019) que el dev abandonó y nunca actualizó a APIs modernas.
- Plugins que hacen monkey-patching profundo del framework.

Para 99% de servers, todos los plugins que ya tienes en Oxide van a correr en Carbon. Para el 1%, hay que validar plugin-por-plugin antes de migrar production.

Adicional: muchos devs ya releasean "Carbon Only" versions de sus plugins con features que Oxide no soporta (advanced hooks, performance-critical optimizations). Esos plugins solo corren en Carbon — Oxide los ignora.

## Codefling integration

Codefling es el marketplace dominante de plugins paid de Rust. Carbon tiene integration nativa: compras un plugin, lo instalas desde el panel de Carbon con un click, updates llegan automático. Oxide soporta plugins de Codefling pero requiere download manual del .cs file y drop en `oxide/plugins/`, sin update notifications.

Si tu server depende de plugins paid de Codefling (típico para servers serios con economy systems, anti-cheat avanzado o custom raid systems), Carbon reduce el friction operational dramáticamente.

## Comunidad y troubleshooting

Oxide tiene ~10 años de community: el Discord oficial tiene miles de members, hay tutorials para cada error common, posts de Reddit cubriendo edge cases, threads de forum de 2018 que siguen siendo accurate. Cuando algo se rompe, search "Oxide error X" en Google encuentra respuesta probablemente.

Carbon tiene ~4 años. Su Discord es activo y la community responde, pero el surface area de docs y troubleshooting es menor. Para problemas raros, puedes terminar siendo el primer reporte.

Para admins experimentados, esto no es problema. Para nuevos, Oxide es más forgiving cuando aprendes.

## Migrar de Oxide a Carbon

La migration es teóricamente fácil pero práctica requiere validation:

1. Backup completo del server (data, plugin configs, oxide folder).
2. Removelo Oxide (no se puede correr ambos a la vez).
3. Install Carbon (executable download desde carbonmod.gg).
4. Copy `oxide/plugins/*` a `carbon/plugins/`. Configs van a `carbon/config/`.
5. Restart, monitorear logs por errors.
6. Validar que cada plugin crítico carga sin errors.

En servers staging es trivial. En production con players activos, una window de mantenimiento de 1-2 horas es prudente para validar todo.

## Cuándo gana cada una

| Caso de uso | Ganador |
|---|---|
| Server nuevo desde cero en 2026 | Carbon |
| Server existente con plugins sin issues | Oxide |
| Server heavy-modded (50+ plugins) | Carbon |
| Admin nuevo sin experiencia previa | Oxide |
| Plugins paid de Codefling | Carbon |
| Plugins muy viejos / nicho | Oxide |
| Hosts con RAM tier-limited | Carbon |
| Documentación y community help | Oxide |

## Recomendación final

Para servers nuevos en 2026: **Carbon**. La performance margin y la integration con Codefling justifican adoptar el framework moderno desde el inicio. Vale la pena absorber la curva de community más chica a cambio de boot speed y future-proofing.

Para servers existentes en Oxide sin issues: **quedate**. No hay urgencia. Si vas a escalar a más de 50 plugins o vas a depender heavy de Codefling, planea migration para el próximo mantenimiento grande. Si tu server corre con 10-15 plugins simples, Oxide está bien forever.

Para admins nuevos aprendiendo el ecosystem: **empieza con Oxide**. Curva más suave por más docs y community. Cuando ya conocés el flow, migrar a Carbon es trivial.

Ambos son free, ambos son open-source, ambos son legitimate elections. La pregunta no es "cuál es mejor" sino "cuál encaja mejor con tu situación".
