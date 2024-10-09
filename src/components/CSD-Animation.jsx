import React from "react";
import Lottie from "react-lottie";
import animationData from "../lottieAnimations/csd-animation.json";
import "../css/animation-css/csd-lottie-container.css";

const CSDLottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="csd-lottie-container">
      <Lottie options={defaultOptions} height={"80%"} width={"80%"} style={{cursor: "default"}}/>
    </div>
  );
};

export default CSDLottieAnimation;
