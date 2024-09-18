import React from "react";
import Lottie from "react-lottie";
import animationData from "../lottieAnimations/gear.json";
import "../css/animation-css/gear.css";

const GearLottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="gear-lottie">
      <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
    </div>
  );
};

export default GearLottieAnimation;
