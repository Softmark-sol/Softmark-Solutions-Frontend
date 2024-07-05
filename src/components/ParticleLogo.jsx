import React, { useEffect, useRef } from "react";
import logo from "../assets/images/softmarklogo.svg.png";
import "../css/animation-css/particleLogo.css";

const LogoParticles = () => {
  const logoRef = useRef(null);
  const containerRef = useRef(null);
  const nextParticleRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://nextparticle.nextco.de/nextparticle.min.js";
    script.onload = () => {
      const container = containerRef.current;
      nextParticleRef.current = new window.NextParticle({
        image: logoRef.current,
        width: container.clientWidth,
        height: container.clientHeight,
        particleGap: 2,
      });

      window.addEventListener("resize", handleResize);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    if (nextParticleRef.current) {
      const container = containerRef.current;
      const width = container.clientWidth;
      const height = container.clientHeight;
      nextParticleRef.current.width = width;
      nextParticleRef.current.height = height;
      nextParticleRef.current.start();
    }
  };

  return (
    <div
      className="particle-container"
      ref={containerRef}
      style={styles.container}
    >
      <img
        src={logo}
        ref={logoRef}
        alt="Logo"
        style={styles.logo}
        onLoad={() => {
          if (logoRef.current) {
            logoRef.current.style.display = "block";
          }
        }}
      />
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  logo: {
    display: "none",
  },
};

export default LogoParticles;
