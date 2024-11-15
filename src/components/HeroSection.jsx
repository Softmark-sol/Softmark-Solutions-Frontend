import React, { useEffect, Suspense, lazy } from "react";
import "../css/hero.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import GearLottieAnimation from "./Gear-animation";
import ScrollReveal from "scrollreveal";
import MarketLottieAnimation from "./Market-animation";
import { useNavigate } from "react-router-dom";
import DMLottieAnimation from "../components/DigitalMarketingAnimation";

const LogoParticles = lazy(() => import("./ParticleLogo"));

const HeroSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "20px",
      duration: 500,
      delay: 200,
      reset: false, 
    });

    sr.reveal(".leftGlobe, .first-line, .second-line", { interval: 200 });
    sr.reveal(".rightGlobe", { interval: 200, origin: "top" });

    return () => sr.destroy();
  }, []);

  return (
    <div className="hero-image">
      <div className="heroContainer" style={{ position: "relative", width: "100%", height: "100vh" }}>
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
            <button className="hero-btn" onClick={() => navigate("/Ourservices")}>
              Our Portfolio
            </button>
          </div>
        </div>

        <div className="rightanimation">
          <Suspense>
            {/* <LogoParticles /> */}
            <DMLottieAnimation />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
