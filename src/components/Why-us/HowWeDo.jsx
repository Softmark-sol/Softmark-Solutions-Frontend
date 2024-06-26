import React, { useEffect } from "react";
import "../../css/Whyus/HowWeDo.css";
import "../../css/Whyus/Btn.scss";
import { Link, useNavigate } from "react-router-dom";
import ScrollReveal from "scrollreveal";

const HowWeDo = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "20px",
      duration: 500,
      delay: 200,
      reset: true,
    });

    sr.reveal(".head, .sp , .sp1 ,.sp2,.sp3", {
      interval: 200,
    });
  }, []);

  return (
    <div className="howWeDo container">
      <div className="HowWeDoPara">
        <h1 className="head">How we do it</h1>
        <span className="sp1">
          Through strategic deployment and ongoing support of technology, we
          position ourselves as your virtual Chief Information Officer (CIO),
          guiding your digital journey with expertise and foresight.
        </span>
        <br />

        <span className="sp2">
          Our commitment to stability and long-term vision extends to our
          scalable services and solutions, designed to grow alongside your
          business. By integrating technology and business acumen with attentive
          communication, we cultivate enduring, trusted partnerships.
        </span>
        <br />

        <span className="sp3">
          With a singular focus on empowering our clients, we unlock their
          potential through the transformative force of technology. Welcome to a
          journey of innovation and growth, led by Softmark Solutions.
        </span>
        <div class="button-effect" onClick={() => navigate("/services")}>
          <Link class="effect effect-1" title="Learn More">
            Explore Our Services
          </Link>
        </div>
      </div>
      <div className="HowWeDoImg">
        <img
          src="https://img.freepik.com/premium-vector/teamwork-solving-complex-problems-combining-different-talents-achieve-common-goal_566886-2894.jpg?w=826"
          alt="how we do it"
        />
      </div>
    </div>
  );
};

export default HowWeDo;
