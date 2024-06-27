import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import "../css/Plans.css";
import "../css/logo.css";
import ModalformBasicLogo from "../components/Modal/logo-design/Modalbasic";
import ModalformStandardLogo from "../components/Modal/logo-design/Modalstandard";
import ModalformBusiness from "../components/Modal/logo-design/Modalbusniess";
import ModalformPremium from "../components/Modal/logo-design/Modalpremium";
import Inquiry from "../components/Inquiry";
import LDLottieAnimation from "../components/LogoDesignAnimation";
import Typewriter from "../components/TypeWriter.jsx";

export default function Logo({ plans }) {
  const [showBasic, setShowBasic] = useState(false);
  const [showStandard, setShowStandard] = useState(false);
  const [showBusiness, setShowBusiness] = useState(false);
  const [showPremium, setShowPremium] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleCloseBasic = () => setShowBasic(false);
  const handleCloseStandard = () => setShowStandard(false);
  const handleClosePremium = () => setShowPremium(false);
  const handleCloseBusiness = () => setShowBusiness(false);

  const handleShow = (planName) => {
    setSelectedPlan(planName);
    if (planName === " Basic ") setShowBasic(true);
    if (planName === "Standard") setShowStandard(true);
    if (planName === "Premium") setShowPremium(true);
    if (planName === "Business") setShowBusiness(true);
  };

  return (
    <>
      <div className="main-container container">
        <h2>
          {" "}
          <Typewriter
            strings={["Transform Your Brand with SoftMark Solutions"]}
          />
        </h2>
        <div className="horizontal-fram-logo">
        <div style={{width:'100%'}}>
        <h5 className="main-paragrah">
          At SoftMark Solutions, we specialize in creating stunning logo designs
          and comprehensive branding packages that set your business apart. Our
          team of expert designers is dedicated to bringing your vision to life,
          ensuring your brand resonates with your audience and leaves a lasting
          impression.Explore our plans below to find the perfect fit for your
          branding needs.
        </h5>
        </div>
        
        <div className="logo-animation">
          <LDLottieAnimation />
        </div>
      </div>
        </div>
        

      <div className="plans-container container">
        {plans.map((plan, index) => (
          <Card
            className={`plan-card plan-card-${index} logoPlans`}
            key={index}
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

      <ModalformBasicLogo
        isOpened={showBasic}
        heading={selectedPlan + " Plan"}
        handleClose={handleCloseBasic}
      />

      <ModalformStandardLogo
        isOpened={showStandard}
        heading={selectedPlan + " Plan"}
        handleClose={handleCloseStandard}
      />

      <ModalformBusiness
        isOpened={showBusiness}
        heading={selectedPlan + " Plan"}
        handleClose={handleCloseBusiness}
      />

      <ModalformPremium
        isOpened={showPremium}
        heading={selectedPlan + " Plan"}
        handleClose={handleClosePremium}
      />
      <Inquiry />
    </>
  );
}
