document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  if (!header) return;

  let lastScrollY = window.scrollY;

  // Agregamos un umbral para que la barra no desaparezca inmediatamente
  const scrollThreshold = 150;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY && window.scrollY > scrollThreshold) {
      // Scroll hacia abajo y hemos pasado el umbral
      header.classList.add("hidden");
    } else {
      // Scroll hacia arriba
      header.classList.remove("hidden");
    }
    lastScrollY = window.scrollY;
  });
});
