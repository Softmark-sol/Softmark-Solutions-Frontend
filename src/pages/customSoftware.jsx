import React from "react";
import Typewriter from "../components/TypeWriter.jsx";
import CSD from "../assets/images/csd.png";
import "../css/CSD.css";
import CSDCards from "../components/CSDCards.jsx";
import { useNavigate } from "react-router-dom";
import Csd_Steps from "./CSD_steps.jsx";
import SoftwareCapabilitiesCards from "../components/SoftwareCapabilitiesCards.jsx";
import SoftwareCards from "../components/SoftwareCards.jsx";

const CustomSoftware = () => {
    const navigate = useNavigate()
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
              <div class="buttons" onClick={()=>navigate("/contactUs")}>
                <button class="btn">
                  <span></span>
                  <p
                    data-text="Get Proposal"
                    data-title="Contact Now"
                  ></p>
                </button>
              </div>
            </h5>
            <div className="csd-hero-img">
              <img
                src={CSD}
                alt="csd"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
      <Csd_Steps />     
      <CSDCards />

      {/* Section 2 */}
      <SoftwareCapabilitiesCards />
      <SoftwareCards />
    </>
  );
};


export default CustomSoftware;
