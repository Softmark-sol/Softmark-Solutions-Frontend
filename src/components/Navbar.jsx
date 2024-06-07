import React from 'react';
import "../css/navbar.css";
import Logo from "../assets/images/Logo-no-bg.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftDrawer from './LeftDrawer'; 

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-logo">
          <img src={Logo} alt="Softmark Solutions Logo" className="logo" />
        </div>
        <div className="navbar-btns">
          <span className="nav-btn">Home</span>
          <span className="nav-btn">Services</span>
          <span className="nav-btn">About Us</span>
          {/* <span className="nav-btn">Company</span> */}
          <a href="https://www.linkedin.com/company/softmark-solutions-llc" style={{ textDecoration: "none" }}  rel="noreferrer" className="nav-btn">Careers</a>
          <span className="nav-btn contact-us">Contact Us</span>
        </div>
        <div className="navbar-menu">
          <LeftDrawer />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
