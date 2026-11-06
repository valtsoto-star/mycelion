# MYCELION OS · Guía de diseño (v2.7)

App de estudio offline para Ingeniería en Construcción (Duoc UC). Un solo HTML, datos en `localStorage`.
Esta guía manda sobre cualquier estilo nuevo. Si algo nuevo no cabe aquí, primero se actualiza la guía.

## 1. Principios
1. **Todo sigue el tema.** Ningún panel queda oscuro en un tema claro ni claro en uno oscuro. Los colores salen de tokens, nunca de un hex suelto en un componente.
2. **Leer primero.** Texto de cuerpo con contraste ≥ 7:1, texto secundario ≥ 4,5:1, etiquetas pequeñas ≥ 4,5:1, en todos los temas.
3. **Una cosa por bloque.** Cada unidad es un bloque con encabezado propio; cada tema es una tarjeta separada. Nunca dos niveles con el mismo peso visual.
4. **Nada se pisa.** Botones de al menos 44 px de alto, textos que cortan con elipsis o saltan de línea, y ningún elemento flotante tapa contenido ni la barra de pestañas.
5. **Vector, no foto.** Sin imágenes rasterizadas en portadas: gradientes y SVG que se ven nítidos a cualquier tamaño.

## 2. Temas y tokens
Los temas viven en `body[data-theme]`. Claros: `amarillo` (por defecto), `light`, `celeste`. Oscuros: `dark`, `noche`, `blueprint`, `duoc`, `concrete`.

| Token | Uso |
|---|---|
| `--bg`, `--bg-2` | fondo de página |
| `--surface`, `--surface-2` | tarjetas y paneles |
| `--line`, `--line-soft` | bordes |
| `--text`, `--text-2`, `--text-3` | texto principal, secundario y etiquetas |
| `--accent`, `--accent-2`, `--accent-ink` | acción principal y su tinta |
| `--good`, `--warn`, `--danger` | estados |

### Paneles de figura (`.diagram`)
- **Tema oscuro:** plano azul noche `#101722` con cuadrícula, tinta clara.
- **Tema claro:** “papel de plano”: un tono algo más oscuro que el fondo (`--fig-bg`), cuadrícula del acento al 8 %, tinta oscura.
- Los SVG de los ramos usan una paleta fija. En temas claros se re-mapea por atributo:

| Original (oscuro) | Rol | Claro |
|---|---|---|
| `#EAF1F8` | texto fuerte | `--fig-ink` |
| `#9FB2C6` `#8FA0B2` `#9FB0C2` `#8A97A6` | texto secundario | `--fig-ink2` |
| `#6B7E92` `#5B6B7A` `#7C8E9E` `#4F6A86` | texto tenue | `--fig-ink3` |
| `#2A3543` `#3A4A5C` `#2A3F52` `#3A4B5E` `#3A424C` | líneas de grilla | `--fig-line` |
| `#171E28` `#0E1622` `#0E1116` `#111B2A` `#0A1828` `#1C2836` `#071420` | rellenos de fondo | `--fig-fill` |
| `#4EA8FF` `#3E8DC4` | azul | `#0B63C4` |
| `#5FE0B0` `#43CFA0` `#4FD6C4` `#3AC7C7` | verde/turquesa | `#0B8A63` |
| `#F2B84B` `#C9A227` | ámbar | `#A86A00` |
| `#7C8CFF` `#C98AFF` | violeta | `#4C55D6` |
| `#FF7A7A` | rojo | `#C62828` |

Los tonos de suelo y madera (`#C98A55`, `#8B5A2B`, `#5C3A1E`…) no cambian: ya funcionan en ambos fondos.
- **Tema oscuro, texto tenue:** `#6B7E92` sube a `#8698AD` (de 4,0:1 a 5,6:1 sobre `#101722`).

## 3. Tipografía
- Títulos: `--font-display` (Sora), 600–700, `letter-spacing:-.02em`.
- Cuerpo: Inter 15–16 px, interlineado 1,55.
- Etiquetas y datos: JetBrains Mono, MAYÚSCULAS, `letter-spacing:.12em`, mínimo 11 px.

## 4. Estructura de ramo
- **Unidad:** bloque con fondo `--surface-2` teñido de acento, número grande, rótulo “UNIDAD N”, título y subtítulo; separado 40 px de la anterior.
- **Tema:** tarjeta con borde `--line`, número monoespaciado, título y bajada; 12 px entre tarjetas. Abierto: borde de acento.
- **Navegador de unidades:** chips horizontales con número y nombre corto.

