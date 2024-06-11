import '../css/Singlecard.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Singlecard = ({ path, title, description, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <div className="card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="header">
        <img src={path} alt={title} className='card-img'/>
      </div>
      <h4>{title}</h4>
      <p className="message">
        {description}
      </p>
    </div>
  );
};

export default Singlecard;
