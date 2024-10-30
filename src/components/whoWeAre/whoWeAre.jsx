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
            Based in Tennessee, we are a digital marketing and web design agency specializing in SEO. Reach out today for a free consultation and discover how we can drive your growth.
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
