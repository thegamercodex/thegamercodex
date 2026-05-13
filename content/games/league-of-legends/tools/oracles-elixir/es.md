---
title: "Oracle's Elixir"
description: "Database analítica del esports profesional de League of Legends mantenida desde 2014 por Tim 'Magic' Sevenhuysen. Datasets descargables en CSV con métricas por partida, web app navegable y blog editorial con análisis cualitativo periódico."
quickTake: "La referencia anglosajona del análisis riguroso del esports de LoL. Si necesitas raw data en CSV para análisis propio, o leer análisis editorial con backing estadístico serio, Oracle's Elixir es la fuente. Tim Sevenhuysen es uno de los analistas más respetados del ecosistema."
---

## Qué es

Oracle's Elixir es una database analítica del esports profesional de League of Legends, mantenida desde 2014 por Tim Sevenhuysen (también conocido como "Magic" en la comunidad de analytics). El producto tiene tres componentes: una web app navegable con stats agregadas por torneo/partida/jugador, una sección de datasets descargables en CSV (la diferenciador clave del ecosistema), y un blog editorial donde Tim publica análisis cualitativos periódicos con backing estadístico.

Cubre las cuatro ligas mayores (LCK, LPL, LEC, LCS) más eventos internacionales (MSI, Worlds), con énfasis particular en ligas anglosajonas (LCS, LCO) por origen del autor. La metodología está documentada públicamente, lo cual permite a otros analistas replicar y validar los cálculos.

Es 100% free, sin tier paga, financiada con donaciones via Patreon. No requiere login para uso básico — los datasets son descargables sin registro.

## Qué problema resuelve

Para analistas serios, periodistas con orientación cuantitativa y estudiantes de carreras como sports analytics o data science aplicada, navegar dashboards no es suficiente. Necesitan **raw data** que puedan procesar con sus propias herramientas (Python, R, Excel) para hacer queries, regresiones, visualizaciones custom, o análisis comparativo entre temporadas.

Ningún otro recurso del ecosistema ofrece datasets esports en CSV de forma directa y libre. Riot tiene una API que requiere setup técnico y rate limits; Leaguepedia tiene tablas pero no exports limpios; Gol.gg te da web app con stats pero no archivos. Oracle's Elixir cubre exactamente ese gap, con CSVs descargables que son la base de la mayoría de análisis públicos serios sobre el esports de LoL.

Adicionalmente, el blog editorial de Tim aporta análisis cualitativo respaldado en datos — el tipo de contenido que combina rigor estadístico con interpretación accesible.

Ver "La diferencia con Oracle's Elixir" en Gol.gg para el comparativo completo entre las dos tools.

## Para qué la usa la gente

**Descargar datasets para análisis propio**: caso de uso más distintivo. Bajas CSVs de un torneo o temporada y procesas con tus propias herramientas — Python, R, Excel, lo que sea — para queries que la web app no soporta.

**Leer análisis editorial con backing cuantitativo**: el blog de Tim publica posts periódicos con análisis de patrones del meta, tendencias entre regiones, o evaluaciones de performance de jugadores específicos. Combinación poco común de rigor + lectura accesible.

**Verificar metodología de cálculos**: como la metodología está documentada, otros analistas pueden replicar y validar. Si vas a citar números de Oracle's Elixir en un artículo o paper, sabes exactamente cómo se calcularon.

**Investigación académica y proyectos personales**: estudiantes y aficionados al data science usan los datasets para proyectos de portfolio, tesis, o exploración personal del esports como dominio.

**Cobertura LCS / LCO especialmente fuerte**: por origen del autor, las ligas anglosajonas tienen cobertura particularmente densa y editorial dedicado.

## Para quién NO es esta herramienta

Oracle's Elixir es excelente para análisis serio, pero no es lo que necesitas si:

- **Quieres navegabilidad visual de stats sin descargar nada** → Gol.gg tiene mejor UX para exploración click-by-click.
- **Quieres histórico enciclopédico de teams y jugadores** → Leaguepedia es la fuente para rosters, fechas, achievements.
- **No te interesan los datasets ni el análisis cuantitativo** → si solo quieres ver resultados o seguir un torneo casualmente, Oracle's Elixir es overkill.
- **Quieres stats personales o de soloqueue** → OP.GG cubre esa función; Oracle's Elixir es exclusivamente pro scene.

## Cómo se usa en la práctica

1. Vas a `oracleselixir.com`. Sin registro para lectura o descarga básica.

2. Home muestra: posts recientes del blog editorial, links a torneos en curso, y acceso a sección "Data" para descargas.

3. Sección **Tournaments** lista torneos por liga y temporada, con stats agregadas navegables.

4. Sección **Data** tiene los CSVs descargables — archivos por torneo con métricas por partida agregadas. Cada archivo incluye column headers documentados.

5. Blog **Match Stats** publica análisis editorial periódico — post-mortem de finales, evaluaciones de jugadores, tendencias del meta competitivo.

6. Si quieres contribuir o consultar metodología, hay sección "About" con info del proyecto y cómo Tim lo mantiene.

Para uso recurrente como analista: bookmarkeá la sección Data de la temporada en curso. Cada torneo grande genera un CSV consolidado al terminar.

## Limitaciones honestas

**UX más spartano que Gol.gg**: la web app es funcional pero menos pulida visualmente. Para exploración casual, Gol.gg gana en cuanto a comodidad navegacional.

**Single-maintainer**: el proyecto depende fuertemente de Tim Sevenhuysen. Eso es genial por consistencia y rigor, pero implica bus-factor 1 — si Tim para de mantenerlo, no hay equipo de respaldo. Track record: 10+ años activo, signal positiva.

**Cobertura más fuerte en LCS / LCO**: por origen anglosajón del autor. LCK, LPL y LEC están cubiertas pero pueden tener menos profundidad editorial que las ligas anglo. Para análisis euro-centric, Gol.gg complementa mejor.

**Curva de aprendizaje del vocabulario y de los CSVs**: si no manejas Python/R/Excel ni entiendes métricas avanzadas, los datasets pueden parecer crípticos. Vale la pena leer la documentación de columnas antes de usarlos.

**Sin app móvil ni overlay**: 100% web. No hay integración con cliente ni asistencia activa. La tool es para análisis, no para uso operativo.

## Cómo empezar

1. Vas a `oracleselixir.com`. Sin registro.

2. Si quieres ver qué tipo de análisis publica Tim, lee los últimos 2-3 posts del blog. Es el mejor onboarding al estilo de la tool.

3. Para tu primer dataset: anda a Data, elige un torneo reciente que conozcas (ej: Worlds 2024 o el último Spring de tu liga preferida), y descarga el CSV. Abrilo en Excel/Google Sheets y explora las columnas.

4. Si manejas Python, los CSVs son ideales para pandas — pocas filas, columnas bien documentadas, fácil de explorar.

5. Para análisis pro completo de un torneo internacional, usa Gol.gg en paralelo — Oracle's Elixir para deep data, Gol.gg para navegación rápida.

6. Apoyá el proyecto via Patreon si lo usas regularmente — es uno de los recursos más valiosos del ecosistema y depende de donaciones.
