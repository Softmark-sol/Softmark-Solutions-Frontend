import React, { useEffect } from "react";
import "../css/Csd_steps.css";
import Csd_Logos from "../pages/CSD_logos";
import {
  FaSearchengin,
  FaStackOverflow,
  FaBug,
  FaHeadphonesAlt,
} from "react-icons/fa";
import { GiNestedHexagons } from "react-icons/gi";

const steps = [
  {
    icon: <FaSearchengin color="#4599b4" size={50} />,
    heading: "Initiation",
    des: "We schedule your meeting with Softmark Solutions to discuss your project requirements.",
  },
  {
    icon: <GiNestedHexagons color="#4599b4" size={50} />,
    heading: "Analysis",
    des: "Our team documents your needs to ensure clarity and precision about the project.",
  },
  {
    icon: <FaStackOverflow color="#4599b4" size={50} />,
    heading: "Matching",
    des: "We look for developers who would be as passionate about your project as you are..",
  },
  {
    icon: <FaBug color="#4599b4" size={50} />,
    heading: "Onboarding",
    des: "We onboard the right candidates that can fulfil all your project requirements.",
  },
  {
    icon: <FaHeadphonesAlt color="#4599b4" size={50} />,
    heading: "Maintenance",
    des: "Our HR and project managers resolve all personnel or technical project-related issues.",
  },
];

const ItOut_Steps = () => {
  return (
    <div className="step container">
      <h1>IT Outsourcing Process</h1>
      <div className="steps-container">
        {steps.map((step, index) => (
          <Csd_Logos
            key={index}
            icon={step.icon}
            heading={step.heading}
            des={step.des}
          />
        ))}
      </div>
    </div>
  );
};

export default ItOut_Steps;
