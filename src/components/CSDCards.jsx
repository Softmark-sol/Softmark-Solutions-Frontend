import React from "react";
import CSDSingleCard from "./CSDSingleCard";
import { IoPeopleSharp, IoCodeSlash, IoRocketSharp, IoServerSharp, IoCloudSharp, IoConstructSharp, IoCogSharp, IoPuzzleSharp } from 'react-icons/io5';
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
const CSDCards = () => {
    const data = [
        {
          icon: <IoPeopleSharp size={30} color="black" />,
          heading: "Web Development",
          text: "Transforming your digital vision into reality with expert web development services. Empower your online presence with cutting-edge design and functionality.",
        },
        {
          icon: <IoCodeSlash size={30} color="black" />,
          heading: "Custom Software Development Services",
          text: "Offering end-to-end custom software development solutions that drive growth and elevate your business.",
        },
        {
          icon: <IoRocketSharp size={30} color="black" />,
          heading: "Software Product Development Services",
          text: "To create market-winning digital solutions, we combine product-centered approaches, tested frameworks, and modern engineering principles.",
        },
        {
          icon: <IoServerSharp size={30} color="black" />,
          heading: "Enterprise Software Development Services",
          text: "Our mission is to streamline business processes and improve customer experiences by delivering next-generation applications.",
        },
        {
          icon: <IoCloudSharp size={30} color="black" />,
          heading: "Seamless Software Integration Services",
          text: "We provide our clients with top-notch software integration services. Boost your business growth with our integration solutions.",
        },
        {
          icon: <IoConstructSharp size={30} color="black" />,
          heading: "Custom CRM Development Services",
          text: "You can manage client interactions and enhance customer engagement with our CRM development services.",
        },
        {
          icon: <IoCogSharp size={30} color="black" />,
          heading: "Comprehensive API Development Services",
          text: "Utilize our cutting-edge API development services to streamline data-sharing and smooth integration within your business.",
        },
        {
          icon: <AiOutlineDeliveredProcedure size={30} color="black" />,
          heading: "Delivering Innovative SaaS Solutions",
          text: "Boost your business's productivity and daily operations with our SaaS software solutions.",
        }
      ];
  
  return (
    <div>
      <div className="cards-container-csd container">
        {data.map((item, index) => (
          <CSDSingleCard
            key={index}
            icon={item.icon}
            heading={item.heading}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default CSDCards;
