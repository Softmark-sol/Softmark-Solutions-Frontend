import React from "react";
import "../css/seo.css";
import PlansSeo from "./PlansSeo";
import { SeoPlans } from "../components/PlansData";
import SeoLottieAnimation from "../components/SeoAnimation";
import Typewriter from "../components/TypeWriter.jsx";

const Seo = () => {
  return (
    <div className="seo container">
      <h1 className="seo-h">
        SoftMark Solutions -{" "}
        <Typewriter strings={["Your Partner in SEO Success"]} />
      </h1>
      <div className="horizontal-fram-seo">
      <div style={{width:'100%'}}>
      <p className="seo-p">
        At Softmark Solutions, we understand the importance of maximizing your
        online visibility and driving organic traffic to your website. With our
        comprehensive SEO services, we're here to help you achieve higher search
        engine rankings, attract more qualified leads, and grow your business
        online.
      </p>
      </div>
      <div className="seo-animation">
        <SeoLottieAnimation />
      </div>
      </div>
      
      <PlansSeo plans={SeoPlans} />
    </div>
  );
};

export default Seo;
