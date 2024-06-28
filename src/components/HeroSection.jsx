import React, { useRef, useEffect } from "react";
import "../css/hero.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import MyLottieAnimation2 from "./NetworkGlobe";
import GearLottieAnimation from "./Gear-animation";
import ScrollReveal from "scrollreveal";
import MarketLottieAnimation from "./Market-animation";
import { useNavigate } from "react-router-dom";
import techBackground from "../assets/tech-bg.mp4";

const HeroSection = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const scrollToForm = () => {
    const formElement = document.getElementById("form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error('Element with ID "form" not found');
    }
  };
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "20px",
      duration: 500,
      delay: 200,
      reset: true, // This will reset the animation every time you scroll
    });

    sr.reveal(".leftGlobe ,.first-line,.second-line", {
      interval: 200, // This will reveal elements one by one
    });
    sr.reveal(".rightGlobe", {
      interval: 200,
      origin: "top", // This will reveal elements one by one
    });
  }, []);

  return (
    <div className="hero-video">
      <video autoPlay loop muted className="video">
        <source src={techBackground} type="video/mp4" />
        {/* Add more <source> elements for other video formats if needed */}
        Your browser does not support the video tag.
      </video>
      <div className="heroContainer">
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
  );
};

export default HeroSection;
