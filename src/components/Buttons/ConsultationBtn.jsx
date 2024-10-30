import React from "react";
import "../../css/consultationBtn.css";
import { useNavigate } from "react-router-dom";

const ConsultationBtn = () => {
  const navigate = useNavigate();

  return (
    <div className="consultation-btn-container">
      <button className="consultation-btn" onClick={() => navigate("/contactUs")}>
        <span className="consultation-btn-text">GET A FREE CONSULTATION</span>
      </button>
    </div>
  );
};

export default ConsultationBtn;
