import React from 'react';
import '../css/PlanCard.css';

const PlanCard = ({title, desciptions}) => {
  return (
    <div className="card2">
      <p className="heading">{title}</p>
      <p className='plan-p'> {desciptions}.</p>
    </div>
  );
}

export default PlanCard;
