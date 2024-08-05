import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const SoftwareCapabilitiesSingle = ({ icon, heading }) => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "20px",
      duration: 500,
      delay: 200,
      reset: true,
    });

    sr.reveal(".scs-card", {
      interval: 200,
    });

    sr.reveal(".scs-card h2", {
      interval: 200,
      origin: "left",
    });
  }, []);

  return (
    <div className="scs-cards">
      <div className="scs-card">
        {icon}
        <h2>{heading}</h2>
      </div>
    </div>
  );
};

export default SoftwareCapabilitiesSingle;
