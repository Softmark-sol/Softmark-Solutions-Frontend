import React from "react";
import Lottie from "react-lottie";
import animationData from "../lottieAnimations/appdev.json";

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
    <div>
      <Lottie options={defaultOptions} height={350} width={350} />
    </div>
  );
};

export default MobileLottieAnimation;