## 5. Evalúate · lenguaje “Arena”
Inspirado en interfaces de consola: limpio, oscuro o claro según el tema, con jerarquía fuerte.
- **HUD:** una sola fila: jugador y nivel con barra de XP | presupuesto | estado. Sigue el tema.
- **Lobby:** tarjeta de jugador con emblema de rango y XP; etapas como **tarjetas de modo** (2 columnas) con número, ícono, nombre, recompensa y estado (Jugar · Completada · Bloqueada). La siguiente etapa disponible se destaca a todo el ancho con “Continuar”.
- **Partida:** barra de ronda segmentada, temporizador circular, opciones como botones grandes con tecla A/B/C/D, racha visible (“Racha ×3”).
- **Feedback:** acierto = borde y brillo verde + “+XP” flotante; error = sacudida corta + rojo. Sin sonido. Se respeta `prefers-reduced-motion`.
- **Resultado:** rango por letra (S, A, B, C, D) según el % del XP máximo de la etapa, conteo animado de XP y logros.
- **Notificaciones:** arriba, bajo el HUD, estilo “logro desbloqueado”; nunca sobre la barra de pestañas.

## 6. Portada (Hoy) y fondo
- Fondo de la app estilo iOS: degradados radiales suaves sobre el color base del tema, sin grilla ni foto.
- Tarjeta principal con malla de color (`--m26-g1`, `--m26-g2`) y un edificio BIM isométrico dibujado en vector: ejes A–C y 1–3, losas, pilares y fachada vidriada. Texto siempre blanco sobre la malla oscura.
- Bajo la clase siguiente, accesos rápidos de estudio: Repaso, Quiz, Plan y Más.

## 7. Estudio (pestaña nueva)
- Reemplaza a “Mochila”. Arriba las herramientas; abajo tus materiales, consulta y ajustes.
- **Repaso espaciado (recuerdo activo):** cada tarjeta parte con una pregunta y un espacio para escribir lo que recuerdas antes de mirar. “Pistas” muestra la respuesta con los términos clave (normas, siglas, cifras con unidad) tapados para revelarlos de a uno. La respuesta se presenta por ideas numeradas, la primera como idea central, con los términos clave marcados, junto a lo que escribiste para comparar. Se califica con No lo sabía, Me costó, Lo sabía o Fácil (teclas 1 a 4; espacio voltea). Cajas Leitner de 0, 1, 3, 7, 16 y 35 días, guardadas en `m26_srs`.
- **Quiz rápido:** 10 preguntas del banco del ramo con explicación inmediata, sin vidas ni presupuesto. Los errores se guardan (`m26_err`) para repasarlos.
- **Plan hacia la prueba:** reparte los temas no leídos entre hoy y la fecha de la prueba y deja el último día para repasar (`m26_plan`).
- **Apuntes Feynman:** concepto, explicación simple y dónde te trabaste (`m26_notas`).
- **Foco:** vive solo aquí; ya no aparece en los ramos ni en Hoy.

## 8. Sonido
- Todo sintetizado con Web Audio, sin archivos: pings FM de cristal o sinapsis, un eco corto filtrado como “espacio neuronal” y un zumbido grave con batido lento al cerrar un bloque.
- Suena en: navegación (toque muy suave), abrir herramienta, voltear tarjeta, revelar hueco, acierto y error, calificación, inicio y pausa del Foco, fin de bloque (acorde doble y vibración en el teléfono) y fin de pausa.
- Se apaga en Estudio › App › Sonido o con el parlante de la hoja de Foco (`m27_snd`).

## 9. Accesibilidad (contraste AA)
- Meta: texto normal ≥ 4,5:1 y texto grande ≥ 3:1 en los 8 temas.
- Los paneles de norma, pasos de ejercicio y tablas usan los tokens de superficie y texto del tema, nunca colores fijos.
- La Bitácora en temas oscuros usa papel negro, tinta #F1F1F1 y acentos amarillos; los textos de las láminas llevan un halo del color del papel.
- Una guardia (`m26Contraste`) revisa el texto al cambiar de tema o de vista y, si algo queda bajo el mínimo, lo acerca a blanco o negro. Compone fondos translúcidos y degradados, e ignora el fondo de un contenedor cuando el texto está posicionado fuera de él. Para excluir un elemento: clase `m26-skip`.

