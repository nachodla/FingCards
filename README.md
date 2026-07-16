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

---

## Prompt: generar un HTML de repaso teórico desde una carpeta

Usá este prompt (copiar/pegar) cuando le pases a un agente una **carpeta con
parciales o exámenes** (PDFs con letra y/o soluciones) y, opcionalmente,
**diapositivas/fuentes** de la materia. El objetivo es un HTML autónomo de
flashcards teóricas integrado al hub, **igual** que los de SO o Arqui.

### Prompt (copiar desde aquí)

```
Trabajá en el repo FingCards (hub estático de repasos FING).

## Objetivo
A partir de la carpeta de material que te indico, creá un HTML autónomo de
flashcards TEÓRICAS (no MCQ salvo que yo diga lo contrario), al mismo estilo
que los existentes en:
- materias/sistemas-operativos/teorico-1er-parcial.html
- materias/sistemas-operativos/teorico-examenes.html
- materias/arquitectura-computadoras/teorico-examenes.html

Tomate el tiempo necesario. No inventes respuestas: si no hay solución oficial
ni diapositiva suficiente, marcá la fuente y dejá nota, o preguntame.

## Carpeta de entrada
Ruta: <PEGÁ_ACÁ_LA_CARPETA>
Contenido típico:
- PDFs de parciales y/o exámenes (letra + solución, o solución que incluye letra)
- Opcional: diapositivas / apuntes para completar huecos

Tipo de evaluación a procesar (elegí uno o aclaralo):
- [ ] 1er parcial
- [ ] 2º parcial
- [ ] exámenes (no parciales)
- [ ] todo lo que haya

Materia:
- Nombre: <NOMBRE>
- id carpeta (kebab-case): <ej. arquitectura-computadoras>
- sigla: <ej. Arqui / SO>
- accent color (hex): <opcional; si no, elegí uno distinto a las materias ya usadas>

## Qué extraer (reglas de contenido)
1. Priorizá las **preguntas teóricas** (casi siempre las primeras del parcial/examen:
   "Pregunta 1…", "Problema 1 (a)(b)…", bloques "conteste justificando").
2. Si un ejercicio tiene partes (a)(b)(c) del **mismo** tema conceptual, **ponelas
   juntas en una sola card**.
3. Si más adelante hay una pregunta teórica que se contesta **sin** haber resuelto
   el ejercicio numérico/código completo, incluila.
4. **No** metas:
   - diagramas de planificación completos a rellenar
   - implementaciones largas (monitores/semáforos/C/asm de 2 páginas)
   - problemas de circuitos/FS que son solo "programar/construir" sin teoría
5. Cada card debe tener respuesta. Origen de la respuesta, en este orden:
   a) **Solución oficial** del PDF (si está)
   b) **Diapositivas** de la carpeta (citá deck + nº de diapositiva si podés)
   c) **General** solo si no hay (a) ni (b), con `note` honesta de verificar
6. No inventes. Si el PDF es ilegible o ambigua, preguntá o omití con justificación.

## Formato de cada pregunta (array DATA embebido en el HTML)
Cada item:
{
  "id": "único-estable",           // ej. 2024-07_p1a
  "exam": "Julio 2024",            // etiqueta legible
  "code": "2024-07",               // YYYY-MM para ordenar
  "problema": "P1 (a)",            // o "Pregunta 2"
  "topic": "tema corto",           // pill en la card
  "cat": "Categoría del filtro",   // tema del curso si hay listado; si no, coherente
  "q": "enunciado completo…",
  "answer": "respuesta…",          // párrafos separados por \n\n
  "atype": "oficial" | "slides" | "general",
  "sources": [ { "deck": "claseX.pdf", "slides": [3,4] } ],  // [] si oficial sin slides
  "note": "opcional, solo si general o cobertura parcial"
}

Si la materia tiene **temario numerado** (ej. "14- Jerarquía de memoria"), usá
ese orden en `cat` (prefijo numérico) y ordená el filtro/mapa de dominio por número.

## UI / UX del HTML (obligatorio, mismo patrón que los existentes)
- Un solo archivo HTML autónomo: CSS + JS + DATA inline (sin build, sin backend).
- Link fijo "← Inicio" a `../../index.html` (o al hub correcto según profundidad).
- Flashcards: revelar respuesta, anterior/siguiente, "La sabía" / "A repasar".
- Filtros: orden (por parcial/examen | aleatorio), tema (`cat`), examen, ocultar sabidas.
- Lista lateral buscable (toggle).
- Atajos: ← →, espacio/enter revelar, S sabía, R repasar, L lista.
- Progreso en localStorage con clave **única** por recurso (no pises otras páginas).
- Mapa de dominio por `cat`, **plegable** (click en el título; preferencia en state).
- Motivación: XP + nivel + combo de sesión (NO racha de días de calendario).
- Badges de origen: oficial (verde) / slides (azul) / general (ámbar).
- Color de acento distinto al de otras materias ya publicadas.
- Dark/light: preferible con variables CSS legibles (como los actuales).
- Textos en español (rioplatense neutro).

## Integración al hub FingCards
1. Guardá el HTML en:
   materias/<id-materia>/<nombre-descriptivo>.html
   Ejemplos de nombre: teorico-1er-parcial.html, teorico-2do-parcial.html, teorico-examenes.html
2. Si la materia es nueva:
   - Creá data/<id-materia>.js con FING.registerSubject({...})
   - Sumá "data/<id-materia>.js" a data/manifest.js
3. Si la materia ya existe:
   - Editá data/<id-materia>.js: agregá semestre/recurso con
     tipo: "teorico", preguntas: N, url, nota (rango de años)
4. Actualizá descripcion/preguntas del subject para que el hub muestre stats correctas.

## Proceso de trabajo sugerido
1. Inventariá PDFs (separá parciales vs exámenes vs slides si están mezclados).
2. Extraé texto (pdftotext) y localizá bloques de preguntas teóricas + soluciones.
3. Armá el DATA, validá JSON, contá por cat/exam.
4. Generá el HTML (podés copiar estructura de un teorico-*.html existente y
   reemplazar DATA + títulos + LS key + accent).
5. Registrá en data/ + manifest.
6. Verificá que el JS parsea (sin SyntaxError) y que se listan preguntas/temas.
7. No hagas commit/push salvo que te lo pida.

## Criterios de calidad
- Respuestas alineadas al material del curso, no genéricas de internet si hay PDF.
- Multipartes juntas.
- IDs estables y codes ordenables.
- Cero contenido vacío en pantalla (script sin errores).
- No duplicar una card casi idéntica de otro HTML de la misma materia sin motivo.

## Al terminar, reportá
- Ruta del HTML
- Cantidad de preguntas
- Años cubiertos
- Conteos por atype (oficial/slides/general)
- Exámenes/parciales que no pudiste parsear y por qué
- Archivos data/manifest tocados
```

### Cómo usarlo

1. Completá la ruta de la carpeta, la materia y el tipo (1er / 2º / exámenes).
2. Pegá el prompt en el agente (Claude, Grok, etc.) **dentro del repo FingCards**.
3. Revisá el HTML generado (sobre todo `atype: general` y parseos fallidos).
4. Pedí commit/push cuando esté bien.

### Referencias rápidas en este repo

| Recurso | Archivo |
|--------|---------|
| SO 1er parcial teórico | `materias/sistemas-operativos/teorico-1er-parcial.html` |
| SO 2º parcial teórico | `materias/sistemas-operativos/teorico-2do-parcial.html` |
| SO exámenes teórico | `materias/sistemas-operativos/teorico-examenes.html` |
| Arqui exámenes teórico | `materias/arquitectura-computadoras/teorico-examenes.html` |
| Registro de materia | `data/<materia>.js` + `data/manifest.js` |
