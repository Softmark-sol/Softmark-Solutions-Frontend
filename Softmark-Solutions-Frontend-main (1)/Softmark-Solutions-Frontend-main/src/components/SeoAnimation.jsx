import React from "react";
import Lottie from "react-lottie";
import animationData from "../lottieAnimations/seoAnimation.json";
import "../css/animation-css/seolottie-container.css";

const SeoLottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="seo-animation">
      <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
    </div>
  );
};

export default SeoLottieAnimation;
