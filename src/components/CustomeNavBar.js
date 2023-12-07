import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Sticky from "react-stickynode";

function CustomeNavBar({ mClass, nClass, cClass, slogo, hbtnClass }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
      <header className="header_area">
        <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
          <div className={`container ${cClass}`}>
            <Link className={`navbar-brand ${slogo}`} to="/">
              <img src={require("../img/logo2.png")} alt="" />
              <img src={require("../img/logo.png")} alt="logo" />
            </Link>
            <button
              className={`navbar-toggler ${isNavOpen ? "" : "collapsed"}`}
              type="button"
              onClick={toggleNav}
            >
              <span className="menu_toggle">
                <span className="hamburger">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <span className="hamburger-cross">
                  <span></span>
                  <span></span>
                </span>
              </span>
            </button>

            <div
              className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
              id="navbarSupportedContent"
            >
              <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                <li className="nav-item">
                  <NavLink
                    title="Our Service"
                    className="nav-link"
                    to="/service"
                    exact
                    onClick={toggleNav}
                  >
                    Service
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    title="About Us"
                    className="nav-link"
                    to="/about"
                    exact
                    onClick={toggleNav}
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    title="Team"
                    className="nav-link"
                    to="/team"
                    exact
                    onClick={toggleNav}
                  >
                    Team
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    title="Contact Us"
                    className="nav-link"
                    to="/contact"
                    exact
                    onClick={toggleNav}
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </Sticky>
  );
}

export default CustomeNavBar;
