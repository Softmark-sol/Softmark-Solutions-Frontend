import React from "react";
import "../../css/whoWeAre.css";
import Img from "../../assets/whoWeAre.jpg";

const WhoWeAre = () => {
  return (
    <div className="container">
      <div className="about-us-container">
        <div className="text-container">
          <h2>Who We Are?</h2>
          <p>
            We are a Tennessee-based digital marketing and web design agency with
            expertise in SEO. Reach out today for a free consultation to discover
            how we can support your growth.
          </p>
        </div>
        <div className="image-container">
          <img src={Img} alt="Who we are?" className="about-us-image" />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