## 10. Cómo se verifica
Antes de publicar: auditoría de contraste en los 8 temas (`aud.js`), capturas en `amarillo`, `celeste` y `dark` de Hoy, Estudio y sus herramientas, una norma y la Bitácora; regresiones `t24`, `t20v24`, `t22`, `t23` sin errores.

## 11. v2.8 · Glosario activo, mapas mentales y calculadoras

**Glosario técnico** (`m28glos.js`, `glos28.js`). Une tres fuentes: 289 términos base (construcción, urbanismo OGUC/LGUC, NCh, hormigón, suelos, topografía, costos, prevención), los términos de las fichas de cada ramo y los términos propios del estudiante (`DB.glossary`, `mio:true`). Cada tarjeta se expande con fuente (enlace a bcn.cl para OGUC y LGUC), términos relacionados, "aparece en tus ramos" y "agregar a semejanzas". Pestaña Semejanzas: grupos guardados (`m28_glos`) que se comparan lado a lado y se convierten en mapa mental. Las citas de artículo que no se pudieron confirmar quedan a nivel de título a propósito.

**Mapas mentales** (Estudio › 🕸️, `m28map.js`). Plantillas: en blanco, concepto, proceso, comparar y desde un ramo. Tres modos: Ideas (escribir, idea hija o hermana, tipo y color), Dibujar (trazo libre, borrador, deshacer) y Practicar (oculta todo menos la raíz; el estudiante recuerda y revela, recuperación activa). Exporta PNG. Guardado en `m28_mapas`.

**Calculadoras** (`m28calc.js`). 52 calculadoras en 10 temas con burbuja "para qué / cómo funciona / qué calcula / supuestos" y una pestaña Cubicar obra (elementos → lista de materiales). Activas desde el 22-10-2026 (`M28_CALC_ON=true`); la pestaña Fichas NCh conserva las 39 fórmulas anteriores.

**Flashcards por semestre.** La lista se agrupa por semestre de la malla (el actual abierto) y los selectores de ramo usan grupos por semestre.

## 12. v2.9 · Acceso por perfil (modo primer año)

`m29.js`. Sin servidor: todo vive en el navegador de cada alumno.
- **Modo completo**, el de siempre: todo abierto. Un dispositivo sin `m29_acceso` está en este modo.
- **Modo primer año**: se activa abriendo `…/mycelion/#primero` en un dispositivo nuevo, o desde Estudio › Acceso › "Ver como alumno". Oculta los datos personales de la configuración (nombre, créditos, horario) y parte en el 1° semestre.
- **Desbloqueo de un semestre**, con cualquiera de tres llaves:
  1. avance ≥ 70% del semestre anterior (unidades marcadas, temas leídos y tarjetas repasadas; queda ganado);
  2. fecha en `M29_FECHAS` (o fijada en el dispositivo con la clave);
  3. clave maestra, guardada solo como `sha256("myc29|"+clave)` en `M29_HASH`.
- **Candados**: `openRamoPanel`, `m24Abrir` y `m26Abrir` muestran la hoja de candado; la malla y los selectores marcan 🔒. Calculadoras, glosario, mapas, foco y flashcards propias quedan abiertos.
- **Límite conocido**: quien lea el código puede saltarse el candado. Para un bloqueo real hacen falta cuentas con servidor.

## 13. v3.0 · Contenido propio de 1° semestre
- Siete módulos nuevos con el motor de m23 (`m23_nvm, fye, ipl, pgr, tgr, cbs, hdi`): Nivelación Matemática, Formas y Espacio, Interpretación de Planos, Partidas de Obra Gruesa, Taller de Obra Gruesa, Habilidades Básicas de Comunicación y Herramientas Digitales.
- Cada uno trae temas, fichas enlazadas, normas citadas por título y un pack de Evalúate (duelo, verdadero o falso, conecta y crisis). Nivelación, Formas e Interpretación de Planos traen herramienta (conversor y regla de tres, figuras y cuerpos, escalas).
- El contenido es original y general. No usa material de Duoc ni lo reemplaza; las normas se citan para que el alumno las revise en bcn.cl o el INN.
- Se escriben como datos en `tools/c30_<pfx>.py` y `tools/gen30.py` genera el módulo validando referencias de fichas, respuestas del duelo y nodos de las crisis.
- El motor ahora omite el salto a unidades que no existen (Taller de Obra Gruesa tiene 3).
- Desbloqueo: leer el 70 % de los temas de un semestre basta para abrir el siguiente; repasar fichas suma por encima de eso.

