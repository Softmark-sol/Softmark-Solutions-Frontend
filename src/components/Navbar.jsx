import React, {useState} from "react";
import "../css/navbar.css";
import Logo from "../assets/images/Logo-no-bg.png";
import "bootstrap/dist/css/bootstrap.min.css";
import LeftDrawer from "./LeftDrawer";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const AboutUs = ()=>{
    navigate("/aboutUs")
  }

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-logo">
          <img src={Logo} alt="Softmark Solutions Logo" className="logo" />
        </div>
        <div className="navbar-btns">
          <span className="nav-btn">Home</span>
          <span className="nav-btn">Services</span>
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
          {/* <span className="nav-btn">Company</span> */}
          <a
            href="https://www.linkedin.com/company/softmark-solutions-llc"
            style={{ textDecoration: "none" }}
            rel="noreferrer"
            className="nav-btn"
          >
            Careers
          </a>
          <span className="nav-btn contact-us">Contact Us</span>
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
        <MenuItem onClick={()=>AboutUs()}>About Us</MenuItem>
        <MenuItem>Why Us</MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
