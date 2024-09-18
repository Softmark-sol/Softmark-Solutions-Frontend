import React from "react";
import Lottie from "react-lottie";
import animationData from "../lottieAnimations/market.json";
import "../css/animation-css/market.css";

const MarketLottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="market-lottie">
      <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
    </div>
  );
};

export default MarketLottieAnimation;
