---
title: "Fribbels Honkai Star Rail Optimizer"
description: "Optimizador open source de relics y planificador completo para Honkai: Star Rail. Importa tu roster vía OCR o HoYoLAB y resuelve la combinación ideal de relics por personaje."
quickTake: "Si quieres optimizar relics, esto es la herramienta. Ningún otro tool del scene cubre tantos vectores con la profundidad de Fribbels."
---

## Qué es

Fribbels HSR Optimizer es una aplicación web (también disponible como descarga) que resuelve el problema combinatorio de elegir relics óptimos para cada personaje de Honkai: Star Rail. Importa tu roster completo a través de un escáner OCR (le pasas screenshots de tus relics y los detecta) o vía la API pública de HoYoLAB.

Una vez tu data está en el sistema, el optimizer evalúa todas las combinaciones posibles de 6 piezas de relic para maximizar el daño o el criterio que definas, y te devuelve el ranking de mejores setups con métricas concretas (EHP, daño esperado, breakpoints).

Es proyecto open source bajo licencia MIT, mantenido por fribbels y contribuyentes de la comunidad. Es la herramienta estándar del scene de HSR para optimización de relics: la mayoría de creators, theorycrafters y guías hacen referencia directa a sus métricas.

## Qué problema resuelve

Honkai: Star Rail tiene un sistema de relics con seis slots, dos sets activos simultáneos, main stats variables, cuatro substats por pieza, y rolls que mejoran con upgrades. La cantidad de combinaciones reales en un inventario maduro se cuenta en millones. Elegir "a ojo" qué pieza poner en qué personaje deja daño en la mesa de forma sistemática.

Antes de Fribbels, la única alternativa era hacer cálculos manuales en hojas de cálculo o aceptar la recomendación genérica de una guía sin verificar si tus piezas concretas justifican esa elección. Ambas opciones son insuficientes: el cálculo manual no escala, y la guía genérica no sabe qué tienes realmente en tu inventario.

Fribbels resuelve esto procesando todas las combinaciones reales que tu inventario permite, ordenándolas por la métrica que importa (daño esperado, EHP para tanks, energía para supports), y mostrándote no solo cuál es la mejor sino cuánto mejor es vs la segunda opción.

## Diferenciación (con tools de cluster similar)

El cluster competitivo incluye relic scorers integrados en otros sitios (Prydwen tiene uno básico, varios scanners independientes existen) y calculadores de daño puntuales. Lo que distingue a Fribbels es que cubre todo el ciclo dentro de la misma herramienta:

**Relic scanner OCR nativo** que extrae tu inventario completo desde screenshots, sin depender de servicios externos.

**Optimizer que evalúa combinaciones reales**, no recomendaciones plantilla. Te dice qué hacer con las piezas que ya tienes.

**Damage calculator integrado** para validar el resultado del optimizer contra rotaciones específicas.

**Relic scorer 0-100** que evalúa cada pieza individualmente para decidir qué farmear vs qué descartar.

**Warp planner y character planner** para presupuesto de jades y recursos.

Otros tools cubren uno o dos de estos vectores. Fribbels los cubre todos con la misma data, lo cual elimina el costo de transferir información manualmente entre apps.

## Para qué la usa la gente

**Optimizar relics de un personaje específico**: el flujo más común. Acabas de pullear o subir un personaje, importas tu inventario, ejecutas el optimizer y obtienes la mejor combinación de relics de tus piezas actuales.

**Decidir qué relics descartar**: el scorer 0-100 ayuda a limpiar inventario. Piezas con score bajo en todos tus personajes son candidatas seguras a descartar sin perder valor.

**Comparar builds antes de farmear**: si dudas entre dos sets para un personaje, el optimizer te muestra cuánto daño extra ganarías farmeando el segundo set en lugar de quedarte con lo que tienes.

**Planificar warps y recursos**: el warp planner estima cuántos jades necesitas para pity garantizado en un banner específico. El character planner proyecta materiales de ascensión y trace para llegar a un objetivo.

