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
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
  const [aboutAnchorEl, setAboutAnchorEl] = useState(null);
  const servicesOpen = Boolean(servicesAnchorEl);
  const aboutOpen = Boolean(aboutAnchorEl);
  const handleMouseEnter = (event, setAnchor) => {
    setAnchor(event.currentTarget);
  };
  const handleMouseLeave = (setAnchor) => {
    setAnchor(null);
  };
  const navigateAndClose = (destination, closeMenu) => {
    closeMenu();
    navigate(destination);
  };
  const CustomMenu = styled(Menu)`
    .MuiPaper-root {
      background-color: white;
      border: 1px solid #E0E0E0;
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
            className="nav-btn"
            onClick={() => navigate("/")}
          >
            Home
          </span>
          <span
            className="nav-btn"
            aria-controls={servicesOpen ? "services-menu" : undefined}
            aria-haspopup="true"
            onMouseEnter={(e) => handleMouseEnter(e, setServicesAnchorEl)}
          >
            Services
          </span>
          <CustomMenu
            id="services-menu"
            anchorEl={servicesAnchorEl}
            open={servicesOpen}
            onClose={() => handleMouseLeave(setServicesAnchorEl)}
            TransitionComponent={Fade}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            MenuListProps={{
              onMouseEnter: () => handleMouseEnter,
              onMouseLeave: () => handleMouseLeave(setServicesAnchorEl),
            }}
            onMouseLeave={() => handleMouseLeave(setServicesAnchorEl)}
          >
            <CustomMenuItem onClick={() => navigateAndClose("/webPlans", () => setServicesAnchorEl(null))}>
              Web Development
            </CustomMenuItem>
            <CustomMenuItem onClick={() => navigateAndClose("/appPlans", () => setServicesAnchorEl(null))}>
              App Development
            </CustomMenuItem>
            <CustomMenuItem onClick={() => navigateAndClose("/logoPlans", () => setServicesAnchorEl(null))}>
              Logo
            </CustomMenuItem>
            <CustomMenuItem onClick={() => navigateAndClose("/digitalMarketing", () => setServicesAnchorEl(null))}>
              Digital Marketing
            </CustomMenuItem>
            <CustomMenuItem onClick={() => navigateAndClose("/seo", () => setServicesAnchorEl(null))}>
              SEO
            </CustomMenuItem>
            <CustomMenuItem onClick={() => navigateAndClose("/ItOutsourcing", () => setServicesAnchorEl(null))}>
              IT Outsourcing
            </CustomMenuItem>
            <CustomMenuItem onClick={() => navigateAndClose("/customSoftware", () => setServicesAnchorEl(null))}>
              Custom Software
            </CustomMenuItem>
            <CustomMenuItem onClick={() => navigateAndClose("/animeArt", () => setServicesAnchorEl(null))}>
              Anime Art
            </CustomMenuItem>
          </CustomMenu>
          {/* About Us Dropdown */}
          <span
            className="nav-btn"
            aria-controls={aboutOpen ? "about-menu" : undefined}
            aria-haspopup="true"
            onMouseEnter={(e) => handleMouseEnter(e, setAboutAnchorEl)}
          >
            About Us
          </span>
          <CustomMenu
            id="about-menu"
            anchorEl={aboutAnchorEl}
            open={aboutOpen}
            onClose={() => handleMouseLeave(setAboutAnchorEl)}
            TransitionComponent={Fade}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            MenuListProps={{
              onMouseEnter: () => handleMouseEnter,
              onMouseLeave: () => handleMouseLeave(setAboutAnchorEl),
            }}
            onMouseLeave={() => handleMouseLeave(setAboutAnchorEl)}
          >
            <CustomMenuItem onClick={() => navigateAndClose("/aboutUs", () => setAboutAnchorEl(null))}>
              About Us
            </CustomMenuItem>
            <CustomMenuItem onClick={() => navigateAndClose("/whyUs", () => setAboutAnchorEl(null))}>
              Why Us
            </CustomMenuItem>
          </CustomMenu>
          <span className="nav-btn" onClick={() => navigate("/Ourservices")}>
            Our Portfolio
          </span>
          <a
            href="https://www.linkedin.com/company/softmark-solutions-llc"
            target="_blank"
            rel="noreferrer"
            className="nav-btn"
          >
            Careers
          </a>
          <span className="nav-btn contact-us" onClick={() => navigate("/calendly")}>
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
    </div>
  );
};
export default Navbar;