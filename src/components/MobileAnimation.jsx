import React from "react";
import Lottie from "react-lottie";
import animationData from "../lottieAnimations/appdev.json";
import "../css/animation-css/MobileLottieAnimation.css";

const MobileLottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="lottie-container">
      <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
    </div>
  );
};

export default MobileLottieAnimation;