## 14. v3.1 · Presupuesto de obra
- La pestaña "Cubicar obra" de Calculadoras pasa a ser "Presupuesto de obra" (`m31data.js`, `m31.js`, `m31.css`); también se abre desde Estudio. El cubicador de v2.8 queda en el código pero ya no se muestra; sus datos (`m28_obra`) no se borran.
- Seis vistas: Proceso (9 etapas del terreno a la entrega de llaves, con checklist, entregables, normativa y error típico), Obra (ficha y parámetros), Partidas, Insumos, Resumen y Flujo.
- Itemizado tipo de 82 partidas en 12 capítulos. Cada partida se cubica con filas de medición (ubicación, veces, largo, ancho, alto; veces negativas descuentan) o con una fórmula que cita otras partidas (`[2.1]`), evaluada con un parser propio sin `eval`. El acero se cubica por barras × largo × Ø²/162. Ayudas: excavación con talud (prismoide) y superficie inclinada.
- APU por partida contra una base de insumos con precios de ejemplo; cambiar un precio lo cambia en toda la obra. Leyes sociales y herramientas menores sobre la mano de obra.
- Resumen: CD por capítulo, GG detallados (por mes según plazo, global o % del CD), imprevistos sobre CD, utilidad sobre CD + GG, IVA, $/m², UF/m² y vista del mandante (presupuesto oficial DOM, derechos 1,5 %, ITO, terreno, proyectos).
- Flujo: capítulos repartidos en el plazo, curva S y estados de pago con anticipo y retención. Es la base de la programación, que viene después.
- Se guarda en `m31_obra` (localStorage) y entra en el respaldo completo. Copia a Excel como texto separado por tabulaciones.

## 15. v3.2 · Presupuesto de obra: mapa micelio
- La pantalla de Partidas y la de Proceso dejan el acordeón vertical y se despliegan **hacia el lado**, como el micelio: capítulos → partidas → la partida → su menú. Cada columna nueva nace del ítem abierto, unida por una hifa (curva SVG que se dibuja sola). Archivos: `m32.js`, `m32.css`, `m32data.js`; `m32.js` reemplaza las funciones de pantalla de `m31.js` (la última declaración gana) y `_m31Live` llama a `_m32Post` para las barras.
- Se ve una sola columna a la vez en el celular (la anterior asoma 54 px; las demás se atenúan). La barra «Obra › capítulo › partida › rama» lleva a cualquier nivel. Estado en `_m32` (cap, open, sub, et, esub).
- Menú de la partida: Cantidad (mediciones o fórmula), Precio unitario (APU con barra de composición M/MO/EQ/HM/SC en vivo), En tus ramos, Ajustes. Proceso: cada etapa abre Qué hacer, Entregables y normas, Presupuesto y ramos.
- **Guía paso a paso** (interruptor, se recuerda en `m32_guia`): diagrama SVG por unidad (m³, m², ml, kg, un, gl, tiempo), fórmula y pasos numerados; línea de las 9 etapas con avance; cadena del precio en Resumen (CD → GG → imprevistos → utilidad → neto → IVA).
- **Ramos relacionados**: `M32_CAPR` (por capítulo) y `M32_ETR` (por etapa) enlazan con `mycRamoGo(rid)`; los del semestre en curso llevan la etiqueta «este semestre». Es una relación temática, no el temario del programa.
- Los estilos `.m24 .a` de otros módulos pisaban `.m31-chip.a`; se corrige en `m32.css`.
- Verificación: `tools/p32.js` y `tools/p32b.js` (mapa, edición en vivo, talud, agregar, renombrar, quitar, guía, ceros), más el resto de las regresiones.
- `GUIA-GITHUB.md`: cómo ordenar los proyectos en GitHub, dejarlos en línea y cargar contenido nuevo.

