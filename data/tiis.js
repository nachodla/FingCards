/* ============================================================
   TIIS — Taller de Ingeniería de Software
   ------------------------------------------------------------
   Para agregar un parcial/recurso nuevo:
     1. Subí el HTML autónomo a materias/tiis/<archivo>.html
     2. Agregá un objeto a "recursos" dentro del semestre que
        corresponda (o creá un semestre nuevo en "semestres").
   tipo válido: "opcion-multiple" | "teorico"
   ============================================================ */
FING.registerSubject({
  id: "tiis",
  nombre: "Taller de Ingeniería de Software",
  sigla: "TIIS",
  emoji: "🛠️",
  accent: "#4f46e5",
  descripcion: "Repaso de parciales de Ingeniería de Software: procesos, requisitos, diseño, construcción, V&V, gestión y más.",
  semestres: [
    {
      id: "2026-s1",
      nombre: "2026 · Semestre 1",
      recursos: [
        {
          titulo: "Repaso — opción múltiple (todos los parciales)",
          tipo: "opcion-multiple",
          preguntas: 243,
          nota: "Parciales 2019 → 2026",
          url: "materias/tiis/repaso-multiple-opcion.html"
        }
      ]
    }
  ]
});
