import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {

  return (
    <footer className="footer">

      <div className="footer-container">

        <div>

          <Link to="/" className="footer-brand">
            ZORQENTA
          </Link>

           <p>* IT Training & Skill Development</p> 
           <p>* Software Development & IT Solutions</p>
           <p>* Placement Assistance & Career Guidance</p>
           <p>* Professional Business Support</p>

          <h3>ZORQENTA Technology — Your Technology Partner for a Digital Future.</h3>

          <p>Contact : 6379694724 </p>
          <p>Address : Sundara Vinayagar Kovil Street, Mahalakshmi theatre opposite, Kallakurichi -606 201</p>

          <h4>We provide training and career opportunities aligned with the requirements of leading IT companies such as</h4>
          <p>TCS | Infosys | Wipro | Accenture | Cognizant</p>

          <h4>IT Consultancy & Digital Solutions</h4>
          <p>Services: Software Development | Web Development | Mobile Apps | IT Training | Client Projects</p>

        </div>

        {/* <div className="footer-links">

          <Link to="/">Home</Link>

          <Link to="/contact">Contact</Link>

        </div> */}

      </div>

      <div className="copyright">
        © 2026 ZORQENTA. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;