## 16. v3.3 · Menú lateral, normativa ilustrada, catálogo completo y modelo 3D
- **Menú lateral** (`m33.js`, `m33.css`): las pestañas del presupuesto pasan a un riel vertical con hifa, agrupado en Anteproyecto, Cubicar, Valorizar y Programar. Se contrae a íconos; en contenedores angostos (<900 px) y en el celular sale como cajón desde el lado. El ancho se mide sobre el contenedor (`nar`), no sobre la ventana, porque la app vive en una columna de ~600 px. Cada pantalla termina con «Siguiente paso».
- **Normativa del predio**: frente, fondo, antejardín, distanciamientos, rasante, CoS, CC, altura y agrupamiento (O.norm). Calcula superficie, área edificable, huella máxima y construible, y compara contra el modelo. Cuatro láminas SVG al estilo OGUC ilustrada (planta, corte con rasante, volumen CC, agrupamiento) que se redibujan con los números. Los valores de ejemplo se cambian por los del Certificado de Informaciones Previas.
- **Catálogo por norma** (`m33data.js`): 180 partidas (las 82 de v3.1 más ~100 nuevas) en 12 capítulos y ~45 grupos, cada grupo con su criterio de medición y las normas que lo rigen (OGUC, LGUC, NCh 170, 430, 433, 1928, 1198, 2123, 1537, RIDAA, etc.). Buscador y mapa lateral; «Abrir en Partidas» la agrega a la obra. Precios de referencia, no cotización.
- **Modelo 3D** (`m33_3d.js`): edificio paramétrico (largo, ancho, pisos, alturas, espesores, material, cimiento, techo, vanos, escalera, pavimento) con renderer propio en canvas 2D: perspectiva u ortogonal, z-buffer, buffer de id para selección, bordes por id y normal, caja de sección X/Y/Z, niveles, estilos Sombreado/Líneas/Colores, vistas 3D, planta (corte a 1,2 m), frentes y laterales, cotas, navegador por categoría, propiedades por elemento y cantidades.
- **Cubicación automática**: 45 filas con la etiqueta «[Modelo]» en 37 partidas. Reemplaza o suma a las mediciones; no toca partidas en modo fórmula. Es un anteproyecto: las cantidades son para estimar, no reemplazan el cómputo del proyecto de arquitectura y cálculo.
- Verificación: `tools/p33.js` (pantallas, 3 anchos, 2 temas), `tools/g33.js` (generación de filas, selección, parámetros) y las regresiones previas.

## 17. v3.4 · Contenido de todos los ramos (en tandas)
- Objetivo: que cada ramo de la malla 2024 y de la malla 2026 tenga materia completa, de 1° semestre al final. Se entrega por tandas de semestres; esta cubre el 2° y el 3°.
- Cada ramo es un módulo con el mismo motor de v2.3 (3 unidades × 3 temas, fichas con enlaces, normas por unidad, ejercicios resueltos, videos sugeridos, Evalúate con duelo, verdadero/falso, conecta, crisis y frases del Tío Lucho). Se genera desde datos (`c34_*.py` → `m23_*.js`) y se valida: enlaces de fichas, respuestas del duelo y nodos de las crisis.
- **Alias entre mallas**: un módulo puede atender varios ramos (`alias`). Ejemplo: Álgebra (2024) también abre «Matemáticas para el Análisis Técnico» (2026); Mentalidad Emprendedora atiende Herramientas para el Emprendimiento y Gestión de la Microempresa. El motor registra `BT_MODS`, `EVA_ALIAS` y `MODS_ALIAS` para cada alias.
- Tanda 1 (2° semestre): Cubicación, Dibujo y Lectura de Planos, Partidas de Terminaciones, Taller de Terminaciones, Habilidades de Comunicación Efectiva, Álgebra, Inglés Básico I y II.
- Tanda 2 (3° semestre): Presupuesto y Análisis de Costos, Obras Civiles, Estructuras, Legislación y Seguridad, Topografía, Mentalidad Emprendedora, Fundamentos de Antropología (Inglés Básico II comparte módulo con el I).
- Los módulos de 2024 que ya existían (1° semestre, Hormigón, Suelos, IA, etc.) no cambian.
- Alcance honesto: es contenido general escrito para MYCELION, no el programa oficial de Duoc. Cada módulo lo dice en su nota. Las normas se citan para que revises el texto vigente en bcn.cl o en el INN; no se transcriben artículos.
- Ajuste menor: si una unidad no tiene normas, no se dibuja la franja «Normas y documentos».
- Verificación: `tools/t34.js` (todos los módulos con alias: cargan, 9 temas, fichas, pack y alias mapeado, 3 anchos y 2 temas) más las regresiones previas (t24, t20v24, t22, a29, s28, bk28, f28, g28).

