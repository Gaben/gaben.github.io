document.addEventListener("DOMContentLoaded", function () {
  const carouselTracks = document.querySelectorAll(".carousel-track");

  carouselTracks.forEach((track) => {
    const originalChips = Array.from(track.children);

    const numberOfClones = 4;
    for (let i = 0; i < numberOfClones; i++) {
      originalChips.forEach((chip) => {
        const clone = chip.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        track.appendChild(clone);
      });
    }
  });
});
