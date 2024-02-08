// Navbar.js

import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbarBody">

      <div className="allItemsNavbar">
        <div className="navbarItems">
          <Link  className="linkCss"to="/">HOME</Link>
        </div>

        <div className="navbarItems">
          <Link  className="linkCss" to="bikes">ABOUT US</Link>
        </div>
        <div className="navbarItems">
          <Link  className="linkCss" to="bikes">ROOMS</Link>
        </div>
        <div className="navbarItems">
          <Link className="linkCss" to="/Packages">GALLERY</Link>
        </div>
      <div className="navbarLogo">LADAKH <br/> HEIGHTS</div>
        <div className="navbarItems">
          <Link  className="linkCss" to="/Taxi">ATTRACTION</Link>
        </div>

        <div className="navbarItems">
          <Link  className="linkCss"to="/destinations">TARIFF</Link>
        </div>

        <div className="navbarItems">
          <Link   className="linkCss" to="/contact">CONTACT</Link>
        </div>

      <div className="navbarItems">
        <Link  className="linkCss" to="/Login">BOOK NOW</Link>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
