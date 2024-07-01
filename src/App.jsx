import React from "react";
import Router from "./config/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MouseParticles from "react-mouse-particles";

const App = () => {
  return (
    <>
      <MouseParticles g={1.5} num={6} color="random" cull="col,image-wrapper" />
      <Router />
    </>
  );
};
export default App;
