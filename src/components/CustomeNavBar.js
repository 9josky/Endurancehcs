import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Sticky from "react-stickynode";
import logo1 from "../img/No5.svg";

function CustomeNavBar({ mClass, nClass, cClass, slogo, hbtnClass }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
      <header className="header_area">
        <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
          <div
            className={`container ${cClass}  d-flex align-items-center justify-content-between`}
          >
            <Link className={`navbar-brand ${slogo} flex-grow-1`} to="/">
              <img src={require("../img/No5copy.png")} alt="" height={"60px"} />
              <img
                src={require("../img/No1copy.png")}
                alt="logo"
                height={"60px"}
              />
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
                    title="Our Story"
                    className="nav-link"
                    to="/story"
                    exact
                    onClick={toggleNav}
                  >
                    Our Story
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
                    title="Career Opportunities"
                    className="nav-link"
                    to="/career"
                    exact
                    onClick={toggleNav}
                  >
                    Career
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
