window.addEventListener("load", () => {
  tsParticles.load({
    // La librería creará un canvas que ocupará toda la pantalla.
    // No es necesario un ID específico.
    options: {
      // Usamos la misma imagen de fondo que tenías en tu CSS
      background: {
        color: "#12110c", // Añadimos el color de fondo aquí
        image: "url('assets/img/background.png')",
        position: "center center",
        repeat: "no-repeat",
        size: "cover",
      },
      // Hacemos que la animación ocupe toda la pantalla y esté en el fondo
      fullScreen: {
        enable: true,
        zIndex: -1, // La clave para ponerlo detrás de todo tu contenido
      },
      particles: {
        // Número de partículas
        number: {
          value: 180,
          density: {
            enable: true,
          },
        },
        // Color de las partículas: una mezcla de blanco y el color de acento de tu web
        color: {
          value: ["#FFFFFF", "#bc63fc"],
        },
        // Forma de estrella para el efecto "sparkle"
        shape: {
          type: "star",
        },
        // Opacidad con animación para un efecto de parpadeo
        opacity: {
          value: { min: 0.1, max: 0.8 },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          },
        },
        // Tamaño con variación aleatoria
        size: {
          value: { min: 1, max: 3 },
        },
        // Sin líneas que conecten las partículas para un look más limpio
        links: {
          enable: false,
        },
        // Movimiento de las partículas
        move: {
          enable: true,
          speed: 0.5,
          direction: "none",
          random: true,
          straight: false,
          outModes: "out",
        },
      },
      // Interactividad: las partículas reaccionan al cursor
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse", // Las partículas se alejan del cursor
          },
        },
      },
    },
  });
});
