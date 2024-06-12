import React from "react";
import "../css/seo.css"
import PlansSeo from "./PlansSeo";
import { SeoPlans } from '../components/PlansData'

const Seo = () => {
  return (
    <div className="seo container">
      <h1 className="seo-h">SoftMark Solutions - Your Partner in SEO Success</h1>
      <p className="seo-p">
        At Softmark Solutions, we understand the importance of maximizing your
        online visibility and driving organic traffic to your website. With our
        comprehensive SEO services, we're here to help you achieve higher search
        engine rankings, attract more qualified leads, and grow your business
        online.
      </p>
      <img className="seo-img" src="https://img.freepik.com/premium-vector/hacker-concept-stealing-digital-data-from-computer-thief-attack-device-system-hacking-internet-illustration-cartoon-style_277904-4385.jpg?w=826" alt="seo" />
      <PlansSeo plans={SeoPlans} />
    </div>
  );
};

export default Seo;
