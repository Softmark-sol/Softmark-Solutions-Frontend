import React from "react";
import "../../css/whoWeAre.css";
import Img from "../../assets/whoWeAre.jpg";

const WhoWeAre = () => {
  return (
    <div className="who-we-are-section container">
      <div className="about-us-container">
        <div className="text-container">
          <h2 style={{textAlign:'left'}}>Who We Are</h2>
          <p style={{textAlign:'left'}}>
           We are a digital marketing and web design company located in Wyoming that specialize in SEO, Contact us today for a free consultation on how we can help you grow. 
          </p>
        </div>
        <div className="image-container">
          <img src={Img} alt="Who we are" className="about-us-image" />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
