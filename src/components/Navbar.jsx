import React, { useState } from "react";
import "../css/navbar.css";
import Logo from "../assets/images/Logo-no-bg.png";
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
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const Contact = () => {
    // const isHomePage = location.pathname === "/";
    // if (isHomePage) {
    //   const contactForm = document.getElementById("form");
    //   if (contactForm) {
    //     contactForm.scrollIntoView({ behavior: "smooth" });
    //   }
    // } else {
      navigate("/calendly");
    // }
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

  const CustomMenu = styled(Menu)`
    .MuiList-root {
      display: flex;
      flex-direction: column;
    }
    .MuiPaper-root {
      background-color: #ffffffbd;
      border: 1px solid #e0e0e0;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
      padding: 8px;
      border-radius: 8px;
      min-width: 120px;
    }
  `;

  const CustomMenuItem = styled(MenuItem)`
    color: #333;
    padding: 12px 20px;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    transition: background-color 0.3s, color 0.3s;
    border-left: 2px solid #f3972bc7;

    width: 100px;

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
          <span
            className={`nav-btn ${hoveredItem === 1 ? "active" : ""}`}
            onClick={Services}
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
            onClick={() => navigate("/Ourservices")}
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
      <CustomMenu
        id="fade-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
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
          <CustomMenuItem onClick={() => handleMenuItemClick("/aboutUs")}>
            About Us
          </CustomMenuItem>
        </CustomButtonBase>
        <CustomButtonBase>
          <CustomMenuItem onClick={() => handleMenuItemClick("/whyUs")}>
            Why Us
          </CustomMenuItem>
        </CustomButtonBase>
      </CustomMenu>
      <div className={`navbar-line ${hoveredItem !== null ? "active" : ""}`} />
    </div>
  );
};

export default Navbar;
