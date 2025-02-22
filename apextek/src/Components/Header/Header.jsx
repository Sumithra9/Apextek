import React from "react";
import "./Header.css";
import { assets } from "../../assets/assests";

const Header = () => {
  return (
    <header className="header">
      <div className="overlay"></div>
      <div className="header-content">
        <h1>Welcome to Apextek</h1>
        <p>Innovative Solutions for a Better Tomorrow</p>
        <a href="#services" className="header-btn">Explore Services</a>
      </div>
    </header>
  );
};

export default Header;
