import React from "react";
import Lottie from "react-lottie";
import animationData from "../lottieAnimations/whyusanimation.json";
import "../css/animation-css/whyuslottie-container.css";

const WhyLottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="whyuslottie-container">
      <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
    </div>
  );
};

export default WhyLottieAnimation;
