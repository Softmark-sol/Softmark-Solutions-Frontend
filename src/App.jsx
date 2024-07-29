import React from "react";
import Router from "./config/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import MouseParticles from "react-mouse-particles";
// import useIsMobile from "./hooks/useIsMobile";

const App = () => {
  // const isMobile = useIsMobile();

  return (
    <>
      {/* {!isMobile && (
        <MouseParticles
          g={1.5}
          num={3}
          color={["#4599b4", "#f3972b", "#4599b4", "#f3972b"]}
          cull="col,image-wrapper"
        />
      )} */}
      <Router />
    </>
  );
};

export default App;
