import React from "react";
import { useNavigate } from "react-router-dom";
import "../portfolio/portfolioCard.css";

const PortfolioCard = ({ title, description, type, icon }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/portfolio-detail/${type}/${title}`);
    if (type === "digital") {
      navigate('/portfolio-detail/digital-marketing');
    }
  };

  return (
    <div className="portfolio-card" onClick={handleCardClick}>
      <div className="icon-container">
        <img src={icon} alt={title} />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{description}</p>
    </div>
  );
};

export default PortfolioCard;
