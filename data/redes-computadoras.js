/* ============================================================
   Redes de Computadoras
   ============================================================ */
FING.registerSubject({
  id: "redes-computadoras",
  nombre: "Redes de Computadoras",
  sigla: "Redes",
  emoji: "🌐",
  accent: "#0d9488",
  descripcion: "Preguntas teóricas de 1er parcial, 2º parcial y exámenes (partes a/b/c en cards separadas).",
  semestres: [
    { id: "1er-parcial", nombre: "Primer parcial · teórico", recursos: [
      { titulo: "Teórico — repaso 1er parcial (flashcards)", tipo: "teorico", preguntas: 86,
        nota: "Setiembre/octubre · partes a/b/c separadas", url: "materias/redes-computadoras/teorico-1er-parcial.html" }] },
    { id: "2do-parcial", nombre: "Segundo parcial · teórico", recursos: [
      { titulo: "Teórico — repaso 2º parcial (flashcards)", tipo: "teorico", preguntas: 103,
        nota: "Noviembre/diciembre · partes a/b/c separadas", url: "materias/redes-computadoras/teorico-2do-parcial.html" }] },
    { id: "examenes", nombre: "Exámenes · teórico", recursos: [
      { titulo: "Teórico — repaso de exámenes (flashcards)", tipo: "teorico", preguntas: 379,
        nota: "2011→2026 · partes a/b/c separadas", url: "materias/redes-computadoras/teorico-examenes.html" }] }
  ]
});
