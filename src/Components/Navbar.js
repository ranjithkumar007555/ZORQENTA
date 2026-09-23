import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Components/images/logo192.png"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <Link to="/" className="brand">
          <div className="brand-icon">
            <img className="brand-logo"
            src={logo}
            alt="" 
             />
          </div>
          <span>ZORQENTA</span>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          {/* <Link to="/contact">Contact</Link> */}
        </div>

        {/* <Link to="/contact" className="nav-button">
          Get Started
        </Link> */}

      </div>
    </nav>
  );
}

export default Navbar;