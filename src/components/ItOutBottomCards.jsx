

import React from 'react'
import CSDSingleCard from "./CSDSingleCard";
import { IoPeopleSharp, IoCodeSlash, IoRocketSharp, IoServerSharp, IoCloudSharp, IoConstructSharp, IoCogSharp, IoPuzzleSharp } from 'react-icons/io5';
import { AiOutlineDeliveredProcedure } from "react-icons/ai";


const ItOutBottomCards = () => {
    const data = [
        {
          icon: <IoPeopleSharp size={30} color="black" />,
          heading: "Costs",
          text: "1 .Quality First: We are committed to excellence, ensuring the highest quality in everything we deliver.",
          text2:'  2 .Smart Savings: We provide efficient solutions that maintain quality while optimizing costs.'
        },
        {
          icon: <IoCodeSlash size={30} color="black" />,
          heading: "Team Productivity",
          text: "1 .Timely Delivery: Our team is committed to delivering results on schedule.",
          text2: "2 .Efficiency at Core: Efficiency is central to all our outcomes.",
        },
        {
          icon: <IoRocketSharp size={30} color="black" />,
          heading: "Customer Involvement",
          text: "1 .Client-Centric Approach: We actively involve our clients throughout the development journey.",
          text2: "2 .Inclusive Collaboration: We encourage direct client participation in the development process.",
        },
        {
          icon: <IoServerSharp size={30} color="black" />,
          heading: "User Satisfaction",
          text: "1 .Client-Centric Success: Our success is measured by client satisfaction.",
          text2: "2 .Results-Driven Satisfaction: Client contentment is the true measure of our success.",
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
            text2={item.text2}
          />
        ))}
      </div>
    </div>
  )
}

export default ItOutBottomCards
