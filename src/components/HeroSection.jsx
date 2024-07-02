import React, { useEffect, useRef } from "react";
import "../css/hero.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import MyLottieAnimation2 from "./NetworkGlobe";
import GearLottieAnimation from "./Gear-animation";
import ScrollReveal from "scrollreveal";
import MarketLottieAnimation from "./Market-animation";
import { useNavigate } from "react-router-dom";
import ParticleEffect from "./Particles"; // Import ParticleEffect component

const HeroSection = () => {
  const navigate = useNavigate();
  const particleRef = useRef(null);

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
        <div className="heroContainer" ref={particleRef}>
          {/* <ParticleEffect ref={particleRef} /> */}

          <div className="leftGlobe">
            <MyLottieAnimation2 />
          </div>
          <div
            className="hero"
            style={{ textAlign: "center", padding: "2rem 0" }}
          >
            <div className="first-line fade-in">
              WHERE{" "}
              <span className="technology">
                <div className="gear">
                  <GearLottieAnimation />
                </div>
                <div>TECHNOLOGY</div>
              </span>
            </div>
            <br />
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
          <div className="rightGlobe">
            <MyLottieAnimation2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