**Comparar tu build con leaderboards**: la sección de leaderboards permite ver cómo se compara tu personaje contra otros del mismo arquetipo, útil para validar que tu setup esté en línea con el ceiling realista.

## Para quién NO es esta herramienta

Fribbels asume que entiendes los conceptos básicos del juego: qué son main stats, qué hace cada set de relic, qué significa breakpoint de speed, qué rotación tiene tu personaje. Si estás empezando con HSR y todavía estás aprendiendo qué hace cada pieza, la interfaz densa puede ser abrumadora.

Tampoco es la herramienta correcta si solo quieres una recomendación rápida tipo "qué relic poner en Acheron". Para eso es más útil consultar Prydwen o Game8, que dan recomendaciones tier-list-style sin requerir importar tu inventario.

Y si juegas casual y no te importa exprimir el último 10-15% de daño, la inversión de tiempo en escanear relics y configurar el optimizer no se justifica. Fribbels brilla cuando ya hiciste el progreso básico y quieres convertir tu inventario en performance real.

## Cómo se usa en la práctica

El flujo inicial toma 10-20 minutos la primera vez:

1. Abre la web app o descarga la versión standalone.

2. Importa tu inventario vía OCR (tomas screenshots de tus relics in-game y los subes) o conecta con HoYoLAB API si tu perfil es público.

3. Verifica que el roster importado se vea correcto (revisa main stats y substats de algunas piezas para confirmar precisión del OCR).

4. Selecciona el personaje que quieres optimizar.

5. Ajusta los filtros y métricas objetivo (sets permitidos, breakpoints de speed mínimo, modo de daño esperado o EHP según el rol).

6. Ejecuta el optimizer y revisa los top resultados.

7. Equipa la combinación recomendada en el juego.

Una vez tu inventario está importado, las re-optimizaciones de cualquier personaje toman segundos. El costo está en mantener el inventario actualizado: cuando farmees relics nuevas conviene re-escanear o re-importar periódicamente.

## Limitaciones honestas

**El OCR no es perfecto**. Substats con valores similares ocasionalmente se confunden, y hay que revisar manualmente las piezas críticas. La integración con HoYoLAB es más confiable cuando funciona, pero requiere que tu perfil sea público.

**Curva de aprendizaje real**. La interfaz tiene muchísimos parámetros y la primera vez puede ser intimidante. Los defaults son razonables pero entender qué cambiar (y por qué) requiere leer documentación o seguir un tutorial.

**El "óptimo" depende de qué optimizas**. Maximizar daño teórico no siempre maximiza daño real en gameplay. Para personajes con rotaciones complejas o que dependen de teammates, los resultados del optimizer son una guía, no una verdad absoluta.

**Cambios de meta no son automáticos**. Cuando sale un set nuevo o un personaje cambia drásticamente, las recomendaciones de la comunidad pueden tardar en propagarse. El optimizer respeta los filtros que pones, no decide por ti qué sets considerar.

**Requiere mantenimiento del inventario**. Si dejas de actualizar tus relics, las recomendaciones se vuelven obsoletas. No hay sync automático con el juego en tiempo real (HoYoverse no expone esa API).

**Web app puede ir lenta en inventarios muy grandes**. Con 500+ relics importadas, ciertas búsquedas y optimizaciones tardan más. La versión standalone descargable es más rápida en estos casos.

## Cómo empezar

No necesitas crear cuenta ni pagar nada. Vas a `fribbels.github.io/hsr-optimizer/` directamente desde el navegador.

Para tu primera sesión, recomendación:

1. Empieza importando inventario vía screenshots OCR (más rápido para probar) y verifica que el resultado se vea correcto.

2. Optimiza primero a tu DPS principal, que es donde más rinde el ejercicio.

3. Antes de creer ciegamente al optimizer, contrasta los resultados con la guía del personaje en Prydwen o KQM para confirmar que el setup tenga sentido en el contexto del meta.

4. Una vez te sientas cómodo, extiende la optimización al resto del roster.

Si en algún momento sientes que la herramienta te abruma, vuelve a un setup más simple (Prydwen para recomendaciones generales) y regresa a Fribbels cuando quieras precisión específica para tu inventario.
