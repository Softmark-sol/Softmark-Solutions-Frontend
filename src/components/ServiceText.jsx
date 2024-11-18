import React from 'react'
import "../css/contactForm.css";
import ConsultationBtn from './Buttons/ConsultationBtn';



const ServiceText = ({ title, description, buttonText, route }) => {
  return (
    <div className="text-area" style={{paddingTop:'80px'}}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <ConsultationBtn route={route} text={buttonText} />
      </div>
      <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center',width:'60%',paddingTop:'40px'}}>
        <div><img src={budge1} style={{width:'100%'}} alt="budge" srcset="" /></div>
        <div><img src={budge2} style={{width:'100%'}} alt="budge" srcset="" /></div>
        <div><img src={budge3} style={{width:'100%'}} alt="budge" srcset="" /></div>
      </div>
    </div>
  )
}

export default ServiceText
