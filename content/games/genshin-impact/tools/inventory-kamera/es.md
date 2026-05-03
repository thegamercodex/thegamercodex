---
title: "Inventory Kamera"
description: "Scanner automatizado que captura tu inventory de Genshin Impact mediante OCR y lo exporta directamente a Genshin Optimizer, eliminando el setup manual tedioso."
quickTake: "Si usas Genshin Optimizer en serio, Inventory Kamera es prácticamente requisito. Convierte 1-2 horas de input manual en 15-30 minutos de scanning automático."
---

## Qué es

Inventory Kamera es un software de escritorio para Windows que automatiza la importación de tu inventory de Genshin Impact a Genshin Optimizer. Funciona tomando screenshots del juego mientras navegas tu inventory, procesando esas imágenes con OCR (reconocimiento óptico de caracteres), y generando un archivo JSON que Genshin Optimizer puede importar directamente.

Es un proyecto open source liderado por Andrewthe13th con contribuciones comunitarias activas, distribuido bajo licencia GPL-3.0. Solo está disponible para Windows actualmente, lo cual es limitación importante para usuarios de Mac o Linux.

A pesar de no ser oficialmente endorsada por HoYoverse, es ampliamente usada por la comunidad sin reportes de problemas. La tool no se conecta al cliente del juego ni inyecta código, solo lee screenshots de pantalla, lo cual la mantiene en zona segura respecto a anti-cheat.

## Qué problema resuelve

Genshin Optimizer es la herramienta más completa para optimization de builds en Genshin Impact, pero tiene un problema operacional grande: setup inicial. Para que GO sea útil, necesitas ingresar tu inventory completo (artefactos, weapons, personajes) con todos sus datos exactos.

Manualmente, esto significa por cada artefacto:

Seleccionar el set entre docenas de opciones.

Elegir el slot (flower, plume, sands, goblet, circlet).

Ingresar la stat principal con su valor.

Ingresar hasta 4 substats con sus valores precisos.

Especificar el nivel actual del artefacto.

Multiplicado por 50-100+ artefactos típicos en un inventory activo, son 1-2 horas de trabajo tedioso. Cada vez que farmeas nuevos artefactos en domains, repites el proceso para los nuevos. La fricción es tan alta que muchos usuarios abandonan GO antes de aprovechar su valor real.

Inventory Kamera resuelve esto entregando automatización completa. Inicias el scanner, abres tu inventory in-game, y el software hace el resto. En 15-30 minutos tienes tu inventory completo importado a GO. Para updates incrementales con artefactos nuevos, toma 5 minutos.

Esta diferencia operacional transforma a GO de "tool teóricamente útil pero tediosa" a "tool práctica con barrera de entrada baja".

## Para qué la usa la gente

**Setup inicial de Genshin Optimizer**: el caso de uso central. Recién instalas GO y necesitas poblar tu inventory. Inventory Kamera automatiza el proceso de ingestar 100+ artefactos en minutos en lugar de horas.

**Updates después de farming sessions**: corriste domains durante una hora y obtuviste 10 artefactos nuevos. En lugar de ingresarlos manualmente, ejecutas Inventory Kamera y solo escanea los artefactos nuevos.

**Sincronización después de cambios in-game**: subiste de nivel a un personaje, mejoraste un weapon, ascendiste artefactos. En lugar de actualizar manualmente cada cambio en GO, re-escaneas y todo se sincroniza.

**Backup completo del inventory**: el JSON exportado por Inventory Kamera funciona como backup. Si algo le pasa a tu data de GO, tienes el archivo respaldado.

**Migración entre dispositivos**: si usas GO en computadora del trabajo y casa, exportar/importar via Inventory Kamera mantiene ambos sincronizados.

**Análisis del estado completo de tu cuenta**: tener inventory completo escaneado permite análisis macro: qué porcentaje de artefactos son útiles, cuántos personajes tienes builded, dónde están los gaps. GO con inventory parcial no da este overview.

## Cómo se complementa con Genshin Optimizer

Inventory Kamera y Genshin Optimizer son tools fundamentalmente conectadas:

**Genshin Optimizer**: la herramienta principal de optimization. Hace cálculos, optimiza builds, recomienda configuraciones.

**Inventory Kamera**: el companion que resuelve el setup de GO.

Sin Inventory Kamera, GO sigue funcionando pero con fricción alta de input. Sin GO, Inventory Kamera no tiene utilidad — solo genera archivos JSON sin propósito.

La realidad operacional es que prácticamente cualquier usuario serio de GO termina usando Inventory Kamera (o un scanner similar) eventualmente. La automatización es tan superior al input manual que el setup adicional de instalar el software vale la pena.

## Sobre la seguridad y legitimidad

Inventory Kamera funciona leyendo screenshots de pantalla. No se conecta al cliente del juego, no modifica memoria del proceso, no inyecta código, no automatiza acciones in-game (no juega por ti). Solo lee lo que está visible en pantalla, similar a cómo un humano leería su inventory.

Esto es importante porque:

**Anti-cheat de Genshin no la detecta como problema**: el sistema de HoYoverse busca tools que modifiquen comportamiento del juego, no readers de pantalla.

**No hay reportes de bans por usarla**: la comunidad la usa ampliamente desde hace años sin incidentes.

**Es código abierto auditable**: cualquiera puede revisar el código en GitHub para confirmar que solo hace OCR de screenshots.

