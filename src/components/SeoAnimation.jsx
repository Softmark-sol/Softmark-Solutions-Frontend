import React from "react";
import Lottie from "react-lottie";
import animationData from "../lottieAnimations/seoAnimation.json";

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
    <div className="seo-animations">
      {" "}
      <div>
        <Lottie options={defaultOptions} height={500} width={500} />
      </div>
    </div>
  );
};

export default SeoLottieAnimation;
