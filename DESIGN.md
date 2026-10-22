# MYCELION OS · Guía de diseño (v2.6)

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
- **Repaso espaciado:** fichas de cada ramo con cajas Leitner (0, 1, 3, 7, 16 y 35 días). Guardado en `m26_srs`.
- **Quiz rápido:** 10 preguntas del banco del ramo con explicación inmediata, sin vidas ni presupuesto. Los errores se guardan (`m26_err`) para repasarlos.
- **Plan hacia la prueba:** reparte los temas no leídos entre hoy y la fecha de la prueba y deja el último día para repasar (`m26_plan`).
- **Apuntes Feynman:** concepto, explicación simple y dónde te trabaste (`m26_notas`).
- **Foco:** vive solo aquí; ya no aparece en los ramos ni en Hoy.

## 8. Accesibilidad (contraste AA)
- Meta: texto normal ≥ 4,5:1 y texto grande ≥ 3:1 en los 8 temas.
- Los paneles de norma, pasos de ejercicio y tablas usan los tokens de superficie y texto del tema, nunca colores fijos.
- La Bitácora en temas oscuros usa papel negro, tinta #F1F1F1 y acentos amarillos; los textos de las láminas llevan un halo del color del papel.
- Una guardia (`m26Contraste`) revisa el texto al cambiar de tema o de vista y, si algo queda bajo el mínimo, lo acerca a blanco o negro. Compone fondos translúcidos y degradados, e ignora el fondo de un contenedor cuando el texto está posicionado fuera de él. Para excluir un elemento: clase `m26-skip`.

## 9. Cómo se verifica
Antes de publicar: auditoría de contraste en los 8 temas (`aud.js`), capturas en `amarillo`, `celeste` y `dark` de Hoy, Estudio y sus herramientas, una norma y la Bitácora; regresiones `t24`, `t20v24`, `t22`, `t23` sin errores.