**No requiere acceso especial**: no necesita admin rights ni acceso a archivos del juego.

A pesar de esto, el uso de tools de terceros está técnicamente en zona gris según términos de servicio de HoYoverse. La realidad es que tools de información (como Inventory Kamera) no son perseguidas, mientras tools que modifican gameplay (cheats, automation reales) sí pueden generar consecuencias.

Para usuarios precavidos: la decisión es personal, pero el riesgo realista es muy bajo. Miles de jugadores usan Inventory Kamera o tools similares regularmente.

## Limitaciones honestas

**Solo para Windows**. Esta es la limitación más significativa. Mac y Linux no tienen versiones compatibles. Para usuarios de esos sistemas, las opciones son: input manual en GO, o usar Windows en máquina virtual (overhead grande), o cambiar a alternativa que sí soporte su sistema.

**Solo en inglés**. La interfaz está solo en inglés, sin localización a español. Para usuarios hispanos, hay barrera del idioma aunque el setup es relativamente simple.

**Requiere resoluciones específicas**. La OCR funciona mejor con resoluciones estándar (1080p, 1440p, 4K). Resoluciones inusuales o configuraciones de display multi-monitor pueden requerir ajustes.

**Setup inicial puede ser frustrante**. Aunque más rápido que input manual, configurar Inventory Kamera la primera vez requiere: descargar software, configurar resolución, ajustar settings del juego, asegurar idioma del juego en inglés (mejor accuracy), y entender flujo de scanning. Para usuarios no técnicos, puede ser intimidante.

**Idioma del juego debe estar en inglés**. La OCR está optimizada para texto en inglés. Si juegas Genshin en español u otro idioma, necesitas cambiar el idioma del juego temporalmente para escanear, lo cual es inconveniente.

**Errores de OCR ocasionales**. La OCR no es 100% precisa. Ocasionalmente puede leer mal stats, especialmente con valores muy específicos. GO permite editar manualmente artefactos importados, así que estos errores son corregibles, pero requieren atención.

**Updates pueden retrasarse vs el juego**. Cuando salen sets de artefactos nuevos o weapons nuevos, Inventory Kamera necesita updates en su database. Esto puede tomar días después de cada parche.

**Process intensivo**. Mientras escanea, Inventory Kamera usa CPU significativamente y requiere que Genshin esté abierto. Computadoras modestas pueden experimentar lag durante el proceso.

**Algunas funcionalidades limitadas**. La tool escanea bien artefactos básicos, weapons, y personajes, pero ciertas mecánicas avanzadas (como detección de constellation level específico para personajes) pueden requerir ajuste manual.

## Cómo se usa en la práctica

El flujo básico tiene varios pasos pero se vuelve rutina rápido:

**Setup inicial (una vez)**:

1. Descargar la última release desde el GitHub.

2. Extraer el archivo y ejecutar.

3. Configurar resolución correspondiente a tu setup de Genshin.

4. Cambiar idioma del juego a inglés temporalmente (para mejor accuracy).

5. Configurar interface scale del juego según recomendación.

**Scanning sessions**:

1. Abrir Genshin Impact e iniciar el juego normalmente.

2. Ejecutar Inventory Kamera con el juego abierto.

3. Seleccionar qué quieres escanear (artefactos, weapons, characters, o todo).

4. La tool te da instrucciones: navega a tu inventory en cierta posición, presiona scan.

5. El software automatiza screenshots y procesa cada item.

6. Al terminar, exporta archivo JSON.

7. Importas el JSON en Genshin Optimizer.

**Para updates incrementales**:

Después del scanning inicial, los siguientes scans solo procesan items nuevos o cambiados, lo cual es mucho más rápido. 5-10 minutos típicamente.

## Cómo empezar

Es la primera tool en tu directorio que requiere instalación, así que el proceso es distinto a las web-apps que has cubierto:

**1. Descargar**: ve a `github.com/Andrewthe13th/Inventory_Kamera` y busca la sección "Releases" en el sidebar derecho. Descarga la última versión (archivo .zip generalmente).

**2. Extraer**: descomprime el .zip en una carpeta de tu elección.

**3. Ejecutar**: corre el archivo .exe principal. Windows puede preguntar permisos por ser software no firmado por Microsoft; esto es normal en proyectos open source.

**4. Configurar**: la primera vez ajusta resolución, idioma del juego, y otros settings según las instrucciones del README en GitHub.

**5. Test**: ejecuta un scan corto (solo artefactos por ejemplo) para verificar que todo funciona antes de scan completo.

Para tu primera vez, recomendación práctica: lee el README completo en GitHub antes de scan masivo. Hay tips importantes sobre interface scale del juego, idioma, y setup que evitan frustraciones.

Si encuentras problemas, la sección de Issues del GitHub tiene reportes de problemas comunes con soluciones. La comunidad es activa y responde con frecuencia.

Para usuarios hispanos: el idioma temporal de Genshin a inglés es paso obligatorio. Considéralo overhead de uso. Si juegas Genshin solo en español y cambiar idiomas te frustra, puede que el input manual en GO sea menos invasivo a pesar de ser más lento.

Para máximo provecho del ecosistema: Inventory Kamera + Genshin Optimizer es combo prácticamente inseparable. Una vez configurado, el flujo de "farmear → escanear → optimizar" se vuelve rutina eficiente que transforma cómo manejas builds en Genshin.