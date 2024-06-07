import React from 'react';
import "../css/hero.css";

const HeroSection = () => {
  return (
    <div className='hero'>
      <span className='first-line'><span style={{color: 'black'}}>WHERE</span> TECHNOLOGY</span>
      <br />
      <span className='second-line'><span style={{color: 'black'}}>MEETS </span> MARKETING</span>
      <div className='hero-btn-div'>
      <button className='hero-btn'>Lets Talk</button>
      </div>
    </div>
  )
}

export default HeroSection;
