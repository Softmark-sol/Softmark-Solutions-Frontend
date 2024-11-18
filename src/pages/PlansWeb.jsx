import * as React from "react";
import { useState,useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
// import "../css/Plans.css";
import "../css/planweb.css";
import ModalformBasicWeb from "../components/Modal/web-dev/Modal-Web-Basic";
import ModalformStandardWeb from "../components/Modal/web-dev/Modal-Web-Standard";
import ModalformPremiumWeb from "../components/Modal/web-dev/Modal-Web-Premium";
import WebCards from "../components/Webcards";
import WebLottieAnimation from "../components/WebAnimation";
import Typewriter from "../components/TypeWriter.jsx";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ConsultationBanner from "../components/consultationBanner/consultationBanner.jsx";
import WebAgency from "../components/webAgency/webAgency.jsx";
import MoreServices from "../components/moreServices/moreServices.jsx";
import ServiceForm from "../components/ServiceForm.jsx";
import { Description } from "@mui/icons-material";
import PricingCards from "../components/pricingCards/priceCards.jsx";

export default function PlansWeb({ plans }) {
  const navigate = useNavigate();

  const [showBasic, setShowBasic] =
    useState(false);
  const [showStandard, setShowStandard] =
    useState(false);
  const [showPremium, setShowPremium] =
    useState(false);
  const [selectedPlan, setSelectedPlan] =
    useState("");

  const handleCloseBasic = () =>
    setShowBasic(false);
  const handleCloseStandard = () =>
    setShowStandard(false);
  const handleClosePremium = () =>
    setShowPremium(false);

  const handleShow = (planName) => {
    setSelectedPlan(planName);
    if (planName === " Basic ")
      setShowBasic(true);
    if (planName === "Standard")
      setShowStandard(true);
    if (planName === "Premium")
      setShowPremium(true);
  };

  return (
    <>
    <ServiceForm title={"Best Website Development Services"} description={"Our custom website development services include the tasks associated with the process of designing a website. They consist of all the actions, operations, system updates, etc. needed for maintaining the performance of a website, improving user experience and speed."}
    buttonText={"Get In Touch"} route={"contactUs"}
    />
      <div className="main-container container">
        <h2>
          SoftMark Solutions -{" "}
          <Typewriter
            strings={[
              "Building Your Digital Future",
            ]}
          />
        </h2>
        <div className="horizontal-fram-web">
          <h5 className="sub-paragraph">
            At SoftMark Solutions, we recognize
            the critical role a well-crafted
            website plays in your business
            success. Our expert team specializes
            in creating responsive, user-
            friendly, and visually stunning
            websites that not only captivate your
            audience but also drive business
            growth. Whether you need a simple
            informational site or a complex
            e-commerce platform, we are dedicated
            to bringing your vision to life and
            ensuring your online presence stands
            out in a crowded digital landscape
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
        <h2>
          Expert Website Development for Business
          Success
        </h2>
        <h5 className="last-paragraph">
          At SoftMark Solutions, we recognize the
          critical role a well-crafted website
          plays in your business success. Our
          expert team specializes in creating
          responsive, user- friendly, and visually
          stunning websites that not only
          captivate your audience but also drive
          business growth. Whether you need a
          simple informational site or a complex
          e-commerce platform, we are dedicated to
          bringing your vision to life and
          ensuring your online presence stands out
          in a crowded digital landscape
        </h5>
      </div>

      <div className="plans-container container">
        <PricingCards pricingPlans={plans}/>
        {/* {plans.map((plan, index) => (
          <Card
            className={`plan-card plan-card-${index}`}
            key={index}
            style={{
              backgroundColor: "transparent",
            }}>
            <CardActionArea>
              <CardContent>
                <div className="plans-cont">
                  <div className="plan-header">
                    <span className="plan-title">
                      {plan.name}
                    </span>
                    <button
                      className="select-button"
                      onClick={() =>
                        handleShow(plan.name)
                      }
                      aria-label={`Select ${plan.name} plan`}>
                      START YOUR PLAN
                    </button>
                  </div>
                  <div className="plan-features-container">
                    <ul className="plan-features">
                      {plan.features.map(
                        (feature, i) => (
                          <li key={i}>
                            <i className="fa fa-check-circle"></i>{" "}
                            {feature}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        ))} */}
        <button
          className="contact-btn"
          onClick={() =>
            navigate(
              "/portfolio-detail/web/Web%20Development"
            )
          }>
          Explore Our Portfolio of Web
          Applications
        </button>
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

      <ConsultationBanner />
      <WebAgency />
      <MoreServices />
    </>
  );
}

PlansWeb.propTypes = {
  plans: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      features: PropTypes.arrayOf(
        PropTypes.string
      ).isRequired,
    })
  ).isRequired,
};
