---
title: "LOA Details"
description: "DPS meter y log parser en tiempo real para Lost Ark, basado en Electron y open source (MIT). Lee datos de paquetes para mostrar un overlay con el daño y DPS de la party durante los encuentros."
quickTake: "El meter original de Lost Ark y el ancestro de LOA Logs. Todavía funciona, pero la mayoría de raiders migró a LOA Logs por ser más rápido y liviano. Úsalo si quieres el linaje histórico; para el día a día, LOA Logs es la opción moderna."
---

## Qué es

LOA Details es el DPS meter original de Lost Ark: una aplicación de escritorio construida en Electron que lee el tráfico de paquetes del juego para reconstruir, en tiempo real, cuánto daño hace cada miembro de la party. Muestra un overlay flotante con el DPS por jugador, desgloses por habilidad y la posibilidad de guardar logs de los encuentros para revisarlos después.

Es open source bajo licencia MIT, alojado en GitHub, desarrollado por la comunidad de Lost Ark. Importa históricamente porque es el proyecto del que más tarde nació LOA Logs: ese parser moderno es esencialmente una reescritura en Rust de lo que LOA Details hacía en Electron. Si quieres entender la genealogía de los meters de Lost Ark, LOA Details es la raíz.

## Qué problema resuelve

Lost Ark no expone un DPS meter nativo. Sin una herramienta externa no tienes forma de saber si tu rotación rinde lo que debería, si un compañero está muy por debajo, o por qué un pull falló el enrage timer. LOA Details cubre ese vacío: convierte el daño invisible del encuentro en números concretos y comparables.

Para un grupo que quiere mejorar, eso cambia las conversaciones. En lugar de "siento que vamos lentos", puedes ver que un DPS está rindiendo la mitad de lo esperado o que el soporte no está aplicando buffs a tiempo. Es la capa de medición que el cliente del juego nunca entregó.

## Diferenciación

La comparación obligada es con **LOA Logs**, que desciende directamente de este proyecto:

- **LOA Details es el original (Electron)**: más pesado, el padre del linaje. Sigue funcionando y mantiene la lógica de parsing que popularizó los meters en Lost Ark.
- **LOA Logs es el fork moderno (Rust)**: más rápido, más liviano en recursos, con una UI más pulida. Es a donde se movió la mayoría de la comunidad raider.

En la práctica, ambos hacen lo mismo conceptualmente —leer paquetes y mostrar DPS en vivo— pero LOA Logs lo hace con mejor rendimiento. LOA Details es relevante hoy más por su historia y por seguir siendo una opción válida que por ser la elección por defecto.

## Para qué la usa la gente

- **Medir DPS propio en tiempo real**: ver si tu rotación alcanza el daño esperado para tu clase y gear durante un pull.
- **Diagnosticar wipes**: revisar por qué un encuentro falló el enrage timer y quién quedó corto.
- **Comparar dentro de la party**: identificar al instante si un miembro rinde muy por debajo de lo esperado.
- **Guardar logs para revisar después**: persistir encuentros y analizarlos fuera del fragor del raid.
- **Estudiar tu progresión**: comparar tu daño antes y después de un cambio de gear, engravings o honing.

## Para quién NO es esta herramienta

Si solo quieres el meter más rápido y actual, la mayoría de la comunidad ya migró a **LOA Logs**: es la opción moderna y probablemente la que buscas. Si lo que necesitas es análisis web persistente con leaderboards después del raid, esto tampoco es para ti —para eso está Lost Ark Logs (lostarklogs.com), que vive en el navegador. LOA Details es un overlay en vivo, no una plataforma de estadísticas post-run.

## Cómo se usa en la práctica

1. Entra al repositorio de LOA Details en GitHub y descarga la última release (solo Windows).
2. Instala la aplicación; al ser un parser de paquetes, puede pedir permisos de red o reglas de firewall.
3. Abre LOA Details antes de entrar al raid; el overlay se acopla sobre el juego.
4. Durante el encuentro, el overlay muestra DPS y daño por jugador en vivo; al terminar el pull tienes el desglose completo.
5. Revisa los logs guardados para analizar habilidades, uptime y comparativas después de la sesión.

## Limitaciones honestas

- **Zona gris de ToS**: los in-game meters en Lost Ark leen datos de paquetes. Es una práctica tolerada pero no avalada oficialmente por Amazon —no está endorsada ni explícitamente prohibida en la mayoría de los casos. Presentarlo neutral: usarlo o no es decisión tuya, y conviene conocer ese matiz antes de instalarlo.
- **Más pesado que LOA Logs**: al estar en Electron consume más recursos que el fork en Rust. En máquinas modestas se nota.
- **Solo Windows**: no hay build para macOS ni Linux.
- **Mantenimiento desplazado hacia el fork**: como la comunidad migró a LOA Logs, gran parte de la energía de desarrollo vive ahora en ese otro proyecto.
- **Requiere configuración inicial**: permisos de red y, a veces, ajustes de firewall o antivirus que pueden asustar a usuarios menos técnicos.

## Cómo empezar

Ve al repositorio de LOA Details en GitHub, descarga la última release para Windows e instálala. Abre la aplicación antes de tu próximo raid y deja que el overlay se acople. Si notas que consume demasiados recursos o quieres la experiencia más fluida, prueba **LOA Logs** —es el sucesor directo y lo que usa hoy la mayoría. Recuerda que cualquier meter en Lost Ark opera en una zona gris de ToS: infórmate y decide por ti mismo antes de usarlo.
