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
  descripcion: "Preguntas teóricas de los segundos parciales: almacenamiento y RAID, memoria, procesos, planificación y más.",
  semestres: [
    {
      id: "2025-s1",
      nombre: "2025 · Segundo parcial",
      recursos: [
        {
          titulo: "Teórico — repaso 2º parcial (flashcards)",
          tipo: "teorico",
          preguntas: 56,
          nota: "Parciales 2014 → 2025",
          url: "materias/sistemas-operativos/teorico-2do-parcial.html"
        }
      ]
    }
  ]
});
