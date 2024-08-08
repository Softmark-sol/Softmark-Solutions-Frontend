import React from "react";
import Singlecard from "./Singlecard";

import { IoMdRocket } from "react-icons/io";
import { BiSolidSearchAlt2 } from "react-icons/bi";
import { GoGoal } from "react-icons/go";

const ItOutTopCards = () => {
  const ItOUTdata = [
    {
      path: <BiSolidSearchAlt2 size={90} color="#4599b4" />,
      title: "Staff Augmentation",
      desc: "Enhance your team with our expert professionals who seamlessly integrate into your workforce, providing the skills you need to meet project demands efficiently and flexibly.",
      isIcon: true,
    },
    {
      path: <GoGoal size={90} color="#4599b4" />,
      title: "Dedicated Team",
      desc: "Build a customized, dedicated team of top-tier professionals focused exclusively on your projects, ensuring consistency, reliability, and alignment with your business goals.",
      isIcon: true,
    },
    {
      path: <IoMdRocket size={90} color="#4599b4" />,
      title: "Full Process Outsourcing",
      desc: "Delegate entire projects to our experienced teams, from conception to completion, allowing you to focus on core business activities while we handle everything else with precision and excellence.",
      isIcon: true,
    },
  ];
  return (
    <div>
      <div className="cards-container container">
        {ItOUTdata.map((item, index) => (
          <div className="single-card">
            {" "}
            <Singlecard
              key={index}
              path={item.path}
              title={item.title}
              description={item.desc}
              route={item.route}
              isIcon={item.isIcon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItOutTopCards;
