import React from "react";
import Lottie from "react-lottie";
import animationData from "../lottieAnimations/callAnimation.json";
import "../css/contactussvg.css";

const MyLottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="rotate">
      <Lottie options={defaultOptions} height={55} width={55} />
    </div>
  );
};

export default MyLottieAnimation;
