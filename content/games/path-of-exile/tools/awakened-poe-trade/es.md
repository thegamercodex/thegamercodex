---
title: "Awakened PoE Trade"
description: "Overlay para Path of Exile que permite hacer price check de items y generar búsquedas en el trade oficial sin salir del juego."
quickTake: "El overlay de trading más usado por la comunidad. Si tradeas seguido, te ahorra horas y reduce drásticamente la fricción de comprar y vender."
---

## Qué es

Awakened PoE Trade (APT) es un overlay que corre en segundo plano mientras juegas Path of Exile. Su función principal es hacer "price check" de items en tiempo real: pasas el mouse sobre un item, presionas un atajo de teclado, y APT te muestra al instante cuánto está costando ese item en el mercado actual.

Además del price check, genera automáticamente búsquedas en el sitio oficial de trade, lee items pegados desde el portapapeles, y se integra con la economía de poe.ninja para datos en tiempo real.

Es un fork community-driven del proyecto original PoE-TradeMacro, mantenido en GitHub bajo licencia MIT.

## Qué problema resuelve

Tradear en Path of Exile sin overlay es lento y tedioso. Tienes que copiar el item desde el juego, abrir el navegador, ir al trade oficial, pegar el item, ajustar filtros, esperar resultados, y volver al juego. Para cada item. Hacerlo 50 veces al día es agotador.

APT colapsa todo ese flujo en un par de teclas. Pasas el mouse sobre un item del juego, presionas Ctrl+D (o el atajo que configures), y aparece una ventana flotante mostrando precios. Si quieres ver más detalles o comprar items similares, otro atajo abre la búsqueda completa en el navegador con los filtros ya configurados.

Lo que toma minutos sin APT, toma segundos con APT.

## Para qué la usa la gente

**Price checking diario**: el caso más común. Recoges un item raro, no sabes cuánto vale, presionas el atajo, ves el precio en pantalla. Decides si vale la pena venderlo, conservarlo, o vendorearlo.

**Comprar items para builds**: estás armando una build que necesita una pieza específica. Con APT abres la búsqueda con los filtros que quieres directamente desde el juego, sin tener que configurar manualmente cada filtro en el sitio web.

**Vender lo que dropea**: cuando recoges items de calidad, APT te ayuda a identificar rápido cuáles tienen valor de venta y cuáles no. Multiplica la eficiencia de procesar el loot al volver al stash.

**Stash valuation**: algunas funciones avanzadas te permiten valuar todo tu stash de un vistazo, identificando qué items deberías estar vendiendo.

**Trading masivo**: para jugadores que viven del trading (currency flipping, bulk buying), APT es prácticamente obligatorio. Sin overlay no es competitivo.

## Cómo se usa en la práctica

Después de instalar APT y configurarlo (sobre todo el atajo principal de price check, que recomiendo dejar en Ctrl+D), el flujo es así:

Estás jugando, identificas un item del piso o de tu inventario. Pasas el mouse sobre él. Presionas Ctrl+D. Aparece una ventana flotante con los precios del item según el mercado. Decides qué hacer con la información.

Para búsquedas más complejas (por ejemplo, querer comprar una versión similar pero con stats específicos), otro atajo abre el trade oficial en tu navegador con la búsqueda preconfigurada. Ajustas los filtros que necesites y compras.

El resto de funciones (stash valuation, integración con poe.ninja, settings de filtros) se descubren con el tiempo. La mayoría de jugadores usa solo el price check básico y eso ya cubre el 90% del valor.

## Limitaciones honestas

**No funciona oficialmente en macOS**. Esto es importante: si juegas PoE en Mac (vía la versión de macOS o emulación), APT no es opción confiable. Solo soporta Windows y Linux nativamente.

La instalación inicial requiere un poco más de configuración que la mayoría de tools. Tienes que descargar el ejecutable, instalarlo, abrirlo, configurar los atajos de teclado, y a veces ajustar permisos para que el overlay funcione encima del juego. No es plug-and-play.

Cuando GGG actualiza el juego (especialmente en parches grandes), APT puede tener bugs hasta que el equipo de mantenimiento publique una actualización. Generalmente esto se resuelve en días, no semanas.

El historial de mantenimiento de APT ha tenido altibajos. En momentos donde el desarrollo principal se ralentiza, la comunidad ha creado forks como exiled-exchange-2. Vale la pena verificar antes de instalar que la versión que descargas está actualizada para la liga actual.

Algunos antivirus marcan APT como sospechoso porque inyecta overlay en otros procesos. Es falso positivo (el código es open source y revisable), pero puede generar fricción al instalar.

## Sobre el soporte de idiomas

APT está localizada a varios idiomas incluyendo español, ruso, francés, alemán, portugués, coreano y chino tradicional. Esto la diferencia de la mayoría de tools de PoE que solo están en inglés. Si juegas con la interfaz del juego en español, APT detecta los items en ese idioma sin problemas.

## Cómo empezar

Descargas el instalador desde el sitio oficial o desde la página de releases del repo de GitHub. Es un programa para Windows (también disponible para Linux como AppImage).

Una vez instalado, ábrelo antes de iniciar PoE. APT se queda corriendo en segundo plano (verás un ícono en la bandeja del sistema). Cuando entres al juego, ya está listo para funcionar.

La primera vez conviene revisar las settings y elegir tus atajos de teclado preferidos. La configuración default funciona pero quizás quieras ajustar los keybinds a tu setup específico.

Para aprender más allá del price check básico, la documentación en el sitio oficial cubre las funciones avanzadas. Pero honestamente, empezar con solo el price check ya transforma tu experiencia de trading.