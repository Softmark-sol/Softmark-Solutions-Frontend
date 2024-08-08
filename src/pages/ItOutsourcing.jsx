

import React from 'react'
import '../css/ItOutsourcing.css'
import Typewriter from "../components/TypeWriter.jsx";
import { useNavigate } from "react-router-dom";
import CSDLottieAnimation from "../components/CSD-Animation.jsx";
import ItOutTopCards from '../components/ItOutTopCards.jsx';
import ItOut_Steps from '../components/ItoutSteps.jsx';
import ItOutNotch from '../ItOutNotch.jsx';
import ItOutMidcards from '../components/ItOutMidcards.jsx';
import ItOutBottomCards from '../components/ItOutBottomCards.jsx';

const ItOutsourcing = () => {
    const navigate = useNavigate();
  return (
    <>
     <div className="main-container container">
        <h2>
          <Typewriter
            strings={["#1 IT Outsourcing Services Provider"]}
          />
        </h2>
        <div className="horizontal-fram-logo">
          <div className="csd-hero">
            <h5 className="main-paragrah-csd main-paragrah">
            Softmark solutions gives your business access to a global talent pool. Our highly skilled IT professionals can address the needs and challenges of your business. Whether you are looking for Web development, Mobile app development, Digital Marketing , SEO services, Anime Art, Logo design look no further than Softmark Solutions.
              <br />
              <div class="buttons" onClick={() => navigate("/contactUs")}>
                <button class="btn">
                  <span></span>
                  <p data-text="Get Proposal" data-title="Contact Now"></p>
                </button>
              </div>
            </h5>
            <div className="CSD-animation">
              <CSDLottieAnimation />
            </div>
          </div>
        </div>
      </div>
      <div className="sub-heading container">
      <h1>Corporation Models We Support</h1>
      <p className="intro-text sub-text">
      At Softmark Solutions, we support a diverse range of corporation models designed to meet the unique needs of our clients. These models include partnerships, joint ventures, and strategic alliances, collaboration and drive innovation. By offering flexibility in how businesses can work together, we enable our clients to leverage their strengths, share resources, and achieve mutual goals effectively.
      </p>
    </div>
    <ItOutTopCards/>
    <div className="sub-heading container">
      <h1>We Deliver Results!</h1>
      <p className="intro-text sub-text">
      Our goal at Softmark Solutions is to ensure transparency, cost-effectiveness, and seamless collaboration throughout the outsourcing process. We are committed to delivering high-quality results that not only meet your expectations but also propel your business forward.
      </p>
    </div>
    <ItOut_Steps/>
    <ItOutNotch/>
    <ItOutMidcards/>
    <ItOutBottomCards/>
    </>
  )
}

export default ItOutsourcing
