

import React from 'react'
import './css/ItOutsourcing.css'
import { FaCircleChevronRight } from "react-icons/fa6";

const ItOutNotch = () => {
  return (
    <div className='container'>
      <div className="sub-heading container">
      <h1>Get Experts for All Your Needs with <br/> Top-notch IT Outsourcing</h1>
      <p className="intro-text sub-text">
      Achieve excellence with Softmark Solutions premier IT outsourcing services, connecting you with seasoned experts across diverse domains.
      </p>
    </div>
    <div className='notch-section'>
        <div><img src="https://spadasoft.com/wp-content/uploads/2023/10/Frame-2.png" style={{width:'100%'}} /></div>
        <div className='notch-right'>
            <div><FaCircleChevronRight color='#4599b4' size={22}/><span>Frontend Developers</span> </div>
            <div><FaCircleChevronRight color='#4599b4' size={22}/><span> Backend Developers</span></div>
            <div><FaCircleChevronRight color='#4599b4' size={22}/><span>UI/UX Designers</span></div>
            <div><FaCircleChevronRight color='#4599b4' size={22}/><span>Project Managers</span></div>
            <div><FaCircleChevronRight color='#4599b4' size={22}/><span>DevOps Engineers</span></div>
            <div><FaCircleChevronRight color='#4599b4' size={22}/><span>QA & Test Automation Engineers</span></div>
        </div>
    </div>
    </div>
  )
}

export default ItOutNotch
