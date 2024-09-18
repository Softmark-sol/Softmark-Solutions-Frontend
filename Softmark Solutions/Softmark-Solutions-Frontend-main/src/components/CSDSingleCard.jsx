import React from "react";
import "../css/CSD.css";

const CSDSingleCard = ({icon, heading, text,text2}) => {
  return (
    <div
      className="container csd-single-card"
    >
      <div
        style={{
          backgroundColor: "#f1f3f299",
          borderRadius: "50px",
          padding: "15px",
        }}
      >
        {icon}
      </div>
      <h5 style={{ fontWeight: "bold", textAlign: "left", paddingTop: "20px" }}>
        {heading}
      </h5>
      <p style={{ textAlign: "left", paddingTop: "20px", fontSize: ".8rem" }}>
        {text}
      </p>
      <p style={{ textAlign: "left", paddingTop: "20px", fontSize: ".8rem" }}>
        {text2}
      </p>
    </div>
  );
};

export default CSDSingleCard;
