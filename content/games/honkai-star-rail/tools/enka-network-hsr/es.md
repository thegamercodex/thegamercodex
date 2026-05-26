---
title: "Enka.Network (Honkai: Star Rail)"
description: "Showcase público de personajes y API open source para Honkai: Star Rail. Funciona como capa de compartir builds y como fuente de datos para otras tools del ecosistema."
quickTake: "Si quieres compartir tu build con alguien, Enka es el link. También es la API que tools como Fribbels consumen para extraer tu roster sin que importes data manualmente."
---

## Qué es

Enka.Network es una plataforma web que muestra los personajes públicos de un jugador a partir de su UID. Para Star Rail, lee el showcase del juego y arma una página con los detalles completos de cada unidad: light cones, traces, eidolons, stats finales y relics con sus substats individuales.

Es un proyecto open source mantenido por el equipo Enka (`github.com/EnkaNetwork`) que originalmente nació para Genshin Impact y se extendió a Star Rail y Zenless Zone Zero. Toda la infraestructura es gratuita, sin login, sin ads agresivos, sin paywalls.

Además de la interfaz visual, expone una API pública que sirve la misma data en formato JSON. Esa API es la espina dorsal de buena parte del ecosistema de tools: Fribbels, varios calculators y dashboards comunitarios consultan a Enka en lugar de pedir credenciales al usuario.

## Qué problema resuelve

Star Rail no tiene un sistema interno para compartir builds. Si quieres mostrarle a alguien cómo tienes equipado a Acheron, las opciones son screenshot, video, o describir todo a mano. Ninguna escala bien.

Enka resuelve eso con un link. Pones tu UID, los personajes que tengas en showcase aparecen renderizados con toda su data, y compartes la URL. Quien la abre ve exactamente lo que vos ves en tu inventory, incluyendo substats de relics que normalmente requieren clicks dentro del juego.

El segundo problema que resuelve es para los desarrolladores de tools: en lugar de cada app pedirle al usuario que importe data manualmente o que entregue credenciales sensibles, todas leen del mismo endpoint público de Enka. Para el usuario es transparente, para los devs simplifica enormemente la integración.

## Diferenciación (con tools de cluster similar)

La comparación clave es con Fribbels HSR Optimizer. Son partes complementarias del mismo workflow: Fribbels es el motor de optimización, Enka es la capa de presentación pública y la fuente de datos.

Concretamente, Fribbels usa Enka como input. Cuando le decís a Fribbels "importa mi cuenta", lo que hace por debajo es llamar a la API de Enka con tu UID. Sin Enka, Fribbels te obligaría a configurar cada relic a mano. Es por eso que ambos coexisten sin competir: Enka muestra y comparte, Fribbels analiza y optimiza.

Otra diferencia importante: Enka es read-only. No te da tier lists, no te recomienda nada, no calcula daño. Es un visor estructurado de tu showcase. Esa simplicidad es feature, no limitación: cada tool del ecosistema construye encima.

## Para qué la usa la gente

**Compartir builds en Discord o redes**: pegas tu link de Enka y la otra persona ve todo el detalle sin pedirte screenshots. El estándar de facto para mostrar builds en la comunidad.

**Importar tu cuenta a Fribbels y otros optimizers**: la mayoría de tools de stats te piden el UID y por debajo consultan Enka. No tienes que configurar nada extra.

**Verificar substats antes de upgradear relics**: el juego muestra los substats pero ocultos detrás de menus. Enka los renderiza todos a la vista, lo que ayuda a decidir si una pieza vale la pena seguir mejorando.

**Pedir feedback de tu build a la comunidad**: en subreddits y Discords de HSR, lo normal es que pidan tu link de Enka para opinar. Sin él la conversación es mucho más lenta.

**Mostrar progresión en posts o videos**: creators usan capturas de Enka para visualizar setups en guías, comparar antes/después de farming runs, o explicar elecciones de build.

## Para quién NO es esta herramienta

Si no tienes interés en compartir builds con nadie ni en usar tools externas que consuman su API, Enka aporta poco valor directo. La data está toda dentro del juego.

Si buscas recomendaciones, tier lists o cálculos de daño, Enka no hace nada de eso. Es un visor neutro. Para análisis necesitas Fribbels, MD✦C o Prydwen.

Si te preocupa que cualquiera con tu UID pueda ver tu roster, recordá que ese showcase ya es público desde el juego mismo. Enka solo lo renderiza más prolijo. Si quieres privacidad, la solución es no habilitar showcase, no evitar Enka.

## Cómo se usa en la práctica

1. Asegúrate de tener el showcase de personajes habilitado en el juego (settings de privacidad, hacer el showcase público).

2. Agrega al showcase los personajes que quieres que sean visibles (límite de slots según el sistema del juego).

3. Busca tu UID dentro del juego (esquina inferior derecha del menú principal).

4. Entra a `enka.network/hsr` y pon tu UID en el buscador.

5. La página renderiza todos los personajes que tengas en showcase con su build completa.

6. Para compartir, copiá la URL directa del perfil y pasala donde quieras.

7. Si vas a usar Fribbels o algún optimizer, solo necesitas el UID. Esas tools llaman a Enka por debajo automáticamente.

## Limitaciones honestas

**Solo muestra personajes en showcase**: tu showcase tiene cupos limitados, y solo esos personajes son visibles vía Enka. Para mostrar otros tienes que rotarlos en el showcase desde el juego.

**Cache puede demorar en refrescar**: después de cambiar un relic o subir un personaje, Enka puede mostrar data vieja por minutos u horas hasta que actualice el cache. No es instantáneo.

**Dependés de la privacy policy de HoYoverse**: si en algún momento HoYoverse decide cerrar el endpoint público de showcase, Enka deja de funcionar. Es un riesgo estructural del proyecto.

**No tiene historial**: Enka muestra el estado actual de tu cuenta. No guarda snapshots para comparar tu build hoy vs hace tres meses.

**La interfaz prioriza data sobre estética**: hay tools con UI más bonita o más editorial, pero todas dependen de Enka por debajo. Enka es la fuente, no el packaging.

**El UID es público y permanente**: una vez compartido, no puedes "recuperar" el link. Si tu showcase tiene info que después no quieres mostrar, tienes que cambiar el showcase desde el juego.

## Cómo empezar

No requiere instalación ni cuenta. Entra a `enka.network/hsr`, ingresa tu UID y listo.

Antes de compartir tu link, revisa qué tienes en el showcase del juego. Esa es la única configuración que necesitas controlar: lo que pongas ahí es lo que va a verse vía Enka.

Si piensas usar Fribbels o cualquier optimizer, ya tienes la mitad del setup hecho con solo tener el UID y el showcase configurado. Las tools del ecosistema asumen Enka como fuente y la consultan sin que tengas que hacer nada extra.
