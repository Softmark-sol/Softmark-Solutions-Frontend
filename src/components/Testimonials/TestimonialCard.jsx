import React from 'react';
import '../../css/Card.css'

const Cards = ({ name, role, testimonial, image, rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>★</span>
  ));

  return (
    <div className="testimonial-card">
      <div className="testimonial-image">
        <img src={image} alt={name} />
      </div>
      <div className="testimonial-content">
        <p className="testimonial-text">"{testimonial}"</p>
        <div className="testimonial-rating">{stars}</div>
        <p className="testimonial-author">- {name}, {role}</p>
      </div>
    </div>
  );
};

export default Cards;
