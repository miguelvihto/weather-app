import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from '../assets/img/Logo.svg'
import "../styles/components/_Navbar.scss";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          <img className="logo" src={Logo} alt="Logo" />
        </Link>
        <div
          className={click ? "mobile-menu open" : "mobile-menu"}
          onClick={handleClick}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className={click ? "navbar__menu active" : "navbar__menu"}>
          <ul className="navbar__item">Language
            <li>
            <Link to="/" className="navbar__link translator" onClick={closeMobileMenu}>
              English
            </Link>
            </li>
            <li>
            <Link to="/" className="navbar__link translator" onClick={closeMobileMenu}>
              Spanish
            </Link>
            </li>
          </ul>
          <li className="navbar__item">
            <Link
              to="/about"
              className="navbar__link"
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
