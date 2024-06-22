import React, { useRef, useEffect } from "react";
import "../css/hero.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import MyLottieAnimation2 from "./NetworkGlobe";
import ScrollReveal from "scrollreveal";

const HeroSection = () => {
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
    <div className="heroContainer">
      <div className="leftGlobe">
        <MyLottieAnimation2 />
      </div>
      <div className="hero" style={{ textAlign: "center", padding: "2rem 0" }}>
        <div className="first-line fade-in">
          WHERE{" "}
          <span style={{ color: "#f3972b", fontWeight: "700" }}>
            {" "}
            <i className="fas fa-cogs" style={{ marginRight: "0.5rem" }}></i>
            TECHNOLOGY
          </span>
        </div>
        <br />
        <div
          className="second-line fade-in"
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: "300",
            fontSize: "3rem",
            color: "black",
          }}
        >
          MEETS{" "}
          <span style={{ color: "#4599b4", fontWeight: "700" }}>
            MARKETING
            <i className="fas fa-bullhorn" style={{ marginLeft: "0.5rem" }}></i>
          </span>
        </div>
        <div className="hero-btn-div" style={{ marginTop: "1.5rem" }}>
          <button className="hero-btn" onClick={scrollToForm}>
            Let's Talk
          </button>
        </div>
      </div>
      <div className="rightGlobe">
        <MyLottieAnimation2 />
      </div>
    </div>
  );
};

export default HeroSection;
