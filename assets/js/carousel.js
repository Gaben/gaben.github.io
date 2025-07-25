document.addEventListener("DOMContentLoaded", function () {
  const carouselTracks = document.querySelectorAll(".carousel-track");

  carouselTracks.forEach((track) => {
    // Obtenemos los chips originales
    const originalChips = Array.from(track.children);

    // Clonamos los chips varias veces para asegurar que no haya espacios
    const numberOfClones = 3; // Puedes ajustar este número según sea necesario
    for (let i = 0; i < numberOfClones; i++) {
      originalChips.forEach((chip) => {
        const clone = chip.cloneNode(true);
        clone.setAttribute("aria-hidden", "true"); // Mejora la accesibilidad
        track.appendChild(clone);
      });
    }
  });
});
