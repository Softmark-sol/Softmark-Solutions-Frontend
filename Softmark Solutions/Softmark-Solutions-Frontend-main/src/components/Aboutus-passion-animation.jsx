import React from "react";
import Lottie from "react-lottie";
import animationData from "../lottieAnimations/aboutus-passion.json";
import "../css/animation-css/ap-misssion-lottie-container.css";

const ABPLottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="ap-mission-lottie">
      <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
    </div>
  );
};

export default ABPLottieAnimation;
