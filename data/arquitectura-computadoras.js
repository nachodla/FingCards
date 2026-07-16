/* ============================================================
   AC — Arquitectura de Computadoras
   ============================================================ */
FING.registerSubject({
  id: "arquitectura-computadoras",
  nombre: "Arquitectura de Computadoras",
  sigla: "Arqui",
  emoji: "🧩",
  accent: "#ea580c",
  descripcion: "Preguntas teóricas de exámenes organizadas por tema del curso (numeración, códigos, lógica, memorias, CPU, x86, cache, pipeline…).",
  semestres: [
    {
      id: "examenes",
      nombre: "Exámenes · teórico",
      recursos: [
        {
          titulo: "Teórico — repaso de exámenes (flashcards)",
          tipo: "teorico",
          preguntas: 102,
          nota: "Exámenes 2011 → 2026 · solución oficial",
          url: "materias/arquitectura-computadoras/teorico-examenes.html"
        }
      ]
    }
  ]
});
