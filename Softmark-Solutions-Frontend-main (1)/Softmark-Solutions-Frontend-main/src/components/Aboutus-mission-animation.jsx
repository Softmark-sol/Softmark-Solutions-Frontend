import React from "react";
import Lottie from "react-lottie";
import animationData from "../lottieAnimations/aboutus-mission.json";
import "../css/animation-css/ab-misssion-lottie-container.css";

const ABMLottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="au-mission-lottie">
      <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
    </div>
  );
};

export default ABMLottieAnimation;
