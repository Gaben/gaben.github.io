document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navUL = document.querySelector("header ul");

  if (menuToggle && navUL) {
    menuToggle.addEventListener("click", () => {
      navUL.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });

    const navLinks = navUL.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (navUL.classList.contains("active")) {
          navUL.classList.remove("active");
          menuToggle.classList.remove("active");
        }
      });
    });
  }
});
