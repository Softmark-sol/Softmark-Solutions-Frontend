import React, { useEffect } from "react";
import Typewriter from "../components/TypeWriter.jsx";
import "../css/CSD.css";
import CSD_Cards from "../components/CustomSoftwareDev.jsx";
import { useNavigate } from "react-router-dom";
import Csd_Steps from "./CSD_steps.jsx";
import SoftwareCapabilitiesCards from "../components/SoftwareCapabilitiesCards.jsx";
import SoftwareCards from "../components/SoftwareCards.jsx";
import CSDLottieAnimation from "../components/CSD-Animation.jsx";

const CustomSoftware = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Section 1 */}
      <div className="main-container container">
        <h2>
          <Typewriter
            strings={["Tailored Solutions for Your Business Needs"]}
          />
        </h2>
        <div className="horizontal-fram-logo">
          <div className="csd-hero">
            <h5 className="main-paragrah-csd main-paragrah">
              At SoftMark Solutions, we understand that every business is
              unique. That’s why we offer custom software development services
              tailored to meet your specific requirements. Whether you’re a
              small business or a large enterprise, our team of expert
              developers will work closely with you to create software solutions
              that drive efficiency, innovation, and growth.
              <br />
              <div class="buttons">
                <button class="btn" onClick={() => navigate("/contactUs")}>
                  <span></span>
                  <p data-text="Get Proposal" data-title="Contact Now"></p>
                </button>
              </div>
            </h5>
            <div className="CSD-animation" >
              <CSDLottieAnimation />
            </div>
          </div>
        </div>
      </div>
      <Csd_Steps />
      <CSD_Cards />

      {/* Section 2 */}
      <SoftwareCapabilitiesCards />
      <SoftwareCards />
      <div style={{display:'flex',justifyContent:'center', alignItems:'center' , marginTop:'20px'}}>
      <button className="contact-btn" style={{padding:'20px'}} onClick={() => navigate("/portfolio-detail/custom/Custom%20Development")}>
      Explore Our Custom Software Development Portfolio          </button>
          </div>
    </>
  );
};

export default CustomSoftware;
