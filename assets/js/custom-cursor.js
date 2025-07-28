document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector(".custom-cursor");

  // Check if the device has a fine pointer (like a mouse). This disables the script on most touch devices.
  const isDesktop = window.matchMedia("(pointer: fine)").matches;

  if (!isDesktop) {
    // If it's a touch device, hide the cursor and stop the script.
    if (cursor) {
      cursor.style.display = "none";
    }
    return;
  }

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
