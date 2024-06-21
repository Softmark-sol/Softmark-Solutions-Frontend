import React from "react";
import "../css/footer.css";
import { useNavigate } from "react-router-dom";
import locationImage from "../assets/map.png";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-bottom">
        <div>
          <h4>Quick Links</h4>
          <div className="footer-left">
            <ul>
              <li>
                <button onClick={() => navigate("/")}>Home</button>
              </li>
              <li>
                <button onClick={() => navigate("/Ourservices")}>Work</button>
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

        <div className="footer-right">
          <div className="footer-contact">
            <img src={locationImage} alt="" />
            <p>United States Office</p>
            <p>307, Wyoming</p>
          </div>
          <div className="footer-contact">
            <p>Pakistan Office</p>
            <p>705, Noor Trade Tower, Gulshan e Iqbal 13 A</p>
            <p>Karachi</p>
          </div>
        </div>
      </div>
      <div className="footer-social">
        <a href="https://www.linkedin.com/company/softmark-solutions-llc/">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.facebook.com/SoftMarkSolutionsLLC">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://x.com/SoftMark_sol">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="mailto:admin@softmarksolutions.com">
          <p>admin@softmarksolutions.com</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
