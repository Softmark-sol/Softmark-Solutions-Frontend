import React from "react";
import "../css/ItOutsourcing.css";
import Typewriter from "../components/TypeWriter.jsx";
import { useNavigate } from "react-router-dom";
import OutsourcingLottieAnimation from "../components/Outsourcing-animation.jsx";
import ItOutTopCards from "../components/ItOutTopCards.jsx";
import ItOut_Steps from "../components/ItoutSteps.jsx";
import BarChart from "../components/BarChart.jsx";

const ItOutsourcing = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="main-container container">
        <h2>
          <Typewriter strings={["#1 IT Outsourcing Services Provider"]} />
        </h2>
        <div className="horizontal-fram-logo">
          <div className="csd-hero hero">
            <h5 className="main-paragrah-csd main-paragrah">
              Unlock the potential of your business with SoftMark Solutions,
              where a global talent pool of highly skilled IT professionals is
              ready to meet your challenges head-on. From web and mobile app
              development to IT infrastructure, cloud services, and SEO,
              SoftMark Solutions has you covered. Discover unparalleled
              expertise and drive your success forward with us.
              <br />
              <div class="buttons" onClick={() => navigate("/contactUs")}>
                <button class="btn">
                  <span></span>
                  <p data-text="Get Proposal" data-title="Contact Now"></p>
                </button>
              </div>
            </h5>
            <div className="OutSource-animation">
              <OutsourcingLottieAnimation />
            </div>
          </div>
        </div>
      </div>
      <div className="sub-heading container">
        <h1>Corporation Models We Support</h1>
        <p className="intro-text sub-text">
          Following are the corporation models that we support at Softmark
          Solutions.
        </p>
      </div>
      <ItOutTopCards />
      <div className="sub-heading container">
        <h1>We Deliver Results!</h1>
        <p className="intro-text sub-text">
          Our goal at Softmark Solutions is to ensure transparency,
          cost-effectiveness, and seamless collaboration throughout the
          outsourcing process. We are committed to delivering high-quality
          results that not only meet your expectations but also propel your
          business forward.
        </p>
        <div className="barchart-container">
          <BarChart />
        </div>
      </div>
      <ItOut_Steps />
    </>
  );
};

export default ItOutsourcing;
