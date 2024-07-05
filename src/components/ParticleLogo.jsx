import React, { useEffect, useRef } from "react";
import logo from "../assets/images/softmarklogo.svg.png";

const LogoParticles = () => {
  const logoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://nextparticle.nextco.de/nextparticle.min.js";
    script.onload = () => {
      const container = containerRef.current;
      const nextParticle = new window.NextParticle({
        image: logoRef.current,
        width: 500, // Set explicit width
        height: 400, // Set explicit height
        maxWidth: "500px",
        particleGap: 2,
      });

      window.onresize = function () {
        nextParticle.width = 200;
        nextParticle.height = 200;
        nextParticle.start();
      };
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div ref={containerRef} style={styles.container}>
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
