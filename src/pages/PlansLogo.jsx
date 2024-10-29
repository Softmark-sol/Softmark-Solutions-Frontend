import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import "../css/logo.css";
import ModalformBasicLogo from "../components/Modal/logo-design/Modalbasic";
import ModalformStandardLogo from "../components/Modal/logo-design/Modalstandard";
import ModalformBusiness from "../components/Modal/logo-design/Modalbusniess";
import ModalformPremium from "../components/Modal/logo-design/Modalpremium";
import LDLottieAnimation from "../components/LogoDesignAnimation";
import Typewriter from "../components/TypeWriter.jsx";
import PropTypes from "prop-types"; 
import { useNavigate } from "react-router-dom";
import ConsultationBanner from "../components/consultationBanner/consultationBanner.jsx";

export default function Logo({ plans }) {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState({ open: false, type: "" });
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleCloseModal = () => setShowModal({ open: false, type: "" });

  const handleShow = (planName) => {
    setSelectedPlan(planName);
    setShowModal({ open: true, type: planName.trim() });
  };

  return (
    <>
      <div className="main-container container">
        <h2>
          <Typewriter strings={["Transform Your Brand with SoftMark Solutions"]} />
        </h2>
        <div className="horizontal-fram-logo">
          <div style={{ width: "100%" }}>
            <h5 className="main-paragrah">
              At SoftMark Solutions, we specialize in creating stunning logo designs
              and comprehensive branding packages that set your business apart. Our
              team of expert designers is dedicated to bringing your vision to life,
              ensuring your brand resonates with your audience and leaves a lasting
              impression. Explore our plans below to find the perfect fit for your
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
          <Card className={`plan-card plan-card-${index} logoPlans`} key={index}>
            <CardActionArea>
              <CardContent>
                <div className="plans-cont">
                  <div className="plan-header">
                    <span className="plan-title">{plan.name}</span>
                    <button
                      className="select-button"
                      onClick={() => handleShow(plan.name)}
                      aria-label={`Select ${plan.name} plan`}
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
            <button className="contact-btn" onClick={() => navigate("/portfolio-detail/logo/Logo%20Development")}>
            Discover Our Logo Design Portfolio          </button>
      </div>

      {showModal.open && (
        <>
          {showModal.type === "Basic" && (
            <ModalformBasicLogo
              isOpened={showModal.open}
              heading={`${selectedPlan} Plan`}
              handleClose={handleCloseModal}
            />
          )}
          {showModal.type === "Standard" && (
            <ModalformStandardLogo
              isOpened={showModal.open}
              heading={`${selectedPlan} Plan`}
              handleClose={handleCloseModal}
            />
          )}
          {showModal.type === "Business" && (
            <ModalformBusiness
              isOpened={showModal.open}
              heading={`${selectedPlan} Plan`}
              handleClose={handleCloseModal}
            />
          )}
          {showModal.type === "Premium" && (
            <ModalformPremium
              isOpened={showModal.open}
              heading={`${selectedPlan} Plan`}
              handleClose={handleCloseModal}
            />
          )}
        </>
      )}

<ConsultationBanner />
    </>
  );
}

Logo.propTypes = {
  plans: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      features: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};
