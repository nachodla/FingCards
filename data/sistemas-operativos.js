/* ============================================================
   SO — Sistemas Operativos
   ------------------------------------------------------------
   Para agregar un parcial/recurso nuevo:
     1. Subí el HTML autónomo a materias/sistemas-operativos/<archivo>.html
     2. Agregá un objeto a "recursos" dentro del semestre que
        corresponda (o creá un semestre nuevo en "semestres").
   tipo válido: "opcion-multiple" | "teorico"
   ============================================================ */
FING.registerSubject({
  id: "sistemas-operativos",
  nombre: "Sistemas Operativos",
  sigla: "SO",
  emoji: "🖥️",
  accent: "#0891b2",
  descripcion: "Preguntas teóricas de 1er parcial, 2º parcial y exámenes: procesos, sincronización, memoria, FS, RAID y más.",
  semestres: [
    {
      id: "1er-parcial",
      nombre: "Primer parcial · teórico",
      recursos: [
        {
          titulo: "Teórico — repaso 1er parcial (flashcards)",
          tipo: "teorico",
          preguntas: 47,
          nota: "Parciales 2016 → 2025 · con fuentes",
          url: "materias/sistemas-operativos/teorico-1er-parcial.html"
        }
      ]
    },
    {
      id: "2do-parcial",
      nombre: "Segundo parcial · teórico",
      recursos: [
        {
          titulo: "Teórico — repaso 2º parcial (flashcards)",
          tipo: "teorico",
          preguntas: 56,
          nota: "Parciales 2014 → 2025",
          url: "materias/sistemas-operativos/teorico-2do-parcial.html"
        }
      ]
    },
    {
      id: "examenes",
      nombre: "Exámenes · teórico",
      recursos: [
        {
          titulo: "Teórico — repaso de exámenes (flashcards)",
          tipo: "teorico",
          preguntas: 70,
          nota: "Exámenes 2014 → 2026 · Kernel Muncher",
          url: "materias/sistemas-operativos/teorico-examenes.html"
        }
      ]
    }
  ]
});
