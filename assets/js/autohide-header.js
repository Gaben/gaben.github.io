document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  if (!header) return;

  let lastScrollY = window.scrollY;

  const scrollThreshold = 150;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY && window.scrollY > scrollThreshold) {
      header.classList.add("hidden");
    } else {
      header.classList.remove("hidden");
    }
    lastScrollY = window.scrollY;
  });
});
