import React from "react";
import Lottie from "react-lottie";
import animationData from "../lottieAnimations/ourworkanimation.json";
import "../css/animation-css/worklottie-container.css";

const OurWorkLottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="worklottie-container">
      <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
    </div>
  );
};

export default OurWorkLottieAnimation;
