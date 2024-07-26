import React from "react";
import "../css/Csd_steps.css";
import Csd_Logos from "./CSD_logos";
import { FaSearchengin, FaStackOverflow, FaBug, FaHeadphonesAlt } from "react-icons/fa";
import { GiNestedHexagons } from "react-icons/gi";

const steps = [
  {
    icon: <FaSearchengin color="#4599b4" size={50}/>,
    heading: "Discovery & Planning",
    des: "We Discover insights and meticulously plan for project success.",
  },
  {
    icon: <GiNestedHexagons color="#4599b4" size={50}/>,
    heading: "Design & Development",
    des: "Our team develops innovative, scalable solutions for your website.",
  },
  {
    icon: <FaStackOverflow color="#4599b4" size={50}/>,
    heading: "Deployment",
    des: "Our technological solutions align perfectly with your business needs.",
  },
  {
    icon: <FaBug color="#4599b4" size={50}/>,
    heading: "Testing & QA",
    des: "Spadasoft ensures quality excellence by conducting meticulous testing.",
  },
  {
    icon: <FaHeadphonesAlt color="#4599b4" size={50}/>,
    heading: "Maintenance & Support",
    des: "Providing continuous maintenance and support is our goal.",
  },
];

const Csd_Steps = () => {
  return (
    <div className="step container">
      <h1>Our Custom Software Development Steps</h1>
      <p className="intro-text">
        Softmark Solutions Custom Software Development Agency uses the deep
        domain expertise of our software developers to create impactful digital
        solutions with a strategic vision.
      </p>
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

export default Csd_Steps;
