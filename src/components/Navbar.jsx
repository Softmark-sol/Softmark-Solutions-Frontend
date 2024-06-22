import React, { useState } from "react";
import "../css/navbar.css";
import Logo from "../assets/images/Logo-no-bg.png";
import LeftDrawer from "./LeftDrawer";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { useLocation, useNavigate } from "react-router-dom";
import MyLottieAnimation from "./CallAnimation";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const Contact = () => {
    const isHomePage = location.pathname === "/";
    if (isHomePage) {
      const contactForm = document.getElementById("form");
      console.log(contactForm);

      if (contactForm) {
        contactForm.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/contactUs");
    }
  };

  const Services = () => {
    const isHomePage = location.pathname === "/";
    if (isHomePage) {
      const servicesSection = document.getElementById("services");
      console.log(servicesSection);

      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error("Services section not found");
      }
    } else {
      navigate("/services");
    }
  };

  const handleMenuItemClick = (destination) => {
    handleClose();
    navigate(destination);
  };

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="navbar custom-navbar">
      <div className="container">
        <div className="navbar-logo">
          <img
            src={Logo}
            alt="Softmark Solutions Logo"
            className="logo"
            onClick={() => navigate("/")}
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
          <span
            className={`nav-btn ${hoveredItem === 1 ? "active" : ""}`}
            onClick={() => Services()}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            Services
          </span>
          <span
            className={`nav-btn ${hoveredItem === 2 ? "active" : ""}`}
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            About Us
          </span>
          <span
            className={`nav-btn ${hoveredItem === 3 ? "active" : ""}`}
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={() => {
              navigate("/Ourservices");
            }}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            Our Work
          </span>
          <a
            href="https://www.linkedin.com/company/softmark-solutions-llc"
            target="_blank"
            style={{ textDecoration: "none" }}
            rel="noreferrer"
            className={`nav-btn ${hoveredItem === 4 ? "active" : ""}`}
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
          >
            Careers
          </a>
          <span className="nav-btn contact-us" onClick={() => Contact()}>
            <div className="myLottieAnimation">
              <MyLottieAnimation />
            </div>
            Contact Us
          </span>
        </div>
        <div className="navbar-menu">
          <LeftDrawer />
        </div>
      </div>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem
          onClick={() => {
            handleMenuItemClick("/aboutUs");
          }}
        >
          About Us
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleMenuItemClick("/whyUs");
          }}
        >
          Why Us
        </MenuItem>
      </Menu>
      <div className={`navbar-line ${hoveredItem !== null ? "active" : ""}`} />
    </div>
  );
};

export default Navbar;
