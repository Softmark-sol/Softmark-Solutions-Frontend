import React, { useState } from "react";
import "../css/navbar.css";
import Logo from "../assets/images/Logo-no-bg.png";
import LeftDrawer from "./LeftDrawer";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { useLocation, useNavigate } from "react-router-dom";

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

  const handleMenuItemClick = (destination) => {
    const isHomePage = location.pathname === "/";
    if (isHomePage) {
      const contactForm = document.getElementById("form");
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/contactUs");
    }
    handleClose();
    navigate(destination);
  };

  return (
    <div className="navbar">
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
          <span className="nav-btn" onClick={() => navigate("/")}>
            Home
          </span>
          <span className="nav-btn" onClick={() => navigate("/plans")}>
            Services
          </span>
          <span
            className="nav-btn"
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            About Us
          </span>
          <a
            href="/contactUs"
            style={{ textDecoration: "none" }}
            rel="noreferrer"
            className="nav-btn"
          >
            Careers
          </a>
          <span
            className="nav-btn contact-us"
            onClick={() => navigate("/contactUs")}
          >
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
        <MenuItem onClick={() => handleMenuItemClick("/aboutUs")}>
          About Us
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick("/whyUs")}>
          Why Us
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
