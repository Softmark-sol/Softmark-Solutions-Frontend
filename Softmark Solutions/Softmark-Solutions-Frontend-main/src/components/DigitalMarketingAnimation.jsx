import React from "react";
import Lottie from "react-lottie";
import animationData from "../lottieAnimations/digitalmarketingAnimation.json";
import "../css/animation-css/dmlottie-container.css";

const DMLottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="dmlottie-container">
      <Lottie options={defaultOptions} height={"80%"} width={"80%"} />
    </div>
  );
};

export default DMLottieAnimation;
