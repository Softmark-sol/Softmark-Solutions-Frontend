import React from "react";
import { FaHeartPulse , FaMusic, FaSchool, FaBuilding, FaLightbulb, FaShop, FaBus} from "react-icons/fa6";
import { BiSolidDish } from "react-icons/bi";
import { BsTools } from "react-icons/bs";
import { GiSatelliteCommunication } from "react-icons/gi";
import { IoIosMan } from "react-icons/io";
import { AiFillBank } from "react-icons/ai";
import SoftwareCapabilitiesSingle from "./SoftwareCapabilitiesSingle";
import Typewriter from "./TypeWriter";

const SoftwareCapabilitiesCards = () => {
    const data = [
        {
          icon: <FaHeartPulse color='4599b4' size={60} />,
          heading: "HealthCare",
        },
        {
            icon: <FaSchool color='4599b4' size={60} />,
            heading: "Education",
          },
          {
            icon: <BiSolidDish color='4599b4' size={60} />,
            heading: "Hospitality",
          },
          {
            icon: <FaBuilding color='4599b4' size={60} />,
            heading: "Construction",
          },
          {
            icon: <BsTools color='4599b4' size={60} />,
            heading: "Manufacturing",
          },
          {
          icon: <FaMusic color='4599b4' size={60} />,
          heading: "Entertainment",
        },
          {
            icon: <FaLightbulb color='4599b4' size={60} />,
            heading: "Energy",
          },
          {
            icon: <GiSatelliteCommunication color='4599b4' size={60} />,
            heading: "Telecom",
          },
          {
            icon: <FaShop color='4599b4' size={60} />,
            heading: "Retail and Wholesale",
          },
          {
              icon: <IoIosMan color='4599b4' size={60} />,
              heading: "Professional Services",
            },
            {
              icon: <AiFillBank color='4599b4' size={60} />,
              heading: "Finance and Banking",
            },
            {
              icon: <FaBus color='4599b4' size={60} />,
              heading: "Transport and Logistics",
            },
          
       
      ];
  
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "50px"}} className="container">
        <h2>
          <Typewriter
            strings={["Industry-Based Software Capabilities"]}
          />
        </h2>
        <p className="intro-text">
        Softmark Solutions offers solutions to the following industries, combining industry transformation with technological innovation.
      </p>
      <div className="cards-container-software container">
        {data.map((item, index) => (
          <SoftwareCapabilitiesSingle
            key={index}
            icon={item.icon}
            heading={item.heading}
          />
        ))}
      </div>
    </div>
  );
};

export default SoftwareCapabilitiesCards;
