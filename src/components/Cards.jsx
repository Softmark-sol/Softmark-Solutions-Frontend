import React, { lazy, Suspense, useEffect, useState } from "react";
import "../css/Cards.css";
import Singlecard from "./Singlecard";
import img1 from "../assets/images/web-dev.png";
import img2 from "../assets/images/mobile-app.png";
import img3 from "../assets/images/searchengine.png";
import img4 from "../assets/images/video.png";
import img5 from "../assets/images/logo-design.png";
import img6 from "../assets/images/custom.png";
import img7 from "../assets/images/anime.png";
import img8 from "../assets/images/outsourcing.png";
import img9 from "../assets/icons/blockchain.png";
import ScrollReveal from "scrollreveal";
import { useNavigate } from "react-router-dom";
import ConsultationBtn from "./Buttons/ConsultationBtn";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ParticleEffect = lazy(() => import("./Particles"));
const Cards = ({ heading }) => {
  const navigate = useNavigate();
  const ServicesData = [
    {
      path: img6,
      title: "Custom Software Development",
      desc: "Softmark Solutions offers customized, tailored solutions that perfectly align with your business needs.",
      route: "/services/software-development-services",
    },
    {
      path: img8,
      title: "IT Outsourcing",
      desc: "Cut your business costs and focus on your core competencies with our tailored IT outsourcing services we deliver efficient, high-quality solutions that drive your business forward.",
      route: "/services/ItOutsourcing",
    },
    {
      path: img1,
      title: "Web Development",
      desc: "Transforming your digital vision into reality with expert web development services. Empower your online presence with cutting-edge design and functionality.",
      route: "/services/website-development-services",
    },
    {
      path: img2,
      title: "Mobile App Development",
      desc: "Crafting seamless and intuitive mobile experiences tailored to your unique vision. From concept to launch, trust our team to bring your app idea to life with precision and innovation.",
      route: "/services/app-development-services",
    },
    {
      path: img3,
      title: "Search Engine Optimization",
      desc: "Maximize your online visibility and drive organic traffic to your website with our strategic SEO solutions. Dominate search engine rankings and connect with your target audience effectively.",
      route: "/services/seo-services",
    },
    {
      path: img4,
      title: "Digital Marketing",
      desc: "Amplify your brand's reach and engagement through strategic digital marketing campaigns. From social media management to content creation, let us elevate your online presence and drive measurable results",
      route: "/services/social-media-marketing-services",
    },
    {
      path: img7,
      title: "Anime Art",
      desc: "Create anime characters and scenes with Japanese animation styles using sketching, inking, and coloring. Utilize digital tools for expressive, dynamic visuals ideal for comics and animations.",
      route: "/services/anime-art-services",
    },
    {
      path: img5,
      title: "Logo Design",
      desc: "Unlock the power of visual identity with our bespoke logo designs. Let us bring your brand's story to life through creativity and precision. Elevate your online presence with our professional logo design services.",
      route: "/services/graphics-design-services",
    },
    {
      path: img9,
      title: "Blockchain Services",
      desc: "Transform your ideas with secure, scalable blockchain solutions. From smart contracts to DApps, we deliver innovation and transparency for your business.",
      route: "/services/blockchain-services",
    },
  ];

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "20px",
      duration: 500,
      delay: 200,
      reset: true,
    });

    sr.reveal(".card-heading-service,.cards-container", {
      interval: 200,
    });
    return () => sr.destroy();
  }, []);

  const location = window.location.pathname;

  const handleSeeMoreClick = () => {
    navigate("/services");
  };

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
    <div style={{ position: "relative", overflow: "hidden" }}>
      <Suspense fallback={<div>Loading...</div>}>
        <ParticleEffect />
      </Suspense>
      <div className="card-heading-service" id="services">
        <h2 className="heading-underline-service" id="services">
          {heading}
        </h2>
      </div>
      <div className="cards-container container serviceCards">
        {/* <Slider
          {...settings}
          style={{
            width: "100%",
            margin: "0 auto", 
          }}
        > */}
          {ServicesData.slice(
            0,
            location !== "/" ? ServicesData.length : 3
          ).map((item, index) => (
            <Singlecard
              key={index}
              path={item.path}
              title={item.title}
              description={item.desc}
              route={item.route}
            />
          ))}
        {/* </Slider> */}
      </div>
      {location === "/" && (
        <ConsultationBtn route={"services"} text="See More" />
       )} 
    </div>
  );
};

export default Cards;
