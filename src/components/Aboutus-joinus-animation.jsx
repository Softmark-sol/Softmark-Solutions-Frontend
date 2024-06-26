import React from "react";
import Lottie from "react-lottie";
import animationData from "../lottieAnimations/aboutus-joinus.json";
import "../css/animation-css/joinus-lottie-container.css";

const ABJLottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="joinus-lottie">
      <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
    </div>
  );
};

export default ABJLottieAnimation;
