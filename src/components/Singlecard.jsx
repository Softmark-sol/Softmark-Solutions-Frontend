import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Singlecard.css";

const Singlecard = ({ path, title, description, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <div
      className="maincard"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="card">
        <img src={path} alt={title} />
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Singlecard;
