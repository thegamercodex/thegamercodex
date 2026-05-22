---
title: Nexus Mods (Valheim) vs Thunderstore (Valheim) — primary vs secondary hub
description: Comparativa entre los dos repositorios de mods de Valheim. Thunderstore es la primary platform desde 2021; Nexus juega un rol secundario distinto al que tiene en otros juegos.
---

Para Valheim hay dos repositorios de mods, pero la pregunta no es "cuál usar" — es **cuándo usar cuál**. **Thunderstore** es la primary platform donde vive el 95% del modding moderno. **Nexus** es la opción secundaria, útil para casos específicos donde Thunderstore no tiene lo que buscas.

## El estado actual del ecosistema

En 2021, cuando Valheim salió, no estaba claro cuál iba a ser el hub primario. Algunos mods iniciales fueron a Nexus por hábito de la comunidad de modding clásica. Otros a Thunderstore por integración con r2modman.

En 2026, el ecosistema **gravitó decisivamente a Thunderstore** por dos razones técnicas:

1. **API estable para managers**. Thunderstore fue diseñado para ser consumido por mod managers. r2modman/Gale/TMM hablan con Thunderstore directamente vía API JSON con dependency resolution automática. Nexus es scraping-based o requiere Vortex como manager separado.
2. **Free tier ilimitado**. Thunderstore no tiene rate limits ni paywalls. Nexus free tier limita download speeds y obliga a wait timers — Premium ($4-5/mes) los elimina pero es subscription.

El resultado: ~10,000+ paquetes en Thunderstore Valheim vs ~2,000 en Nexus Valheim. Y esa proporción aumenta cada mes.

## Cuándo Thunderstore es la respuesta obvia

Casi siempre. Específicamente:

- **Cualquier mod de QoL, gameplay o building publicado en 2023+**.
- **Frameworks** (BepInEx, Jotunn) — viven en Thunderstore como dependencies declaradas.
- **Mods con dependencies complejas** (Therzie's stack, EpicLoot ecosystem) — Thunderstore resuelve las dependencies por vos.
- **Modlists que quieres compartir con amigos** — formato de profile en Thunderstore es lingua franca.

Para 95% de modlists de Valheim, Thunderstore cubre todo lo que necesitas sin tocar Nexus.

## Cuándo Nexus sigue siendo relevante

Casos específicos donde Nexus tiene cobertura que Thunderstore no:

**Texture packs HD y skins visuales**: la mayoría de retextures de armor, weapons y terrain — incluyendo packs profesionales tipo Willybach's HD — viven en Nexus históricamente. Por la naturaleza del tipo de mod (archivos grandes, assets visuales), no migraron.

**Modelos 3D y armor packs**: similar argumento. Skin packs con espadas con runas, armaduras alternativas, banner designs — Nexus tiene más catálogo.

**Mods abandonados de 2021-2022**: cuando un mod era de la era Nexus y el autor no lo portó, Nexus es el único lugar donde existe. Para arqueología o referencia histórica, vale la pena.

**Comunidades nicho**: algunos servers RP o modders sub-culturales prefieren Nexus por costumbre. Mods muy específicos pueden estar solo ahí.

## Friction del onboarding

**Thunderstore** está optimizado para no friction. No hace falta cuenta para browse o download. Tu mod manager (r2modman/Gale/TMM) se encarga de todo automáticamente.

**Nexus** requiere:
- Crear cuenta gratis para descargar (browse sin login funciona).
- Manejar rate limits del free tier (waits entre downloads).
- Instalación a menudo manual o vía Vortex.
- Algunos mods requieren mover archivos específicos siguiendo instrucciones del autor.

Para someone arrancando a modear, Nexus se siente más artesanal y más lento.

## Mod managers: la diferencia clave

**Thunderstore**: r2modman/Gale/TMM (todos los managers principales) lo consumen nativo. Click → instala.

**Nexus**: solo Vortex (de Nexus Mods) integra completamente. r2modman/Gale/TMM no descargan de Nexus. Si quieres un mod de Nexus, descargas manual o usas Vortex en paralelo.

Mantener Vortex + r2modman simultáneo es overhead — tracking manual de qué viene de dónde, conflicts potenciales, profile sync no funciona entre managers. Por eso la mayoría mantiene el primary modlist 100% en Thunderstore.

## Cuándo gana cada uno

| Escenario | Mejor opción |
|---|---|
| Mods QoL, gameplay, building nuevos | Thunderstore |
| Texture packs HD y skins visuales | Nexus |
| Free tier sin rate limits | Thunderstore |
| Mods abandonados de 2021-2022 | Nexus |
| Integración con mod manager (un click) | Thunderstore |
| Modlists compartidas con amigos | Thunderstore |
| Cuenta no requerida para descargar | Thunderstore |
| Buscar un mod específico que ya no está en Thunderstore | Nexus |

## Veredicto

No es una decisión real para 2026: **Thunderstore es la primary y Nexus es secondary**.

Tu workflow base debería ser:
1. Buscar el mod que quieres primero en Thunderstore.
2. Si no está, revisar Nexus.
3. Si Nexus tampoco, GitHub raw o el Discord del autor.

Si terminas dependiendo de varios mods de Nexus, puedes correr Vortex en paralelo a r2modman/Gale, pero idealmente mantené Thunderstore como source primary y trata Nexus como hub auxiliar.

Para users que vienen de Skyrim o Fallout donde Nexus es la primary, el flip mental cuesta. Pero para Valheim, en 2026, Thunderstore ganó esa pelea.
