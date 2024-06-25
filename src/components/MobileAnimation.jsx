import React from "react";
import Lottie from "react-lottie";
import animationData from "../lottieAnimations/appdev.json";
import "./MobileLottieAnimation.css"; // Import the CSS file

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
    <div className="lottie-container">
      <Lottie options={defaultOptions} height={700} width={700} />
    </div>
  );
};

export default MobileLottieAnimation;
