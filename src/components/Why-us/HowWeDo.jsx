import React from "react";
import "../../css/Whyus/HowWeDo.css";
import "../../css/Whyus/Btn.scss";


const HowWeDo = () => {
  return (
    <div className="howWeDo container">
      <div className="HowWeDoPara">
        <h1>How we do it</h1>
        <span>
          Through strategic deployment and ongoing support of technology, we
          position ourselves as your virtual Chief Information Officer (CIO),
          guiding your digital journey with expertise and foresight.<br/><br/> Our
          commitment to stability and long-term vision extends to our scalable
          services and solutions, designed to grow alongside your business. By
          integrating technology and business acumen with attentive
          communication, we cultivate enduring, trusted partnerships. <br/><br/>With a
          singular focus on empowering our clients, we unlock their potential
          through the transformative force of technology. Welcome to a journey
          of innovation and growth, led by Softmark Solutions.
        </span>
        <div class="button-effect">
    <a class="effect effect-1" href="#" title="Learn More">Explore Our Services</a>
  </div>
      </div>
      <div className="HowWeDoImg">
        <img src="https://img.freepik.com/premium-photo/programmer-coding-software-development-working-project-it_1423-2975.jpg?w=900" alt="" />
      </div>
    </div>
        
  );
};

export default HowWeDo;


