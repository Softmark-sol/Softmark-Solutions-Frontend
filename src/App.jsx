
import React, { useEffect } from "react";
import Router from "./config/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { initFacebookPixel } from "./facebookPixel";
// import MouseParticles from "react-mouse-particles";
// import useIsMobile from "./hooks/useIsMobile";
const App = () => {
  // const isMobile = useIsMobile();
  useEffect(() => {
    initFacebookPixel();
  }, []);
  return (
    <>
      {/* {!isMobile && (
        <MouseParticles
          g={1.5}
          num={3}
          color={["#4599B4", "#F3972B", "#4599B4", "#F3972B"]}
          cull="col,image-wrapper"
        />
      )} */}

      <Router />
    </>
  );
};
export default App;