import React, { useEffect, useRef, useState } from "react";
import Lottie from "react-lottie";
import animationData from "../lottieAnimations/neural-animation.json";
import "../css/animation-css/NeuronLottieAnimation.css";

const NeuronLottieAnimation = () => {
  const [isStopped, setIsStopped] = useState(true);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for reverse
  const [animationProgress, setAnimationProgress] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const animationContainer = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const { top, height } =
        animationContainer.current.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      // Calculate animation progress based on scroll position
      const distance = top - viewportHeight + height * 0.5;
      const progress = 1 - Math.max(0, distance - scrollY) / viewportHeight;

      // Update animation progress
      setAnimationProgress(Math.max(0, Math.min(1, progress))); // Ensure progress is between 0 and 1

      // Adjust animation playback based on scroll position
      if (scrollY > scrollPosition && direction !== 1) {
        setIsStopped(false);
        setDirection(1); // Forward animation
      } else if (scrollY < scrollPosition && direction !== -1) {
        setIsStopped(false);
        setDirection(-1); // Reverse animation
      }

      // Save current scroll position
      setScrollPosition(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the scroll listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [direction, scrollPosition]);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    if (animRef.current) {
      animRef.current.goToAndStop(animationProgress * 1000, true);
    }
  }, [animationProgress]);

  return (
    <div ref={animationContainer} className="lottie-animation-container">
      <Lottie
        options={defaultOptions}
        height={"100%"}
        width={"100%"}
        isStopped={isStopped}
        isPaused={false}
        speed={0.5} // Adjust animation speed as needed
        direction={direction}
        eventListeners={[
          {
            eventName: "complete",
            callback: () => {
              // Optional callback when animation completes
            },
          },
        ]}
        lottieRef={(ref) => (animRef.current = ref)}
      />
    </div>
  );
};

export default NeuronLottieAnimation;
