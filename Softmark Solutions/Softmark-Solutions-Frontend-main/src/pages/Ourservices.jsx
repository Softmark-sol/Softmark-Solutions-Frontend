import React, { useEffect } from "react";
import "../css/Ourservice.css";
import PortfolioCard from "../components/PortfolioCards";

import img1 from "../assets/WEB1.jpg";
import img2 from "../assets/WEB2.jpg";
import img3 from "../assets/WEB3.jpg";

import img4 from "../assets/App1.jpg";
import img5 from "../assets/App2.jpg";
import img6 from "../assets/App3.jpg";

import img7 from "../assets/logo1.png";
import img8 from "../assets/logo2.png";
import img9 from "../assets/logo3.png";

import { useNavigate } from "react-router-dom";
import ScrollToTopButton from "../components/ScrollUpButton";
import ScrollReveal from "scrollreveal";
import { IconCloudSlug } from "../components/IconCloudWithSlug";

const Ourservices = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "20px",
      duration: 500,
      delay: 200,
      reset: true,
    });

    sr.reveal(
      ".card-heading-service,.cards-container,.paragraph,.container,.pContainer,.paragraph2",
      {
        interval: 200,
      }
    );
  }, []);

  const web = [
    {
      path: img1,
    },
    {
      path: img2,
    },
    {
      path: img3,
    },
  ];

  const app = [
    {
      path: img4,
    },
    {
      path: img5,
    },
    {
      path: img6,
    },
  ];

  const logo = [
    {
      path: img7,
    },
    {
      path: img8,
    },
    {
      path: img9,
    },
  ];

  return (
    <div id="services">
      <div className="card-heading-service container">
        <h1 className="heading-underline-service">Our Work</h1>
        <div className="text-img-cont">
          <p className="pContainer pContainer2">
            Explore our portfolio to witness the transformative power of our
            services in web development, app creation, and captivating design
            assets. Each project is a testament to our commitment to delivering
            cutting-edge solutions tailored to our clients&#39; needs.
          </p>
          <div className="ourwork-animation">
            {/* <OurWorkLottieAnimation /> */}
            <IconCloudSlug />
          </div>
        </div>
      </div>

      <div className="card-heading-service container">
        <h2 className="heading-underline-service">Web Development</h2>
        <p className="pContainer">
          From sleek corporate websites to dynamic e-commerce platforms, our web
          development portfolio is a journey through digital craftsmanship. Step
          into a world where user experience reigns supreme and every pixel
          tells a story of innovation and creativity.
        </p>
      </div>

      <div className="container web-container">
        {web.map((item, index) => (
          <PortfolioCard key={index} path={item.path} />
        ))}
      </div>

      <div className="card-heading-service container">
        <h2 className="heading-underline-service">App Development</h2>
        <p className="pContainer">
          Dive into a realm of mobile marvels with our app development showcase.
          Discover how we turn ideas into immersive experiences, blending
          intuitive design with powerful functionality. Whether iOS or Android,
          our apps set the standard for excellence.
        </p>
      </div>

      <div className="container web-container">
        {app.map((item, index) => (
          <PortfolioCard key={index} path={item.path} />
        ))}
      </div>

      <div className="card-heading-service container">
        <h2 className="heading-underline-service">Logos and Design Assets</h2>
        <p className="pContainer">
          Unlock the potential of your brand identity with our captivating
          design assets. Our portfolio is a visual symphony of logos, branding
          materials, and captivating visuals that breathe life into every
          project. Elevate your brand with designs that leave a lasting
          impression.
        </p>
      </div>
      <div className="container web-container">
        {logo.map((item, index) => (
          <PortfolioCard key={index} path={item.path} />
        ))}
      </div>

      <div style={{ paddingTop: "50px" }} className="container">
        <p className="pContainer">
          Our work isn't just about aesthetics – it's about strategy,
          innovation, and results. Delve deeper into each project to uncover the
          secrets behind our success. From inception to execution, we share
          insights, challenges, and triumphs that define our approach to
          excellence.
        </p>
      </div>

      <div className="card-heading-service container">
        <h2 className="heading-underline-service">Call-to-Action</h2>
        <p className="pContainer">
          Ready to bring your vision to life? Let's collaborate! Whether you're
          looking to revamp your website, launch a groundbreaking app, or
          redefine your brand identity, we're here to make it happen. Contact us
          today to explore the possibilities.
        </p>
        <button
          className="contact-btn"
          onClick={() => {
            navigate("/contactUs");
          }}
        >
          Contact Us
        </button>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default Ourservices;
