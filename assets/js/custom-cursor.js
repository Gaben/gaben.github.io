document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector(".custom-cursor");

  if (cursor) {
    window.addEventListener("mousemove", (e) => {
      // Usamos e.clientX y e.clientY para la posición relativa al viewport
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });

    const interactiveElements = document.querySelectorAll(
      "a, button, .menu-toggle"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("hover");
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("hover");
      });
    });
  }
});
