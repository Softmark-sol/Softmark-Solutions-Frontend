import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
// import "../css/Plans.css";
import "../css/planweb.css";
import ModalformBasicWeb from "../components/Modal/web-dev/Modal-Web-Basic";
import ModalformStandardWeb from "../components/Modal/web-dev/Modal-Web-Standard";
import ModalformPremiumWeb from "../components/Modal/web-dev/Modal-Web-Premium";
import WebCards from "../components/Webcards";
import Inquiry from "../components/Inquiry";
import WebLottieAnimation from "../components/WebAnimation";
import Typewriter from "../components/TypeWriter.jsx";

export default function PlansWeb({ plans }) {
  const [showBasic, setShowBasic] = useState(false);
  const [showStandard, setShowStandard] = useState(false);
  const [showPremium, setShowPremium] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleCloseBasic = () => setShowBasic(false);
  const handleCloseStandard = () => setShowStandard(false);
  const handleClosePremium = () => setShowPremium(false);

  const handleShow = (planName) => {
    setSelectedPlan(planName);
    if (planName === " Basic ") setShowBasic(true);
    if (planName === "Standard") setShowStandard(true);
    if (planName === "Premium") setShowPremium(true);
  };

  return (
    <>
      <div className="main-container container">
        <h2>
          SoftMark Solutions -{" "}
          <Typewriter strings={["Building Your Digital Future"]} />
        </h2>
        <div className="horizontal-fram-web">
          <h5 className="sub-paragraph">
            At SoftMark Solutions, we recognize the critical role a well-crafted
            website plays in your business success. Our expert team specializes
            in creating responsive, user- friendly, and visually stunning
            websites that not only captivate your audience but also drive
            business growth. Whether you need a simple informational site or a
            complex e-commerce platform, we are dedicated to bringing your
            vision to life and ensuring your online presence stands out in a
            crowded digital landscape
          </h5>
          <div className="webanimation">
            {" "}
            <WebLottieAnimation />
          </div>
        </div>
      </div>

      <div className="card-heading-service">
        <h2 className="heading-underline-service">
          Our Web Development Services
        </h2>
      </div>
      <div className="upcards">
        <WebCards />
      </div>

      <div className="main-container container">
        {/* <ParticleEffect /> */}
        <h2>Expert Website Development for Business Success</h2>
        <h5 className="last-paragraph">
          At SoftMark Solutions, we recognize the critical role a well-crafted
          website plays in your business success. Our expert team specializes in
          creating responsive, user- friendly, and visually stunning websites
          that not only captivate your audience but also drive business growth.
          Whether you need a simple informational site or a complex e-commerce
          platform, we are dedicated to bringing your vision to life and
          ensuring your online presence stands out in a crowded digital
          landscape
        </h5>
      </div>

      <div className="plans-container container">
        {plans.map((plan, index) => (
          <Card
            className={`plan-card plan-card-${index}`}
            key={index}
            style={{ backgroundColor: "transparent" }}
          >
            <CardActionArea>
              <CardContent>
                <div className="plans-cont">
                  <div className="plan-header">
                    <span className="plan-title">{plan.name}</span>
                    {/* <span className='plan-price'>{`$${plan.price}/mo`}</span> */}
                    <button
                      className="select-button"
                      onClick={() => handleShow(plan.name)}
                    >
                      START YOUR PLAN
                    </button>
                  </div>
                  <div className="plan-features-container">
                    <ul className="plan-features">
                      {plan.features.map((feature, i) => (
                        <li key={i}>
                          <i className="fa fa-check-circle"></i> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>

      <ModalformBasicWeb
        isOpened={showBasic}
        heading={selectedPlan + " Plan"}
        handleClose={handleCloseBasic}
      />

      <ModalformStandardWeb
        isOpened={showStandard}
        heading={selectedPlan + " Plan"}
        handleClose={handleCloseStandard}
      />

      <ModalformPremiumWeb
        isOpened={showPremium}
        heading={selectedPlan + " Plan"}
        handleClose={handleClosePremium}
      />

      <Inquiry />
    </>
  );
}
