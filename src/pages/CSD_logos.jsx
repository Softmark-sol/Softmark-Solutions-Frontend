import React from "react";
import '../css/Csd_steps.css';

const Csd_Logos = ({ icon, heading, des }) => {
  return (
    <div className="step-item">
      <img src={icon} alt={heading} className="step-icon" />
      <h2 className="step-heading">{heading}</h2>
      <p className="step-description">{des}</p>
    </div>
  );
};

export default Csd_Logos;
