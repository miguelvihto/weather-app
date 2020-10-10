import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/components/Navbar.scss";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          <img className="logo" src="" alt="Logo" />
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
          <li className="navbar__item">
            <Link to="#" className="navbar__link">
              Language
            </Link>
          </li>
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
