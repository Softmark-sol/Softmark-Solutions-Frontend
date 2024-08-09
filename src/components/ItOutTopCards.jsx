
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
      desc: "Through our staff augmentation model, we aim to enhance your project capabilities and boost overall business efficiency by seamlessly integrating our experts into your team.",
      isIcon: true,
    },
    {
      path: <IoCodeSlash size={90} color="#4599b4" />,
      title: "Dedicated Team",
      desc: "At Softmark Solutions, we have meticulously assembled a team of experts across various domains, including software development, web design, data analytics, cybersecurity, and more.",
      isIcon: true,
    },
    {
      path: <IoRocketSharp size={90} color="#4599b4" />,
      title: "Full Process Outsourcing",
      desc: "We meticulously focus on every aspect of the development process, from flawless execution to delivering timely results and optimizing resource allocation.",
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
