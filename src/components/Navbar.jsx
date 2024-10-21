import React, { useState } from "react";
import "../css/navbar.css";
import Logo from "../assets/images/Logo-no-bg.webp";
import LeftDrawer from "./LeftDrawer";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ButtonBase from "@mui/material/ButtonBase";
import styled from "@emotion/styled";
import Fade from "@mui/material/Fade";
import { useLocation, useNavigate } from "react-router-dom";
import MyLottieAnimation from "./CallAnimation";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Separate states for Services and About Us menus
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
  const [aboutAnchorEl, setAboutAnchorEl] = useState(null);

  const servicesOpen = Boolean(servicesAnchorEl);
  const aboutOpen = Boolean(aboutAnchorEl);

  const handleServicesClick = (event) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleAboutClick = (event) => {
    setAboutAnchorEl(event.currentTarget);
  };

  const handleCloseServices = () => {
    setServicesAnchorEl(null);
  };

  const handleCloseAbout = () => {
    setAboutAnchorEl(null);
  };

  const Contact = () => {
    navigate("/calendly");
  };

  const Services = () => {
    const isHomePage = location.pathname === "/";
    if (isHomePage) {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/services");
    }
  };

  const handleMenuItemClick = (destination, closeMenu) => {
    closeMenu();
    navigate(destination);
  };

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };


  const CustomServiceMenu = styled(Menu)`
    .MuiList-root {
      display: flex;
      flex-direction: column;
    }
    .MuiPaper-root {
      background-color: white;
      border: 1px solid #e0e0e0;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
      padding: 10px;
      border-radius: 8px;
      min-width: 180px;
    }
  `;

  const CustomMenu = styled(Menu)`
    .MuiList-root {
      display: flex;
      flex-direction: column;
    }
    .MuiPaper-root {
      background-color: white;
      border: 1px solid #e0e0e0;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
      padding: 10px;
      border-radius: 8px;
      min-width: 180px;
    }
  `;

  const CustomMenuItem = styled(MenuItem)`
    color: #333;
    padding: 12px 20px;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    transition: background-color 0.3s, color 0.3s;
    border-left: 2px solid #f3972bc7;
    width: 100%;

    &:hover {
      background-color: #f3972bc7;
      color: #fff;
    }
  `;

  const CustomButtonBase = styled(ButtonBase)`
    .MuiTouchRipple-root {
      color: rgba(0, 0, 0, 0.3);
    }
    .MuiTouchRipple-rippleVisible {
      opacity: 0.7;
    }
    .MuiTouchRipple-child {
      background-color: #4599b4; /* Custom ripple color */
    }
  `;

  return (
    <div className="navbar custom-navbar">
      <div className="container">
        <div className="navbar-logo">
          <img
            src={Logo}
            alt="Softmark Solutions Logo"
            className="logo"
            onClick={() => navigate("/")}
            loading="lazy"
          />
        </div>
        <div className="navbar-btns">
          <span
            className={`nav-btn ${hoveredItem === 0 ? "active" : ""}`}
            onClick={() => navigate("/")}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            Home
          </span>

          {/* Services Dropdown */}
          <span
            className={`nav-btn ${hoveredItem === 1 ? "active" : ""}`}
            aria-controls={servicesOpen ? "services-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={servicesOpen ? "true" : undefined}
            onClick={handleServicesClick}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            Services
          </span>
          <CustomMenu
            id="services-menu"
            anchorEl={servicesAnchorEl}
            open={servicesOpen}
            onClose={handleCloseServices}
            TransitionComponent={Fade}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
              <CustomMenuItem
                onClick={() =>
                  handleMenuItemClick("/webPlans", handleCloseServices)
                }
              >
                Web Development
              </CustomMenuItem>
              <CustomMenuItem
                onClick={() => handleMenuItemClick("/appPlans", handleCloseServices)}
              >
                App Development
              </CustomMenuItem>

              <CustomMenuItem
                onClick={() => handleMenuItemClick("/logoPlans", handleCloseServices)}
              >
                Logo
              </CustomMenuItem>

              <CustomMenuItem
                onClick={() => handleMenuItemClick("/digitalMarketing", handleCloseServices)}
              >
                Digital Marketing
              </CustomMenuItem>

            
              <CustomMenuItem
                onClick={() => handleMenuItemClick("/seo", handleCloseServices)}
              >
                SEO
              </CustomMenuItem>

              <CustomMenuItem
                onClick={() => handleMenuItemClick("/ItOutsourcing", handleCloseServices)}
              >
                IT Outsourcing
              </CustomMenuItem>

              <CustomMenuItem
                onClick={() => handleMenuItemClick("/customSoftware", handleCloseServices)}
              >
                Custom Software
              </CustomMenuItem>

              <CustomMenuItem
                onClick={() => handleMenuItemClick("/animeArt", handleCloseServices)}
              >
                Anime Art
              </CustomMenuItem>
          </CustomMenu>

          {/* About Us Dropdown */}
          <span
            className={`nav-btn ${hoveredItem === 2 ? "active" : ""}`}
            aria-controls={aboutOpen ? "about-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={aboutOpen ? "true" : undefined}
            onClick={handleAboutClick}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            About Us
          </span>
          <CustomMenu
            id="about-menu"
            anchorEl={aboutAnchorEl}
            open={aboutOpen}
            onClose={handleCloseAbout}
            TransitionComponent={Fade}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <CustomButtonBase>
              <CustomMenuItem
                onClick={() =>
                  handleMenuItemClick("/aboutUs", handleCloseAbout)
                }
              >
                About Us
              </CustomMenuItem>
            </CustomButtonBase>
            <CustomButtonBase>
              <CustomMenuItem
                onClick={() => handleMenuItemClick("/whyUs", handleCloseAbout)}
              >
                Why Us
              </CustomMenuItem>
            </CustomButtonBase>
          </CustomMenu>

          <span
            className={`nav-btn ${hoveredItem === 3 ? "active" : ""}`}
            onClick={() => navigate("/Ourservices")}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            Our Portfolio
          </span>

          <a
            href="https://www.linkedin.com/company/softmark-solutions-llc"
            target="_blank"
            rel="noreferrer"
            className={`nav-btn ${hoveredItem === 4 ? "active" : ""}`}
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
          >
            Careers
          </a>

          <span className="nav-btn contact-us" onClick={Contact}>
            <div className="myLottieAnimation">
              <MyLottieAnimation />
            </div>
            Schedule a <strong>&nbsp; Free &nbsp;</strong> Call
          </span>
        </div>
        <div className="navbar-menu">
          <LeftDrawer />
        </div>
      </div>
      <div className={`navbar-line ${hoveredItem !== null ? "active" : ""}`} />
    </div>
  );
};

export default Navbar;
