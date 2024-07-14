import React, { useEffect } from "react";
import "../css/hero.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import GearLottieAnimation from "./Gear-animation";
import ScrollReveal from "scrollreveal";
import MarketLottieAnimation from "./Market-animation";
import { useNavigate } from "react-router-dom";

import LogoParticles from "./ParticleLogo";

const HeroSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "20px",
      duration: 500,
      delay: 200,
      reset: true,
    });

    sr.reveal(".leftGlobe ,.first-line,.second-line", {
      interval: 200,
    });

    sr.reveal(".rightGlobe", {
      interval: 200,
      origin: "top",
    });
  }, []);

  return (
    <div>
      {" "}
      <div className="hero-image">
        <div
          className="heroContainer"
          style={{ position: "relative", width: "100%", height: "100vh" }}
        >
          {/* <ParticleEffect ref={particleRef} /> */}

          <div className="hero" style={{ textAlign: "center" }}>
            <div className="first-line fade-in">
              WHERE{" "}
              <span className="technology">
                <div className="gear">
                  <GearLottieAnimation />
                </div>
                <div>TECHNOLOGY</div>
              </span>
            </div>

            <div className="second-line fade-in">
              MEETS{" "}
              <span className="marketing">
                <div>MARKETING</div>
                <div className="market">
                  <MarketLottieAnimation />
                </div>
              </span>
            </div>
            <div className="hero-btn-div" style={{ marginTop: "1.5rem" }}>
              <button
                className="hero-btn"
                onClick={() => navigate("/Ourservices")}
              >
                Our Portfolio
              </button>
            </div>
          </div>
          <div className="rightanimation">
            <LogoParticles />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
