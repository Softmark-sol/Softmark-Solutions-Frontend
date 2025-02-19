import React from 'react'
import Singlecard from "./Singlecard";
import { SiGooglecontaineroptimizedos } from "react-icons/si";
import { MdOutlineHighQuality,MdFreeCancellation } from "react-icons/md";
import "slick-carousel/slick/slick.css"; // Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Slick Theme CSS
import {
  IoPeopleSharp,
  IoCodeSlash,
  IoRocketSharp,
} from "react-icons/io5";
import Slider from 'react-slick';


const ItOutMidcards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
        const ItOUTdata = [
          {
            path: <IoPeopleSharp size={90} color="#4599b4" />,
            title: "Access to Top IT Talent",
            desc: "With Softmark Solutions, you can leverage the expertise of the industry's finest minds.",
            isIcon: true,
          },
          {
            path: <SiGooglecontaineroptimizedos  size={80} color="#4599b4" />,
            title: "Optimized Workloads",
            desc: "You can focus on your core business functions while we take care of your workloads.",
            isIcon: true,
          },
          {
            path: <IoRocketSharp size={90} color="#4599b4" />,
            title: "Industry Expertise",
            desc: "With years of industry experience, we bring specialized insights to your business.",
            isIcon: true,
          },
          {
            path: <MdFreeCancellation size={90} color="#4599b4" />,
            title: "Minimal Risksn",
            desc: "We provide a safety net to ensure your project remains free of risks and potential disruptions.",
            isIcon: true,
          },
          {
            path: <IoCodeSlash size={90} color="#4599b4" />,
            title: "Faster Launch Times",
            desc: "Our team facilitates faster development and deployment of your business processes.",
            isIcon: true,
          },
          {
            path: <MdOutlineHighQuality size={90} color="#4599b4" />,
            title: "High Quality Products",
            desc: "We deliver high-quality products that surpass your expectations and drive your business forward.",
            isIcon: true,
          },
      
        ];
  return (
    <>
    <div className="sub-heading container">
      <h1 style={{fontSize:'2rem',paddingTop:'3rem'}}>How Does Softmark Solutions enable your business <br/> success through IT Outsourcing​</h1>
      <p className="intro-text sub-text">
      At Softmark Solutions, we recognize that every client has unique needs and preferences when it comes to IT outsourcing. To meet these diverse requirements, we offer a range of flexible engagement models. Whether you need a dedicated team to focus solely on your project, prefer a time-and-materials approach, opt for a fixed-price project, or require a hybrid model, we can tailor our services to align with your specific goals. Our priority is to ensure that our dedicated professionals create websites and applications that are not only visually appealing but also intuitive and user-friendly.
      </p>
    </div>
    <div className="cards-container container">
    <Slider
          {...settings}
          style={{
            width: "100%",
            margin: "0 auto", 
          }}>
        {ItOUTdata.map((item, index) => (
          // <div className="single-card">
            <Singlecard
              key={index}
              path={item.path}
              title={item.title}
              description={item.desc}
              route={item.route}
              isIcon={item.isIcon}
            />
          // </div>
        ))}
         </Slider>
      </div>
    </>
  )
}

export default ItOutMidcards
