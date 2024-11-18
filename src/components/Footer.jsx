import React from "react";
import "../css/footer.css";
import { useNavigate } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import Logo from "../assets/images/Logo-no-bg.webp";




// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import locationImage from "../assets/map.png";

// gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => (
  <div className="transparent-contact-form">
    <h4 style={{textAlign:'left'}}>CONTACT US</h4>
    <form className="form-transparent">
      <input type="text" placeholder="Enter your name" required />
      <input type="email" placeholder="Enter your email" required />
      <input type="url" placeholder="Enter your website URL" />
      <textarea placeholder="Enter your message" rows="4" required></textarea>
      <button type="submit" className="submit-transparent-button">
        Submit
      </button>
    </form>
  </div>
);


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
      {/* <div className="softmark">
        SoftMark <span>Solutions</span>
      </div> */}
      
      <div className="footer-bottom">
      <div className="footer-intro" style={{ textAlign: 'center', marginBottom: '20px',width:"20%" }}>
  <img src={Logo} alt="softmark solutions Logo" style={{ width: '100%', marginBottom: '10px' }} />
  <p style={{ maxWidth: '500px', margin: '0 auto', color: '#fff',textAlign:'justify' }}>
  At Softmark Solutions, we don't just build websites and applications; we craft digital experiences that leave a lasting impression. Our journey began with a simple idea – to revolutionize the digital landscape and empower businesses to thrive in an ever-changing world.
  </p>
  <div className="footer-social" style={{ display: 'flex', justifyContent: 'center', marginTop:'10px'}}>
    <a href="https://www.linkedin.com/company/softmark-solutions-llc/" aria-label="LinkedIn">
      <FaLinkedinIn />
    </a>
    <a href="https://www.facebook.com/SoftMarkSolutionsLLC" aria-label="Facebook">
      <FaFacebookF />
    </a>
    <a href="https://x.com/SoftMark_sol" aria-label="Twitter">
      <BsTwitterX />
    </a>
    <a href="https://www.instagram.com/softmark_sol/" aria-label="Instagram">
      <FaInstagram />
    </a>
  </div>
</div>

        <div className="quick-sec">
          <h4>QUICK LINKS</h4>
          <div className="footer-left">
            <ul>
              <li>
                <button onClick={() => navigate("/")}>Home</button>
              </li>
              <li>
                <button onClick={() => navigate("/Ourservices")}>
                  Our Portfolio
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

        {/* <div className="footer-center-container">
          <h4>Services</h4>
          <div className="footer-center">
            <ul className="service-list">
              <li>
                <button onClick={() => navigate("/webPlans")}>Web App Development</button>
              </li>
              <li>
                <button onClick={() => navigate("/appPlans")}>Mobile App Development</button>
              </li>
              <li>
                <button onClick={() => navigate("/seo")}>Search Engine Optimization</button>
              </li>
              <li>
                <button onClick={() => navigate("/digitalMarketing")}>Digital Marketing</button>
              </li>
            </ul>
           
          </div>

        </div>
        <div className="footer-center-container">
          <div className="footer-center">
          <ul className="service-list">
              <li>
                <button onClick={() => navigate("/logoPlans")}>Logo Designing</button>
              </li>
              <li>
                <button onClick={() => navigate("/ItOutsourcing")}>IT Outsourcing</button>
              </li>
              <li>
                <button onClick={() => navigate("/customSoftware")}>Custom Software</button>
              </li>
              <li>
                <button onClick={() => navigate("/animeArt")}>Anime Art</button>
              </li>
            </ul>
           
          </div>

        </div> */}
        
        <div className="contact-form-footer"><ContactForm/></div>



        <div className="footer-right" style={{ cursor: "default",  }}>
  <div className="footer-contact">
    <h4 className="findUs">FIND US</h4>
    <p>
      <i className="fa fa-home" aria-hidden="true"></i> 30 N Gould St R, Sheridan, WY 82801
    </p>
    <p>
      <a href="mailto:admin@softmarksolutions.com" style={{ textDecoration: 'none', color: 'inherit' }}>
        <i className="fa fa-envelope" aria-hidden="true"></i> admin@softmarksolutions.com
      </a>
    </p>
    <p>
      <a href="tel:+16465356323" style={{ color: 'inherit', textDecoration: 'none' }}>
        <i className="fa fa-phone" aria-hidden="true"></i> +1 (646) 535-6323
      </a>
    </p>
  </div> 
  <div className="map-container" style={{ marginTop: '10px' }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.8397268020935!2d-106.98042352461212!3d44.797192876374135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x534fc3388c0ae89b%3A0xd51d9ae97d2b88c4!2s30%20N%20Gould%20St%2C%20Sheridan%2C%20WY%2082801%2C%20USA!5e0!3m2!1sen!2s!4v1699912996795!5m2!1sen!2s"
      width="100%"
      height="200"
      style={{ border: "none" }}
      allowFullScreen="yes"
      loading="lazy"
      title="Google Maps Location"
    ></iframe>
  </div>
</div>


      </div>
      <div style={{textAlign:'center',paddingTop:'50px'}}>© 2024 Copyright:
      Softmark Solutions.</div>

    </footer>
  );
};

export default Footer;
