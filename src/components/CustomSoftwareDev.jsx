import React, { useEffect } from "react";
import "../css/Cards.css";
import Singlecard from "./Singlecard";
import ScrollReveal from "scrollreveal";
import {
  IoPeopleSharp,
  IoCodeSlash,
  IoRocketSharp,
  IoServerSharp,
  IoCloudSharp,
  IoConstructSharp,
  IoCogSharp,
  IoPuzzleSharp,
} from "react-icons/io5";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import "slick-carousel/slick/slick.css"; // Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Slick Theme CSS
import Slider from "react-slick";

const CSD_Cards = ({ heading }) => {
  const CSDdata = [
    {
      path: <IoPeopleSharp size={90} color="#4599b4" />,
      title: "Web Development",
      desc: "Transforming your digital vision into reality with expert web development services. Empower your online presence with cutting-edge design and functionality.",
      isIcon: true,
    },
    {
      path: <IoCodeSlash size={90} color="#4599b4" />,
      title: "Custom Software Development Services",
      desc: "Offering end-to-end custom software development solutions that drive growth and elevate your business.",
      isIcon: true,
    },
    {
      path: <IoRocketSharp size={90} color="#4599b4" />,
      title: "Software Product Development Services",
      desc: "To create market-winning digital solutions, we combine product-centered approaches, tested frameworks, and modern engineering principles.",
      isIcon: true,
    },
    {
      path: <IoServerSharp size={90} color="#4599b4" />,
      title: "Enterprise Software Development Services",
      desc: "Our mission is to streamline business processes and improve customer experiences by delivering next-generation applications.",
      isIcon: true,
    },
    {
      path: <IoCloudSharp size={90} color="#4599b4" />,
      title: "Seamless Software Integration Services",
      desc: "We provide our clients with top-notch software integration services. Boost your business growth with our integration solutions.",
      isIcon: true,
    },
    {
      path: <IoConstructSharp size={90} color="#4599b4" />,
      title: "Custom CRM Development Services",
      desc: "You can manage client interactions and enhance customer engagement with our CRM development services.",
      isIcon: true,
    },
    {
      path: <IoCogSharp size={90} color="#4599b4" />,
      title: "Comprehensive API Development Services",
      desc: "Utilize our cutting-edge API development services to streamline data-sharing and smooth integration within your business.",
      isIcon: true,
    },
    {
      path: <AiOutlineDeliveredProcedure size={90} color="#4599b4" />,
      title: "Delivering Innovative SaaS Solutions",
      desc: "Boost your business's productivity and daily operations with our SaaS software solutions.",
      isIcon: true,
    },
  ];

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "left",
      distance: "200px",
      duration: 500,
      delay: 200,
      reset: true,
    });

    sr.reveal(".single-card", {
      interval: 200,
    });
  }, []);

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


  return (
    <div>
      {/* <div className="card-heading-service" id="services">
        <h2 className="heading-underline-service" id="services">
          {heading}
        </h2>
      </div> */}
      <div className="cards-container container">
      <Slider
          {...settings}
          style={{
            width: "100%",
            margin: "0 auto", // Centers the slider in the container
          }}>
        {CSDdata.map((item, index) => (
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
    </div>
  );
};

export default CSD_Cards;
