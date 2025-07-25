document.addEventListener("DOMContentLoaded", function () {
  const carouselTracks = document.querySelectorAll(".carousel-track");

  carouselTracks.forEach((track) => {
    // Obtenemos los chips originales
    const originalChips = Array.from(track.children);

    // Clonamos los chips para crear el efecto infinito
    originalChips.forEach((chip) => {
      const clone = chip.cloneNode(true);
      clone.setAttribute("aria-hidden", "true"); // Mejora la accesibilidad
      track.appendChild(clone);
    });
  });
});
