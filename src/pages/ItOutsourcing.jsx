import React from "react";
import "../css/ItOutsourcing.css";
import Typewriter from "../components/TypeWriter.jsx";
import { useNavigate } from "react-router-dom";
import DMLottieAnimation from "../components/DigitalMarketingAnimation";
import ItOutTopCards from "../components/ItOutTopCards.jsx";
import ItOut_Steps from "../components/ItoutSteps.jsx";
import ItOutNotch from "../ItOutNotch.jsx";
import ItOutMidcards from "../components/ItOutMidcards.jsx";
import ItOutBottomCards from "../components/ItOutBottomCards.jsx";
import BarChart from "../components/BarChart.jsx";
import MoreServices from "../components/moreServices/moreServices.jsx";
import ServiceForm from "../components/ServiceForm.jsx";
import ContactForm from "../components/ContactForm.jsx";

const ItOutsourcing = () => {
  const navigate = useNavigate();
  return (
    <>
    <ServiceForm 
  title={"Best IT Outsourcing Services"} 
  description={
    "Our IT outsourcing services provide businesses with cost-effective and scalable solutions for managing IT operations. From software development and technical support to cloud management and cybersecurity, we ensure high-quality services that help you focus on your core business goals."
  } 
  buttonText={"Get In Touch"} 
  route={"contactUs"} 
/>

      <div className="main-container container">
        <h2>
          <Typewriter strings={["#1 IT Outsourcing Services Provider"]} />
        </h2>
        <div className="horizontal-fram-logo">
          <div className="csd-hero">
            <h5 className="main-paragrah-csd main-paragrah">
              Softmark solutions gives your business access to a global talent
              pool. Our highly skilled IT professionals can address the needs
              and challenges of your business. Whether you are looking for Web
              development, Mobile app development, Digital Marketing , SEO
              services, Anime Art, Logo design look no further than Softmark
              Solutions.
              <br />
              <div class="buttons">
                <button class="btn" onClick={() => navigate("/contactUs")}>
                  <span></span>
                  <p data-text="Get Proposal" data-title="Contact Now"></p>
                </button>
              </div>
            </h5>
            <div className="CSD-animation">
              <DMLottieAnimation />
            </div>
          </div>
        </div>
      </div>
      <div className="sub-heading container">
        <h1>Corporation Models We Support</h1>
        <p className="intro-text sub-text">
          At Softmark Solutions, we support a diverse range of corporation
          models designed to meet the unique needs of our clients. These models
          include partnerships, joint ventures, and strategic alliances,
          collaboration and drive innovation. By offering flexibility in how
          businesses can work together, we enable our clients to leverage their
          strengths, share resources, and achieve mutual goals effectively.
        </p>
      </div>
      <ItOutTopCards />
      <div className="sub-heading container">
        <h1>We Deliver Results!</h1>
        <p className="intro-text sub-text">
          Our goal at Softmark Solutions is to ensure transparency,
          cost-effectiveness, and seamless collaboration throughout the
          outsourcing process. We are committed to delivering high-quality
          results that not only meet your expectations but also propel your
          business forward.
        </p>
        {/* <div >
        <BarChart/>
      </div> */}
      </div>
      <ItOut_Steps />
      <ItOutNotch />
      <ItOutMidcards />
      <ItOutBottomCards />
      <div className="sub-heading container">
        <h1 className="custom-mob">
          Why Choose Softmark Solutions Over Other <br /> IT Outsourcing
          Companies Across The Globe
        </h1>
        <p className="intro-text sub-text">
          Choose Softmark Solutions as your preferred IT outsourcing partner for
          a competitive edge in the global market. Our deep industry knowledge
          and customized solutions make us stand out. By collaborating with our
          team, you can expect top-tier results that consistently surpass your
          expectations. With Softmark Solutions, you're not just outsourcing;
          you're forming a partnership grounded in innovation, reliability, and
          a mutual commitment to achieving outstanding outcomes.
        </p>
      </div>
      <div
        className="button-effect"
        style={{
          paddingTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => navigate("/whyUs")}
      >
        <a className="effect effect-1" href="#whyus" title="Learn More">
          Why Us
        </a>
      </div>
      <MoreServices />
      <ContactForm/>

    </>
  );
};

export default ItOutsourcing;
