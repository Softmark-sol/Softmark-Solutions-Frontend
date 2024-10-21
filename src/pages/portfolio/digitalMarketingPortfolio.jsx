import React, { useEffect } from "react";
import "./digitalMarketingPortfolio.css";
import { useNavigate } from "react-router-dom";

import digitalExpertise from '../../assets/portfolio/digitalExpertise.png';
import whatDoweDo from '../../assets/portfolio/whatDoweDO.png';
import caseStudies from '../../assets/portfolio/caseStudies.png';

const DigitalMarketingPortfolio = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in-left, .fade-in-right');
    const handleScroll = () => {
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          element.classList.add('in-view');
        } else {
          element.classList.remove('in-view');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-header">Our Digital Marketing Portfolio</h1>
      <p className="portfolio-discription">  Showcasing innovative strategies and successful campaigns that drive engagement, boost brand visibility, and deliver measurable results.
      </p>

      <div className="portfolio-section fade-in-left">
        <div className="portfolio-text">
          <h2>Expertise</h2>
          <p>
            With our SEO consultancy services, we’ll guide you through the complexities of SEO. We’ll assess your current strategy and make sure it's aligned with your business goals.
          </p>
        </div>
        <div className="portfolio-image">
          <img src={digitalExpertise} alt="Digital Expertise" />
        </div>
      </div>

      <div className="portfolio-section fade-in-right">
        <div className="portfolio-image">
          <img src={whatDoweDo} alt="What We Do" />
        </div>
        <div className="portfolio-text">
          <h2>What do we Do</h2>
          <p>
            A well-functioning website is essential for SEO success. Our technical SEO audit will identify issues that may be holding back your site.
          </p>
        </div>
      </div>

      <div className="portfolio-section fade-in-left">
        <div className="portfolio-text">
          <h2>Case Studies</h2>
          <p>
            Our keyword and market research services provide in-depth insights into what your target audience is looking for, helping you target the right audience.
          </p>
        </div>
        <div className="portfolio-image">
          <img src={caseStudies} alt="Case Studies" />
        </div>
      </div>

      <button className="portfolio-button" onClick={() => navigate('/contactUs')}>Get A Free inquiry
      </button>
    </div>
  );
};

export default DigitalMarketingPortfolio;
