import React from "react";
import Lottie from "react-lottie";
import animationData from "../lottieAnimations/whyBlockchain.json";
import "../css/animation-css/weblottie-container.css";

const WhyBlockchainLottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="weblottie-container">
      <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
    </div>
  );
};

export default WhyBlockchainLottieAnimation;
