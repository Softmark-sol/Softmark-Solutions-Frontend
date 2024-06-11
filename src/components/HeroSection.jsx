import React, {useRef} from "react";
import "../css/hero.css";

const HeroSection = () => {
  const formRef = useRef(null);
  const scrollToForm = () => {
    const formElement = document.getElementById('form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Element with ID "form" not found');
    }
  };
  
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
          <button className="hero-btn" style={{textDecoration: "none"}} onClick={scrollToForm}>Lets Talk</button>
      </div>
    </div>
  );
};

export default HeroSection;
