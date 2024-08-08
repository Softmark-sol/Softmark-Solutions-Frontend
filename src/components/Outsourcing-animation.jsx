import React from "react";
import Lottie from "react-lottie";
import animationData from "../lottieAnimations/outsourcing.json";
import "../css/animation-css/outsource-lottie-container.css";

const OutsourcingLottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="outsource-lottie-container">
      <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
    </div>
  );
};

export default OutsourcingLottieAnimation;
