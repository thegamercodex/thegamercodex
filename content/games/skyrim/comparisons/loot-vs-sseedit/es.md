---
title: LOOT vs SSEEdit — ordenar plugins o resolver conflicts
description: Comparación corta entre la herramienta de auto-sort de la comunidad y el editor de records xEdit. Por qué necesitas las dos y en qué orden usarlas.
---

Una confusión común para modders nuevos: "¿LOOT no es suficiente? ¿Por qué la gente habla tanto de SSEEdit?". La respuesta corta es que cubren capas distintas del problema de tener una modlist estable. **LOOT** ordena tu load order automáticamente para evitar crashes obvios; **SSEEdit** te deja inspeccionar y resolver los conflicts que LOOT no puede arreglar solo.

## Qué hace LOOT

LOOT (Load Order Optimization Tool) hace una sola cosa muy bien: **ordenar plugins**. Lee los masters y dependencies de cada plugin, consulta una base de datos curada por la comunidad con reglas explícitas ("Mod X debe ir después de Mod Y porque depende de sus records"), y produce un orden de carga seguro.

Sin LOOT, instalar 50 mods y dejar el orden tal cual quedó al instalar es receta para crashes al lanzar, NPCs sin cabeza, items invisibles y bugs aleatorios. Con LOOT, el orden cumple con las dependencies básicas y la mayoría de modlists chicas funcionan al primer intento.

También avisa de:
- Plugins sucios (ITM/UDR) que necesitan limpiarse.
- Masters faltantes.
- Conflicts conocidos entre mods populares.
- Plugins desordenados que no logra ordenar solo.

Pero LOOT **no resuelve los conflicts**, solo los señala.

## Qué hace SSEEdit

SSEEdit es un editor de records. Cuando LOOT te dice "Mod A y Mod B tienen records en conflicto, podría haber problemas" — SSEEdit es donde abres ambos plugins, ves el conflict en detalle y decides qué hacer:

- Forwardear el record ganador a un parche manual.
- Limpiar el plugin con Quick Auto Clean.
- Escribir un parche de compatibilidad nuevo.
- Investigar por qué un mod hace algo raro en el juego.

Es la herramienta que LOOT recomienda implícitamente cuando dice "este conflict requiere atención manual".

## El workflow estándar

La secuencia típica al agregar mods nuevos:

1. **Instalar mod** con tu mod manager (MO2 o Vortex).
2. **Correr LOOT** para que ordene los plugins automáticamente.
3. **Revisar las warnings de LOOT** — plugins sucios, masters faltantes, conflicts conocidos.
4. **Abrir SSEEdit** para limpiar lo que LOOT marcó como sucio y escribir parches para los conflicts que requieren atención.
5. **Jugar** y debug en SSEEdit si aparece algún issue.

Cada herramienta es un eslabón distinto. Saltarse LOOT te deja con orden manual frágil; saltarse SSEEdit te deja con conflicts sin resolver que LOOT no puede arreglar solo.

## ¿Y si solo tengo una?

- **LOOT solo**: funciona para modlists muy chicas (10-20 mods sin conflicts complicados). Te previene crashes obvios pero no te ayuda cuando dos mods hacen lo mismo de manera incompatible.
- **SSEEdit solo**: Puedes ordenar plugins manualmente leyendo dependencies, pero es propenso a errores y lento. Para todo lo demás SSEEdit sí cubre.

En la práctica los modders serios tienen **ambos en su carpeta de tools** y los corren en distinto momento del workflow.

## Lo que ninguno de los dos hace

Ni LOOT ni SSEEdit instalan mods (eso es MO2 o Vortex), generan LODs (DynDOLOD), patchean animaciones (Nemesis), automatizan parches recurrentes (Synthesis), ni resuelven leveled lists merge (Synthesis o el Leveled List Patcher de SSEEdit). Son piezas en un pipeline más grande.

## En resumen

- **LOOT**: auto-sort de plugins. Lo corres seguido.
- **SSEEdit**: editor y patcher de records. Lo corres cuando hay conflicts o necesitas limpiar.

No son competidores: son consecutivos. LOOT primero, SSEEdit después.
