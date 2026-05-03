---
title: "CS.MONEY"
description: "Marketplace third-party de skins de CS2 con énfasis en trading skin-por-skin (sin intermediario monetario), valuaciones automáticas y inventario amplio."
quickTake: "El marketplace third-party más conocido para trading de skins. Útil para upgrades complejos y rotación rápida de inventario, pero la historia de seguridad pesa — el hack de 2022 ($6M) sigue siendo referencia obligada."
---

## Qué es

CS.MONEY es un marketplace third-party para skins de CS2 con foco específico en **trading skin-por-skin** (en vez de cash → skin como hace Steam Community Market). El usuario deposita skins de su inventario Steam en CS.MONEY y puede intercambiarlas por otras skins del catálogo, con valuaciones automáticas que calculan diferencias de precio.

El modelo elimina el "doble fee" del Steam Marketplace (15% al vender + 15% al comprar) en cierto modo: si solo querés cambiar una skin por otra de valor similar, el flujo es mucho más eficiente que pasar por cash. CS.MONEY cobra spread propio en las transacciones pero el usuario percibe menos friction que via Steam.

Existe desde la era CS:GO y migró a CS2 manteniendo su catálogo y modelo. Tiene mobile app además de web. Idiomas múltiples por su base internacional fuerte (especialmente CIS, LATAM, EU).

## Qué problema resuelve

El Steam Community Market es el canal oficial pero tiene fricciones reales: 15% de fee compuesto, USD encerrado en wallet de Steam (no podés sacarlo), y limitaciones de cooldowns en trades.

Para un usuario que quiere "cambiar mi AK Redline por una M4 Asiimov" sin tener que vender uno y comprar el otro pasando por cash en wallet, las plataformas P2P como CS.MONEY ofrecen valor real: matching automático y trade directo.

Para traders activos que rotan inventario constantemente o players que quieren upgradear/sidegrade su loadout sin tocar Steam Wallet, es la opción dominante.

## Para qué la usa la gente

**Sidegrade de skins**: cambiar AK por AK distinto del mismo valor sin perder dinero a fees de Steam.

**Upgrade con currency**: subir una skin combinando otras del inventario más algún top-up.

**Rotación rápida de inventario**: traders que compran/venden activamente para arbitraje encuentran flujo más eficiente que via Steam.

**Filtros avanzados de búsqueda**: float exacto, pattern index, stickers aplicados — granularidad que Steam Marketplace no expone bien.

**Liquidación parcial de inventario**: convertir múltiples skins de valor menor en una skin grande, en una sola transacción.

## Para quién NO es esta herramienta

CS.MONEY es excelente para trading activo pero NO es:

- **Para players casuales que solo quieren su skin favorita** → Steam Community Market es más simple y oficial.
- **Para usuarios sensibles a security history** → el hack de septiembre 2022 ($6M USD en skins robados) sigue siendo factor a considerar. La empresa repuso a usuarios afectados pero el incidente existió.
- **Para investigar precios históricos** → csgostash es mejor para data; CS.MONEY es transaccional.
- **Para usuarios que requieren protección de Steam pura** → cualquier marketplace third-party agrega capa de riesgo. Si querés cero superficie de ataque externa, quedate en Steam.

## Cómo se usa en la práctica

1. Vas a `cs.money` y conectás tu cuenta Steam (OAuth).

2. Configurás Steam Trade URL en tu perfil para habilitar trades.

3. Para tradear: navegás el catálogo de skins disponibles, seleccionás las que querés, y la plataforma propone el match con tu inventario (o pedís add cash si hay diferencia).

4. Confirmás el trade. Recibís oferta de Steam Trade desde el bot de CS.MONEY que tenés que aceptar manualmente desde Steam.

5. Trade se completa: tus skins van a CS.MONEY, las nuevas vienen a tu inventario.

6. Para vender outright: depositás skins en CS.MONEY y recibís créditos que podés convertir a otras skins o (en algunos casos) withdrawal a métodos de pago.

## Limitaciones honestas

**Hack histórico de 2022**: en septiembre 2022, CS.MONEY fue víctima de un ataque que comprometió ~$6M USD en skins. La empresa repuso a usuarios afectados pero el evento es recordatorio de que cualquier custodia third-party tiene riesgo. Cualquier reseña honesta debe mencionarlo.

**TOS de Steam**: trading bots de plataformas third-party operan en zona gris respecto a los términos de Valve. Ha habido bans periódicos de bots y períodos de inestabilidad. Tu inventario está OK, pero el flujo puede romperse temporalmente.

**Spread propio (oculto)**: aunque "no hay fee" como en Steam, CS.MONEY genera margen del spread entre lo que paga por skins y lo que cobra. Para usuarios que comparan precios, las skins en CS.MONEY suelen ser un poco más caras que en Steam Marketplace.

**Cobertura no es 100% del catálogo**: skins muy raras o muy nichas pueden no estar disponibles en CS.MONEY si nadie las depositó.

**Friction inicial alta**: configurar Trade URL, aceptar offers de Steam, entender el flujo de bot — la primera transacción es confusa para usuarios nuevos.

**Withdrawal de cash limitado**: convertir tus skins en CS.MONEY a dinero real fuera de Steam tiene fees y limitaciones según método. No esperes simetría perfecta cash ↔ skins.

## Cómo empezar

1. Vas a `cs.money` y conectás Steam OAuth.

2. Configurás tu Steam Trade URL en settings (instrucciones en el sitio).

3. Para primera transacción: empezar pequeño. Cambiar una skin barata por otra del mismo valor para ver el flujo completo (depositar → match → confirmar → recibir).

4. Si sos nuevo en trading de skins en general, leer guías sobre float values, pattern indices, sticker premiums antes de tradear cosas valiosas. Una skin con sticker 4x Holo de Major puede valer 10x el float idéntico sin stickers.

5. Para análisis de precios históricos antes de comprar, usar csgostash en paralelo.

6. Mantener escepticismo razonable: si una oferta parece demasiado buena, casi siempre es porque omitís algún detalle (float bajo, pattern raro, sticker desgastado).
