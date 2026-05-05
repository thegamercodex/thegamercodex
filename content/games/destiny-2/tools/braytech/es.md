---
title: "Braytech"
description: "Aplicación web open-source para seguir bounties, triumphs, vendor inventories y collections en Destiny 2."
quickTake: "Si tu sesión semanal arranca con 'qué me falta esta semana', Braytech te lo dice todo en una pantalla. Diseño limpio, sin ads, y open-source — un raro combo en el ecosistema de tools de Destiny 2."
---

## Qué es

Braytech es una aplicación web open-source para Destiny 2 mantenida por Tom Chapman (justrealmilk en GitHub) bajo licencia GPL-3.0. Free, sin ads, login opcional vía OAuth de Bungie. Activa desde 2018.

Su foco está en **tracking de progresión**: vendor checklists, bounty tracker, triumph progress, collections, lost sectors rotation, y trackers semanales (Nightfall, Empire Hunts, etc.). Lo que distingue a Braytech del resto es la combinación de cobertura amplia + UI limpia + filosofía open-source sin compromisos comerciales.

## Qué problema resuelve

Destiny 2 tiene tantos sistemas paralelos de progresión que mantenerse al día desde dentro del juego es difícil. Vendor checklists (cada NPC tiene items rotativos), triumphs (miles de logros), collections (todo lo que has obtenido alguna vez), bounties activos, lost sector rotation. Cada uno está en una pestaña distinta del juego, sin overview unificado.

Braytech consolida todo eso en una pantalla buscable. Abrís el sitio y ves: qué triumphs te faltan para X título, qué inventory tiene Banshee esta semana, qué bounties activos tenés, qué lost sector está hoy en master. La toma de decisiones de "qué hacer en esta sesión" se simplifica.

## Diferenciación

Frente a D2 Checklist (la alternativa más cercana), Braytech tiene **mejor UX y diseño**, pero D2 Checklist tiene **más amplitud en checklists semanales muy granulares**. Los dos sirven al mismo flujo pero con énfasis distinto: Braytech para vista general bonita, D2 Checklist para auditoría exhaustiva.

Frente a Destiny Recipes (especializada en títulos), Braytech cubre títulos también pero con menos profundidad en cómo desbloquear cada uno. Si tu objetivo principal es chase de un título específico, Recipes gana.

Frente a la app Companion oficial, Braytech tiene mejor búsqueda y customización de checklists. La oficial gana en integración con clan y fireteam finder.

## Para qué la usa la gente

**Vendor checklists**: ver qué items tiene cada vendor (Banshee, Spider, Saint-14) y cuáles ya tenés en collections. Ahorra el trip al juego.

**Triumph progress**: filtrar triumphs por seal/título (Conqueror, Flawless, Dredgen) y ver % de completion. Útil para chase de títulos.

**Bounty tracker**: ver bounties activos y completados sin entrar al juego. Útil para planning de sesión.

**Lost sector rotation**: hoy qué LS está en master y qué tipo de exotic dropea (head, arms, chest, legs).

**Collections gap analysis**: filtrar por slot y ver qué armas o armaduras nunca obtuviste. Para completionists.

## Para quién NO es esta herramienta

Si jugás Destiny 2 sin completionist drive (sólo te interesan raids o PvP), Braytech tiene utility limitada. Su valor está en chase de seals, triumphs y collections.

Si querés algo súper minimal con sólo "qué hago hoy", Where Is Xur + un checklist resumido pueden ser suficientes. Braytech es opt-in para auditoría completa.

Si no tenés cuenta Bungie.net pública, mucha de la funcionalidad personal está bloqueada (aunque las páginas globales — vendor inventories, lost sector rotation — funcionan sin login).

## Cómo se usa en la práctica

1. Entrás a `bray.tech`. Sin login podés ver vendor inventories y lost sector rotation.
2. Para tracking personal: link con Bungie OAuth. La página se llena con tu progresión específica.
3. Pestaña "Vendors" muestra cada NPC con su inventory rotativo. Filtros para "no tengo aún".
4. Pestaña "Triumphs" filtra por seal. Click en un seal para ver desglose de triumphs requeridos.
5. Pestaña "Collections" para gap analysis. Útil para completionists chasing roll specific armas.

## Limitaciones honestas

**Updates pueden lagear post-patch**. Bungie cambia datos del manifest y Braytech (como cualquier tool no oficial) tarda horas o días en reflejar. Para Day-1 después de expansión, la info puede ser preliminar.

**Cobertura no exhaustiva en cada sub-feature**. Braytech intenta hacer mucho — algunos checklists semanales muy específicos están mejor en D2 Checklist.

**Solo en inglés**. Sin localización a español ni otros idiomas.

**Mantenimiento depende del owner solo**. Es proyecto de un dev, sin equipo. Riesgo de futuro: si Tom deja de mantenerlo, no hay garantía de continuidad. Hasta hoy (2026) sigue activo.

**Diseño minimalista puede ser cold para algunos**. La UI prioriza función sobre warmth — no hay decoración, todo es grilla y data. Si preferís UIs más amigables, otras tools ganan en feel.

## Cómo empezar

Entrá a `bray.tech`. Sin login, navegá vendor inventories de la semana actual. Después linkeá tu Bungie con OAuth y revisá triumphs por seal — encontrás un par que estás cerca de completar y nunca habías notado. Esa es la propuesta de valor: visibility sobre cosas que el juego esconde.
