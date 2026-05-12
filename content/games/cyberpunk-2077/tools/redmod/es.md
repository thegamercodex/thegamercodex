---
title: "REDmod"
description: "Sistema oficial de modding de CD Projekt RED para Cyberpunk 2077. Distribuido como DLC gratuito, integrado al launcher."
quickTake: "REDmod es lo que CDPR endossa oficialmente: stable, conserva achievements, integrado al launcher. Limitado en alcance frente a CET/RED4ext, pero el camino correcto si quieres modear sin tocar el binario."
---

## Qué es

REDmod es el toolkit oficial de modding publicado por CD Projekt RED. Salió como DLC gratuito en septiembre 2022, descargable desde Steam, GOG o Epic. Da soporte oficial a un subset de modificaciones — animaciones, sonidos, scripts en redscript — integradas con el launcher del juego.

A diferencia de los frameworks comunitarios (CET, RED4ext), REDmod no inyecta código en el ejecutable: los mods REDmod se compilan en un paso de "deployment" antes de ejecutar el juego, y se ejecutan dentro del runtime soportado por CDPR. Eso lo hace más estable a través de patches y compatible con los achievements de Steam.

## Qué problema resuelve

Antes de REDmod, modear Cyberpunk 2077 implicaba inyectar DLLs (CET, RED4ext) — funciona, pero requiere que la comunidad mantenga compatibilidad post-patch, y técnicamente disables algunos achievements. Para users casuales que quieren mods simples sin frameworks comunitarios, eso es overhead.

REDmod resuelve eso ofreciendo un canal oficial: descargás el toolkit gratis, instalas mods compatibles, los activas desde el launcher y juega. CDPR garantiza que la stack REDmod sigue funcionando a través de updates.

## Diferenciación

Frente a **CET / RED4ext**: REDmod es estrechamente limitado (animaciones, sonidos, scripts redscript, archivos de animación) pero estable; CET/RED4ext son ilimitados (hooks profundos al engine) pero requieren mantenimiento comunitario. Para mods complejos (AMM, mods de UI radicales), CET/RED4ext son obligatorios. Para mods simples (replacement de animations, sound packs), REDmod es suficiente y más limpio.

Frente a **mods de Archives (.archive files directos)**: hace algunos años, mods se distribuían como archivos `.archive` que sustituían assets. REDmod es la evolución oficial — wraps esos archivos con metadata, soporte versión, y ordenamiento explícito de carga.

## Para qué la usa la gente

**Habilitar mods oficiales de animación y sound**: muchos mods modernos de animaciones (cambiar dance moves, idle poses) y de sound (música de Phantom Liberty extendida, replacement de ambient) usan REDmod por defecto.

**Mantener achievements habilitados**: REDmod no triggea las protecciones que disabilitan achievements en CET-modded games. Si te importan los logros de Steam, REDmod es el camino.

**Modear post-patch sin esperar comunidad**: cuando sale un patch del juego, REDmod sigue funcionando porque es CDPR la que lo mantiene. CET/RED4ext pueden tardar 24-72h en actualizarse.

**Distribuir mods como creator**: si vas a hacer un mod simple y quieres audiencia amplia, empacarlo como REDmod evita que los usuarios necesiten frameworks comunitarios.

## Para quién NO es esta herramienta

Si quieres mods complejos que tocan UI, gameplay deeply, o expose Lua scripting (Appearance Menu Mod, Native Settings UI, etc.), REDmod no alcanza. Para eso necesitas CET + RED4ext.

Si modeas en consola, no aplica — REDmod es Windows-only.

Si tu mod requiere hookear funciones del engine (espías scripts, intercepta eventos), REDmod no expone esa API. Es deliberadamente limitado.

## Cómo se usa en la práctica

1. Descargás REDmod desde Steam / GOG / Epic como DLC gratuito (lo encuentras en el store page del juego como "REDmod").
2. Después de instalado, abres el launcher de Cyberpunk 2077: aparecen dos opciones — "Play" y "Play with mods". La segunda activa el flow de REDmod.
3. Mods compatibles con REDmod se instalan en `mods\` dentro de la carpeta del juego.
4. Cuando ejecutás "Play with mods", REDmod corre un paso de deployment (compila scripts, mergea archives) antes de levantar el juego.
5. Si todo va bien, el juego carga con los mods aplicados. Si hay errores de deployment, REDmod muestra logs explicando qué mod falló.

## Limitaciones honestas

**Scope estrecho**. Solo soporta animaciones, sonidos, scripts redscript y archivos de assets. Mods que requieren código C++ inyectado (la mayoría de mods populares) no son REDmod.

**No es alternativa a CET / RED4ext**. Si quieres instalar AMM o Native Settings UI, necesitas los frameworks comunitarios además de REDmod (pueden coexistir).

**Deployment toma tiempo**. Cada launch con "Play with mods" recompila — para builds con muchos mods, el deploy puede tardar 30-60 segundos antes del game start. Vanilla launch es instantáneo.

**Documentación oficial limitada**. CDPR provee referencia técnica para mod authors pero no guías prácticas para usuarios finales. La wiki comunitaria (`wiki.redmodding.org/redmod`) llena ese gap.

**Sin community hub centralizado**. Mods REDmod conviven con mods de CET / archive directos en Nexus — no hay un store separado solo de REDmod. Encontrar mods compatibles requiere filtrar por categoría en Nexus.

## Cómo empezar

1. En Steam (o GOG, o Epic): busca "REDmod" en el store y agrégalo a tu librería. Es DLC gratuito.
2. Instálalo (se descarga aprox 1GB de tools).
3. Reiniciá el launcher de Cyberpunk 2077: la opción "Play with mods" debería aparecer ahora.
4. Si vas a instalar tu primer mod REDmod (ej: un sound pack desde Nexus), bájalo, lee el README del mod para verificar que es REDmod-compatible, y extrae en `mods\`.
5. Levanta el juego con "Play with mods". Si carga sin errores, REDmod está OK.

Para usuarios que vienen del workflow CET/RED4ext: REDmod es complementario, no reemplazo. Mantenelos todos instalados si quieres rango completo de mods.
