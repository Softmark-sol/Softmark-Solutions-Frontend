import React from "react";
import Lottie from "react-lottie";
import animationData from "../lottieAnimations/logodesignanimation.json";
import "../css/animation-css/logolottie-container.css";

const LDLottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="logolottie-container">
      <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
    </div>
  );
};

export default LDLottieAnimation;
