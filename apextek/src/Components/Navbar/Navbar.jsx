import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assests";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={assets.logo} alt="Apextek Logo" />
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><a href="#">HOME</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">PRODUCT CATEGORIES</a></li>
        <li><a href="#">SERVICES</a></li>
        <li><a href="#">SOFTWARE SOLUTIONS</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
