# Subir MYCELION OS a Google Apps Script

Queda como una página tuya en Google, independiente de Claude. Tu progreso se guarda en tu Google Drive (archivo `mycelion_datos.json`), así que lo ves igual en el celular y en el PC.

## Pasos (una sola vez, unos 10 minutos, mejor desde el PC)

1. Entra a https://script.google.com con tu cuenta de Google y toca **Nuevo proyecto**. Ponle de nombre `MYCELION OS`.
2. Borra lo que trae `Código.gs` y pega todo el contenido de **Code.gs**.
3. Toca **＋ (Agregar archivo) → HTML**, nómbralo exactamente `index` y pega todo el contenido de **index.html** (reemplaza lo que trae). Guarda con Ctrl+S.
4. Arriba a la derecha: **Implementar → Nueva implementación**.
   - Tipo: **Aplicación web**.
   - Ejecutar como: **Yo**.
   - Quién tiene acceso: **Solo yo** (tus apuntes y notas quedan privados).
5. Toca **Implementar**, acepta los permisos (Google pide acceso a tu Drive para guardar el archivo de progreso) y copia la **URL de la aplicación web**.
6. Abre esa URL en el celular y agrégala a la pantalla de inicio (Chrome: menú ⋮ → Agregar a pantalla principal).

## Cuando te mande una versión nueva

Reemplaza el contenido de `index` por el nuevo `index.html`, guarda y ve a **Implementar → Administrar implementaciones → ✎ editar → Versión: Nueva versión → Implementar**. La URL no cambia y tu progreso se mantiene.

**Desde la v1.8** también reemplaza `Código.gs` por el nuevo **Code.gs** (trae la función que pasa tus evaluaciones a Google Calendar). La primera vez que toques *Programación → Pasar a Google Calendar → Agregar todas*, Google te pedirá permiso para usar tu Calendar: acéptalo.

También puedes bajar siempre la última versión desde GitHub: https://github.com/valtsoto-star/mycelion (carpeta `apps-script`).

## Si algo falla

- Si el editor no deja pegar el archivo por ser muy grande, avísame y lo divido en partes.
- Si ves datos viejos en un dispositivo, recarga la página: siempre gana la copia guardada más reciente.
