import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import "../css/Plans.css";
import ModalformBasicApp from "../components/Modal/app-dev/Modal-App-Basic";
import ModalformStandardApp from "../components/Modal/app-dev/Modal-App-Standard";
import ModalformPremiumApp from "../components/Modal/app-dev/Modal-App-Premium";
import AppCards from "../components/AppCards";
import MobileLottieAnimation from "../components/MobileAnimation";
import Typewriter from "../components/TypeWriter.jsx";
import PropTypes from "prop-types"; 
import { useNavigate } from "react-router-dom";
import ConsultationBanner from "../components/consultationBanner/consultationBanner.jsx";
import MoreServices from "../components/moreServices/moreServices.jsx";
import PricingCards from "../components/pricingCards/priceCards.jsx";
import ServiceForm from "../components/ServiceForm.jsx";
export default function PlansApp({ plans }) {
  const navigate =useNavigate()
  const [showModal, setShowModal] = useState({ open: false, type: "" });
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleCloseModal = () => setShowModal({ open: false, type: "" });

  const handleShow = (planName) => {
    setSelectedPlan(planName);
    setShowModal({ open: true, type: planName.trim() });
  };

  return (
    <>
    <ServiceForm
  title={"Best App Development Services"} 
  description={
    "Our custom app development services include designing and developing mobile applications tailored to your needs. We focus on building user-friendly, high-performance apps with seamless functionality for Android and iOS platforms, ensuring exceptional user experience and scalability."
  } 
  buttonText={"Get In Touch"} 
  route={"contactUs"} 
/>

      <div className="main-container container">
        <h2>
          SoftMark Solutions -{" "}
          <Typewriter strings={["Innovating the Mobile Experience"]} />
        </h2>
        <div className="text-img-cont">
          <h5 className="sub-paragraph app-para">
            In today's mobile-first world, having a robust and intuitive mobile
            application is essential for reaching and engaging your audience. At
            SoftMark Solutions, we specialize in developing high-quality mobile
            apps that deliver seamless user experiences and drive business growth.
            From concept to launch, our team is committed to providing innovative
            solutions that meet your specific needs and keep you ahead in the
            competitive mobile landscape.
          </h5>
          <div className="mobile">
            <MobileLottieAnimation />
          </div>
        </div>
      </div>

      <div className="card-heading-service">
        <h2 className="heading-underline-service">
          Our Mobile App Development Services
        </h2>
      </div>

      <div className="upcards">
        <AppCards />
      </div>

      <div className="main-container container">
        <h2>
          Unlock Your Business Potential with Expert <br /> Mobile App
          Development
        </h2>
        <h5 className="last-paragraph">
          Choose SoftMark Solutions for your mobile app development needs and
          unlock the potential of your business with a powerful mobile presence.
          Let us help you connect with your audience and achieve your goals
          through innovative mobile solutions. Explore our plans below to find
          the perfect fit for your business.
        </h5>
      </div>

      <div className="plans-container container">
      <PricingCards pricingPlans={plans}/>
        {/* {plans.map((plan, index) => (
          <Card className={`plan-card plan-card-${index}`} key={index}>
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
        ))} */}
          <button className="contact-btn" style={{padding:'20px'}} onClick={() => navigate("/portfolio-detail/app/App%20Development")}>
          Explore Our Portfolio of Mobile Applications 
          </button>
      </div>

      {/* Conditionally render modal based on selected plan type */}
      {showModal.open && (
        <>
          {showModal.type === "Basic" && (
            <ModalformBasicApp
              isOpened={showModal.open}
              heading={`${selectedPlan} Plan`}
              handleClose={handleCloseModal}
            />
          )}
          {showModal.type === "Standard" && (
            <ModalformStandardApp
              isOpened={showModal.open}
              heading={`${selectedPlan} Plan`}
              handleClose={handleCloseModal}
            />
          )}
          {showModal.type === "Premium" && (
            <ModalformPremiumApp
              isOpened={showModal.open}
              heading={`${selectedPlan} Plan`}
              handleClose={handleCloseModal}
            />
          )}
        </>
      )}

      <ConsultationBanner />
      <MoreServices />
    </>
  );
}

PlansApp.propTypes = {
  plans: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      features: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};
