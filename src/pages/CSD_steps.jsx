import React from 'react';
import '../css/Csd_steps.css';
import Csd_Logos from './CSD_logos';

import img1 from "../assets/WEB1.jpg";
import img2 from "../assets/WEB2.jpg";
import img3 from "../assets/WEB3.jpg";
const steps = [
  { 
    icon: img1,
    heading: 'Discovery & Planning', 
    des: 'We Discover insights and meticulously plan for project success.'
 },
  { 
    icon: img2,
    heading: 'Design & Development',
    des: 'Our team develops innovative, scalable solutions for your website.' 
    },
  { 
    icon: img3,
    heading: 'Deployment', 
    des: 'Our technological solutions align perfectly with your business needs.'
 },
  { 
    icon: img1,
    heading: 'Testing & QA', 
    des: 'Spadasoft ensures quality excellence by conducting meticulous testing.'
 },
  { 
    icon: img2, 
    heading: 'Maintenance & Support',
    des: 'Providing continuous maintenance and support is our goal.'
 },
];

const Csd_Steps = () => {
  return (
    <div className="step">
      <h1>Our Custom Software Development Steps</h1>
      <p className="intro-text">
        Spadasoft Custom Software Development Agency uses the deep domain expertise of our software developers to create impactful digital solutions with a strategic vision.
      </p>
      <div className="steps-container">
        {steps.map((step, index) => (
          <Csd_Logos 
          key={index}
        icon={step.icon} 
        heading={step.heading}
        des={step.des} 
        />
        ))}
      </div>
    </div>
  );
};

export default Csd_Steps;
