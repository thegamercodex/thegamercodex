---
title: Exilence CE
description: Aplicación de escritorio que calcula tu net worth en tiempo real en Path of Exile, te muestra income por hora con snapshots históricos, y permite agrupar la wealth de varios jugadores en una sesión compartida.
quickTake: La herramienta de referencia para cualquier jugador que quiera saber cuánto realmente está ganando por hora con su strategy de farming. La curva inicial existe, pero una vez configurada se vuelve invisible y te da datos que cambian decisiones reales sobre cómo juegas.
---

## Qué es

Exilence CE (Community Edition) es una aplicación de escritorio que se conecta con la API pública de Path of Exile y la API de poe.ninja para calcular en tiempo casi real cuánto valen tu personaje, inventario y stash tabs combinados, expresado en chaos orbs y divine orbs. Toma snapshots periódicos de tu wealth y los grafica a lo largo del tiempo, permitiéndote ver income por hora, profit por sesión, y desglose por categorías de items.

El proyecto es el sucesor comunitario directo de **Exilence Next**, creado originalmente por Viktor Gullmark, quien dejó de mantenerlo en septiembre de 2022. Un grupo de la comunidad forkeó el código bajo la organización exilence-ce en GitHub y continuó el desarrollo. La última versión estable es v1.2.11 (febrero 2025), con soporte para Settlers of Kalguur, Necropolis y leagues anteriores.

Es software libre, licenciado bajo Creative Commons BY-NC 3.0, disponible para Windows, macOS y Linux.

## Qué problema resuelve

Path of Exile tiene una economía compleja con docenas de currencies, miles de uniques con precios variables, items rare con valor difícil de estimar, stack sizes de divines fluctuando contra chaos orbs, y un mercado que cambia día a día durante las primeras semanas de cada liga. Saber cuánto vales realmente requeriría price-checkear manualmente cada item de tu stash, calcular sumas, y repetir el proceso constantemente. Es inviable.

Más allá de la valoración estática, hay un problema todavía más importante: **los farmers no saben cuánto están ganando por hora con su strategy actual**. Sin tracking sistemático, las decisiones sobre qué farmear se toman por intuición ("siento que estoy ganando bien con maps juicy") y no por datos. Cambiar de strategy requiere semanas para "sentir" la diferencia, y muchos jugadores se quedan atascados en strategies subóptimos sin saberlo.

Exilence CE resuelve ambos problemas. Te dice cuánto vales ahora, cuánto valías hace una hora, y por extensión cuánto estás ganando. Con esos datos, comparar dos strategies de farming pasa de ser una sensación a ser un experimento medible: una hora con strategy A, una hora con strategy B, y los números deciden.

## Para qué la usa la gente

Los casos típicos de uso:

**Tracking de income personal por hora.** El uso #1 históricamente. Empiezas la sesión, le das play al timer, farmeas tu contenido habitual durante una o dos horas, y al final ves exactamente cuántos chaos/divines generaste por hora. Esto cambia decisiones de strategy.

**Comparación de strategies de farming.** Pruebas Heist durante una hora, después maps con sextants durante otra, después delve durante otra. Los gráficos dejan claro qué te paga mejor con tu nivel actual de inversión y tu build.

**Sesiones de party tracking.** Si farmeas con amigos, todos pueden conectarse al mismo grupo de Exilence y ver wealth combinada del grupo, distribución por miembro, y income agregado. Útil para grupos que dividen botín.

**Snapshots históricos para analizar progresión de liga.** Algunos jugadores usan Exilence durante toda la liga y al final tienen un gráfico de su curva de wealth, útil para entender cuándo dieron saltos grandes y por qué.

**Validación de drop strategies.** Cuando alguien dice "este strategy genera 50 div/hour", puedes verificarlo en tu propia cuenta antes de invertir muchos divines en setear el strategy.

## Diferenciación con poe.ninja y PoE Trade Oficial

Estas tres herramientas tocan el ecosistema económico pero hacen cosas distintas:

