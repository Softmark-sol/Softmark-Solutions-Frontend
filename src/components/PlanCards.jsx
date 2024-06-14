import React from "react";
import "../css/Cards.css";
import Singlecard from "./PlansCard";

const data=[{
    title: "Custom Website Design",
    desc: "Tailored designs that reflect your brand identity and engage your target audience",
  },
  {
    title: "Responsive Web Design",
    desc: " Ensuring your website looks great and functions flawlessly on all devices",
  },
  {
    title: "E-commerce Solutions",
    desc: "Building secure, scalable online stores to boost your sales and enhance customer experience",

  },
  {
    title: "Content Management Systems (CMS)",
    desc: "Empowering you to manage and update your website content with ease",
  },
  {
    title: "Website Maintenance & Support",
    desc: "Providing ongoing support to keep your website up-to-date and running smoothly",
  }]

const Plancards = () => {
  return (
    <div>
      <div className="cards-container container">
        {data.map((item, index) => (
          <Singlecard
            key={index}
            title={item.title}
            desciptions={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Plancards;
