import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/N-icon.png";
import { Link } from "react-scroll";
import navMenu from "../../assets/menu.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="logoContainer">
        <img src={logo} alt="logo" className="logo" />
        <div className="name animate__animated animate__flipInX">Portfolio</div>
      </div>
      {/* Desktop Menu */}
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-400}
          duration={500}
          className="desktopMenuListItem"
        >
          About Me
        </Link>
        <Link
          activeClass="active"
          to="services"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          className="desktopMenuListItem"
        >
          Services
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Projects
        </Link>
      </div>
      <button
        className="desktopMenuBtn"
        onClick={() => {
          document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
        }}
      >
        Contact Me <span></span>
      </button>

      {/* Mobile Menu Icon */}
      <img
        src={navMenu}
        alt="Menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />

      {/* Mobile Menu */}
      <div className={`navMenu ${showMenu ? "active" : ""}`}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-400}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          About Me
        </Link>
        <Link
          activeClass="active"
          to="services"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Services
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
