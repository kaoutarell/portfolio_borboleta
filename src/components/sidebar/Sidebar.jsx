"use client";
import React from "react";
import "./sidebar.css";

//addon : for smooth scrolling
import { Link } from "react-scroll";

const Sidebar = () => {
  return (
    <aside className="aside">
      <Link href="#home" className="nav__logo">
        <img src="/assets/logo.svg" alt="" />
      </Link>
      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-40}
                duration={900}
                href="#home"
                className="nav__link"
              >
                <i className="icon-home"></i>
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={900}
                href="#about"
                className="nav__link"
              >
                <i className="icon-user-following"></i>
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={900}
                href="#services"
                className="nav__link"
              >
                <i className="icon-briefcase"></i>
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="resume"
                spy={true}
                smooth={true}
                offset={-70}
                duration={900}
                href="#resume"
                className="nav__link"
              >
                <i className="icon-graduation"></i>
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={900}
                href="#portfolio"
                className="nav__link"
              >
                <i className="icon-layers"></i>
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="blog"
                spy={true}
                smooth={true}
                offset={-70}
                duration={900}
                href="#blog"
                className="nav__link"
              >
                <i className="icon-note"></i>
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={900}
                href="#contact"
                className="nav__link"
              >
                <i className="icon-bubble"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="nav__footer">
        <span className="copyright">&copy; 2025.</span>
      </nav>
    </aside>
  );
};

export default Sidebar;
