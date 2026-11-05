# Guía: guardar todos tus proyectos en GitHub y dejarlos en línea

Para Matías. Pensada para hacerla desde el celular o el computador, sin terminal.

## ¿Conviene GitHub?

Sí, para casi todo lo que vas a agregar: apps, planillas (CSV), listas de precios, apuntes en Markdown y datos en JSON. Guarda el historial de cada cambio, sirve de respaldo y es gratis.

No sirve para:
- **Archivos de Duoc** (PPT, PDF, guías de clase): tienen derechos de autor. Si los subes, que sea a un repositorio **privado**.
- **Contraseñas, claves o datos de clientes**: nunca, ni en privado.
- **Archivos muy pesados** (videos, planos grandes): el navegador acepta hasta 25 MB por archivo.

## Cómo ordenar varios proyectos

Un repositorio por proyecto, con nombre corto en minúsculas.

| Repositorio | Visibilidad | Qué lleva |
|---|---|---|
| `mycelion` | Público | La app (`index.html`). Ya existe y ya está en línea. |
| `mycelion-contenido` | **Privado** | Tus apuntes, PPT de clases, listas de precios y cotizaciones. Es la materia prima: de aquí se arman los temas de la app. |
| `astros` y los demás (constructora, hormigón verde, mascotas, portafolio) | El que corresponda | Uno por proyecto, con un README de tres líneas. |

Regla simple: lo que debe verse en internet va en un repositorio público; lo que es material de clases o de tu negocio, en uno privado.

## 1. Conectar (se hace una vez)

1. Tu cuenta es `valtsoto-star`. Activa la verificación en dos pasos: github.com → Settings → Password and authentication.
2. Conecta GitHub a Claude: https://claude.ai/connect-github
3. Instala la app de Claude en tus repositorios: https://github.com/apps/claude/installations/select_target. Elige **Only select repositories** y marca los de tus proyectos.
4. Cuando crees un repositorio nuevo, vuelve al paso 3 y agrégalo a la lista.

## 2. Subir archivos

Desde github.com, sin terminal:
1. Entra al repositorio.
2. **Add file → Upload files**.
3. Arrastra los archivos (carpetas incluidas).
4. Escribe una línea que diga qué subiste y toca **Commit changes**.

Para crear un repositorio nuevo: github.com/new, escribe el nombre, marca **Private** o **Public** y toca **Create repository**.

## 3. Dejarlo en línea (como astros)

1. Repositorio → **Settings → Pages**.
2. En **Source** elige **Deploy from a branch**, rama **main**, carpeta **/ (root)**, y guarda.
3. En un par de minutos queda en `https://valtsoto-star.github.io/NOMBRE-DEL-REPOSITORIO/`.
4. En el celular: abre el enlace y usa "Agregar a pantalla de inicio".

GitHub Pages gratis funciona con repositorios públicos. Por eso la app va en uno público y el contenido de clases en uno privado.

## 4. Cargar el contenido a MYCELION

1. Sube tus archivos al repositorio privado `mycelion-contenido`, en una carpeta por ramo (por ejemplo `presup-costos/`).
2. Dime en el hilo qué ramo y qué archivos usar.
3. Los convierto en temas, fichas y preguntas de Evalúate dentro de la app, la armo como versión nueva y la publico en `mycelion`.
4. En un minuto o dos aparece en el enlace de siempre. Tu progreso queda guardado en el navegador y entra en el respaldo de la app.

La app es un solo archivo que funciona sin internet, así que el contenido nuevo llega con cada versión y no se descarga aparte.

## Seguridad en una línea

Un repositorio público lo puede leer cualquiera. Antes de subir algo, pregúntate si te molestaría verlo en Google.
