document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector(".custom-cursor");

  const isDesktop = window.matchMedia("(pointer: fine)").matches;

  if (!isDesktop) {
    if (cursor) {
      cursor.style.display = "none";
    }
    return;
  }

  if (cursor) {
    window.addEventListener("mousemove", (e) => {
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
