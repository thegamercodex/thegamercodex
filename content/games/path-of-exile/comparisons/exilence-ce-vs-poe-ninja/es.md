---
title: Exilence CE vs poe.ninja — qué herramienta de economía usar en PoE
description: Comparación corta entre las dos herramientas más usadas de economía en PoE. Una mira el mercado completo, la otra mira tu portfolio.
---

Ambas se llaman "herramientas de economía" pero responden preguntas distintas. **poe.ninja** mira el mercado completo de PoE: agrega precios de todas las listings y muestra valor de currency, ítems, builds y tendencias. **Exilence CE** mira *tu* portfolio: escanea tus stash tabs y calcula cuánto valés, cuánto ganaste esta sesión, y dónde está concentrado tu net worth.

## Alcance: market-wide vs personal

poe.ninja es la referencia comunitaria para precios. Cuando alguien dice "exalt está en 90 chaos esta liga" o "este ítem rankea top 1% de uso entre slayers", el dato viene de poe.ninja. Agrega listings del trade site, las normaliza, y muestra promedios + tendencias por hora/día/liga. También tiene el build browser, que escanea el top 15k de personajes en el ladder y muestra qué builds, skills, ascendancies y unique items están en uso.

Exilence CE hace lo opuesto: se conecta a tu cuenta de PoE, lee tus stash tabs, y aplica los precios de mercado a tu inventario para darte un valor total. Le decís "estas son las tabs que quiero trackear", le das play, y el tool te muestra tu net worth en tiempo real más una gráfica de profit por hora durante la sesión.

## Cuándo usás cada una

**poe.ninja:**
- Decidir cuánto cobrar por algo que vas a listar a vender.
- Saber si vale la pena cambiar de strategy de farming (¿el mercado de div cards explotó esta liga?).
- Investigar el meta: ¿qué builds están dominando? ¿qué uniques son más usados?
- Trackear tendencias macro: precios de chase items, fluctuación de currency, popularity de skills.
- Decidir si una mecánica de farmeo todavía es rentable.

**Exilence CE:**
- Saber qué tan rico sos a nivel quantitative.
- Medir la eficacia real de una sesión de farmeo (¿gané 100 div o solo 20?).
- Identificar dónde está atascado tu valor (¿85% de tu wealth está en una sola tab de currency?).
- Hacer accountability personal: ¿cuánto necesito todavía para comprar ese mirror tier item?
- Comparar entre ligas: si guardás snapshots, ves tu progreso.

## Costos, instalación y privacidad

poe.ninja es web pura, sin login, sin tracking de usuario individual. Solo abrís el browser. Los datos los agrega scraping del trade público; vos no aparecés en sus datos como individuo.

Exilence CE es una app desktop open source (Windows/Mac/Linux). Necesita que vos le des permiso a leer tus stash tabs vía el API público de PoE (igual que cualquier otra tool que conecta con tu cuenta). Tus datos viven en tu PC y en la cuenta cloud opcional del proyecto si querés sync entre dispositivos. Es la sucesora comunitaria de Exilence Next (que el dev original archivó).

## ¿Cuál usar?

Si solo querés información de mercado: **poe.ninja**. Solo browser, sin login, todo lo que necesitás.

Si querés autotracking de tu portfolio: **Exilence CE**. Instalás, conectás cuenta, mirás números crecer.

Pueden funcionar en paralelo: Exilence CE de hecho **usa precios de poe.ninja** para valorar tu portfolio. No son alternativas; son layers distintos sobre el mismo dataset económico.
