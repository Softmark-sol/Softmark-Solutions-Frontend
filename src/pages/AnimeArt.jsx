import React, { useEffect } from "react";
import Typewriter from "../components/TypeWriter";
import { useNavigate } from "react-router-dom";
import "../css/anime.css";
import AnimePortfolio from "../components/AnimePortfolio";
import ScrollReveal from "scrollreveal";

import animeHero from '../assets/images/animeHero.jpg';
import animeSub from '../assets/images/animeSub.jpeg';

const AnimeArt = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "right",
      distance: "100px",
      duration: 500,
      delay: 200,
      reset: true,
    });

    sr.reveal(".csd-hero-img", { interval: 200 });
    sr.reveal(".main-paragrah-csd", { interval: 200, origin: "left" });
    sr.reveal(".csd-single-card h5, .main-paragrah-csd h3", { interval: 200, origin: "top" });
    sr.reveal(".csd-single-card p", { interval: 200, origin: "left" });
  }, []);

  const services = [
    {
      title: "Concept Anime Characters",
      description:
        "Immerse yourself in the birth of unique personas as we conceptualize and craft compelling anime characters, each with its own captivating narrative and distinctive features.",
    },
    {
      title: "Anime Fan Art",
      description:
        "Witness your favorite anime come alive with our fan art creations. We breathe new life into beloved characters, capturing the essence of the series with meticulous attention to detail.",
    },
    {
      title: "Anime OC (Original Characters)",
      description:
        "Unleash your creativity by collaborating with us to bring your Anime Original Characters (OCs) to vivid existence. Every detail is carefully considered to ensure a character that resonates with your vision.",
    },
    {
      title: "Anime Emotes",
      description:
        "Elevate your online presence with our custom Anime Emotes. Whether for streaming, messaging, or social media, our expressive emotes inject personality and flair into your digital interactions.",
    },
    {
      title: "Character Sheet",
      description:
        "Anime Character sheet is a visual feast, showcasing intricate details such as character design, expressions, attire, and weaponry. Our talented artists pour their passion into every line, color, and nuance, ensuring that each character possesses a unique identity and resonates with distinct personality traits.",
    },
  ];

  const renderServiceCards = () =>
    services.map((service, index) => (
      <div key={index} className="csd-single-card container anime-card2">
        <h5 style={{ fontWeight: "bold", textAlign: "center", paddingTop: "20px", fontSize: "1.5rem" }}>
          {service.title}
        </h5>
        <p style={{ textAlign: "center", paddingTop: "20px", fontSize: "1rem" }}>
          {service.description}
        </p>
      </div>
    ));

  return (
    <>
      <div className="main-container container anime">
        <h2>
          <Typewriter strings={["Where Your Vision Meets Anime Excellence"]} />
        </h2>
        <div className="horizontal-fram-logo">
          <div className="csd-hero">
            <h5 className="main-paragrah-csd main-paragrah anime-h5" style={{ color: "#454545" }}>
              Bring your vision to life with our expert anime art services. Our talented artists create stunning, detailed designs that capture the essence of Anime. Perfect for custom artwork or branding, we elevate your projects with dynamic, eye-catching artistry.
            </h5>
            <div className="csd-hero-img anime-img">
              <img src={animeHero} alt="Anime art example" style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="main-container anime-container">
        <h2>
          <Typewriter
            strings={["From Concept to Creation: Anime Art Perfected"]}
          />
        </h2>
        <div className="horizontal-fram-logo ">
          <div className="csd-hero anime2">
            <h5
              className="main-paragrah-csd main-paragrah anime-h5"
              style={{ color: "#454545", fontSize: "1rem" }}
            >
              <h3
                style={{
                  color: "#256072",
                  fontWeight: "bold",
                  fontSize: "3rem",
                  paddingBottom: "10px",
                  textAlign: "left",
                }}
              >
                THE BEST IN THE BUSINESS
              </h3>
              At Softmark Solutions, we embark on a captivating journey
              dedicated to bringing your anime fantasies to life. Our
              distinguished studio specializes in the meticulous crafting of
              enchanting anime characters, adorable chibi emotes, visionary
              concept art, and a diverse array of other awe-inspiring creations.
              With an unwavering passion for the art of anime, our skilled
              artists breathe life into imaginative worlds, infusing our
              characters with unparalleled expressiveness.
              <br />
              <br />
              Whether you’re in search of captivating concept characters,
              personalized Anime Original Characters (OCs), endearing Chibi
              creations, or striking Anime Profile Pictures (PfPs), Softmark
              Solutions is your destination for the highest caliber artworks.
              Our commitment to excellence ensures that each creation is a
              masterpiece in its own
            </h5>
            <div className="csd-hero-img anime-img">
              <img
                src={animeSub}
                alt="animeArt"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="card-heading-service container">
        <h2 className="heading-underline-service">What we do</h2>
        <p className="pContainer" style={{ textAlign: "center" }}>
          Indulge in a spectrum of artistic services tailored to elevate your anime experience at Fantasy Spectrum Anime ArtMania. Our array of offerings spans the following enchanting realms.
        </p>
      </div>

      <div className="container cards-container-csd">
        {renderServiceCards()}
      </div>
      <AnimePortfolio />

      <div className="card-heading-service container">
        <h2 className="heading-underline-service">Get Started Today</h2>
        <p className="paragraph" style={{ alignItems: "center" }}>
          Ready to elevate your anime art portfolio? Contact us today to schedule a consultation and discover how our expertise can help you showcase your artwork, connect with your audience, and take your creative vision to the next level. Let's make your anime art shine and stand out online!
        </p>
        <button
          onClick={() => navigate("/contactUs")}
          className="effect effect-1"
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#f3972b")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#4599b4")}
        >
          Get a free Quotation
        </button>
      </div>
    </>
  );
};

export default AnimeArt;
