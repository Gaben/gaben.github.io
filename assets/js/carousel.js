document.addEventListener("DOMContentLoaded", function () {
  const carouselTracks = document.querySelectorAll(".carousel-track");

  carouselTracks.forEach((track) => {
    const originalChips = Array.from(track.children);

    originalChips.forEach((chip) => {
      const clone = chip.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      track.appendChild(clone);
    });
  });
});
