---
title: "Thunderstore (Valheim)"
description: "Repositorio principal de mods de Valheim. Plataforma open-source con API estable, dependency resolution automática y soporte nativo en los mod managers principales del ecosistema (r2modman, Gale, TMM)."
quickTake: "Thunderstore es donde vive el 95% del modding de Valheim. Si arrancas a modear hoy, Thunderstore + r2modman/Gale es tu stack. Nexus existe pero juega papel secundario."
---

## Qué es

Thunderstore es una plataforma de mod hosting open-source orientada a juegos modernos modeable, especialmente los basados en Unity con BepInEx (Risk of Rain 2, Lethal Company, REPO, Valheim, etc.). La versión de Valheim — `thunderstore.io/c/valheim/` — aloja **10,000+ paquetes** organizados por categoría, autor, tags y popularidad.

A diferencia de Nexus Mods, Thunderstore está diseñado desde el inicio para **mod managers**: cada paquete tiene un `manifest.json` con dependencies declaradas, versión semántica estricta, y un endpoint API que los managers consumen para descargas/updates. Por eso r2modman/Gale/TMM funcionan tan limpio con Thunderstore.

Es free, sin rate limits, sin cuenta obligatoria para browse o download (cuenta solo si quieres publicar).

## Qué problema resuelve

El modding tradicional (Nexus-era) tenía fricciones para juegos nuevos con muchos mods coexistiendo:
- **Sin dependency resolution**. Un mod requería "BepInEx + Jotunn + HookGen" y vos tenías que saberlo y instalar a mano.
- **Versioning libre**. Si un mod publicaba v2.0 con breaking changes, mods downstream no se enteraban.
- **Sin API estructurada**. Cada mod manager parseaba HTML de Nexus para automatizar.

Thunderstore resolvió eso:
- **Dependencies declaradas en manifest**. Instalar un mod trae sus dependencies automático.
- **Semver enforcement**. Versions siguen `major.minor.patch` y managers entienden compatibilidad.
- **API JSON pública**. Cualquiera puede consumir el catálogo sin scraping.
- **Verificación community**. Mods pueden marcarse como "moderated" o "verified" por mod team.

Para Valheim, eso significa que un modlist de 50 mods se instala en minutos sin pensar en orden, dependencies, ni conflicts visibles.

## Diferenciación

Frente a **Nexus Mods (Valheim)**: Thunderstore es la primary platform por catálogo y por integración con managers. Nexus tiene texture packs y mods históricos que no migraron.

Frente a **GitHub raw downloads**: GitHub aloja código, no la experiencia user-facing. Para devs, Thunderstore publica builds desde GitHub Actions automáticamente. Para users, Thunderstore es la capa por encima de GitHub.

Frente a **CurseForge**: CurseForge es el equivalente de Thunderstore pero para Minecraft y algunos juegos de Bethesda. No tiene presencia en Valheim.

## Para qué la usa la gente

**Descargar e instalar mods**. La fuente primaria para cualquier mod manager. r2modman/Gale/TMM consumen Thunderstore directamente.

**Browse del catálogo**. Buscar mods por categoría (QoL, Building, Gameplay, Cosmetic, Server-side, etc.), por tags, por autor. Filtros y rankings ayudan a descubrir.

**Publicar tus propios mods**. Si desarrollas un mod, publicar en Thunderstore es free y straightforward. Tu `manifest.json` define metadata, dependencies, descripción, y el sistema publica versiones tras CI build.

**Trackear updates**. La página del mod muestra version history con changelogs. Para sabe si un mod sigue mantenido, mira fecha del último commit.

**Verificar reputación de un mod**. Comments, ratings y "verified" badges del mod team te dan signal sobre calidad. Mods sospechosos se reportan y typically se quitan.

**Investigar dependencies**. La página del mod lista qué otros paquetes necesita y cuáles dependen de él. Útil para entender el grafo de tu modlist.

## Para quién NO es esta herramienta

Si **no modeas Valheim**: irrelevante.

Si solo buscas **texture packs / skins**: Nexus probablemente tiene mejor catálogo en esa vertical específica. Thunderstore tiene algunos pero menos.

Si quieres modear sin **manager** y a mano por filosofía: puedes descargar zips de Thunderstore manualmente, pero pierdes todo el valor del ecosystem. El target real de Thunderstore son los managers.

Si **buscas mods de un juego no-Thunderstore** (Skyrim, etc.): no aplica. Thunderstore no aloja esos juegos.

## Cómo se usa en la práctica

**Como user vía mod manager (recomendado)**:
1. Tu manager (r2modman/Gale/TMM) habla con Thunderstore directamente.
2. En la pestaña "Online" de tu manager, browse, busca y descarga. Cero interacción con el sitio web.

**Como user navegando el sitio**:
1. Anda a `thunderstore.io/c/valheim/`.
2. Browse por categoría o usa search.
3. Click en un mod → ves descripción, screenshots, dependencies, version history.
4. "Download" da el .zip directo, o "Install with Mod Manager" abre tu manager si está configurado.

**Como dev publicando**:
1. Cuenta en Thunderstore.
2. En tu repo de GitHub, configura Thunderstore Action (`GreenTF/upload-thunderstore-package`) en tu CI.
3. En cada release de GitHub, el Action sube el paquete a Thunderstore automáticamente.
4. El paquete necesita `manifest.json` con name, version, deps, etc.

## Limitaciones honestas

**Solo juegos del ecosystem**. Si modeas un juego que no está en Thunderstore (Skyrim, etc.), no aplica.

**Catálogo desorganizado a veces**. Con 10,000+ paquetes, search puede devolver ruido. Filtros mejoran pero la curación community-driven tiene noise inherente.

**Mods abandonados**. Como cualquier hub, muchos paquetes son mods que sus autores no actualizan. Filtrar por "active in last 90 days" requiere checking manual de version history.

**Verification es voluntaria**. No todos los mods están "verified" por el team. La calidad varía.

**No tiene rating system fino**. Stars y downloads count existen, pero no hay sistema robusto de reviews tipo Steam.

## Cómo empezar

**Como user**:
1. Instala r2modman, Gale o TMM (cualquiera de los 3).
2. Tu manager va a comunicarse con Thunderstore automáticamente. No tienes que abrir el sitio.
3. Si quieres browse manual sin manager, anda a `thunderstore.io/c/valheim/`.

**Como dev**:
1. Crea cuenta en Thunderstore.
2. Lee la guía de "Publishing a package" en `thunderstore.io/wiki/`.
3. Estructurá tu mod con `manifest.json` correcto.
4. Sube manual o automatiza vía CI.

Para soporte, el Discord de Thunderstore (`discord.gg/thunderstore`) es el hub principal de la comunidad.
