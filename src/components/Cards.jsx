import React, { useEffect } from "react";

import "../css/Cards.css";
import Singlecard from "./Singlecard";
import img1 from "../assets/images/web-dev.png";
import img2 from "../assets/images/mobile-app.png";
import img3 from "../assets/images/searchengine.png";
import img4 from "../assets/images/video.png";
import img5 from "../assets/images/logo-design.png";
import ScrollReveal from "scrollreveal";

const Cards = ({ heading }) => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "20px",
      duration: 500,
      delay: 200,
      reset: true, // This will reset the animation every time you scroll
    });

    sr.reveal(".card-heading-service,.cards-container", {
      interval: 200, // This will reveal elements one by one
    });
  }, []);
  const ServicesData = [
    {
      path: img1,
      title: "Web Development",
      desc: "Transforming your digital vision into reality with expert web development services. Empower your online presence with cutting-edge design and functionality.",
      route: "/webPlans",
    },
    {
      path: img2,
      title: "Mobile App Development",
      desc: "Crafting seamless and intuitive mobile experiences tailored to your unique vision. From concept to launch, trust our team to bring your app idea to life with precision and innovation.",
      route: "/appPlans",
    },
    {
      path: img3,
      title: "Search Engine Optimization",
      desc: "Maximize your online visibility and drive organic traffic to your website with our strategic SEO solutions. Dominate search engine rankings and connect with your target audience effectively.",
      route: "/seo",
    },
    {
      path: img4,
      title: "Digital Marketing",
      desc: "Amplify your brand's reach and engagement through strategic digital marketing campaigns. From social media management to content creation, let us elevate your online presence and drive measurable results",
      route: "/digitalMarketing",
    },
    {
      path: img5,
      title: "Logo Design",
      desc: "Unlock the power of visual identity with our bespoke logo designs. Let us bring your brand's story to life through creativity and precision. Elevate your online presence with our professional logo design services.",
      route: "/logoPlans",
    },
  ];

  return (
    <div>
      <div className="card-heading-service" id="services">
        <h2 className="heading-underline-service" id="services">
          {heading}
        </h2>
      </div>
      <div className="cards-container container">
        {ServicesData.map((item, index) => (
          <Singlecard
            key={index}
            path={item.path}
            title={item.title}
            description={item.desc}
            route={item.route}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
