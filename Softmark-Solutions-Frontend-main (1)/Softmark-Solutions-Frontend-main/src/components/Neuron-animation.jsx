// MyComponent.js
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/animation-css/NeuronLottieAnimation.css";

gsap.registerPlugin(ScrollTrigger);

const MyComponent = () => {
  const animationContainer = useRef(null);
  const lottieInstance = useRef(null);

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const animationData = await import(
          "../lottieAnimations/neural-animation.json"
        );
        lottieInstance.current = lottie.loadAnimation({
          container: animationContainer.current,
          renderer: "svg",
          loop: false,
          autoplay: false,
          animationData: animationData.default, // Use animationData.default when importing JSON files with ES modules
        });

        ScrollTrigger.create({
          trigger: animationContainer.current,
          start: "top 80%", // Adjust based on when you want the animation to start
          end: "bottom 20%", // Adjust based on when you want the animation to end
          scrub: true,
          onUpdate: (self) => {
            const frame =
              self.progress * (lottieInstance.current.totalFrames - 1);
            lottieInstance.current.goToAndStop(frame, true);
          },
        });
      } catch (error) {
        console.error("Error loading Lottie animation:", error);
      }
    };

    loadAnimation();

    return () => {
      if (lottieInstance.current) {
        lottieInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div ref={animationContainer} className="lottie-animation-container"></div>
  );
};

export default MyComponent;
