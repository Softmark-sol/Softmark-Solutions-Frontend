import React, { useEffect } from "react";
import "../css/seo.css";
import SeoLottieAnimation from "../components/SeoAnimation";
import Typewriter from "../components/TypeWriter.jsx";
import { useNavigate } from "react-router-dom";
import contentlImage from '../assets/images/SeoImages/media-marketing-internet-digital-global_53876-138500.jpg'
import seoSearchImage from '../assets/images/SeoImages/seo-search-engine-optimization-modish-ecommerce-online-retail-business_31965-45082.jpeg'
import seoExpertImage from '../assets/images/SeoImages/seo-expert-implementing-schema-markup-enhance-search-engine-results_1314467-47979.jpeg'
import seoImage from '../assets/images/SeoImages/seo-search-engine-optimization-modish-ecommerce-online-retail-business_31965-75056.jpeg'
import seoResearchImage from '../assets/images/SeoImages/research.jpeg'
import seoLinking from '../assets/images/SeoImages/man-is-using-laptop-with-website-web-screen_1282070-12983.jpeg'
import seoTechnicalAudit from '../assets/images/SeoImages/man-concentrates-data-analysis-computer_999616-2868-removebg-preview.png'


const Seo = () => {
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
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="seo container">
      <h1 className="seo-h fade-in-left">
        SoftMark Solutions -{" "}
        <Typewriter strings={["How Our SEO Experts Can Help?"]} />
      </h1>

      <div className="horizontal-fram-seo fade-in-left">
        <div style={{ width: "100%" }}>
          <p className="seo-p">
          When it comes to SEO, two things can make a mark difference: Experience and Knowledge. At Softmark Solutions, with our decades of experience, technical knowledge, and hard work, we aim to deliver 100% proven results. Our SEO experts are highly skilled, creative, and passionate about helping businesses like YOURs to succeed. From consultancy to content marketing, we’re providing a range of SEO services that are specifically designed to fit your business needs.
          </p>
        </div>
        <div className="seo-animation">
          <SeoLottieAnimation />
        </div>
      </div>

      {/* <button className="button-primary" onClick={() => navigate('/contactUs')}>Request a Proposal Today!</button> */}

      <h1 className="seo-subheader fade-in-right">Our SEO Services</h1>

      <div className="horizontal-fram-seo fade-in-left">
        <div className="seo-animation">
          <img
            src={seoSearchImage}
            alt="SEO Consultancy"
            className="seo-consultancy-image"
          />
        </div>
        <div style={{ width: "100%" }}>
          <h1 className="seo-subheader">SEO Consultancy</h1>
          <p className="seo-p">
          With our SEO consultancy services, we’ll guide you through the complexities of SEO. If you’re unsure of where to start, there is no need to worry about it because we’ll assess your current SEO strategy and pinpoint areas for improvement. Our consultants will closely work with you to make sure that your SEO strategies are completely aligned with your business goals. You’ll receive clear and practical advices to boost your website
          </p>
        </div>
      </div>

      <div className="horizontal-fram-seo fade-in-right">
        <div style={{ width: "100%" }}>
          <h1 className="seo-subheader">Technical SEO Audit</h1>
          <p className="seo-p">
          A well-functioning website is essential for SEO success. Our technical SEO audit will identify issues that may be holding back your site. We analyze everything, such as site speed, mobile optimization, and crawlability.
          </p>
          <p className="seo-p">
          After the audit, we’ll provide crawlability and actionable recommendations that can help improve your site’s performance. Our goal is to make sure that your website is both user-friendly and SEO.
          </p>
        </div>
        <div className="seo-animation">
          <img
            src={seoTechnicalAudit}
            alt="Technical SEO Audit"
            className="responsive-image"
          />
        </div>
      </div>

      <div className="horizontal-fram-seo fade-in-left">
        <div className="seo-animation">
          <img
            src={seoImage}
            alt="Keyword & Market Research"
            className="responsive-image"
          />
        </div>
        <div style={{ width: "100%" }}>
          <h1 className="seo-subheader">Keyword & Market Research</h1>
          <p className="seo-p">
          Our keyword and market research services provide in-depth insights into what your target audience is looking for. We'll assist you in identifying the most relevant keywords for your business and target market.
          </p>
          <p className="seo-p">
          This data enables us to create strategies that target the right audience and improve your chances of ranking on the first page.
          </p>
        </div>
      </div>

      <div className="horizontal-fram-seo fade-in-right">
        <div style={{ width: "100%" }}>
          <h1 className="seo-subheader">Onsite SEO</h1>
          <p className="seo-p">
          With our onsite SEO services, we’ll make your website as search engine-friendly as possible. We’ll optimize your content, meta tags, headers, linking, and other key elements. Our experts will also improve your site’s structure to make it easier for visitors to navigate. After that, we guarantee you’ll see better rankings and engagements from visitors.
          </p>
        </div>
        <div className="seo-animation">
          <img
            src={seoResearchImage}
            alt="Onsite SEO"
            className="responsive-image"
          />
        </div>
      </div>

      <div className="horizontal-fram-seo fade-in-left">
        <div className="seo-animation">
          <img
            src={seoLinking}
            alt="Link Building"
            className="custom-image"
          />
        </div>
        <div style={{ width: "100%" }}>
          <h1 className="seo-subheader">Link Building</h1>
          <p className="seo-p">
          Quality-link building is a method that improves a site’s authority and credibility. At Softmark Solutions, we focus on building high-quality backlinks that can drive more traffic to your site. Our approach is ethical and strategic which will make sure that your site gains valuable links that contribute to long-term success.
          </p>
        </div>
      </div>

      <div className="horizontal-fram-seo fade-in-right">
        <div style={{ width: "100%" }}>
          <h1 className="seo-subheader">Content Marketing</h1>
          <p className="seo-p">
          We all know that content is king when it comes to SEO. Our content marketing services will create valuable and engaging articles/blog posts and infographics that resonate with your target audience. We'll work with you to develop a content strategy that aligns with your brand and SEO goals.
          </p>
        </div>
        <div className="seo-animation">
          <img
          src={contentlImage}
            alt="Content Marketing"
            className="responsive-image"
          />
        </div>
      </div>

      <h1>Are you ready to take your SEO to the next level?</h1>
      <p className="seo-p custom-text">
      Softmark Solutions is here to help all businesses, either large or small. Our professional and expert team will handle all your SEO needs.
      </p>
      <p className="seo-p custom-text">
      You can contact us today or request a proposal that is tailored to your specific needs. Let us help you grow your online presence and achieve the success you deserve!

      </p>
      <button className="button-secondary" onClick={() => navigate('/contactUs')}>Request a Proposal Today!
      </button>

      {/* <PlansSeo plans={SeoPlans} /> */}
    </div>
  );
};

export default Seo;
