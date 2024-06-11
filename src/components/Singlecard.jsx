import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Singlecard.css';

const Singlecard = ({ path, title, description, route }) => {
  const [animated, setAnimated] = useState(false);
  const navigate = useNavigate();
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
        }
      },
      { threshold: 0.5 } 
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    navigate(route);
  };

  return (
    <div
      className={`card ${animated ? 'animate' : ''}`}
      ref={cardRef}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <div className="header">
        <img src={path} alt={title} className="card-img" />
      </div>
      <h4>{title}</h4>
      <p className="message">{description}</p>
    </div>
  );
};

export default Singlecard;
