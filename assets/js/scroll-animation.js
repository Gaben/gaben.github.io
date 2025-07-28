document.addEventListener("DOMContentLoaded", () => {
  const titles = document.querySelectorAll("h1");

  if (!titles.length) return;

  const observerOptions = {
    root: null, // relative to the viewport
    rootMargin: "0px",
    threshold: 0.1, // trigger when 10% of the element is visible
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Animate only once
      }
    });
  };

  const titleObserver = new IntersectionObserver(
    observerCallback,
    observerOptions
  );

  titles.forEach((title) => {
    titleObserver.observe(title);
  });
});
