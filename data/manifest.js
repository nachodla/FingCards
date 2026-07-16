/* ============================================================
   Catálogo de materias de FingCards.
   Para agregar una materia nueva: creá data/<materia>.js con
   FING.registerSubject({...}) y sumá su ruta a esta lista.
   El orden de esta lista es el orden en que aparecen en el hub.
   ============================================================ */
window.FING = window.FING || {};
window.FING.manifest = [
  "data/tiis.js",
  "data/sistemas-operativos.js",
  "data/arquitectura-computadoras.js",
  "data/redes-computadoras.js"
];