## 18. v3.5 · Materia completa de todos los ramos (1° a 8° semestre y malla 2026)
- Se completan las tandas que faltaban: 4° al 8° semestre de la malla 2024 y los ramos propios de la malla 2026. Ahora cada ramo de ambas mallas abre materia propia, salvo los optativos (su contenido depende de lo que elijas) e «IA en Obras de Construcción», que ya tenía módulo propio.
- Tanda 3 (4° semestre): Planificación de Partidas / Programación de Obras, Taller de Hormigón, Instalaciones Domiciliarias, Inglés Elemental I y II, Ética para el Trabajo, Formación Cristiana.
- Tanda 4 (5° y 6° semestre): Contabilidad en la Construcción, Obras de Infraestructura (atiende también Obras Viales), Cálculo Diferencial.
- Tanda 5 (7° y 8° semestre): Estudio de Propuestas, Gestión de la Calidad, Gestión de Personas, Construcción Sustentable, Administración y Logística de Obras, Taller de Estructuras y Edificación en Altura, Ética Profesional, Portafolio de Título, Práctica Profesional.
- Ramos solo de la malla 2026 (módulo propio, código `m26-…`): Construcción y Sociedad, Diagnóstico y Recuperación de Edificaciones, Instalaciones Especiales y Gestión del Agua en la Construcción.
- Alias nuevos hacia módulos que ya existían: Taller de Obras de Construcción → Taller de Obra Gruesa; Habilidades de Comunicación → Habilidades Básicas de Comunicación; Habilidades Numéricas → Nivelación Matemática; Gestión de Negocios y Evaluación de Proyectos → Economía y Evaluación de Proyectos; Coordinación BIM → Modelamiento y Coordinación; Análisis de Datos → Estadística; Análisis Estructural y Comportamiento Sísmico → Análisis Estructural; IA en Herramientas Digitales → Herramientas Digitales. Mecánica de Suelos y Tecnología del Hormigón conservan sus módulos dedicados de siempre (la versión 2026 enlaza a ellos).
- Los módulos de 2026 propios se rotulan «Malla 2026» (en el motor, la nota al pie usa «Malla 2026» cuando el id parte con `m26-`).
- Total: 44 módulos del motor de v2.3 (3 unidades × 3 temas cada uno, salvo los de v3.0 que ya eran más grandes) más los módulos dedicados anteriores.
- Alcance honesto: es contenido general, no el programa oficial de Duoc. Las normas se citan para que revises el texto vigente; no se transcriben artículos. Los optativos (OPT-3, OPT-4, FCCG-6, OPT-67) y «Formación Complementaria» no tienen materia fija.
- Verificación: `t34.js` sobre los 44 módulos (sin errores, 9 temas, pack completo, alias mapeados), `open34.js`/`pane34.js` para abrir cada ramo 2026, y las regresiones previas.

## 19. v3.6 · Profundización de contenido y cierre de optativos
- Se amplían 40 módulos del motor con una unidad nueva («casos y errores»): 3 temas con ejercicios resueltos y tablas, 4 fichas `x_*`, +4 preguntas de duelo, +2 verdadero/falso, +1 conecta, +1 crisis y +1 frase. El tema por ramo cambia (errores de signos, pérdidas y esponjamiento, escalas y RFI, ruta crítica, a/c y probetas, VAN y TIR, transmitancia U, punto de pedido y estados de pago, firma profesional, etc.).
- Mecanismo: `tools/gen35.py` fusiona los datos de `tools/x35_*.py` (un diccionario `EXTS` por módulo) sobre el módulo base (`c34_*` o `c30_*`) y reescribe `m23_<pfx>.js`. Se ejecuta al final, porque regenerar con `gen34.py` pisa la ampliación. Valida enlaces entre fichas y las opciones del duelo.
- Los módulos grandes de v3.0 (Análisis Estructural, Economía, Modelamiento, Estadística) y los de Inglés, Habilidades Básicas de Comunicación, Nivelación y Herramientas Digitales no se amplían: ya tienen 12 a 15 temas o su ampliación es de otra índole.
- Módulos nuevos para optativos: `opd` (rid `m26-OPT-3`, alias `m26-OPT-67`) y `fcg` (rid `m26-OPT-4`, alias `m26-FCCG-6` y `form-compl`). Son guías de uso, no programa oficial: la oferta de optativos cambia por sede y semestre.
- Cobertura: la malla 2024 (54 ramos) y la 2026 (44) abren materia; los únicos que no usan el motor son los de módulo propio (Mecánica de Suelos, Tecnología del Hormigón, IA en Obras).
- Alcance honesto: contenido general y valores referenciales (λ, 25 kN/m³, 0,8 kg CO₂/kg de cemento, recargo del 50 % de horas extra, reducción de jornada). Se debe revisar la norma o el contrato vigentes.
- Verificación: `t34.js` (12 temas por módulo ampliado), `pane34.js` para abrir los 9 ramos de optativos y complementarios, y regresiones t24, t20v24, t22, a29, s28, bk28, f28 y g28.

