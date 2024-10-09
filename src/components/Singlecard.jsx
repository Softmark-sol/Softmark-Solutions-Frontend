import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Singlecard.css";

const Singlecard = ({ path, title, description, route, isIcon = false }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <div
      className="maincard"
      onClick={handleClick}
      style={{cursor: "pointer"}}
    >
      <div className="card">
        {isIcon ? (
          <div className="icon">{path}</div>
        ) : (
          <img src={path} alt={title} loading="lazy"/>
        )}
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default memo(Singlecard);
