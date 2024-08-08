
import React from 'react'
import Singlecard from "./Singlecard";

import {
  IoPeopleSharp,
  IoCodeSlash,
  IoRocketSharp,
} from "react-icons/io5";


const ItOutTopCards = () => {
  const ItOUTdata = [
    {
      path: <IoPeopleSharp size={90} color="#4599b4" />,
      title: "Staff Augmentation",
      desc: "Transforming your digital vision into reality with expert web development services. Empower your online presence with cutting-edge design and functionality.",
      isIcon: true,
    },
    {
      path: <IoCodeSlash size={90} color="#4599b4" />,
      title: "Dedicated Team",
      desc: "Offering end-to-end custom software development solutions that drive growth and elevate your business.",
      isIcon: true,
    },
    {
      path: <IoRocketSharp size={90} color="#4599b4" />,
      title: "Full Process Outsourcing",
      desc: "To create market-winning digital solutions, we combine product-centered approaches, tested frameworks, and modern engineering principles.",
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
  )
}

export default ItOutTopCards
