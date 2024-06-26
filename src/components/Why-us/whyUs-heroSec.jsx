import React from "react";
import "../../css/Whyus/Whyus.css";
// import Img from '../../assets/images/Why-Us.jpg'
import WhyLottieAnimation from "../WhyusAnimation";
import Typewriter from "../../components/TypeWriter.jsx";

const WhyUsHero = () => {
  return (
    <div className="WhyUsHero">
      <h2 className="whyUsPara">
        <Typewriter
          strings={[
            "Crafting digital success through Web &amp; Mobile apps, SEO, and branding",
          ]}
        />
      </h2>
      {/* <img className='whyHeroImg' src={Img} alt='why-us' /> */}
      <div className="lottie-containerwhyus">
        <WhyLottieAnimation />
      </div>
    </div>
  );
};

export default WhyUsHero;
