import React from "react";
import Typewriter from "../components/TypeWriter";
import { useNavigate } from "react-router-dom";
import "../css/anime.css";
import AnimePortfolio from "../components/AnimePortfolio";

const AnimeArt = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="main-container container anime">
        <h2>
          <Typewriter strings={["Where Your Vision Meets Anime Excellence"]} />
        </h2>
        <div className="horizontal-fram-logo">
          <div className="csd-hero">
            <h5
              className="main-paragrah-csd main-paragrah anime-h5"
              style={{ color: "#454545" }}
            >
              Bring your vision to life with our expert anime art services. Our
              talented artists create stunning, detailed designs that capture
              the essence of Anime. Perfect for custom artwork or branding, we
              elevate your projects with dynamic, eye-catching artistry.{" "}
            </h5>
            <div className="csd-hero-img anime-img">
              <img
                src="https://img.freepik.com/free-photo/digital-art-style-illustration-graphic-designer_23-2151536949.jpg?t=st=1722263517~exp=1722267117~hmac=ec8ee85ebe3b0ef33d21f097df1bfab69d90e9be571bb7deaa32a52d201531dc&w=740"
                alt="animeArt"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="main-container container">
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
                  color: "#4599B4",
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
              creations, or striking Anime Profile Pictures (PfPs), FSARTMANIA
              is your destination for the highest caliber artworks. Our
              commitment to excellence ensures that each creation is a
              masterpiece in its own
            </h5>
            <div className="csd-hero-img anime-img">
              <img
                src="https://fsartmania.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-07-at-12.13.15-AM-1-1536x1536.jpeg"
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
          Indulge in a spectrum of artistic services tailored to elevate your
          anime experience at Fantasy Spectrum Anime ArtMania. Our array of
          offerings spans the following enchanting realms.
        </p>
      </div>

      <div className="container cards-container-csd">
        <div className="csd-single-card container anime-card2">
          <h5
            style={{
              fontWeight: "bold",
              textAlign: "center",
              paddingTop: "20px",
              fontSize: "1.5rem",
            }}
          >
            Concept Anime Characters
          </h5>
          <p
            style={{
              textAlign: "center",
              paddingTop: "20px",
              fontSize: "1rem",
            }}
          >
            Immerse yourself in the birth of unique personas as we conceptualize
            and craft compelling anime characters, each with its own captivating
            narrative and distinctive features.
          </p>
        </div>

        <div className="csd-single-card container anime-card2">
          <h5
            style={{
              fontWeight: "bold",
              textAlign: "center",
              paddingTop: "20px",
              fontSize: "1.5rem",
            }}
          >
            Anime Fan Art
          </h5>
          <p
            style={{
              textAlign: "center",
              paddingTop: "20px",
              fontSize: "1rem",
            }}
          >
            Witness your favorite anime come alive with our fan art creations.
            We breathe new life into beloved characters, capturing the essence
            of the series with meticulous attention to detail.{" "}
          </p>
        </div>

        <div className="csd-single-card container anime-card2">
          <h5
            style={{
              fontWeight: "bold",
              textAlign: "center",
              paddingTop: "20px",
              fontSize: "1.5rem",
            }}
          >
            Anime OC (Original Characters){" "}
          </h5>
          <p
            style={{
              textAlign: "center",
              paddingTop: "20px",
              fontSize: "1rem",
            }}
          >
            Unleash your creativity by collaborating with us to bring your Anime
            Original Characters (OCs) to vivid existence. Every detail is
            carefully considered to ensure a character that resonates with your
            vision.{" "}
          </p>
        </div>

        <div className="csd-single-card container anime-card anime-card2">
          <h5
            style={{
              fontWeight: "bold",
              textAlign: "center",
              paddingTop: "20px",
              fontSize: "1.5rem",
            }}
          >
            Anime Emotes
          </h5>
          <p
            style={{
              textAlign: "center",
              paddingTop: "20px",
              fontSize: "1rem",
            }}
          >
            Elevate your online presence with our custom Anime Emotes. Whether
            for streaming, messaging, or social media, our expressive emotes
            inject personality and flair into your digital interactions.
          </p>
        </div>

        <div className="csd-single-card container anime-card anime-card2">
          <h5
            style={{
              fontWeight: "bold",
              textAlign: "center",
              paddingTop: "20px",
              fontSize: "1.5rem",
            }}
          >
            Character Sheet
          </h5>
          <p
            style={{
              textAlign: "center",
              paddingTop: "20px",
              fontSize: "1rem",
            }}
          >
            Anime Character sheet is a visual feast, showcasing intricate
            details such as character design, expressions, attire, and weaponry.
            Our talented artists pour their passion into every line, color, and
            nuance, ensuring that each character possesses a unique identity and
            resonates with distinct personality traits.
          </p>
        </div>
      </div>
      <AnimePortfolio />

      <div className="card-heading-service container">
        <h2 className="heading-underline-service">Get Started Today</h2>
        <p className="paragraph" style={{ alignItems: "center" }}>
          Ready to elevate your anime art portfolio? Contact us today to
          schedule a consultation and discover how our expertise can help you
          showcase your artwork, connect with your audience, and take your
          creative vision to the next level. Let's make your anime art shine and
          stand out online!
        </p>
        <button onClick={()=>navigate("/contactUs")}
        className="effect effect-1"
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#f3972b")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#4599b4")}
      >
        Get a free Quotation
      </button>
      <div />
      </div>

      
    </>
  );
};
export default AnimeArt;
