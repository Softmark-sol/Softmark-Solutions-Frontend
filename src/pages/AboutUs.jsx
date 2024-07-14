import React, { useRef } from "react";
import "../css/aboutUs.css";
import "../css/Whyus/Btn.scss";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import ScrollToTopButton from "../components/ScrollUpButton";
import Typewriter from "../components/TypeWriter.jsx";
import ABMLottieAnimation from "../components/Aboutus-mission-animation.jsx";
import ABPLottieAnimation from "../components/Aboutus-passion-animation.jsx";
import ABJLottieAnimation from "../components/Aboutus-joinus-animation.jsx";

const AboutUs = () => {
  const navigate = useNavigate();

  const springAnimation = {
    type: "spring",
    stiffness: 95,
    damping: 10,
    delay: 0.05,
  };

  const refMission = useRef(null);
  const inViewMission = useInView(refMission, { once: true });

  const refInnovation = useRef(null);
  const inViewInnovation = useInView(refInnovation, { once: true });

  const refJourney = useRef(null);
  const inViewJourney = useInView(refJourney, { once: true });

  return (
    <div className="about-us container">
      <section className="about">
        <div className="about-header">
          <h2>
            <Typewriter strings={["Where technology Meets Marketing"]} />
          </h2>
          <p>
            At Softmark Solutions, we don&#39;t just build websites and
            applications; we craft digital experiences that leave a lasting
            impression. Our journey began with a simple idea – to revolutionize
            the digital landscape and empower businesses to thrive in an
            ever-changing world.
          </p>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <motion.div
              className="timeline-img"
              ref={refMission}
              initial={{ x: -100, opacity: 0 }}
              animate={inViewMission ? { x: 0, opacity: 1 } : {}}
              transition={springAnimation}
            >
              <div className="ABM-animation">
                <ABMLottieAnimation />
              </div>
            </motion.div>
            <motion.div
              className="timeline-content"
              ref={refMission}
              initial={{ x: 100, opacity: 0 }}
              animate={inViewMission ? { x: 0, opacity: 1 } : {}}
              transition={springAnimation}
            >
              <h3>Mission</h3>
              <p>
                At Softmark Solutions, our mission is simple yet profound: to
                empower businesses with innovative digital solutions that drive
                success. We believe in leveraging cutting-edge technology and
                creative thinking to create meaningful digital experiences that
                inspire, engage, and deliver results. With a relentless
                commitment to excellence and a passion for innovation, we strive
                to be the catalyst for our clients&#39; growth and success in
                the ever-evolving digital landscape.
              </p>
            </motion.div>
          </div>
          <div className="timeline-item ideas">
            <motion.div
              className="timeline-img"
              ref={refInnovation}
              initial={{ x: -100, opacity: 0 }}
              animate={inViewInnovation ? { x: 0, opacity: 1 } : {}}
              transition={springAnimation}
            >
              <div className="ABP-animation">
                <ABPLottieAnimation />
              </div>
            </motion.div>
            <motion.div
              className="timeline-content"
              ref={refInnovation}
              initial={{ x: 100, opacity: 0 }}
              animate={inViewInnovation ? { x: 0, opacity: 1 } : {}}
              transition={springAnimation}
            >
              <h3>Our Passion for Innovation</h3>
              <p>
                From the moment you step into our world, you&#39;ll feel the
                energy and enthusiasm that drive us forward. We&#39;re not just
                a team of developers and marketers; we&#39;re dreamers,
                creators, and innovators on a mission to redefine what&#39;s
                possible in the digital realm.
              </p>
            </motion.div>
          </div>
          <div className="timeline-item journey">
            <motion.div
              className="timeline-img"
              ref={refJourney}
              initial={{ x: -100, opacity: 0 }}
              animate={inViewJourney ? { x: 0, opacity: 1 } : {}}
              transition={springAnimation}
            >
              <div className="ABJ-animation">
                <ABJLottieAnimation />
              </div>
            </motion.div>
            <motion.div
              className="timeline-content joinus"
              ref={refJourney}
              initial={{ x: 100, opacity: 0 }}
              animate={inViewJourney ? { x: 0, opacity: 1 } : {}}
              transition={springAnimation}
            >
              <h3>Join Us on the Journey</h3>
              <p>
                Whether you&#39;re a seasoned entrepreneur or just starting out
                on your digital journey, we invite you to join us on this
                adventure. Together, we&#39;ll explore new horizons, break down
                barriers, and unlock the full potential of your business in the
                digital age.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="why-us">
        <h2>Why Us</h2>
        <p>
          At Softmark Solutions, we pride ourselves on being more than just a
          service provider; we&#39;re your strategic partner in navigating the
          digital world. With a team of skilled professionals who are passionate
          about innovation and dedicated to excellence, we offer tailored
          solutions that not only meet but exceed your expectations. From our
          commitment to delivering measurable results to our collaborative
          approach that puts your needs first, choosing Softmark Solutions means
          choosing a trusted ally on your journey to digital success.
        </p>
        <div
          className="button-effect"
          style={{ paddingTop: "20px" }}
          onClick={() => navigate("/whyUs")}
        >
          <a className="effect effect-1" href="#whyus" title="Learn More">
            Why Us
          </a>
        </div>
      </section>
      <ScrollToTopButton />
    </div>
  );
};

export default AboutUs;
