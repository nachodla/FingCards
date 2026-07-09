# 🎴 FingCards

Hub de repasos teóricos para las materias de la **Facultad de Ingeniería**.

Cada materia tiene uno o más HTML autónomos (con todas las preguntas embebidas y
su propia lógica de estudio). El `index.html` es un **hub** que los integra y deja
navegar **entre materias** y **entre los semestres/parciales** de cada una.

Todo es **estático**: no hay backend ni build step. Los cambios entran **por git**.

👉 Publicado en: `https://nachodla.github.io/FingCards/`

## Estructura

```
index.html                 Hub (estilos + router + render, todo inline)
data/
  manifest.js              Lista de materias a cargar
  <materia>.js             FING.registerSubject({...}) de cada materia
materias/
  <materia>/<archivo>.html HTML autónomos de repaso (tal cual)
```

## Cómo agregar una materia nueva

1. Subí el HTML autónomo a `materias/<materia>/<archivo>.html`.
2. Creá `data/<materia>.js` copiando uno existente y editando los datos:
   ```js
   FING.registerSubject({
     id: "mi-materia",
     nombre: "Nombre de la materia",
     sigla: "SIGLA",
     emoji: "📘",
     accent: "#4f46e5",
     descripcion: "…",
     semestres: [
       { id: "2026-s1", nombre: "2026 · Semestre 1", recursos: [
         { titulo: "Repaso …", tipo: "opcion-multiple", preguntas: 100,
           nota: "Parciales …", url: "materias/mi-materia/archivo.html" }
       ]}
     ]
   });
   ```
3. Sumá `"data/<materia>.js"` a la lista de `data/manifest.js`.

`tipo` válido: `"opcion-multiple"` o `"teorico"`.

## Cómo agregar un parcial/recurso a una materia existente

Editá su `data/<materia>.js`: agregá un objeto a `recursos` (dentro del semestre
que corresponda) o creá un semestre nuevo en `semestres`. Subí el HTML a la carpeta
de la materia. Listo.

## Publicación (GitHub Pages)

Settings → Pages → Deploy from a branch → rama y carpeta `/root`. El archivo
`.nojekyll` evita el procesamiento Jekyll. Funciona igual abriendo `index.html`
localmente en el navegador.
