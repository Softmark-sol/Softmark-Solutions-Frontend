

import React from 'react'
import CSDSingleCard from "./CSDSingleCard";
import { IoPeopleSharp, IoCodeSlash, IoRocketSharp, IoServerSharp, IoCloudSharp, IoConstructSharp, IoCogSharp, IoPuzzleSharp } from 'react-icons/io5';
import { AiOutlineDeliveredProcedure } from "react-icons/ai";


const ItOutBottomCards = () => {
    const data = [
        {
          icon: <IoPeopleSharp size={30} color="black" />,
          heading: "Costs",
          text: "Transforming your digital vision into reality with expert web development services. Empower your online presence with cutting-edge design and functionality.",
        },
        {
          icon: <IoCodeSlash size={30} color="black" />,
          heading: "Team Productivity",
          text: "Offering end-to-end custom software development solutions that drive growth and elevate your business.",
        },
        {
          icon: <IoRocketSharp size={30} color="black" />,
          heading: "Customer Involvement",
          text: "To create market-winning digital solutions, we combine product-centered approaches, tested frameworks, and modern engineering principles.",
        },
        {
          icon: <IoServerSharp size={30} color="black" />,
          heading: "User Satisfaction",
          text: "Our mission is to streamline business processes and improve customer experiences by delivering next-generation applications.",
        },]
  return (
    <div className="sub-heading container">
      <h1 style={{paddingTop:'3rem'}}>KPIs We Use to Estimate Work <br/> Progress and Results​</h1>
      <p className="intro-text sub-text" style={{textAlign:'center'}}> 
      We use these Key performance indicators to measure our progress and results.
      </p>
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
  )
}

export default ItOutBottomCards
