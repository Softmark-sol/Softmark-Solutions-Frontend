import React from "react";
import "../css/Cards.css";
import Singlecard from "./Singlecard";
import WebDesign from "../assets/images/web-design.png";
import Mobile from "../assets/images/mobile.png";
import Maintenance from "../assets/images/maintainance.png";
import CMS from "../assets/images/cms.png";
import Solutions from "../assets/images/solutions.png";
import Slider from "react-slick"; // Import React Slick Slider
import "slick-carousel/slick/slick.css"; // Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Slick Theme CSS

const WebCards = ({ heading }) => {
  const Webdata = [
    {
      path: WebDesign,
      title: "Custom Website Design",
      desc: "Tailored designs that reflect your brand identity and engage your target audience. We specialize in creating visually appealing websites that are user-friendly and responsive across all devices.",
    },
    {
      path: Mobile,
      title: "Responsive Web Design",
      desc: "Ensuring your website looks great and functions flawlessly on all devices. Our designs adapt seamlessly to different screen sizes, optimizing user experience and satisfaction.",
    },
    {
      path: Solutions,
      title: "E-commerce Solutions",
      desc: "Building secure, scalable online stores to boost your sales and enhance customer experience. From seamless payment integration to analytics, we provide comprehensive solutions tailored to your business.",
    },
    {
      path: CMS,
      title: "Content Management Systems (CMS)",
      desc: "Empowering you to manage and update your website content with ease. Our CMS solutions streamline content creation and publishing, ensuring efficiency and productivity.",
    },
    {
      path: Maintenance,
      title: "Website Maintenance & Support",
      desc: "Providing ongoing support to keep your website up-to-date and running smoothly. We offer proactive maintenance services, including updates and security patches.",
    },
  ];

  // Slick Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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

  return (
    <div>
      <div
        className="card-heading-service"
        id="services">
        <h2
          className="heading-underline-service"
          id="services">
          {heading}
        </h2>
      </div>
      <div className="cards-container container">
        <Slider
          {...settings}
          style={{
            width: "100%",
            margin: "0 auto", // Centers the slider in the container
          }}>
          {Webdata.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
              }}>
              <Singlecard
                path={item.path}
                title={item.title}
                description={item.desc}
                route={item.route}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default WebCards;
