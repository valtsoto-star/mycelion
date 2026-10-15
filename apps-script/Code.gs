/**
 * MYCELION OS · Google Apps Script
 * Sirve la app y guarda tu progreso en un archivo de tu Google Drive
 * (mycelion_datos.json), para que lo veas igual en el celular y en el PC.
 */
var ARCHIVO = 'mycelion_datos.json';

function doGet() {
  var html = HtmlService.createHtmlOutputFromFile('index').getContent();
  var datos = leerDatos_();
  // Los datos se inyectan antes que la app, así la app parte con tu progreso.
  var boot = '<script>window.__MYC_SERVER__=' +
    JSON.stringify(datos).replace(/</g, '\\u003c') + ';</script>';
  html = html.replace('<head>', '<head>' + boot);
  return HtmlService.createHtmlOutput(html)
    .setTitle('MYCELION OS')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1, viewport-fit=cover')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function archivo_() {
  var it = DriveApp.getFilesByName(ARCHIVO);
  return it.hasNext() ? it.next() : null;
}

function leerDatos_() {
  var f = archivo_();
  if (!f) return { ts: 0, data: {} };
  try { return JSON.parse(f.getBlob().getDataAsString()); }
  catch (e) { return { ts: 0, data: {} }; }
}

/** Lo llama la app (google.script.run) cada vez que guardas algo. */
function guardarDatos(json) {
  var f = archivo_();
  if (f) f.setContent(json);
  else DriveApp.createFile(ARCHIVO, json, MimeType.PLAIN_TEXT);
  return true;
}

/**
 * v1.8 · Pasa las evaluaciones pendientes a tu Google Calendar principal.
 * Cada evento lleva la marca [MYC:id] en la descripción: si vuelves a tocar
 * el botón, se actualiza en vez de duplicarse.
 * La primera vez Google te pedirá permiso para usar Calendar.
 */
function agregarAlCalendar(json) {
  var lista = JSON.parse(json), cal = CalendarApp.getDefaultCalendar();
  var nuevos = 0, actualizadas = 0, tz = 'America/Santiago';
  if (!lista.length) return { nuevos: 0, actualizadas: 0 };
  var p = function (f, h) { return Utilities.parseDate(f + ' ' + (h || '00:00'), tz, 'yyyy-MM-dd HH:mm'); };
  var fechas = lista.map(function (g) { return g.fecha; }).sort();
  var desde = new Date(p(fechas[0]).getTime() - 400 * 86400000);
  var hasta = new Date(p(fechas[fechas.length - 1]).getTime() + 2 * 86400000);
  // Una sola lectura del calendario; se buscan las marcas [MYC:id] ya creadas.
  var previos = {};
  cal.getEvents(desde, hasta).forEach(function (ev) {
    var m = (ev.getDescription() || '').match(/\[MYC:([^\]]+)\]/);
    if (m) (previos[m[1]] = previos[m[1]] || []).push(ev);
  });
  lista.forEach(function (g) {
    var viejos = previos[g.id] || [];
    viejos.forEach(function (ev) { ev.deleteEvent(); });
    var opt = { description: g.desc, location: g.lugar || '' }, ev;
    if (g.ini) ev = cal.createEvent(g.titulo, p(g.fecha, g.ini), p(g.fecha, g.fin), opt);
    else ev = cal.createAllDayEvent(g.titulo, p(g.fecha), opt);
    ev.addPopupReminder(24 * 60);
    if (g.ini) ev.addPopupReminder(120);
    if (viejos.length) actualizadas++; else nuevos++;
  });
  return { nuevos: nuevos, actualizadas: actualizadas };
}
