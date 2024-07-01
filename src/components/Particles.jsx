import React, { useEffect, useMemo, useState, forwardRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "../css/particle.css";

const ParticleEffect = forwardRef((props, ref) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    // Initialize particle engine with slim version
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true); // Set init to true when particles engine is initialized
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container); // Log the container reference when particles are loaded
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent", // Set background color to transparent for overlay effect
        },
      },
      fpsLimit: 120, // Frames per second limit
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push", // Interaction mode on click
          },
          onHover: {
            enable: true,
            mode: "repulse", // Interaction mode on hover
          },
        },
        modes: {
          push: {
            quantity: 1, // Number of particles pushed on click
          },
          repulse: {
            distance: 200, // Distance of repulsion on hover
            duration: 0.4, // Duration of repulsion animation
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff", // Color of particles
        },
        links: {
          color: "#ffffff", // Color of particle links
          distance: 150, // Distance of particle links
          enable: true,
          opacity: 0.5, // Opacity of particle links
          width: 1, // Width of particle links
        },
        move: {
          direction: "none", // Movement direction ("none", "top", "top-right", etc.)
          enable: true,
          outModes: {
            default: "bounce", // Movement behavior when particles move outside the canvas
          },
          random: false,
          speed: 6, // Speed of particle movement
          straight: false,
        },
        number: {
          density: {
            enable: true, // Enable density-based number of particles
          },
          value: 80, // Number of particles
        },
        opacity: {
          value: 0.9, // Opacity of particles
        },
        shape: {
          type: "triangle", // Shape of particles ("circle", "edge", "triangle", etc.)
        },
        size: {
          value: { min: 1, max: 5 }, // Size range of particles
        },
      },
      detectRetina: true, // Enable retina display support
    }),
    []
  );

  if (init) {
    return (
      <div className="particle-container" ref={ref}>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </div>
    );
  }

  return null; // Render nothing until particles are initialized
});

export default ParticleEffect;
