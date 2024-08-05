import React, { useEffect } from "react";
import "../css/Csd_steps.css";
import ScrollReveal from "scrollreveal";

const Csd_Logos = ({ icon, heading, des }) => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "20px",
      duration: 500,
      delay: 200,
      reset: true,
    });

    sr.reveal(".step-item,.step-heading", {
      interval: 200,
    });

    sr.reveal(".step-description", {
      interval: 200,
      origin: "top",
    });
  }, []);
  return (
    <div className="step-item">
      {icon}
      <h2 className="step-heading">{heading}</h2>
      <p className="step-description">{des}</p>
    </div>
  );
};

export default Csd_Logos;
