---
title: "tarnished.dev Build Planner"
description: "Planificador moderno de Elden Ring con búsqueda fuzzy de items, URLs compartibles por build y soporte completo de Shadow of the Erdtree."
quickTake: "El planner con la mejor UX del catálogo — buscar un arma o talisman es escribir las primeras letras y el item aparece. Si pasas 30 minutos planeando, esa fricción reducida se nota."
---

## Qué es

tarnished.dev es un build planner moderno mantenido por un dev independiente. Vive en `tarnished.dev/build-planner` y cubre el juego base + Shadow of the Erdtree. Es gratis, sin ads, sin login. La data se actualiza con cada balance patch importante (típicamente dentro de 1-2 semanas del release).

La UI está construida con UX en mente: cards de items, drag-and-drop opcional para swap, paneles colapsables. Cada build genera una URL compartible que preserva todo el state.

## Qué problema resuelve

Los planners clásicos (Mugen Monkey, EIP) son funcionales pero la fricción de buscar items es alta — dropdowns largos, scrolls infinitos. tarnished.dev resuelve esto con búsqueda fuzzy: tipeas "blood" y aparecen Bloodhound's Fang, Mohgwyn's Sacred Spear, Bloody Helice, etc.

También resuelve el problema de compartir builds: la URL es estable, copiar-pegar a Discord o Reddit funciona, y cualquiera la abre sin instalar nada.

## Diferenciación

Contra EIP gana en UX (búsqueda fuzzy, animaciones suaves) y en velocidad de iteración. Pierde en cobertura de items raros — algunos items del DLC tardaron en aparecer post-launch, aunque a 2026 ya está completo. Contra Mugen Monkey gana en todo lo visual pero pierde en el starting class optimizer (feature única de Mugen).

## Para qué la usa la gente

**Iteración rápida**: probar 5 variantes de una build en 10 minutos sin pelearte con dropdowns.

**Builds compartidas en Discord**: la URL es la forma standard de pasarle una build a un amigo.

**Validación visual**: ver tu Tarnished con el equipo completo, talismans visibles, en una sola pantalla.

**Planning de DLC**: con Scadutree Fragments integrados, planeas tu nivel efectivo del Realm of Shadow.

**Mobile-friendly**: el responsive funciona, podes editar builds desde el teléfono.

## Para quién NO es esta herramienta

Si tu prioridad es optimización mínima de level total (PvP capped), Mugen Monkey lo hace mejor con su class optimizer.

Si quieres data 100% completa de items obscuros, EIP suele tener mejor cobertura de longtail.

Si te molestan los sitios JS-heavy, el cold start de tarnished.dev es lento — ~2 segundos para renderizar la UI inicial.

## Cómo se usa en la práctica

1. Abre `tarnished.dev/build-planner`.
2. Selecciona starting class del dropdown superior.
3. Sube stats con los sliders o tipeando el valor.
4. Para equipar items, click en el slot vacío → barra de búsqueda → tipea las primeras letras del nombre.
5. Repite para todos los slots (weapons, armor, talismans, sorceries, incantations).
6. Verifica AR/defenses en el panel lateral.
7. Copia la URL — toda la build queda encoded en el path.

## Limitaciones honestas

**Cold start lento**: el bundle JS pesa, primer load tarda más que Mugen.

**No hay starting class optimizer**: Tienes que probar manualmente o consultar Mugen.

**Sin frame data**: para frame-perfect counter-play o invincibility frames de rolls/dodges, mejor consultar Emilia's Frame Data Explorer.

**Mantenido por una persona**: el ritmo de updates es bueno pero puede pausar si el dev está ocupado.

**Sin export JSON**: la URL es el único formato de export.

## Cómo empezar

1. Visita `tarnished.dev/build-planner`.
2. Elige starting class.
3. Define el target level (NG cap o PvP 125/150).
4. Itera stats y equipo hasta llegar al spread deseado.
5. Copia la URL final y guárdala.