**poe.ninja** te dice cuánto valen los items en el mercado global. Es información de precios públicos para todos los jugadores. No conoce tu stash.

**PoE Trade Oficial** es donde compras y vendes items individuales. No agrega valor ni hace tracking, es transaccional.

**Exilence CE** es la única que conoce tu stash personal, calcula tu wealth privada, y trackea cómo cambia con el tiempo. Usa los precios de poe.ninja como referencia (de hecho, depende de su API), pero la información que produce es individual y temporal: tu net worth, tu income, tu progresión.

Las tres se complementan. poe.ninja te da contexto de mercado, PoE Trade ejecuta tus transacciones, Exilence mide cómo todo eso impacta en tu economía personal.

## Limitaciones honestas

**El ritmo de updates es lento.** La última release oficial es v1.2.11 de febrero 2025. El fork comunitario está vivo (issues abiertos, mantenedores presentes), pero no tiene la cadencia de releases que tenía Exilence Next en sus mejores años. Esto es relevante porque cuando GGG agrega nuevos tipos de items (runes, allflame embers, coffins, etc.), Exilence necesita una update para reconocerlos. Si juegas en una liga muy reciente, algunos items pueden no aparecer en el cálculo hasta que salga el siguiente patch.

**Depende de la API de poe.ninja.** Si poe.ninja cambia su estructura o cae temporalmente, Exilence no puede pricear nada. Esto pasó varias veces históricamente, y aunque la dependencia es estable, no es 100% libre de riesgo.

**Configuración inicial tiene curva.** Tienes que generar un POESESSID (token de sesión de tu cuenta), seleccionar qué stash tabs incluir, qué league trackear, y configurar perfiles si juegas con varios personajes. La primera vez toma 15-20 minutos. Después es invisible.

**No funciona con SSF cerrado.** Solid Self Found técnicamente sí (la API funciona igual), pero la utilidad principal del tool —comparar precios con el mercado— pierde sentido cuando el mercado no es tu mercado.

**Soporte de Linux/macOS imperfecto.** Aunque hay builds, históricamente las plataformas no-Windows reciben menos testing. Puede haber bugs específicos que tarden más en arreglarse.

**Tu wealth se vuelve trackeable.** Si tu sesión de Exilence está pública (en un grupo con otros), técnicamente compartes información de tu wealth con esa party. Para la mayoría no es problema, pero si juegas con desconocidos en grupos públicos de Exilence, considera lo que estás compartiendo.

## Cómo se usa en la práctica

El flujo de un farmer establecido:

1. Antes de la sesión, abre Exilence CE en background.
2. Verifica que el snapshot inicial es correcto (su net worth actual coincide con su intuición).
3. Empieza a farmear su strategy.
4. Cada 15-30 minutos, Exilence toma un snapshot automático y actualiza el gráfico de income.
5. Al final de la sesión, mira los números: cuánto generó, qué items específicos contribuyeron más al delta, si hubo outliers (un drop de unique caro que infla el promedio).
6. Compara con sesiones previas del mismo strategy o con strategies alternativos para tomar decisiones de qué hacer la próxima vez.

Para tracking de liga completa, simplemente lo deja correr todo el tiempo y al final tiene la curva completa.

## Cómo empezar

Descarga el installer correspondiente a tu OS desde la página de releases en github.com/exilence-ce/exilence-ce/releases. Instala la app, ábrela, y sigue el wizard inicial:

1. Loguea con tu cuenta de Path of Exile (te pide tu POESESSID, que sacas de las cookies de pathofexile.com).
2. Selecciona la liga actual.
3. Marca las stash tabs que quieres incluir en el cálculo (recomendado: todas las que tengan currency, uniques, fragments, y items valuables; excluí leveling tabs y junk tabs).
4. Espera el primer snapshot (puede tomar 1-2 minutos según cuánto stash tengas).
5. Confirma que el net worth mostrado es razonable.

A partir de ahí la app se actualiza sola. Para uso avanzado, lee la documentación en el repo y considera unirte al Discord oficial donde la comunidad resuelve dudas y reporta issues.