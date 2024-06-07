import React from "react";
import "../css/hero.css";

const HeroSection = () => {
  return (
    <div className="hero">
      <span className="first-line">
        <span style={{ color: "black" }}>WHERE</span> TECHNOLOGY
      </span>
      <br />
      <span className="second-line">
        <span style={{ color: "black" }}>MEETS </span> MARKETING
      </span>
      <div className="hero-btn-div">
        <a href="#form">
          <button className="hero-btn" style={{textDecoration: "none"}}>Lets Talk</button>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
