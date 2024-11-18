import React from "react";
import MyLottieAnimation from "../CallAnimation";
import { useNavigate } from "react-router-dom";

const ScheduleCall = () => {
  const navigate = useNavigate();
  const buttonStyle = {
    width: "fit-content",
    display: "flex",
    padding: "1.2em 1rem",
    cursor: "pointer",
    gap: "0.4rem",
    fontWeight: "bold",
    borderRadius: "30px",
    textShadow: "2px 2px 3px rgb(136 0 136 / 50%)",
    background:
      "linear-gradient(15deg, #880088, #aa2068, #cc3f47, #de6f3d, #f09f33, #de6f3d, #cc3f47, #aa2068, #880088) no-repeat",
    backgroundSize: "300%",
    color: "#fff",
    border: "none",
    backgroundPosition: "left center",
    boxShadow: "0 30px 10px -20px rgba(0,0,0,.2)",
    transition: "background .3s ease",
  };

  const hoverStyle = {
    backgroundSize: "320%",
    backgroundPosition: "right center",
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <button
      onClick={() => navigate("/calendly")}
      style={isHovered ? { ...buttonStyle, ...hoverStyle } : buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Schedule a <strong>Free</strong> Call
    </button>
  );
};

export default ScheduleCall;
