---
title: "LOA Logs"
description: "LOA Logs es un DPS meter y registrador de combate para Lost Ark, open-source (Rust, GPL-3) y para Windows, que muestra un overlay en tiempo real con el daño, DPS, tasas de crit y back-attack y uptime de buffs de cada miembro de la party, con logs guardados por encuentro."
quickTake: "El DPS meter open-source rápido y moderno que usa la mayoría de raiders, con las advertencias habituales de los meters. Si analizas tus raids, este es el estándar actual, zona gris de ToS incluida."
---

## Qué es

LOA Logs es un DPS meter y registrador de combate open-source para Lost Ark escrito en Rust, distribuido gratis en GitHub. Muestra un overlay en tiempo real durante el combate con el daño, DPS, tasas de crit y back-attack y uptime de buffs de cada miembro de la party, además de un desglose por encuentro que puedes guardar y revisar después.

Es el meter moderno más popular, mantenido activamente por snoww y con licencia GPL-3. Funciona solo en Windows.

## Qué problema resuelve

Lost Ark casi no te da feedback dentro del juego sobre el desempeño en combate: ningún desglose de daño, ningún seguimiento de uptime, ninguna idea clara de dónde salió mal un pull. Sin datos externos, "juega mejor" es pura adivinanza.

LOA Logs saca a la luz los números que importan: cuánto hizo cada miembro de la party, su DPS, con qué fiabilidad acertó crits y back attacks, y si los buffs se mantuvieron. Eso convierte impresiones vagas en feedback concreto sobre el que puedes actuar, tanto en vivo durante un pull como después en los logs guardados.

## Diferenciación

La comparación es **LOA Details**, el meter original basado en Electron del que desciende LOA Logs. LOA Logs es la reescritura/fork rápida en Rust: su gran ventaja es el rendimiento (es más liviano y ágil que el original en Electron) manteniendo el overlay en tiempo real y el logging que los jugadores esperan.

LOA Details estableció el formato; LOA Logs lo modernizó. Para la mayoría de raiders hoy, LOA Logs es la opción por defecto por su velocidad y mantenimiento activo. Si prefieres específicamente el meter más viejo en Electron, LOA Details sigue existiendo, pero el impulso está con LOA Logs.

## Para qué la usa la gente

- **Feedback de desempeño en vivo:** mirar el overlay durante un pull para ver el daño y el DPS en tiempo real.
- **Análisis post-run:** guardar y revisar logs por encuentro para encontrar dónde se perdió tiempo o daño.
- **Chequeo de uptime:** verificar el uptime de buffs y las tasas de back-attack para ajustar rotaciones.
- **Comparar parties:** ver cómo aportó cada miembro a lo largo de una raid.
- **Mejora con el tiempo:** seguir los logs entre pulls para medir si los cambios realmente ayudaron.

## Para quién NO es esta herramienta

No es la herramienta para quien se siente incómodo con la zona gris de ToS que ocupan los damage meters dentro del juego (mira las limitaciones más abajo). Tampoco es para quien solo quiere estadísticas web post-run sin ejecutar nada local: para eso, un sitio como lostarklogs.com encaja mejor. Y como funciona solo en Windows, no es una opción en otras plataformas.

## Cómo se usa en la práctica

1. Descarga la última release desde la página de GitHub de LOA Logs.
2. Instálalo y ábrelo en Windows junto con el juego.
3. Ubica el overlay donde no tape elementos importantes de la interfaz.
4. Juega tu raid; mira en vivo el daño, DPS, tasas de crit y back-attack y uptime de buffs.
5. Después del encuentro, abre el log guardado para revisar el desglose por miembro.
6. Compara logs entre pulls para confirmar que los cambios de rotación o gear mejoraron tu output.

## Limitaciones honestas

El planteo honesto: los damage meters dentro del juego están en una zona gris de ToS en Lost Ark. Funcionan leyendo datos de paquetes, y Amazon históricamente los toleró sin respaldarlos. Esa es la situación de hecho: usar uno es decisión del jugador, y conviene tomarla sabiendo que esa zona gris existe. Más allá de eso, LOA Logs funciona solo en Windows, requiere instalación y configuración local en lugar de un sitio web, y depende de que quien lo mantiene lo conserve al día con los parches del juego. Muestra datos crudos de combate, no coaching, así que interpretar los números queda de tu lado.

## Cómo empezar

Entra a la página de GitHub de LOA Logs y descarga la última release, luego instálalo y ábrelo en Windows junto con Lost Ark. Ubica el overlay para que no cubra elementos importantes de la interfaz, y verás datos de combate en vivo en cuanto entres a una pelea. Después de cada encuentro, revisa el log guardado para ver el desglose. Antes de decidirte, entiende la zona gris de ToS mencionada arriba y evalúa si te conviene.
