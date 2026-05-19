---
title: "Sens Converter — Apex Legends"
description: "Web app que combina conversor de sensibilidad cross-game (Apex ↔ CS2/Valorant/Overwatch/PUBG) con DB filtrable de 50+ pros de Apex incluyendo eDPI, ADS multiplier, role y region."
quickTake: "Lo principal es el conversor — si saltás de Valorant a Apex, mantener consistency mecánica entre los dos games es huge. Como bonus, la DB de pros es complementaria a ProSettings, sometimes con info más fresca."
---

## Qué es

SensConverter.app es una herramienta cross-game especializada en sensitivity math. Permite convertir entre 30+ FPS mainstream — input tu sens current de un game, output el equivalente exact en otro asumiendo la misma cm/360°. Para Apex específicamente, además tiene una DB de pros con 50+ entries filtrables por role (entry fragger, IGL, support) y region (NA/EU/APAC/Latam). Free, sin login.

## Qué problema resuelve

Players que juegan multiple FPS sufren de sensitivity confusion: tu sens de Valorant es diferente de tu sens de Apex porque los games usan formulas internas distintas. La forma profesional de mantener consistency es calcular cm por 360° (cuántos centímetros de mousepad para una rotación completa) y replicar ese valor across games. SensConverter hace esa math automáticamente — tú solo indicás cuáles son tus settings actuales y a qué game quieres convertir.

## Diferenciación

- **vs ProSettings.com**: ProSettings es DB grande estática. SensConverter es calculator + DB más chica pero searchable por role. Complementarios.
- **vs Mouse-Sensitivity.com**: similar function, SensConverter tiene UI más moderna y DB de pros más curated.
- **vs manual cm/360 math**: hacer la math tú solo es 5 minutos con calculadora y google. SensConverter es 10 segundos.

## Para qué la usa la gente

- **Migrate sens de otro FPS a Apex**: switch desde Valorant/CS2 con consistency mecánica.
- **Switch entre Apex y casual FPS**: jugadores que alternan entre Apex y Warzone o The Finals.
- **Calcular eDPI**: input DPI + in-game sens → output eDPI. Standard metric en la community pro.
- **Filter DB de pros por role**: "qué eDPI corre el average entry fragger?" o "¿cuál es el ADS multiplier típico del IGL?"
- **Test diferentes sens fast**: probar sens de 5 pros distintos y ver qué se siente mejor sin tener que entrar a cada page individual.

## Para quién NO es esta herramienta

Si solo juegas Apex y nunca tocás otros FPS, el converter no aporta — buscas solo configs. Si quieres gear list completa de pros, ProSettings tiene más detalle.

## Cómo se usa en la práctica

1. Abre [sensconverter.app/apex-pro-settings](https://sensconverter.app/apex-pro-settings/).
2. Para conversor: tab "Sens Converter" → select source game (current sens), target game (Apex), enter DPI + in-game sens, lee el output.
3. Para DB de pros: tab "Apex Pro Settings" → filtros por role/region/team, comparativa de eDPI averages, clic en pro para detalle.
4. Aplica los valores manualmente en Apex settings.

## Limitaciones honestas

- **Conversor asume same hardware**: si cambias mouse o pad, la conversion ya no es 1:1 — necesitas re-medir cm/360 físicamente.
- **DB menor que ProSettings**: 50+ pros vs 100+. Si buscas un pro específico, revisa ambos.
- **Sin export config**: aplicación manual de settings.
- **Solo inglés**.

## Cómo empezar

Abre [sensconverter.app/apex-pro-settings](https://sensconverter.app/apex-pro-settings/). Si venís de otro FPS, primero usa el converter para portar tu sens current a Apex — eso te da un baseline familiar. Después, compáralo con el average eDPI del role que juegas para ver si estás en el rango pro normal.
