// Header.js
import React, { useState } from "react";
import "./Header.css";
import logo from "../../static/logo-long.svg";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <nav className="header">
      <div className="logo-container">
        <img src={logo} className="logo" alt="Kultura i Historia logo" />
      </div>
      <button
        className="mobile-nav-toggle"
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
      >
        {isMobileNavOpen ? "Close" : "Menu"}
      </button>
      <ul className={`nav-list ${isMobileNavOpen ? "mobile-nav-open" : ""}`}>
      <span className="arrow"></span>
        <li>
          <a href="http://www.kulturaihistoria.umcs.lublin.pl/en/">Home</a>
        </li>
        <li>
          <a href="http://www.kulturaihistoria.umcs.lublin.pl/pl/kultura-i-histora-nr-42-2022-2">
            Latest Issue
          </a>
        </li>
        <li>
          <a href="http://www.kulturaihistoria.umcs.lublin.pl/pl/numery">
            Archives
          </a>
        </li>
        <li>
          <a href="http://www.kulturaihistoria.umcs.lublin.pl/pl/dla-autorow">
            For Authors
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
