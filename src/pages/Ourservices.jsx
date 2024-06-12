import React from "react";
import "../css/Ourservice.css";
import PortfolioCard from "../components/PortfolioCards";

import img1 from "../assets/WEB1.jpg";
import img2 from "../assets/WEB2.jpg";
import img3 from "../assets/WEB3.jpg";

import img4 from "../assets/App1.jpg";
import img5 from "../assets/App2.jpg";
import img6 from "../assets/App3.jpg";

import { useNavigate } from "react-router-dom";
import ScrollToTopButton from "../components/ScrollUpButton";




const Ourservices = () => {

  const web=[{
    path:img1
  },
  {
    path:img2
  },
  {
    path:img3
  }
]

const app=[{
  path:img4
},
{
  path:img5
},
{
  path:img6
}
]

  const navigate=useNavigate()
 
  return (
    <div id="services">
      <div className="card-heading-service container" >
        <h1 className="heading-underline-service" >
          Our Work
        </h1>
        <p className="paragraph">
          Explore our portfolio to witness the transformative power of our
          services in web development, app creation, and captivating design
          assets. Each project is a testament to our commitment to delivering
          cutting-edge solutions tailored to our clients&#39; needs.
        </p>
      </div>
      

    <div className="card-heading-service container" >
    <h2 className="heading-underline-service" >
          Web Development
        </h2>
      <p style={{fontSize:'1rem',paddingTop:'20px'}}>"From sleek corporate websites to dynamic e-commerce platforms, our web development portfolio is a journey through digital craftsmanship. Step into a world where user experience reigns supreme and every pixel tells a story of innovation and creativity</p>
    </div>

    <div className="container web-container">
    {web.map((item,index)=>{
      return <PortfolioCard path={item.path}/>
    })}
    </div>


    <div className="card-heading-service container" >
    <h2 className="heading-underline-service" >
          App Development
        </h2>
      <p style={{fontSize:'1rem',paddingTop:'20px'}}>"Dive into a realm of mobile marvels with our app development showcase. Discover how we turn ideas into immersive experiences, blending intuitive design with powerful functionality. Whether iOS or Android, our apps set the standard for excellence.</p>
    </div>

    <div className="container web-container">
    {app.map((item,index)=>{
      return <PortfolioCard path={item.path}/>
    })}
    </div>

    <div className="card-heading-service container" >
    <h2 className="heading-underline-service" >
      Logos and Design Assets
        </h2>
      <p style={{fontSize:'1rem',paddingTop:'20px'}}>"Unlock the potential of your brand identity with our captivating design assets. Our portfolio is a visual symphony of logos, branding materials, and captivating visuals that breathe life into every project. Elevate your brand with designs that leave a lasting impression.</p>
    </div>

    <div className="container web-container">
    {app.map((item,index)=>{
      return <PortfolioCard path={item.path}/>
    })}
    </div>


      <div style={{paddingTop:'50px'}} className="container">
        <p className="paragraph2">Our work isn't just about aesthetics – it's about strategy, innovation, and results. Delve deeper into each project to uncover the secrets behind our success. From inception to execution, we share insights, challenges, and triumphs that define our approach to excellence</p>
      </div>

      <div className="card-heading-service container">
        <h2 className="heading-underline-service" >
        Call-to-Action
        </h2>
        <p className="paragraph">
        Ready to bring your vision to life? Let's collaborate! Whether you're looking to revamp your website, launch a groundbreaking app, or redefine your brand identity, we're here to make it happen. Contact us today to explore the possibilities.
        </p>
        <button className="contact-btn" onClick={()=>{navigate('/contactUs')}}>Contact Us</button>
      </div>
      <ScrollToTopButton/>
    </div>
  );
};

export default Ourservices;
