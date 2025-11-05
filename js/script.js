// --- Mostrar / ocultar secciones (acordeón simple) ---
document.querySelectorAll(".toggle").forEach(titulo => {
  titulo.addEventListener("click", () => {
    const contenido = titulo.nextElementSibling;
    contenido.style.display = contenido.style.display === "none" ? "block" : "none";
  });
});

// --- Resaltar habilidades al pasar el mouse ---
const habilidades = document.querySelectorAll(".lista-habilidades li");

habilidades.forEach(hab => {
  hab.addEventListener("mouseenter", () => {
    hab.classList.add("highlight");
  });
  hab.addEventListener("mouseleave", () => {
    hab.classList.remove("highlight");
  });
});
