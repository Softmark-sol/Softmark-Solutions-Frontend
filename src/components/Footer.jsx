import React from "react";
import "../css/footer.css";
import { useNavigate } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";




// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import locationImage from "../assets/map.png";

// gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const navigate = useNavigate();
  // const softmarkRef = useRef(null);

  // useEffect(() => {
  //   gsap.fromTo(
  //     softmarkRef.current,
  //     { y: -200, opacity: 1 },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       duration: 2,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: softmarkRef.current,
  //         start: "top bottom",
  //         end: "top end",
  //         scrub: 1,
  //         markers: true,
  //       },
  //     }
  //   );
  // }, []);

  return (
    <footer className="footer">
      <div className="softmark">
        SoftMark <span>Solutions</span>
      </div>
      <div className="footer-bottom">
        <div>
          <h4>Quick Links</h4>
          <div className="footer-left">
            <ul>
              <li>
                <button onClick={() => navigate("/")}>Home</button>
              </li>
              <li>
                <button onClick={() => navigate("/Ourservices")}>
                  Our Work
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/aboutUs")}>About Us</button>
              </li>
              <li>
                <button onClick={() => navigate("/whyUs")}>Why Us</button>
              </li>
              <a
                href="https://www.linkedin.com/company/softmark-solutions-llc"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <li>
                  <button>Careers</button>
                </li>
              </a>
              <li>
                <button onClick={() => navigate("/contactUs")}>
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-center-container">
          <h4 className="">Services</h4>
          <div className="footer-center">
            <ul>
              <li>
                <button onClick={() => navigate("/webPlans")}>
                  Web App Development
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/appPlans")}>
                  Mobile App Development
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/seo")}>
                  Search Engine Optimization
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/digitalMarketing")}>
                  Digital Marketing
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/logoPlans")}>
                  Logo Designing
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-right"  style={{  cursor:"default"}}>
          <div className="footer-contact">
            <img src={locationImage} alt="" />
            <p>30 N Gould St R Sheridan WY 82801</p>
          </div>
          {/* <div className="footer-contact">
            <p>Pakistan Office</p>
            <p>705, Noor Trade Tower, Gulshan e Iqbal 13 A</p>
            <p>Karachi</p>
          </div> */}
        </div>
      </div>
      <div className="footer-social">
        <a href="https://www.linkedin.com/company/softmark-solutions-llc/" >
          <FaLinkedinIn />
        </a>
        <a href="https://www.facebook.com/SoftMarkSolutionsLLC">
          <FaFacebookF />
        </a>
        <a href="https://x.com/SoftMark_sol">
        <BsTwitterX />
        </a>
        <a href="https://www.instagram.com/softmark_sol/">
          <FaInstagram />
        </a>
        <a href="mailto:admin@softmarksolutions.com" style={{marginTop:"7px",}}>
          <p>admin@softmarksolutions.com</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
