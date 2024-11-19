"use client";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {
  useEffect(() => {
    // Inicializar o tsParticles
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const options = useMemo(() => ({
    background: {
      color: {
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "repulse", // Reação ao clique
        },
        onHover: {
          enable: true,
          mode: "grab", // Reação ao passar o mouse
        },
      },
      modes: {
        grab: {
          distance: 150,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#2098ED", // Cor das partículas
      },
      links: {
        color: "#0BC9F6", // Cor das linhas conectando partículas
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce", // Partículas "quicam" nas bordas
        },
        random: true,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800, // Área para a densidade de partículas
        },
        value: 150, // Quantidade de partículas
      },
      opacity: {
        value: 1.0, // Opacidade das partículas
      },
      shape: {
        type: "circle", // Formato das partículas
      },
      size: {
        value: { min: 1, max: 3 }, // Tamanho das partículas
      },
    },
    detectRetina: true,
  }), []);

  return <Particles id={props.id} options={options} />;
};

export default ParticlesComponent;
