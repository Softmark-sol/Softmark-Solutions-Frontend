import React, { useEffect } from "react";
import "../css/Ourservice.css";
import PortfolioCard from "./portfolio/portfolioCard"; // Updated import
import ScrollToTopButton from "../components/ScrollUpButton";
import { IconCloudSlug } from "../components/IconCloudWithSlug";
import { useNavigate } from "react-router-dom";
import webIcon from '../assets/portfolio/coding_17359683.png';
import AppIcon from '../assets/portfolio/AppDevelopment.png';
import logoIcon from "../assets/images/logo-design.png";
import CustomSoftware from "../assets/portfolio/custum-Software-Development.png";
import SEO from "../assets/portfolio/seo_5538708.png";
import DigitalMarketing from "../assets/portfolio/social-media_1968750.png";
import AnimeArt from "../assets/images/anime.png";
import ScrollReveal from "scrollreveal";

const Ourservices = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "20px",
      duration: 500,
      delay: 100,
      reset: true,
    });
    sr.reveal(".card-heading-service, .cards-container, .paragraph", {
      interval: 200,
    });
  }, []);

  const services = [
    { title: "Web Development", description: "Professional websites built for your brand, optimized for performance and user experience.", type: "web", icon: webIcon },
    { title: "App Development", description: "iOS and Android apps tailored to your needs, ensuring seamless functionality and user engagement.", type: "app", icon: AppIcon },
    { title: "Logo Design", description: "Creative logos that capture the essence of your brand, providing a strong visual identity.", type: "logo", icon: logoIcon },
    { title: "Custom Software Development", description: "Bespoke software solutions designed to meet your unique business requirements and enhance efficiency.", type: "custom", icon: CustomSoftware },
    // { title: "SEO", description: "Strategic search engine optimization techniques to improve your online visibility and drive organic traffic.", type: "seo", icon: SEO },
    { title: "Digital Marketing", description: "Comprehensive digital marketing strategies that boost brand awareness and engage your target audience.", type: "digital", icon: DigitalMarketing },
    { title: "Anime Art", description: "Vibrant and captivating anime-style artwork tailored to bring your characters and stories to life.", type: "anime", icon: AnimeArt },
  ];

  return (
    <div id="services">
      <div className="card-heading-service container">
        <h1 className="heading-underline-service">Our Work</h1>
        <div className="text-img-cont">
          <p className="pContainer pContainer2">
            Explore our portfolio to witness the transformative power of our services in web development, app creation, and captivating design assets. Each project is a testament to our commitment to delivering cutting-edge solutions tailored to our clients' needs.
          </p>
          <div className="ourwork-animation">
            <IconCloudSlug />
          </div>
        </div>
      </div> 
      <div className="cards-container">
        <h2 className="heading-underline-service container " style={{display:'flex',justifyContent:'center',alignItems:'center' , marginTop:'20px'}} >Our Portfolio</h2>
        <div className="service-cards-grid">
          {services.map((item, index) => (
            <PortfolioCard key={index} {...item} />
          ))}
        </div>
      </div>

      <div className="card-heading-service container">
        <p className="pContainer" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          Ready to bring your vision to life? Contact us today to explore the possibilities.
        </p>
        <button className="contact-btn" onClick={() => navigate("/contactUs")}>
          Contact Us
        </button>
      </div>

      <ScrollToTopButton />
    </div>
  );
};

export default Ourservices;
